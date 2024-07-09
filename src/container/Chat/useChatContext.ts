'use client'

import useHandleError from '@/hooks/useHandleError'
import useRequestHandlers from '@/hooks/useRequestHandlers'
import { IConversationData, IConversationMessages, IMessage } from '@/types/pages/chat'
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
  const [audioData, setAudioData] = useState<string | null>(null)

  const { loading, getHandler, postHandler } = useRequestHandlers()
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

  const addMessage = async (chatId: string, message: IMessage) => {
    setChatData((prevState) => ({
      ...prevState,
      chatMessageData: {
        ...prevState.chatMessageData!,
        messages: [...prevState.chatMessageData!.messages, message],
      },
    }))

    const { data, error } = await postHandler({
      endpoint: `/conversations/${chatId}`,
      body: { id: chatId, content: message.content },
    })

    if (error) return handleError(error)

    const responseMessage: IMessage = {
      id: data.message.id,
      content: data.message.content,
      sender: data.message.sender,
      createdAt: data.message.createdAt,
    }

    setChatData((prevState) => ({
      ...prevState,
      chatMessageData: {
        ...prevState.chatMessageData!,
        messages: [...prevState.chatMessageData!.messages, responseMessage],
      },
    }))
    setAudioData(data.base64Audio) // Set the audio data
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
    addMessage,
    audioData, // Add the audio data to the return object
  }
}

export default useChatContext
