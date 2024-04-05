import { NextPage } from 'next'
import useFinishSignUp from '@/container/FinishSignUp/useFinishSignUp'
const FinishSignUp: NextPage = () => {
  const { data, actions, states } = useFinishSignUp()
  return (
    <>
      <h1>hallo from from finish signUp </h1>
    </>
  )
}

export default FinishSignUp
