'use client'

// Contexts
import { useAlert } from '@/contexts/AlertContext'
import { useDictionary } from '@/contexts/DictionaryContext'

// Containers

const useErrorHandler = () => {
  const { dict } = useDictionary()
  const { setErrorMessage } = useAlert()

  //   if (error.response.data.message && !error.response.data.errors) {
  //   } else if (error.response.data.errors) {
  //     for (const key in error.response.data.errors) {
  //       setErrorMessage(dict.alert.test)
  //     }
  //   } else {
  //     setErrorMessage(dict.alert.test)
  //   }

  const errorHandler = () => {
    return setErrorMessage(dict.alert.test)
  }

  return { errorHandler }
}

export default useErrorHandler
