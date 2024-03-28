'use client'

import { AlertColor } from '@mui/material'
import { useState, useContext, createContext, PropsWithChildren } from 'react'

type ContextState = {
  msg: string
  state: boolean
  handleState: Function
  msgType: AlertColor
  setInfoMessage: (message: string) => void | null
  setErrorMessage: (message: string) => void | null
  setWarningMessage: (message: string) => void | null
  setSuccessMessage: (message: string) => void | null
}

const AlertContext = createContext<ContextState>({
  msg: '',
  state: false,
  msgType: 'info',
  handleState: () => {},
  setInfoMessage: () => {},
  setErrorMessage: () => {},
  setWarningMessage: () => {},
  setSuccessMessage: () => {},
})

interface IProps extends PropsWithChildren {}

const AlertProvider = ({ children }: IProps) => {
  const [msg, setMsg] = useState<string>('')
  const [state, setState] = useState<boolean>(false)
  const [msgType, setMsgType] = useState<AlertColor>('info')

  const handleState = () => {
    setState(false)
  }

  const setErrorMessage = (errorMessage: string) => {
    setState(true)
    setMsg(errorMessage)
    setMsgType('error')
  }

  const setSuccessMessage = (successMessage: string) => {
    setState(true)
    setMsg(successMessage)
    setMsgType('success')
  }

  const setWarningMessage = (warningMessage: string) => {
    setState(true)
    setMsg(warningMessage)
    setMsgType('warning')
  }

  const setInfoMessage = (infoMessage: string) => {
    setState(true)
    setMsg(infoMessage)
    setMsgType('info')
  }

  const contextValue = {
    msg,
    state,
    msgType,
    handleState,
    setInfoMessage,
    setErrorMessage,
    setWarningMessage,
    setSuccessMessage,
  }

  return <AlertContext.Provider value={contextValue}>{children}</AlertContext.Provider>
}

function useAlert(): ContextState {
  const context = useContext(AlertContext)
  if (context === undefined) {
    throw new Error('useAuth must be used within a AuthProvider')
  }
  return context
}

export { AlertProvider, useAlert }
