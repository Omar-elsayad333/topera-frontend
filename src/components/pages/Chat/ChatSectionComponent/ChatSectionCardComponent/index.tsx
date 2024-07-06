import { Stack } from '@mui/material'
import Image from 'next/image'

type Message = {
  id: number
  text: string
  time: string
}

type Chat = {
  name: string
  messages: Message[]
}

type ChatData = {
  [key: number]: Chat
}

// Mock data for chats (replace with actual data or API calls)
const chatData: ChatData = {
  1: {
    name: 'Chat 1',
    messages: [
      { id: 1, text: 'Hello from Chat 1!', time: '10:00 AM' },
      { id: 2, text: 'How are you?', time: '10:05 AM' },
    ],
  },
  2: {
    name: 'Chat 2',
    messages: [
      { id: 1, text: 'Welcome to Chat 2!', time: '11:00 AM' },
      { id: 2, text: 'What can I help you with?', time: '11:15 AM' },
    ],
  },
  // Add more chat data as needed
}

interface IChatSectionCardComponentProps {
  chatId: number
}

const ChatSectionCardComponent = ({ chatId }: IChatSectionCardComponentProps) => {
  const chat = chatData[chatId]
  return (
    <>
      {chat?.messages?.map((message) => (
        <Stack key={message.id} direction={'row'} gap={2}>
          <Image src={'/path/to/avatar.png'} alt="Avatar" width={50} height={50} />
          <Stack gap={1}>
            <p>{message.text}</p>
            <p>{message.time}</p>
          </Stack>
        </Stack>
      ))}
    </>
  )
}

export default ChatSectionCardComponent
