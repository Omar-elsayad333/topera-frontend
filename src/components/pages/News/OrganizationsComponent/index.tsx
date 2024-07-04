import Link from 'next/link'
import Image from 'next/image'

// Types
import type { CSSProperties } from 'react'
import type { IOrganization } from '@/types/pages/news'

// MUI
import Paper from '@mui/material/Paper'
import Stack from '@mui/material/Stack'
import Button from '@mui/material/Button'
import Divider from '@mui/material/Divider'
import Typography from '@mui/material/Typography'

import AddIcon from '@mui/icons-material/Add'
import { Routes } from '@/routes/routes'
interface IProps {
  organizationsData: IOrganization[]
}

const OrganizationsComponent = ({ organizationsData }: IProps) => {
  const avatarStyle: CSSProperties = {
    borderRadius: '50%',
    background: 'black',
  }

  return (
    <Paper variant="outlined" sx={{ borderRadius: '8px' }}>
      <Stack p={3} gap={2} sx={{ width: '100%' }}>
        <Typography>Organizations</Typography>
        {organizationsData.map((organization) => (
          <Stack direction={'row'} justifyContent={'space-between'} my={0.5} key={organization.id}>
            <Stack direction={'row'} gap={1}>
              <Image src={organization.imageUrl} alt="" style={avatarStyle} width={40} height={40} />
              <Stack pt={0.7}>
                <Link href={`${Routes.organization}/${organization.id}`}>
                  <Typography variant="h6" fontWeight={500}>
                    {organization.name}
                  </Typography>
                </Link>
                <Typography variant="subtitle2">{organization.categories.join(', ')}</Typography>
                <Typography variant="subtitle2">{organization.followers} Followers</Typography>
              </Stack>
            </Stack>
            <Button
              color="secondary"
              variant="outlined"
              startIcon={<AddIcon />}
              sx={{ borderRadius: '8px', height: '50px', fontWeight: '500' }}
            >
              follow
            </Button>
          </Stack>
        ))}
        <Divider />
        <Link href={Routes.organization}>
          <Typography textAlign={'center'} fontWeight={500}>
            See all Organizations
          </Typography>
        </Link>
      </Stack>
    </Paper>
  )
}

export default OrganizationsComponent
