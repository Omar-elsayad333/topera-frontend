import { FormEvent, useState, useEffect } from 'react'
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
import { IFrameWork } from '@/types/pages/finishSignup'

const schema = object({
  basicProgrammingLanguagesKnowledge: array().min(1).required(),
  proficientProgrammingLanguages: array().min(1).required(),
  preferredLearningStyle: array().min(1).required(),
  learningFrequency: array().min(1).required(),
  preferredCommunicationMethod: array().min(1).required(),
  technologyOfInterest: array().min(1).required(),
  weeklyHoursDedicatedToLearningAndCollaboration: number().required(),
  motivationForLearningAndCollaboration: array().min(1).required(),
  TrackOfInterest: array().min(1).required(),
  goalsOnThePlatform: array().min(1).required(),
  comfortLevelWithRemoteWorkOrCollaboration: object().required(),
  projectTypeInterest: array().min(1).required(),
})
const useMatchingQuestions = () => {
  const [currentStep, setCurrentStep] = useState<EMatchingQuestionsSteps>(0)

  const [allFieldsData, setAllFieldsData] = useState<IQuestionChoice[]>([])

  const [frameWorks, setFrameWorks] = useState<IFrameWork[]>([])

  const { postHandler, loading, getHandler } = useRequestHandlers()

  const { handleError } = useHandleError()
  const getData = async (): Promise<void> => {
    const { data, error } = await getHandler({ endpoint: '/submissions/phaseone' })
    if (error) return handleError(error)
    setAllFieldsData(data)
  }

  const defaultValues = {
    basicProgrammingLanguagesKnowledge: [],
    proficientProgrammingLanguages: [],
    preferredLearningStyle: [],
    learningFrequency: [],
    preferredCommunicationMethod: [],
    TrackOfInterest: [],
    technologyOfInterest: [],
    weeklyHoursDedicatedToLearningAndCollaboration: '',
    motivationForLearningAndCollaboration: [],
    goalsOnThePlatform: [],
    comfortLevelWithRemoteWorkOrCollaboration: null,
    projectTypeInterest: [],
  }

  const {
    formState: { errors },
    control,
    handleSubmit,
    watch,
  } = useForm<IMatchingQuestionsForm>({
    resolver: yupResolver(schema),
    defaultValues,
  })

  const tracksValue = watch('TrackOfInterest')

  useEffect(() => {
    const frameWorks = tracksValue.flatMap((track, frameworks) => track.frameworks)
    setFrameWorks(frameWorks)
  }, [tracksValue])
  useEffect(() => {
    ;(async (): Promise<void> => {
      try {
        await getData()
      } catch (error) {
        console.log(error)
      }
    })()
  }, [])

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
      label: 'Which tracks are you interested in?',
      name: 'TrackOfInterest',
      QuestionChoices: allFieldsData,
    },
    {
      label: 'Which technology/framework are you interested in?',
      name: 'technologyOfInterest',
      QuestionChoices: frameWorks,
    },
    {
      label: 'What is your frequency in learning?',
      name: 'learningFrequency',
      maxLength: 1,
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
      maxLength: 1,
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
      maxLength: 1,
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
      maxLength: 1,
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

  const sendData = async (data: IMatchingQuestionsForm) => {
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
    const stepOnFieldNames: (keyof IMatchingQuestionsForm)[] = [
      'technologyOfInterest',
      'preferredCommunicationMethod',
      'learningFrequency',
      'preferredLearningStyle',
      'proficientProgrammingLanguages',
      'basicProgrammingLanguagesKnowledge',
    ]
    if (stepOnFieldNames.includes(Object.keys(errorData)[0] as keyof IMatchingQuestionsForm))
      setCurrentStep(EMatchingQuestionsSteps.StepOne)
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
