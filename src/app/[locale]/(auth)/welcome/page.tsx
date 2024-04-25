'use client'
import { NextPage } from 'next'
import Grid from '@mui/material/Grid'
import Stack from '@mui/material/Stack'
import Button from '@mui/material/Button'
import { useTranslations } from 'next-intl'
import Typography from '@mui/material/Typography'
import { redirect } from 'next/navigation'
import { Routes } from '@/routes/routes'

const Welcome: NextPage = () => {
  const btnRedirectFunction = () => {
    location.href = Routes.login
  }
  const t = useTranslations('welcomeToTopera')
  return (
    <Grid container height={'700px'} justifyContent={'center'}>
      <Stack margin={'auto'} width={'100%'} gap={'85px'} direction={'column'}>
        <Stack>
          <Typography variant={'h4'}>{t('welcomeHeadText')}</Typography>
          <Typography sx={{ color: 'gray' }} variant={'h5'}>
            {t('welcomeHelperText')}
          </Typography>
        </Stack>
        <Button
          variant={'socialButton'}
          sx={{
            backgroundColor: '#1473E6',
            border: '1px solid #1473E6',
            color: '#fff',
            '&:hover': { backgroundColor: '#1473E6', border: '1px solid #1473E6', color: '#fff', boxShadow: 4 },
          }}
          onClick={btnRedirectFunction}
        >
          {t('gtToSignIn')}
        </Button>
      </Stack>
    </Grid>
  )
}

export default Welcome
