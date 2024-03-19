'use server'

// Config
import env from '@/config/env'

// Next Auth
import { getServerAuthSession } from './auth'

export async function getData(url: string, params?: any) {
  const user: any = await getServerAuthSession()

  if (user?.user?.token) {
    try {
      const headers = {
        Authorization: `Bearer ${user.user.token}`,
        params,
      }

      const res = await fetch(`${env.api_url}${url}`, {
        headers,
      })

      return await res.json()
    } catch (error) {
      console.log(error)
    }
  } else {
    console.log('not user')
  }
}
