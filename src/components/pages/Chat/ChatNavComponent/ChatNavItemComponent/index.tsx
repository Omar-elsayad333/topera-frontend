'use client'

import ListItemButton from '@mui/material/ListItemButton'
import ListItemText from '@mui/material/ListItemText'
import ListItemSecondaryAction from '@mui/material/ListItemSecondaryAction'
import IconButton from '@mui/material/IconButton'
import { MoreHorizRounded } from '@mui/icons-material'
import { ListItem, SxProps } from '@mui/material'
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

  const activeStyle: SxProps = {
    backgroundColor: 'rgba(255, 255, 255, 0.2) !important',
    borderRadius: '10px',
  }

  const textStyle = {
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis',
  }
  return (
    <ListItem>
      <ListItemButton selected={isSelected} sx={isSelected ? activeStyle : {}} onClick={handleSelectChat}>
        <ListItemText sx={textStyle} primary={conversation.name} />
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
