'use client'
import { useState } from 'react'

// Next intl
import { useTranslations } from 'next-intl'

// MUI
import Box from '@mui/material/Box'
import Tab from '@mui/material/Tab'
import List from '@mui/material/List'
import Tabs from '@mui/material/Tabs'
import Button from '@mui/material/Button'
import Toolbar from '@mui/material/Toolbar'
import ListItem from '@mui/material/ListItem'
import AddIcon from '@mui/icons-material/Add'
import MailIcon from '@mui/icons-material/Mail'
import IconButton from '@mui/material/IconButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import InboxIcon from '@mui/icons-material/MoveToInbox'
import InventoryIcon from '@mui/icons-material/Inventory'
import ListItemButton from '@mui/material/ListItemButton'
import MoreHorizRoundedIcon from '@mui/icons-material/MoreHorizRounded'
import ChatBubbleRoundedIcon from '@mui/icons-material/ChatBubbleRounded'

const ChatContentComponent = () => {
  const t = useTranslations('matching_chat_nav')
  const [value, setValue] = useState(0)

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue)
  }

  return (
    <Box>
      <Toolbar sx={{ p: '0px !important' }}>
        <Tabs
          value={value}
          variant="fullWidth"
          sx={{ width: '100%' }}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab
            label={t('learn')}
            value={0}
            sx={{
              textTransform: 'capitalize',
              fontWeight: value === 0 ? 600 : 400,
              fontSize: value === 0 ? '14px' : '12px',
            }}
          />
          <Tab
            label={t('work')}
            value={1}
            sx={{
              textTransform: 'capitalize',
              fontWeight: value === 1 ? 600 : 400,
              fontSize: value === 1 ? '14px' : '12px',
            }}
          />
        </Tabs>
      </Toolbar>
      <Box sx={{ px: 3 }}>
        <Box sx={{ py: 2, display: 'flex', gap: '16px' }}>
          <Button
            startIcon={<AddIcon />}
            sx={{
              flexGrow: '1',
              justifyContent: 'flex-start',
              border: '2px solid #B3B3B3CC',
              color: '#000',
              fontWeight: 600,
              borderRadius: '6px',
            }}
            variant="outlined"
          >
            new chat
          </Button>
          <IconButton
            sx={{ border: '2px solid #B3B3B3CC', color: '#000', fontWeight: 600, borderRadius: '6px' }}
            aria-label="Archive"
          >
            <InventoryIcon />
          </IconButton>
        </Box>
        {value === 0 && (
          <List>
            {['omar', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
              <ListItem key={text} disablePadding>
                <ListItemButton sx={{ borderRadius: '6px', alignItems: 'center' }}>
                  <ListItemIcon sx={{ minWidth: '35px' }}>
                    <ChatBubbleRoundedIcon />
                  </ListItemIcon>
                  <ListItemText primary={text} />
                  <ListItemIcon sx={{ minWidth: 'unset' }}>
                    <MoreHorizRoundedIcon />
                  </ListItemIcon>
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        )}
        {value === 1 && (
          <List>
            {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
              <ListItem key={text} disablePadding>
                <ListItemButton sx={{ borderRadius: '6px', alignItems: 'center' }}>
                  <ListItemIcon sx={{ minWidth: '35px' }}>
                    <ChatBubbleRoundedIcon />
                  </ListItemIcon>
                  <ListItemText primary={text} />
                  <ListItemIcon sx={{ minWidth: 'unset' }}>
                    <MoreHorizRoundedIcon />
                  </ListItemIcon>
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        )}
      </Box>
    </Box>
  )
}

export default ChatContentComponent
