import ComponentHolder from '@/components/pages/Profile/ComponentHolder'
import Typography from '@mui/material/Typography'

const About = ({ bio }: { bio: string }) => {
  return (
    <ComponentHolder title={'about'}>
      <Typography variant={'subtitle1'} fontWeight={400} color={'rgba(0, 0, 0, 0.6)'}>
        {bio}
      </Typography>
    </ComponentHolder>
  )
}

export default About
