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
        textTransform: 'capitalize',
        ...(ownerState.variant === 'grayButton' && {
          flexGrow: '1',
          fontWeight: 600,
          fontSize: '14px',
          borderRadius: '6px',
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
          boxShadow: 'none',
          ...(ownerState.color === 'primary' && { backgroundColor: '#1473E6' }),
        }),
        ...(ownerState.variant === 'socialButton' && {
          display: 'flex',
          width: '100%',
          gap: '15px',
          justifyContent: 'center',
          alignItems: 'center',
          fontWeight: 500,
          fontSize: '24px',
          padding: '15px 10px',
          borderRadius: '50px',
          color: '#000000',
          border: `2px solid ${theme.palette.grey[500]}`,
          backgroundColor: 'transparent',
          '&:hover': {
            backgroundColor: 'transparent',
            borderColor: theme.palette.primary.main,
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
  MuiToggleButton: {
    styleOverrides: {
      root: ({ theme }) => ({
        borderRadius: '6px',
        justifyContent: 'flex-center',
        border: `2px solid ${theme.palette.grey[400]}`,
      }),
    },
  },
  MuiListItemButton: {
    styleOverrides: {
      root: ({ ownerState, theme }) => ({
        ...(ownerState.selected && {
          color: theme.palette.common.white,
          backgroundColor: `${theme.palette.grey[400]} !important`,
        }),
      }),
    },
  },
  MuiChip: {
    styleOverrides: {
      root: ({ ownerState, theme }) => ({
        ...(ownerState.datatype === 'trackChip' && {
          borderRadius: '10px',
          fontSize: '16px',
          width: 'fit-content',
          padding: '20px',
        }),
      }),
    },
  },
}
