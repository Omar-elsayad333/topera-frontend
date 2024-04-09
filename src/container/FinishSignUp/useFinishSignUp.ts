'use client'
import { FormEvent, useEffect, useState } from 'react'

// Translation
import { useTranslations } from 'next-intl'

// Validation
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { array, object } from 'yup'

// Types
import { IFinishSignUpFrom, IField, IFrameWork, IQuestionsList } from '@/types/pages/finishSignup'

// Request Handler
import useRequestHandlers from '@/hooks/useRequestHandlers'

// Error Handler
import useHandleError from '@/hooks/useHandleError'

const schema = object({
  tracks: array().min(1).required(),
  frameworks: array().min(1).required(),
  employmentStatus: array().min(1).required(),
  referralSource: array().min(1).required(),
  preferredLanguage: array().min(1).required(),
})

const defaultValues: IFinishSignUpFrom = {
  tracks: [],
  frameworks: [],
  employmentStatus: [],
  referralSource: [],
  preferredLanguage: [],
}
const chipSx = {
  backgroundColor: '#1473E6E5',
  color: '#ffff',
  '.MuiChip-deleteIcon': {
    color: '#ffff',
    '&:hover': {
      color: '#ffff',
    },
  },
}

const useFinishSignUp = () => {
  const { handleError } = useHandleError()
  const [allFieldsData, setAllFieldsData] = useState<IField[]>([])
  const [frameWorks, setFrameWorks] = useState<IFrameWork[]>([])
  const { loading, getHandler, postHandler } = useRequestHandlers()
  const t = useTranslations('finishSignup')
  const {
    formState: { errors },
    control,
    handleSubmit,
    watch,
  } = useForm<IFinishSignUpFrom>({ resolver: yupResolver(schema), defaultValues })
  const tracksValue = watch('tracks')
  const list: IQuestionsList[] = [
    {
      Text: 'What is your current employment status?',
      name: 'tracks',
      QuestionChoices: allFieldsData,
    },
    {
      Text: 'Which technology/framework have you learned? *',
      name: 'frameworks',
      QuestionChoices: frameWorks,
    },
    {
      Text: 'What is your current employment status?',
      name: 'employmentStatus',
      QuestionChoices: [
        { name: 'full time', id: 'full time' },
        { name: 'part time', id: 'part time' },
        { name: 'Student', id: 'Student' },
        { name: 'unemployed', id: 'unemployed' },
      ],
    },
    {
      Text: 'In which language you prefer to learn?',
      name: 'preferredLanguage',
      QuestionChoices: [
        { name: 'arabic', id: 'arabic' },
        { name: 'english', id: 'english' },
      ],
    },
    {
      Text: 'How did you hear about Topera?',
      name: 'referralSource',
      QuestionChoices: [
        { name: 'Friend', id: 'Friend' },
        { name: 'Facebook', id: 'Facebook' },
        { name: 'LinkedIn', id: 'LinkedIn' },
        { name: 'Search Engine', id: 'Search Engine' },
      ],
    },
  ]
  useEffect(() => {
    ;(async (): Promise<void> => {
      try {
        await getData()
      } catch (error) {
        console.log(error)
      }
    })()
  }, [])
  useEffect(() => {
    const frameWorks = tracksValue.flatMap((track, frameworks) => track.frameworks)
    setFrameWorks(frameWorks)
  }, [tracksValue])
  const getData = async (): Promise<void> => {
    const { data, error } = await getHandler({ endpoint: '/submissions' })
    if (error) return handleError(error)
    setAllFieldsData(data)
  }

  const generateBody = ({
    tracks,
    employmentStatus,
    frameworks,
    referralSource,
    preferredLanguage,
  }: IFinishSignUpFrom) => {
    return {
      trackId: tracks[0].id,
      trackName: tracks[0].name,
      frameworkId: frameworks[0].id,
      frameworkName: frameworks[0].name,
      referralSource: referralSource[0].name,
      employmentStatus: employmentStatus[0].name,
      preferredLanguage: preferredLanguage[0].name,
    }
  }
  const submitHandler = async (body: IFinishSignUpFrom) => {
    const requestBody = generateBody(body)
    const { error } = await postHandler({ endpoint: '/submissions/phaseone', body: requestBody })
    if (error) return handleError(error)
  }

  const submit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    handleSubmit(submitHandler)()
  }

  return {
    data: { allFieldsData, list, chipSx },
    states: { control, errors, loading },
    actions: { t, submit },
  }
}

export default useFinishSignUp
