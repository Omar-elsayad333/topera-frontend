import { ESocialLogin } from '@/types/enums'
import { FieldsControl } from '@/types/validation'
import { FieldErrors } from 'react-hook-form'
import { FormEventHandler } from 'react'

export interface IOAuthProvider {
  id: number
  label: string
  icon: any
  providerId: ESocialLogin
}

export interface ISignUpForm {
  firstname: string
  lastname: string
  email: string
  password: string
  confirmPassword: string
}

export interface IFormInput {
  type: 'text' | 'password'
  id: number
  name: keyof ISignUpForm
  xs: 6 | 12
}
export interface IFormComponentProps {
  formData: IFormInput[]
  formControl: FieldsControl<ISignUpForm>
  formErrors: FieldErrors<ISignUpForm>
  loading: boolean
  switchToForm: (state: boolean) => void
  submitForm: FormEventHandler<HTMLFormElement>
}

export interface IMainComponentProps {
  providers: IOAuthProvider[]
  handelSignUp: (providerId: ESocialLogin) => void
  switchToForm: (state: boolean) => void
}
