'use client'

// Mui
import Grid from '@mui/material/Grid'

// Components
import DescriptionComponent from '@/components/pages/EditProfile/DescriptionComponent'
import Social from '@/components/pages/EditProfile/Social'
import WorkExperience from '@/components/pages/EditProfile/WorkExperience'
import Education from '@/components/pages/EditProfile/Education'
import Skills from '@/components/pages/EditProfile/Skills'

// Hooks
import useProfile from '@/components/pages/EditProfile/useProfile'

export default function EditProfileHeroComponent() {
  const {
    data: { profileData },
  } = useProfile()
  return (
    <Grid
      container
      display={'flex'}
      direction={{ md: 'row', lg: 'row' }}
      columnGap={'30px'}
      rowGap={'30px'}
      margin={'60px 0'}
    >
      <Grid height={'fit-content'} gap={'16px'} container justifyItems={'start'} item lg={3} md={3} xs={12}></Grid>
      <Grid lg={8} md={8} rowGap={'16px'} container item>
        <DescriptionComponent value={profileData?.bio} />
        <Social data={profileData?.socials} />
        <WorkExperience experiences={profileData?.experiences} />
        <Education educations={profileData?.educations} />
        <Skills />
      </Grid>
    </Grid>
  )
}
