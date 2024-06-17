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

interface IWorkExperienceProps {}

export default function WorkExperience({}: IWorkExperienceProps) {
  const tEditProfile = useTranslations('edit_profile')
  return (
    <Card sx={{ padding: '32px', display: 'flex', flexDirection: 'column', width: '100%', gap: '16px' }}>
      <Typography sx={{ fontWeight: 500 }} variant={'subtitle2'}>
        {tEditProfile('work_experience')}
      </Typography>
      <Form />
      <Button sx={{ height: '26px', width: 'fit-content', display: 'flex', gap: '16px' }}>
        <AddIcon />
        <Typography variant={'h6'}>{tEditProfile('add_work_experience')}</Typography>
      </Button>
    </Card>
  )
}
