'use client'

// Validation Controllers
import { Controller } from 'react-hook-form'

// MUI
import InputLabel from '@mui/material/InputLabel'
import FormControl from '@mui/material/FormControl'
import OutlinedInput from '@mui/material/OutlinedInput'
import FormHelperText from '@mui/material/FormHelperText'

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
          <OutlinedInput id={id} type="text" value={field.value} onChange={field.onChange} placeholder={placeholder} />
        )}
      />
      <InputLabel id={id}>{label}</InputLabel>
      {error?.type !== 'required' && <FormHelperText sx={{ textAlign: 'unset' }}>{error?.message}</FormHelperText>}
    </FormControl>
  )
}

export default TextFieldComponent
