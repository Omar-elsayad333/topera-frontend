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
  type?: 'text' | 'number'
}

const TextFieldComponent = ({ name, control, id, placeholder, error, label, type = 'text', ...args }: IProps) => {
  return (
    <FormControl fullWidth error={!!error}>
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <TextField
            error={!!error}
            {...args}
            fullWidth
            id={id}
            label={label}
            type={type}
            value={field.value}
            onChange={field.onChange}
            placeholder={placeholder}
            variant={'standard'}
          />
        )}
      />
      {error?.type !== 'required' && (
        <FormHelperText sx={{ textAlign: 'unset' }}>{error?.message as string}</FormHelperText>
      )}
    </FormControl>
  )
}

export default TextFieldComponent
