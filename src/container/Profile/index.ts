import useHandleError from '@/hooks/useHandleError'
import useRequestHandlers from '@/hooks/useRequestHandlers'
import { useEffect } from 'react'

const useProfile = () => {
  const { handleError } = useHandleError()
  const { getHandler } = useRequestHandlers()
  const getData = async (): Promise<void> => {
    const { data, error } = await getHandler({ endpoint: '/profile' })
    if (data) console.log(data)
    if (error) return handleError(error)
  }

  useEffect(() => {
    getData()
  }, [])
  return {
    data: {},
  }
}

export default useProfile
