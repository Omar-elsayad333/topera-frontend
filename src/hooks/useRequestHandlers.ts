'use client'

import { useState } from 'react'

// Types
import { IProps } from './types'
import { AxiosResponse } from 'axios'

// Stores
import { useAppStore } from '@/stores'

// Config
import { axiosInstance } from '@/config/axios'

const useRequestHandlers = () => {
  const [state] = useAppStore()
  const [loading, setLoading] = useState(false)

  const getHandler = async ({ endpoint, params, noLoading }: IProps) => {
    let data, error

    try {
      !noLoading && setLoading(true)
      const response: AxiosResponse = await axiosInstance.get(endpoint, {
        params,
        headers: { ...(state?.currentUser?.token && { Authorization: `Bearer ${state?.currentUser?.token}` }) },
      })
      data = response.data.data
    } catch (err: any) {
      error = err.response.data
    } finally {
      !noLoading && setLoading(false)
    }
    return { data, error }
  }

  const postHandler = async ({ endpoint, body, params, noLoading }: IProps) => {
    let data, error
    try {
      !noLoading && setLoading(true)
      const response: AxiosResponse = await axiosInstance.post(endpoint, body, {
        params,
        headers: { ...(state?.currentUser?.token && { Authorization: `Bearer ${state?.currentUser?.token}` }) },
      })
      data = response.data.data
    } catch (err: any) {
      error = err.response.data
    } finally {
      !noLoading && setLoading(false)
    }
    return { data, error }
  }

  const putHandler = async ({ endpoint, body, params, noLoading }: IProps) => {
    let data, error
    try {
      !noLoading && setLoading(true)
      const response: AxiosResponse = await axiosInstance.put(endpoint, body, {
        params,
        headers: { ...(state?.currentUser?.token && { Authorization: `Bearer ${state?.currentUser?.token}` }) },
      })
      data = response.data
    } catch (err: any) {
      error = err.response.data.data
    } finally {
      !noLoading && setLoading(false)
    }
    return { data, error }
  }

  const deleteHandler = async ({ endpoint, params, noLoading }: IProps) => {
    let data, error
    try {
      !noLoading && setLoading(true)
      const response: AxiosResponse = await axiosInstance.delete(endpoint, {
        params,
        headers: { ...(state?.currentUser?.token && { Authorization: `Bearer ${state?.currentUser?.token}` }) },
      })
      data = response.data
    } catch (err: any) {
      error = err.response.data.data
    } finally {
      !noLoading && setLoading(false)
    }
    return { data, error }
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
