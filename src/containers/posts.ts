'use server'

export const getPosts = async (path: string) => {
  try {
    const res = await fetch(`https://jsonplaceholder.typicode.com/${path}`)

    const jsonRes = await res.json()

    console.log(jsonRes)

    return jsonRes
  } catch (error) {
    throw new Error('no data')
  }
}
