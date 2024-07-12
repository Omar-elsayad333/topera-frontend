import { FieldError } from '@/types/validation'
import { FieldErrorsImpl, Merge } from 'react-hook-form'

export interface IDatePickerProps {
  id?: string
  error?: FieldError | Merge<FieldError, FieldErrorsImpl<any>>
  control: any
  name: string
  label?: string
  placeholder?: string
  maxDate?: Date
  type?: 'text' | 'number'
  disabled?: boolean
}
