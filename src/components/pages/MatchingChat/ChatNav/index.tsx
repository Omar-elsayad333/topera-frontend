'use client'

// Store
import { useMatching } from '@/stores'

// Components
import ChatNavContentComponent from './ChatNavContentComponent'

// MUI
import Box from '@mui/material/Box'
import { useTheme } from '@mui/material'
import Drawer from '@mui/material/Drawer'

const ChatNav: React.FC = () => {
  const theme = useTheme()
  const mobileNav = useMatching((state) => state.mobileNav)
  const updateMobileNav = useMatching((state) => state.updateMobileNav)

  const handleDrawerClose = () => {
    updateMobileNav()
  }

  return (
    <Box
      component="nav"
      sx={{
        width: '100%',
        flexShrink: { sm: 0 },
        borderInline: `1px solid ${theme.palette.text.primary}`,
      }}
      aria-label="mailbox folders"
    >
      <Drawer
        variant="temporary"
        open={mobileNav}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        sx={{
          display: { xs: 'block', md: 'none' },
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: '100%' },
        }}
      >
        {<ChatNavContentComponent />}
      </Drawer>
      <Box
        component="nav"
        className="full-screen"
        sx={{
          display: { xs: 'none', md: 'block' },
          boxShadow: '0px 0px 12px 0px #00000040',
          background: theme.palette.background.paper,
        }}
      >
        {<ChatNavContentComponent />}
      </Box>
    </Box>
  )
}

export default ChatNav
