// Mui
import Grid from '@mui/material/Grid'

// Profile Component
import Intro from '@/components/pages/Profile/Intro'
import Resume from '@/components/pages/Profile/Resume'

// Types
import { NextPage } from 'next'

const Profile: NextPage = () => {
  return (
    <Grid container direction={'row-reverse'} columnGap={'30px'} margin={'60px 0'}>
      <Grid container item gap={'40px'} lg={3} md={12} xs={12}>
        <Intro />
        <Resume />
      </Grid>
      <Grid lg={8} container item sx={{ backgroundColor: 'blue' }}>
        hero sections
      </Grid>
    </Grid>
  )
}

export default Profile
