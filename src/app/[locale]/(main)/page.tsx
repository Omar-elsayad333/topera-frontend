import LandingSection from '@/components/pages/Home/LandingSection'
import { Stack } from '@mui/material'

const Home = () => {
  return (
    <Stack className="full-screen" alignItems={'center'} justifyContent={'flex-start'}>
      <LandingSection />
    </Stack>
  )
}

export default Home
