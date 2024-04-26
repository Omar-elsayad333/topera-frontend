// Component
import ComponentHolder from '@/components/pages/Profile/ComponentHolder'
import ListItem from '@mui/material/ListItem'
import Image from 'next/image'
import Typography from '@mui/material/Typography'

interface IProps {
  experiences: { name: string; icon: string; location: string; jobStatus: string }[]
}

const Experiences = ({ experiences }: IProps) => {
  return (
    <ComponentHolder title={'experiences'}>
      {experiences.map((item, index) => (
        <ListItem sx={{ display: 'flex' }} key={index}>
          <Image src={item.icon} alt={item.name} width={85} height={85} />
          <div>
            <Typography variant={'h6'}>{item.name}</Typography>
          </div>
        </ListItem>
      ))}
    </ComponentHolder>
  )
}

export default Experiences
