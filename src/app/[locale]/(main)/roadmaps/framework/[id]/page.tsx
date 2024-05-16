// Types
import { ILevel } from '@/types/pages/framework'

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
  const data: ILevel[] = await serverAction(`/roadmaps/framework/${params.id}`)

  return <>{data?.length > 0 && <FrameworkDetails data={data} />}</>
}

export default Framework
