// Form Controlling
import {useForm} from 'react-hook-form';
export const useTest = () => {

  const {handleSubmit,control} = useForm()

  return {
    control

  }
}
