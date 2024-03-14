'use client'

import Image from 'next/image'
import { useState } from 'react'

// Assets
import MeAvatar from '@/assets/images/me.jpg'

// Components
import ThemeSwitchComponent from '@/components/shared/ThemeSwitchComponent'

// MUI
import Box from '@mui/material/Box'
import Menu from '@mui/material/Menu'
import Tooltip from '@mui/material/Tooltip'
import MenuItem from '@mui/material/MenuItem'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
import NotificationsIcon from '@mui/icons-material/Notifications'

// Constants
import { localesObject } from '@/constants'

// Hooks
import { useLocale } from '@/hooks'
import { Button } from '@mui/material'

const SettingComponent: React.FC = () => {
  const { changeLocale } = useLocale()

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
      <Button color="inherit" sx={{ width: '40px', minWidth: 'unset' }}>
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
        {localesObject.map((locale: any, index: number) => (
          <MenuItem key={index} onClick={() => changeLocale(locale.value)}>
            <Typography textAlign="center">{locale.text}</Typography>
          </MenuItem>
        ))}
      </Menu>
    </Box>
  )
}

export default SettingComponent
