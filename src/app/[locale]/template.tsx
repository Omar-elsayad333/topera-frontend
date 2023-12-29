import '@/assets/globals.css'
import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'

import ThemeApp from '@/assets/themes'
import { AlertProvider } from '@/contexts/AlertContext'
import { DarkThemeProvider } from '@/contexts/ThemeContext'

export default function RootTemplate({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <DarkThemeProvider>
        <ThemeApp>
          <AlertProvider>
            <main>{children}</main>
          </AlertProvider>
        </ThemeApp>
      </DarkThemeProvider>
    </div>
  )
}
