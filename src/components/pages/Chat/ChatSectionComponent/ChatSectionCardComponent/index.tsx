'use client'

import { IConversationMessages } from '@/types/pages/chat'
import { Avatar, Stack, SxProps, Typography } from '@mui/material'
import Image from 'next/image'
import { ESender } from '@/types/enums'
import AvatarLogo from '@/assets/images/avatar_logo.svg'
import { uiAvatar } from '@/utils'

interface IChatSectionCardComponentProps {
  conversationMessages: IConversationMessages | null
}

const ChatSectionCardComponent = ({ conversationMessages }: IChatSectionCardComponentProps) => {
  const cardStyle: SxProps = {
    p: '15px',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    borderRadius: '20px',
  }

  return (
    <>
      {conversationMessages?.messages?.map((message) => (
        <Stack key={message.id} direction={'row'} gap={2} sx={cardStyle}>
          {message.sender === ESender.User ? (
            <Avatar
              src={uiAvatar(conversationMessages.userName)} // Assuming `userName` is available in `message`
              alt={conversationMessages.userName}
              sx={{ width: 40, height: 40 }}
            />
          ) : (
            <Image src={AvatarLogo} alt={'Topera'} width={40} height={40} />
          )}
          <Stack gap={1} sx={{ color: 'white' }}>
            <Typography fontWeight={600}>
              {message.sender === ESender.User ? conversationMessages.userName : 'Topera'}{' '}
              {/* Assuming `userName` is available */}
            </Typography>
            <Typography fontWeight={400}>{message.content}</Typography>
          </Stack>
        </Stack>
      ))}
    </>
  )
}

export default ChatSectionCardComponent
