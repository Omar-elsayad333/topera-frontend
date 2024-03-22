import { NextPage } from 'next'

// Components
import LandingStageComponent from '@/components/pages/MatchingChat/LandingStageComponent'

// MUI
import Container from '@mui/material/Container'

interface IProps {
  searchParams: { [key: string]: string | string[] | undefined }
}

const MatchingChatContent: NextPage<IProps> = ({ searchParams }) => {
  const chatId = searchParams.chatId

  return (
    <Container className="full-screen" sx={{ display: 'flex' }}>
      {chatId ? 'omar' : <LandingStageComponent />}
    </Container>
  )
}

export default MatchingChatContent
