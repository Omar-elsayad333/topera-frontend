import PostComponent from '@/components/pages/News/PostComponent'
import AddPostComponent from '@/components/pages/News/AddPostComponent'

import { Stack } from '@mui/material'

const News = () => {
  return (
    <Stack>
      <PostComponent />
      <AddPostComponent />
    </Stack>
  )
}

export default News
