// Mui
import Grid from '@mui/material/Grid'

// Validation
import { date, object, string } from 'yup'

// Hooks
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import TextFieldComponent from '@/components/FormInputs/TextFieldComponent'
import { useTranslations } from 'next-intl'
import DatePickerComponent from '@/components/FormInputs/DatePickerComponent'
import RadioButtonComponent from '@/components/FormInputs/RadioButtonComponent'
import Button from '@mui/material/Button'
import TextAreaComponent from '@/components/FormInputs/TextAreaComponet'
import CloseIcon from '@mui/icons-material/Close'

interface IWorkExperienceForm {
  company_name: string
  start_date: Date | null
  end_date: Date | null
  present: string
  description: string
}

export default function Form() {
  const t = useTranslations('edit_profile')

  const defaultValues = {
    company_name: '',
    start_date: null,
    end_date: null,
    present: 'true',
    description: '',
  }

  const schema = object({
    company_name: string().required(),
    start_date: date().required().nullable(),
    end_date: date().required().nullable(),
    present: string().required(),
    description: string().required(),
  })

  const submit = (data: IWorkExperienceForm) => {
    console.log(data)
  }

  const handelDelete = () => {}

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<IWorkExperienceForm>({ resolver: yupResolver(schema), defaultValues })
  return (
    <Grid container spacing={'16px'}>
      <Grid item lg={3} md={6}>
        <TextFieldComponent
          control={control}
          name={'company_name'}
          error={errors['company_name']}
          label={t('company_name')}
          placeholder={t('add_company_name')}
        />
      </Grid>
      <Grid item lg={3} md={6} padding={0} alignItems={'end'}>
        <DatePickerComponent
          error={errors['start_date']}
          control={control}
          name={'start_date'}
          label={t('start_date')}
        />
      </Grid>
      <Grid item lg={3} md={6} padding={0} alignItems={'end'}>
        <DatePickerComponent error={errors['end_date']} control={control} name={'end_date'} label={t('end_date')} />
      </Grid>
      <Grid item lg={3} md={6} padding={0} display={'flex'} justifyItems={'start'} alignItems={'end'}>
        <RadioButtonComponent error={errors['present']} name={'present'} control={control} label={t('present')} />
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
        <CloseIcon
          sx={{ cursor: 'pointer' }}
          fontSize={'small'}
          onClick={handelDelete}
          aria-label={'delete work experience'}
          aria-describedby={'delete work experience'}
        />
      </Grid>
    </Grid>
  )
}
