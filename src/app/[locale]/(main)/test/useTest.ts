// Form Controlling
import { useForm, FieldError } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'

const schema = yup.object({
  email: yup.number().required(),
})

interface IFormFields {
  email: number
}

export const useTest = () => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<IFormFields>({
    resolver: yupResolver(schema),
    defaultValues: {
      email: 0,
    },
  })

  const onsubmit = (data: IFormFields) => {
    console.log(data)
  }
  return {
    control,
    errors,
    onsubmit,
    handleSubmit,
  }
}
