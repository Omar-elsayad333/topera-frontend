'use client'
import { useEffect, useState } from 'react'
import { useSearchParams } from 'next/navigation'

// Next auth
import { getSession } from 'next-auth/react'

// Hooks
import useRequestHandlers from '@/hooks/useRequestHandlers'

// Types
import { ITrack, IRecomondations } from './types'

const useChatContent = (data: any) => {
  const searchParams = useSearchParams()
  const { loading, postHandler } = useRequestHandlers()
  const [userData, setUserData] = useState<any>(null)
  const [selectedTracks, setSelectedTracks] = useState<ITrack[]>([])
  const [recommendations, setRecommendations] = useState<IRecomondations[]>([])
  const [editTrackDialog, setEditTrackDialog] = useState<boolean>(false)

  useEffect(() => {
    getUserData()
    setSelectedTracks(data.recommendationTracks)
    setRecommendations(data.recommendations)
  }, [])

  const getUserData = async () => {
    const user: any = await getSession()
    setUserData(user.user)
  }

  const handleCloseEditDialog = () => {
    setEditTrackDialog(false)
  }

  const handleOpenEditDialog = () => {
    setEditTrackDialog(true)
  }

  const handleDelete = (id: string) => {
    const filterdData = selectedTracks.filter((item: ITrack) => {
      if (item.id !== id) {
        return item
      } else {
        data.tracks.push(item)
      }
    })
    setSelectedTracks(filterdData)
  }

  const handleEditTracks = (selectedData: ITrack[]) => {
    const newData = [...selectedTracks, ...selectedData]
    setSelectedTracks(newData)

    data.tracks = data.tracks.filter((item: ITrack) => !selectedData.includes(item))
  }

  const collectConfirmTracks = () => {
    const trackIds = []
    for (let track of selectedTracks) {
      trackIds.push(track.id)
    }
    const body = {
      trackIds,
      matchingRequestId: searchParams.get('chatId'),
    }

    return body
  }

  const confirmTracks = async () => {
    try {
      const body = collectConfirmTracks()
      const res = await postHandler({ endpoint: `/matching/recommendation/${searchParams.get('chatId')}`, body })
      console.log(res)
      setRecommendations(res)
    } catch (error) {
      console.log(error)
    }
  }

  return {
    loading,
    userData,
    selectedTracks,
    recommendations,
    handleDelete,
    confirmTracks,
    dialog: {
      editTrackDialog,
      handleEditTracks,
      handleOpenEditDialog,
      handleCloseEditDialog,
    },
  }
}

export default useChatContent
