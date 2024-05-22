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
        <Main />
        {data.profileData.bio && <About bio={data.profileData.bio} />}
        <Experiences experiences={data.profileData.experiences} />
        <Education educations={data.profileData.educations} />
        <Skills skills={data.profileData?.skills} />
        <Tracks tracks={data.profileData?.tracks} />
      </Grid>
      <Grid height={'fit-content'} gap={'16px'} container justifyItems={'start'} item lg={3} md={3} xs={12}>
        <Resume />
        <Intro />
      </Grid>
    </Grid>
  )
}

export default Profile
