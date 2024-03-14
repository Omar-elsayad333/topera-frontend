import type { Metadata } from 'next'

// Styles
import '@/assets/globals.css'
import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'

// Contexts
import { AppStoreProvider } from '@/stores'
import { AlertProvider } from '@/contexts/AlertContext'
import { DictionaryProvider } from '@/contexts/DictionaryContext'

// Theme
import { ThemeProvider } from '@/assets/theme'

// Config
import { getDictionary } from '@/config/locale'

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

export default async function RootLayout({ children, params }: IProps) {
  const dict = await getDictionary(params.locale)

  return (
    <html lang={params.locale} dir={params.locale === 'ar' ? 'rtl' : 'ltr'}>
      <body>
        <AppStoreProvider locale={params.locale}>
          <ThemeProvider>
            <DictionaryProvider dictionary={dict}>
              <AlertProvider>
                <Layout>
                  <main>{children}</main>
                  <AlertNotify />
                </Layout>
              </AlertProvider>
            </DictionaryProvider>
          </ThemeProvider>
        </AppStoreProvider>
      </body>
    </html>
  )
}
