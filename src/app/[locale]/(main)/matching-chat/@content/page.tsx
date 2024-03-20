// Components
import LandingStageComponent from '@/components/pages/MatchingChat/LandingStageComponent'

// MUI
import Container from '@mui/material/Container'

const MatchingChatContent = () => {
  return (
    <Container
      sx={{
        gap: '30px',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <LandingStageComponent />
      <p>omar</p>
    </Container>
  )
}

export default MatchingChatContent
