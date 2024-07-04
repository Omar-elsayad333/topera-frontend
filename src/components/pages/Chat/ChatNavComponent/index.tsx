'use client'

import Button from '@mui/material/Button'
import ToggleButton from '@mui/material/ToggleButton'
import { List, ListSubheader, Stack } from '@mui/material'
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft'
import LibraryAddIcon from '@mui/icons-material/LibraryAdd'
import MoveToInboxIcon from '@mui/icons-material/MoveToInbox'
import ChatNavItemComponent from './ChatNavItemComponent'

interface IChatNavComponentProps {
  isPanelOpen: boolean
  togglePanel: () => void
  selectedChat: number | null
  selectChat: (chatId: number | null) => void
}

const ChatNavComponent = ({ isPanelOpen, togglePanel, selectedChat, selectChat }: IChatNavComponentProps) => {
  const handleNewChat = () => {
    selectChat(null)
  }

  const handleToggleChatNav = () => {
    selectChat(null)
    togglePanel()
  }

  const panelStyle = {
    p: '15px',
    width: '300px',
    height: isPanelOpen ? '100%' : '0px',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    overflow: 'hidden',
    transition: 'height 0.3s ease',
  }

  const subHeaderStyle = {
    backgroundColor: 'transparent',
    color: 'white',
    lineHeight: 1,
    padding: '12px',
  }

  const chats = [
    {
      time: 'Today',
      items: [
        { id: 1, text: 'New Chat 1', color: 'red' },
        { id: 2, text: 'New Chat 2', color: 'red' },
      ],
    },
    {
      time: 'Last 7 days',
      items: [
        { id: 3, text: 'New Chat 3', color: 'green' },
        { id: 4, text: 'New Chat 4', color: 'green' },
        { id: 5, text: 'New Chat 5', color: 'green' },
      ],
    },
    {
      time: 'Last 30 days',
      items: [
        { id: 6, text: 'New Chat 6', color: 'green' },
        { id: 7, text: 'New Chat 7', color: 'green' },
        { id: 8, text: 'New Chat 8', color: 'green' },
        { id: 9, text: 'New Chat 9', color: 'green' },
        { id: 10, text: 'New Chat 10', color: 'green' },
        { id: 11, text: 'New Chat 11', color: 'green' },
      ],
    },
  ]

  return (
    <>
      <Stack sx={panelStyle} gap={3}>
        <Stack spacing={2} direction={'row'} justifyContent={'space-between'}>
          <ToggleButton onClick={handleToggleChatNav} color="primary" value="check">
            <KeyboardDoubleArrowLeftIcon />
          </ToggleButton>
          <ToggleButton color="primary" value="check" onClick={handleNewChat}>
            <LibraryAddIcon />
          </ToggleButton>
        </Stack>
        <Button startIcon={<MoveToInboxIcon />} variant="grayButton">
          Archived chats
        </Button>
        <List component="nav" sx={{ maxHeight: '550px', overflowY: 'auto' }}>
          {chats.map((chat, index) => (
            <>
              <ListSubheader style={subHeaderStyle}>{chat.time}</ListSubheader>
              {chat.items.map((item) => (
                <ChatNavItemComponent
                  key={item.id}
                  chat={item}
                  isSelected={selectedChat === item.id}
                  selectChat={selectChat}
                />
              ))}
            </>
          ))}
        </List>
      </Stack>
    </>
  )
}

export default ChatNavComponent
