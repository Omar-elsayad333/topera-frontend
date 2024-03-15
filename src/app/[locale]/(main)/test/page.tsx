'use client'
import { NextPage } from 'next'

// Container
import { useTest } from './useTest'

const Test: NextPage = () => {
  const {} = useTest()
  return <h1>Test</h1>
}

export default Test
