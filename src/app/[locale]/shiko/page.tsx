import ShikoComponent from '@/components/ShikoComponent'
import { getPosts } from '@/containers/posts'
const Shiko = async () => {
  const data = await getPosts()

  return (
    <div>
      <ShikoComponent data={data} />
    </div>
  )
}

export default Shiko
