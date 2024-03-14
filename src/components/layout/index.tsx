import { FunctionComponent, PropsWithChildren } from 'react'

// Components
import NavbarComponent from './NavbarComponent'
import FooterComponent from './FooterComponent'

// MUI
import Box from '@mui/material/Box'

const Layout: FunctionComponent<PropsWithChildren> = ({ children }) => {
  return (
    <Box sx={{ display: 'flex' }}>
      <Box sx={{ flexGrow: 1 }}>
        <NavbarComponent />
        {children}
        <FooterComponent />
      </Box>
    </Box>
  )
}

export default Layout
