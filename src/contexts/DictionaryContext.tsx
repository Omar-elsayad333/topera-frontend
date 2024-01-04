'use client'

import { useState, useContext, createContext, useEffect } from 'react'

interface ContextState {
  dict: any
}

interface IProps {
  dictionary: any
  children: React.ReactElement<any, any> | React.ReactNode | React.ReactElement[]
}

const DictonaryContext = createContext<ContextState>({
  dict: null,
})

export const DictionaryProvider: React.FC<IProps> = ({ dictionary, children }) => {
  const [dict, setDict] = useState()

  useEffect(() => {
    dictHanlder()
  }, [dictionary])

  const dictHanlder = () => {
    setDict(dictionary)
  }

  return <DictonaryContext.Provider value={{ dict }}>{children}</DictonaryContext.Provider>
}

// Custom hook that shorthands the context!
export const useDictionary = () => useContext<ContextState>(DictonaryContext)
