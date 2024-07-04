import ListItemButton from '@mui/material/ListItemButton'
import ListItemText from '@mui/material/ListItemText'
import ListItemSecondaryAction from '@mui/material/ListItemSecondaryAction'
import IconButton from '@mui/material/IconButton'

import { MoreHorizRounded } from '@mui/icons-material'
import { ListItem } from '@mui/material'

interface IChatNavItemComponentProps {
  chat: { id: number; text: string; color: string }
  isSelected: boolean
  selectChat: (chatId: number) => void
}

const ChatNavItemComponent = ({ chat, isSelected, selectChat }: IChatNavItemComponentProps) => {
  const handleSelectChat = () => {
    selectChat(chat.id)
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
