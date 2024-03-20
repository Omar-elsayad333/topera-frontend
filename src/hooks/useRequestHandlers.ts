'use client'

import { useState } from 'react'
import { getData, postData } from '@/services/requestHandler'

type IParams = {
  [key: string]: string
}

const useRequestsHandlers = () => {
  const [loading, setLoading] = useState<boolean>(false)

  const getHandler = async (endpoint: string, params?: IParams, noLoading?: boolean) => {
    try {
      !noLoading && setLoading(true)
      const response = await getData(endpoint, params)
      return response
    } catch (error: any) {
      throw new Error(error)
    } finally {
      !noLoading && setLoading(false)
    }
  }

  const postHandler = async (endpoint: string, body?: any, params?: IParams, noLoading?: boolean) => {
    try {
      !noLoading && setLoading(true)
      const response = await postData(endpoint, body, params)
      return response.data
    } catch (error: any) {
      throw new Error(error)
    } finally {
      !noLoading && setLoading(false)
    }
  }

  const postHandlerById = async (id: any, token: string, path: string, data?: any, noLoading?: boolean) => {
    const axiosInstanceWithToken = createAxiosInstance(token)
    try {
      !noLoading && setLoading(true)
      const response = await axiosInstanceWithToken.post(`${path}/${id}`, data)
      return response.data
    } catch (error: any) {
      throw Error(error)
    } finally {
      !noLoading && setLoading(false)
    }
  }

  const getHandlerById = async (id: any, token: string, path: string, noLoading?: boolean) => {
    const axiosInstanceWithToken = createAxiosInstance(token)
    try {
      !noLoading && setLoading(true)
      const response = await axiosInstanceWithToken.get(`${path}/${id}`)
      return response.data
    } catch (error: any) {
      throw error
    } finally {
      !noLoading && setLoading(false)
    }
  }

  const publicGetHandler = async (path: string, noLoading?: boolean) => {
    try {
      !noLoading && setLoading(true)
      const response = await axiosInstance.get(path)
      return response.data
    } catch (error: any) {
      throw Error(error)
    } finally {
      !noLoading && setLoading(false)
    }
  }

  const putHandler = async (token: string, path: string, data?: any, noLoading?: boolean) => {
    const axiosInstanceWithToken = createAxiosInstance(token)
    try {
      !noLoading && setLoading(true)
      const response = await axiosInstanceWithToken.put(`${path}`, data)
      return response.data
    } catch (error: any) {
      throw Error(error)
    } finally {
      !noLoading && setLoading(false)
    }
  }

  const putHandlerById = async (id: any, token: string, path: string, data?: any, noLoading?: boolean) => {
    const axiosInstanceWithToken = createAxiosInstance(token)
    try {
      !noLoading && setLoading(true)
      const response = await axiosInstanceWithToken.put(`${path}/${id}`, data)
      return response.data
    } catch (error: any) {
      throw Error(error)
    } finally {
      !noLoading && setLoading(false)
    }
  }

  const deleteHandler = async (id: any, token: string, path: string, noLoading?: boolean) => {
    const axiosInstanceWithToken = createAxiosInstance(token)
    try {
      !noLoading && setLoading(true)
      const response = await axiosInstanceWithToken.delete(`${path}/${id}`)
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
    publicGetHandler,
    postHandlerById,
    getHandler,
    getHandlerById,
    putHandler,
    putHandlerById,
    deleteHandler,
  }
}

export default useRequestsHandlers
