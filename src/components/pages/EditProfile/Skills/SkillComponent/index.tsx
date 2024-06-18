// Mui
import Grid from '@mui/material/Grid'
import Slider from '@mui/material/Slider'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'

type TSkill = { id: string; name: string }
export default function SkillComponent({ skill }: { skill: TSkill }) {
  return (
    <Grid item xs={12}>
      <Typography variant={'h6'} color={'primary'}>
        {skill?.name}
      </Typography>
      <Slider size="small" defaultValue={50} aria-label={skill?.name} valueLabelDisplay="auto" />
    </Grid>
  )
}
