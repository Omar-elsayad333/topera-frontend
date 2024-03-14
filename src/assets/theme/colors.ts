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
  primary: LIGHT_COLOR_PRIMARY,
  secondary: LIGHT_COLOR_SECONDARY,
  background: {
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
  primary: DARK_COLOR_PRIMARY,
  secondary: DARK_COLOR_SECONDARY,
  // error: COLOR_ERROR,
  // warning: COLOR_WARNING;
  // info: COLOR_INFO;
  // success: COLOR_SUCCESS;
}
