'use client'

import { useEffect } from 'react'

export default function TestTemplate({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    console.log('hello from child template')
  }, [])

  return <div>{children}</div>
}
