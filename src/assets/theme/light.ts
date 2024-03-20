import { typography } from './typography'
import { ThemeOptions } from '@mui/material'
import { LIGHT_PALETTE_COLORS } from './colors'
import { components } from './components'

/**
 * MUI theme options for "Light Mode"
 */
export const LIGHT_THEME: ThemeOptions = {
  typography,
  components,
  direction: 'rtl',
  palette: {
    ...LIGHT_PALETTE_COLORS,
  },
}

export const createLightTheme = (locale: string) => {
  locale === 'ltr' && (LIGHT_THEME.direction = 'ltr')
  return LIGHT_THEME
}
