'use client'

// Mui
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'

// Components
import DescriptionComponent from '@/components/pages/EditProfile/DescriptionComponent'
import Social from '@/components/pages/EditProfile/Social'
import WorkExperience from '@/components/pages/EditProfile/WorkExperience'
import Education from '@/components/pages/EditProfile/Education'
import Skills from '@/components/pages/EditProfile/Skills'
import BasicInformation from '@/components/pages/EditProfile/BasicInformation'

// Hooks
import useProfile from '@/components/pages/EditProfile/useProfile'
import { useTranslations } from 'next-intl'
import { useRouter } from 'next/navigation'
import Tracks from '@/components/pages/EditProfile/Tracks'

export default function EditProfileHeroComponent() {
  const router = useRouter()

  const {
    data: { profileData },
  } = useProfile()

  const tEditProfile = useTranslations('edit_profile')
  return (
    <div>
      <Box sx={{ width: '100%', background: '#fff', padding: '13px 0', display: 'flex', justifyContent: 'center' }}>
        <Button
          sx={{ height: '46px', backgroundColor: '#4E4EBC' }}
          variant={'contained'}
          onClick={() => router.push('/profile')}
        >
          {tEditProfile('back_to_profile')}
        </Button>
      </Box>
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
          <BasicInformation
            imageUrl={profileData?.imageUrl!}
            data={{
              firstName: profileData?.firstName!,
              lastName: profileData?.lastName!,
              ...(profileData?.city ? { city: { name: profileData.city } } : null),
              ...(profileData?.country ? { country: { name: profileData.country } } : null),
              occupation: profileData?.occupation!,
            }}
          />
          <DescriptionComponent value={profileData?.bio} />
          <Social data={profileData?.socials} />
          <WorkExperience experiences={profileData?.experiences} />
          <Education educations={profileData?.educations} />
          <Skills skillsData={profileData?.skills} />
          <Tracks tracksData={profileData?.tracks!} />
        </Grid>
      </Grid>
    </div>
  )
}
