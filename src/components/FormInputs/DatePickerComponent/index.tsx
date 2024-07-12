'use client'

// Types
import { IDatePickerProps } from '@/components/FormInputs/DatePickerComponent/types'

// React Form Hook
import { Controller } from 'react-hook-form'

// Mui
import FormControl from '@mui/material/FormControl'
import FormHelperText from '@mui/material/FormHelperText'
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFnsV3'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { DatePicker } from '@mui/x-date-pickers/DatePicker'

export default function DatePickerComponent({
  error,
  name,
  control,
  placeholder,
  label,
  id,
  maxDate,
  disabled = false,
  ...args
}: IDatePickerProps) {
  return (
    <FormControl sx={{ padding: '0' }} fullWidth error={!!error}>
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DatePicker
              maxDate={maxDate}
              slotProps={{
                textField: {
                  variant: 'standard',
                  color: 'primary',
                  error: !!error,
                },
                day: {
                  sx: {
                    '&.Mui-selected , &.Mui-selected:active , &.Mui-selected:focus': {
                      backgroundColor: '#1473E6',
                    },
                  },
                },
              }}
              {...field}
              label={label}
              name={name}
              disabled={disabled}
              {...args}
            />
          </LocalizationProvider>
        )}
      />
      {error?.type !== 'required' && (
        <FormHelperText sx={{ textAlign: 'unset' }}>{error?.message as string}</FormHelperText>
      )}
    </FormControl>
  )
}
