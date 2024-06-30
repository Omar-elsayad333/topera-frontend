// React Form Hook
import { Controller } from 'react-hook-form'

// Mui
import Slider from '@mui/material/Slider'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'

// Types
import { ComponentProps } from 'react'
import CloseIcon from '@mui/icons-material/Close'

interface IProps extends ComponentProps<'input'> {
  name: string
  control: any
  onDelete: (name: string) => void
}
export default function SliderComponent({ name, control, onDelete }: IProps) {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <>
          <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <Typography sx={{ color: (theme) => theme.palette.primary.main }}>{name}</Typography>
            <Typography sx={{ color: (theme) => theme.palette.primary.main }}>{field.value}</Typography>
          </Box>
          <Box sx={{ display: 'flex', gap: '24px', justifyContent: 'space-between' }}>
            <Slider {...field} slotProps={{ thumb: { style: { display: 'none' } } }} />
            <CloseIcon
              sx={{ cursor: 'pointer' }}
              fontSize={'small'}
              onClick={() => onDelete(name)}
              aria-label={`delete skill ${name}`}
              aria-describedby={`delete skill ${name}`}
            />
          </Box>
        </>
      )}
    />
  )
}
