// Types
import { ITrack } from '@/types/pages/roadmaps'

// MUI
import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'

const FrameworksCardComponent = ({ selectedTab }: { selectedTab: ITrack }) => {
  const cardStyle = {
    color: '#fff',
    width: '187px',
    height: '272px',
    padding: '18px 35px',
    borderRadius: '12px',
  }

  return (
    <Stack gap={'32px'}>
      <Typography fontWeight={400} variant="h6">
        {selectedTab.description}
      </Typography>
      <Box>
        <Typography sx={{ mb: '15px' }} fontWeight={600} variant="h6">
          Frameworks
        </Typography>
        <Stack
          gap={'26px'}
          direction={'row'}
          sx={{ py: 1, overflowX: { xs: 'auto', md: 'unset' }, flexWrap: { xs: 'noWrap', md: 'wrap' } }}
        >
          {selectedTab.frameworks.map((item) => (
            <Box
              key={item.id}
              sx={cardStyle}
              style={{
                backgroundImage: `url("${
                  item.imageUrl ||
                  'https://s3-alpha-sig.figma.com/img/c7d2/4493/07c732fd72036ff7feeeadad466222bd?Expires=1714953600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=SSdKAE3xAswuo724-t3ZVoOv~d-FwZ61uWj4G015IQozz6S~4nuu1y~6FFBExqx6IB1iFAjJOCZl6HejTceAPpDd2yFcHdWvMNGOdW23CTajTiLQfDewC5OcQer6VFfDzaXxpPs3P5l5MaLipMoe9QMll2m2IQxyjBOM9KI8wTuJBDabfN85bvUcH-YIzpAoIPaCqQ8mTa5o4gx7Yb-OFKCPgOo1nZY8ZV3kngFunBRER1~KHlxvjLa28T9-cqSixXdsw7mIqxp82qCKua6dSomq9encdCT3cUqB~7B8kYvh7~WMivW9K7jgef8GJwQcD0QOeJMHZtT0ifFLVHjqyQ__'
                }")`,
              }}
            >
              <Typography>{item.name}</Typography>
            </Box>
          ))}
        </Stack>
      </Box>
    </Stack>
  )
}

export default FrameworksCardComponent
