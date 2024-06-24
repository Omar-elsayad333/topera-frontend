// Mui
import Card from '@mui/material/Card'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'

// Components
import Form from '@/components/pages/EditProfile/WorkExperience/Form'

// Icons
import AddIcon from '@mui/icons-material/Add'

// Hooks
import { useTranslations } from 'next-intl'
import { useEffect, useState } from 'react'

// Types
import { IExperience } from '@/components/pages/EditProfile/types'
import { boolean } from 'yup'
import useRequestHandlers from '@/hooks/useRequestHandlers'

interface IWorkExperienceProps {
  experiences: IExperience[] | undefined
}

export default function WorkExperience({ experiences }: IWorkExperienceProps) {
  const { deleteHandler } = useRequestHandlers()

  const tEditProfile = useTranslations('edit_profile')

  const [exp, setExp] = useState<IExperience[]>([])

  const handelAddExp = () => {
    const currentTime = new Date()
    const id = (currentTime.getSeconds() + currentTime.getUTCMinutes() + currentTime.getTime()).toString()
    setExp([...exp, { id, isNew: true, endDate: '', startDate: '', company: '', description: '' }])
  }

  const handelDelete = async (id: string) => {
    const res = await deleteHandler({ endpoint: `profile/education/${id}` })
    if (res) {
      const newExpArr = exp.filter((e) => e?.id === id)
      setExp(newExpArr)
    }
  }

  useEffect(() => {
    if (experiences) setExp([...exp, ...experiences])
  }, [experiences])
  return (
    <Card sx={{ padding: '32px', display: 'flex', flexDirection: 'column', width: '100%', gap: '16px' }}>
      <Typography sx={{ fontWeight: 500 }} variant={'subtitle2'}>
        {tEditProfile('work_experience')}
      </Typography>
      {Array(exp) && exp?.map((experience) => <Form data={experience} deleteFunc={handelDelete} />)}
      <Button
        sx={{ height: '26px', width: 'fit-content', display: 'flex', gap: '16px' }}
        onClick={() => handelAddExp()}
      >
        <AddIcon />
        <Typography variant={'h6'}>{tEditProfile('add_work_experience')}</Typography>
      </Button>
    </Card>
  )
}
