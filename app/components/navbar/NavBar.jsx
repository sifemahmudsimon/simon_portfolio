"use client";
import { Box, Container, Flex, Tabs, TabsList, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { Poppins } from "next/font/google";
import { motion } from "framer-motion";
import { usePathname, useRouter } from "next/navigation";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"], // Adding weights for Poppins
});

const NavBar = ({ navlist, homePageNav, setClickedItem, isHomeSection }) => {
  const MotionText = motion(Text);

  const router = useRouter();
  const pathname = usePathname();

  const [activeIndex, setActiveIndex] = useState(
    navlist.findIndex((item) => item.url === pathname)
  );


  useEffect(() => {
    if (homePageNav) {

      setActiveIndex(
        navlist.findIndex((item) => item.name.toLowerCase() === homePageNav)
      );
    }
  }, [homePageNav]);

  const redirectUrl = (data, index) => {
    if (typeof window !== "undefined") {  // Ensure this is only run in the browser
      sessionStorage.setItem('navClick', data.name);
    }
    if (typeof setClickedItem === "function") {
      setClickedItem(data.name);
      
    }
    if (pathname !== data?.url) {
      router.push(data?.url);
    }
  };

  return (
    <Flex
      pt={{ lg: isHomeSection ? "1vw" : "2vw" }}
      transition="padding-top 0.1s ease-in-out"
    >
      <Container
        className={poppins.className}
        sx={{ fontFamily: "var(--font-poppins), sans-serif" }}
        display={"flex"}
        alignItems={"center"}
        bg={"#101010"}
        maxW={{ lg: isHomeSection ? "43.35%" : "93.4vw" }}
        h={{ lg: "4.23vw" }}
        p={"0.53vw"}
        border={"0.066vw solid rgba(255, 255, 255, 0.06)"}
        borderRadius={isHomeSection ? "5.29vw" : "1.058vw"}
        boxShadow={"0px 0.93vw 2.01vw 0px rgba(0, 0, 0, 0.25)"}
        transition="max-width 0.3s ease-in-out 0.1s"
        justifyContent={"end"}
      >
        <MotionText
          color="white"
          flex={1}
          initial={{ opacity: 0, display: "none" }}
          animate={{
            opacity: isHomeSection ? 0 : 1,
            display: isHomeSection ? "none" : "block",
          }}
          transition={{
            opacity: { duration: 0.3, ease: "easeInOut", delay: 0.3 },
            display: { duration: 0.3, ease: "easeInOut", delay: 0.3 },
          }}
          w={{ md: "10.45vw" }}
          fontWeight={200}
          fontSize={"1.587vw"}
          ml={"2.381vw"}
        >
          S M Simon
        </MotionText>

        {/* Dynamically setting key to trigger re-render */}
        <Tabs.Root
          key={activeIndex}
          value={activeIndex !== -1 ? activeIndex.toString() : "0"} // Ensure valid activeIndex
          onValueChange={(newIndex) => setActiveIndex(parseInt(newIndex, 10))} // Update activeIndex when the tab changes
          variant="plain"
        >
          <Tabs.List>
            {navlist.map((data, index) => (
              <Tabs.Trigger
                onClick={() => redirectUrl(data, index)}
                bg={"transparent"}
                key={index}
                value={index.toString()}
                color={activeIndex === index ? "#FFFFFF" : "#CCCCCC"}
                fontSize={{ lg: "1.06vw" }}
                fontWeight={activeIndex === index ? 400 : 300}
                lineHeight={"1.587vw"}
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
              rounded={isHomeSection ? "5.291vw" : "12px"}
              bg={"#1D1D1D"}
            />
          </Tabs.List>
        </Tabs.Root>
      </Container>
    </Flex>
  );
};

export default NavBar;
