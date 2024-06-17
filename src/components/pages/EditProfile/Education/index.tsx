import Card from '@mui/material/Card'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'

// Components
import TextFieldComponent from '@/components/FormInputs/TextFieldComponent'

// Hooks
import { useTranslations } from 'next-intl'
import { useForm } from 'react-hook-form'

// Form Validation
import { object, string } from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import useRequestHandlers from '@/hooks/useRequestHandlers'
import { useEffect, useState } from 'react'

interface IEducationForm {
  university_name: string
}
export default function Education() {
  const [majors, setMajors] = useState<{ id: string; name: string }>([])

  const { getHandler } = useRequestHandlers()

  const tEditProfile = useTranslations('edit_profile')

  const defaultValues = {
    university_name: '',
  }

  const schema = object({
    university_name: string().required(),
  })

  const {
    control,
    formState: { errors },
  } = useForm({ defaultValues, resolver: yupResolver(schema) })

  const getMajors = async () => {
    const { data } = await getHandler({ endpoint: 'majors' })
    setMajors(data)
  }

  useEffect(() => {
    getMajors()
  }, [])
  return (
    <Card sx={{ padding: '32px', display: 'flex', flexDirection: 'column', width: '100%' }}>
      <Typography sx={{ fontWeight: 500 }} variant={'subtitle2'}>
        {tEditProfile('education')}
      </Typography>
      <Grid container spacing={16}>
        <Grid item md={6} lg={4}>
          <TextFieldComponent
            control={control}
            label={tEditProfile('university_name')}
            name={'university_name'}
            error={errors['university_name']}
          />
        </Grid>
      </Grid>
    </Card>
  )
}
