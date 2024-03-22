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
          fontWeight: 600,
          fontSize: '14px',
          padding: '10px 20px',
          borderRadius: '60px',
          color: '#ffff',
          backgroundColor: '#1473E6',
        }),
        ...(ownerState.variant === 'socialButton' && {
          display: 'flex',
          gap:'10px',
          flexGrow: '1',
          justifyContent: 'center',
          alignItems: 'center',
          fontWeight: 500,
          fontSize: '24px',
          padding: '18px 0',
          borderRadius: '50px',
          color: '#000000',
          border:'1px solid gray',
          backgroundColor: 'transparent',
          '&:hover': {
            backgroundColor: 'transparent',
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
