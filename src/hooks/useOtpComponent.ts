import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { object, string } from 'yup'
import { EForgetPasswordStages, IUseOtpComponentProps } from '@/types/pages/forgetpassword'
import { useState } from 'react'
import useRequestHandlers from '@/hooks/useRequestHandlers'

// LocalStorage Utils
import { localStorageDelete, localStorageGet, localStorageSet } from '@/utils'

const schema = object({
  code: string().min(6).required(),
})
interface IOtpForm {
  code: string
}
const defaultValues = {
  code: '',
}
const useOtpComponent = ({ changeStage }: IUseOtpComponentProps) => {
  const [loading, setLoading] = useState<boolean>(false)
  const { postHandler } = useRequestHandlers()
  const {
    formState: { errors },
    control,
    handleSubmit,
  } = useForm<IOtpForm>({ resolver: yupResolver(schema), defaultValues })
  const email = localStorageGet('userEmailToResetPassword')

  const handelSubmitRequest = async (body: { email: string; code: string }) => {
    try {
      setLoading(true)
      const res = await postHandler({ endpoint: '/account/verify-otp', body })
      localStorageSet('userTokenToResetPassword', res.token)
      changeStage(EForgetPasswordStages.NewPasswordStage)
    } catch (error) {
      console.log(error)
    } finally {
      setLoading(false)
    }
  }
  const submitHandlebar = async (data: IOtpForm) => {
    const email = localStorageGet('userEmailToResetPassword')
    const body = {
      ...data,
      email,
    }
    await handelSubmitRequest(body)
  }
  const back = () => {
    localStorageDelete('userEmailToResetPassword')
    changeStage(EForgetPasswordStages.EmailStage)
  }

  return {
    data: { email },
    states: { errors, control, loading },
    actions: { submit: handleSubmit(submitHandlebar), back },
  }
}
export default useOtpComponent
