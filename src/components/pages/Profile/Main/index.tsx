// MUI
import Card from '@mui/material/Card'
import Image from 'next/image'
import Avatar from '@mui/material/Avatar'

const Main = () => {
  return (
    <Card sx={{ position: 'relative' }}>
      <Image
        src={'https://placehold.co/1284x241'}
        width={1280}
        height={270}
        sizes={'100%'}
        objectFit="contain"
        alt={'main-image'}
      />
      <div style={{ position: 'absolute', top: '35%' }}>
        <Avatar alt="hallow" src="https://placehold.co/1284x241" sx={{ height: '192px', width: '192px' }} />
      </div>
    </Card>
  )
}

export default Main
