export enum EMatchingQuestionsSteps {
  StepOne,
  StepTwo,
}

export interface IMatchingQuestionsSelect {
  name: string
}
export interface IMatchingQuestionsForm {
  basicProgrammingLanguagesKnowledge: any[]
  proficientProgrammingLanguages: any[]
  preferredLearningStyle: any[]
  learningFrequency: any[]
  preferredCommunicationMethod: any[]
  technologyOfInterest: any[]
  weeklyHoursDedicatedToLearningAndCollaboration: number | null
  motivationForLearningAndCollaboration: any[]
  goalsOnThePlatform: any[]
  comfortLevelWithRemoteWorkOrCollaboration: IQuestionChoice
  projectTypeInterest: any[]
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
