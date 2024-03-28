'use client'
import { FC } from 'react'
import { useTranslations } from 'next-intl'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import Link from 'next/link'
import { Routes } from '@/routes/routes'
import MainComponent from '@/components/pages/SignUp/MainComponent'
import useSignUp from '@/hooks/useSignUp'
import FormComponent from '@/components/pages/SignUp/FormComponent'
const SignUp: FC = () => {
  const t = useTranslations('signUp')
  const { data, states, actions } = useSignUp()
  return (
    <Stack gap={'40px'} sx={{ width: '700px' }}>
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
        <FormComponent formControl={states.control} formData={data.FormInputs} formErrors={states.errors} />
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
