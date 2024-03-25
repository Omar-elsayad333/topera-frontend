import { Box, Grid } from '@mui/material'
import Image from 'next/image'
import authBg from '@/assets/images/AuthBackground.svg'
import logo from '@/assets/images/logo.svg'
interface LProps {
  children: React.ReactNode
}

export default function Layout({ children }: LProps) {
  return (
    <main className={'auth-layout'}>
      <Grid
        rowGap={'25px'}
        xs={12}
        lg={12}
        md={12}
        container
        item
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          width: '100%',
          height: '100vh',
          backgroundImage: `url('${authBg.src}')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <Grid
          rowGap={'25px'}
          item
          container
          xs={10}
          lg={4}
          md={7}
          sx={{
            maxWidth: '700px',
            display: 'flex',
            flexDirection: 'column',
            backgroundColor: '#F4F4FF',
            border: '1px solid transparent',
            borderRadius: '8px',
            padding: {
              lg: '34px 75px',
              md: '34px 75px',
              xs: '34px 55px',
            },
          }}
        >
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Image height={48} width={51} src={logo} alt={'topera logo'} />
          </Box>
          <Grid item rowGap={'20px'} container xs={12}>
            {children}
          </Grid>
        </Grid>
      </Grid>
    </main>
  )
}
