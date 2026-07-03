import { NextRequest, NextResponse } from 'next/server'

/**
 * Middleware:
 *   1. Inject `x-pathname` header so server components (RootLayout) can detect
 *      the current path and resolve the locale prefix without `params`.
 *   2. First-visit locale detection — if the user lands on the English root
 *      and Accept-Language prefers Spanish or Portuguese, redirect to the
 *      localized tree. Bots/crawlers and explicit-cookie users are skipped to
 *      preserve SEO indexability of every locale's URL set.
 */

const SUPPORTED = ['es', 'pt', 'fr'] as const
type Locale = typeof SUPPORTED[number]

// Match common search-engine + social crawlers — they MUST see content as-is
// at every URL (no auto-redirect) so each locale's pages get crawled & indexed.
const BOT_UA_REGEX = /(bot|crawler|spider|crawling|googlebot|bingbot|slurp|duckduckbot|baiduspider|yandex|sogou|exabot|facebot|facebookexternalhit|whatsapp|telegrambot|twitterbot|linkedinbot|applebot|petalbot|ahrefs|semrush|mj12bot|dotbot|seokicks|pinterest|discordbot|skypeuripreview|screaming frog|lighthouse|chrome-lighthouse|gtmetrix|pagespeed)/i

function pickLocaleFromAcceptLang(header: string | null): Locale | null {
  if (!header) return null
  // Parse e.g. "pt-BR,pt;q=0.9,es;q=0.8,en;q=0.5" → ranked codes
  const parts = header.split(',').map(s => {
    const [tag, q] = s.trim().split(';q=')
    return { tag: tag.trim().toLowerCase(), q: q ? Number(q) : 1 }
  }).filter(p => p.tag).sort((a, b) => b.q - a.q)
  for (const { tag } of parts) {
    const primary = tag.split('-')[0] // pt-BR → pt
    if (primary === 'es' || primary === 'pt' || primary === 'fr') return primary as Locale
  }
  return null
}

// Edge-safe 16-char ID generator (no external dep). crypto.randomUUID is available
// in Edge runtime and returns e.g. "1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed"; we strip
// hyphens and slice to 16 hex chars.
function makeSid(): string {
  return crypto.randomUUID().replace(/-/g, '').slice(0, 16)
}

// Strictly-necessary first-party attribution cookies. These are required for our
// affiliate business model (joining outbound clicks to landing context) and do NOT
// require consent under GDPR/ePrivacy art. 5(3) "strictly necessary" carve-out.
// No PII, no cross-site tracking, no third-party. User can clear via browser settings.
function applyAttributionCookies(request: NextRequest, res: NextResponse): void {
  const { pathname, searchParams } = request.nextUrl

  // Skip on static / api / next internals — no attribution value, just bloat.
  const isStatic =
    pathname.startsWith('/_next') ||
    pathname.startsWith('/api') ||
    pathname.includes('.')
  if (isStatic) return

  const THIRTY_DAYS = 60 * 60 * 24 * 30
  const nowIso = new Date().toISOString()

  // 1. Session ID — random, opaque, no PII. Readable client-side for joining with
  //    affiliate click events later (httpOnly: false intentional).
  if (!request.cookies.get('mhh_sid')) {
    res.cookies.set('mhh_sid', makeSid(), {
      path: '/',
      maxAge: THIRTY_DAYS,
      sameSite: 'lax',
      secure: true,
      httpOnly: false,
    })
  }

  // 2. First-seen timestamp — for cohort/recency math.
  if (!request.cookies.get('mhh_first_seen')) {
    res.cookies.set('mhh_first_seen', nowIso, {
      path: '/',
      maxAge: THIRTY_DAYS,
      sameSite: 'lax',
      secure: true,
      httpOnly: false,
    })
  }

  // 3. Entrance context — referrer + UTM params + landing path, captured ONCE per
  //    session. Subsequent navigations don't overwrite (we want the FIRST touch).
  if (!request.cookies.get('mhh_entrance')) {
    const entrance = {
      ref: request.headers.get('referer') || '',
      utm_source: searchParams.get('utm_source') || '',
      utm_medium: searchParams.get('utm_medium') || '',
      utm_campaign: searchParams.get('utm_campaign') || '',
      utm_term: searchParams.get('utm_term') || '',
      utm_content: searchParams.get('utm_content') || '',
      landing: pathname,
      t: nowIso,
    }
    res.cookies.set('mhh_entrance', JSON.stringify(entrance), {
      path: '/',
      maxAge: THIRTY_DAYS,
      sameSite: 'lax',
      secure: true,
      httpOnly: false,
    })
  }
}

