// Components
import Card from '@mui/material/Card'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import AddIcon from '@mui/icons-material/Add'
import Form from '@/components/pages/EditProfile/Education/Form'

// Hooks

import { useTranslations } from 'next-intl'
import useRequestHandlers from '@/hooks/useRequestHandlers'
import { useEffect, useState } from 'react'

// Types
import { IEducation } from '@/components/pages/EditProfile/types'

export default function Education({ educations }: { educations: IEducation[] | undefined }) {
  const tEditProfile = useTranslations('edit_profile')

  const { getHandler, deleteHandler } = useRequestHandlers()

  const [majors, setMajors] = useState<{ id: string; name: string; disabled?: boolean; default?: boolean }[]>([])

  const [educationsArr, setEduArr] = useState<any[]>([])

  useEffect(() => {
    if (Array.isArray(educations)) setEduArr([educations])
  }, [educations])

  const handelAddEducation = () => {
    const currentTime = new Date()
    const id = (currentTime.getSeconds() + currentTime.getUTCMinutes() + currentTime.getTime()).toString()
    setEduArr([...educationsArr, { id, isNew: true }])
  }
  const getMajors = async () => {
    const { data } = await getHandler({ endpoint: 'majors' })
    setMajors(data)
  }

  const onDelete = async (id: string, isNew: boolean | undefined) => {
    if (isNew) {
      const newArr = educationsArr.filter((e) => e.id !== id)
      setEduArr(newArr)
    } else {
      await deleteHandler({ endpoint: '' })
    }
  }

  useEffect(() => {
    getMajors()
  }, [])
  return (
    <Card sx={{ padding: '32px', display: 'flex', flexDirection: 'column', width: '100%' }}>
      <Typography sx={{ fontWeight: 500 }} variant={'subtitle2'}>
        {tEditProfile('education')}
      </Typography>
      {educationsArr.length
        ? educationsArr?.map((ele) => <Form deleteFun={onDelete} data={ele} key={ele?.id} majors={majors} />)
        : null}
      <Button
        onClick={() => handelAddEducation()}
        sx={{ height: '26px', width: 'fit-content', display: 'flex', gap: '16px' }}
      >
        <AddIcon />
        <Typography variant={'h6'}>{tEditProfile('add_education')}</Typography>
      </Button>
    </Card>
  )
}
