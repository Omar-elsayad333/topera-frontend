'use client'

import Image from 'next/image'
import { useState } from 'react'
import { useRouter } from 'next/navigation'

// Assets
import MeAvatar from '@/assets/images/me.jpg'

// Constants
import { ILocales, localesObject } from '@/constants'

// Components
import ThemeSwitchComponent from '@/components/shared/ThemeSwitchComponent'

// MUI
import Box from '@mui/material/Box'
import Menu from '@mui/material/Menu'
import Button from '@mui/material/Button'
import Tooltip from '@mui/material/Tooltip'
import MenuItem from '@mui/material/MenuItem'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
import NotificationsIcon from '@mui/icons-material/Notifications'

const SettingComponent: React.FC = () => {
  const router = useRouter()

  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null)

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget)
  }

  const handleCloseUserMenu = () => {
    setAnchorElUser(null)
  }

  return (
    <Box sx={{ flexGrow: 0, display: 'flex', gap: '15px' }}>
      <Box sx={{ display: { xs: 'none', md: 'inline' } }}>
        <ThemeSwitchComponent />
      </Box>
      <Button aria-label="Notification" color="inherit" sx={{ width: '40px', minWidth: 'unset' }}>
        <NotificationsIcon />
      </Button>
      <Tooltip title="Open settings">
        <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
          <Image
            priority
            width={40}
            height={40}
            src={MeAvatar}
            alt="omar elsayad"
            style={{ objectFit: 'cover', borderRadius: '50%' }}
          />
        </IconButton>
      </Tooltip>

      <Menu
        sx={{ mt: '45px' }}
        id="menu-appbar"
        anchorEl={anchorElUser}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        keepMounted
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        open={Boolean(anchorElUser)}
        onClose={handleCloseUserMenu}
      >
        {localesObject.map((locale: ILocales, index: number) => (
          <MenuItem key={index} onClick={() => router.push(`/${locale.value}`)}>
            <Typography textAlign="center">{locale.text}</Typography>
          </MenuItem>
        ))}
      </Menu>
    </Box>
  )
}

export default SettingComponent
