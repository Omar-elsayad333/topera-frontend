import { IConversationMessages } from '@/types/pages/chat'
import { Avatar, Stack, SxProps, Typography } from '@mui/material'
import Image from 'next/image'
// Utils
import { uiAvatar } from '@/utils'
import { ESender } from '@/types/enums'
import AvatarLogo from '@/assets/images/avatar_logo.svg'

interface IChatSectionCardComponentProps {
  conversationId: string
  conversationMessages: IConversationMessages | undefined
}

const ChatSectionCardComponent = ({ conversationId, conversationMessages }: IChatSectionCardComponentProps) => {
  const cardStyle: SxProps = {
    p: '15px',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    borderRadius: '20px',
  }

  return (
    <>
      {conversationMessages?.messages?.map((message) => (
        <Stack key={message.id} direction={'row'} gap={2} sx={cardStyle}>
          {/* {conversationMessages.imageUrl ? (
            <Image src={conversationMessages.imageUrl} alt={conversationMessages.name} width={40} height={40} />
          ) : (
            <Avatar
              src={uiAvatar(conversationMessages.name)}
              alt={conversationMessages.name}
              sx={{ width: 40, height: 40 }}
            />
          )} */}
          {message.sender == ESender.User ? (
            <Avatar
              src={uiAvatar(conversationMessages.name)}
              alt={conversationMessages.name}
              sx={{ width: 40, height: 40 }}
            />
          ) : (
            <Image src={AvatarLogo} alt={'Topera'} width={40} height={40} />
          )}
          <Stack gap={1} sx={{ color: 'white' }}>
            <p></p>
            <Typography fontWeight={600}>
              {message.sender == ESender.User ? conversationMessages.userName : 'Topera'}
            </Typography>
            <Typography fontWeight={400}>{message.content}</Typography>
          </Stack>
        </Stack>
      ))}
    </>
  )
}

export default ChatSectionCardComponent
