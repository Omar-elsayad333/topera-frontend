// Components
import LandingStageComponent from '@/components/pages/MatchingChat/LandingStageComponent'

// MUI
import Container from '@mui/material/Container'

const MatchingChatContent = () => {
  return (
    <Container sx={{ height: '100%', display: 'flex' }}>
      <LandingStageComponent />
    </Container>
  )
}

export default MatchingChatContent
