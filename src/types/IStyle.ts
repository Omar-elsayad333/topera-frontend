import { Theme, SystemStyleObject } from '@mui/system'

export type IStyle = {
  [Property: string]: SystemStyleObject<Theme> | ((theme: Theme) => SystemStyleObject<Theme>) | undefined
}

declare module '@mui/material/Button' {
  interface ButtonPropsVariantOverrides {
    grayButton: true
    primary: true
    socialButton: true
    postActions: true
  }
}
