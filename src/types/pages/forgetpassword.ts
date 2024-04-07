export interface IForgetPasswordEmail {
  email: string
}

export enum EForgetPasswordStages {
  EmailStage,
  OtpStage,
  NewPasswordStage,
}

export interface IUseEmailComponentProps {
  changeStage: (to: EForgetPasswordStages) => void
}

export interface IEmailComponentProps {
  changeStage: (to: EForgetPasswordStages) => void
}

export interface IOtpComponentProps {
  back: (to: EForgetPasswordStages) => void
}

export interface IUseOtpComponentProps {
  changeStage: (to: EForgetPasswordStages) => void
}

export interface INewPasswordForm {
  password: string
  password_confirmation: string
}
