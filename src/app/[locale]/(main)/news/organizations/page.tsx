import Link from 'next/link'
import Image from 'next/image'

// Routes
import { Routes } from '@/routes/routes'

// Services
import { serverAction } from '@/services/actions'

// Assets
import AddIcon from '@mui/icons-material/Add'

// Types
import type { CSSProperties } from 'react'
import type { IOrganization } from '@/types/pages/news'

// MUI
import Paper from '@mui/material/Paper'
import Stack from '@mui/material/Stack'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'

const Organizations = async () => {
  const { data }: { data: IOrganization[] } = await serverAction('/news/organizations')

  const avatarStyle: CSSProperties = {
    borderRadius: '50%',
    background: 'black',
  }

  return (
    <Stack gap={2} py={8}>
      <Typography>All Organisations</Typography>
      {data.map((item) => (
        <Paper variant="outlined" sx={{ p: 3, borderRadius: '10px' }}>
          <Stack direction={'row'} justifyContent={'space-between'} my={0.5} key={item.id}>
            <Stack direction={'row'} gap={2}>
              <Image src={item.imageUrl} alt="" style={avatarStyle} width={40} height={40} />
              <Stack pt={0.7}>
                <Link href={`${Routes.organization}/${item.id}`}>
                  <Typography variant="h6" fontWeight={700}>
                    {item.name}
                  </Typography>
                </Link>
                <Typography variant="subtitle2">{item.categories.join(', ')}</Typography>
                <Typography variant="subtitle2">{item.followers} Followers</Typography>
              </Stack>
            </Stack>
            <Button
              color="secondary"
              variant="outlined"
              startIcon={<AddIcon />}
              sx={{ borderRadius: '8px', height: '50px', fontWeight: '700', fontSize: '18px', alignSelf: 'center' }}
            >
              follow
            </Button>
          </Stack>
        </Paper>
      ))}
    </Stack>
  )
}

export default Organizations
