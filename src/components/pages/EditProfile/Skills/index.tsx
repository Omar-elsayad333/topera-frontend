// Mui
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import Typography from '@mui/material/Typography'

// Hooks
import { useTranslations } from 'next-intl'
import { useEffect, useState } from 'react'
import useRequestHandlers from '@/hooks/useRequestHandlers'
import { useForm } from 'react-hook-form'

// Components
import MultieSelectComponent from '@/components/FormInputs/MultieSelectComponent'
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

  const handelSubmit = async (data: ISkillsForm) => {
    console.log(data)
  }

  const {
    watch,
    control,
    formState: { errors },
  } = useForm<ISkillsForm>({
    defaultValues,
  })

  useEffect(() => {
    getSkills()
  }, [])

  useEffect(() => {
    console.log(watch('skills'))
  }, [watch('skills')])

  const handelDelete = (id: string) => {}

  return (
    <Card sx={{ padding: '32px', display: 'flex', flexDirection: 'column', width: '100%' }}>
      <Typography sx={{ fontWeight: 500 }} variant={'subtitle2'}>
        {tEditProfile('skills')}
      </Typography>
      <Grid container spacing={'16px'}>
        <Grid item xs={12} md={3}>
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
            <Grid item xs={12} md={6}>
              <SliderComponent
                key={skill?.id}
                control={control}
                name={skill.name}
                onDelete={handelDelete}
                aria-label={`skill-${skill?.name}`}
              />
            </Grid>
          </Grid>
        ))}
      </Grid>
    </Card>
  )
}
