// Hooks
import { useEffect, useState } from 'react'

// Types
import { IProfileData } from '@/components/pages/EditProfile/types'
import useRequestHandlers from '@/hooks/useRequestHandlers'

export default function useProfile() {
  const { getHandler } = useRequestHandlers()
  const [profileData, setProfileData] = useState<IProfileData | null>(null)

  const getProfileData = async () => {
    const { data } = await getHandler({ endpoint: '/profile' })
    setProfileData(data as IProfileData)
  }

  useEffect(() => {
    getProfileData()
  }, [])
  return {
    data: { profileData },
    states: {},
    actions: {},
  }
}
