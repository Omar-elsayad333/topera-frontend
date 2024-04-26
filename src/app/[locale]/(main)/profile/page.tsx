// Mui
import Grid from '@mui/material/Grid'

// Profile Component
import Intro from '@/components/pages/Profile/Intro'
import Resume from '@/components/pages/Profile/Resume'
import About from '@/components/pages/Profile/About'
import Experiences from '@/components/pages/Profile/Experiences'

// Types
import { NextPage } from 'next'

const Profile: NextPage = () => {
  return (
    <Grid container direction={'row-reverse'} columnGap={'30px'} rowGap={'30px'} margin={'60px 0'}>
      <Grid container item gap={'40px'} lg={3} md={3} xs={12}>
        <Intro />
        <Resume />
      </Grid>
      <Grid lg={8} md={8} rowGap={'16px'} container item>
        hero sections
        <About />
        <Experiences
          experiences={[
            { name: 'hallo', icon: 'https://placehold.co/84x84', location: 'almansoura', jobStatus: 'remote' },
          ]}
        />
      </Grid>
    </Grid>
  )
}

export default Profile
