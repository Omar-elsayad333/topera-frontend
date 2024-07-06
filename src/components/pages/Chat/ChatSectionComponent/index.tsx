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
      <Stack sx={{ height: '100%', maxHeight: '100%' }} justifyContent={'space-between'}>
        <Box sx={{ flexGrow: 1, overflowY: 'auto' }}>
          {selectedChat !== null ? (
            <ChatSectionCardComponent chatId={selectedChat} />
          ) : (
            <div>Select a chat to start messaging</div>
          )}
        </Box>
        <ChatSectionInputComponent selectedChat={selectedChat} setSelectedChat={setSelectedChat} />
      </Stack>
    </>
  )
}

export default ChatSectionComponent
