'use server'

// Config
import env from '@/config/env'

// Types
import { IServerActionProps } from './types'

// Next Auth
import { getServerAuthSession } from './auth'

export async function serverAction({ endpoint, method, params, body }: IServerActionProps) {
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
    } catch (error: any) {
      throw new Error(error)
    }
  } else {
    console.log('not user')
  }
}
