import { Box, Text } from "@chakra-ui/react";
import React from "react";

const Skills = () => {
  return (
    <Box
    p={{base:'32px',md:'none'}}
    position={'relative'}
    flex={1}
    w={"100%"}
    bg={{base:"linear-gradient(45deg, rgba(255, 255, 255, 0.2) 25%, rgba(255, 255, 255, 0.4) 50%, rgba(255, 255, 255, 0.2) 75%)",md:"#101010"}}
    // boxShadow={"0px 0px 15px rgba(255, 255, 255, 0.1)"}
    borderRadius={{base:'12px',md:'1.32vw'}}
    overflow={'hidden'}
    transition="all 0.3s ease-in-out"  
    _hover={{
      bg: "linear-gradient(45deg, rgba(255, 255, 255, 0.2) 25%, rgba(255, 255, 255, 0.4) 50%, rgba(255, 255, 255, 0.2) 75%)",
      boxShadow: "0px 4px 20px rgba(255, 255, 255, 0.15)",  // Adds a shadow on hover
      transform: "scale(1.025)" , // Slight zoom effect on hover
      backgroundSize: "200% 100%", // Start with background larger than the container
              backgroundPosition: "top center",
    }}
    cursor={'pointer'}
  >
  <Text
    fontWeight={"900"}
    fontSize={{base:'56px',md:'5vw'}}
    color={"rgba(255, 255, 255, 0.35)"}
    position={{md:'absolute'}}
    bottom={{md:'6vw'}} 
    left={{md:'7.65vw'}} 
    transform={{md:'translate(-50%, -50%) rotate(-90deg)'}} 
    whiteSpace="nowrap"
    textAlign={{base:'center',md:'none'}}
  > 
    SKILLSETS
  </Text>
</Box>

  );
};

export default Skills;
