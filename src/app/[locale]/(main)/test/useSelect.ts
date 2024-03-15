import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { selectSchema } from './validation'
import { Ioption, IFormInput } from './types'

const options: Ioption[] = [
  { id: 0, name: 'select' },
  { id: 1, name: 'sss' },
  { id: 2, name: '4s' },
  { id: 4, name: '43s' },
]
export const useSelect = () => {
  const {
    formState: { errors },
    control,
    handleSubmit,
  } = useForm<IFormInput>({
    resolver: yupResolver(selectSchema),
    defaultValues: {
      multi: [],
      single: { id: 0, name: 'select' },
    },
  })
  const onSubmit = handleSubmit(
    (data) => {
      console.log('ete')
      console.log(data)
    },
    (error) => {
      console.log('err', error)
    }
  )
  return {
    onSubmit,
    errors,
    control,
    options,
  }
}
