import React from 'react'
import Drawer from '@mui/material/Drawer'
import List from '@mui/material/List'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemText from '@mui/material/ListItemText'
import Divider from '@mui/material/Divider'

interface ChatNavDrawerProps {
  open: boolean
  onClose: () => void
}

const ChatNavDrawer = ({ open, onClose }: ChatNavDrawerProps) => {
  const chatList = [
    { id: 1, name: 'Chat 1' },
    { id: 2, name: 'Chat 2' },
    { id: 3, name: 'Chat 3' },
    { id: 4, name: 'Chat 4' },
  ]

  return (
    <Drawer
      anchor="left"
      open={open}
      onClose={onClose}
      sx={{
        '& .MuiDrawer-paper': {
          width: 300,
        },
      }}
    >
      <List>
        {chatList.map((chat) => (
          <React.Fragment key={chat.id}>
            <ListItemButton onClick={() => console.log(`Selected ${chat.name}`)}>
              <ListItemText primary={chat.name} />
            </ListItemButton>
            <Divider />
          </React.Fragment>
        ))}
      </List>
    </Drawer>
  )
}

export default ChatNavDrawer
