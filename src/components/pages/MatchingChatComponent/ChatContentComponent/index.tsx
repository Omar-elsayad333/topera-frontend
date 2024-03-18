//  MUI
import { Container } from '@mui/material'

// Components
import LandingStageComponent from './LandingStageComponent/page'

const ChatContentComponent = () => {
  return (
    <Container
      sx={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        gap: '30px',
        alignItems: 'center',
      }}
    >
      <LandingStageComponent />
      <p>omar</p>
    </Container>
  )
}

export default ChatContentComponent
