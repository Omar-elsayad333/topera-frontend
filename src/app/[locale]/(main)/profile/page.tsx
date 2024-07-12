'use client'
// Mui
import Grid from '@mui/material/Grid'

// Profile Component
import Intro from '@/components/pages/Profile/Intro'
import Resume from '@/components/pages/Profile/Resume'
import About from '@/components/pages/Profile/About'
import Experiences from '@/components/pages/Profile/Experiences'
import Education from '@/components/pages/Profile/Education'
import Skills from '@/components/pages/Profile/Skills'
import Main from '@/components/pages/Profile/Main'

// Types
import { NextPage } from 'next'

// Container
import useProfile from '@/container/Profile/useProfile'
import Tracks from '@/components/pages/Profile/Tracks'

const Profile: NextPage = () => {
  const { data } = useProfile()
  const MainProps = {
    cover: data?.profileData?.coverUrl,
    image: data?.profileData?.imageUrl,
    active: data?.profileData.isActive,
    name: data?.profileData?.fullName,
    occupation: data?.profileData?.intro?.occupation,
    employmentStatus: data?.profileData?.employmentStatus,
  }
  return (
    <Grid
      container
      display={'flex'}
      direction={{ md: 'row', lg: 'row' }}
      columnGap={'30px'}
      rowGap={'30px'}
      margin={'60px 0'}
    >
      <Grid lg={8} md={8} rowGap={'16px'} container item>
        <Main {...MainProps} />
        {data.profileData.bio && <About bio={data.profileData.bio} />}
        <Experiences experiences={data.profileData.experiences} />
        <Education educations={data.profileData.educations} />
        <Skills skills={data.profileData?.skills} />
        <Tracks tracks={data.profileData?.tracks} />
      </Grid>
      <Grid height={'fit-content'} gap={'16px'} container justifyItems={'start'} item lg={3} md={3} xs={12}>
        {data?.profileData?.resume && <Resume resume={data?.profileData?.resume} />}
        <Intro {...data?.profileData?.intro} />
      </Grid>
    </Grid>
  )
}

export default Profile
