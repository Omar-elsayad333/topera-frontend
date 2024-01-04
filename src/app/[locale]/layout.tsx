import type { Metadata } from 'next'

// Styles
import '@/assets/globals.css'
import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'

// Types

// Contexts
import MuiTheme from '@/assets/themes'
import { AlertProvider } from '@/contexts/AlertContext'
import { ThemeProvider } from '@/contexts/ThemeContext'
import { DictionaryProvider } from '@/contexts/DictionaryContext'

// Containers
import { getDictionary } from '@/containers/lang'

// Components
import NavbarComponent from '@/components/layout/NavbarComponent'
import FooterComponent from '@/components/layout/FooterComponent'

// MUI
import Container from '@mui/material/Container'
import AlertNotify from '@/components/shared/AlertComponent/AlertNotify'

interface IProps {
  params: any
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
        <DictionaryProvider dictionary={dict}>
          <ThemeProvider>
            <MuiTheme>
              <AlertProvider>
                <NavbarComponent />
                <main>
                  <Container sx={{ mt: '70px' }}>{children}</Container>
                  <AlertNotify />
                </main>
                <FooterComponent />
              </AlertProvider>
            </MuiTheme>
          </ThemeProvider>
        </DictionaryProvider>
      </body>
    </html>
  )
}
