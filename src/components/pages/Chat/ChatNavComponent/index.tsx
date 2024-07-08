'use client'

import Button from '@mui/material/Button'
import ToggleButton from '@mui/material/ToggleButton'
import { List, ListSubheader, Stack, SxProps } from '@mui/material'
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft'
import LibraryAddIcon from '@mui/icons-material/LibraryAdd'
import MoveToInboxIcon from '@mui/icons-material/MoveToInbox'
import ChatNavItemComponent from './ChatNavItemComponent'
import { IConversationData } from '@/container/Chat/useChatContext'
import { AppRouterInstance } from 'next/dist/shared/lib/app-router-context.shared-runtime'

interface IChatNavComponentProps {
  isPanelOpen: boolean
  togglePanel: () => void
  selectedChat: string | null
  selectChat: (conversationId: string | null) => void
  conversationData: IConversationData[] | undefined
  chatMessageData: any
  getChatMessageData: (conversationId: string) => void
}

const ChatNavComponent = ({
  isPanelOpen,
  togglePanel,
  selectedChat,
  selectChat,
  conversationData,
  chatMessageData,
  getChatMessageData,
}: IChatNavComponentProps) => {
  const handleNewChat = () => {
    selectChat(null)
  }

  const handleToggleChatNav = () => {
    selectChat(null)
    togglePanel()
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
        <ToggleButton onClick={handleToggleChatNav} color="primary" value="check">
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
                  chatMessageData={chatMessageData}
                  getChatMessageData={getChatMessageData}
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
