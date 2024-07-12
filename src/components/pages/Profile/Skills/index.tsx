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
import { TSkill } from '@/container/Profile/types'
import { useState } from 'react'

const Skills = ({ skills }: { skills: TSkill[] }) => {
  const t = useTranslations('profile')
  const [cutted, setCutted] = useState<boolean>(true)
  const cutSKills = cutted ? skills.slice(0, 3) : skills
  return (
    <ComponentHolder title={'skills'}>
      <Grid container gap={'32px'}>
        {cutSKills.map(({ skill, rate }, i) => {
          return (
            <Grid container key={i} item lg={3} md={5} xs={12} direction={'column'}>
              <Typography variant={'h6'} sx={{ color: (theme) => theme.palette.primary.main, width: '100%' }}>
                {skill}
              </Typography>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: '8px' }}>
                <LinearProgress
                  variant="determinate"
                  color={'primary'}
                  value={rate}
                  sx={{ maxHeight: '3px', width: '60%', transform: 'scaleX(-1)' }}
                  key={i}
                />
                <Typography variant={'h6'} sx={{ color: (theme) => theme.palette.primary.main, width: '30%' }}>
                  {rate}%
                </Typography>
              </div>
            </Grid>
          )
        })}
      </Grid>
      {skills.length > 3 && (
        <Button
          onClick={() => setCutted(!cutted)}
          sx={{ marginTop: '24px' }}
          variant={'contained'}
          endIcon={<KeyboardArrowRightIcon />}
        >
          {!cutted ? t('showLess') : t('showAllSkills')}
        </Button>
      )}
    </ComponentHolder>
  )
}

export default Skills
