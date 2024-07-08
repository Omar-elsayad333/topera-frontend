import Stack from '@mui/material/Stack'
import ChatSectionCardComponent from './ChatSectionCardComponent'
import ChatSectionInputComponent from './ChatSectionInputComponent'
import { Box } from '@mui/material'
import { IConversationMessages } from '@/types/pages/chat'

interface IChatSectionComponentProps {
  selectedChat: string | null
  setSelectedChat: (conversationId: string | null) => void
  conversationMessages: IConversationMessages | undefined
}

const ChatSectionComponent = ({ selectedChat, setSelectedChat, conversationMessages }: IChatSectionComponentProps) => {
  return (
    <>
      <Stack sx={{ height: '100%', maxHeight: '100%' }} justifyContent={'space-between'}>
        <Stack gap={2} sx={{ p: '10px', flexGrow: 1, overflowY: 'auto' }}>
          {selectedChat !== null ? (
            <ChatSectionCardComponent conversationMessages={conversationMessages} conversationId={selectedChat} />
          ) : (
            <div>Select a chat to start messaging</div>
          )}
        </Stack>
        <ChatSectionInputComponent selectedChat={selectedChat} setSelectedChat={setSelectedChat} />
      </Stack>
    </>
  )
}

export default ChatSectionComponent
