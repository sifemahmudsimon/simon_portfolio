import { Box, Flex } from "@chakra-ui/react";
import React from "react";
import Profile from "./about/Profile";
import WorkGallery from "./about/WorkGallery";
import ContactMe from "./about/ContactMe";
import MyStacks from "./about/MyStacks";
import WorkTogether from "./about/WorkTogether";
import ImageGallery from "./about/ImageGallery";
import Journey from "./about/Journey";
import Skills from "./about/Skills";

const About = ({profile,journey,stacks,projects,gallary}) => {
  return (
    <Flex
      alignItems={"end"}
      pt={"8vw"}
      h={"100%"}
      px={"0.53vw"}
      pb={{base:'100px',md:"1.92vw"}}
      maxW={"94.5vw"}
      mx={"auto"}
    >
      <Flex flexDir={{base:'column',md:'row'}} w={"100%"} h={"100%"} gap={'0.79vw'}>
        <Flex flexDir={'column'} w={{md:'30.64vw'}} gap={'0.79vw'} >
          <Profile {...{profile}}/>
          <WorkGallery {...{projects}}/>
        </Flex>
        <Flex flexDir={'column'} w={{md:'22.67vw'}} gap={'0.79vw'} >
          <ContactMe/>
           <MyStacks {...{stacks}}/>
          <WorkTogether social={profile?.social}/> 
        </Flex>
        <Flex flexDir={'column'} w={{md:'28.25vw'}} gap={'0.79vw'} >
          <ImageGallery {...{gallary}}/>
          <Journey {...{journey}}/>
        </Flex>
        <Flex flexDir={'column'} w={{base:'100%',md:'9.59vw'}} gap={'0.79vw'} >
          <Skills/>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default About;
