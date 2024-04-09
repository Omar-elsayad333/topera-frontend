export interface IFinishSignUpFrom {
  tracks: IField[]
  frameworks: IFrameWork[]
  employmentStatus: IFrameWork[]
  referralSource: IFrameWork[]
  preferredLanguage: IFrameWork[]
}
export interface IFrameWork {
  name: string
  id: string
}
export interface IField {
  id: string
  name: string
  frameworks: IFrameWork[]
}

export interface IQuestionsList {
  Text: string
  name: keyof IFinishSignUpFrom
  QuestionChoices: IFrameWork[]
}
