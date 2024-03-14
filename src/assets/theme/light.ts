import { typography } from './typography'
import { ThemeOptions } from '@mui/material'
import { LIGHT_PALETTE_COLORS } from './colors'

/**
 * MUI theme options for "Light Mode"
 */
export const LIGHT_THEME: ThemeOptions = {
  palette: {
    mode: 'light',
    background: {
      paper: '#f5f5f5', // Gray 100 - Background of "Paper" based component
      default: '#FFFFFF',
    },
    ...LIGHT_PALETTE_COLORS,
  },
  typography: typography,
  direction: 'rtl',
}

export const createLightTheme = (locale: string) => {
  locale === 'ltr' && (LIGHT_THEME.direction = 'ltr')
  return LIGHT_THEME
}
