import Image from 'next/image'
import { Stack, Typography, Button, Divider, Box, Container } from '@mui/material'
import img from '@/../public/landingMask.svg'

const MatchingAndLiveChatSectionComponent = () => {
  return (
    <Stack direction="row" flexWrap={'nowrap'} sx={{ background: '#121212' }}>
      <Container
        maxWidth={false}
        sx={{
          paddingRight: '0px !important',
          background: 'white',
          borderRadius: { xs: '100px 100px 0px 0px', xl: '100px 0px 0px 0px' },
        }}
      >
        <Stack direction="row" flexWrap={'nowrap'}>
          <Stack spacing={4} sx={{ flex: 1, my: 10 }}>
            <Typography color={'black'} variant="h3">
              Matching
            </Typography>
            <Typography color={'black'} variant="h5">
              Navigate your tech journey with ease using our detailed roadmaps. Each roadmap is designed to guide you
              step-by-step through your learning or project goals, breaking down complex tasks into tiny, actionable
              steps. This structured approach helps you stay focused and avoid distractions, ensuring steady progress.
              Whether you're learning a new programming language, developing a project, or preparing for a
              certification, our roadmaps provide clear guidance and milestones to help you achieve success efficiently.
              With our roadmaps, you'll always know the next step to take on your path to mastery.
            </Typography>
            <Button
              variant="contained"
              sx={{
                p: '8px 24px',
                color: 'white',
                backgroundColor: 'black',
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
            <Typography color={'black'} variant="h5">
              Navigate your tech journey with ease using our detailed roadmaps. Each roadmap is designed to guide you
              step-by-step through your learning or project goals, breaking down complex tasks into tiny, actionable
              steps. This structured approach helps you stay focused and avoid distractions, ensuring steady progress.
              Whether you're learning a new programming language, developing a project, or preparing for a
              certification, our roadmaps provide clear guidance and milestones to help you achieve success efficiently.
              With our roadmaps, you'll always know the next step to take on your path to mastery.
            </Typography>
            <Button
              variant="contained"
              sx={{
                p: '8px 24px',
                color: 'white',
                backgroundColor: 'black',
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
          <Box sx={{ width: '50%', display: { xs: 'none', xl: 'block' }, position: 'relative' }}>
            <Image fill src={img.src} alt="Background Image" style={{ objectFit: 'cover', objectPosition: 'left' }} />
          </Box>
        </Stack>
      </Container>
    </Stack>
  )
}

export default MatchingAndLiveChatSectionComponent
