// Components
import ComponentHolder from '@/components/pages/Profile/ComponentHolder'
import LinearProgress from '@mui/material/LinearProgress'
import Button from '@mui/material/Button'
import Grid from '@mui/material/Grid'

// Icon
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight'

// Hooks
import { useTranslations } from 'next-intl'
import Typography from '@mui/material/Typography'

const Skills = ({ skills }: { skills: { name: string; progress: number }[] }) => {
  const t = useTranslations('profile')
  const cutSKills = skills.slice(0, 9)
  return (
    <ComponentHolder title={'skills'}>
      <Grid container gap={'32px'}>
        {cutSKills.map(({ progress, name }, i) => {
          return (
            <Grid item lg={3} md={5} xs={12} direction={'column'}>
              <Typography variant={'h6'} sx={{ color: (theme) => theme.palette.primary.main, width: '100%' }}>
                {name}
              </Typography>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: '8px' }}>
                <LinearProgress
                  variant="determinate"
                  color={'primary'}
                  value={progress}
                  sx={{ maxHeight: '3px', width: '60%', transform: 'scaleX(-1)' }}
                  key={i}
                />
                <Typography variant={'h6'} sx={{ color: (theme) => theme.palette.primary.main, width: '30%' }}>
                  {progress}%
                </Typography>
              </div>
            </Grid>
          )
        })}
      </Grid>
      <Button sx={{ marginTop: '24px' }} variant={'contained'} endIcon={<KeyboardArrowRightIcon />}>
        {t('showAllSkills')}
      </Button>
    </ComponentHolder>
  )
}

export default Skills
