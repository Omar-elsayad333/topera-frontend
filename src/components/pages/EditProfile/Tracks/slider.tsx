// Mui
import Slider from '@mui/material/Slider'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'

// Types
import { ComponentProps } from 'react'
import CloseIcon from '@mui/icons-material/Close'
import Grid from '@mui/material/Grid'
import { EUserTrackLevel } from '@/types/enums'

interface IProps extends ComponentProps<'input'> {
  value: number
  label?: string
  name: string
  onDelete: (name: string) => void
  handelChange: (name: string, value: number) => void
}

export default function TrackSlider({ name, onDelete, handelChange, label, value }: IProps) {
  const steps = [
    {
      value: EUserTrackLevel.AbsoluteBeginner * 25,
    },
    {
      value: EUserTrackLevel.Beginner * 25,
    },
    {
      value: EUserTrackLevel.Intermediate * 25,
    },
    {
      value: EUserTrackLevel.Advanced * 25,
    },
  ]

  return (
    <Grid xs={12}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Typography sx={{ color: (theme) => theme.palette.primary.main }}>{label ? label : name}</Typography>
        <Typography sx={{ color: (theme) => theme.palette.primary.main }}>{value}</Typography>
      </Box>
      <Box sx={{ display: 'flex', gap: '24px', justifyContent: 'space-between' }}>
        <Slider
          step={25}
          marks={steps}
          value={value}
          onChange={(e, nv) => handelChange(name, nv as number)}
          slotProps={{ thumb: { style: { display: 'none' } } }}
        />
        <CloseIcon
          sx={{ cursor: 'pointer' }}
          fontSize={'small'}
          onClick={() => onDelete(name)}
          aria-label={`delete skill ${name}`}
          aria-describedby={`delete skill ${name}`}
        />
      </Box>
    </Grid>
  )
}
