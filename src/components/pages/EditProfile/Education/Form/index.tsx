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
import { mixed, object, string } from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { useEffect } from 'react'

interface IEducationForm {
  id: string
  university_name: string
  description: string
  degrees: any
  majors: any
}
export default function Form({
  majors,
  data,
  deleteFun,
}: {
  majors: { id: string; name: string; default?: boolean; disabled?: boolean }[]
  data: IEducationForm & { isNew?: boolean }
  deleteFun: (id: string, isNew: boolean | undefined) => void
}) {
  const tEditProfile = useTranslations('edit_profile')

  const defaultValues = {
    university_name: '',
    description: '',
    degrees: null,
    majors: null,
  }

  const schema = object({
    id: string().required(),
    university_name: string().required(),
    description: string().required(),
    degrees: mixed().required(),
    majors: mixed().required(),
  })

  const submit = (data: IEducationForm) => {
    console.log(data)
  }

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<IEducationForm>({ defaultValues, resolver: yupResolver(schema) })

  const listOfDegree: { id: string; name: string; disabled?: boolean; default?: boolean }[] = []

  return (
    <Grid container spacing={'16px'}>
      <Grid item md={6} lg={4}>
        <TextFieldComponent
          control={control}
          label={tEditProfile('university_name')}
          name={'university_name'}
          error={errors['university_name']}
        />
      </Grid>
      <Grid item md={6} lg={3}>
        <SelectComponent
          control={control}
          inputLabel={'name'}
          inputValue={'id'}
          options={majors}
          label={tEditProfile('majors')}
          name={'majors'}
        />
      </Grid>
      <Grid item md={6} lg={3}>
        <SelectComponent
          control={control}
          inputLabel={'name'}
          inputValue={'id'}
          options={listOfDegree}
          label={tEditProfile('degrees')}
          name={'degrees'}
        />
      </Grid>
      <Grid item xs={12}>
        <TextAreaComponent control={control} name={'description'} label={tEditProfile('description')} />
      </Grid>
      <Grid item marginTop={'24px'} display={'flex'} xs={12} gap={'16px'} alignItems={'center'} justifyContent={'end'}>
        <Button sx={{ height: '26px' }} variant={'contained'} onClick={handleSubmit(submit)}>
          {tEditProfile('submit')}
        </Button>
        <CloseIcon
          sx={{ cursor: 'pointer' }}
          fontSize={'small'}
          onClick={() => deleteFun(data.id, data?.isNew)}
          aria-label={'delete work experience'}
          aria-describedby={'delete work experience'}
        />
      </Grid>
    </Grid>
  )
}
