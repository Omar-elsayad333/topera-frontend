'use client'

import Link from 'next/link'
import { useState } from 'react'
import { useParams } from 'next/navigation'
import { Orbitron } from 'next/font/google'

// Constants
import { navigations } from '@/constants'

// Contexts
import { useDictionary } from '@/contexts/DictionaryContext'

// Hooks
import { useLocale } from '@/hooks'

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
  const params = useParams()
  const theme = useTheme()
  const { dict } = useDictionary()
  const { comparePathnames, addLocale } = useLocale()

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
            <Link key={index} href={addLocale(page.value)}>
              <Button
                sx={{
                  display: 'block',
                  fontSize: '14px',
                  textTransform: 'capitalize',
                  fontWeight: comparePathnames(page.value) ? 700 : 400,
                  color: comparePathnames(page.value) ? theme.palette.primary.main : theme.palette.secondary.main,
                }}
              >
                <p className={`${orbitron.className} ${comparePathnames(page.value) && 'active-nav-link'}`}>
                  {dict?.nav[page.text]}
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
