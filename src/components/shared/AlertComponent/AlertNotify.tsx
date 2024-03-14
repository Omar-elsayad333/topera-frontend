'use client'
import { forwardRef } from 'react'

// Types
import { IStyle } from '@/types/IStyle'

// Contexts
// import { useAlert } from '@/contexts/AlertContext'

// MUI
import { useTheme } from '@mui/material'
import Snackbar from '@mui/material/Snackbar'
import MuiAlert, { AlertColor, AlertProps } from '@mui/material/Alert'

interface IAlertNotify {
  msg: string
  state: boolean
  msgType: AlertColor
  handleState: () => void
}

const Alert = forwardRef<HTMLDivElement, AlertProps>(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="outlined" {...props} />
})

const AlertNotify: React.FC = () => {
  // const theme = useTheme()
  // const { msg, state, msgType, handleState }: IAlertNotify = useAlert()

  // const style: IStyle = {
  //   root: {
  //     '.MuiPaper-root': {
  //       gap: '25px',
  //       fontSize: '14px',
  //       fontWeight: '700',
  //       background: 'rgba(20, 28, 38, 0.50)',
  //       borderRadius: '10px',
  //       border: '2px solid',
  //       borderColor: () => {
  //         if (msgType == 'success') {
  //           return theme.palette.success.main
  //         }
  //         if (msgType == 'error') {
  //           return theme.palette.error.main
  //         }
  //         if (msgType == 'warning') {
  //           return theme.palette.warning.main
  //         }
  //         if (msgType == 'info') {
  //           return theme.palette.info.main
  //         }
  //         return null
  //       },
  //       boxShadow: 'none',
  //       color: () => {
  //         if (msgType == 'success') {
  //           return theme.palette.success.main
  //         }
  //         if (msgType == 'error') {
  //           return theme.palette.error.main
  //         }
  //         if (msgType == 'warning') {
  //           return theme.palette.warning.main
  //         }
  //         if (msgType == 'info') {
  //           return theme.palette.info.main
  //         }
  //         return null
  //       },
  //     },
  //   },
  // }

  return (
    // <Snackbar
    //   open={state}
    //   sx={style.root}
    //   autoHideDuration={3000}
    //   onClose={() => handleState()}
    //   anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
    // >
    //   <Alert onClose={() => handleState()} severity={msgType}>
    //     {msg}
    //   </Alert>
    // </Snackbar>
    <></>
  )
}

export default AlertNotify
