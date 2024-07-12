// Mui
import Stack from '@mui/material/Stack'
import ListItem from '@mui/material/ListItem'
import Typography from '@mui/material/Typography'
import Link from 'next/link'

// Hooks
import { useTranslations } from 'next-intl'
import { easeIn } from 'framer-motion'
import { useCallback } from 'react'

export default function SideComponent() {
  const tEditProfile = useTranslations('edit_profile')

  const getStyle = useCallback(
    (name: string) => {
      return window.location.hash.split('#')[1] === name
        ? { fontWeight: 700, color: '#1473E6' }
        : { fontWeight: 400, color: 'black' }
    },
    [window.location.hash]
  )

  const isSelected = (name: string) => window.location.hash.split('#')[1] === name
  return (
    <Stack direction={'column'} width={'100% '}>
      <Link href={'#basic_information'}>
        <ListItem
          sx={{
            backgroundColor: 'white',
            border: '1px solid  #00000033',
            ...(isSelected('basic_information') && { borderLeft: '3px solid #1473E6' }),
            padding: '24px 12px ',
          }}
        >
          <Typography variant={'body1'} sx={getStyle('basic_information')}>
            {tEditProfile('basic_information')}
          </Typography>
        </ListItem>
      </Link>
      <Link href={'#about_me'}>
        <ListItem
          sx={{
            backgroundColor: 'white',
            border: ' 1px solid #00000033',
            padding: '24px 12px ',
            ...(isSelected('about_me') && { borderLeft: '3px solid #1473E6' }),
          }}
        >
          <Typography variant={'body1'} sx={getStyle('about_me')}>
            {tEditProfile('about_me')}
          </Typography>
        </ListItem>
      </Link>
      <Link href={'#on_the_web'}>
        <ListItem
          sx={{
            backgroundColor: 'white',
            border: ' 1px solid #00000033',
            padding: '24px 12px ',
            ...(isSelected('on_the_web') && { borderLeft: '3px solid #1473E6' }),
          }}
        >
          <Typography variant={'body1'} sx={getStyle('on_the_web')}>
            {tEditProfile('on_the_web')}
          </Typography>
        </ListItem>
      </Link>
      <Link href={'#work_experience'}>
        <ListItem
          sx={{
            backgroundColor: 'white',
            border: ' 1px solid #00000033',
            padding: '24px 12px ',
            ...(isSelected('work_experience') && { borderLeft: '3px solid #1473E6' }),
          }}
        >
          <Typography variant={'body1'} sx={getStyle('work_experience')}>
            {tEditProfile('work_experience')}
          </Typography>
        </ListItem>
      </Link>
      <Link href={'#education'}>
        <ListItem
          sx={{
            backgroundColor: 'white',
            border: ' 1px solid #00000033',
            padding: '24px 12px ',
            ...(isSelected('education') && { borderLeft: '3px solid #1473E6' }),
          }}
        >
          <Typography variant={'body1'} sx={getStyle('education')}>
            {tEditProfile('education')}
          </Typography>
        </ListItem>
      </Link>
      <Link href={'#skills'}>
        <ListItem
          sx={{
            backgroundColor: 'white',
            border: ' 1px solid #00000033',
            padding: '24px 12px ',
            ...(isSelected('skills') && { borderLeft: '3px solid #1473E6' }),
          }}
        >
          <Typography variant={'body1'} sx={getStyle('skills')}>
            {tEditProfile('skills')}
          </Typography>
        </ListItem>
      </Link>
      <Link href={'#tracks'}>
        <ListItem
          sx={{
            backgroundColor: 'white',
            border: ' 1px solid #00000033',
            padding: '24px 12px ',
            ...(isSelected('tracks') && { borderLeft: '3px solid #1473E6' }),
          }}
        >
          <Typography variant={'body1'} sx={getStyle('tracks')}>
            {tEditProfile('tracks')}
          </Typography>
        </ListItem>
      </Link>
    </Stack>
  )
}
