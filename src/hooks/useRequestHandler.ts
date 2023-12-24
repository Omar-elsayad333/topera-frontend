import { useState, useEffect } from 'react'
import { getPosts } from '@/containers/posts'

const useRequestHandler = (path: string) => {
  const [data, setData] = useState<any>()
  const [loading, setLoading] = useState<boolean>()
  const [error, setError] = useState<any>()

  useEffect(() => {
    getData()
  }, [path])

  const getData = async () => {
    try {
      setLoading(true)
      const res = await getPosts(path)
      console.log(res)
      setData(res)
    } catch (error: any) {
      setError(error)
    } finally {
      setLoading(false)
    }
  }

  return { data, loading, error }
}

export default useRequestHandler
