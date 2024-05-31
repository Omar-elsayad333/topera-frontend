import Link from 'next/link'
import { CSSProperties } from 'react'

// Types
import { ITrack } from '@/types/pages/roadmaps'

// Routes
import { Routes } from '@/routes/routes'

// MUI
import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'

const FrameworksCardComponent = ({ selectedTab }: { selectedTab: ITrack }) => {
  const cardStyle: CSSProperties = {
    color: '#fff',
    width: '187px',
    height: '272px',
    cursor: 'pointer',
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
            <Link href={`${Routes.framework}${item.id}`}>
              <Box
                key={item.id}
                sx={cardStyle}
                style={{
                  backgroundImage: `url("${
                    item.imageUrl ||
                    'https://s3-alpha-sig.figma.com/img/c7d2/4493/07c732fd72036ff7feeeadad466222bd?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=YR0OIrI6Yrxu79yc-yY9eZDPSpxl~lh5PDx2b6uoWxCNURyv7fKub5KlhA3e9cLYHYJY9ssKZmllnPG3AJoYfzVXB~Ry0krealo2rhQwaEGbOSlEPlD8G7of9Cu0P-fChZ8yrKtJX8dFfKunCh2V7z4aLURS8y59VZFoLg33tHtVdhkfsNwX1f0LoDTY46OA-bpLGo4RHdO1wncuxvCx5pkYxSJEpiKwuJIB-7t~sVFUqeJDZNs-VUz3RqZoTAJqhpUdxAzcQ5a67tH2LpgGNRXZvMHQDK1Linq6pMQ9P-u3AJFoJx-GyjwAOnFKhum-ELEyTKVgdRIxvtYi9VVBng__'
                  }")`,
                }}
                >
                <Typography>{item.name}</Typography>
              </Box>
            </Link>
          ))}
        </Stack>
      </Box>
    </Stack>
  )
}

export default FrameworksCardComponent
