'use client'

import { Box, Typography, Stack, ToggleButton } from '@mui/material'
import { IConversationMessages, IMessage } from '@/types/pages/chat'
import ChatSectionCardComponent from './ChatSectionCardComponent'
import ChatSectionInputComponent from './ChatSectionInputComponent'
import { useEffect, useRef } from 'react'

interface IChatSectionComponentProps {
  selectedChat: string | null
  conversationMessages: IConversationMessages | null
  addMessage: (chatId: string, message: IMessage) => Promise<void>
  createConversation: (content: string) => Promise<void>
}

const ChatSectionComponent = ({
  selectedChat,
  conversationMessages,
  addMessage,
  createConversation,
}: IChatSectionComponentProps) => {
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [conversationMessages])

  return (
    <Stack gap={2} sx={{ height: '100%', maxHeight: '100%' }} justifyContent={'space-between'}>
      <Box sx={{ height: '100%', overflowY: 'auto' }}>
        <Stack gap={2} sx={{ p: '10px' }}>
          {selectedChat && conversationMessages ? (
            <ChatSectionCardComponent key={conversationMessages.id} conversationMessages={conversationMessages} />
          ) : (
            <Typography variant="h6" sx={{ textAlign: 'center', mt: 4 }}>
              Select a chat to start messaging
            </Typography>
          )}
          <div ref={messagesEndRef} />
        </Stack>
      </Box>
      <ChatSectionInputComponent
        selectedChat={selectedChat}
        addMessage={addMessage}
        createConversation={createConversation}
      />
    </Stack>
  )
}

export default ChatSectionComponent
