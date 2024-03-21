import { NextRequest, NextResponse } from 'next/server'

// Next auth
import { withAuth } from 'next-auth/middleware'

// Next intl
import createIntlMiddleware from 'next-intl/middleware'

// Config
import { middlewares } from '@/middlewares'

// Constants
import { localesArray } from '@/constants'

// Routes
import { Routes, getPrivateRoutes, getPublicRoutes } from '@/routes/routes'

const locales = localesArray
const publicPages = getPublicRoutes()
const privatePages = getPrivateRoutes()

const intlMiddleware = createIntlMiddleware({
  locales,
  defaultLocale: localesArray[0],
})

const authMiddleware = withAuth(
  // Note that this callback is only invoked if
  // the `authorized` callback has returned `true`
  // and not for pages listed in `pages`.
  function onSuccess(req) {
    return intlMiddleware(req)
  },
  {
    secret: process.env.NEXT_PUBLIC_AUTH_SECRET,
    callbacks: {
      authorized: ({ token }) => token != null,
    },
    pages: {
      signIn: Routes.login,
    },
  }
)

export default async function middleware(request: NextRequest) {
  // Loop through middleware functions
  for (const middleware of middlewares) {
    // Execute middleware function and await the result
    await middleware(request)
  }

  const publicPathnameRegex = RegExp(
    `^(/(${locales.join('|')}))?(${publicPages.flatMap((p) => (p === '/' ? ['', '/'] : p)).join('|')})/?$`,
    'i'
  )
  const privatePathnameRegex = RegExp(
    `^(/(${locales.join('|')}))?(${privatePages.flatMap((p) => (p === '/' ? ['', '/'] : p)).join('|')})/?$`,
    'i'
  )
  const isPublicPage = publicPathnameRegex.test(request.nextUrl.pathname)
  const isPrivatePage = privatePathnameRegex.test(request.nextUrl.pathname)

  if (isPublicPage) {
    return intlMiddleware(request)
  } else if (isPrivatePage) {
    return (authMiddleware as any)(request)
  } else {
    return NextResponse.next()
  }
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image).*)'],
}
