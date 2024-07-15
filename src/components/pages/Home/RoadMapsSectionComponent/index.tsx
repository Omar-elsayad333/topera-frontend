import { serverAction } from '@/services/actions'
import { ICareers } from '@/types/pages/roadmaps'
import { Button, Stack, Typography, Container } from '@mui/material'
import CareersCardComponent from '../../Roadmaps/CareersCardComponent'

const RoadMapsSectionComponent = async () => {
  const { data }: { data: ICareers[] } = await serverAction('/roadmaps')

  return (
    <Container maxWidth={false}>
      <Stack sx={{ py: '64px' }} gap={'40px'}>
        <Typography color={'primary'} variant="h3">
          Roadmaps
        </Typography>
        <Typography variant="h5">
          Navigate your tech journey with ease using our detailed roadmaps. Each roadmap is designed to guide you
          step-by-step through your learning or project goals, breaking down complex tasks into tiny, actionable steps.
          This structured approach helps you stay focused and avoid distractions, ensuring steady progress. Whether
          you're learning a new programming language, developing a project, or preparing for a certification, our
          roadmaps provide clear guidance and milestones to help you achieve success efficiently. With our roadmaps,
          you'll always know the next step to take on your path to mastery.
        </Typography>
        <Button
          variant="contained"
          sx={{
            p: '8px 24px',
            color: 'black',
            backgroundColor: 'white',
            width: '133px',
            borderRadius: '30px',
            fontFamily: 'Saira',
            fontSize: '16px',
            fontWeight: 500,
            lineHeight: '25.18px',
            textAlign: 'left',
          }}
        >
          Learn More
        </Button>
        <Stack className="noScrollbar" sx={{ overflowX: 'auto' }} direction={'row'} gap={'30px'}>
          {data?.length > 0 && data.map((item) => <CareersCardComponent key={item.id} data={item} />)}
        </Stack>
      </Stack>
    </Container>
  )
}

export default RoadMapsSectionComponent
