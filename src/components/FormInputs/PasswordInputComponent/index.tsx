'use client'

import { useState } from 'react'

// Validation Controllers
import { Controller } from 'react-hook-form'

// MUI
import FormGroup from '@mui/material/FormGroup'
import IconButton from '@mui/material/IconButton'
import OutlinedInput from '@mui/material/OutlinedInput'
import Visibility from '@mui/icons-material/Visibility'
import FormHelperText from '@mui/material/FormHelperText'
import InputAdornment from '@mui/material/InputAdornment'
import VisibilityOff from '@mui/icons-material/VisibilityOff'

interface IProps {
  control: any
  name: string
  errors?: any
  placeholder?: string
}

const PasswordInputComponent: React.FC<IProps> = (props) => {
  const [showPassword, setShowPassword] = useState<boolean>(false)

  const handleClickShowPassword = () => setShowPassword((show) => !show)

  const handleMouseDownPassword = (event: any) => {
    event.preventDefault()
  }

  return (
    <Controller
      name={props.name}
      control={props.control}
      render={({ field }) => (
        <FormGroup>
          <OutlinedInput
            value={field.value}
            onChange={field.onChange}
            placeholder={props.placeholder}
            error={!!props.errors[props.name]?.message}
            type={showPassword ? 'text' : 'password'}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
          />
          <FormHelperText sx={{ textAlign: 'unset' }} error>
            {props.errors[props.name]?.message}
          </FormHelperText>
        </FormGroup>
      )}
    />
  )
}

export default PasswordInputComponent
