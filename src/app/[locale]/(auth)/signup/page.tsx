'use client'
import { FC } from 'react'
// Routes
import { Routes } from '@/routes/routes'

// MUI
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import Link from 'next/link'

// Components
import MainComponent from '@/components/pages/SignUp/MainComponent'
import FormComponent from '@/components/pages/SignUp/FormComponent'

// HOOKS
import useSignUp from '@/hooks/useSignUp'
import { useTranslations } from 'next-intl'
const SignUp: FC = () => {
  const t = useTranslations('signUp')
  const { data, states, actions } = useSignUp()
  return (
    <Stack sx={{ width: '100%', marginBottom: '100px' }} gap={'40px'}>
      <Stack sx={{ alignItems: 'start' }} gap={'20px'}>
        <Typography sx={{ fontWeight: '500' }} variant={'h3'}>
          {t('head')}
        </Typography>
        <Stack direction="row">
          <Typography>{t('alreadyUser')}</Typography>
          <Link href={Routes.login}>
            <Typography sx={{ color: '#1473E6', marginLeft: '5px' }}>{t('login')}</Typography>
          </Link>
        </Stack>
      </Stack>
      {states.inForm ? (
        <FormComponent
          formControl={states.control}
          formData={data.FormInputs}
          formErrors={states.errors}
          loading={states.loading}
          switchToForm={actions.setInForm}
          submitForm={actions.submit}
        />
      ) : (
        <MainComponent
          providers={data.OAuthProviders}
          handelSignUp={actions.handelSignUpWithProvider}
          switchToForm={actions.setInForm}
        />
      )}
    </Stack>
  )
}

export default SignUp
