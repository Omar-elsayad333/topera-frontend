import { ButtonProps } from '@mui/material/Button'

export interface IButtonComponentProps extends ButtonProps {
  text: string
  size?: 'small' | 'medium' | 'large'
  sx?: object
  disabled?: boolean
  type?: 'button' | 'submit'
  onClick?: (e: any) => void | undefined
  startIcon?: any
}
