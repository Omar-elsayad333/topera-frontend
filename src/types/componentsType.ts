import { ButtonProps } from '@mui/material/Button'

export interface IButtonComponentProps extends ButtonProps {
  text: string
  sx?: object
  disabled?: boolean
  type?: 'button' | 'submit'
  onClick?: (e: any) => void | undefined
  startIcon?: any
}
