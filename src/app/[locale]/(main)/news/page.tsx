import { Metadata } from 'next'

// Services
import { serverAction } from '@/services/actions'

// Components
import RecentPosts from '@/components/pages/News/RecentPosts'
import TrendingPosts from '@/components/pages/News/TrendingPosts'

// MUI
import Stack from '@mui/material/Stack'

export const metadata: Metadata = {
  title: 'News',
}

const News = async () => {
  const { data } = await serverAction('/news')

  return (
    <Stack gap={6}>
      <TrendingPosts postsData={data.trending} />
      <RecentPosts postsData={data.recent} OrganizationsData={data.organizations} />
    </Stack>
  )
}

export default News
