// Mui
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'
import CloseIcon from '@mui/icons-material/Close'

// Validation
import { boolean, date, object, string } from 'yup'

// Hooks
import { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { useTranslations } from 'next-intl'
import { yupResolver } from '@hookform/resolvers/yup'
import useRequestHandlers from '@/hooks/useRequestHandlers'

// Types
import { IExperience } from '@/components/pages/EditProfile/types'

// Components
import TextAreaComponent from '@/components/FormInputs/TextAreaComponet'
import TextFieldComponent from '@/components/FormInputs/TextFieldComponent'
import DatePickerComponent from '@/components/FormInputs/DatePickerComponent'
import CheckBoxComponent from '@/components/FormInputs/CheckBoxComponent'
import { parseDate } from '@/utils/dateFns'

import { parseISO, format } from 'date-fns'

interface IWorkExperienceForm {
  company: string
  startDate: Date | null
  endDate: Date | null
  present: boolean
  description: string
}

export default function Form({ data, deleteFunc }: { data: IExperience; deleteFunc: (id: string) => void }) {
  const { postHandler, putHandler } = useRequestHandlers()

  const t = useTranslations('edit_profile')

  const defaultValues = {
    company: '',
    startDate: null,
    endDate: null,
    present: true,
    description: '',
  }

  const schema = object({
    company: string().required(),
    startDate: date().required().nullable(),
    endDate: date().required().nullable(),
    present: boolean().required(),
    description: string().required(),
  })

  const generateBody = (data: any) => {
    const { isNew, ...rest } = data
    if (data.present) rest['endDate'] = null
    return {
      ...rest,
      startDate: parseDate({
        date: rest?.startDate?.toString().replace(/ GMT.*$/, ''),
        formatStr: 'EEE MMM dd yyyy HH:mm:ss',
      }),
      ...(rest?.endDate && {
        endDate: parseDate({
          date: rest?.endDate?.toString().replace(/ GMT.*$/, ''),
          formatStr: 'EEE MMM dd yyyy HH:mm:ss',
        }),
      }),
    }
  }
  const onSubmit = async (data: any) => {
    delete data['id']

    await postHandler({ endpoint: 'profile/experience', body: data })
  }

  const onEdit = async (data: any) => {
    await putHandler({ endpoint: `profile/experience/${data.id}`, body: data })
  }

  const submit = async (data: IWorkExperienceForm & { isNew?: boolean }) => {
    const body = generateBody(data)
    if (data?.isNew) {
      await onSubmit(body)
    } else {
      await onEdit(body)
    }
  }

  const {
    handleSubmit,
    control,
    setValue,
    watch,
    formState: { errors },
  } = useForm<IWorkExperienceForm>({ resolver: yupResolver(schema), defaultValues })

  const handelSetDataInForm = () => {
    for (const property in data) {
      if (property === 'startDate' || property === 'endDate') {
        setValue(property as keyof IWorkExperienceForm, parseISO(data[property as keyof IExperience]))
      } else {
        setValue(property as keyof IWorkExperienceForm, data[property as keyof IExperience])
      }
    }
    setValue('present', !data?.endDate)
  }

  useEffect(() => {
    if (data) handelSetDataInForm()
  }, [data])

  return (
    <Grid container spacing={'16px'}>
      <Grid item lg={3} md={6}>
        <TextFieldComponent
          control={control}
          name={'company'}
          error={errors['company']}
          label={t('company_name')}
          placeholder={t('add_company_name')}
        />
      </Grid>
      <Grid item lg={3} md={6} padding={0} alignItems={'end'}>
        <DatePickerComponent error={errors['startDate']} control={control} name={'startDate'} label={t('start_date')} />
      </Grid>
      <Grid item lg={3} md={6} padding={0} alignItems={'end'}>
        <DatePickerComponent
          disabled={watch('present')}
          error={errors['endDate']}
          control={control}
          name={'endDate'}
          label={t('end_date')}
        />
      </Grid>
      <Grid item lg={3} md={6} padding={0} display={'flex'} justifyItems={'start'} alignItems={'end'}>
        <CheckBoxComponent error={errors['present']} name={'present'} control={control} label={t('present')} />
      </Grid>
      <Grid xs={12} item padding={0} display={'flex'} justifyItems={'start'} alignItems={'end'}>
        <TextAreaComponent
          error={errors['description']}
          name={'description'}
          control={control}
          label={t('description')}
        />
      </Grid>
      <Grid item marginTop={'24px'} display={'flex'} xs={12} gap={'16px'} alignItems={'center'} justifyContent={'end'}>
        <Button sx={{ height: '26px' }} variant={'contained'} onClick={handleSubmit(submit)}>
          {t('submit')}
        </Button>
        {data?.id && (
          <CloseIcon
            sx={{ cursor: 'pointer' }}
            fontSize={'small'}
            onClick={() => deleteFunc(data.id!)}
            aria-label={'delete work experience'}
            aria-describedby={'delete work experience'}
          />
        )}
      </Grid>
    </Grid>
  )
}
