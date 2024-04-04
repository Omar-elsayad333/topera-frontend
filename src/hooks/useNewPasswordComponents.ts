// VValidation
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { date, object, ref, string } from 'yup'

// Types
import { INewPasswordForm } from '@/types/pages/forgetpassword'

// HTTP
import useRequestHandlers from '@/hooks/useRequestHandlers'
import { localStorageDelete, localStorageGet } from '@/utils'
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
    try {
      const res = await postHandler({ endpoint: 'reset-password', body })
      if (res) {
        localStorageDelete('userTokenToResetPassword')
        localStorageDelete('userEmailToResetPassword')
      }
    } catch (err) {
      console.log(err)
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
