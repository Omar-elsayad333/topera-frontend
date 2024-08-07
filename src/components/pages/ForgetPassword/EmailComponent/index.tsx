'use client'
// MUi
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'

// Routes
import { Routes } from '@/routes/routes'

// Hooks
import useEmailComponent from '@/container/ForgetPassword/useEmailComponent'
import { useTranslations } from 'next-intl'

// Types
import { IEmailComponentProps } from '@/types/pages/forgetpassword'

// Components
import Link from 'next/link'
import TextFieldComponent from '@/components/FormInputs/TextFieldComponent'
import OuterLoadingComponent from '@/components/shared/OuterLoadingComponent'

const EmailComponent = ({ changeStage }: IEmailComponentProps) => {
  const t = useTranslations('forgetPassword')
  const { states, actions } = useEmailComponent({ changeStage })
  return (
    <form onSubmit={actions.submit}>
      <Grid alignContent={'space-between'} container item columns={12} sx={{ height: '70dvh', minHeight: '500px' }}>
        <Stack spacing={'40px'}>
          <Stack spacing={'8px'}>
            <Typography sx={{ fontWeight: '500' }} variant={'h3'}>
              {t('head')}
            </Typography>
            <Typography>{t('content')}</Typography>
          </Stack>
          <Stack spacing={'28px'} sx={{ width: '100%' }} alignItems={'end'}>
            <TextFieldComponent
              control={states.control}
              label={t('email')}
              name={'email'}
              error={states.errors['email']}
            />
            <Button
              disabled={states.loading}
              type={'submit'}
              sx={{ padding: '10px 20px' }}
              size={'small'}
              variant={'contained'}
            >
              {states.loading ? <OuterLoadingComponent size={25} /> : t('continue')}
            </Button>
          </Stack>
        </Stack>
        <Link href={Routes.login}>
          <Typography sx={{ fontWeight: '400', color: '#1473E6' }} variant={'h6'}>
            {t('signIn')}
          </Typography>
        </Link>
      </Grid>
    </form>
  )
}

export default EmailComponent
