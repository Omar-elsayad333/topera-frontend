import { Metadata } from 'next'

// Server Actions
import { serverAction } from '@/services/actions'

// Types
import { ICareers } from '@/types/pages/roadmaps'

// Components
import CareersCardComponent from '@/components/pages/Roadmaps/CareersCardComponent'

// MUI
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'

export const metadata: Metadata = {
  title: 'Roadmaps',
}

const Roadmaps = async () => {
  const { data }: { data: ICareers[] } = await serverAction('/roadmaps')

  return (
    <Stack sx={{ py: '64px' }} gap={'40px'}>
      <Typography color={'primary'} variant="h3">
        Welcome to Roadmaps
      </Typography>
      <Typography variant="h5">
        Lorem ipsum dolor sit amet consectetur. Eu dolor posuere lobortis morbi a. Id orci rhoncus venenatis mollis
        viverra nulla et purus. Morbi dolor risus cras netus tortor egestas dictum mauris. Mi faucibus gravida ut tempus
        tellus.
      </Typography>
      <Stack className="noScrollbar" sx={{ overflowX: 'auto' }} direction={'row'} gap={'30px'}>
        {data?.length > 0 && data.map((item) => <CareersCardComponent key={item.id} data={item} />)}
      </Stack>
    </Stack>
  )
}

export default Roadmaps
