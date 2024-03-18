'use client'

// Validation Controllers
import { Controller } from 'react-hook-form'

// MUI
import InputLabel from '@mui/material/InputLabel'
import FormControl from '@mui/material/FormControl'
import FormHelperText from '@mui/material/FormHelperText'
import { TextField } from '@mui/material'

interface IProps {
  id?: string
  error?: any
  control: any
  name: string
  label?: string
  placeholder?: string
}

const TextFieldComponent: React.FC<IProps> = ({ name, control, id, placeholder, error, label, ...args }) => {
  return (
    <FormControl fullWidth error={!!error}>
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <TextField
            id={id}
            type="text"
            label={label}
            value={field.value}
            onChange={field.onChange}
            placeholder={placeholder}
            variant={'standard'}
          />
        )}
      />
      {error?.type !== 'required' && <FormHelperText sx={{ textAlign: 'unset' }}>{error?.message}</FormHelperText>}
    </FormControl>
  )
}

export default TextFieldComponent
