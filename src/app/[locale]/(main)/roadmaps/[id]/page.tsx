import { Metadata } from 'next'

// Server Actions
import { serverAction } from '@/services/actions'

// Types
import { ICareer } from '@/types/pages/roadmaps'

// Components
import TrackTabComponent from '@/components/pages/Roadmaps/TrackTabComponent'

// MUI
import Grid from '@mui/material/Grid'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'

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
    <Grid container sx={{ py: '64px' }} gap={'40px'}>
      <Grid item xs={12} lg={7}>
        <Stack gap={'24px'} sx={{ mb: '56px' }}>
          <Typography fontWeight={500} color={'primary'} variant="h5">
            Defintion
          </Typography>
          <Typography fontWeight={400} variant="h6">
            {data.description}
          </Typography>
        </Stack>

        <Stack gap={'24px'}>
          <Typography fontWeight={500} color={'primary'} variant="h5">
            Tracks
          </Typography>
          {data?.tracks.length > 0 && data.tracks.map((item) => <TrackTabComponent key={item.id} trackData={item} />)}
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
