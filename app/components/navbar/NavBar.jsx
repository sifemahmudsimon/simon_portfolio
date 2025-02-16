'use client'
import { Box, Container, Flex, Tabs, TabsList, Text } from "@chakra-ui/react";
import React, { act, useEffect, useState } from "react";
import { Poppins } from "next/font/google";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"], // Adding weights for Poppins
});



const NavBar = ({activeSection,navlist}) => {
  const MotionText = motion(Text);
  const [landing,setLanding] = useState(true);
console.log(landing)
useEffect(() => {
  // Set a timeout to delay the state change by 1 second (1000ms)
  const timer = setTimeout(() => {
    if (activeSection.includes('home')) {
      setLanding(true);
    } else {
      setLanding(false);
    }
  }, 100); // Adjust the delay as needed

  // Cleanup function to clear the timer if the component unmounts before the timeout
  return () => clearTimeout(timer);
}, [activeSection]);

const router = useRouter()
const redirectUrl= (url)=> {
  router.push(url)
}

  console.log(activeSection)
  return (
    <Flex
      pt={{ lg: landing ? "1vw" : "2vw" }}
      transition="padding-top 0.1s ease-in-out"
    >
      <Container
        // Apply the font to the container using the Poppins CSS variable
        className={poppins.className}
        sx={{ fontFamily: "var(--font-poppins), sans-serif" }} // Fallback to sans-serif
        display={"flex"}
        alignItems={"center"}
        bg={"#101010"}
        maxW={{ lg: landing ? "43.35%" : "93.4vw" }}
        h={{ lg: "4.23vw" }}
        p={"0.53vw"}
        border={"0.066vw solid rgba(255, 255, 255, 0.06)"}
        borderRadius={landing ? "5.29vw" : "1.058vw"}
        boxShadow={"0px 0.93vw 2.01vw 0px rgba(0, 0, 0, 0.25)"}
        transition="max-width 0.3s ease-in-out 0.1s"
        justifyContent={"end"}
      >
        <MotionText
      color="white"
      flex={1}
      initial={{ opacity: 0,display:'none' }}
      animate={{ opacity: landing ? 0 : 1,     display:landing ? 'none':'block' }}
      transition={{
        opacity: { duration: 0.3, ease: "easeInOut", delay: 0.3 }, 
        display: { duration: 0.3, ease: "easeInOut", delay: 0.3 },
   
      }}
     
      // display={landing ? "none" : "block"}
      w={{ md: "10.45vw" }}
      // textAlign={'center'}
      fontWeight={200}
      fontSize={'1.587vw'}
      ml={'2.381vw'}

    >
      S M Simon
    </MotionText>
        <Tabs.Root defaultValue="Home" variant="plain">
          <Tabs.List>
            {navlist.map((data, index) => (
              <Tabs.Trigger
              onClick={()=>redirectUrl(data.url)}
              defaultValue={index[2]}
              bg={'transparent'}
                key={index}
                value={data?.name}
                color={"#FFFFFF"}
                fontSize={{ lg: " 1.06vw" }}
                fontWeight={200}
                lineHeight={'1.587vw'}
                w={{ md: "10.45vw" }}
                h={{ md: " 3.17vw " }}
                justifyContent={"center"}
                roundedLeft={"full"}
                roundedRight={"full"}
              >
                {data?.name}
              </Tabs.Trigger>
            ))}

            <Tabs.Indicator
              
              border={"0.066vw solid #232323"}
              rounded={landing ? '5.291vw':'12px'}
              bg={"#1D1D1D"}
              
              
            />
          </Tabs.List>
        </Tabs.Root>
      </Container>
    </Flex>
  );
};

export default NavBar;
