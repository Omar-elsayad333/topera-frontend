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
  let data
  const chatId = searchParams.chatId
  chatId && (data = await serverAction(`/matching/${chatId}`))

  return (
    <>
      {!chatId ? (
        <LandingComponent />
      ) : (
        <Container maxWidth="md" className="noScrollbar full-screen" sx={{ overflow: 'auto' }}>
          <ChatContent data={data.data} />
        </Container>
      )}
    </>
  )
}

export default MatchingChatContent
