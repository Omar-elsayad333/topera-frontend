'use server'

export const getPosts = async () => {
  try {
    // await new Promise((resolve) => setTimeout(resolve, 3000))
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts`)

    const jsonRes = await res.json()

    return jsonRes
  } catch (error) {
    throw new Error('no data')
  }
}
