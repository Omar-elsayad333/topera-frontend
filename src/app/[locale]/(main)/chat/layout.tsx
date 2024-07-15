import { PropsWithChildren } from 'react'
import { redirect } from 'next/navigation'

// Routes
import { Routes } from '@/routes/routes'

// Services
import { getServerAuthSession } from '@/services/auth'

interface IProps extends PropsWithChildren {}

export default async function RootLayout({ children }: IProps) {
  const session = await getServerAuthSession()
  !session && redirect(Routes.login)

  return <>{children}</>
}
