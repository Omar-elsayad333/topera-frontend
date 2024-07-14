import Image from 'next/image'
import { Stack, Typography, Button, Divider, Box } from '@mui/material'
import img from '@/assets/images/full-image.jpeg'

const MatchingAndLiveChatSectionComponent = () => {
  return (
    <Stack direction="row" sx={{ height: '100dvh' }}>
      <Stack spacing={4} sx={{ flex: 1 }}>
        <Typography color={'black'} variant="h3">
          Matching
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
        <Divider />
        <Typography color={'black'} variant="h3">
          Live Chat
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
      </Stack>
      <Box>
        <Image src={img} alt="Background Image" width={800} height={778} />
      </Box>
    </Stack>
  )
}

export default MatchingAndLiveChatSectionComponent
