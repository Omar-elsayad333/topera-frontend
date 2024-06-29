// MUI
import Card from '@mui/material/Card'
import Image from 'next/image'
import Avatar from '@mui/material/Avatar'
import Button from '@mui/material/Button'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItem from '@mui/material/ListItem'
import Menu from '@mui/material/Menu'

// Image Placeholder
import CoverImagePlaceholder from '@/assets/images/coverPlaceHolder.jpg'

// Hooks
import { useState } from 'react'
import { useTranslations } from 'next-intl'

// Icons
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import Link from 'next/link'
interface IPros {
  cover: string | null
  image: string | null
  name: string | null
  occupation: string | null
  active: boolean
}

const Main = ({ cover, image, active, name, occupation }: IPros) => {
  const tProfile = useTranslations('profile')
  const [available, isAvailable] = useState<boolean>(active)
  return (
    <Card>
      <Image
        src={CoverImagePlaceholder.src}
        width={1280}
        height={270}
        sizes={'100%'}
        objectFit="cover"
        alt={'main-image'}
      />
      <Card
        sx={{
          marginTop: '-140px',
          display: 'flex',
          flexDirection: 'column',
          padding: '0 32px 24px ',
          gap: '20px',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'end', justifyContent: 'space-between' }}>
          <Avatar
            alt="hallow"
            src={image ?? 'https://placehold.co/600x1400'}
            sx={{
              height: '192px',
              width: '192px',
              border: '4px solid white',
            }}
          />
          <span>
            <Button sx={{ height: '40px' }} variant={'contained'}>
              <Link href={'/edit-profile'}>{tProfile('edit')}</Link>
            </Button>
          </span>
        </div>
        <Stack gap={'8px'} alignItems={'start'} direction={'column'}>
          <div style={{ display: 'flex' }}>
            <Typography sx={{ fontWeight: 500 }} variant={'h5'}>
              {name}
            </Typography>
            <Typography variant={'subtitle1'}>{occupation}</Typography>
          </div>
          <div style={{ display: 'flex', gap: '7px', alignItems: 'center', cursor: 'pointer' }}>
            <span style={{ display: 'flex', alignItems: 'center' }}>
              <FiberManualRecordIcon color={active ? 'success' : 'error'} fontSize={'small'} />
              <Typography sx={{ fontWeight: 500 }} color={'success'} variant={'subtitle1'}>
                {active ? tProfile('active') : tProfile('inActive')}
              </Typography>
            </span>
            <Typography sx={{ fontWeight: 500 }} color={'success'} variant={'subtitle1'}>
              {tProfile('tab_to_click')}
            </Typography>
          </div>
        </Stack>
      </Card>
    </Card>
  )
}

export default Main
