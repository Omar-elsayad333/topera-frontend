import { PaletteOptions, SimplePaletteColorOptions } from '@mui/material'

const LIGHT_COLOR_PRIMARY: SimplePaletteColorOptions = {
  main: '#4E4EBC',
  contrastText: '#000000',
}

const LIGHT_COLOR_SECONDARY: SimplePaletteColorOptions = {
  main: '#000000',
  contrastText: '#000000',
}

const DARK_COLOR_PRIMARY: SimplePaletteColorOptions = {
  main: '#4E4EBC',
  contrastText: '#000000',
}

const DARK_COLOR_SECONDARY: SimplePaletteColorOptions = {
  main: '#fff',
  contrastText: '#000000',
}

/**
 * MUI light colors set to use in theme.palette
 */
export const LIGHT_PALETTE_COLORS: Partial<PaletteOptions> = {
  mode: 'light',
  primary: LIGHT_COLOR_PRIMARY,
  secondary: LIGHT_COLOR_SECONDARY,
  background: {
    paper: '#f5f5f5', // Gray 100 - Background of "Paper" based component
    default: '#F4F4FF',
  },
  // error: COLOR_ERROR,
  // warning: COLOR_WARNING;
  // info: COLOR_INFO;
  // success: COLOR_SUCCESS;
}

/**
 * MUI dark colors set to use in theme.palette
 */
export const DARK_PALETTE_COLORS: Partial<PaletteOptions> = {
  mode: 'dark',
  primary: DARK_COLOR_PRIMARY,
  secondary: DARK_COLOR_SECONDARY,
  background: {
    paper: '#424242', // Gray 800 - Background of "Paper" based component
    default: '#121212',
  },
  // error: COLOR_ERROR,
  // warning: COLOR_WARNING;
  // info: COLOR_INFO;
  // success: COLOR_SUCCESS;
}
