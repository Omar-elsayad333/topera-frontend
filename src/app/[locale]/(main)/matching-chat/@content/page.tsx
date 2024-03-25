import { NextPage } from 'next'

// Services
import { serverAction } from '@/services/actions'

// Components
import ChatContent from '@/components/pages/MatchingChat/ChatContent'
import LandingComponent from '@/components/pages/MatchingChat/ChatContent/LandingComponent'

// MUI
import Container from '@mui/material/Container'

interface IProps {
  searchParams: { [key: string]: string | string[] | undefined }
}

const MatchingChatContent: NextPage<IProps> = async ({ searchParams }) => {
  const chatId = searchParams.chatId
  const data = await serverAction({ endpoint: `/matching/${chatId}`, method: 'GET' })

  return (
    <>
      {!chatId ? (
        <LandingComponent />
      ) : (
        <Container maxWidth="md">
          <ChatContent data={data.data} />
        </Container>
      )}
    </>
  )
}

export default MatchingChatContent
