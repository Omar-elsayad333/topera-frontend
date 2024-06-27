import { Metadata } from 'next'

import { serverAction } from '@/services/actions'

import ContactUsComponent from '@/components/pages/ContactUs'

export const metadata: Metadata = {
  title: 'countact us',
}

export interface IRoadmaps {
  id: string
  name: string
  description: string
}

const ContactUs = async () => {
  const { data }: { data: IRoadmaps[] } = await serverAction('/roadmaps')

  return (
    <div>
      {data.map((item) => (
        <ContactUsComponent key={item.id} data={item} />
      ))}
    </div>
  )
}

export default ContactUs
