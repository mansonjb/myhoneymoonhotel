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

export function middleware(request: NextRequest) {
  const { pathname, search } = request.nextUrl
  const headers = new Headers(request.headers)
  headers.set('x-pathname', pathname)

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
