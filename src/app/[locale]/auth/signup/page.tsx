import { NextPage } from 'next'

// Components
import SignupComponent from '@/components/SignupComponent'

// MUI
import Container from '@mui/material/Container'

const Signup: NextPage = async () => {
  return (
    <Container component={'section'} maxWidth="sm">
      <SignupComponent />
    </Container>
  )
}

export default Signup
