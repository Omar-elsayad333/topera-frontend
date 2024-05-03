import ComponentHolder from '@/components/pages/Profile/ComponentHolder'
import { Chip } from '@mui/material'
import Stack from '@mui/material/Stack'
import Button from '@mui/material/Button'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight'
import { useTranslations } from 'next-intl'
const Skills = ({ skills }: { skills: string[] }) => {
  const t = useTranslations('profile')
  const cutSKills = skills.slice(0, 9)
  return (
    <ComponentHolder title={'skills'}>
      <div>
        {cutSKills.map((skill, i) => (
          <Chip sx={{ marginRight: '16px', marginBottom: '10px' }} datatype={'skillChip'} key={i} label={skill} />
        ))}
      </div>
      <Button sx={{ marginTop: '24px' }} variant={'contained'} endIcon={<KeyboardArrowRightIcon />}>
        {t('showAllSkills')}
      </Button>
    </ComponentHolder>
  )
}

export default Skills
