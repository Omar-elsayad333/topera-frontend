'use client'
import Link from 'next/link'

import { motion } from 'framer-motion'

// Routes
import { Routes } from '@/routes/routes'

// Types
import { ICareers } from '@/types/pages/roadmaps'

// MU
import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import { useTheme } from '@mui/material'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'

const CareersCardComponent = ({ data }: { data: ICareers }) => {
  const theme = useTheme()
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
    <Box sx={{ width: 'fit-content' }}>
      <motion.div
        variants={hoverVariant}
        whileHover={['hover', 'show', 'rotate', 'exit']}
        whileTap={['hover', 'show', 'rotate', 'exit']}
        style={{
          position: 'relative',
          gap: '0px',
          cursor: 'pointer',
          width: '262px',
          height: '560px',
          padding: '30px 21px',
          borderRadius: '12px',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          overflow: 'hidden',
          color: '#fff',
          backgroundImage:
            data.imageUrl ||
            'url("https://s3-alpha-sig.figma.com/img/6296/675d/3641b01b0af8547e6cff4047684d413e?Expires=1713744000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=qWL91f2yEyLC-oU10CuykhqYzrmX4z9bITH6I~P3RY~dl1LKeANJkZ502H0wy0EwDodvUlDxEbQ7g7YD7vV05VCBQwyoRd7SH-x3W-nGnFHT3I6w7xcyV5B0-f1jLCA0gsMwwStOhljlZ9ZFshyL4mvc2K1IXGbK8L6fq9bKvO6rgrBzQjaYtytt6a-BthPICkaMtNCrE04tvLlghl1YKEfImVnAW-QCYLWXl8ImUB~UQLoIznis-aUDV-o7NPv6buNH-naWs-jVBuC9pah2tDBuNsEkTBKBhIYS9rO0tRAed-ix8IvDtv04WI2H-StreKLldq1rhHzCxGqhX1Fn5g__")',
        }}
      >
        <Stack
          gap={'50px'}
          alignItems={'start'}
          justifyContent={'space-between'}
          sx={{ height: '100%', position: 'relative', zIndex: 2 }}
        >
          <Stack gap={'50px'}>
            <motion.div
              variants={rotateVariant}
              style={{ position: 'absolute', rotate: '90deg', left: 0, top: 0, transformOrigin: '25px 20px' }}
            >
              <Typography whiteSpace={'nowrap'} variant="h3">
                {data.name}
              </Typography>
            </motion.div>
            <motion.div variants={showVariant} style={{ opacity: 0 }}>
              <Typography variant="h3">{data.name}</Typography>
            </motion.div>
            <motion.div style={{ opacity: 0 }} variants={showVariant} exit={{ transition: { delay: 0.2 } }}>
              <Typography variant="h5">{data.description}</Typography>
            </motion.div>
          </Stack>
          <motion.div style={{ opacity: 0 }} variants={showVariant}>
            <Link
              href={{
                pathname: `${Routes.careers}/${data.id}`,
              }}
            >
              <Button
                color="primary"
                variant="contained"
                sx={{
                  color: theme.palette.primary.main,
                  borderRadius: '10px',
                  padding: '12px 50px',
                  background: '#fff',
                  ':hover': { color: '#fff' },
                }}
              >
                learn more
              </Button>
            </Link>
          </motion.div>
        </Stack>
        <div style={{ background: '#00000080', inset: '0px', zIndex: 1, position: 'absolute' }} />
      </motion.div>
    </Box>
  )
}

export default CareersCardComponent
