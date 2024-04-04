import Image from 'next/image'

// Types
import { IRecomondationUsers } from '../types'

// Assets
import CancelIcon from '@/assets/icons/cancel.svg'

// MUI
import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import { SxProps } from '@mui/material'
import Button from '@mui/material/Button'

const UserCard = ({ data }: { data: IRecomondationUsers }) => {
  const styles: SxProps = {
    aspectRatio: 2 / 3,
    background: 'blue',
    // backgroundImage:
    // 'url("https://s3-alpha-sig.figma.com/img/5463/768a/aa87bd365a3612eef8936f54c58d47e5?Expires=1712534400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=NTIq52nz-niHxKDTXg3-~09BVyYszWF6iC1xza9admnYf~fZDN83NLGZHgJ4zVtV0VQLlxg9oM4uk6SxogBZl7ebCETyTb-hxtwZ11ZqV~cBnuj2xsDYsiLPLMPZsQfAD0FQWYjqAguqGd77U1SIjnsHijpOOpwC-FDz6q92mCkRzGGoXvSibn5PPNA5O6lU5wgiweoKKG9NYgbGPAfopanzJpdvA1t-EgiwLm52M5JVQhAbKQ~X5bth4PXdbM25cH0Qs68PLBz1XnN51PYFyW-q8qZE76WYpV2km8Y49OXPXt-nQ1L2pBDo83qBd~jwcRpK3WqoTVqlq8~2tJSUXA__"',
  }

  return (
    <Stack sx={{ width: '100%' }} gap={1}>
      <Box sx={styles}>{data.name}</Box>
      <Stack direction={'row'} gap={1}>
        <Button variant="contained" color="error" sx={{ flexGrow: 1 }}>
          <Image src={CancelIcon} alt="Reject" />
        </Button>
        <Button variant="contained" color="success" sx={{ flexGrow: 3, fontSize: '10px' }}>
          Match!
        </Button>
      </Stack>
    </Stack>
  )
}

export default UserCard
