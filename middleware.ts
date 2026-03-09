import { NextRequest, NextResponse } from 'next/server'

const locales = ['en', 'de', 'it', 'es', 'nl', 'fr']
const defaultLocale = 'en'

function getLocaleFromRequest(request: NextRequest): string {
  // Check URL path
  const pathname = request.nextUrl.pathname
  const pathnameLocale = locales.find(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  )
  if (pathnameLocale) return pathnameLocale

  // Check cookie
  const localeCookie = request.cookies.get('NEXT_LOCALE')?.value
  if (localeCookie && locales.includes(localeCookie)) return localeCookie

  // Check Accept-Language header
  const acceptLanguage = request.headers.get('accept-language')
  if (acceptLanguage) {
    const preferred = acceptLanguage
      .split(',')[0]
      .split('-')[0]
      .toLowerCase()
    if (locales.includes(preferred)) return preferred
  }

  return defaultLocale
}

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname
  const referer = request.headers.get('referer')

  // Track if request came from old domain (for migration analytics)
  // This header will be visible in GA4 referrer reports automatically
  if (referer) {
    // GA4 will capture the full referer URL in acquisition reports
    // no additional code needed here
  }

  // Skip middleware for non-page requests
  if (
    pathname.startsWith('/_next') ||
    pathname.startsWith('/api') ||
    pathname.includes('.')
  ) {
    return NextResponse.next()
  }

  // Check if pathname already has a locale
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  )

  if (pathnameHasLocale) {
    return NextResponse.next()
  }

  // Redirect to locale-prefixed path
  const locale = getLocaleFromRequest(request)
  const response = NextResponse.redirect(
    new URL(`/${locale}${pathname === '/' ? '' : pathname}`, request.url)
  )
  response.cookies.set('NEXT_LOCALE', locale)
  return response
}

export const config = {
  matcher: [
    // Skip all internal paths (_next, etc.)
    '/((?!_next|api|favicon.ico).*)',
  ],
}
