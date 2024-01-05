import { NextPage } from 'next'

// Components
import LoginComponent from '@/components/LoginComponent'

interface IProps {
  params: {
    locale: string
  }
}

const Login: NextPage<IProps> = async ({ params: { locale } }) => {
  return (
    <section>
      <LoginComponent />
    </section>
  )
}

export default Login
