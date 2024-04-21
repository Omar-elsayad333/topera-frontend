// Contexts
import { useAlert } from '@/stores/AlertContext'

export interface IError {
  errors: string[]
  errorId: string
  message: string
  statusCode: number
  succeeded: boolean
}

const useHandleError = () => {
  const { setMessage } = useAlert()

  const handleError = (errorObject: IError) => {
    const { message, errors } = errorObject

    if (errors?.length > 0) {
      const errorString = errors.join(`\n `)
      setMessage(errorString, 'error')
    } else {
      message && setMessage(message, 'error')
    }
  }

  return { handleError }
}

export default useHandleError
