import { Box, Grid } from '@mui/material'
import Image from 'next/image'
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
          backgroundImage: `url(https://s3-alpha-sig.figma.com/img/f19d/933c/6f2efafd34ea15e733cacfcf5b43be87?Expires=1711324800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=FQcQDLVqwP9POSCs7u2-nYJyqYpFnDjSGWFuN~Hw4KNNkxcuOekUvr~1GhmANQ-wusW3SvjU4pxA2halsTA0qj0wfkr4IwLc0r8c~vouJYY5ZPcsHSr8QeWZwkJFpHUl0La8rnIQSyJZpWTg3OBlzWN4WvW4WgfmDqb-pgAxoae8cGJXroFdZbrFkp~l0viEWJ~XQSzaR5SOvrll6P7xyQHpjPCZdvO8sIayFGjINzwYeIA5seY~NSmQ5F-mlC9W9RB4vvgZSvu0QCgLtliOxVSeVnEdmfNhu7daQVMEU8YR7SmjDRJcKM~IIKvNDIfQuR6S0mkxtWYN0~sG8e9NSw) !important`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <Grid
          rowGap={'25px'}
          item
          container
          xs={11}
          lg={4}
          md={4}
          sx={{
            display: 'flex',
            flexDirection: 'column',
            backgroundColor: '#ffff',
            border: '1px solid transparent',
            borderRadius: '8px',
            padding: '34px 75px',
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
