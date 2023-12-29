'use client'

import Link from 'next/link'

// Routes
import routes from '@/routes/routes'

// MUI
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'

const NavbarComponent = () => {
  return (
    <Container maxWidth="xl" component={'header'}>
      <Typography component={'h1'} variant="h2">
        This Is My Layout
      </Typography>
      <Box>
        <Link href={routes.login}>Login</Link>
      </Box>
      <Button variant="contained">
        <Link href="/ar/login">Arabic</Link>
      </Button>
      <Button variant="contained">
        <Link href="/en/login">English</Link>
      </Button>
    </Container>
  )
}

export default NavbarComponent
