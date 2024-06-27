import useHandleError from '@/hooks/useHandleError'
import useRequestHandlers from '@/hooks/useRequestHandlers'
import { useEffect, useState } from 'react'

const useContactUs = () => {
  const [postData, setPostData] = useState()
  const [change, setChange] = useState(false)

  const { handleError } = useHandleError()
  const { postHandler, loading } = useRequestHandlers()

  useEffect(() => {
    // test()
    console.log('changed')

    return () => {
      console.log('desstroued')
    }
  }, [change])

  const handleChange = () => {
    setChange(true)
  }

  const test = async () => {
    const { data, error } = await postHandler({ endpoint: '' })
    if (error) return handleError(error)
    setPostData(data)
  }

  return {
    postData,
    change,
    handleChange,
    loading,
    test,
  }
}

export default useContactUs
