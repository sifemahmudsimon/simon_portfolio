import { Box, Container, Flex, Tabs, TabsList, Text } from '@chakra-ui/react';
import React from 'react';
import { Poppins } from "next/font/google"; 

// Load the Poppins font
const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],  // Adding weights for Poppins
});

const navlist=[
  {name:'Home', url:'/#'},
  {name:'About', url:'/#'},
  {name:'Projects', url:'/#'},
  {name:'Contact', url:'/#'}
]

const NavBar = () => {
  const landing = true;
  return (
    <Flex pt={{lg: '2vh'}} >
       <Container
      // Apply the font to the container using the Poppins CSS variable
      className={poppins.className} 
      sx={{ fontFamily: "var(--font-poppins), sans-serif" }}  // Fallback to sans-serif
      display={'flex'}
      alignItems={'center'}
      bg={'#101010'} 
      maxW={{lg: landing ? '42.92%' : '93.4%'}} 
      h={{lg: '4.23vw'}} 
      
      p={'0.53vw'}
      border={'0.066vw solid #232323'}
      borderRadius={'5.29vw'}
      boxShadow={'0px 0.93vw 2.01vw 0px rgba(0, 0, 0, 0.25)'}
    >
     <Tabs.Root defaultValue="members" variant="plain">
      <Tabs.List  >
       {navlist.map(data=>(
         <Tabs.Trigger 
         value={data?.name} 
         color={'#FFFFFF'} fontSize={{lg:' 1.06vw'}} fontWeight={300} lineHeight={'24px'}
         w={{md:'10.45vw'}} h={{md:' 3.17vw '}} justifyContent={'center'} roundedLeft={'full'}  roundedRight={'full'}
         >
        {data?.name}
       </Tabs.Trigger>
       ))}
       
        <Tabs.Indicator roundedLeft={'full'} border={'0.066vw solid #232323'}  roundedRight={'full'} bg={'#1D1D1D'}/>
      </Tabs.List>
     
    </Tabs.Root>
    </Container>
    </Flex>
   
  );
};

export default NavBar;
