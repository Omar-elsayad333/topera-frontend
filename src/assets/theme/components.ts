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
}
