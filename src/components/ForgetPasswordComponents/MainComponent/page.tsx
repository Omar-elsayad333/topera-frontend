'use client'
import { Grid } from '@mui/material'
import Typography from '@mui/material/Typography'
import React from 'react'
import TextFieldComponent from '@/components/FormInputs/TextFieldComponent'
import useForgetPassword from '@/hooks/useForgetPassword'
import ButtonComponent from '@/components/ButtonComponent'
import Link from 'next/link'
const MainComponent: React.FC = () => {
  const { data, states, actions } = useForgetPassword()

  return (
    <form style={{ width: '100%' }}>
      <Grid container item xs={12}>
        <Grid container item xs={12} rowGap={'20px'}>
          <Grid rowGap={'15px'} container item columns={12}>
            <Typography sx={{ fontWeight: '500' }} variant={'h3'}>
              Forgot password
            </Typography>
            <Grid item container columns={12}>
              <Typography sx={{ fontSize: '14px', color: 'gray' }}>
                To reset your password, please enter your email address you may have used with Topera
              </Typography>
            </Grid>
          </Grid>
          <Grid justifyContent={'end'} rowGap={'10px'} container item xs={12}>
            <TextFieldComponent
              control={states.control}
              name={'email'}
              label={'email'}
              error={states.errors['email']}
            />
            <ButtonComponent
              type={'submit'}
              sx={{ color: 'white', borderRadius: '20px', fontSize: '13px', fontWeight: '500' }}
              text={'submit'}
              size={'small'}
              onClick={() => actions.submit}
            />
          </Grid>
          <Grid justifyItems={'start'} item container xs={12} sx={{ marginTop: '170px' }}>
            <Link href={'/signin'}>
              <Typography sx={{ color: '#1473E6', marginLeft: '5px', fontSize: '14px' }}>sign in</Typography>
            </Link>
          </Grid>
        </Grid>
      </Grid>
    </form>
  )
}

export default MainComponent
