import Image from 'next/image'
import { Stack, Typography, Button, Divider, Box } from '@mui/material'
import img from '@/assets/images/full-image.jpeg'

const MatchingAndLiveChatSectionComponent = () => {
  return (
    <Stack direction="row" sx={{ height: '100dvh' }}>
      <Stack spacing={4} sx={{ flex: 1 }}>
        <Typography variant="h5" component="div">
          Matching
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia alias praesentium tempora, possimus optio,
          sequi autem ea veniam obcaecati mollitia labore veritatis reiciendis rem, esse perferendis! Assumenda ad
          laudantium qui!
        </Typography>
        <Button variant="contained">Learn More</Button>
        <Divider />
        <Typography variant="h5" component="div">
          Live Chat
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia alias praesentium tempora, possimus optio,
          sequi autem ea veniam obcaecati mollitia labore veritatis reiciendis rem, esse perferendis! Assumenda ad
          laudantium qui!
        </Typography>
        <Button variant="contained">Learn More</Button>
      </Stack>
      <Box>
        <Image src={img} alt="Background Image" width={800} height={778} />
      </Box>
    </Stack>
  )
}

export default MatchingAndLiveChatSectionComponent
