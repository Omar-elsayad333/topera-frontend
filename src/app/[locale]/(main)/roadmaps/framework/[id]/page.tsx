// Types
import { IFramework } from '@/types/pages/framework'

// Services
import { serverAction } from '@/services/actions'

// Components
import FrameworkDetails from '@/components/pages/FrameworkDetails'

interface IProps {
  params: {
    id: string
  }
}

const Framework = async ({ params }: IProps) => {
  const { data }: { data: IFramework } = await serverAction(`/roadmaps/framework/${params.id}`)

  return <section>{data && <FrameworkDetails data={data} />}</section>
}

export default Framework
