import type { Metadata } from 'next'

// Styles
import '@/assets/globals.css'
import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'

// Contexts
import { AppStoreProvider } from '@/stores'
// import { AlertProvider } from "@/stores/AlertContext";

// Next Intl
import { NextIntlClientProvider, useMessages } from 'next-intl'

// Theme
import ThemeProvider from '@/assets/theme/ThemeProvider'

// Components
import Layout from '@/components/layout'
import AlertNotify from '@/components/shared/AlertComponent/AlertNotify'

interface IProps {
  params: {
    locale: string
  }
  children: React.ReactNode
}

export const metadata: Metadata = {
  title: {
    template: '%s | Topera',
    default: 'Topera - High with Sci-AI',
  },
  description:
    'The coming era of Artificial Intelligence will not be the era of war, but be the era of deep compassion, non-violence, and love.',
}

export default function RootLayout({ children, params }: IProps) {
  const locale = params.locale

  // Receive messages provided in `i18n.ts`
  const messages = useMessages()

  return (
    <html lang={locale} dir={locale === 'ar' ? 'rtl' : 'ltr'}>
      <body>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <AppStoreProvider locale={locale}>
            <ThemeProvider>
              {/* <AlertProvider> */}
              {children}
              {/* <AlertNotify /> */}
              {/* </AlertProvider> */}
            </ThemeProvider>
          </AppStoreProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
