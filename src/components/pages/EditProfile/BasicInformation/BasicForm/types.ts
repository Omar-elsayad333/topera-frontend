import { FieldErrors } from 'react-hook-form'

export interface IBasicForm {
  firstName: string
  lastName: string
  occupation: string
  country: { name: string }
  city: { name: string }
  image?: { extension?: string; data?: any }
  company?: string
}

export interface IBasicFormProps {
  control: any
  errors: FieldErrors<IBasicForm>
}
