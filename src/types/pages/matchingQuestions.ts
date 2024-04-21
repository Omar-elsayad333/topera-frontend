export enum EMatchingQuestionsSteps {
  StepOne,
  StepTwo,
}

export interface IMatchingQuestionsSelect {
  name: string
}
export interface IMatchingQuestionsForm {
  basicProgrammingLanguagesKnowledge: IQuestion[]
  proficientProgrammingLanguages: IQuestion[]
  preferredLearningStyle: IQuestion[]
  learningFrequency: IQuestion[]
  preferredCommunicationMethod: IQuestion[]
  TrackOfInterest: IQuestion[]
  technologyOfInterest: IQuestion[]
  weeklyHoursDedicatedToLearningAndCollaboration: number | any
  motivationForLearningAndCollaboration: IQuestion[]
  goalsOnThePlatform: IQuestion[]
  comfortLevelWithRemoteWorkOrCollaboration: any | null
  projectTypeInterest: IQuestion[]
}

export interface IQuestionChoice {
  name: string
  disabled?: boolean
  default?: boolean
  value?: string | null
}

export interface IQuestion {
  label: string
  name: keyof IMatchingQuestionsForm
  QuestionChoices?: IQuestionChoice[]
  type?: 'number' | 'single'
}
