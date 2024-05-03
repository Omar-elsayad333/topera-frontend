import ComponentHolder from '@/components/pages/Profile/ComponentHolder'
import ListItem from '@mui/material/ListItem'
import Image from 'next/image'
import Typography from '@mui/material/Typography'

interface IEducationsProps {
  educations: { icon: string; schoolName: string; degreeName: string }[]
}
const Education = ({ educations }: IEducationsProps) => {
  return (
    <ComponentHolder title={'education'}>
      {educations.map((item, index) => (
        <ListItem sx={{ display: 'flex', gap: '30px' }} key={index}>
          <Image src={item.icon} alt={item.schoolName} width={85} height={85} />
          <Typography variant={'h6'}>{item.degreeName}</Typography>
        </ListItem>
      ))}
    </ComponentHolder>
  )
}

export default Education
