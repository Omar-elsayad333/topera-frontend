import React from 'react'
import Typography from '@mui/material/Typography'
import { Grid } from '@mui/material'
import Link from 'next/link'

const logIn: React.FC = () => {
  return (
    <Grid container columns={12}>
      <Grid container item columns={12}>
        <Typography sx={{ fontWeight: '500' }} variant={'h3'}>
          Sign in
        </Typography>
        <Grid item container columns={12}>
          <Typography>New user?</Typography>
          <Link href={'/signup'}>
            <Typography sx={{ color: '#1473E6', marginLeft: '5px' }}>Create a new account</Typography>
          </Link>
        </Grid>
      </Grid>
      <Grid item container></Grid>
    </Grid>
  )
}

export default logIn
