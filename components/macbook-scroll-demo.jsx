"use client";
import React from "react";
import { MacbookScroll } from "@/components/ui/macbook-scroll";
import { Box } from "@chakra-ui/react";
import NavBar from "@/app/components/navbar/NavBar";
const navlist = [
  { name: "Home", url: "/#" },
  { name: "About", url: "/#" },
  { name: "Projects", url: "/projects" },
  { name: "Contact", url: "/contact" },
];

export default function MacbookScrollDemo({ title, src }) {
  return (
    <div className="relative w-full overflow-hidden bg-[#0B0B0F] dark:bg-[#0B0B0F]">
      <Box
        w="100%"
        pt={{ base: 4, md: 0 }}
        bottom={{ base: "0", md: "unset" }}
        zIndex={100}
      >
        <NavBar navlist={navlist} />
      </Box>{" "}
      <Box
        pointerEvents="none"
        zIndex={0}
        position="absolute"
        inset={0}
        opacity={0.45}
        bgGradient="radial-gradient(circle at 25% 35%, rgba(99, 102, 241, 0.45), transparent 35%), radial-gradient(circle at 70% 65%, rgba(139, 92, 246, 0.35), transparent 40%)"
        filter="blur(35px)"
      />
      <Box pt={{ base: "0px", md: "4.23vw" }}>
        <MacbookScroll
          title={<span>{title}</span>}
          src={src}
          showGradient={false}
        />
      </Box>
    </div>
  );
}
