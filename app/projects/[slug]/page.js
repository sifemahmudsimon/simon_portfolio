import NavBar from '@/app/components/navbar/NavBar'
import { Box, Flex } from '@chakra-ui/react'
import React from 'react'

const navlist = [
    { name: "Home", url: "/#" },
    // { name: "About", url: "/?about" },
    { name: "About", url: "/#" },
    { name: "Projects", url: "/projects" },
    { name: "Contact", url: "/contact" },
  ];
  
const page = () => {
  return (
    <Box position="relative">
    <Box position={"fixed"} w={"100%"} zIndex={100}>
      <Box
        position="fixed"
        w="100%"
        top={{ md: "0" }}
        bottom={{ base: "0", md: "unset" }}
        zIndex={100}
      >
        <NavBar navlist={navlist} />
      </Box>
    </Box>

    <Flex bg="black" className="simon" color={'white'} pt={"8vw"} px={"3.25vw"}  h={{md:"100vh"}}>
    <Box bg={'red'} flex={1}>
      Image
    </Box>
    <Box w={'50%'}>
    Desciption asdas
    </Box>
    </Flex>
  </Box>
  )
}

export default page