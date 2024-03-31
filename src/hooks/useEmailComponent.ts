// Validation
import { object, string } from 'yup'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
const schema = object({
  email: string().required().email(),
})

// Types
import { IForgetPasswordEmail, IUseEmailComponentProps } from '@/types/pages/forgetpassword'
import { FormEvent, useState } from 'react'
import useRequestHandlers from '@/hooks/useRequestHandlers'
const useEmailComponent = ({ changeStage, setEmail }: IUseEmailComponentProps) => {
  const { postHandler } = useRequestHandlers()
  const [loading, setLoading] = useState<boolean>(false)
  const {
    formState: { errors },
    control,
    handleSubmit,
  } = useForm<IForgetPasswordEmail>({
    resolver: yupResolver(schema),
    defaultValues: {
      email: 'mohammedsherif@gmail.com',
    },
  })
  const handelRequest = async (body: IForgetPasswordEmail) => {
    try {
      setLoading(true)
      await postHandler({ endpoint: '/account/forgot-password', body })
      changeStage(2)
      setEmail(body.email)
      // if (request.status === 200) {
      // }
    } catch (err) {
      console.log(err)
    } finally {
      setLoading(false)
    }
  }
  const submit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    handleSubmit(handelRequest)()
  }
  return {
    data: {},
    states: { control, errors, loading },
    actions: { submit },
  }
}

export default useEmailComponent
