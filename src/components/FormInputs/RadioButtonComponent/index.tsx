'use client'

// Validation Controllers
import { Controller, Merge, FieldErrorsImpl } from 'react-hook-form'
// MUI
import FormControl from '@mui/material/FormControl'
import FormHelperText from '@mui/material/FormHelperText'
import TextField from '@mui/material/TextField'
// Types
import { FieldError, FieldsControl } from '@/types/validation'
import Typography from '@mui/material/Typography'

interface IProps {
  id?: string
  error?: FieldError | Merge<FieldError, FieldErrorsImpl<any>>
  control: any
  name: string
  label?: string
  type?: 'text' | 'number'
}

const RadioButtonComponent = ({ name, control, id, error, label, type = 'text', ...args }: IProps) => {
  return (
    <FormControl fullWidth error={!!error}>
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <input
              style={{ width: 'fit-content', height: '12px' }}
              {...field}
              name={name}
              aria-label={label}
              aria-describedby={`check-${label}`}
              aria-controls={name}
              type={'radio'}
              {...args}
            />
            <Typography sx={{ color: !!error ? 'red' : 'black' }}>{label}</Typography>
          </div>
        )}
      />
      {error?.type !== 'required' && (
        <FormHelperText sx={{ textAlign: 'unset' }}>{error?.message as string}</FormHelperText>
      )}
    </FormControl>
  )
}

export default RadioButtonComponent
