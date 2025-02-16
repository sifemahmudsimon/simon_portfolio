'use client'
import { Box, Flex } from '@chakra-ui/react'
import Image from 'next/image'
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination' 
import { Autoplay, EffectFade, Pagination } from 'swiper/modules'

const ImageGallery = () => {
  return (
    <Flex 
      h={'100%'} 
      w={'100%'} 
      maxH={'14.95vw'} 
      bg={'#101010'} 
      boxShadow={'0px 0px 0px 1px rgba(255, 255, 255, 0.06)'} 
      borderRadius={'20px'} 
      position={"relative"} 
      overflow={'hidden'}
      alignItems="center" 
    >
      <Swiper
        slidesPerView={1} 
        loop={true} 
        autoplay={{
          delay: 5000, 
          disableOnInteraction: true, 
        }}
        modules={[EffectFade, Autoplay, Pagination]} 
        style={{height: '100%'}}
        pagination={{
          clickable: true, 
        }}
      >
        <SwiperSlide>
          <Flex justify="center" align="center" h="100%"> 
            <Image
              src="/tempimage/media_20241102_182750_449641552568190136.jpg"
              alt="Card"
              height={226*5}
              width={427*5}
              objectFit="cover"
              objectPosition="center"
            />
          </Flex>
        </SwiperSlide>
        <SwiperSlide>
          <Flex justify="center" align="center" h="100%"> 
            <Image
              src="/tempimage/PXL_20241030_112557555.jpg"
              alt="Another Image"
              height={226*5}
              width={427*5}
              objectFit="cover"
              objectPosition="center"
            />
          </Flex>
        </SwiperSlide>
        <SwiperSlide>
          <Flex justify="center" align="center" h="100%"> 
            <Image
              src="/tempimage/c5a7a600210bd6210b410a9a0f0d3f96.jpeg"
              alt="Another Image"
              height={226*5}
              width={427*5}
              objectFit="cover"
              objectPosition="center"
            />
          </Flex>
        </SwiperSlide>
        
      </Swiper>
    </Flex>
  )
}

export default ImageGallery
