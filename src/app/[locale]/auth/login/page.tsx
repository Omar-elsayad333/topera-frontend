import { NextPage } from 'next'

// Components
import LoginComponent from '@/components/LoginComponent'

// MUI
import Container from '@mui/material/Container'

const Login: NextPage = async () => {
  return (
    <Container component={'section'} maxWidth="sm">
      <LoginComponent />
    </Container>
  )
}

export default Login
