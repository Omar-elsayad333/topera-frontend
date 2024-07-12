import Image from 'next/image'

// Utils
import { serverAction } from '@/services/actions'

// Types
import { IOrganization } from '@/types/pages/news'

// Assets
import MoreHorizIcon from '@mui/icons-material/MoreHoriz'

// Components
import PostComponent from '@/components/pages/News/PostComponent'

// MUI
import { Box, Button, Divider, Grid, IconButton, Paper, Stack, Typography } from '@mui/material'
import { CSSProperties } from 'react'

const Organization = async ({ params }: { params: { id: string } }) => {
  const { data }: { data: IOrganization } = await serverAction(`/news/organizations/${params.id}`)

  const organizationData: IOrganization = {
    id: data.id,
    name: data.name,
    posts: data.posts,
    imageUrl: data.imageUrl,
    followers: data.followers,
    isFollower: data.isFollower,
    categories: data.categories,
  }

  const avatarStyle: CSSProperties = {
    maxWidth: '100%',
    objectFit: 'cover',
    borderRadius: '50%',
    background: 'black',
  }

  return (
    <Grid container spacing={8} py={12}>
      <Grid item xs={12} md={3.5}>
        <Stack gap={2}>
          <Paper variant="outlined" sx={{ borderRadius: '10px', p: '32px' }}>
            <Stack direction={'row'} gap={2} flexWrap={'wrap'} alignItems={'flex-end'} justifyContent={'space-between'}>
              <Image alt="" width={190} height={190} style={avatarStyle} src={organizationData?.imageUrl} />
              <Stack>
                <Typography>{organizationData.name}</Typography>
                {organizationData.categories.map((item, index) => (
                  <Typography key={index}>{item}</Typography>
                ))}
                <Typography>{organizationData.followers} Followers</Typography>
                <Stack direction={'row'} gap={2}>
                  <Button variant="contained">Follow</Button>
                  <IconButton>
                    <MoreHorizIcon sx={{ color: 'gray' }} />
                  </IconButton>
                </Stack>
              </Stack>
            </Stack>
          </Paper>
          <Paper variant="outlined" sx={{ borderRadius: '10px', p: '32px' }}>
            <Stack gap={4}>
              <Typography variant="h5">About</Typography>
              <Divider />
              <Typography>
                {organizationData.description}Lorem ipsum dolor sit amet consectetur. Ut mi fermentum in vulputate
                adipiscing ut nec. Malesuada dignissim enim nisl eros id mauris. Maecenas ut auctor ultrices vitae
                venenatis libero. Feugiat sed elit eu varius ornare sed faucibus nisl. Sed felis ac viverra iaculis enim
                at. Sed elit natoque non elit nisl sociis. Amet egestas quisque elementum est sem feugiat dolor in. Nisl
                nisl dictumst nulla ornare nisi neque amet odio id. Faucibus nisl leo ullamcorper mattis.
              </Typography>
            </Stack>
          </Paper>
        </Stack>
      </Grid>
      <Grid item xs={12} md={8.5}>
        {data.posts.map((item) => (
          <PostComponent data={item} organizationData={organizationData} />
        ))}
      </Grid>
    </Grid>
  )
}

export default Organization
