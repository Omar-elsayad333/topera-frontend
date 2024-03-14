import env from '@/config/env'

const authenticate = async (email: string, password: string) => {
  try {
    const body = {
      email,
      password,
    }

    const res = await fetch(`${env.api_url}/tokens`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    })

    const jsonRes = await res.json()

    return jsonRes.data
  } catch (error) {
    return null
  }
}

export const userService = {
  authenticate,
}
