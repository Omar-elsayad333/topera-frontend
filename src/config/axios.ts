// Config
import env from './env'

// Axios
import axios from 'axios'

// Next auth
import { signOut } from 'next-auth/react'
import { redirect } from 'next/navigation'

export const axiosInstance = axios.create({ baseURL: env.api_url })

axiosInstance.interceptors.request.use(
  async (config) => {
    return config
  },
  function (error) {
    return Promise.reject(error)
  }
)

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    const status = error.response ? error.response.status : null

    if (status === 401) {
      signOut()
      redirect('/login')
    }

    return Promise.reject(error)
  }
)
