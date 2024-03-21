import { PaletteOptions } from '@mui/material'

/**
 * MUI light colors set to use in theme.palette
 */
export const LIGHT_PALETTE_COLORS: Partial<PaletteOptions> = {
  mode: 'light',
  primary: {
    main: '#4E4EBC',
    contrastText: '#000000',
  },
  secondary: {
    main: '#000000',
    contrastText: '#000000',
  },
  error: {
    main: '#A61B1B',
  },
  success: {
    main: '#20C30D',
  },
  background: {
    paper: '#fff',
    default: '#F4F4FF',
  },
}

/**
 * MUI dark colors set to use in theme.palette
 */
export const DARK_PALETTE_COLORS: Partial<PaletteOptions> = {
  mode: 'dark',
  primary: {
    main: '#4E4EBC',
    contrastText: '#000000',
  },
  secondary: {
    main: '#fff',
    contrastText: '#000000',
  },
  error: {
    main: '#A61B1B',
  },
  success: {
    main: '#20C30D',
  },
  background: {
    // paper: 'red', // Gray 800 - Background of "Paper" based component
    default: '#121212',
  },
}
