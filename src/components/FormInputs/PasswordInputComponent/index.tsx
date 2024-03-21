'use client'

import {useState} from 'react'

// Validation Controllers
import {Controller} from 'react-hook-form'

// MUI
import IconButton from '@mui/material/IconButton'
import InputLabel from '@mui/material/InputLabel'
import FormControl from '@mui/material/FormControl'
import Input from '@mui/material/Input'
import Visibility from '@mui/icons-material/Visibility'
import FormHelperText from '@mui/material/FormHelperText'
import InputAdornment from '@mui/material/InputAdornment'
import VisibilityOff from '@mui/icons-material/VisibilityOff'
import {TextField} from '@mui/material'

interface IProps {
    id?: string
    error?: any
    control: any
    name: string
    label?: string
    placeholder?: string
}

const PasswordInputComponent: React.FC<IProps> = ({name, control, id, placeholder, error, label, ...args}) => {
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
                render={({field}) => (
                    <TextField
                        id={id}
                        value={field.value}
                        onChange={field.onChange}
                        placeholder={placeholder}
                        label={label}
                        variant={'standard'}
                        type={showPassword ? 'text' : 'password'}
                        InputProps={{
                            endAdornment: (
                                <InputAdornment position="end">
                                    <IconButton
                                        aria-label="toggle password visibility"
                                        onClick={handleClickShowPassword}
                                        onMouseDown={handleMouseDownPassword}
                                        edge="end"
                                    >
                                        {showPassword ? <VisibilityOff/> : <Visibility/>}
                                    </IconButton>
                                </InputAdornment>
                            ),
                        }}
                    />
                )}
            />
            {error?.type !== 'required' && <FormHelperText sx={{textAlign: 'unset'}}>{error?.message}</FormHelperText>}
        </FormControl>
    )
}

export default PasswordInputComponent
