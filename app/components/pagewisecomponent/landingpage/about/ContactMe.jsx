'use client'
import { Box, Flex, IconButton, Text } from "@chakra-ui/react";
import Image from "next/image";
import { useState } from "react";

export default function MyComponent() {
  const [hovered, setHovered] = useState(false);
  return (
    <Flex
    cursor={'pointer'}
    mb={{base:'16px',md:'none'}}
      flex={1}
      flexDir={"column"}
      justifyContent={"space-between"}
      w={"100%"}
      position={"relative"}
      // overflow={"hidden"}
      bg={"#101010"}
      boxShadow={"0px 0px 0px 1px rgba(255, 255, 255, 0.06)"}
      borderRadius={{base:'12px',md:'1.32vw'}}
      p={{base:'16px',md:"1.32vw"}}
      onMouseEnter={() => setHovered(true)} // Set the hover state to true when mouse enters
      onMouseLeave={() => setHovered(false)}
    >
      <Flex position="relative" zIndex={2} justifyContent={"space-between"} mb={{base:'80px',md:'none'}}> 
        <Text
          fontWeight={"300"}
          color={"#CCCCCC"}
          fontSize={{base:'18px',md:"1.06vw"}}
          lineHeight={{base:'22px',md:"1.36vw"}}
        >
          Have some <br /> questions?
        </Text>
        <IconButton
          rounded={"full"}
          bg={hovered ? "rgba(255, 255, 255, 0.075)" : "transparent"}
          transform={hovered ? 'rotate(45deg)' : 'rotate(0deg)'}
          color={"#CCCCCC"}
          width={{base:'24px',md:"2vw" }}
          height={{base:'24px',md:"2vw" }}
          padding={{base:'8px',md:"0.25vw"}} 
          // _hover={{ 
          //   bg: "rgba(255, 255, 255, 0.075)", 
          //   transform:'rotate(45deg)'
        // }}
        >
          <svg
            width="100%"
            height="100%"
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1 11L11 1M11 1H1M11 1V11"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </IconButton>
      </Flex>
      <Text
        position="relative"
        zIndex={2}
        fontWeight={"500"}
        color={"#CCCCCC"}
        fontSize={{base:'28px',md:"2.50vw"}}
        lineHeight={{base:'32px',md:"1.85vw"}}
      >
        Contact me
      </Text>

      <Box w={"100%"} h={'100%'} position={'absolute'} zIndex={1} top={0} left={0} borderRadius={{base:'12px',md:'1.32vw'}} overflow={'hidden'}>
      <Image
        src="/staticimage/card.png"
        alt="Card"
        layout="fill"
        objectFit="cover"
        style={{
          filter: "brightness(40%)",
          // zIndex: 1,
          // position: "absolute",
          // top: 0,
          // left: 0,
          transition: 'transform 0.5s cubic-bezier(0.25, 0.1, 0.25, 1)', // Smooth transition for transform
          transform: hovered ? 'scale(1.25)' : 'scale(1) translateX(0)', // Hover effect
        }}
      />
      </Box>
    </Flex>
  );
}
