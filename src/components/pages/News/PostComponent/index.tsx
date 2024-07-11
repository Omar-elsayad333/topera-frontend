import Image from 'next/image'

// Types
import type { CSSProperties } from 'react'
import type { IOrganization, IPost } from '@/types/pages/news'

// Assets
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder'

// Components
import PostActionsComponent from './PostActionsComponent'

// MUI
import Box from '@mui/material/Box'
import Chip from '@mui/material/Chip'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'

const PostComponent = ({ data, organizationData }: { data: IPost; organizationData?: IOrganization }) => {
  const avatarStyle: CSSProperties = {
    objectFit: 'cover',
    borderRadius: '50%',
    background: 'black',
  }
  const postImageStyle: CSSProperties = {
    width: '100%',
    position: 'relative',
    aspectRatio: '3 / 1',
    background: 'black',
  }
  const postChipStyle: CSSProperties = {
    fontWeight: '600',
    borderRadius: '8px',
  }

  return (
    <Stack gap={2}>
      <Stack direction={'row'} alignItems={'center'} justifyContent={'space-between'} gap={2}>
        <Stack direction={'row'} alignItems={'center'} gap={2}>
          <Image
            alt=""
            width={40}
            height={40}
            style={avatarStyle}
            src={data.organization?.imageUrl || organizationData?.imageUrl || ''}
          />
          <Stack direction={'row'} alignItems={'center'} gap={1}>
            <Typography fontWeight={500} variant="h5">
              {data.organization?.name || organizationData?.name}
            </Typography>
            <Typography fontWeight={500} variant="h6">
              7 Days ago
            </Typography>
          </Stack>
        </Stack>
        <IconButton>
          <BookmarkBorderIcon />
        </IconButton>
      </Stack>
      <Box sx={postImageStyle}>
        <Image src={data.images[0].imageUrl} alt={data.title} objectFit="cover" objectPosition="center" fill />
      </Box>
      <Typography variant="h3" fontWeight={900}>
        {data.title}
      </Typography>
      <Typography variant="h5">{data.body}</Typography>
      <Stack direction={'row'} flexWrap={'wrap'} gap={1}>
        <Typography sx={{ flex: '100%' }}>Tags</Typography>
        {data.tags.map((tag) => (
          <Chip key={tag.id} label={tag.name} sx={postChipStyle} />
        ))}
      </Stack>
      <PostActionsComponent votes={data.votes} postId={data.id} />
    </Stack>
  )
}

export default PostComponent
