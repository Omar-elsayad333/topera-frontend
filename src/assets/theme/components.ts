export const components = {
  MuiButton: {
    styleOverrides: {
      root: ({ ownerState, theme }: any) => ({
        ...(ownerState.variant === 'grayButton' && {
          flexGrow: '1',
          color: '#000',
          fontWeight: 600,
          fontSize: '14px',
          borderRadius: '6px',
          textTransform: 'capitalize',
          justifyContent: 'flex-start',
          border: `2px solid ${theme.palette.grey[400]}`,
        }),
      }),
    },
  },
  MuiIconButton: {
    styleOverrides: {
      root: ({ ownerState, theme }: any) => ({
        ...(ownerState.datatype === 'grayButton' && {
          color: '#000',
          borderRadius: '6px',
          justifyContent: 'flex-center',
          border: `2px solid ${theme.palette.grey[400]}`,
        }),
      }),
    },
  },
}
