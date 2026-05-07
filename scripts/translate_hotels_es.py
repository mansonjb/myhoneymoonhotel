#!/usr/bin/env python3
"""
Translate the 65 hotel JSON files EN -> neutral Spanish (luxury concierge tone,
Conde Nast Traveler en espanol register, formal "usted").

Usage:
    export ANTHROPIC_API_KEY=sk-ant-...
    python3 scripts/translate_hotels_es.py

Idempotent: skips any slug whose target file already exists.
"""
import json, sys, concurrent.futures
from pathlib import Path

try:
    import anthropic
except ImportError:
    print("Install the SDK first:  pip install anthropic", file=sys.stderr)
    sys.exit(1)

ROOT = Path(__file__).resolve().parent.parent
SRC = ROOT / "data" / "hotels"
DST = ROOT / "data" / "i18n" / "es" / "hotels"
DST.mkdir(parents=True, exist_ok=True)

SLUGS = """alexandra-resort-turks-and-caicos alila-jabal-akhdar-oman alila-ubud-bali alila-villas-uluwatu-bali alvear-palace-hotel-buenos-aires-argentina aman-kyoto-japan amandari-ubud-bali amanemu-ise-shima-japan amanjena-marrakech-morocco amanjiwo-borobudur-indonesia amankila-candidasa-bali amankora-bumthang-bhutan amankora-gangtey-bhutan amankora-paro-bhutan amankora-punakha-bhutan amankora-thimphu-bhutan amanoi-ninh-thuan-vietnam amanpulo-pamalican-philippines amanpuri-phuket-thailand amansara-siem-reap-cambodia amanwella-tangalle-sri-lanka amanyara-turks-caicos amanzoe-porto-heli-greece ambergris-cay-private-island-resort-turks-caicos-all-inclusive-turks-and-caicos amilla-maldives-resort-residences aminess-grand-azur-orebic-croatia amman-rotana-jordan anantara-al-baleed-salalah-oman anantara-al-jabal-al-akhdar-oman anantara-angkor-resort-cambodia anantara-bazaruto-island-mozambique anantara-hoi-an-resort-vietnam anantara-kihavah-maldives-villas-maldives anantara-maia-seychelles-villas-seychelles anantara-peace-haven-tangalle-sri-lanka anantara-qasr-al-sarab-uae anantara-rasananda-koh-phangan-thailand anantara-veli-maldives-resort-maldives anantara-vilamoura-algarve-portugal andaz-maui-wailea-hawaii andbeyond-benguerra-island-mozambique andbeyond-lake-manyara-tree-lodge-tanzania andbeyond-mnemba-island-zanzibar andbeyond-ngorongoro-crater-lodge-tanzania andbeyond-sandibe-okavango-botswana andronis-concept-wellness-santorini andronis-luxury-suites-santorini arctic-treehouse-hotel-finland arenas-del-mar-manuel-antonio-costa-rica argos-in-cappadocia-turkey aruba-marriott-stellaris-aruba astra-suites-imerovigli-santorini atlantis-the-royal-dubai-uae aurora-anguilla-resort-golf-club-anguilla ayada-maldives-maldives azur-lodge-queenstown-new-zealand azura-benguerra-island-mozambique azura-quilalea-private-island-mozambique badrutts-palace-hotel-st-moritz-switzerland baglioni-resort-sardinia bairro-alto-hotel-lisbon-portugal banyan-tree-mayakoba-mexico banyan-tree-phuket-thailand baraza-resort-spa-zanzibar baros-maldives-resort""".split()

SYSTEM = """You are a senior translator for a luxury honeymoon-hotel publication (register: Conde Nast Traveler en espanol). Translate from English into NEUTRAL Spanish suitable for both Spain and Latin America.

RULES (non-negotiable):
- Formal "usted" / "ustedes" form throughout. Never "tu" or "vosotros".
- Tone: refined concierge, evocative, idiomatic - never literal. Vary sentence rhythm.
- Avoid regionalisms. Use "piscina" (not "alberca"). Prefer pan-Hispanic vocabulary.
- Glossary:
    "honeymoon" -> "luna de miel"
    "honeymooners" -> "parejas en luna de miel"
    "Adults-Only" -> "Solo adultos"
    "Overwater Villa" -> "Villa sobre el agua"
    "Beachfront" -> "Frente al mar"
    "From $X/night" -> "Desde $X/noche"
    "infinity pool" -> "piscina infinita"
    "plunge pool" -> "plunge pool" (keep) or "piscina privada"
    "butler" -> "mayordomo"
    "all-inclusive" -> "todo incluido"
- KEEP unchanged: hotel/brand/place proper nouns, restaurant names, currency codes, numerics.
- Output ONLY valid JSON - no commentary, no markdown fences."""

