import { useState } from 'react'
import { EMatchingQuestionsSteps, IMatchingQuestionsForm, IQuestion } from '@/types/pages/matchingQuestions'
import { array, object } from 'yup'
import { FieldErrors, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'

const schema = object({
  basicProgrammingLanguagesKnowledge: array().min(1).required(),
  proficientProgrammingLanguages: array().min(1).required(),
  preferredLearningStyle: array().min(1).required(),
  learningFrequency: array().min(1).required(),
  preferredCommunicationMethod: array().min(1).required(),
  technologyOfInterest: array().min(1).required(),
  shiftingFromAnotherCareer: array().min(1).required(),
  weeklyHoursDedicatedToLearningAndCollaboration: array().min(1).required(),
  motivationForLearningAndCollaboration: array().min(1).required(),
  goalsOnThePlatform: array().min(1).required(),
  comfortLevelWithRemoteWorkOrCollaboration: array().min(1).required(),
  projectTypeInterest: array().min(1).required(),
})
const useMatchingQuestions = () => {
  const [currentStep, setCurrentStep] = useState<EMatchingQuestionsSteps>(0)

  const questions: IQuestion[] = [
    {
      label: 'Programming languages you have basic knowledge in',
      name: 'basicProgrammingLanguagesKnowledge',
      QuestionChoices: [
        {
          name: 'C',
        },
        {
          name: 'C++',
        },
        {
          name: 'C#',
        },
        {
          name: 'Java',
        },
        {
          name: 'Python',
        },
        {
          name: 'JavaScript',
        },
        {
          name: 'Go',
        },
        {
          name: 'Dart',
        },
      ],
    },
    {
      label: 'Programming languages you are proficient in',
      name: 'proficientProgrammingLanguages',
      QuestionChoices: [
        {
          name: 'C',
        },
        {
          name: 'C++',
        },
        {
          name: 'C#',
        },
        {
          name: 'Java',
        },
        {
          name: 'Python',
        },
        {
          name: 'JavaScript',
        },
        {
          name: 'Go',
        },
        {
          name: 'Dart',
        },
      ],
    },
    {
      label: 'Preferred learning style',
      name: 'preferredLearningStyle',
      QuestionChoices: [
        {
          name: 'Books and Articles',
        },
        {
          name: 'Videos',
        },
        {
          name: 'Documentations',
        },
        {
          name: 'Interactive Platforms',
        },
      ],
    },
    {
      label: 'What is your frequency in learning?',
      name: 'learningFrequency',
      QuestionChoices: [
        {
          name: 'Daily',
        },
        {
          name: 'Weekly',
        },
        {
          name: 'Monthly',
        },
      ],
    },
    {
      label: 'What is your preferred way of communication?',
      name: 'preferredCommunicationMethod',
      QuestionChoices: [
        {
          name: 'Chat',
        },
        {
          name: 'Email',
        },
        {
          name: 'Video Calls',
        },
      ],
    },
    {
      label: 'Which technology/framework are you interested in?',
      name: 'technologyOfInterest',
      QuestionChoices: [
        {
          name: 'choice 1',
        },
        {
          name: 'choice 2',
        },
        {
          name: 'choice 3',
        },
        {
          name: 'uchoice 4',
        },
      ],
    },
    {
      label: 'How many hours per week are you willing to dedicate to learning?',
      name: 'weeklyHoursDedicatedToLearningAndCollaboration',
      QuestionChoices: [
        {
          name: '0-5 hours',
        },
        {
          name: '5-10 hours',
        },
        {
          name: '10-15 hours',
        },
        {
          name: 'more than 15 hours',
        },
      ],
    },
    {
      label: 'What motivates you to learn and collaborate with others?',
      name: 'motivationForLearningAndCollaboration',
      QuestionChoices: [
        {
          name: 'career advancement',
        },
        {
          name: 'personal interest',
        },
        {
          name: 'skill development',
        },
      ],
    },
    {
      label: 'What specific goals do you hope to achieve through our platform?',
      name: 'goalsOnThePlatform',
      QuestionChoices: [
        {
          name: 'choice 1',
        },
        {
          name: 'choice 2',
        },
        {
          name: 'choice 3',
        },
        {
          name: 'uchoice 4',
        },
      ],
    },
    {
      label: 'How comfortable are you with remote work or collaboration?',
      name: 'comfortLevelWithRemoteWorkOrCollaboration',
      QuestionChoices: [
        {
          name: 'very comfortable',
        },
        {
          name: 'somewhat comfortable',
        },
        {
          name: 'not comfortable',
        },
      ],
    },
    {
      label: 'What type of projects are you interested in collaborating on?',
      name: 'projectTypeInterest',
      QuestionChoices: [
        {
          name: 'open source',
        },
        {
          name: 'freelance',
        },
        {
          name: 'personal',
        },
      ],
    },
  ]

  const defaultValues = {
    basicProgrammingLanguagesKnowledge: [],
    proficientProgrammingLanguages: [],
    preferredLearningStyle: [],
    learningFrequency: [],
    preferredCommunicationMethod: [],
    technologyOfInterest: [],
    shiftingFromAnotherCareer: [],
    weeklyHoursDedicatedToLearningAndCollaboration: [],
    motivationForLearningAndCollaboration: [],
    goalsOnThePlatform: [],
    comfortLevelWithRemoteWorkOrCollaboration: [],
    projectTypeInterest: [],
  }
  const {
    formState: { errors },
    control,
    handleSubmit,
  } = useForm<IMatchingQuestionsForm>({
    resolver: yupResolver(schema),
    defaultValues,
  })
  const sendData = (data: IMatchingQuestionsForm) => {}

  const handelError = (errorData: FieldErrors<IMatchingQuestionsForm>) => {
    const stepOnFieldNames: string[] = [
      'technologyOfInterest',
      'preferredCommunicationMethod',
      'learningFrequency',
      'preferredLearningStyle',
      'proficientProgrammingLanguages',
      'basicProgrammingLanguagesKnowledge',
    ]
    if (stepOnFieldNames.includes(Object.keys(errorData)[0])) setCurrentStep(EMatchingQuestionsSteps.StepOne)
  }
  const submit = () => {
    if (currentStep === EMatchingQuestionsSteps.StepOne) {
      setCurrentStep(EMatchingQuestionsSteps.StepTwo)
    } else {
      handleSubmit(sendData, handelError)()
    }
  }
  const toDisplayQuestions = questions.slice(currentStep * 6, currentStep * 6 + 6)

  return {
    data: { toDisplayQuestions },
    states: { currentStep, errors, control },
    actions: { setCurrentStep, submit },
  }
}

export default useMatchingQuestions
