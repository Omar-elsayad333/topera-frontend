'use client'

import ListItemButton from '@mui/material/ListItemButton'
import ListItemText from '@mui/material/ListItemText'
import ListItemSecondaryAction from '@mui/material/ListItemSecondaryAction'
import IconButton from '@mui/material/IconButton'
import { MoreHorizRounded } from '@mui/icons-material'
import { ListItem } from '@mui/material'
import { IConversation } from '@/types/pages/chat'
import { useRouter } from 'next/navigation'

interface IChatNavItemComponentProps {
  isSelected: boolean
  selectChat: (conversationId: string) => void
  conversation: IConversation
}

const ChatNavItemComponent = ({ conversation, isSelected, selectChat }: IChatNavItemComponentProps) => {
  const router = useRouter()

  const handleSelectChat = async () => {
    selectChat(conversation.id)
    router.replace(`chat?chatId=${conversation.id}`)
  }

  return (
    <ListItem>
      <ListItemButton selected={isSelected} onClick={handleSelectChat}>
        <ListItemText primary={conversation.name} />
        <ListItemSecondaryAction>
          <IconButton edge="end" aria-label="more">
            <MoreHorizRounded />
          </IconButton>
        </ListItemSecondaryAction>
      </ListItemButton>
    </ListItem>
  )
}

export default ChatNavItemComponent