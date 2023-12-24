'use client'

import useData from '@/containers/useData'

const Test = () => {
  const { data, error, loading } = useData()

  return (
    <div>
      {error ? (
        <div>
          <p>error</p>
        </div>
      ) : loading ? (
        <p>loading</p>
      ) : (
        <section>
          <h1>hello from omar</h1>
          <div>
            {data?.length > 0 && data.map((post: any) => <p key={post.id}>{post.title}</p>)}
          </div>
        </section>
      )}
    </div>
  )
}

export default Test
