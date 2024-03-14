'use client'

import { useState } from 'react'

// Validation Controllers
import { Controller } from 'react-hook-form'

// MUI
import IconButton from '@mui/material/IconButton'
import InputLabel from '@mui/material/InputLabel'
import FormControl from '@mui/material/FormControl'
import OutlinedInput from '@mui/material/OutlinedInput'
import Visibility from '@mui/icons-material/Visibility'
import FormHelperText from '@mui/material/FormHelperText'
import InputAdornment from '@mui/material/InputAdornment'
import VisibilityOff from '@mui/icons-material/VisibilityOff'

interface IProps {
  id?: string
  error?: any
  control: any
  name: string
  label?: string
  placeholder?: string
}

const PasswordInputComponent: React.FC<IProps> = ({ name, control, id, placeholder, error, label, ...args }) => {
  const [showPassword, setShowPassword] = useState<boolean>(false)

  const handleClickShowPassword = () => setShowPassword((show) => !show)

  const handleMouseDownPassword = (event: any) => {
    event.preventDefault()
  }

  return (
    <FormControl fullWidth error={!!error}>
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <OutlinedInput
            id={id}
            value={field.value}
            onChange={field.onChange}
            placeholder={placeholder}
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
        )}
      />
      <InputLabel id={id}>{label}</InputLabel>
      {error?.type !== 'required' && <FormHelperText sx={{ textAlign: 'unset' }}>{error?.message}</FormHelperText>}
    </FormControl>
  )
}

export default PasswordInputComponent
