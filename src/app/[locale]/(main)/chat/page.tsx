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
    <Box sx={{ position: 'relative', width: '100%', height: 'calc(100dvh - 73px)', overflow: 'hidden' }}>
      <UnityComponent />
      <Grid
        container
        sx={{
          m: 0,
          top: 0,
          zIndex: 3,
          width: '100%',
          height: '100%',
          position: 'absolute',
        }}
      >
        <Grid item xl={2} lg={3} md={4} sx={{ maxHeight: '100%' }}>
          {!isPanelOpen ? (
            <ToggleButton color="primary" value="check" onClick={togglePanel}>
              <KeyboardDoubleArrowRightIcon />
            </ToggleButton>
          ) : (
            <ChatNavComponent
              selectChat={selectChat}
              isPanelOpen={isPanelOpen}
              togglePanel={togglePanel}
              selectedChat={selectedChat}
            />
          )}
        </Grid>
        <Grid item xl={10} lg={9} md={8} sx={{ height: '100%', maxHeigth: '100%', p: 4 }}>
          <ChatSectionComponent selectedChat={selectedChat} setSelectedChat={selectChat} />
        </Grid>
      </Grid>
    </Box>
  )
}

export default Chat
