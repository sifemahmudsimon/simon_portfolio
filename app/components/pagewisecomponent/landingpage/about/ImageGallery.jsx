'use client'
import { Box, Flex } from '@chakra-ui/react'
import Image from 'next/image'
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination' 
import { Autoplay, EffectFade, Pagination } from 'swiper/modules'

const ImageGallery = ({gallary}) => {
  return (
    <Flex 
    mb={{base:'16px',md:'none'}}
      h={'100%'} 
      w={'100%'} 
      maxH={{md:'14.95vw'}} 
      bg={'#101010'} 
      boxShadow={'0px 0px 0px 1px rgba(255, 255, 255, 0.06)'} 
      borderRadius={{base:'12px',md:'1.32vw'}}
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
        {gallary?.map((image,index)=>(
          <SwiperSlide key={index}>
          <Flex justify="center" align="center" h="100%"  css={{ filter:  "grayscale(100%)" }}> 
            <Image
              src={image?.url}
              alt="Card"
              height={226*5}
              width={427*5}
              objectFit="cover"
              objectPosition="center"
            />
          </Flex>
        </SwiperSlide>
        ))}
      
        
      </Swiper>
    </Flex>
  )
}

export default ImageGallery
