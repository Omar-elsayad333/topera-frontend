// Components
import MatchingChatComponent from '@/components/pages/MatchingChatComponent'

// Services
import { getData } from '@/services/requestHandler'

// MUI
import Container from '@mui/material/Container'

const MatchingChat = async () => {
  const matchingData = await getData('/matching')

  return (
    <Container maxWidth="xl">
      <MatchingChatComponent />
    </Container>
  )
}

export default MatchingChat
