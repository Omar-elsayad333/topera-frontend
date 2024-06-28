// Types
import type { IOrganization, IPost } from '@/types/pages/news'

// Components
import PostComponent from '../PostComponent'
import OrganizationsComponent from '../OrganizationsComponent'

// MUI
import Stack from '@mui/material/Stack'
import ImageList from '@mui/material/ImageList'
import Typography from '@mui/material/Typography'
import ImageListItem from '@mui/material/ImageListItem'

interface IProps {
  postsData: IPost[]
  OrganizationsData: IOrganization[]
}

const RecentPosts = ({ postsData, OrganizationsData }: IProps) => {
  return (
    <Stack gap={2}>
      <Typography>Recent posts</Typography>
      <ImageList variant="masonry" cols={2} gap={20}>
        <ImageListItem sx={{ py: 1 }}>
          <PostComponent data={postsData[0]} />
        </ImageListItem>
        <ImageListItem sx={{ py: 1 }}>
          <OrganizationsComponent organizationsData={OrganizationsData} />
        </ImageListItem>
        {postsData.slice(1).map((item) => (
          <ImageListItem key={item.id} sx={{ py: 1 }}>
            <PostComponent data={item} />
          </ImageListItem>
        ))}
      </ImageList>
    </Stack>
  )
}

export default RecentPosts
