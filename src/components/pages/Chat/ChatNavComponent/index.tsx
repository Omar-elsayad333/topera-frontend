'use client'

import { List, ListSubheader, Stack, SxProps, ToggleButton, Button } from '@mui/material'
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft'
import LibraryAddIcon from '@mui/icons-material/LibraryAdd'
import MoveToInboxIcon from '@mui/icons-material/MoveToInbox'
import ChatNavItemComponent from './ChatNavItemComponent'
import { IConversationData } from '@/types/pages/chat'

interface IChatNavComponentProps {
  isPanelOpen: boolean
  togglePanel: () => void
  selectChat: (conversationId: string | null) => void
  conversationData: IConversationData[] | undefined
  selectedChat: string | null
}

const ChatNavComponent = ({
  isPanelOpen,
  togglePanel,
  selectChat,
  conversationData,
  selectedChat,
}: IChatNavComponentProps) => {
  const handleNewChat = () => {
    selectChat(null)
  }

  const panelStyle: SxProps = {
    p: '15px',
    width: '100%',
    maxHeight: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  }

  const subHeaderStyle: SxProps = {
    color: 'white',
    lineHeight: 1,
    padding: '12px',
    backgroundColor: 'transparent',
  }

  return (
    <Stack sx={panelStyle} gap={3}>
      <Stack spacing={2} direction={'row'} justifyContent={'space-between'}>
        <ToggleButton onClick={togglePanel} color="primary" value="check">
          <KeyboardDoubleArrowLeftIcon />
        </ToggleButton>
        <ToggleButton color="primary" value="check" onClick={handleNewChat}>
          <LibraryAddIcon />
        </ToggleButton>
      </Stack>
      <Button startIcon={<MoveToInboxIcon />} sx={{ maxHeight: '70px' }} variant="grayButton">
        Archived chats
      </Button>
      <List component="nav" sx={{ flexGrow: 1, overflowY: 'auto' }}>
        {conversationData?.length ? (
          conversationData.map((conversation) => (
            <>
              <ListSubheader sx={subHeaderStyle}>{conversation.groupName}</ListSubheader>
              {conversation.conversations.map((item) => (
                <ChatNavItemComponent
                  key={item.id}
                  conversation={item}
                  selectChat={selectChat}
                  isSelected={selectedChat === item.id}
                />
              ))}
            </>
          ))
        ) : (
          <ListSubheader sx={subHeaderStyle}>No conversations available</ListSubheader>
        )}
      </List>
    </Stack>
  )
}

export default ChatNavComponent
