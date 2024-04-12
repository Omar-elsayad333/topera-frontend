'use client'
import { delay, motion } from 'framer-motion'
import { Box, Button, Stack, Typography } from '@mui/material'

const Roadmaps = () => {
  const hoverVariant = {
    hover: {
      width: 555,
      transition: {
        duration: 0.2,
      },
    },
  }
  const showVariant = {
    show: {
      opacity: 1,
      transition: {
        delay: 0.2,
        duration: 0.2,
      },
    },
  }
  const rotateVariant: any = {
    rotate: {
      opacity: 0,
      transition: {
        duration: 0.2,
      },
    },
  }

  return (
    <Stack sx={{ pt: '64px' }} gap={'40px'}>
      <Typography color={'primary'} variant="h3">
        Welcome to Roadmaps
      </Typography>
      <Typography variant="h5">
        Lorem ipsum dolor sit amet consectetur. Eu dolor posuere lobortis morbi a. Id orci rhoncus venenatis mollis
        viverra nulla et purus. Morbi dolor risus cras netus tortor egestas dictum mauris. Mi faucibus gravida ut tempus
        tellus.
      </Typography>
      <Stack direction={'row'} gap={'30px'}>
        <motion.section
          whileHover={['hover', 'show', 'rotate', 'exit']}
          style={{ overflow: 'hidden', position: 'relative' }}
        >
          <motion.div
            variants={hoverVariant}
            style={{
              position: 'relative',
              gap: '0px',
              cursor: 'pointer',
              width: '262px',
              opacity: '0 px',
              height: '560px',
              padding: '30px 21px',
              borderRadius: '12px',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              overflow: 'hidden',
              color: '#fff',
              backgroundImage:
                'url("https://s3-alpha-sig.figma.com/img/6296/675d/3641b01b0af8547e6cff4047684d413e?Expires=1713744000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=qWL91f2yEyLC-oU10CuykhqYzrmX4z9bITH6I~P3RY~dl1LKeANJkZ502H0wy0EwDodvUlDxEbQ7g7YD7vV05VCBQwyoRd7SH-x3W-nGnFHT3I6w7xcyV5B0-f1jLCA0gsMwwStOhljlZ9ZFshyL4mvc2K1IXGbK8L6fq9bKvO6rgrBzQjaYtytt6a-BthPICkaMtNCrE04tvLlghl1YKEfImVnAW-QCYLWXl8ImUB~UQLoIznis-aUDV-o7NPv6buNH-naWs-jVBuC9pah2tDBuNsEkTBKBhIYS9rO0tRAed-ix8IvDtv04WI2H-StreKLldq1rhHzCxGqhX1Fn5g__")',
            }}
          >
            <Stack gap={'50px'} alignItems={'start'} sx={{ height: '100%', position: 'relative', zIndex: 2 }}>
              <motion.div
                variants={rotateVariant}
                style={{ position: 'absolute', rotate: '90deg', left: 0, top: 0, transformOrigin: '25px 20px' }}
              >
                <Typography variant="h3">Front-End</Typography>
              </motion.div>
              <motion.div variants={showVariant} style={{ opacity: 0 }}>
                <Typography variant="h3">Front-End</Typography>
              </motion.div>
              <motion.div style={{ opacity: 0 }} variants={showVariant} exit={{ transition: { delay: 0.2 } }}>
                <Typography variant="h5">
                  Lorem ipsum dolor sit amet consectetur. Pellentesque vel faucibus augue ipsum etiam. Et dui tortor
                  porta in egestas lorem tempor eu convallis. Viverra volutpat eleifend elementum nulla venenatis
                  suscipit.
                </Typography>
              </motion.div>
              <motion.div style={{ opacity: 0 }} variants={showVariant}>
                <Button
                  color="primary"
                  variant="contained"
                  sx={{ borderRadius: '10px', padding: '12px 50px', background: '#fff' }}
                >
                  learn more
                </Button>
              </motion.div>
            </Stack>

            <div style={{ background: '#00000080', inset: '0px', zIndex: 1, position: 'absolute' }} />
          </motion.div>
        </motion.section>

        <div
          style={{
            gap: '0px',
            width: '262px',
            opacity: '0 px',
            height: '560px',
            padding: '31px 186px 37px 16px',
            borderRadius: '12px',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundImage:
              'url("https://s3-alpha-sig.figma.com/img/6296/675d/3641b01b0af8547e6cff4047684d413e?Expires=1713744000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=qWL91f2yEyLC-oU10CuykhqYzrmX4z9bITH6I~P3RY~dl1LKeANJkZ502H0wy0EwDodvUlDxEbQ7g7YD7vV05VCBQwyoRd7SH-x3W-nGnFHT3I6w7xcyV5B0-f1jLCA0gsMwwStOhljlZ9ZFshyL4mvc2K1IXGbK8L6fq9bKvO6rgrBzQjaYtytt6a-BthPICkaMtNCrE04tvLlghl1YKEfImVnAW-QCYLWXl8ImUB~UQLoIznis-aUDV-o7NPv6buNH-naWs-jVBuC9pah2tDBuNsEkTBKBhIYS9rO0tRAed-ix8IvDtv04WI2H-StreKLldq1rhHzCxGqhX1Fn5g__")',
          }}
        ></div>
      </Stack>
    </Stack>
  )
}

export default Roadmaps
