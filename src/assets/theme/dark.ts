import { typography } from './typography'
import { components } from './components'
import { ThemeOptions } from '@mui/material'
import { DARK_PALETTE_COLORS } from './colors'

/**
 * MUI theme options for "Dark Mode"
 */
export const DARK_THEME: ThemeOptions = {
  typography,
  components,
  direction: 'rtl',
  palette: {
    ...DARK_PALETTE_COLORS,
  },
}

export const createDarkTheme = (locale: string) => {
  locale === 'ltr' && (DARK_THEME.direction = 'ltr')
  return DARK_THEME
}
