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

const Profile: NextPage = () => {
  return (
    <Grid container direction={'row-reverse'} columnGap={'30px'} rowGap={'30px'} margin={'60px 0'}>
      <Grid height={'fit-content'} gap={'16px'} container justifyItems={'start'} item lg={3} md={3} xs={12}>
        <Intro />
        <Resume />
      </Grid>
      <Grid lg={8} md={8} rowGap={'16px'} container item>
        hero sections
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
            'test',
            'hallo',
            'hallo',
            'hallo',
            'hallo',
            'hallo',
            'hallo',
            'hallo',
            'hallo',
            'hallo',
            'hallo',
            'hallo',
            'hallo',
          ]}
        />
      </Grid>
    </Grid>
  )
}

export default Profile
