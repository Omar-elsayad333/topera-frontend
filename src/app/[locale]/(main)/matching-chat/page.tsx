// Components
import MatchingChatComponent from '@/components/pages/MatchingChatComponent'

// Services
import { getData } from '@/services/requestHandler'

const MatchingChat = async () => {
  const matchingData = await getData('/matching')

  return <MatchingChatComponent />
}

export default MatchingChat
