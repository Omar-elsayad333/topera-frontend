// Services
import { serverAction } from '@/services/actions'

// Components
import PostComponent from '@/components/pages/News/PostComponent'

// MUI
import Box from '@mui/material/Box'

const ShowNews = async ({ params }: { params: { id: string } }) => {
  const { data } = await serverAction(`/news/${params.id}`)
  return (
    <Box my={6}>
      <PostComponent data={data} />
    </Box>
  )
}

export default ShowNews
