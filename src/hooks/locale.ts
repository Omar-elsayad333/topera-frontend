'use client'

import { useParams, usePathname, useRouter } from 'next/navigation'

// Cookies
import { setCookie } from 'cookies-next'

// Config
import env from '@/config/env'

export function useLocale() {
  const router = useRouter()
  const params = useParams()
  const pathname = usePathname()
  const localeCookieKey = env.locale

  const changeLocale = (selectedLocale: string) => {
    setCookie(localeCookieKey || 'LOCALE', selectedLocale)
    router.push(`/${selectedLocale}${pathname.split(`/${params.locale}`)[1]}`)
  }

  const addLocale = (value: string) => {
    const adjustedValue = value[0] === '/' ? `/${params.locale}${value}` : `/${params.locale}/${value}`
    return adjustedValue
  }

  const comparePathnames = (selectedPath: string) => {
    const pathWithLocale = `/${params.locale}${selectedPath}`
    return pathWithLocale === pathname || pathWithLocale === `${pathname}/`
  }

  return { changeLocale, comparePathnames, addLocale }
}
