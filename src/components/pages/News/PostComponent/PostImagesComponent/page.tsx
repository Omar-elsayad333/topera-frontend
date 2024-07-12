'use client'
import Image from 'next/image'

// Types
import { IImage } from '@/types/pages/news'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'

import './styles.css'

// import required modules
import { Pagination } from 'swiper/modules'

const PostImagesComponent = ({ data }: { data: IImage[] }) => {
  return (
    <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
      {data?.length > 0 &&
        data.map((item, index) => (
          <SwiperSlide key={index}>
            <Image src={item.imageUrl} alt={''} objectFit="cover" objectPosition="center" fill />
          </SwiperSlide>
        ))}
    </Swiper>
  )
}

export default PostImagesComponent
