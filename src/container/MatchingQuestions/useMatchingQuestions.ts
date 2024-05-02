import { FormEvent, useEffect, useState } from 'react'
import {
  EMatchingQuestionsSteps,
  IMatchingQuestionsForm,
  IQuestionChoice,
  StepOneForm,
  StepTwoForm,
} from '@/types/pages/matchingQuestions'
import { array, object, number } from 'yup'
import { FieldErrors, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import useRequestHandlers from '@/hooks/useRequestHandlers'
import useHandleError from '@/hooks/useHandleError'
import { IFrameWork } from '@/types/pages/finishSignup'
import { questions } from '@/constants/matchingQuestions'

const useMatchingQuestions = () => {
  const [currentStep, setCurrentStep] = useState<EMatchingQuestionsSteps>(0)

  const [allFieldsData, setAllFieldsData] = useState<IQuestionChoice[]>([])

  const [frameWorks, setFrameWorks] = useState<IFrameWork[]>([])

  const [allQuestionsData, setAllQuestionsData] = useState<any[]>([])

  const { postHandler, loading, getHandler } = useRequestHandlers()

  const { handleError } = useHandleError()
  const getData = async () => {
    const { data, error } = await getHandler({ endpoint: '/submissions/phaseone' })
    if (error) return handleError(error)
    setAllFieldsData(data)
  }

  const schema =
    currentStep === EMatchingQuestionsSteps.StepOne
      ? object({
          basicProgrammingLanguagesKnowledge: array().min(1).required(),
          proficientProgrammingLanguages: array().min(1).required(),
          preferredCommunicationMethod: array().min(1).required(),
          TrackOfInterest: array().min(1).required(),
          technologyOfInterest: array().min(1).required(),
          preferredLearningStyle: array().min(1).required(),
        })
      : object({
          learningFrequency: array().min(1).required(),
          weeklyHoursDedicatedToLearningAndCollaboration: number().required(),
          motivationForLearningAndCollaboration: array().min(1).required(),
          goalsOnThePlatform: array().min(1).required(),
          comfortLevelWithRemoteWorkOrCollaboration: object().required(),
          projectTypeInterest: array().min(1).required(),
        })

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
    trigger,
  } = useForm<StepOneForm | StepTwoForm>({
    resolver: yupResolver(schema),
    defaultValues,
  })

  const tracksValue = watch('TrackOfInterest')

  const sendData = async (data: StepOneForm | StepTwoForm) => {
    const body: any = {}
    Object.keys(data).forEach((item) => {
      if (Array.isArray(data[item as keyof (StepOneForm | StepTwoForm)])) {
        body[item] = [...(data[item as keyof (StepOneForm | StepTwoForm)] as any)].map((item) => item.name).join(', ')
      } else if (
        data.hasOwnProperty('comfortLevelWithRemoteWorkOrCollaboration') &&
        typeof data[item as 'comfortLevelWithRemoteWorkOrCollaboration'] === 'object'
      ) {
        body[item] = data[item as 'comfortLevelWithRemoteWorkOrCollaboration']?.value
      } else {
        body[item] = data[item as keyof (StepOneForm | StepTwoForm)]
      }
    })
    const { error } = await postHandler({ endpoint: '/submissions/phasetwo', body })
    if (error) return handleError(error)
  }

  const handelFormError = (errorData: FieldErrors<IMatchingQuestionsForm>) => {
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

  const submit = async (e: FormEvent) => {
    e.preventDefault()
    if (currentStep === EMatchingQuestionsSteps.StepOne) {
      const formState = await trigger()
      if (formState) setCurrentStep(EMatchingQuestionsSteps.StepTwo)
    } else {
      handleSubmit(sendData, handelFormError)()
    }
  }
  const toDisplayQuestions = allQuestionsData.slice(currentStep * 6, currentStep * 6 + 6) ?? []

  useEffect(() => {
    setAllQuestionsData(questions({ allFieldsData, frameWorks }))
  }, [allFieldsData, tracksValue])

  useEffect(() => {
    const frameWorks = tracksValue.flatMap((track) => track.frameworks)
    setFrameWorks(frameWorks)
  }, [tracksValue])
  useEffect(() => {
    getData()
  }, [])

  return {
    data: { toDisplayQuestions },
    states: { currentStep, errors, control, loading },
    actions: { setCurrentStep, submit },
  }
}

export default useMatchingQuestions
