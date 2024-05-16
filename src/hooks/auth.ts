import { useCallback } from 'react'

// Stores
import { useAppStore } from '@/stores'

// Utils
import { sessionStorageGet, sessionStorageDelete } from '@/utils/sessionStorage'

export function useIsAuthenticated() {
  const [state] = useAppStore()
  let result = state.isAuthenticated

  // TODO: AUTH: replace next line with access token verification
  result = Boolean(sessionStorageGet('access_token', ''))

  return result
}

export function useEventLogout() {
  const [, dispatch] = useAppStore()

  return useCallback(() => {
    // TODO: AUTH: replace next line with access token saving
    sessionStorageDelete('access_token')

    dispatch({ type: 'LOG_OUT' })
  }, [dispatch])
}
