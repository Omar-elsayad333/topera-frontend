// Yup
import { mixed, object, string } from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'

// hooks
import { useForm } from 'react-hook-form'
import useRequestHandlers from '@/hooks/useRequestHandlers'

// Types
import { IBasicForm } from '@/components/pages/EditProfile/BasicInformation/BasicForm/types'

export default function useBasicForm() {
  const { putHandler } = useRequestHandlers()

  const defaultValues = {
    firstName: '',
    lastName: '',
    occupation: '',
    country: { name: '' },
    city: { name: '' },
    image: { extension: '', data: '' },
    company: '',
  }

  const schema = object({
    firstName: string().required(),
    lastName: string().required(),
    occupation: string().required(),
    country: object({ name: string().required() }).required(),
    city: object({ name: string().required() }).required(),
    image: mixed(),
    company: string(),
  })

  const {
    formState: { errors },
    control,
    setValue,
    handleSubmit,
    watch,
  } = useForm<IBasicForm>({ defaultValues, resolver: yupResolver(schema) })

  const onSubmit = async (data: IBasicForm) => {
    await putHandler({ endpoint: 'profile', body: { ...data, city: data?.city?.name, country: data?.country?.name } })
  }

  console.log(watch('image'))

  return { errors, control, setValue, handleSubmit, onSubmit }
}
