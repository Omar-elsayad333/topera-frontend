// Mui
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import Typography from '@mui/material/Typography'

// Components
import SelectComponent from '@/components/FormInputs/SelectComponent'

// Hooks
import { useTranslations } from 'next-intl'
import { useEffect, useState } from 'react'
import useRequestHandlers from '@/hooks/useRequestHandlers'
import { useForm } from 'react-hook-form'

// Form Validation
import { array, object } from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import MultieSelectComponent from '@/components/FormInputs/MultieSelectComponent'
import SkillComponent from '@/components/pages/EditProfile/Skills/SkillComponent'
import SliderComponent from '@/components/pages/EditProfile/Skills/slider'

interface ISkillsForm {
  skills: any[]
}
export default function Skills() {
  const { getHandler } = useRequestHandlers()

  const [skills, setSkills] = useState<{ id: string; name: string; default?: boolean; disabled?: boolean }[]>([])

  const tEditProfile = useTranslations('edit_profile')

  const getSkills = async () => {
    const { data } = await getHandler({ endpoint: 'skills' })
    setSkills(data)
  }

  const defaultValues = {
    skills: [],
  }

  const schema = object({
    skills: array().required(),
  })

  const handelSubmit = async (data: ISkillsForm) => {
    console.log(data)
  }

  const {
    watch,
    control,
    formState: { errors },
  } = useForm<ISkillsForm>({
    defaultValues,
    resolver: yupResolver(schema),
  })

  useEffect(() => {
    getSkills()
  }, [])

  useEffect(() => {
    console.log(watch('skills'))
  }, [watch('skills')])

  return (
    <Card sx={{ padding: '32px', display: 'flex', flexDirection: 'column', width: '100%' }}>
      <Typography sx={{ fontWeight: 500 }} variant={'subtitle2'}>
        {tEditProfile('skills')}
      </Typography>
      <Grid container spacing={'16px'}>
        <Grid item xs={3}>
          <MultieSelectComponent
            label={tEditProfile('skills')}
            inputLabel={'name'}
            control={control}
            inputValue={'id'}
            options={skills}
            name={'skills'}
          />
        </Grid>

        {watch('skills').map((skill) => (
          <Grid item xs={12}>
            {skill.toString()}
            {/*<SliderComponent key={skill?.id} aria-label={`skill-${skill?.name}`} name={'skills'} control={control} />*/}
          </Grid>
        ))}
      </Grid>
    </Card>
  )
}
