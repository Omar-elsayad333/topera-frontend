import { Components, Theme } from '@mui/material/styles'

export const components: Components<Theme> = {
  MuiContainer: {
    styleOverrides: {
      root: ({ ownerState, theme }) => ({
        ...(ownerState.maxWidth === false && {
          [theme.breakpoints.up('lg')]: {
            padding: '0px 100px',
          },
        }),
      }),
    },
  },
  MuiButton: {
    styleOverrides: {
      root: ({ ownerState, theme }) => ({
        ...(ownerState.variant === 'grayButton' && {
          flexGrow: '1',
          fontWeight: 600,
          fontSize: '14px',
          borderRadius: '6px',
          textTransform: 'capitalize',
          justifyContent: 'flex-start',
          color: theme.palette.text.primary,
          border: `2px solid ${theme.palette.grey[400]}`,
        }),
        ...(ownerState.variant === 'contained' && {
          flexGrow: '1',
          fontWeight: 600,
          fontSize: '14px',
          padding: '10px 20px',
          borderRadius: '50vh',
          color: '#ffff',
          backgroundColor: '#1473E6',
        }),
        ...(ownerState.variant === 'socialButton' && {
          display: 'flex',
          flexGrow: '1',
          justifyContent: 'center',
          alignItems: 'center',
          fontWeight: 500,
          fontSize: '24px',
          padding: '18px 40px',
          borderRadius: '50vh',
          color: '#ffff',
          backgroundColor: '#1473E6',
          '&:hover': {
            backgroundColor: '#1473E6',
          },
        }),
      }),
    },
  },
  MuiIconButton: {
    styleOverrides: {
      root: ({ ownerState, theme }) => ({
        ...(ownerState.datatype === 'grayButton' && {
          borderRadius: '6px',
          justifyContent: 'flex-center',
          color: theme.palette.text.primary,
          border: `2px solid ${theme.palette.grey[400]}`,
        }),
      }),
    },
  },
}
