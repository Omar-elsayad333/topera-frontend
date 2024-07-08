'use client'

import useHandleError from '@/hooks/useHandleError'
import useRequestHandlers from '@/hooks/useRequestHandlers'
import { IConversationData, IConversationMessages } from '@/types/pages/chat'
import { useEffect, useState } from 'react'

const useChatContext = () => {
  const [isPanelOpen, setIsPanelOpen] = useState(false)
  const [chatData, setChatData] = useState<{
    navChatData: IConversationData[]
    chatMessageData: IConversationMessages | null
  }>({
    navChatData: [],
    chatMessageData: null,
  })

  const { loading, getHandler } = useRequestHandlers()
  const { handleError } = useHandleError()

  const togglePanel = () => {
    setIsPanelOpen((prevState) => !prevState)
  }

  const selectChat = async (chatId: string | null) => {
    if (chatId) {
      const { data, error } = await getHandler({ endpoint: `/conversations/${chatId}` })
      if (error) return handleError(error)
      setChatData((prevState) => ({ ...prevState, chatMessageData: data }))
    } else {
      setChatData((prevState) => ({ ...prevState, chatMessageData: null }))
    }
  }

  const getNavData = async () => {
    const { data, error } = await getHandler({ endpoint: '/conversations' })
    if (error) return handleError(error)
    setChatData((prevState) => ({ ...prevState, navChatData: data }))
  }

  useEffect(() => {
    console.log(chatData.chatMessageData)
  }, [chatData.chatMessageData])

  return {
    isPanelOpen,
    togglePanel,
    loading,
    chatData,
    getNavData,
    selectChat,
  }
}

export default useChatContext
