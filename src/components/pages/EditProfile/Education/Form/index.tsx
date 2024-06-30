// Components
import Grid from '@mui/material/Grid'
import TextFieldComponent from '@/components/FormInputs/TextFieldComponent'
import SelectComponent from '@/components/FormInputs/SelectComponent'
import TextAreaComponent from '@/components/FormInputs/TextAreaComponet'
import Button from '@mui/material/Button'
import CloseIcon from '@mui/icons-material/Close'

// Hooks
import { useTranslations } from 'next-intl'
import { useForm } from 'react-hook-form'

// Validation
import { boolean, date, mixed, object, string } from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { useEffect } from 'react'
import DatePickerComponent from '@/components/FormInputs/DatePickerComponent'
import useRequestHandlers from '@/hooks/useRequestHandlers'
import { parseDate } from '@/utils/dateFns'
import { parseISO } from 'date-fns'

interface IEducationForm {
  id: string
  school: string
  description: string
  degree: any
  major: any
  isNew?: boolean
  graduationDate: Date
}

export default function Form({
  majors,
  data,
  deleteFun,
  degrees,
}: {
  majors: { id: string; name: string; default?: boolean; disabled?: boolean }[]
  degrees: { id: string; name: string; default?: boolean; disabled?: boolean }[]
  data: IEducationForm
  deleteFun: (id: string, isNew: boolean | undefined) => void
}) {
  const { postHandler, putHandler } = useRequestHandlers()

  const tEditProfile = useTranslations('edit_profile')

  const defaultValues = {
    id: '',
    school: '',
    description: '',
    degree: null,
    major: null,
    isNew: false,
    graduationDate: new Date(),
  }

  const schema = object({
    id: string().required(),
    school: string().required(),
    description: string().required(),
    degree: object().required(),
    major: object().required(),
    graduationDate: date().required(),
  })

  const onSubmit = async (body: any) => {
    await postHandler({ endpoint: 'profile/education', body })
  }

  const onUpdate = async (body: any) => {
    await putHandler({ endpoint: `profile/education/${body.id}`, body })
  }

  const submit = async (data: IEducationForm) => {
    const body = {
      ...data,
      major: data?.major?.name,
      degree: data?.degree?.name,
      graduationDate: parseDate({
        date: data?.graduationDate?.toString().replace(/ GMT.*$/, ''),
        formatStr: 'EEE MMM dd yyyy HH:mm:ss',
      }),
    }
    delete body['isNew']

    if (data.isNew) {
      await onSubmit(body)
    } else await onUpdate(body)
  }

  const {
    handleSubmit,
    control,
    setValue,
    watch,
    formState: { errors },
  } = useForm<IEducationForm>({ defaultValues, resolver: yupResolver(schema) })

  const handelSetDataInForm = (data: any) => {
    for (const property in data) {
      const typedProperty = property as keyof IEducationForm

      if (!data[property]) {
        setValue(typedProperty, defaultValues[typedProperty])
      } else {
        setValue(typedProperty, data[typedProperty])
      }
    }
    setValue('major', majors.filter((e) => e.name === data.major)[0])
    setValue('degree', degrees.filter((e) => e.name === data.degree)[0])
    if (!data.isNew) setValue('graduationDate', parseISO(data.graduationDate))
  }

  useEffect(() => {
    if (data) handelSetDataInForm(data)
  }, [data, degrees?.length, majors?.length])

  useEffect(() => {
    console.log(watch())
  }, [watch()])
  return (
    <Grid container spacing={'16px'}>
      <Grid item md={6} lg={4}>
        <TextFieldComponent
          control={control}
          label={tEditProfile('university_name')}
          name={'school'}
          error={errors['school']}
        />
      </Grid>
      <Grid item md={6} lg={3}>
        <SelectComponent
          errors={errors['major']}
          control={control}
          inputLabel={'name'}
          inputValue={'name'}
          options={majors}
          label={tEditProfile('majors')}
          name={'major'}
        />
      </Grid>
      <Grid item md={6} lg={3}>
        <SelectComponent
          errors={errors['degree']}
          control={control}
          inputLabel={'name'}
          inputValue={'name'}
          options={degrees}
          label={tEditProfile('degrees')}
          name={'degree'}
        />
      </Grid>
      <Grid item md={6} lg={3}>
        <DatePickerComponent
          error={errors['graduationDate']}
          control={control}
          name={'graduationDate'}
          label={tEditProfile('graduationDate')}
          placeholder={tEditProfile('graduationDate')}
        />
      </Grid>
      <Grid item xs={12}>
        <TextAreaComponent
          error={errors['description']}
          control={control}
          name={'description'}
          label={tEditProfile('description')}
        />
      </Grid>
      <Grid item marginTop={'24px'} display={'flex'} xs={12} gap={'16px'} alignItems={'center'} justifyContent={'end'}>
        <Button sx={{ height: '26px' }} variant={'contained'} onClick={handleSubmit(submit, (e) => console.log(e))}>
          {tEditProfile('submit')}
        </Button>
        <CloseIcon
          sx={{ cursor: 'pointer' }}
          fontSize={'small'}
          onClick={() => deleteFun(data?.id, data?.isNew)}
          aria-label={'delete work experience'}
          aria-describedby={'delete work experience'}
        />
      </Grid>
    </Grid>
  )
}
