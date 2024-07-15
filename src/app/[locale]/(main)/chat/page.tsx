'use client'

import { useEffect } from 'react'
import { Box, Grid, ToggleButton } from '@mui/material'
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight'
import ChatNavComponent from '@/components/pages/Chat/ChatNavComponent'
import UnityComponent from '@/components/pages/Chat/UnityComponent'
import useChatContext from '@/container/Chat/useChatContext'
import { NextPage } from 'next'
import ChatSectionComponent from '@/components/pages/Chat/ChatSectionComponent'

interface IProps {
  searchParams: { [key: string]: string | string[] | undefined }
}

const Chat: NextPage<IProps> = ({ searchParams }) => {
  const {
    isPanelOpen,
    togglePanel,
    chatData,
    selectChat,
    loading,
    getNavData,
    addMessage,
    createConversation,
    setUnityInstance,
  } = useChatContext()

  useEffect(() => {
    const chatId = Array.isArray(searchParams.chatId) ? searchParams.chatId[0] : searchParams.chatId
    if (chatId) {
      selectChat(chatId)
    }
  }, [searchParams.chatId])

  const handleToggleButton = async () => {
    await getNavData()
    togglePanel()
  }

  return (
    <Box sx={{ position: 'relative', width: '100%', height: 'calc(100dvh - 73px)', overflow: 'hidden' }}>
      <UnityComponent setUnityInstance={setUnityInstance} />
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
            <ToggleButton color="primary" value="check" onClick={handleToggleButton}>
              <KeyboardDoubleArrowRightIcon />
            </ToggleButton>
          ) : (
            <ChatNavComponent
              conversationData={chatData.navChatData}
              selectChat={selectChat}
              isPanelOpen={isPanelOpen}
              togglePanel={togglePanel}
              selectedChat={chatData.chatMessageData ? chatData.chatMessageData.id : null}
            />
          )}
        </Grid>
        <Grid item xl={10} lg={9} md={8} sx={{ height: '100%', maxHeigth: '100%', p: '10px' }}>
          <ChatSectionComponent
            conversationMessages={chatData.chatMessageData}
            selectedChat={chatData.chatMessageData ? chatData.chatMessageData.id : null}
            addMessage={addMessage}
            createConversation={createConversation}
          />
        </Grid>
      </Grid>
    </Box>
  )
}

export default Chat
