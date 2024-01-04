'use client'
import { useEffect, useState } from 'react'

// Containers
import { getPosts } from '@/containers/posts'

const useHomeContainer = () => {
  const [postsData, setPostsData] = useState<any[]>([])

  useEffect(() => {
    getPageData()
  }, [])

  const getPageData = async () => {
    try {
      const res: any[] = await getPosts()
      setPostsData(res)
    } catch (error) {
      console.log(error)
    }
  }

  return {
    data: { postsData },
    states: {},
    actions: {},
  }
}

export default useHomeContainer
