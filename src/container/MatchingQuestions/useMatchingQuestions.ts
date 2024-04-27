import { FormEvent, useState, useEffect } from 'react'
import { EMatchingQuestionsSteps, IMatchingQuestionsForm, IQuestionChoice } from '@/types/pages/matchingQuestions'
import { array, number, object, boolean } from 'yup'
import { FieldErrors, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import useRequestHandlers from '@/hooks/useRequestHandlers'
import useHandleError from '@/hooks/useHandleError'
import { IFrameWork } from '@/types/pages/finishSignup'
import { questions } from '@/constants/matchingQuestions'

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

  const [allQuestionsData, setAllQuestionsData] = useState<any[]>([])

  const { postHandler, loading, getHandler } = useRequestHandlers()

  const { handleError } = useHandleError()
  const getData = async () => {
    const { data, error } = await getHandler({ endpoint: '/submissions/phaseone' })
    if (error) return handleError(error)
    setAllFieldsData(data)
  }

  useEffect(() => {
    setAllQuestionsData(questions({ allFieldsData, frameWorks }))
  }, [allFieldsData, frameWorks])

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
    const frameWorks = tracksValue.flatMap((track) => track.frameworks)
    setFrameWorks(frameWorks)
  }, [tracksValue])
  useEffect(() => {
    getData()
  }, [])

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
  const toDisplayQuestions = allQuestionsData.slice(currentStep * 6, currentStep * 6 + 6) ?? []

  return {
    data: { toDisplayQuestions },
    states: { currentStep, errors, control, loading },
    actions: { setCurrentStep, submit },
  }
}

export default useMatchingQuestions
