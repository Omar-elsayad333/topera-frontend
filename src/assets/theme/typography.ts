import { TypographyOptions } from '@mui/material/styles/createTypography'

export enum Fonts {
  LIGHT = 300,
  REGULAR = 400,
  MEDIUM = 500,
  SEMI_BOLD = 600,
  BOLD = 700,
}

export const typography: TypographyOptions = {
  fontFamily: `Poppins, sans-serif`,
  h1: {
    fontWeight: Fonts.BOLD,
    fontSize: '3.5rem',
  },
  h2: {
    fontWeight: Fonts.BOLD,
    fontSize: '3rem',
  },
  h3: {
    fontWeight: Fonts.BOLD,
    fontSize: '2.5rem',
  },
  h4: {
    fontWeight: Fonts.SEMI_BOLD,
    fontSize: '2rem',
  },
  h5: {
    fontWeight: Fonts.MEDIUM,
    fontSize: '1.5rem',
  },
  h6: {
    fontWeight: Fonts.MEDIUM,
    fontSize: '1rem',
  },
  subtitle1: {
    fontWeight: Fonts.LIGHT,
    fontSize: '0.875rem',
  },
  subtitle2: {
    fontWeight: Fonts.LIGHT,
    fontSize: '0.75rem',
  },
  body1: {
    fontWeight: Fonts.REGULAR,
    fontSize: '1.125rem',
  },
  body2: {
    fontWeight: Fonts.REGULAR,
    fontSize: '1rem',
  },
  //   caption: {
  //     fontWeight: Fonts.REGULAR,
  //     fontSize: '0.75rem',
  //   },
  //   button: {
  //     fontWeight: Fonts.MEDIUM,
  //     fontSize: '1.25rem',
  //   },
  //   overline: {
  //     fontWeight: Fonts.REGULAR,
  //     fontSize: '0.75rem',
  //   },
}
