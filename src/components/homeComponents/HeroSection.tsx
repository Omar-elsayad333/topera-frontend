'use client'

import useHomeContainer from '@/containers/useHomeContainer'

const HeroSection: React.FC = () => {
  const { data } = useHomeContainer()
  return (
    <div>
      {data?.postsData?.length > 0 &&
        data.postsData.map((item: any) => <p key={item.id}>{item.title}</p>)}
    </div>
  )
}

export default HeroSection
