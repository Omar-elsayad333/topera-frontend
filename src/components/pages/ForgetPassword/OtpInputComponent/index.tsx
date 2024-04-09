'use client'

// Validation Controllers
import { Controller, Merge, FieldErrorsImpl } from 'react-hook-form'
// MUI
import FormControl from '@mui/material/FormControl'
import FormHelperText from '@mui/material/FormHelperText'
import { MuiOtpInput } from 'mui-one-time-password-input'

// Types
import { FieldError } from '@/types/validation'

interface IProps {
  id?: string
  error?: FieldError | Merge<FieldError, FieldErrorsImpl<any>>
  control: any
  name: string
  label?: string
  placeholder?: string
  onComplete: () => void
}

const OtpInputComponent = ({ name, control, id, placeholder, error, label, onComplete, ...args }: IProps) => {
  const validateChar = (character: string, index: number) => {
    return !isNaN(parseInt(character, 10))
  }
  return (
    <FormControl fullWidth error={!!error}>
      <Controller
        name={name}
        control={control}
        rules={{ validate: (value) => value.length === 6 }}
        render={({ field }) => (
          <MuiOtpInput
            sx={{ justifyItems: 'space-between', gap: '24px' }}
            TextFieldsProps={{
              sx: {
                '& .MuiOutlinedInput-root': {
                  height: '70px',
                  maxWidth: '70px',
                  borderRadius: '50px',

                  '& input': {
                    height: '70px',
                    maxWidth: '70px',
                    borderRadius: '50px',
                  },
                  '& fieldset': {
                    height: '100%',
                  },
                },
              },
            }}
            autoFocus
            {...field}
            length={6}
            onChange={field.onChange}
            validateChar={validateChar}
            onComplete={onComplete}
          />
        )}
      />
      {error?.type !== 'required' && (
        <FormHelperText sx={{ textAlign: 'unset' }}>{error?.message as string}</FormHelperText>
      )}
    </FormControl>
  )
}

export default OtpInputComponent
