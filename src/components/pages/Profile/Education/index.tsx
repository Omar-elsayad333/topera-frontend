// Components
import ComponentHolder from '@/components/pages/Profile/ComponentHolder'
import ListItem from '@mui/material/ListItem'
import Image from 'next/image'
import Typography from '@mui/material/Typography'

// Utils
import { imagesFilter } from '@/utils'

// Types
import { TEducation } from '@/container/Profile/types'

export interface IEducationsProps {
  educations: TEducation[]
}
const Education = ({ educations }: IEducationsProps) => {
  return (
    <ComponentHolder title={'education'}>
      {educations &&
        educations.map((item, index) => (
          <ListItem sx={{ display: 'flex', gap: '30px' }} key={index}>
            <Image src={imagesFilter(item as any, 'icon', item.school)} alt={item.school} width={85} height={85} />
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <Typography variant={'h6'}>{item.school}</Typography>
              <Typography variant={'subtitle1'}>{item.degree}</Typography>
            </div>
          </ListItem>
        ))}
    </ComponentHolder>
  )
}

export default Education
