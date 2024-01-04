'use client'

import { useState, createContext, useContext, useLayoutEffect } from 'react'

type ContextState = {
  mainColors: any
  darkMode: boolean | string
  handelDarkTheme: () => void
}

type Props = {
  children: React.ReactElement<any, any> | React.ReactNode | React.ReactElement[]
}

const initialValues = {
  darkMode: false,
  mainColors: {},
  handelDarkTheme: () => {},
}

// Create context for dark theme state
export const ThemeContext = createContext<ContextState>(initialValues)

export const ThemeProvider: React.FC<Props> = ({ children }) => {
  // The theme data that gets stored in context
  const [darkMode, setDarkMode] = useState<boolean | string>(false)

  // Get the last selected theme
  useLayoutEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.getItem(process.env.THEME || '') === 'true' && setDarkMode(true)
    }
  }, [])

  const mainColors: any = {
    primary: {
      main: darkMode ? '#E0EEFF' : '#3F72A4',
      light: darkMode ? '#ffd700' : '#ffd700',
      dark: darkMode ? '#B6D5F0' : '#1C364F',
      contrastText: darkMode ? '#1C364F' : '#E8F3FF',
    },
    secondary: {
      main: darkMode ? 'rgb(63 114 164 / 0%)' : '#E8F3FF',
      light: darkMode ? '#ffd700' : '#ffd700',
      dark: darkMode ? '#E0EEFF' : '#3F72A4',
      contrastText: darkMode ? '#E0EEFF' : '#3F72A4',
    },
    error: {
      main: '#9C1313',
      light: '#9C1313',
      dark: '#9C1313',
      contrastText: '#9C1313',
    },
    success: {
      main: '#29D277',
      light: '#29D277',
      dark: '#29D277',
      contrastText: '#29D277',
    },
    warning: {
      main: '#FFCC00',
      light: '#FFCC00',
      dark: '#FFCC00',
      contrastText: '#FFCC00',
    },
    info: {
      main: '#3F72A4',
      light: '#3F72A4',
      dark: '#3F72A4',
      contrastText: '#3F72A4',
    },
  }

  // Handle change theme
  const handelDarkTheme = async () => {
    setDarkMode(!darkMode)
    localStorage.setItem(process.env.THEME || '', JSON.stringify(!darkMode))
  }

  return (
    <ThemeContext.Provider value={{ mainColors, darkMode, handelDarkTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

// Custom hook that shorthands the context!
export const useTheme = () => useContext<ContextState>(ThemeContext)
