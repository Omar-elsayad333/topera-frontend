import React from 'react'
import Button from '@mui/material/Button'

interface IButtonComponentProps {
  text: string
  variant?: 'contained' | 'outlined'
  size?: 'small' | 'medium' | 'large'
  sx?: object
  disabled?: boolean
  type?: 'button' | 'submit'
  onClick: () => void
  startIcon?: any
}
const ButtonComponent: React.FC<IButtonComponentProps> = ({
  text,
  variant = 'contained',
  size = 'medium',
  disabled = false,
  sx,
  type = 'button',
  onClick,
  startIcon,
}) => {
  return (
    <Button
      style={{ textTransform: 'none' }}
      startIcon={startIcon}
      type={type}
      sx={{ display: 'flex', gap: '10px', ...sx }}
      variant={variant}
      disabled={disabled}
      size={size}
      onClick={() => onClick()}
    >
      {text}
    </Button>
  )
}

export default ButtonComponent
