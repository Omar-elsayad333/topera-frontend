import Image from 'next/image'
import { PropsWithChildren } from 'react'

// Utils
import { uiAvatar } from '@/utils'

// Components
import DelayedComponent from '@/components/shared/AnimationComponents/DelayedComponent'
import TypeAnimationComponet from '@/components/shared/AnimationComponents/TypeAnimationComponet'

// MUI
import Stack from '@mui/material/Stack'
import Avatar from '@mui/material/Avatar'
import Typography from '@mui/material/Typography'

interface IProps {
  body: string
  title: string
  avatar: string
}

const MessageComponent = ({ children, avatar, title, body }: PropsWithChildren<IProps>) => {
  return (
    <Stack direction={'row'} spacing={2}>
      {avatar ? (
        <Image src={avatar} alt={title} width={40} height={40} />
      ) : (
        <Avatar src={uiAvatar(title)} alt={title} sx={{ width: 40, height: 40 }} />
      )}
      <Stack spacing={2} sx={{ pt: 1, flexGrow: 1 }}>
        {<Typography fontWeight={600}>{title}</Typography>}
        <Stack spacing={1}>
          {body && <TypeAnimationComponet text={body} />}
          <DelayedComponent delay={3000}>{children}</DelayedComponent>
        </Stack>
      </Stack>
    </Stack>
  )
}

export default MessageComponent
