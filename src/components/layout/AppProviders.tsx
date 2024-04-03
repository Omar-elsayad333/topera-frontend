import { PropsWithChildren } from 'react'

// Contexts
import { AppStoreProvider } from '@/stores'
import { AlertProvider } from '@/stores/AlertContext'

// Next Intl
import { NextIntlClientProvider, useMessages } from 'next-intl'

// Theme
import ThemeProvider from '@/assets/theme/ThemeProvider'

// Components
import AlertNotify from '@/components/shared/AlertComponent/AlertNotify'

interface IProps extends PropsWithChildren {
  session: any
  locale: string
}

const AppProviers = ({ children, locale, session }: IProps) => {
  // Receive messages provided in `i18n.ts`
  const messages = useMessages()

  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      <AppStoreProvider session={session} locale={locale}>
        <ThemeProvider>
          <AlertProvider>
            {children}
            <AlertNotify />
          </AlertProvider>
        </ThemeProvider>
      </AppStoreProvider>
    </NextIntlClientProvider>
  )
}

export default AppProviers
