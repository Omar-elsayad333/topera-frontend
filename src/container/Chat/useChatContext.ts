'use client'

import { useEffect, useState } from 'react'

const useChatContext = () => {
  const [isPanelOpen, setIsPanelOpen] = useState(false)
  const [selectedChat, setSelectedChat] = useState<number | null>(null)

  const togglePanel = () => {
    setIsPanelOpen((prevState) => !prevState)
  }

  const selectChat = (chatId: number | null) => {
    setSelectedChat(chatId)
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
  }
}

export default useChatContext
