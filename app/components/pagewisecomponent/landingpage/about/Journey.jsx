"use client";
import { Box, Flex, IconButton, Text } from "@chakra-ui/react";
import Image from "next/image";
import React, { useState } from "react";
import { Poppins } from "next/font/google";
const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"], // Adding weights for Poppins
});

const Journey = ({journey}) => {
  const [hovered, setHovered] = useState(false);
  return (
    <Flex
      flexDir={"column"}
      flex={1}
      p={"1.32vw"}
      w={"100%"}
      bg={"#101010"}
      boxShadow={"0px 0px 0px 1px rgba(255, 255, 255, 0.06)"}
      borderRadius={"20px"}
      position="relative"
      overflow={"hidden"}
      onMouseEnter={() => setHovered(true)} // Set the hover state to true when mouse enters
      onMouseLeave={() => setHovered(false)}
    >
      <Flex
        position="relative"
        zIndex={2}
        justifyContent={"space-between"}
        alignItems={"center"}
        pb={"2.11vw"}
        borderBottom={"1px solid rgba(255, 255, 255, 0.31)"}
      >
        <Text
          color={"#E6E6E6"}
          fontWeight={600}
          fontSize={"1.59vw"}
          lineHeight={"1.59vw"}
        >
          {journey?.title}
        </Text>
        <IconButton
          rounded={"full"}
          bg={"transparent"}
          color={"#CCCCCC"}
          width="2vw"
          height="2vw"
          padding="0.25vw"
          _hover={{
            bg: "rgba(255, 255, 255, 0.075)",
            transform: "rotate(45deg)",
          }}
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
        color={"white"}
        fontWeight={"400"}
        fontSize={"1.06vw"}
        lineHeight={"1.46vw"}
        my={"1.59vw"}
      >
        {journey?.sub}
      </Text>

      <Box
        position="relative"
        zIndex={2}
        className={poppins.className}
        sx={{ fontFamily: "var(--font-poppins), sans-serif" }}
        style={{
          fontFamily: "var(--font-poppins), sans-serif",
          overflowY: "auto",
          scrollbarWidth: "none", // Firefox
          msOverflowStyle: "none", // IE and Edge
        }}
        onWheel={(e) => {
          e.stopPropagation(); // Prevent scroll propagation
        }}
      >
        {journey?.data?.map((step,index)=>(
          <Flex key={index} gap={"1.46vw"}  mb={'1.25vw'}>
          <Text
            color={"#CCCCCC"}
            fontWeight={"500"}
            fontSize={"1vw"}
            lineHeight={"1.98vw"}
            whiteSpace="nowrap"
           
          >
            {step?.date}:
          </Text>
          <Text
            color={"#E6E6E6"}
            fontWeight={"400"}
            fontSize={"1.25vw"}
            lineHeight={"1.79vw"}
          >
             {step?.shortdescription}
          </Text>
        </Flex>
        ))}
      </Box>

      <Image
        src="/staticimage/card.png"
        alt="Card"
        layout="fill"
        objectFit="cover"
        style={{
          filter: "brightness(40%)",
          zIndex: 1,
          position: "absolute",
          top: 0,
          left: 0,
          transition: "transform 0.5s cubic-bezier(0.25, 0.1, 0.25, 1)", // Smooth transition for transform
          transform: hovered ? "scale(1.25)" : "scale(1)", // Hover effect
        }}
      />
    </Flex>
  );
};

export default Journey;
