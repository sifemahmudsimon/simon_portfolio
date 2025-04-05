"use client";
import { Box, Button, Card, Center, Flex, Text } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const ProjectCards = ({ data }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <Card.Root
      w={"100%"}
      maxW={{md:"32.75vw"}}
      h={{base:'60vw',md:"20vw"}}
      borderRadius={{ base: "12px", md: "1.32vw" }}
      overflow="hidden"
    >
      <Image
        fill
        objectFit="cover"
        objectPosition="center"
        src={data?.bannerimage}
        alt="Green double couch with wooden legs"
        style={{
          filter: hovered && "grayscale(100%)",
          transition: " all 0.3s ease-in-out",
        }}
      />

      <Card.Body
      
        bg={{md:"rgba(0, 0, 0, 0.6)"}}
        opacity={{md:"0"}}
        justifyContent="end"
        p={0}
        zIndex={10}
        position="relative"
        _hover={{ opacity: "1", backdropFilter: "blur(7.5px)" }}
        transition="opacity 0.3s ease-in-out, backdrop-filter 0.3s ease-in-out"
      >
        <Center
        display={{base:'none',md:"flex"}}
          h="100%"
          w="100%"
          cursor={"pointer"}
          p={"1vw"}
          textJustify={"auto"}
          bg={{md:hovered && "rgba(0, 0, 0, 0.6)"}}
          transition=" all 0.3s ease-in-out"
          m={"auto"}
        >
         <Link href={`projects/${data?.url}`}>
         <Text
            fontSize={"1vw"}
            textAlign={"center"}
            fontWeight={600}
            color={"white"}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
          >
            Click Here <br />{" "}
            <Text as={"span"} fontSize={".75vw"} fontWeight={400}>
              {" "}
              To see more info about {data?.company?.toLowerCase()} project
            </Text>
          </Text>
          </Link>
        </Center>
        <Flex w={'100%'}>
        <Box w={'100%'}>
        <Link href={data?.link} >
          <Button
          rounded={'none'}
            w={"100%"}
            h={"48px"}
            fontSize={{md:".8vw"}}
            variant="solid"
            _hover={{ bg: "#916ce7" }}
            _active={{ bg: "#916ce7" }}
          >
            Visit Website
          </Button>
        </Link>
        </Box>
    <Box  display={{md:'none'}} width={'100%'}>
    <Link href={data?.link} >
          <Button
          bg={'gray.800'}
          rounded={'none'}
            w={"100%"}
            h={"48px"}
            fontSize={{md:".8vw"}}
            variant="solid"
            _hover={{ bg: "#916ce7" }}
            _active={{ bg: "#916ce7" }}
          >
            View Detals
          </Button>
        </Link>
    </Box>
        </Flex>
      </Card.Body>
    </Card.Root>
  );
};

export default ProjectCards;
