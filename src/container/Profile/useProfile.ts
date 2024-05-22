// Hooks
import useHandleError from '@/hooks/useHandleError'
import useRequestHandlers from '@/hooks/useRequestHandlers'
import { useEffect, useState } from 'react'
import { IProfile } from '@/container/Profile/types'

const useProfile = () => {
  const { handleError } = useHandleError()
  const { getHandler } = useRequestHandlers()
  const [profileData, setProfileData] = useState<IProfile>({
    educations: [],
    bio: '',
    experiences: [],
    skills: [],
    tracks: [],
  })
  const getData = async () => {
    const { data, error } = await getHandler({ endpoint: '/profile' })
    if (data) {
      console.log(data)
      setProfileData(data)
    }
    if (error) return handleError(error)
  }

  useEffect(() => {
    getData()
  }, [])
  return {
    data: { profileData },
  }
}

export default useProfile
