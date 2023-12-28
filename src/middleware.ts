import { NextRequest } from 'next/server'
import { NextResponse } from 'next/server'

let locales = ['en', 'ar']

export function middleware(request: NextRequest) {
  // Check if there is any supported locale in the pathname
  const { pathname } = request.nextUrl

  if (pathname === '/vercel.svg' || pathname === '/next.svg') return

  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`,
  )

  const pathLocale = pathname.split('/')[1]
  const response = NextResponse.next()

  if (locales.includes(pathLocale)) {
    // Set a lang cookie
    response.cookies.set('locale', pathLocale)
  }

  if (pathnameHasLocale) return response

  // Redirect if there is no locale
  request.nextUrl.pathname = `/${locales[0]}${pathname}`

  // e.g. incoming request is /*
  // The new URL is now /en/*
  return Response.redirect(request.nextUrl)
}

export const config = {
  matcher: [
    // Skip all internal paths (_next)
    '/((?!_next).*)',
    // Optional: only run on root (/) URL
    // '/'
  ],
}
