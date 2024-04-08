import Image from 'next/image'
import { PropsWithChildren } from 'react'

// MUI
import { Box, Grid } from '@mui/material'

// Assets
import logo from '@/assets/images/logo.svg'
import authBg from '@/assets/images/auth_bg_image.jpg'

interface IProps extends PropsWithChildren {}

export default function Layout({ children }: IProps) {
  return (
    <main
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        minHeight: '100dvh',
        backgroundImage: `url('${authBg.src}')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <Box
        sx={{
          margin: '20px',
          maxWidth: '700px',
          width: '700px',
          display: 'flex',
          flexDirection: 'column',
          backgroundColor: '#F4F4FF',
          border: '1px solid transparent',
          borderRadius: '8px',
          gap: '40px',
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
      </Box>
    </main>
  )
}
