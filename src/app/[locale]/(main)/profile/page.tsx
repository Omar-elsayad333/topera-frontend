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

// Types
import { NextPage } from 'next'
import Main from '@/components/pages/Profile/Main'

// Container
import useProfile from '@/container/Profile'

const Profile: NextPage = () => {
  const { data } = useProfile()
  return (
    <Grid
      container
      display={'flex'}
      direction={{ md: 'row-reverse', lg: 'row' }}
      columnGap={'30px'}
      rowGap={'30px'}
      margin={'60px 0'}
    >
      <Grid lg={8} md={8} rowGap={'16px'} container item>
        <Main />
        <About />
        <Experiences
          experiences={[
            {
              companyName: 'hallo',
              icon: 'https://placehold.co/84x84',
              location: 'almansoura',
              jobStatus: 'remote',
              title: 'Frot End',
            },
            {
              companyName: 'hallo',
              icon: 'https://placehold.co/84x84',
              location: 'almansoura',
              jobStatus: 'remote',
              title: 'Frot End',
            },
          ]}
        />
        <Education
          educations={[
            {
              schoolName: 'hallo',
              icon: 'https://placehold.co/84x84',
              degreeName: 'Bachelor of Computer Science',
            },
            {
              schoolName: 'hallo',
              icon: 'https://placehold.co/84x84',
              degreeName: 'Bachelor of Computer Science',
            },
          ]}
        />
        <Skills
          skills={[
            { name: 'test', progress: 50 },
            { name: 'test', progress: 50 },
            { name: 'test', progress: 50 },
            { name: 'test', progress: 50 },
            { name: 'test', progress: 50 },
          ]}
        />
      </Grid>
      <Grid height={'fit-content'} gap={'16px'} container justifyItems={'start'} item lg={3} md={3} xs={12}>
        <Resume />
        <Intro />
      </Grid>
    </Grid>
  )
}

export default Profile
