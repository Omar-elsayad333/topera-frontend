'use client'

import { useAlert } from '@/stores/AlertContext'

const Home = () => {
  const { setMessage } = useAlert()

  return (
    <>
      <h1 onClick={() => setMessage('omar', 'success')}>home</h1>
      <h1 onClick={() => setMessage('mo', 'error')}>NO</h1>
    </>
  )
}

export default Home
