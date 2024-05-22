// Component
import ComponentHolder from '@/components/pages/Profile/ComponentHolder'
import ListItem from '@mui/material/ListItem'
import Image from 'next/image'
import Typography from '@mui/material/Typography'

// Types
import { TExperience } from '@/container/Profile/types'

// Utils
import { imagesFilter } from '@/utils'

export interface IExperienceProps {
  experiences: TExperience[]
}

const Experiences = ({ experiences }: IExperienceProps) => {
  return (
    <ComponentHolder title={'experiences'}>
      {experiences.map((item, index) => (
        <ListItem sx={{ display: 'flex', gap: '30px' }} key={index}>
          <Image src={imagesFilter(item as any, 'icon', item.company)} alt={item.company} width={85} height={85} />
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <Typography variant={'h6'}>{item.title}</Typography>
            <Typography variant={'subtitle2'}>
              {item.company}.{item.location}
            </Typography>
          </div>
        </ListItem>
      ))}
    </ComponentHolder>
  )
}

export default Experiences
