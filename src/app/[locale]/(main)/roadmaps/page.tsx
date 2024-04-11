'use client'
import { Box, Stack, Typography } from '@mui/material'
import { motion } from 'framer-motion'

const Roadmaps = () => {
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
        <motion.div
          initial={{ rotate: 180 }}
          // animate={{ rotate: 180, scale: 1 }}
          whileHover={{ width: 555, rotate: 90 }}
          transition={{
            ease: 'linear',
            duration: 0.3,
          }}
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
            backgroundImage:
              'url("https://s3-alpha-sig.figma.com/img/6296/675d/3641b01b0af8547e6cff4047684d413e?Expires=1713744000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=qWL91f2yEyLC-oU10CuykhqYzrmX4z9bITH6I~P3RY~dl1LKeANJkZ502H0wy0EwDodvUlDxEbQ7g7YD7vV05VCBQwyoRd7SH-x3W-nGnFHT3I6w7xcyV5B0-f1jLCA0gsMwwStOhljlZ9ZFshyL4mvc2K1IXGbK8L6fq9bKvO6rgrBzQjaYtytt6a-BthPICkaMtNCrE04tvLlghl1YKEfImVnAW-QCYLWXl8ImUB~UQLoIznis-aUDV-o7NPv6buNH-naWs-jVBuC9pah2tDBuNsEkTBKBhIYS9rO0tRAed-ix8IvDtv04WI2H-StreKLldq1rhHzCxGqhX1Fn5g__")',
            zIndex: 2,
          }}
        >
          <div style={{ position: 'absolute', rotate: '270deg', bottom: '100px', right: '0px', zIndex: 2 }}>
            <Typography variant="h3">Front-End</Typography>
          </div>
          <div style={{ background: '#00000080', inset: '0px', zIndex: 1, position: 'absolute' }}>omar</div>
        </motion.div>
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
