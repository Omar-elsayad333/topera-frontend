import { Metadata } from 'next'
import { Orbitron } from 'next/font/google'

// Server Actions
import { serverAction } from '@/services/actions'

// Types
import { ICareer } from '@/types/pages/roadmaps'

// Components
import TrackTabComponent from '@/components/pages/Roadmaps/TrackTabComponent'
import CareerButtonComponent from '@/components/pages/Roadmaps/CareerButtonComponent'

// MUI
import Grid from '@mui/material/Grid'
import Stack from '@mui/material/Stack'
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

  return (
    <Grid container sx={{ py: '64px' }} spacing={4}>
      <Grid item xs={12} lg={7}>
        <Stack gap={'24px'} sx={{ mb: '56px' }}>
          <CareerButtonComponent articalId={data.article.id} careerName={data.name} />
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
