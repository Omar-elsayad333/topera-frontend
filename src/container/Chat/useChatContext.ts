'use client'

import useHandleError from '@/hooks/useHandleError'
import useRequestHandlers from '@/hooks/useRequestHandlers'
import { useEffect, useState } from 'react'

// Define an interface for Conversation
export interface IConversation {
  id: string
  name: string
  createdAt: string // Assuming createdAt is a string representation of a date
}

// Define an interface for the entire data structure
export interface IConversationData {
  groupName: string
  conversations: IConversation[]
}

const useChatContext = () => {
  const [isPanelOpen, setIsPanelOpen] = useState(false)
  const [selectedChat, setSelectedChat] = useState<string | null>(null)
  const [navChatData, setNavChatData] = useState<IConversationData[] | undefined>()
  const { loading, postHandler, getHandler } = useRequestHandlers()
  const { handleError } = useHandleError()

  const togglePanel = () => {
    setIsPanelOpen((prevState) => !prevState)
  }

  const selectChat = (chatId: string | null) => {
    setSelectedChat(chatId)
  }

  const getNavData = async () => {
    const { data, error } = await getHandler({ endpoint: '/conversations' })
    console.log(data)
    if (error) return handleError(error)
    setNavChatData(data)
  }

  useEffect(() => {
    console.log('i am see changes')
  }, [isPanelOpen])

  useEffect(() => {
    console.log('Selected chat changed:', selectedChat)
  }, [selectedChat])

  return {
    isPanelOpen,
    togglePanel,
    selectedChat,
    selectChat,
    loading,
    navChatData,
    getNavData,
  }
}

export default useChatContext
