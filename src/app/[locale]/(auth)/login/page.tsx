'use client'
import React from 'react'
// MUI

import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import Stack from '@mui/material/Stack'
import Link from 'next/link'
import Divider from '@mui/material/Divider'
import Button from '@mui/material/Button'

// Components
import TextFieldComponent from '@/components/FormInputs/TextFieldComponent'
import PasswordInputComponent from '@/components/FormInputs/PasswordInputComponent'
import OuterLoadingComponent from '@/components/shared/OuterLoadingComponent'
import Image from 'next/image'

// Hooks
import useLogin from '@/hooks/useLogin'
import { useTranslations } from 'next-intl'

// Routes
import { Routes } from '@/routes/routes'

const LogIn: React.FC = () => {
  const { data, states, actions } = useLogin()
  const t = useTranslations('login')
  return (
    <form onSubmit={actions.stagesHandler}>
      <Grid rowGap={'20px'} item container columns={12}>
        <Grid rowGap={'5px'} container item columns={12}>
          <Typography sx={{ fontWeight: '500' }} variant={'h3'}>
            {t('head')}
          </Typography>
          <Grid item container columns={12}>
            <Typography>{t('new_user')}</Typography>
            <Link href={Routes.forgetPassword}>
              <Typography sx={{ color: '#1473E6', marginLeft: '5px' }}>{t('create_new_account')}</Typography>
            </Link>
          </Grid>
        </Grid>
        <Grid item rowGap={'10px'} container justifyContent={'end'}>
          {states.currentStage === 1 ? (
            <TextFieldComponent
              control={states.control}
              name={'email'}
              error={states.errors['email']}
              label={t('email')}
            />
          ) : (
            <PasswordInputComponent
              control={states.control}
              name={'password'}
              error={states.errors['password']}
              label={t('password')}
            />
          )}

          <Button
            disabled={states.loading}
            variant={'contained'}
            type={'submit'}
            sx={{ color: 'white', borderRadius: '20px', fontSize: '13px', fontWeight: '500' }}
            size={'small'}
          >
            {!states.loading ? (
              states.currentStage === 1 ? (
                t('continue')
              ) : (
                t('submit')
              )
            ) : (
              <OuterLoadingComponent size={25} />
            )}
          </Button>
        </Grid>
        <Grid item rowGap={'20px'} container xs={12}>
          <Divider sx={{ width: '100%', color: 'gray' }} color={'gray'} flexItem>
            {t('or_sigin_in_with_email')}
          </Divider>
          {data.OAuthProviders.map((provider) => (
            <Button
              key={provider.id}
              variant={'socialButton'}
              sx={{ width: '100%', height: '52px', borderRadius: '24px', color: 'black' }}
              onClick={() => actions.handelLoginWithProvider(provider.providerId)}
              startIcon={<Image src={provider.icon} alt={provider.label} />}
            >
              <Typography variant={'h5'}>{t(provider.label)}</Typography>
            </Button>
          ))}
        </Grid>
        <Stack sx={{ marginTop: '46px' }}>
          <Link href={'/forgetpassword'}>
            <Typography sx={{ color: '#1473E6', marginLeft: '5px', fontSize: '14px' }}>
              {t('forget_password')}
            </Typography>
          </Link>
        </Stack>
      </Grid>
    </form>
  )
}

export default LogIn
