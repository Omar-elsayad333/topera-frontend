'use client'

import useHandleError from '@/hooks/useHandleError'
import useRequestHandlers from '@/hooks/useRequestHandlers'
import { IConversationData, IConversationMessages, IMessage, IConversation } from '@/types/pages/chat'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import { UnityInstance } from 'react-unity-webgl/declarations/unity-instance'

const useChatContext = () => {
  const [isPanelOpen, setIsPanelOpen] = useState(false)
  const [chatData, setChatData] = useState<{
    navChatData: IConversationData[]
    chatMessageData: IConversationMessages | null
  }>({
    navChatData: [],
    chatMessageData: null,
  })
  const [unityInstance, setUnityInstance] = useState<UnityInstance | null>(null)
  const router = useRouter()

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

  const createConversation = async (content: string) => {
    const { data, error } = await postHandler({
      endpoint: '/conversations',
      body: { content },
    })
    if (error) return handleError(error)

    const newConversation: IConversationMessages = {
      id: data.id,
      name: data.name,
      createdAt: data.createdAt,
      userName: data.userName,
      imageUrl: data.imageUrl,
      messages: data.messages,
      base64Audio: data.base64Audio,
    }

    const newConversationData: IConversation = {
      id: newConversation.id,
      name: newConversation.name,
      createdAt: newConversation.createdAt,
    }

    setChatData((prevState) => {
      const todayGroupIndex = prevState.navChatData.findIndex((group) => group.groupName === 'Today')

      let newNavChatData = [...prevState.navChatData]

      if (todayGroupIndex >= 0) {
        newNavChatData[todayGroupIndex] = {
          ...newNavChatData[todayGroupIndex],
          conversations: [newConversationData, ...newNavChatData[todayGroupIndex].conversations],
        }
      } else {
        newNavChatData = [
          {
            groupName: 'Today',
            conversations: [newConversationData],
          },
          ...newNavChatData,
        ]
      }

      return {
        ...prevState,
        navChatData: newNavChatData,
        chatMessageData: newConversation,
      }
    })

    router.replace(`chat?chatId=${newConversation.id}`)
    playAudio(newConversation.base64Audio)
  }

  // SendMessage('GameObjectName', 'MethodName', 'Message')
  const playAudio = (audioData: string | null) => {
    if (unityInstance && audioData) {
      unityInstance.SendMessage('Model', 'PlayAudio', audioData)
    }
  }

  const stopAudio = () => {
    if (unityInstance) {
      unityInstance.SendMessage('Model', 'StopAudio')
    }
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
    playAudio(data.base64Audio)
  }

  return {
    isPanelOpen,
    togglePanel,
    loading,
    chatData,
    getNavData,
    selectChat,
    addMessage,
    createConversation,
    setUnityInstance,
  }
}

export default useChatContext
