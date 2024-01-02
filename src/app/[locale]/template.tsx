import '@/assets/globals.css'
import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'

import MuiTheme from '@/assets/themes'
import { AlertProvider } from '@/contexts/AlertContext'
import { ThemeProvider } from '@/contexts/ThemeContext'

export default function RootTemplate({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider>
      <MuiTheme>
        <AlertProvider>
          <>{children}</>
        </AlertProvider>
      </MuiTheme>
    </ThemeProvider>
  )
}
