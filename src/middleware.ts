import { NextRequest, NextResponse } from 'next/server'

/**
 * Inject `x-pathname` so server components (RootLayout) can detect the
 * current path and resolve the locale prefix without relying on `params`.
 */
export function middleware(request: NextRequest) {
  const headers = new Headers(request.headers)
  headers.set('x-pathname', request.nextUrl.pathname)
  return NextResponse.next({ request: { headers } })
}

export const config = {
  // Skip all internal/static assets and API routes — we only need the path on rendered pages.
  matcher: ['/((?!_next/static|_next/image|api|.*\\..*).*)'],
}
