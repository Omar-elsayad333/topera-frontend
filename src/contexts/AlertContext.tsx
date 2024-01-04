'use client'

import { useState, useContext, createContext } from 'react'

// Types
import { AlertColor } from '@mui/material'

type ContextState = {
  msg: string
  state: boolean
  msgType: AlertColor
  handleState: () => void
  setInfoMessage: (message: string) => void
  setErrorMessage: (message: string) => void
  setWarningMessage: (message: string) => void
  setSuccessMessage: (message: string) => void
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

type Props = {
  children: React.ReactElement<any, any> | React.ReactNode | React.ReactElement[]
}

export const AlertProvider: React.FC<Props> = ({ children }) => {
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

// Custom hook that shorthands the context!
export const useAlert = () => useContext<ContextState>(AlertContext)
