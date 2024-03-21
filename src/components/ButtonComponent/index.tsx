import React from 'react'
import Button from '@mui/material/Button'
import { IButtonComponentProps } from '@/types/globalButton'

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
      sx={sx}
      variant={variant}
      disabled={disabled}
      size={size}
      onClick={onClick}
    >
      {text}
    </Button>
  )
}

export default ButtonComponent
