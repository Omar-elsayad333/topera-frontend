// Component
import ComponentHolder from '@/components/pages/Profile/ComponentHolder'
import ListItem from '@mui/material/ListItem'
import Image from 'next/image'
import Typography from '@mui/material/Typography'

interface IProps {
  experiences: { companyName: string; icon: string; location: string; jobStatus: string; title: string }[]
}

const Experiences = ({ experiences }: IProps) => {
  return (
    <ComponentHolder title={'experiences'}>
      {experiences.map((item, index) => (
        <ListItem sx={{ display: 'flex', gap: '30px' }} key={index}>
          <Image src={item.icon} alt={item.companyName} width={85} height={85} />
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <Typography variant={'h6'}>{item.title}</Typography>
            <Typography variant={'subtitle2'}>
              {item.title}.{item.jobStatus}
            </Typography>
          </div>
        </ListItem>
      ))}
    </ComponentHolder>
  )
}

export default Experiences
