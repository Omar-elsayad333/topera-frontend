import { Box, Button, Stack, SxProps } from '@mui/material'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'

import LandingBG from '@/../public/landing_background.jpg'

const LandingSection = () => {
  const containerStyle: SxProps = {
    width: '100%',
    height: '100dvh',
    color: 'white',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundImage: `url(${LandingBG.src})`,
  }

  const layerStyle: SxProps = {
    inset: 0,
    zIndex: 2,
    position: 'absolute',
    background: 'linear-gradient(180deg, rgba(0, 0, 0, 0) 56.7%, #000000 99.06%)',
  }

  return (
    <Stack gap={8} sx={containerStyle} justifyContent={'center'}>
      <Container maxWidth={false}>
        <Box sx={layerStyle} />
        <Typography mb={4} variant="h2" textTransform={'uppercase'}>
          skills that drive you forward
        </Typography>
        <Stack alignItems={'start'} gap={2}>
          <Typography variant="h6" color={'#FFFFFFCC'}>
            Technology and the world of work change fast — with us, you’re faster. Know the skills to achieve goals and
            stay competitive.
          </Typography>
          <Button variant="contained" sx={{ backgroundColor: 'white !important', color: 'black' }}>
            learn more
          </Button>
        </Stack>
      </Container>
    </Stack>
  )
}

export default LandingSection
