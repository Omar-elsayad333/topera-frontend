import Image from 'next/image'
import { PropsWithChildren } from 'react'

// Utils
import { uiAvatar } from '@/utils'

// Components
import TypeAnimationComponet from '@/components/shared/AnimationComponents/TypeAnimationComponet'

// MUI
import Box from '@mui/material/Box'
import Avatar from '@mui/material/Avatar'
import Typography from '@mui/material/Typography'
import DelayedComponent from '@/components/shared/AnimationComponents/DelayedComponent'

interface IProps {
  avatar: string
  title: string
  body: string
}

const MessageComponent = ({ children, avatar, title, body }: PropsWithChildren<IProps>) => {
  return (
    <Box sx={{ display: 'flex', gap: '16px' }}>
      {avatar ? (
        <Image src={avatar} alt={title} width={40} height={40} />
      ) : (
        <Avatar src={uiAvatar(title)} alt={title} sx={{ width: 40, height: 40 }} />
      )}
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: '8px', pt: 1 }}>
        {<Typography fontWeight={600}>{title}</Typography>}
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'start', gap: '8px' }}>
          {body && <TypeAnimationComponet text={body} />}
          <DelayedComponent delay={3000}>{children}</DelayedComponent>
        </Box>
      </Box>
    </Box>
  )
}

export default MessageComponent
