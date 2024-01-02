import { NextPage } from 'next'

// Components
import TestComponent from '@/components/LoginComponent'

import { getDictionary } from '@/containers/lang'

interface IProps {
  params: {
    locale: string
  }
}

const Test: NextPage<IProps> = async ({ params: { locale } }) => {
  const dict = await getDictionary(locale)

  return (
    <section>
      <h1>{dict.login.title}</h1>
      <TestComponent />
    </section>
  )
}

export default Test
