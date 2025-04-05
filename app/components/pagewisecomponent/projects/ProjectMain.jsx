"use client";
import { Box, Flex, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import ProjectCards from "./ProjectCards";

const ProjectMain = ({ category_types, projects }) => {
  const [activeCategory, setActiveCategory] = useState(null);
  const [categoryClick, setCategoryClick] = useState(null);
  console.log(categoryClick);
  return (
    <Flex
      flexDir={{ base: "column", md: "row" }}
      bg="black"
      w={"100%"}
      minH={"100vh"}
      pt={{base:'16px',md:"8vw"}}
      pb={{base:'100px',md:"4vw"}}
      px={{base:'16px',md:"3.25vw"}}
      color={"white"}
    >
      <Flex
        flexDir={"column"}
        gap={{base:categoryClick && '16px',md:"16px"}}
        p={{ base: "16px", md: "1vw" }}
        mb={{base:'16px',md:0}}
        position={{ md: "fixed" }}
        w={{ md: "20vw" }}
        h={{ md: "80vh" }}
        boxShadow={"0px 0px 0px 1px rgba(255, 255, 255, 0.06)"}
        borderRadius={{ base: "12px", md: "1.32vw" }}
        bg={"#101010"}
      >
        <Text
          onClick={() => setCategoryClick((prev) => !prev)}
          w={"100%"}
          // borderRadius={{base:'8px',md:'0.79vw'}}
          // bg={'#191919'}
          textAlign={{ base: "center", md: "start" }}
          p={{ base: "16px", md: "1.5vw" }}
          borderBottom={{
            base: categoryClick && "1px solid rgba(255, 255, 255, 0.25)",
            md: "1px solid rgba(255, 255, 255, 0.25)",
          }}
          mb={{ md: "16px" }}
          fontSize={{ base: "20px", md: "1.06vw" }}
          fontWeight={{ base: 200, md: 500 }}
          letterSpacing={{ base: "3.5px", md: "0.2vw" }}
         
        >
          CATEGORIES
        </Text>
        <Flex
          // display={{ base: categoryClick ? "flex" : "none", md: "flex" }}
          flexDir={{ base: "column", md: "column" }}
          justifyContent={"center"}
          gap={"16px"}
          h={{base:categoryClick ? 'auto' : '0',md:'auto'}}
          opacity={{base:categoryClick ? '1' : '0',md:1}}
          transition="all 1s ease"
          overflow={'hidden'}
        >
          <Text
            cursor={"pointer"}
            onClick={() => {setActiveCategory(null)
              setCategoryClick(false)
            }}
            w={{ md: "100%" }}
            borderRadius={{ base: "8px", md: "0.79vw" }}
            px={{base:'8px',md:"1.5vw"}}
            py={{base:'8px',md:"1vw"}}
            bg={activeCategory === null ? "#916ce7" : "#191919"}
            fontSize={{ base: "12px", md: "1.06vw" }}
            fontWeight={300}
            letterSpacing={"2px"}
          >
            All Projects
          </Text>
          {category_types.map((data, index) => (
            <Text
              key={index}
              cursor={"pointer"}
              onClick={() => {setActiveCategory(data?.type)
                setCategoryClick(false)
              }}
              w={{ md: "100%" }}
              borderRadius={{ base: "8px", md: "0.79vw" }}
              px={"1.5vw"}
              py={"1vw"}
              bg={index === activeCategory - 1 ? "#916ce7" : "#191919"}
              fontSize={{ base: "12px", md: "1.06vw" }}
              fontWeight={300}
              letterSpacing={"2px"}
            >
              {data?.name}
            </Text>
          ))}
        </Flex>
      </Flex>
      <Flex
        w={"100%"}      
        pl={{md:"22vw"}}
        flexDir={{base:'column',md:"row"}}
        justifyContent={"end"}
        flexWrap={{md:"wrap"}}
        gap={"4vw"}
      >
        {activeCategory === null &&
          projects?.data?.map((data) => <ProjectCards {...{ data }} />)}

        {activeCategory !== null &&
          projects?.data
            ?.filter((data) => data.category.includes(activeCategory))
            .map((data) => <ProjectCards key={data.id} {...{ data }} />)}
      </Flex>
    </Flex>
  );
};

export default ProjectMain;
