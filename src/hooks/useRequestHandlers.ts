'use client'

import { useState } from 'react'

// Types
import { IProps } from './types'
import { ERequestMethods } from '@/services/types'

// Services
import { serverAction } from '@/services/actions'

const useRequestHandlers = () => {
  const [loading, setLoading] = useState<boolean>(false)

  const getHandler = async ({ endpoint, params, noLoading }: IProps) => {
    try {
      !noLoading && setLoading(true)
      const response = await serverAction({ endpoint, method: ERequestMethods.GET, params })
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
      const response = await serverAction({ endpoint, method: ERequestMethods.POST, body, params })
      return response.data
    } catch (error: any) {
      console.log(error)
      throw new Error(error)
    } finally {
      !noLoading && setLoading(false)
    }
  }

  const putHandler = async ({ endpoint, body, params, noLoading }: IProps) => {
    try {
      !noLoading && setLoading(true)
      const response = await serverAction({ endpoint, method: ERequestMethods.PUT, body, params })
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
      const response = await serverAction({ endpoint, method: ERequestMethods.DELETE, params })
      return response.data
    } catch (error: any) {
      throw Error(error)
    } finally {
      !noLoading && setLoading(false)
    }
  }

  return {
    loading,
    getHandler,
    postHandler,
    putHandler,
    deleteHandler,
  }
}

export default useRequestHandlers
