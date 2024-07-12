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
import SliderComponent from '@/components/pages/EditProfile/Shared/slider'
import { ISkill } from '@/components/pages/EditProfile/types'
import Button from '@mui/material/Button'

interface ISkillsForm {
  skills: ISkill[] | undefined
}

export default function Skills({ skillsData }: { skillsData: ISkill[] | undefined }) {
  const { getHandler, putHandler } = useRequestHandlers()

  const [skills, setSkills] = useState<ISkill[]>([])

  const tEditProfile = useTranslations('edit_profile')

  const getSkills = async () => {
    const { data } = await getHandler({ endpoint: 'skills' })
    setSkills(data.map((e: any) => ({ skill: e['name'], ...e })))
  }

  const defaultValues = {
    skills: [],
  }

  const {
    watch,
    control,
    formState: { errors },
    setValue,
    handleSubmit,
    getValues,
  } = useForm<ISkillsForm>({
    defaultValues,
  })

  const handelDelete = (name: string) => {
    const filteredArray = watch('skills')?.filter((e) => e?.skill !== name) ?? watch('skills') ?? []
    setValue('skills', [...filteredArray])
  }

  const handelChange = (name: string, value: number) => {
    if (name && value && skills.length) {
      const currentSkills = getValues('skills')
      currentSkills?.forEach((e) => {
        if (e.skill === name) e.rate = value
      })
      setValue('skills', currentSkills)
    }
  }

  const onSubmit = async (data: ISkillsForm) => {
    await putHandler({
      endpoint: 'profile/skills',
      body: { skills: data.skills?.map(({ id, rate }) => ({ id, rate })) },
    })
  }

  useEffect(() => {
    if (skillsData && skillsData.length) {
      setValue('skills', skillsData)
      for (const skill in skillsData) {
        // setValue(skillsData[skill].skill, skillsData[skill].rate)
      }
    }
  }, [skillsData])

  useEffect(() => {
    getSkills()
  }, [])

  console.log(watch('skills'))

  return (
    <Card id={'skills'} sx={{ padding: '32px', display: 'flex', flexDirection: 'column', width: '100%' }}>
      <Typography sx={{ fontWeight: 500 }} variant={'subtitle2'}>
        {tEditProfile('skills')}
      </Typography>
      <Grid container spacing={'16px'}>
        <Grid item xs={12} md={3}>
          <MultieSelectComponent
            label={tEditProfile('skills')}
            inputLabel={'skill'}
            control={control}
            inputValue={'id'}
            options={skills}
            name={'skills'}
          />
        </Grid>

        {watch('skills')?.map((skill) => (
          <Grid key={skill?.skill} item xs={12}>
            <Grid item xs={12} md={6}>
              <SliderComponent
                handelChange={handelChange}
                value={skill.rate}
                name={skill.skill}
                onDelete={handelDelete}
                aria-label={`skill-${skill?.skill}`}
              />
            </Grid>
          </Grid>
        ))}
      </Grid>
      <Button
        variant={'contained'}
        sx={{ height: '26px', maxWidth: '100px', alignSelf: 'end' }}
        onClick={handleSubmit(onSubmit)}
      >
        {tEditProfile('submit')}
      </Button>
    </Card>
  )
}
