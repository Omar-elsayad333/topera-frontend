import Image from 'next/image'

// Types
import { IRecomondationUsers } from '../types'

// Assets
import CancelIcon from '@/assets/icons/cancel.svg'

// Config
import env from '@/config/env'

// MUI
import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import { Chip, SxProps, Typography, useTheme } from '@mui/material'
import Button from '@mui/material/Button'

interface IProps {
  data: IRecomondationUsers
  trackName: string
}

const styles: Record<string, SxProps> = {
  root: {
    position: 'relative',
    aspectRatio: 2 / 3,
    backgroundSize: 'cover',
    borderRadius: '8px',
    padding: '16px',
    overflow: 'hidden',
    backgroundPosition: 'center',
  },
  shadowBox: {
    zIndex: 1,
    inset: '0px',
    position: 'absolute',
    background:
      'linear-gradient(180deg, #000000 -18%, rgba(102, 102, 102, 0) 20%), linear-gradient(360deg, #000000 -18%, rgba(102, 102, 102, 0) 40%)',
  },
  chipStyle: {
    borderRadius: '3px',
    background: '#FFFFFF80',
  },
}

const UserCard = ({ data, trackName }: IProps) => {
  const theme = useTheme()

  return (
    <Stack sx={{ width: '100%' }} gap={1}>
      <Stack
        sx={styles.root}
        alignItems={'start'}
        justifyContent={'space-between'}
        style={{ backgroundImage: `url("${env.api_file_url}/${data.imageUrl}")` }}
      >
        <Box sx={styles.shadowBox} />
        <Typography fontWeight={600} sx={{ zIndex: 2 }} color={theme.palette.common.white} variant="body1">
          {data.name}
          <Typography fontWeight={400} variant="subtitle1">
            {trackName}
          </Typography>
        </Typography>
        <Stack gap={1} sx={{ zIndex: 2 }}>
          <Stack gap={1} direction={'row'} flexWrap={'wrap'}>
            {data.skills.length > 0 && data.skills.map((item) => <Chip key={item.id} label={item.name} />)}
          </Stack>
          <Button
            variant="contained"
            sx={{
              width: 'fit-content',
              color: theme.palette.common.black,
              backgroundColor: theme.palette.common.white,
            }}
          >
            View Full Profile
          </Button>
        </Stack>
      </Stack>
      <Stack direction={'row'} gap={1}>
        <Button variant="contained" color="error" sx={{ flexGrow: 1 }}>
          <Image src={CancelIcon} alt="Reject" />
        </Button>
        <Button variant="contained" color="success" sx={{ flexGrow: 3, fontSize: '10px' }}>
          Match!
        </Button>
      </Stack>
    </Stack>
  )
}

export default UserCard
