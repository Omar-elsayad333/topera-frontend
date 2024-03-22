import React from 'react'
import Button from '@mui/material/Button'
import { IButtonComponentProps } from '@/types/componentsType'

const ButtonComponent: React.FC<IButtonComponentProps> = ({
  text,
  variant = 'contained',
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
      onClick={onClick}
    >
      {text}
    </Button>
  )
}

export default ButtonComponent
