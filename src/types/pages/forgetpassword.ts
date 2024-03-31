export interface IForgetPasswordEmail {
  email: string
}

export type TForgetPasswordStages = 1 | 2 | 3

export interface IUseEmailComponentProps {
  changeStage: (to: TForgetPasswordStages) => void
  setEmail: (email: string) => void
}

export interface IEmailComponentProps {
  changeStage: (to: TForgetPasswordStages) => void
  setEmail: (email: string) => void
}

export interface IOtpComponentProps {
  email: string
  back: () => void
}
