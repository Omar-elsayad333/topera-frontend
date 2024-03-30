'use client'
import { forwardRef } from 'react'

// Types
import { IStyle } from '@/types/IStyle'

// Contexts
import { IAlertContextState, useAlert } from '@/stores/AlertContext'

// MUI
import Snackbar from '@mui/material/Snackbar'
import MuiAlert, { AlertProps } from '@mui/material/Alert'

const Alert = forwardRef<HTMLDivElement, AlertProps>(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="outlined" {...props} />
})

const AlertNotify: React.FC = () => {
  // const theme = useTheme()
  const { msg, state, msgType, handleState }: IAlertContextState = useAlert()

  const msgTypesStyle = (theme: any) => {
    const test = {
      info: theme?.palette?.info?.main,
      error: theme?.palette?.error?.main,
      success: theme?.palette?.success?.main,
      warning: theme?.palette?.warning?.main,
    }
    return test[msgType]
  }

  const style: IStyle = {
    root: {
      '.MuiPaper-root': {
        gap: '25px',
        fontSize: '14px',
        fontWeight: '700',
        boxShadow: 'none',
        border: '2px solid',
        borderRadius: '10px',
        background: 'rgba(20, 28, 38, 0.50)',
        color: (theme) => msgTypesStyle(theme),
        borderColor: (theme) => msgTypesStyle(theme),
      },
    },
  }

  return (
    <Snackbar
      open={state}
      sx={style.root}
      autoHideDuration={3000}
      onClose={() => handleState()}
      anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
    >
      <Alert onClose={() => handleState()} severity={msgType}>
        {msg}
      </Alert>
    </Snackbar>
  )
}

export default AlertNotify
