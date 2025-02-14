import Image from "next/image";
import styles from "./page.module.css";
import { Box, Button, Flex, Text } from "@chakra-ui/react";
import NavBar from "./components/navbar/NavBar";
import { CommonLink } from "./components/reuseable/CommonLink";
import Link from "next/link";

export default function Home() {
  return (
    <Box position={"relative"}>
      <Box position={"absolute"} w={"100%"} zIndex={100}>
        <NavBar />
      </Box>
      <Flex h={"100vh"} overflow={"hidden"}>
        <Box
          w={{ lg: "41.47vw", "2xl": "38vw" }}
          overflow={"hidden"}
          position={"relative"}
        >
          <Image
            src={"/staticimage/landingpage.png"}
            // width={627 * 2}
            // height={784 * 2}
            layout="fill"
            objectFit="cover"
            alt="image"
          />
        </Box>
        <Flex
          flex={1}
          flexDir={"column"}
          alignItems={"end"}
          mr={{ md: "9.79vw" }}
          justifyContent={"center"}
          gap={"6vw"}
        >
          <Box textAlign={"right"}>
            <Text
              mb={{ md: "1.59vw" }}
              fontWeight={700}
              fontSize={"4.23vw"}
              lineHeight={"4.23vw"}
              letterSpacing={"0.26vw"}
            >
              Sife Mahmud Simon
            </Text>
            <Text
              fontWeight={300}
              fontSize={"1.85vw"}
              lineHeight={"1.85vw"}
              letterSpacing={"0.53vw"}
            >
              Softwere Engineer (Frontend)
            </Text>
          </Box>
          <Flex gap={"1.59vw"}>
            <Link href={"/#"}>
              <Flex
                bg={"#CCCCCC"}
                alignItems={"center"}
                gap={"0.79vw"}
                // border={"2px solid #090920"}
                boxShadow={"inset 0px 0px 0px 2px #090920"}
                roundedLeft={"full"}
                roundedRight={"full"}
                px={"2.12vw"}
                py={"1.32vw"}
                color={'#090920'}
                fontWeight={800}
                fontSize={"1.59vw"}
                lineHeight={"2.12vw"}
                // h={"5.16vw"}
                _hover={{
                  bg: "transparent", // Make sure background is transparent for gradient effect
                  transition: "background 0.25s ease", // Add transition for smooth effect
                  background: "#090920",
                  color:'#CCCCCC' ,
                  backgroundSize: "200% 100%", // Start with background larger than the container
                  backgroundPosition: "right center", // Start the gradient from right
                }}
                _active={{
        bg: '#CCCCCC !important',
        color:"#090920 !important",
        transition: "none !important",  // Change background on click (active state)
      }}
                transition="background 0.2s ease"
              >
                <Box boxSize={"2.12vw"}>
                  <svg
                    width="100%"
                    height="100%"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      opacity="0.5"
                      d="M2 12C2 7.28595 2 4.92893 3.46447 3.46447C4.92893 2 7.28595 2 12 2C16.714 2 19.0711 2 20.5355 3.46447C22 4.92893 22 7.28595 22 12C22 16.714 22 19.0711 20.5355 20.5355C19.0711 22 16.714 22 12 22C7.28595 22 4.92893 22 3.46447 20.5355C2 19.0711 2 16.714 2 12Z"
                      fill="currentColor"
                    />
                    <path
                      d="M12.75 7C12.75 6.58579 12.4142 6.25 12 6.25C11.5858 6.25 11.25 6.58579 11.25 7L11.25 12.1893L9.53033 10.4697C9.23744 10.1768 8.76256 10.1768 8.46967 10.4697C8.17678 10.7626 8.17678 11.2374 8.46967 11.5303L11.4697 14.5303C11.6103 14.671 11.8011 14.75 12 14.75C12.1989 14.75 12.3897 14.671 12.5303 14.5303L15.5303 11.5303C15.8232 11.2374 15.8232 10.7626 15.5303 10.4697C15.2374 10.1768 14.7626 10.1768 14.4697 10.4697L12.75 12.1893V7Z"
                      fill="currentColor"
                    />
                    <path
                      d="M8 16.25C7.58579 16.25 7.25 16.5858 7.25 17C7.25 17.4142 7.58579 17.75 8 17.75H16C16.4142 17.75 16.75 17.4142 16.75 17C16.75 16.5858 16.4142 16.25 16 16.25H8Z"
                      fill="currentColor"
                    />
                  </svg>
                </Box>
                My Resume
              </Flex>
            </Link>
            <Button
          
              minW={"16.91vw"}
              h={"4.76vw"}
              roundedRight={"full"}
              roundedLeft={"full"}
              px={"1.59vw"}
              py={"1.32vw"}
              fontWeight={800}
              fontSize={"1.59vw"}
              lineHeight={"2.12vw"}
              _hover={{
                color:'#CCCCCC',
         
              }}
            >
              LinkedIn
            </Button>
          </Flex>
        </Flex>
      </Flex>
    </Box>
  );
}
