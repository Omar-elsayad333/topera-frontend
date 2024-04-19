import { FormEvent, useState } from 'react'
import {
  EMatchingQuestionsSteps,
  IMatchingQuestionsForm,
  IQuestion,
  IQuestionChoice,
} from '@/types/pages/matchingQuestions'
import { array, string, number, object, boolean } from 'yup'
import { FieldErrors, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import useRequestHandlers from '@/hooks/useRequestHandlers'
import useHandleError from '@/hooks/useHandleError'

const schema = object({
  basicProgrammingLanguagesKnowledge: array().min(1).required(),
  proficientProgrammingLanguages: array().min(1).required(),
  preferredLearningStyle: array().min(1).required(),
  learningFrequency: array().min(1).required(),
  preferredCommunicationMethod: array().min(1).required(),
  technologyOfInterest: array().min(1).required(),
  weeklyHoursDedicatedToLearningAndCollaboration: number().nullable().required(),
  motivationForLearningAndCollaboration: array().min(1).required(),
  goalsOnThePlatform: array().min(1).required(),
  comfortLevelWithRemoteWorkOrCollaboration: object()
    .shape({
      name: string().required(),
      disabled: boolean(),
      default: boolean(),
      value: string().nullable(),
    })
    .required(),
  projectTypeInterest: array().min(1).required(),
})
const useMatchingQuestions = () => {
  const [currentStep, setCurrentStep] = useState<EMatchingQuestionsSteps>(0)

  const { postHandler, loading } = useRequestHandlers()

  const { handleError } = useHandleError()

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
      label: 'How many hours per week are you willing to dedicate to learning and collaborating?',
      name: 'weeklyHoursDedicatedToLearningAndCollaboration',
      type: 'number',
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
      label: 'Are you comfortable with remote work or collaboration?',
      name: 'comfortLevelWithRemoteWorkOrCollaboration',
      type: 'single',
      QuestionChoices: [
        {
          name: 'yes',
          value: 'true',
        },
        {
          name: 'no',
          value: 'false',
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
    weeklyHoursDedicatedToLearningAndCollaboration: null,
    motivationForLearningAndCollaboration: [],
    goalsOnThePlatform: [],
    comfortLevelWithRemoteWorkOrCollaboration: { name: '', value: null },
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
  const sendData = async (data: IMatchingQuestionsForm) => {
    console.log(data)
    const body: any = {}
    Object.keys(data).forEach((item) => {
      if (Array.isArray(data[item as keyof IMatchingQuestionsForm])) {
        body[item] = [...(data[item as keyof IMatchingQuestionsForm] as any)].map((item) => item.name).join(', ')
      } else if (typeof data[item as keyof IMatchingQuestionsForm] === 'object') {
        body[item] = data[item as 'comfortLevelWithRemoteWorkOrCollaboration']?.value
      } else {
        body[item] = data[item as keyof IMatchingQuestionsForm]
      }
    })
    const { error } = await postHandler({ endpoint: '/submissions/phasetwo', body })
    if (error) return handleError(error)
  }

  const handelFormError = (errorData: FieldErrors<IMatchingQuestionsForm>) => {
    console.log(errorData)
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

  const submit = (e: FormEvent) => {
    e.preventDefault()
    if (currentStep === EMatchingQuestionsSteps.StepOne) {
      setCurrentStep(EMatchingQuestionsSteps.StepTwo)
    } else {
      handleSubmit(sendData, handelFormError)()
    }
  }
  const toDisplayQuestions = questions.slice(currentStep * 6, currentStep * 6 + 6)

  return {
    data: { toDisplayQuestions },
    states: { currentStep, errors, control, loading },
    actions: { setCurrentStep, submit },
  }
}

export default useMatchingQuestions
