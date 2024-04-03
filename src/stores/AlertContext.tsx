'use client'

import { AlertColor } from '@mui/material'
import { useState, useContext, createContext, PropsWithChildren } from 'react'

export interface IAlertContextState {
  msg: string
  state: boolean
  msgType: AlertColor
  handleState: () => void
  setMessage: (message: string, type: AlertColor) => void
}

const AlertContext = createContext<IAlertContextState>({
  msg: '',
  state: false,
  msgType: 'info',
  handleState: () => {},
  setMessage: () => {},
})

interface IProps extends PropsWithChildren {}

const AlertProvider = ({ children }: IProps) => {
  const [msg, setMsg] = useState('')
  const [state, setState] = useState(false)
  const [msgType, setMsgType] = useState<AlertColor>('info')

  const handleState = () => {
    setState(false)
  }

  const setMessage = (message: string, type: AlertColor) => {
    setState(true)
    setMsg(message)
    setMsgType(type)
  }

  const contextValue = {
    msg,
    state,
    msgType,
    handleState,
    setMessage,
  }

  return <AlertContext.Provider value={contextValue}>{children}</AlertContext.Provider>
}

function useAlert(): IAlertContextState {
  const context = useContext(AlertContext)
  if (context === undefined) {
    throw new Error('useAuth must be used within a AuthProvider')
  }
  return context
}

export { AlertProvider, useAlert }
