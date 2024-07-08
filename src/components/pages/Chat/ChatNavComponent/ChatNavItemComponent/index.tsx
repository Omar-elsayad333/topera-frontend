'use client'

import ListItemButton from '@mui/material/ListItemButton'
import ListItemText from '@mui/material/ListItemText'
import ListItemSecondaryAction from '@mui/material/ListItemSecondaryAction'
import IconButton from '@mui/material/IconButton'

import { MoreHorizRounded } from '@mui/icons-material'
import { ListItem } from '@mui/material'
import { IConversation } from '@/container/Chat/useChatContext'
import { AppRouterInstance } from 'next/dist/shared/lib/app-router-context.shared-runtime'
import { useRouter } from 'next/navigation'

interface IChatNavItemComponentProps {
  isSelected: boolean
  selectChat: (conversationId: string) => void
  conversation: IConversation
  chatMessageData: any
  getChatMessageData: (conversationId: string) => void
}

const ChatNavItemComponent = ({
  conversation,
  isSelected,
  selectChat,
  chatMessageData,
  getChatMessageData,
}: IChatNavItemComponentProps) => {
  const router = useRouter()
  const handleSelectChat = async () => {
    selectChat(conversation.id)
    router.replace(`chat?chatId=${conversation.id}`)
  }

  return (
    <>
      <ListItem>
        <ListItemButton selected={isSelected} onClick={handleSelectChat}>
          <ListItemText primary={'name for now'} />
          <ListItemSecondaryAction>
            <IconButton edge="end" aria-label="more">
              <MoreHorizRounded />
            </IconButton>
          </ListItemSecondaryAction>
        </ListItemButton>
      </ListItem>
    </>
  )
}

export default ChatNavItemComponent
