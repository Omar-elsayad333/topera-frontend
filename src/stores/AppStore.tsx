'use client'
import React, { useSyncExternalStore } from 'react'
import { createContext, useReducer, useContext, FunctionComponent, Dispatch, ComponentType } from 'react'
// import useMediaQuery from '@mui/material/useMediaQuery';
import AppReducer from '@/stores/AppReducer'
import { IS_SERVER } from '@/utils/environment'
import { localStorageGet } from '@/utils/localStorage'
import { SessionProvider, useSession } from 'next-auth/react'

/**
 * AppState data structure and initial values
 */
export interface IThemeSettings {
  verticalNav: boolean
  horizontalNav: boolean
  asideNav: boolean
}
export interface AppStoreState {
  darkMode: boolean
  isAuthenticated: boolean
  locale: string
  currentUser?: any
  themeSetting: IThemeSettings
}

const INITIAL_APP_STATE: AppStoreState = {
  darkMode: false, // Overridden by useMediaQuery('(prefers-color-scheme: dark)') in AppStore
  isAuthenticated: false, // Overridden in AppStore by checking auth token
  locale: 'rtl', // Overridden in AppStore by checking current locale
  themeSetting: {
    verticalNav: true,
    horizontalNav: false,
    asideNav: false,
  },
}

/**
 * Instance of React Context for global AppStore
 */
export type AppContextReturningType = [AppStoreState, Dispatch<any>]
const AppContext = createContext<AppContextReturningType>([INITIAL_APP_STATE, () => null])

/**
 * Main global Store as HOC with React Context API
 * @component AppStoreProvider
 * import {AppStoreProvider} from './store'
 * ...
 * <AppStoreProvider>
 *  <App/>
 * </AppStoreProvider>
 */
interface AppStoreProps {
  locale: string
  session: any
  children: React.ReactElement<any, any> | React.ReactNode | React.ReactElement[]
}
const AppStoreProvider: FunctionComponent<AppStoreProps> = ({ children, locale }) => {
  // const prefersDarkMode = IS_SERVER ? false : useMediaQuery('(prefers-color-scheme: dark)'); // Note: Conditional hook is bad idea :(
  const { data: session }: any = useSession()
  const prefersDarkMode = IS_SERVER ? false : window.matchMedia('(prefers-color-scheme: dark)').matches
  const previousDarkMode = IS_SERVER ? false : Boolean(localStorageGet('darkMode', false))
  const tokenExists = !!session?.user?.token

  const initialState: AppStoreState = {
    ...INITIAL_APP_STATE,
    locale: locale,
    currentUser: session?.user,
    darkMode: previousDarkMode ?? prefersDarkMode,
    isAuthenticated: tokenExists,
  }

  const value: AppContextReturningType = useReducer(AppReducer, initialState)

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>
}

/**
 * Hook to use the AppStore in functional components
 * @hook useAppStore
 * import {useAppStore} from './store'
 * ...
 * const [state, dispatch] = useAppStore();
 *   OR
 * const [state] = useAppStore();
 */
const useAppStore = (): AppContextReturningType => useContext(AppContext)

/**
 * HOC to inject the ApStore to class component, also works for functional components
 * @hok withAppStore
 * import {withAppStore} from './store'
 * ...
 * class MyComponent
 *
 * render () {
 *   const [state, dispatch] = this.props.appStore;
 *   ...
 * }
 * ...
 * export default withAppStore(MyComponent)
 */
interface WithAppStoreProps {
  appStore: AppContextReturningType
}
const withAppStore = (Component: ComponentType<WithAppStoreProps>): FunctionComponent =>
  function ComponentWithAppStore(props) {
    return <Component {...props} appStore={useAppStore()} />
  }

const AppStoreProviderWrapper = ({ children, locale, session }: any) => {
  return (
    <SessionProvider session={session}>
      <AppStoreProvider {...locale}>{children}</AppStoreProvider>
    </SessionProvider>
  )
}

export { AppStoreProvider, useAppStore, withAppStore, AppStoreProviderWrapper }
