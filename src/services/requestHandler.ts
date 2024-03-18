import env from '@/config/env'
import { getServerAuthSession } from './auth'

export async function getData(url: string, params?: any) {
  const user: any = await getServerAuthSession()

  if (user?.user?.token) {
    const headers = {
      Authorization: `Bearer ${user.user.token}`,
      params,
    }

    const res = await fetch(`${env.api_url}/${url}`, {
      headers,
    })

    // The return value is *not* serialized
    // You can return Date, Map, Set, etc.
    if (!res.ok) {
      // This will activate the closest `error.js` Error Boundary
      throw new Error('Failed to fetch data')
    }

    return await res.json()
  } else {
    console.log('not user')
  }
}
