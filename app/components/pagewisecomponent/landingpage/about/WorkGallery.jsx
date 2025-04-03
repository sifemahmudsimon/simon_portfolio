"use client";
import { Box, Button, Flex, Text } from "@chakra-ui/react";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import style from "../../../../styles/swiper.module.scss";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";


const WorkGallery = ({ projects }) => {
  return (
    <Box
    mb={{base:'16px',md:'none'}}
      h={"100%"}
      w={"100%"}
      maxH={{md:"18.00vw"}}
      bg={"#101010"}
      boxShadow={{base:"0px 0px 0px 1px rgba(255, 255, 255, 0.06)",md:"0px 0px 0px 0.066vw rgba(255, 255, 255, 0.06)"}}
      borderRadius={{base:'12px',md:'1.32vw'}}
      pt={{base:'16px',md:"1.32vw"}}
      pb={{base:'16px',md:"1.85vw"}}
    >
      <Box>
        <Flex
          fontWeight={"500"}
          fontSize={{base:'18px',md:"0.93vw"}}
          lineHeight={{base:'24px',md:"1.26vw"}}
          w={"100%"}
          justifyContent={"center"}
          alignItems={"center"}
          color={"#CCCCCC"}
          gap={{md:"0.53vw"}}
          mt={{md:"0.66vw"}}
          // mb={"1.06vw"}
        >
          <Box boxSize={{base:'22px',md:"1.19vw"}}>
            <svg
              width="18"
              height="19"
              viewBox="0 0 18 19"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M7.23071 3.35516C7.3599 2.98923 7.59939 2.67237 7.91619 2.44824C8.233 2.22412 8.61151 2.10377 8.99957 2.10377C9.38764 2.10377 9.76615 2.22412 10.083 2.44824C10.3998 2.67237 10.6392 2.98923 10.7684 3.35516C10.8266 3.50755 10.942 3.63116 11.0901 3.6996C11.2381 3.76804 11.4071 3.77588 11.5609 3.72145C11.7146 3.66702 11.841 3.55463 11.913 3.40829C11.9851 3.26194 11.997 3.09323 11.9463 2.93819C11.7308 2.32892 11.3317 1.80145 10.804 1.42838C10.2762 1.0553 9.64585 0.85498 8.99957 0.85498C8.3533 0.85498 7.72291 1.0553 7.19519 1.42838C6.66747 1.80145 6.26836 2.32892 6.05281 2.93819C5.99751 3.09452 6.00659 3.26642 6.07803 3.41606C6.14948 3.5657 6.27744 3.68083 6.43378 3.73613C6.59011 3.79142 6.762 3.78235 6.91165 3.7109C7.06129 3.63945 7.17642 3.51149 7.23171 3.35516H7.23071ZM1.29019 6.5549C1.24648 6.52685 1.19946 6.50435 1.1502 6.48791C1.27349 6.22854 1.44021 5.99215 1.64316 5.78896C2.62108 4.81304 4.19096 4.81304 7.33271 4.81304H10.6664C13.8092 4.81304 15.3801 4.81304 16.356 5.78896C16.56 5.99295 16.722 6.22293 16.8489 6.48791C16.8 6.50443 16.7534 6.52693 16.71 6.5549C14.9601 7.69281 13.8602 8.40476 12.9463 8.86072C12.9161 8.70879 12.8305 8.57349 12.7062 8.48106C12.5819 8.38863 12.4277 8.34566 12.2735 8.36048C12.1193 8.3753 11.9761 8.44686 11.8717 8.56127C11.7673 8.67569 11.7091 8.82481 11.7084 8.97971V9.36068C9.94217 9.89367 8.05798 9.89367 6.29179 9.36068V8.97971C6.29236 8.82391 6.23471 8.67352 6.13016 8.55802C6.0256 8.44252 5.88167 8.37024 5.72659 8.35534C5.57151 8.34045 5.41645 8.38402 5.29183 8.47751C5.1672 8.57099 5.08198 8.70766 5.05289 8.86072C4.14096 8.40476 3.04005 7.69281 1.29019 6.5549ZM0.667236 11.4795C0.667236 9.85364 0.667236 8.64974 0.802226 7.72981C2.69907 8.96271 3.91498 9.74965 5.04189 10.2336V10.6456C5.04003 10.8113 5.10409 10.971 5.21998 11.0895C5.33587 11.208 5.49409 11.2757 5.65984 11.2775C5.82559 11.2794 5.98528 11.2153 6.1038 11.0994C6.22231 10.9835 6.28993 10.8253 6.29179 10.6596C8.06665 11.1275 9.9335 11.1275 11.7084 10.6596C11.7102 10.8253 11.7778 10.9835 11.8963 11.0994C12.0149 11.2153 12.1746 11.2794 12.3403 11.2775C12.5061 11.2757 12.6643 11.208 12.7802 11.0895C12.8961 10.971 12.9601 10.8113 12.9583 10.6456V10.2336C14.0842 9.74865 15.3001 8.96271 17.1979 7.72981C17.3329 8.64974 17.3329 9.85364 17.3329 11.4795C17.3329 14.6213 17.3329 16.1931 16.356 17.1691C15.3801 18.145 13.8092 18.145 10.6664 18.145H7.33371C4.19096 18.145 2.62008 18.145 1.64416 17.1691C0.667236 16.1931 0.667236 14.6213 0.667236 11.4795Z"
                fill="#916CE7"
              />
            </svg>
          </Box>
          {projects?.title}
        </Flex>
        <Text
          color={"#999999"}
          textAlign={"center"}
          fontWeight={"600"}
          fontSize={{base:'16px',md:"1.06vw"}}
          lineHeight={{base:'20px',md:"1.59vw"}}
          letterSpacing={{base:'2.75px',md:'0.125vw'}}
        >
          {projects?.sub}
        </Text>
      </Box>
      <Box mt={{base:'16px',md:"1.85vw"}} mr={{base:'12px',md:"1.32vw"}}>
        <Swiper
          className={`${style.custom}`}
          // spaceBetween={'12px'}
          slidesPerView={"auto"}
          loop={true}
          navigation={true}
          modules={[Autoplay]}
          autoplay={{
            delay: 3000,
            disableOnInteraction: true,
          }}
        >
          {projects?.data?.map((data, index) => (
            <SwiperSlide key={index} >
              <Image
                alt="image"
                src={data?.bannerimage}
                objectFit="cover"
                objectPosition="center"
                fill
              />
            </SwiperSlide>
            
          ))}
          {projects?.data?.map((data, index) => (
            <SwiperSlide key={index}>
              <Image
                alt="image"
                src={data?.bannerimage}
                objectFit="cover"
                objectPosition="center"
                fill
              />
            </SwiperSlide>
            
          ))}
        </Swiper>
      </Box>
      <Button
        bg={"#916CE7"}
        border={{base:"1px solid #101010",md:"0.13vw solid #101010"}}
        borderRadius={{base:'4px',md:"0.79vw"}}
        w={{md:"100%"}}
        maxW={{md:"8.92vw"}}
        h={{base:'28px',md:"2.98vw"}}
        mx="auto"
        mt={{base:'-12px',md:"-0.75vw"}}
        display="block"
        zIndex={10}
        fontWeight={500}
        fontSize={{base:'10px',md:"0.93vw"}}
        lineHeight={"1.26vw"}
      >
        View Works
      </Button>
    </Box>
  );
};

export default WorkGallery;
