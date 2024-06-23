'use client'

// Validation Controllers
import { Controller, Merge, FieldErrorsImpl } from 'react-hook-form'
// MUI
import FormControl from '@mui/material/FormControl'
import FormHelperText from '@mui/material/FormHelperText'
import Typography from '@mui/material/Typography'

// Types
import { FieldError } from '@/types/validation'
// Hooks
import { useTheme } from '@mui/material'

interface IProps {
  id?: string
  error?: FieldError | Merge<FieldError, FieldErrorsImpl<any>>
  control: any
  name: string
  label?: string
}

const CheckBoxComponent = ({ name, control, id, error, label, ...args }: IProps) => {
  const theme = useTheme()
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
              type={'checkbox'}
              {...args}
            />
            <Typography
              sx={{
                color: !error ? (theme?.palette?.mode === 'dark' ? theme?.palette?.grey[400] : 'black') : 'red',
              }}
            >
              {label}
            </Typography>
          </div>
        )}
      />
      {error?.type !== 'required' && (
        <FormHelperText sx={{ textAlign: 'unset' }}>{error?.message as string}</FormHelperText>
      )}
    </FormControl>
  )
}

export default CheckBoxComponent
