import Image from "next/image";
// import styles from "./page.module.css";
import { Box, Button, Flex, Text } from "@chakra-ui/react";

import Link from "next/link";


const MainSection = ({profile}) => {
  return (
    <Flex position={'relative'} h={"100vh"} overflow={"hidden"}>
    <Box
      w={{base:'80%', lg: "41.47vw", "2xl": "38vw" }}
      overflow={"hidden"}
      position={"relative"}
    >
      <Image
        src={profile?.bannerimage}
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
      display={{base:'none',md:'flex'}}
    >
      <Box textAlign={"right"}>
        <Text
          mb={{ md: "1.59vw" }}
          fontWeight={700}
          fontSize={"4.23vw"}
          lineHeight={"4.23vw"}
          letterSpacing={"0.26vw"}
        >
          {profile?.name}
        </Text>
        <Text
          fontWeight={300}
          fontSize={"1.85vw"}
          lineHeight={"1.85vw"}
          letterSpacing={"0.53vw"}
        >
          {profile?.designation} ({profile?.stack})
        </Text>
      </Box>
      <Flex gap={"1.59vw"}>
        <Link href={profile?.resume?.url} target="_blank">
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
            color={"#090920"}
            fontWeight={800}
            fontSize={"1.59vw"}
            lineHeight={"2.12vw"}
            // h={"5.16vw"}
            _hover={{
              bg: "transparent", 
              transition: "background 0.25s ease", 
              background: "#DDDDDD",
             
              
              backgroundSize: "200% 100%",
              backgroundPosition: "right center", 
            }}
            _active={{
              bg: "#EEEEEE !important",
              color: "#CCCCCC !important",
              boxShadow:'inset 2px 2px 4px 2px #505050 !important',
           
              transition: "none !important", 
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
                  d="M12.5535 16.5061C12.4114 16.6615 12.2106 16.75 12 16.75C11.7894 16.75 11.5886 16.6615 11.4465 16.5061L7.44648 12.1311C7.16698 11.8254 7.18822 11.351 7.49392 11.0715C7.79963 10.792 8.27402 10.8132 8.55352 11.1189L11.25 14.0682V3C11.25 2.58579 11.5858 2.25 12 2.25C12.4142 2.25 12.75 2.58579 12.75 3V14.0682L15.4465 11.1189C15.726 10.8132 16.2004 10.792 16.5061 11.0715C16.8118 11.351 16.833 11.8254 16.5535 12.1311L12.5535 16.5061Z"
                  fill="currentColor"
                />
                <path
                  d="M3.75 15C3.75 14.5858 3.41422 14.25 3 14.25C2.58579 14.25 2.25 14.5858 2.25 15V15.0549C2.24998 16.4225 2.24996 17.5248 2.36652 18.3918C2.48754 19.2919 2.74643 20.0497 3.34835 20.6516C3.95027 21.2536 4.70814 21.5125 5.60825 21.6335C6.47522 21.75 7.57754 21.75 8.94513 21.75H15.0549C16.4225 21.75 17.5248 21.75 18.3918 21.6335C19.2919 21.5125 20.0497 21.2536 20.6517 20.6516C21.2536 20.0497 21.5125 19.2919 21.6335 18.3918C21.75 17.5248 21.75 16.4225 21.75 15.0549V15C21.75 14.5858 21.4142 14.25 21 14.25C20.5858 14.25 20.25 14.5858 20.25 15C20.25 16.4354 20.2484 17.4365 20.1469 18.1919C20.0482 18.9257 19.8678 19.3142 19.591 19.591C19.3142 19.8678 18.9257 20.0482 18.1919 20.1469C17.4365 20.2484 16.4354 20.25 15 20.25H9C7.56459 20.25 6.56347 20.2484 5.80812 20.1469C5.07435 20.0482 4.68577 19.8678 4.40901 19.591C4.13225 19.3142 3.9518 18.9257 3.85315 18.1919C3.75159 17.4365 3.75 16.4354 3.75 15Z"
                  fill="currentColor"
                />
              </svg>
            </Box>
           My {profile?.resume?.name}
          </Flex>
        </Link>
        <Link href={profile?.social?.socialsite?.url} target="_blank">
        <Button
        bg={'#090920'}
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
            color: "#090920",
            bg:'#DDDDDD',
            boxShadow:"inset 0px 0px 0px 2px #090920"
          }}
          _active={{
            bg: "#EEEEEE !important",
            boxShadow:'inset 2px 2px 4px 2px #505050 !important',
            color: "#CCCCCC !important",
            transition: "none !important", // Change background on click (active state)
          }}
        >
          {profile?.social?.socialsite?.name}
        </Button>
        </Link>
      </Flex>
    </Flex>


    <Flex display={{md:'none'}} roundedLeft={'24px'} position={'absolute'} right={0} bottom={'150px'}  w={'85%'} bg={'rgba(128, 128, 128, 0.75)'} py={'24px'} pr={'8px'}>
      <Box textAlign={"right"}>
        <Text
          mb={{base:'16px', md: "1.59vw" }}
          fontWeight={800}
          fontSize={{base:'38px',md:"4.23vw"}}
          lineHeight={{base:'44px',md:"4.23vw"}}
          letterSpacing={{base:'5px',md:"0.26vw"}}
          color={'white'}
        >
          {profile?.name}
        </Text>
        <Text
          fontWeight={600}
          fontSize={{base:'18px',md:"1.85vw"}}
          lineHeight={{base:'30px',md:"1.85vw"}}
          letterSpacing={{base:'1.5px',md:"0.53vw"}}
          color={'white'}
        >
          {profile?.designation} ({profile?.stack})
        </Text>
      </Box>
    </Flex>
  </Flex>
  )
}

export default MainSection