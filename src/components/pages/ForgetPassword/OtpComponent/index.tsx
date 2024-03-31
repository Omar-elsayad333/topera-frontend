import Grid from '@mui/material/Grid'
import { FC } from 'react'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import { useTranslations } from 'next-intl'
import { IOtpComponentProps } from '@/types/pages/forgetpassword'
import OtpInputComponent from '@/components/pages/ForgetPassword/OtpInputComponent'
import useOtpComponent from '@/hooks/useOtpComponent'

const OtpComponent: FC<IOtpComponentProps> = ({ email }) => {
  const t = useTranslations('forgetPassword')
  const { data, states, actions } = useOtpComponent()
  return (
    <form>
      <Grid alignItems={'space-between'} container item columns={12} sx={{ height: '700px', padding: '40px 0px 40px' }}>
        <Stack width={'100%'} spacing={'40px'}>
          <Stack spacing={'8px'}>
            <Typography sx={{ fontWeight: '500' }} variant={'h3'}>
              {t('otpHead')}
            </Typography>
            <Typography paragraph>{t('otpContent')}</Typography>
            <Typography sx={{ fontWeight: '600' }}>{email}</Typography>
          </Stack>
          <Stack gap={'15px'} justifyContent={'space-between'} flexDirection={'row'}>
            {Array.from({ length: 6 }, (_, i) => i + 1).map((e) => (
              <OtpInputComponent key={e} control={states.control} name={`input-${e}`} />
            ))}
          </Stack>
        </Stack>
        {/*<Button variant={'outlined'}>{t('back')}</Button>*/}
      </Grid>
    </form>
  )
}

export default OtpComponent
