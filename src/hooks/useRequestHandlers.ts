'use client'

import { useState } from 'react'

// Types
import { RequestMethods } from '@/services/types'

// Services
import { serverAction } from '@/services/actions'

export type IParams = {
  [key: string]: string
}

export type IProps = {
  endpoint: string
  body?: any
  params?: IParams
  noLoading?: boolean
}

const useRequestsHandlers = () => {
  const [loading, setLoading] = useState<boolean>(false)

  const getHandler = async ({ endpoint, params, noLoading }: IProps) => {
    try {
      !noLoading && setLoading(true)
      const response = await serverAction(endpoint, RequestMethods.GET, params)
      return response
    } catch (error: any) {
      throw new Error(error)
    } finally {
      !noLoading && setLoading(false)
    }
  }

  const postHandler = async ({ endpoint, body, params, noLoading }: IProps) => {
    try {
      !noLoading && setLoading(true)
      const response = await serverAction(endpoint, RequestMethods.POST, body, params)
      return response.data
    } catch (error: any) {
      throw new Error(error)
    } finally {
      !noLoading && setLoading(false)
    }
  }

  const putHandler = async ({ endpoint, body, params, noLoading }: IProps) => {
    try {
      !noLoading && setLoading(true)
      const response = await serverAction(endpoint, RequestMethods.PUT, body, params)
      return response.data
    } catch (error: any) {
      throw Error(error)
    } finally {
      !noLoading && setLoading(false)
    }
  }

  const deleteHandler = async ({ endpoint, params, noLoading }: IProps) => {
    try {
      !noLoading && setLoading(true)
      const response = await serverAction(endpoint, RequestMethods.DELETE, params)
      return response.data
    } catch (error: any) {
      throw Error(error)
    } finally {
      !noLoading && setLoading(false)
    }
  }

  return {
    loading,
    postHandler,
    getHandler,
    putHandler,
    deleteHandler,
  }
}

export default useRequestsHandlers
