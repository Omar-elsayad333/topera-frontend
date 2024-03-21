// Components
import LandingStageComponent from '@/components/pages/MatchingChat/LandingStageComponent'

// MUI
import Container from '@mui/material/Container'

const MatchingChatContent = () => {
  return (
    <Container className="full-screen" sx={{ display: 'flex' }}>
      <LandingStageComponent />
    </Container>
  )
}

export default MatchingChatContent
