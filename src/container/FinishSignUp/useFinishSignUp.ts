'use client'
import { useTranslations } from 'next-intl'
import { useForm } from 'react-hook-form'
import { IFinishSignUpFrom } from '@/types/pages/finishSignup'
import { yupResolver } from '@hookform/resolvers/yup'
import { object, string } from 'yup'
const schema = object({
  employmentStatus: object().required(),
  referralSource: object().required(),
  preferredLanguage: object().required(),
})
const list = [
  {
    Text: 'What is your current employment status?',
    name: 'employmentStatus',
    QuestionChoices: [{ Text: 'full time' }, { Text: 'part time' }, { Text: 'Student' }, { Text: 'unemployed' }],
  },
  {
    Text: 'How did you hear about Topera?',
    name: 'referralSource',
    QuestionChoices: [{ Text: 'Friend' }, { Text: 'Facebook' }, { Text: 'LinkedIn' }, { Text: 'Search Engine' }],
  },
  {
    Text: 'In which language you prefer to learn?',
    name: 'preferredLanguage',
    QuestionChoices: [{ Text: 'arabic' }, { Text: 'english' }],
  },
]
const defaultValues = {
  employmentStatus: [{ Text: 'full time' }],
  referralSource: [{ Text: 'Friend' }],
  preferredLanguage: [{ Text: 'LinkedIn' }],
}
const useFinishSignUp = () => {
  const t = useTranslations('finishSignup')
  const {
    formState: { errors },
    control,
    handleSubmit,
  } = useForm<IFinishSignUpFrom>({ resolver: yupResolver(schema), defaultValues })
  return {
    data: { list },
    states: { control, errors },
    actions: { t },
  }
}

export default useFinishSignUp
