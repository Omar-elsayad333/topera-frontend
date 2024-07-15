import LandingSection from '@/components/pages/Home/LandingSection'
import MatchingAndLiveChatSectionComponent from '@/components/pages/Home/MatchingAndLiveChatSectionComponent'
import RoadMapsSectionComponent from '@/components/pages/Home/RoadMapsSectionComponent'
import { Stack } from '@mui/material'

const Home = () => {
  return (
    <Stack className="full-screen" justifyContent={'flex-start'}>
      <LandingSection />
      <RoadMapsSectionComponent />
      <MatchingAndLiveChatSectionComponent />
    </Stack>
  )
}

export default Home
