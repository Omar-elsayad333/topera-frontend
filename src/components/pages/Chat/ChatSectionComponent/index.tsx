'use client'

import { Box, Typography, Stack, ToggleButton } from '@mui/material'
import { IConversationMessages } from '@/types/pages/chat'
import ChatSectionCardComponent from './ChatSectionCardComponent'
import ChatSectionInputComponent from './ChatSectionInputComponent'
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight'

interface IChatSectionComponentProps {
  selectedChat: string | null
  conversationMessages: IConversationMessages | null
  selectChat: (conversationId: string | null) => void
}

const ChatSectionComponent = ({ selectedChat, conversationMessages, selectChat }: IChatSectionComponentProps) => {
  return (
    <Stack gap={2} sx={{ height: '100%', maxHeight: '100%' }} justifyContent={'space-between'}>
      <Stack direction={'row'} justifyContent={'flex-end'}>
        <ToggleButton color="primary" value="check" onClick={() => selectChat(null)}>
          <KeyboardDoubleArrowRightIcon />
        </ToggleButton>
      </Stack>
      <Box sx={{ height: '100%', overflowY: 'auto' }}>
        <Stack gap={2} sx={{ p: '10px' }}>
          {selectedChat && conversationMessages ? (
            <ChatSectionCardComponent key={conversationMessages.id} conversationMessages={conversationMessages} />
          ) : (
            <Typography variant="h6" sx={{ textAlign: 'center', mt: 4 }}>
              Select a chat to start messaging
            </Typography>
          )}
        </Stack>
      </Box>
      <ChatSectionInputComponent selectedChat={selectedChat} />
    </Stack>
  )
}

export default ChatSectionComponent
