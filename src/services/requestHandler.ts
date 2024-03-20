'use server'

// Config
import env from '@/config/env'

// Next Auth
import { getServerAuthSession } from './auth'

type IParams = {
  [key: string]: string
}

export async function getData(endpoint: string, params?: IParams) {
  const user: any = await getServerAuthSession()

  if (user?.user?.token) {
    try {
      const headers: any = {}
      headers['Authorization'] = `Bearer ${user.user.token}`
      params && (headers['params'] = params)

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

export async function postData(endpoint: string, body?: any, params?: IParams) {
  const user: any = await getServerAuthSession()

  if (user?.user?.token) {
    try {
      const headers: any = {}
      headers['Authorization'] = `Bearer ${user.user.token}`
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
