'use client'

import { object, string } from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm, Controller } from 'react-hook-form'

import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'

const validationSchema = object({
  email: string().email('Enter a valid email').required('Email is required'),
  password: string()
    .min(8, 'Password should be of minimum 8 characters length')
    .required('Password is required'),
})

const TestComponent = ({ dict }: any) => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
  })

  const onSubmit = (data: any) => console.log(data)

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Controller
        name="email"
        control={control}
        render={({ field }) => (
          <div>
            <TextField
              value={field.value}
              onChange={field.onChange}
              error={!!errors.email?.message}
            />
            <p style={{ color: 'red' }}>{errors.email?.message}</p>
          </div>
        )}
      />
      <Controller
        name="password"
        control={control}
        render={({ field }) => (
          <div>
            <TextField
              value={field.value}
              onChange={field.onChange}
              error={!!errors.password?.message}
            />
            <p style={{ color: 'red' }}>{errors.password?.message}</p>
          </div>
        )}
      />
      <Button variant="contained" type="submit">
        submit
      </Button>
    </form>
  )
}

export default TestComponent
