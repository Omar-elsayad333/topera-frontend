import type { Metadata } from 'next'
import { PropsWithChildren } from 'react'

// Styles
import '@/assets/globals.css'
import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'

// Services
import { getServerAuthSession } from '@/services/auth'

// Components
import AppProviers from '@/components/layout/AppProviders'

interface IProps extends PropsWithChildren {
  params: {
    locale: string
  }
}

export const metadata: Metadata = {
  title: {
    template: '%s | Topera',
    default: 'Topera - High with Sci-AI',
  },
  description:
    'The coming era of Artificial Intelligence will not be the era of war, but be the era of deep compassion, non-violence, and love.',
}

export default async function RootLayout({ children, params }: IProps) {
  const locale = params.locale

  const session = await getServerAuthSession()

  return (
    <html lang={locale} dir={locale === 'ar' ? 'rtl' : 'ltr'}>
      <body>
        <AppProviers {...{ locale, session }}>{children}</AppProviers>
      </body>
    </html>
  )
}
