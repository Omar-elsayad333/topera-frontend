import Stack from '@mui/material/Stack'
import ChatSectionCardComponent from './ChatSectionCardComponent'
import ChatSectionInputComponent from './ChatSectionInputComponent'
import { Box } from '@mui/material'

interface IChatSectionComponentProps {
  selectedChat: number | null
  setSelectedChat: (chatId: number | null) => void
}

const ChatSectionComponent = ({ selectedChat, setSelectedChat }: IChatSectionComponentProps) => {
  return (
    <>
      <Stack sx={{ height: '100%' }} justifyContent={'space-between'}>
        <Box sx={{ flexGrow: 1, maxHeight: 'calc(100dvh - 110px)', height: '100%', overflowY: 'auto' }}>
          {selectedChat !== null ? (
            <ChatSectionCardComponent chatId={selectedChat} />
          ) : (
            <div style={{ height: 'calc(100dvh - 200px)' }}>Select a chat to start messaging</div>
          )}
        </Box>
        <ChatSectionInputComponent selectedChat={selectedChat} setSelectedChat={setSelectedChat} />
      </Stack>
    </>
  )
}

export default ChatSectionComponent
