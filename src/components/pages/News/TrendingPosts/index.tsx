import type { IPost } from '@/types/pages/news'

//
import PostComponent from '../PostComponent'

// MUI
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'

interface IProps {
  postsData: IPost[]
}

const TrendingPosts = ({ postsData }: IProps) => {
  return (
    <Stack gap={2}>
      <Typography>Trending</Typography>
      <Stack gap={6}>
        {postsData.map((item) => (
          <PostComponent key={item.id} data={item} />
        ))}
      </Stack>
    </Stack>
  )
}

export default TrendingPosts
