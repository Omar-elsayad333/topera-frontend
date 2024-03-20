'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useParams, usePathname } from 'next/navigation'

// Images
import fullLogo from '@/assets/images/fullLogo.svg'

// Routes
import { Routes } from '@/routes/routes'

// Components
import SettingComponent from './SettingComponent'
import MobileLayoutComponent from './MobileLayoutComponent'
import DesktopLayoutComponent from './DesktopLayoutComponent'

// MUI
import Box from '@mui/material/Box'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Container from '@mui/material/Container'
import { useTheme } from '@mui/material/styles'

const AppBarComponent = () => {
  const theme = useTheme()
  const params = useParams()
  const pathname = usePathname()

  return (
    <AppBar
      color="primary"
      component={'header'}
      sx={{
        boxShadow: 'none',
        borderBottom: '1px solid #00000080',
        background: theme.palette.background.paper,
      }}
      position={pathname !== params.locale ? 'static' : 'sticky'}
    >
      <Container maxWidth={false}>
        <Toolbar disableGutters sx={{ justifyContent: 'space-between' }}>
          <MobileLayoutComponent />
          <Link href={Routes.home}>
            <Box sx={{ height: { xs: '25px', md: '30px' } }}>
              <Image
                height={30}
                alt="Topera"
                quality={100}
                src={fullLogo}
                style={{ margin: '0px 10px', maxHeight: '100%' }}
              />
            </Box>
          </Link>

          <DesktopLayoutComponent />

          <SettingComponent />
        </Toolbar>
      </Container>
    </AppBar>
  )
}

export default AppBarComponent
