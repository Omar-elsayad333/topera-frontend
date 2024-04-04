'use client'

// Contexts
import { IAlertContextState, useAlert } from '@/stores/AlertContext'

// MUI
import Alert from '@mui/material/Alert'
import Snackbar from '@mui/material/Snackbar'

const AlertNotify: React.FC = () => {
  const { msg, state, msgType, handleState }: IAlertContextState = useAlert()

  return (
    <Snackbar
      open={state}
      autoHideDuration={3000}
      onClose={() => handleState()}
      anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
    >
      <Alert variant="filled" onClose={() => handleState()} severity={msgType}>
        {msg}
      </Alert>
    </Snackbar>
  )
}

export default AlertNotify
