// VValidation
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { object, ref, string } from 'yup'
// Types
import { INewPasswordForm } from '@/types/pages/forgetpassword'

// HTTP
import useRequestHandlers from '@/hooks/useRequestHandlers'
import { localStorageDelete, localStorageGet } from '@/utils'
import useHandleError from '@/hooks/useHandleError'
const schema = object({
  password: string().required(),
  password_confirmation: string()
    .required()
    .oneOf([ref('password'), ''], 'Passwords must match'),
})

const form: { name: keyof INewPasswordForm; label: string }[] = [
  { name: 'password', label: 'password' },
  { name: 'password_confirmation', label: 'passwordConfirmation' },
]
const useNewPasswordComponents = () => {
  const { loading, postHandler } = useRequestHandlers()
  const { handleError } = useHandleError()
  const {
    formState: { errors },
    control,
    handleSubmit,
  } = useForm<INewPasswordForm>({
    resolver: yupResolver(schema),
    defaultValues: {
      password: '',
      password_confirmation: '',
    },
  })
  const submitHandlebar = async (body: { password: string; token: string; email: string }) => {
    const { data, error } = await postHandler({ endpoint: '/account/reset-password', body })
    if (error) return handleError(error)
    if (data) {
      localStorageDelete('userTokenToResetPassword')
      localStorageDelete('userEmailToResetPassword')
    }
  }
  return {
    data: { form },
    states: { control, errors, loading },
    actions: {
      submit: handleSubmit((data) =>
        submitHandlebar({
          password: data.password,
          token: localStorageGet('userTokenToResetPassword'),
          email: localStorageGet('userEmailToResetPassword'),
        })
      ),
    },
  }
}

export default useNewPasswordComponents
