export enum EMatchingQuestionsSteps {
  StepOne,
  StepTwo,
}

export interface IMatchingQuestionsSelect {
  name: string
}
export interface IMatchingQuestionsForm {
  basicProgrammingLanguagesKnowledge: IMatchingQuestionsSelect[]
  proficientProgrammingLanguages: IMatchingQuestionsSelect[]
  preferredLearningStyle: IMatchingQuestionsSelect[]
  learningFrequency: IMatchingQuestionsSelect[]
  preferredCommunicationMethod: IMatchingQuestionsSelect[]
  technologyOfInterest: IMatchingQuestionsSelect[]
  shiftingFromAnotherCareer: IMatchingQuestionsSelect[]
  weeklyHoursDedicatedToLearningAndCollaboration: IMatchingQuestionsSelect[]
  motivationForLearningAndCollaboration: IMatchingQuestionsSelect[]
  goalsOnThePlatform: IMatchingQuestionsSelect[]
  comfortLevelWithRemoteWorkOrCollaboration: IMatchingQuestionsSelect[]
  projectTypeInterest: IMatchingQuestionsSelect[]
}

export interface IQuestion {
  label: string
  name: keyof IMatchingQuestionsForm
  QuestionChoices: { name: string }[]
}
