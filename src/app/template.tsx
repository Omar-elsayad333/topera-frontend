'use client'

import '@/assets/globals.css'
import { useEffect } from 'react'

export default function RootTemplate({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    console.log('hello from template')
  }, [])

  return <div>{children}</div>
}
