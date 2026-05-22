"use client";

import { Box, Container, Flex, Tabs, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { Poppins } from "next/font/google";
import { motion } from "framer-motion";
import { usePathname, useRouter } from "next/navigation";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const NavBar = ({ navlist, homePageNav, setClickedItem, isHomeSection }) => {
  const MotionText = motion(Text);

  const router = useRouter();
  const pathname = usePathname();

  // ✅ smarter active detection (no index dependency)
  const getActiveIndex = () => {
    return navlist.findIndex((item) => {
      if (item.url === "/projects") {
        return pathname.startsWith("/projects");
      }
      return item.url === pathname;
    });
  };

  const [activeIndex, setActiveIndex] = useState(getActiveIndex());

  // update when route changes
  useEffect(() => {
    setActiveIndex(getActiveIndex());
  }, [pathname]);

  // home page override (your existing logic kept)
  useEffect(() => {
    if (homePageNav) {
      setActiveIndex(
        navlist.findIndex((item) => item.name.toLowerCase() === homePageNav)
      );
    }
  }, [homePageNav]);

  const redirectUrl = (data) => {
    if (typeof window !== "undefined") {
      sessionStorage.setItem("navClick", data.name);
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
      pt={{ md: isHomeSection ? "1vw" : "2vw" }}
      pb={{ base: "8px", md: "0px" }}
      px={{ base: "16px", md: "none" }}
    >
      <Container
        className={poppins.className}
        sx={{ fontFamily: "var(--font-poppins), sans-serif" }}
        display="flex"
        alignItems="center"
        bg="#101010"
        maxW={{ md: isHomeSection ? "43.35%" : "93.4vw" }}
        h={{ base: "76px", md: "4.23vw" }}
        p="0.53vw"
        border="0.066vw solid rgba(255, 255, 255, 0.06)"
        borderRadius={{
          base: "12px",
          md: isHomeSection ? "5.29vw" : "1.058vw",
        }}
        justifyContent={{ base: "center", md: "end" }}
      >
        <MotionText
          display={{ base: "none !important", md: "block !important" }}
          color="white"
          flex={1}
          fontWeight={200}
          fontSize={"1.587vw"}
          ml={"2.381vw"}
        >
          S M Simon
        </MotionText>

        <Tabs.Root
          key={activeIndex}
          value={activeIndex !== -1 ? activeIndex.toString() : "0"}
          onValueChange={(newIndex) => setActiveIndex(parseInt(newIndex, 10))}
          variant="plain"
        >
          <Tabs.List>
            {navlist.map((data, index) => (
              <Tabs.Trigger
                key={index}
                value={index.toString()}
                onClick={() => redirectUrl(data)}
                bg="transparent"
                color={activeIndex === index ? "#FFFFFF" : "#CCCCCC"}
                fontSize={{ md: "1.06vw" }}
                fontWeight={activeIndex === index ? 400 : 300}
                w={{ md: "10.45vw" }}
                h={{ md: "3.17vw" }}
                justifyContent="center"
                rounded="full"
              >
                {data?.name}
              </Tabs.Trigger>
            ))}

            <Tabs.Indicator
              border="0.066vw solid #232323"
              rounded={isHomeSection ? "5.291vw" : "12px"}
              bg="#1D1D1D"
            />
          </Tabs.List>
        </Tabs.Root>
      </Container>
    </Flex>
  );
};

export default NavBar;
