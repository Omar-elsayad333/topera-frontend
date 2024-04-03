'use server'

// Config
import env from '@/config/env'

// Next Auth
import { getServerAuthSession } from './auth'

export async function serverAction(endpoint: string) {
  const user: any = await getServerAuthSession()

  const options: any = {
    headers: {},
  }
  if (user?.user?.token) options.headers['Authorization'] = `Bearer ${user.user.token}`
  options.headers['Content-Type'] = 'application/json'

  const res: any = await fetch(`${env.api_url}${endpoint}`, options)
  const jsonData = await res.json()

  if (!res.ok) {
    throw new Error(jsonData.errors)
  }
  return await jsonData
}
