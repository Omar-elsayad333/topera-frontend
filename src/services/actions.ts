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
      const options: any = {
        headers: {},
      }
      options.headers['Authorization'] = `Bearer ${user.user.token}`
      options.headers['Content-Type'] = 'application/json'
      params && (options['params'] = params)
      options['method'] = method

      if (body) {
        options.body = JSON.stringify(body)
      }

      const res = await fetch(`${env.api_url}${endpoint}`, options)

      return await res.json()
    } catch (error: any) {
      throw new Error(error)
    }
  } else {
    console.log('not user')
  }
}
