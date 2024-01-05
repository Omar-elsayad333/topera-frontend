'use client'

// Validation Controllers
import { Controller } from 'react-hook-form'

// MUI
import TextField from '@mui/material/TextField'
import FormGroup from '@mui/material/FormGroup'
import FormHelperText from '@mui/material/FormHelperText'

interface IProps {
  control: any
  name: string
  errors?: any
  type?: string
  placeholder?: string
}

const TextFieldComponent: React.FC<IProps> = (props) => {
  return (
    <Controller
      name={props.name}
      control={props.control}
      render={({ field }) => (
        <FormGroup>
          <TextField
            type={props.type}
            variant="outlined"
            value={field.value}
            onChange={field.onChange}
            placeholder={props.placeholder}
            error={!!props.errors[props.name]?.message}
          />
          <FormHelperText sx={{ textAlign: 'unset' }} error>
            {props.errors[props.name]?.message}
          </FormHelperText>
        </FormGroup>
      )}
    />
  )
}

export default TextFieldComponent
