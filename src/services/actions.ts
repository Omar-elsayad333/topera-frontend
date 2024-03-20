'use server'

// Config
import env from '@/config/env'

// Next Auth
import { getServerAuthSession } from './auth'
import { IParams } from './types'

export async function serverAction(endpoint: string, method: string, params?: IParams, body?: any) {
  const user: any = await getServerAuthSession()

  if (user?.user?.token) {
    try {
      const headers: any = {}
      headers['Authorization'] = `Bearer ${user.user.token}`
      headers['method'] = method
      params && (headers['params'] = params)
      body && (headers['body'] = body)

      const res = await fetch(`${env.api_url}${endpoint}`, {
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
