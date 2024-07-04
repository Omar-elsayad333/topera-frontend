'use client'

import ChatNavComponent from '@/components/pages/Chat/ChatNavComponent'
import Grid from '@mui/material/Grid'
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight'
import ChatSectionComponent from '@/components/pages/Chat/ChatSectionComponent'
import UnityComponent from '@/components/pages/Chat/UnityComponent'
import { Box, ToggleButton } from '@mui/material'
import useChatContext from '@/container/Chat/useChatContext'

const Chat = () => {
  const { isPanelOpen, togglePanel, selectedChat, selectChat } = useChatContext()

  return (
    <Box sx={{ position: 'relative', height: 'calc(100dvh - 80px)', overflowY: 'auto' }}>
      <UnityComponent />
      <Grid
        container
        spacing={1}
        sx={{
          height: '100&',
          position: 'absolute',
          top: 0,
          zIndex: 3,
        }}
      >
        <Grid item md={3}>
          {!isPanelOpen && (
            <ToggleButton color="primary" value="check" onClick={togglePanel}>
              <KeyboardDoubleArrowRightIcon />
            </ToggleButton>
          )}
          {isPanelOpen && (
            <ChatNavComponent
              isPanelOpen={isPanelOpen}
              togglePanel={togglePanel}
              selectedChat={selectedChat}
              selectChat={selectChat}
            />
          )}
        </Grid>
        <Grid item md={9} sx={{ maxHeight: 'calc(100dvh - 110px)' }}>
          <ChatSectionComponent selectedChat={selectedChat} setSelectedChat={selectChat} />
        </Grid>
      </Grid>
    </Box>
  )
}

export default Chat
