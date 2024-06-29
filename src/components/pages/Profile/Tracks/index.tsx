// Hooks
import { useTranslations } from 'next-intl'
import { useState } from 'react'

// Types
import { TTrack } from '@/container/Profile/types'

// Components
import ComponentHolder from '@/components/pages/Profile/ComponentHolder'

// Mui
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import LinearProgress from '@mui/material/LinearProgress'
import Button from '@mui/material/Button'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight'

export default function Tracks({ tracks }: { tracks: TTrack[] }) {
  const t = useTranslations('profile')
  const [cutted, setCutted] = useState<boolean>(true)
  const cutTracks = cutted ? tracks.slice(0, 3) : tracks
  return (
    <ComponentHolder title={'tracks'}>
      <Grid container gap={'32px'}>
        {cutTracks.map(({ track, level }, i) => {
          return (
            <Grid container key={i} item lg={3} md={5} xs={12} direction={'column'}>
              <Typography variant={'h6'} sx={{ color: (theme) => theme.palette.primary.main, width: '100%' }}>
                {track}
              </Typography>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: '8px' }}>
                <LinearProgress
                  variant="determinate"
                  color={'primary'}
                  value={level}
                  sx={{ maxHeight: '3px', width: '60%', transform: 'scaleX(-1)' }}
                  key={i}
                />
                <Typography variant={'h6'} sx={{ color: (theme) => theme.palette.primary.main, width: '30%' }}>
                  {level}%
                </Typography>
              </div>
            </Grid>
          )
        })}
      </Grid>
      {tracks.length > 3 && (
        <Button
          onClick={() => setCutted(!cutted)}
          sx={{ marginTop: '24px' }}
          variant={'contained'}
          endIcon={<KeyboardArrowRightIcon />}
        >
          {!cutted ? t('showLess') : t('showAllTracks')}
        </Button>
      )}
    </ComponentHolder>
  )
}
