'use client'

// Mui
import Grid from '@mui/material/Grid'
import DescriptionComponent from '@/components/pages/EditProfile/DescriptionComponent'

export default function EditProfileHeroComponent() {
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
        <DescriptionComponent />
      </Grid>
    </Grid>
  )
}
