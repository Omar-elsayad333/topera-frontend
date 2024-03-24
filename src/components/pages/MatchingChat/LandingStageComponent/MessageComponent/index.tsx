import Image from 'next/image'
import { PropsWithChildren } from 'react'

// Components
import TypeAnimationComponet from '@/components/shared/TypeAnimationComponent'

// MUI
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

interface IProps {
  avatar: string
  title: string
  body: string
}

const MessageComponent = ({ children, avatar, title, body }: PropsWithChildren<IProps>) => {
  return (
    <Box>
      <Box>
        <Image src="" alt="" />
        <Typography>
          <TypeAnimationComponet text={title} />
        </Typography>
      </Box>
      <Box>
        {body}
        {children}
      </Box>
    </Box>
  )
}

export default MessageComponent
