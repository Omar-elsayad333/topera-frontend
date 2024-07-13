import { Metadata } from 'next'
import { Saira } from 'next/font/google'

// Services
import { serverAction } from '@/services/actions'

// Types
import type { ICategory, ITag } from '@/types/pages/news'

// Components
import RecentPosts from '@/components/pages/News/RecentPosts'
import TrendingPosts from '@/components/pages/News/TrendingPosts'
import CategoriesHeaderComponent from '@/components/pages/News/CategoriesHeaderComponent'

// MUI
import Stack from '@mui/material/Stack'
import Divider from '@mui/material/Divider'

export const metadata: Metadata = {
  title: 'News',
}

const saira = Saira({
  display: 'swap',
  subsets: ['latin'],
})

const News = async ({ searchParams }: { searchParams: { [key: string]: string | undefined } }) => {
  const { data } = await serverAction(`/news?id=${searchParams.id}`)
  const { data: categories }: { data: ICategory[] } = await serverAction('/news/categories')

  return (
    <Stack gap={6} my={6}>
      <Stack gap={2}>
        <p style={{ fontSize: '40px', fontWeight: 'bold', textAlign: 'center' }} className={`${saira.className}`}>
          WHAT’S NEW?
        </p>
        <Stack gap={1} sx={{ width: '100%' }}>
          <Divider />
          <Divider />
        </Stack>
        <Stack direction={'row'} flexWrap={'wrap'} alignItems={'center'} justifyContent={'center'}>
          <CategoriesHeaderComponent tagData={{ id: 'all', name: 'All News' }} />
          <Divider orientation="vertical" variant="middle" sx={{ color: 'text.primary' }} flexItem />
          {categories.map((item, index) => (
            <>
              <CategoriesHeaderComponent tagData={item} />
              {categories.length !== index + 1 && (
                <Divider orientation="vertical" variant="middle" sx={{ color: 'text.primary' }} flexItem />
              )}
            </>
          ))}
        </Stack>
      </Stack>
      <TrendingPosts postsData={data.trending} />
      <RecentPosts postsData={data.recent} OrganizationsData={data.organizations} />
    </Stack>
  )
}

export default News
