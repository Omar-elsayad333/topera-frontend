'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Orbitron } from 'next/font/google'
import { useParams, usePathname } from 'next/navigation'

// Next intl
import { useTranslations } from 'next-intl'

// Constants
import { navigations } from '@/constants'

// MUI
import Box from '@mui/material/Box'
import Menu from '@mui/material/Menu'
import { useTheme } from '@mui/material'
import Button from '@mui/material/Button'
import MenuItem from '@mui/material/MenuItem'
import MenuIcon from '@mui/icons-material/Menu'
import IconButton from '@mui/material/IconButton'

const orbitron = Orbitron({
  display: 'swap',
  subsets: ['latin'],
})

const MobileLayoutComponent: React.FC = () => {
  const theme = useTheme()
  const params = useParams()
  const pathname = usePathname()
  const t = useTranslations('nav')

  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null)

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget)
  }

  const handleCloseNavMenu = () => {
    setAnchorElNav(null)
  }

  return (
    <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
      <IconButton
        size="large"
        color="inherit"
        aria-haspopup="true"
        aria-controls="menu-appbar"
        onClick={handleOpenNavMenu}
        aria-label="account of current user"
      >
        <MenuIcon />
      </IconButton>
      <Menu
        id="menu-appbar"
        anchorEl={anchorElNav}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        keepMounted
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        open={Boolean(anchorElNav)}
        onClose={handleCloseNavMenu}
        sx={{
          display: { xs: 'block', md: 'none' },
        }}
      >
        {navigations.map((page: any, index: number) => (
          <MenuItem key={index} onClick={handleCloseNavMenu}>
            <Link href={page.value}>
              <Button
                sx={{
                  display: 'block',
                  fontSize: '14px',
                  textTransform: 'capitalize',
                  fontWeight: (
                    page.name != 'Home' ? pathname.startsWith(page.value, 3) : pathname === `/${params.locale}`
                  )
                    ? 700
                    : 400,
                  color: (page.name != 'Home' ? pathname.startsWith(page.value, 3) : pathname === `/${params.locale}`)
                    ? theme.palette.primary.main
                    : theme.palette.secondary.main,
                }}
              >
                <p
                  className={`${orbitron.className} ${
                    (page.name != 'Home' ? pathname.startsWith(page.value, 3) : pathname === `/${params.locale}`) &&
                    'active-nav-link'
                  }`}
                >
                  {t(page.text)}
                </p>
              </Button>
            </Link>
          </MenuItem>
        ))}
      </Menu>
    </Box>
  )
}

export default MobileLayoutComponent
