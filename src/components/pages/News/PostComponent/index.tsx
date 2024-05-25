import Image from 'next/image'

// Types
import { CSSProperties } from 'react'

// Components
import PostActionsComponent from './PostActionsComponent'

// MUI
import Box from '@mui/material/Box'
import Chip from '@mui/material/Chip'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'

const PostComponent = () => {
  const avatarStyle: CSSProperties = {
    borderRadius: '50%',
    background: 'black',
  }
  const postImageStyle: CSSProperties = {
    width: '100%',
    aspectRatio: '3 / 1',
    background: 'black',
  }
  const postChipStyle: CSSProperties = {
    fontWeight: '600',
    borderRadius: '8px',
  }

  return (
    <Stack gap={2}>
      <Stack direction={'row'} alignItems={'center'} gap={2}>
        <Image src={''} alt="" style={avatarStyle} width={40} height={40} />
        <Stack direction={'row'} alignItems={'center'} gap={1}>
          <Typography fontWeight={500} variant="h5">
            Google
          </Typography>
          <Typography fontWeight={500} variant="h6">
            7 Days ago
          </Typography>
        </Stack>
      </Stack>
      <Box sx={postImageStyle}>
        <Image src={''} alt="" style={avatarStyle} />
      </Box>
      <Typography variant="h3" fontWeight={900}>
        title
      </Typography>
      <Typography variant="h5">body</Typography>
      <Stack direction={'row'} flexWrap={'wrap'} gap={1}>
        <Typography sx={{ flex: '100%' }}>Tags</Typography>
        <Chip label="hi" sx={postChipStyle} />
      </Stack>
      <PostActionsComponent />
    </Stack>
  )
}

export default PostComponent
