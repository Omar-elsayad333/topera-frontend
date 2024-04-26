import Image from 'next/image'
import { Metadata } from 'next'
import { CSSProperties } from 'react'
import { Orbitron } from 'next/font/google'

// Server Actions
import { serverAction } from '@/services/actions'

// Assets
import RightArrow from '@/assets/icons/rightArrow.svg'
import GraduateIcon from '@/assets/icons/graduateIcon.svg'

// Types
import { ICareer } from '@/types/pages/roadmaps'

// Components
import TrackTabComponent from '@/components/pages/Roadmaps/TrackTabComponent'

// MUI
import Grid from '@mui/material/Grid'
import Stack from '@mui/material/Stack'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'

// Google Font
const orbitron = Orbitron({
  display: 'swap',
  subsets: ['latin'],
})

interface IProps {
  params: {
    id: string
  }
}

export const metadata: Metadata = {
  title: 'Roadmaps Career',
}

const RoadmapsCareer = async ({ params }: IProps) => {
  const { data }: { data: ICareer } = await serverAction(`/roadmaps/${params.id}`)
  const styles: Record<string, CSSProperties> = {
    buttonStyle: {
      padding: '14px 22px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: '20px',
      width: '550px',
      maxWidth: '100%',
      borderRadius: '10px',
      border: `1px solid #00000066`,
    },
  }

  return (
    <Grid container sx={{ py: '64px' }} spacing={4}>
      <Grid item xs={12} lg={7}>
        <Stack gap={'24px'} sx={{ mb: '56px' }}>
          <Button sx={styles.buttonStyle}>
            <Stack direction={'row'} gap={2} alignItems={'center'} justifyContent={'flex-start'}>
              <Image width={30} height={30} alt={data.name} src={GraduateIcon} />
              <Typography color={'black'} variant="h6">{`What is ${data.name}?`}</Typography>
            </Stack>
            <Image alt={data.name} src={RightArrow} />
          </Button>
          <Typography fontWeight={500} color={'primary'} variant="h5">
            <p className={`${orbitron.className}`}>Defintion</p>
          </Typography>
          <Typography fontWeight={400} variant="h6">
            {data.description}
          </Typography>
        </Stack>

        <Stack gap={'24px'}>
          <Typography fontWeight={500} color={'primary'} variant="h5">
            <p className={`${orbitron.className}`}>Tracks</p>
          </Typography>
          {data?.tracks?.length > 0 && (
            <Stack direction={'row'} alignItems={'center'}>
              {<TrackTabComponent data={data.tracks} />}
            </Stack>
          )}
        </Stack>
      </Grid>
      <Grid item xs={12} lg={5}>
        <Stack alignItems={'center'} justifyContent={'center'}>
          video
        </Stack>
      </Grid>
    </Grid>
  )
}

export default RoadmapsCareer