USER_TMPL = """Translate the following hotel content into neutral Spanish per the system rules.

Output a JSON object with EXACTLY this shape (canonical keys):
{{
  "verdict": "...",
  "best_room": "...",
  "itinerary_7_nights": [{{"day": N, "title": "...", "description": "..."}}, ...],
  "caveats": ["...", ...],
  "faqs": [{{"question": "...", "answer": "..."}}, ...],
  "email_template": "..."
}}

Preserve "day" numbers exactly. Preserve newlines (\\n) inside email_template.

SOURCE (English):
{src}
"""

MODEL = "claude-opus-4-5"   # change to claude-sonnet-4-5 for cheaper/faster
client = anthropic.Anthropic()


def pick(obj, *names):
    for n in names:
        if isinstance(obj, dict) and obj.get(n) is not None:
            return obj[n]
    return None


def normalize(content):
    src = {
        "verdict": content.get("verdict", "") or "",
        "best_room": content.get("best_room", "") or "",
        "itinerary_7_nights": [],
        "caveats": pick(content, "caveats", "honest_caveats") or [],
        "faqs": [],
        "email_template": pick(content, "email_template", "hotel_email_template") or "",
    }
    for it in content.get("itinerary_7_nights") or []:
        src["itinerary_7_nights"].append({
            "day": it.get("day"),
            "title": it.get("title", "") or "",
            "description": it.get("description", "") or "",
        })
    for f in pick(content, "faqs", "faq") or []:
        src["faqs"].append({
            "question": pick(f, "question", "q") or "",
            "answer": pick(f, "answer", "a") or "",
        })
    return src


def strip_fence(text):
    text = text.strip()
    if text.startswith("```"):
        lines = text.split("\n")
        lines = lines[1:]
        if lines and lines[-1].startswith("```"):
            lines = lines[:-1]
        text = "\n".join(lines)
    return text


def translate(slug):
    src_path = SRC / f"{slug}.json"
    dst_path = DST / f"{slug}.json"
    if dst_path.exists():
        return (slug, "skipped-exists", None)
    if not src_path.exists():
        return (slug, "missing-source", None)
    raw = json.loads(src_path.read_text())
    norm = normalize(raw.get("content", {}))
    prompt = USER_TMPL.format(src=json.dumps(norm, ensure_ascii=False, indent=2))

    last_err = None
    for attempt in range(3):
        try:
            resp = client.messages.create(
                model=MODEL,
                max_tokens=8000,
                system=SYSTEM,
                messages=[{"role": "user", "content": prompt}],
            )
            text = strip_fence(resp.content[0].text)
            translated = json.loads(text)
            out = {"content": {
                "verdict": translated["verdict"],
                "best_room": translated["best_room"],
                "itinerary_7_nights": translated["itinerary_7_nights"],
                "caveats": translated["caveats"],
                "faqs": translated["faqs"],
                "email_template": translated["email_template"],
            }}
            dst_path.write_text(json.dumps(out, ensure_ascii=False, indent=2))
            json.loads(dst_path.read_text())  # validate
            return (slug, "ok", None)
        except Exception as e:
            last_err = f"{type(e).__name__}: {str(e)[:200]}"
    return (slug, "error", last_err)


def main():
    print(f"Translating {len(SLUGS)} hotels with model={MODEL}...", flush=True)
    results = []
    with concurrent.futures.ThreadPoolExecutor(max_workers=8) as ex:
        futs = {ex.submit(translate, s): s for s in SLUGS}
        for fut in concurrent.futures.as_completed(futs):
            slug, status, err = fut.result()
            line = f"  [{status}] {slug}" + (f" :: {err}" if err else "")
            print(line, flush=True)
            results.append((slug, status, err))
    ok = sum(1 for _, s, _ in results if s == "ok")
    skipped = sum(1 for _, s, _ in results if s == "skipped-exists")
    failed = [(s, e) for s, st, e in results if st not in ("ok", "skipped-exists")]
    print(f"\n=== SUMMARY ===\nOK: {ok}  Skipped: {skipped}  Failed: {len(failed)}")
    for s, e in failed:
        print(f"  FAIL {s}: {e}")


if __name__ == "__main__":
    main()
