import { Metadata } from 'next'

// Components
import MatchingChatComponent from '@/components/pages/MatchingChatComponent'

// Types
import { MatchingEnum } from '@/types/matching'

// Services
import { getData } from '@/services/requestHandler'

export const metadata: Metadata = {
  title: 'Matching Chat',
}

const MatchingChat = async () => {
  const matchingData = await getData(`/matching/${MatchingEnum.LEARN}`)

  return <MatchingChatComponent matchingData={matchingData} />
}

export default MatchingChat