// Long-tail routes that only exist in EN. When Google hits a /fr/, /es/, or
// /pt/ variant, 301-redirect to the EN equivalent instead of 404. Root cause:
// prior to the June 21 hreflang fix, the sitemap advertised /fr/xxx alternates
// blindly. Google indexed ~319 of these locale-prefixed URLs; they now 404
// because the Next.js route tree only ships the EN version. 301s clean the
// index and preserve link juice.
const LOCALE_ONLY_EN_PATTERNS: readonly RegExp[] = [
  /^\/(fr|es|pt)\/honeymoon-under-\d+$/,
  /^\/(fr|es|pt)\/honeymoon-in-(january|february|march|april|may|june|july|august|september|october|november|december)$/,
  /^\/(fr|es|pt)\/\d+-day-honeymoon$/,
  /^\/(fr|es|pt)\/honeymoon-for-[^/]+$/,
  /^\/(fr|es|pt)\/itineraries(?:\/.+)?$/,
  /^\/(fr|es|pt)\/compare\/destinations\/.+$/,
  /^\/(fr|es|pt)\/compare\/hotels\/.+$/,
  /^\/(fr|es|pt)\/honeymoon-in\/[^/]+$/,
  /^\/(fr|es|pt)\/experiences(?:\/.+)?$/,
  /^\/(fr|es|pt)\/honeymoon-on-a-budget$/,
  /^\/(fr|es|pt)\/honeymoon-packing-list$/,
  /^\/(fr|es|pt)\/last-minute-honeymoon$/,
  /^\/(fr|es|pt)\/luxury-honeymoon$/,
]

// Destinations that never shipped FR/ES/PT overlay content but were briefly
// advertised via hreflang. Redirect their locale URLs to EN.
const LOCALE_ONLY_EN_DESTINATIONS_RE = /^\/(fr|es|pt)\/destinations\/(austria|hokkaido|andalusia|kerala|slovenia|ireland|banff|scotland|quebec|lake-garda|big-sur|bavaria|venice|puglia|capri|cotswolds|burgundy|singapore|dolomites|riviera-maya|tasmania|algarve|cook-islands|dominican-republic|saint-vincent-grenadines|faroe-islands|grenada|crete|cyprus|curacao|bermuda|mallorca|cartagena|belize|provence|cinque-terre|madeira|patagonia-chile|cote-dazur|loire-valley|champagne)(?:\/.+)?$/

function shouldRedirectLocaleToEn(pathname: string): string | null {
  if (LOCALE_ONLY_EN_PATTERNS.some(re => re.test(pathname))) {
    return pathname.replace(/^\/(fr|es|pt)/, '')
  }
  if (LOCALE_ONLY_EN_DESTINATIONS_RE.test(pathname)) {
    return pathname.replace(/^\/(fr|es|pt)/, '')
  }
  return null
}

export function middleware(request: NextRequest) {
  const { pathname, search } = request.nextUrl
  const headers = new Headers(request.headers)
  headers.set('x-pathname', pathname)

  // 301 stale locale-prefixed URLs (Google-indexed pre-June-21) to their EN
  // equivalent — closes the ~319 GSC 404s reported after the hreflang fix.
  const enTarget = shouldRedirectLocaleToEn(pathname)
  if (enTarget) {
    const target = new URL(`${enTarget}${search}`, request.url)
    return NextResponse.redirect(target, 301)
  }

  // Skip locale detection on static / api / files / next internals — handled by matcher,
  // but be defensive in case matcher list changes.
  const isStatic =
    pathname.startsWith('/_next') ||
    pathname.startsWith('/api') ||
    pathname.includes('.') // .ico, .txt, .xml, .webp, etc.

  // Skip if user already navigated to a localized tree. Their explicit URL choice wins.
  const alreadyLocalized = SUPPORTED.some(loc => pathname === `/${loc}` || pathname.startsWith(`/${loc}/`))

  // Skip if user previously dismissed/accepted a locale (cookie set by client or by prior redirect).
  const localePref = request.cookies.get('mhm_locale')?.value

  // Skip bots — every locale's URL must remain crawlable as-is.
  const ua = request.headers.get('user-agent') || ''
  const isBot = BOT_UA_REGEX.test(ua)

  if (!isStatic && !alreadyLocalized && !localePref && !isBot && pathname !== '/api/newsletter') {
    const detected = pickLocaleFromAcceptLang(request.headers.get('accept-language'))
    if (detected) {
      const target = new URL(`/${detected}${pathname === '/' ? '' : pathname}${search}`, request.url)
      const res = NextResponse.redirect(target, 307)
      // Persist for 1 year — user can override by switching language in UI (which sets the cookie).
      res.cookies.set('mhm_locale', detected, {
        path: '/',
        maxAge: 60 * 60 * 24 * 365,
        sameSite: 'lax',
        secure: true,
      })
      applyAttributionCookies(request, res)
      return res
    }
    // No detected non-English preference → stay at EN root and remember.
    const res = NextResponse.next({ request: { headers } })
    res.cookies.set('mhm_locale', 'en', {
      path: '/',
      maxAge: 60 * 60 * 24 * 365,
      sameSite: 'lax',
      secure: true,
    })
    applyAttributionCookies(request, res)
    return res
  }

  const res = NextResponse.next({ request: { headers } })
  applyAttributionCookies(request, res)
  return res
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|api|.*\\..*).*)'],
}
