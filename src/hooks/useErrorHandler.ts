'use client'

// Contexts
import { useAlert } from '@/contexts/AlertContext'
import { useDictionary } from '@/contexts/DictionaryContext'

const useErrorHandler = () => {
  const { dict } = useDictionary()
  const { setErrorMessage } = useAlert()

  const errorHandler = (error: any) => {
    if (error?.response?.data?.message && !error?.response?.data?.errors) {
      setErrorMessage(error.response.data.message)
    } else if (error.response.data.errors) {
      for (const key in error.response.data.errors) {
        setErrorMessage(error.response.data.errors[key][0])
      }
    } else {
      setErrorMessage(dict.alert.test)
    }
  }

  return { errorHandler }
}

export default useErrorHandler
