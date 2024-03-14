import { typography } from './typography'
import { ThemeOptions } from '@mui/material'
import { DARK_PALETTE_COLORS } from './colors'

/**
 * MUI theme options for "Dark Mode"
 */
export const DARK_THEME: ThemeOptions = {
  palette: {
    mode: 'dark',
    background: {
      paper: '#424242', // Gray 800 - Background of "Paper" based component
      default: '#121212',
    },
    ...DARK_PALETTE_COLORS,
  },
  typography: typography,
  direction: 'rtl',
}

export const createDarkTheme = (locale: string) => {
  locale === 'ltr' && (DARK_THEME.direction = 'ltr')
  return DARK_THEME
}
