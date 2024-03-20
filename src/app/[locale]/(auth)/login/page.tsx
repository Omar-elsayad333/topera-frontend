'use client'
import React from 'react'
import Typography from '@mui/material/Typography'
import { Grid } from '@mui/material'
import Link from 'next/link'
import Divider from '@mui/material/Divider'
import TextFieldComponent from '@/components/FormInputs/TextFieldComponent'
import useLogin from '@/hooks/useLogin'
import ButtonComponent from '@/components/ButtonComponent'
import PasswordInputComponent from '@/components/FormInputs/PasswordInputComponent'
import GoogleIcon from '@mui/icons-material/Google'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import GitHubIcon from '@mui/icons-material/GitHub'
import { useTranslations } from 'next-intl'

const LogIn: React.FC = () => {
  const { data, states, actions } = useLogin()
  const t = useTranslations('login')

  return (
    <form onSubmit={actions.handleSubmit(actions.formSubmit)}>
      <Grid rowGap={'20px'} item container columns={12}>
        <Grid rowGap={'5px'} container item columns={12}>
          <Typography sx={{ fontWeight: '500' }} variant={'h3'}>
            {t('head')}
          </Typography>
          <Grid item container columns={12}>
            <Typography>{t('new_user')}</Typography>
            <Link href={'/forgetpassword'}>
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
          {states.currentStage === 1 ? (
            <ButtonComponent
              type={'button'}
              sx={{ color: 'white', borderRadius: '20px', fontSize: '13px', fontWeight: '500' }}
              text={t('continue')}
              size={'small'}
              onClick={(e) => actions.submit(e)}
            />
          ) : (
            <ButtonComponent
              type={'submit'}
              sx={{ color: 'white', borderRadius: '20px', fontSize: '13px', fontWeight: '500' }}
              text={t('submit')}
              size={'small'}
            />
          )}
        </Grid>
        <Grid item rowGap={'20px'} container xs={12}>
          <Divider sx={{ width: '100%', color: 'gray' }} color={'gray'} flexItem>
            {t('or_sigin_in_with_email')}
          </Divider>
          <ButtonComponent
            variant={'outlined'}
            sx={{ width: '100%', height: '52px', borderRadius: '24px', color: 'black' }}
            text={t('sigin_in_with_google')}
            onClick={() => {
              console.log('google')
            }}
            startIcon={<GoogleIcon />}
          />
          <ButtonComponent
            variant={'outlined'}
            sx={{ width: '100%', height: '52px', borderRadius: '24px', color: 'black' }}
            text={t('sigin_in_with_linkdin')}
            onClick={() => {
              console.log('linkdin')
            }}
            startIcon={<LinkedInIcon />}
          />
          <ButtonComponent
            variant={'outlined'}
            sx={{ width: '100%', height: '52px', borderRadius: '24px', color: 'black' }}
            text={t('sigin_in_with_github')}
            onClick={() => {
              console.log('github')
            }}
            startIcon={<GitHubIcon />}
          />
        </Grid>
        <Grid justifyItems={'start'} item container xs={12} sx={{ marginTop: '20px' }}>
          <Link href={'/forgetpassword'}>
            <Typography sx={{ color: '#1473E6', marginLeft: '5px', fontSize: '14px' }}>
              {t('forget_password')}
            </Typography>
          </Link>
        </Grid>
      </Grid>
    </form>
  )
}

export default LogIn
