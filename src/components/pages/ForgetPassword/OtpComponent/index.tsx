'use client'
import { FC } from 'react'

// MUI
import Grid from '@mui/material/Grid'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'

// Hooks
import { useTranslations } from 'next-intl'
import useOtpComponent from '@/container/ForgetPassword/useOtpComponent'

// Types
import { IOtpComponentProps } from '@/types/pages/forgetpassword'

// Component
import OtpInputComponent from '@/components/pages/ForgetPassword/OtpInputComponent'
import OuterLoadingComponent from '@/components/shared/OuterLoadingComponent'

const OtpComponent: FC<IOtpComponentProps> = ({ back }) => {
  const t = useTranslations('forgetPassword')
  const { data, states, actions } = useOtpComponent({ changeStage: back })
  return (
    <form onSubmit={actions.submit}>
      <Grid alignItems={'space-between'} container item columns={12} sx={{ height: '70dvh', minHeight: '500px' }}>
        <Stack width={'100%'} spacing={'40px'}>
          <Stack spacing={'8px'}>
            <Typography sx={{ fontWeight: '500' }} variant={'h3'}>
              {t('otpHead')}
            </Typography>
            <Typography paragraph>{t('otpContent')}</Typography>
            <Typography sx={{ fontWeight: '600' }}>{data.email}</Typography>
          </Stack>
          <Stack gap={'15px'} alignItems={'end'} flexDirection={'column'}>
            <OtpInputComponent
              onComplete={actions.submit}
              control={states.control}
              name={'code'}
              error={states.errors['code']}
            />
            <Button
              disabled={states.loading}
              type={'submit'}
              sx={{ padding: '10px 20px' }}
              variant={'contained'}
              size={'small'}
            >
              {states.loading ? <OuterLoadingComponent size={24} /> : t('continue')}
            </Button>
          </Stack>
        </Stack>
        <Button
          onClick={actions.back}
          sx={{
            height: '30px',
            alignSelf: 'end',
            backgroundColor: 'transparent',
            color: '#1473E6',
            '&:hover': {
              backgroundColor: 'transparent',
              boxShadow: 'unset',
            },
          }}
          variant={'contained'}
        >
          {t('back')}
        </Button>
      </Grid>
    </form>
  )
}

export default OtpComponent
