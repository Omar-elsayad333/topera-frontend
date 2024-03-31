import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { object, string } from 'yup'

const schema = object({
  'input-1': string().required().max(9),
  'input-2': string().required().max(9),
  'input-3': string().required().max(9),
  'input-4': string().required().max(9),
  'input-5': string().required().max(9),
  'input-6': string().required().max(9),
})
interface IOtpForm {
  'input-1': string
  'input-2': string
  'input-3': string
  'input-4': string
  'input-5': string
  'input-6': string
}
const defaultValues = {
  'input-1': '',
  'input-2': '',
  'input-3': '',
  'input-4': '',
  'input-5': '',
  'input-6': '',
}
const useOtpComponent = () => {
  const {
    formState: { errors },
    control,
    handleSubmit,
  } = useForm<IOtpForm>({ resolver: yupResolver(schema), defaultValues })
  return {
    data: {},
    states: { errors, control },
    actions: {},
  }
}
export default useOtpComponent
