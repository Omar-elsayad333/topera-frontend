import Stack from '@mui/material/Stack'
import Link from 'next/link'
import { Routes } from '@/routes/routes'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import React from 'react'
import { useTranslations } from 'next-intl'
import TextFieldComponent from '@/components/FormInputs/TextFieldComponent'

const EmailComponent = () => {
  const t = useTranslations('forgetPassword')
  return (
    <Stack sx={{ height: '700px', width: '700px', padding: '40px 0px 55px' }} justifyContent={'space-between'}>
      <Stack spacing={'40px'}>
        <Stack spacing={'8px'}>
          <Typography sx={{ fontWeight: '500' }} variant={'h3'}>
            {t('head')}
          </Typography>
          <Typography>{t('content')}</Typography>
        </Stack>
        <Stack spacing={'28px'}></Stack>
      </Stack>
      <Link href={Routes.login}>sign in </Link>
    </Stack>
  )
}

export default EmailComponent
