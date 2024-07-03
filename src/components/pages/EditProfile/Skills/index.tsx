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
    setValue,
  } = useForm<ISkillsForm>({
    defaultValues,
  })

  const handelDelete = (name: string) => {
    setValue('skills', [...watch('skills').filter((e) => e?.name !== name)])
  }

  const handelChange = (name: string, value: number) => {
    if (name && value && skills.length) {
      const changedItem = watch('skills').filter((e) => e.name === name)[0]
      const otherItems = watch('skills').filter((e) => e.name !== name)
      if (changedItem) {
        changedItem.rete = value
        setValue('skills', [...otherItems, changedItem])
      }
      console.log(watch('skills'))
    }
  }

  useEffect(() => {
    console.log('s', skills)
  }, [skills])

  useEffect(() => {
    getSkills()
  }, [])

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
          <Grid key={skill?.name} item xs={12}>
            <Grid item xs={12} md={6}>
              <SliderComponent
                handelChange={handelChange}
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
