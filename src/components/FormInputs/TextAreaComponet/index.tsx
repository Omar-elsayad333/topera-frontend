'use client'

// Validation Controllers
import { Controller, Merge, FieldErrorsImpl } from 'react-hook-form'

// MUI
import FormControl from '@mui/material/FormControl'
import FormHelperText from '@mui/material/FormHelperText'
import FormLabel from '@mui/material/FormLabel'
import Typography from '@mui/material/Typography'

// Hooks
import { useTheme } from '@mui/material'

// Types
import { FieldError } from '@/types/validation'
import { ComponentProps } from 'react'

interface IProps {
  id?: string
  error?: FieldError | Merge<FieldError, FieldErrorsImpl<any>>
  control: any
  name: string
  label?: string
  placeholder?: string
  rows?: number
  noResize?: boolean
}

const TextAreaComponent = ({
  name,
  control,
  id,
  placeholder,
  error,
  label,
  rows = 7,
  noResize,
  ...args
}: IProps & ComponentProps<'textarea'>) => {
  const theme = useTheme()

  const borderColor = `${!error ? (theme?.palette?.mode === 'dark' ? 'white' : 'gray') : 'red'}`
  return (
    <FormControl fullWidth error={!!error}>
      <FormLabel>
        <Typography sx={{ fontWeight: 500 }} variant={'subtitle1'}>
          {label}
        </Typography>
      </FormLabel>
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <textarea
            style={{
              border: `1px solid ${borderColor}`,
              borderRadius: '3px',
              resize: `${noResize ? 'none' : 'both'}`,
              backgroundColor: 'transparent',
            }}
            rows={rows}
            id={id}
            value={field.value}
            onChange={field.onChange}
            placeholder={placeholder}
            {...args}
          />
        )}
      />
      {error?.type !== 'required' && (
        <FormHelperText sx={{ textAlign: 'unset' }}>{error?.message as string}</FormHelperText>
      )}
    </FormControl>
  )
}

export default TextAreaComponent
