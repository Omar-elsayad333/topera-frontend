// React Form Hook
import { Controller } from 'react-hook-form'

// Mui
import Slider from '@mui/material/Slider'

// Types
import { ComponentProps } from 'react'
interface IProps extends ComponentProps<'input'> {
  name: string
  control: any
}
export default function SliderComponent({ name, control }: IProps) {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <Slider
          {...field}
          slotProps={{
            thumb: { style: { display: 'none' } },
          }}
        />
      )}
    />
  )
}
