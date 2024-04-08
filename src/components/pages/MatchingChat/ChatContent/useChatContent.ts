'use client'
import { useEffect, useState } from 'react'
import { useSearchParams } from 'next/navigation'

// Stores
import { useAppStore } from '@/stores'

// Hooks
import useHandleError from '@/hooks/useHandleError'
import useRequestHandlers from '@/hooks/useRequestHandlers'

// Types
import { ITrack, IRecomondations } from './types'

const useChatContent = (data: any) => {
  const searchParams = useSearchParams()
  const { handleError } = useHandleError()
  const [state] = useAppStore()
  const { loading, postHandler } = useRequestHandlers()
  const [userData, setUserData] = useState<any>(null)
  const [selectedTracks, setSelectedTracks] = useState<ITrack[]>([])
  const [recommendations, setRecommendations] = useState<IRecomondations[]>([])
  const [editTrackDialog, setEditTrackDialog] = useState<boolean>(false)

  useEffect(() => {
    setSelectedTracks(data.recommendationTracks)
    setRecommendations(data.recommendations)
  }, [data])

  useEffect(() => {
    getUserData()
  }, [state.currentUser])

  const getUserData = async () => {
    setUserData(state.currentUser)
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

  const handleEditTracks = (selectedData: any) => {
    const newData = [...selectedData.track]
    setSelectedTracks(newData)
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
    const body = collectConfirmTracks()
    const { data, error } = await postHandler({
      endpoint: `/matching/recommendation/${searchParams.get('chatId')}`,
      body,
    })

    if (error) return handleError(error)
    setRecommendations(data)
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
