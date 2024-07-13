import { FormControl, FormHelperText } from '@mui/material'
import { Controller, FieldError, FieldErrorsImpl, Merge } from 'react-hook-form'

interface IProps {
  id?: string
  error?: FieldError | Merge<FieldError, FieldErrorsImpl<any>>
  control: any
  name: string
  label?: string
  placeholder?: string
  type?: 'text' | 'number'
}

const ImageInput = ({ name, control, id, placeholder, error, label, ...args }: IProps) => {
  return (
    <FormControl fullWidth error={!!error}>
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <input
            {...args}
            id={id}
            multiple
            type="file"
            // label={label}
            // error={!!error}
            value={field.value}
            // variant={'standard'}
            onChange={field.onChange}
            placeholder={placeholder}
          />
        )}
      />
      {error?.type !== 'required' && (
        <FormHelperText sx={{ textAlign: 'unset' }}>{error?.message as string}</FormHelperText>
      )}
    </FormControl>
  )
}

export default ImageInput
