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

const SUPPORTED = ['es', 'pt'] as const
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
    if (primary === 'es' || primary === 'pt') return primary as Locale
  }
  return null
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
    return res
  }

  return NextResponse.next({ request: { headers } })
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|api|.*\\..*).*)'],
}
