'use client'

// Validation Controllers
import { Controller, Merge, FieldErrorsImpl } from 'react-hook-form'
// MUI
import FormControl from '@mui/material/FormControl'
import FormHelperText from '@mui/material/FormHelperText'
import TextField from '@mui/material/TextField'
// Types
import { FieldError, FieldsControl } from '@/types/validation'

interface IProps {
  id?: string
  error?: FieldError | Merge<FieldError, FieldErrorsImpl<any>>
  control: any
  name: string
  label?: string
  placeholder?: string
}

const OtpInputComponent = ({ name, control, id, placeholder, error, label, ...args }: IProps) => {
  return (
    <FormControl fullWidth error={!!error}>
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <TextField
            {...args}
            fullWidth
            id={id}
            label={label}
            type="number"
            value={field.value}
            variant={'outlined'}
            sx={{
              '& .MuiOutlinedInput-root': {
                '& fieldset': {
                  height: '70px',
                  width: '70px',
                  display: 'flex',
                  borderRadius: '150px',
                },
                '&:hover fieldset ,&.Mui-focused fieldset': {
                  borderColor: (theme) => theme.palette.primary.light,
                },
              },
            }}
            InputProps={{
              inputProps: {
                min: 0,
                style: {
                  textAlign: 'center',
                },
              },
            }}
            onChange={field.onChange}
            placeholder={placeholder}
          />
        )}
      />
      {error?.type !== 'required' && (
        <FormHelperText sx={{ textAlign: 'unset' }}>{error?.message as string}</FormHelperText>
      )}
    </FormControl>
  )
}

export default OtpInputComponent
