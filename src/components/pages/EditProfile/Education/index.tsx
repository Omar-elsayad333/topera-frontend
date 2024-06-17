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

export default function Education() {
  const tEditProfile = useTranslations('edit_profile')

  const { getHandler } = useRequestHandlers()

  const [majors, setMajors] = useState<{ id: string; name: string; disabled?: boolean; default?: boolean }[]>([])

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
      <Form majors={majors} />
      <Button sx={{ height: '26px', width: 'fit-content', display: 'flex', gap: '16px' }}>
        <AddIcon />
        <Typography variant={'h6'}>{tEditProfile('add_education')}</Typography>
      </Button>
    </Card>
  )
}
