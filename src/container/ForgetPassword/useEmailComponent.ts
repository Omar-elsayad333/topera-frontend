// Validation
import { object, string } from 'yup'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
// Types
import { EForgetPasswordStages, IForgetPasswordEmail, IUseEmailComponentProps } from '@/types/pages/forgetpassword'
import { FormEvent } from 'react'
import useRequestHandlers from '@/hooks/useRequestHandlers'

// LocalStorage Utils
import { localStorageSet } from '@/utils/localStorage'
import useHandleError from '@/hooks/useHandleError'

const schema = object({
  email: string().required().email(),
})

const useEmailComponent = ({ changeStage }: IUseEmailComponentProps) => {
  const { postHandler, loading } = useRequestHandlers()
  const { handleError } = useHandleError()
  const {
    formState: { errors },
    control,
    handleSubmit,
  } = useForm<IForgetPasswordEmail>({
    resolver: yupResolver(schema),
    defaultValues: {
      email: 'modyahmed221@gmail.com',
    },
  })
  const handelRequest = async (body: IForgetPasswordEmail) => {
    const { data, error } = await postHandler({ endpoint: '/account/forgot-password', body })
    if (error) return handleError(error)
    // TODO: should we save {email} from BE To Make Sure Request Is Success
    changeStage(EForgetPasswordStages.OtpStage)
    localStorageSet('userEmailToResetPassword', data.email)
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
