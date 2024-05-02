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
  preferredCommunicationMethod: IQuestion[]
  TrackOfInterest: IQuestion[]
  technologyOfInterest: IQuestion[]
  learningFrequency: IQuestion[]
  weeklyHoursDedicatedToLearningAndCollaboration: any
  motivationForLearningAndCollaboration: IQuestion[]
  goalsOnThePlatform: IQuestion[]
  comfortLevelWithRemoteWorkOrCollaboration: any
  projectTypeInterest: IQuestion[]
}

export interface StepOneForm {
  basicProgrammingLanguagesKnowledge: IQuestion[]
  proficientProgrammingLanguages: IQuestion[]
  preferredCommunicationMethod: IQuestion[]
  TrackOfInterest: IQuestion[]
  technologyOfInterest: IQuestion[]
  preferredLearningStyle: IQuestion[]
}

export interface StepTwoForm {
  learningFrequency: IQuestion[]
  weeklyHoursDedicatedToLearningAndCollaboration: any
  motivationForLearningAndCollaboration: IQuestion[]
  goalsOnThePlatform: IQuestion[]
  comfortLevelWithRemoteWorkOrCollaboration: any
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
  maxLength?: number
  QuestionChoices?: IQuestionChoice[]
  frameworks?: any
  type?: 'number' | 'single'
}
