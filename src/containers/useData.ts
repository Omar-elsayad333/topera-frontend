import useRequestHandler from '@/hooks/useRequestHandler'

const useData = () => {
  const { data, error, loading } = useRequestHandler('posts')

  return { data, error, loading }
}

export default useData
