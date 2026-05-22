"use client";

import { AspectRatio, Box } from "@chakra-ui/react";
import React, { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import NavBar from "../components/navbar/NavBar";
import { ExternalLink } from "lucide-react";
import { StickyScroll } from "@/components/ui/sticky-scroll-reveal";
import Image from "next/image";
import Link from "next/link";

const MemoNavBar = React.memo(NavBar);

const navlist = [
  { name: "Home", url: "/#" },
  { name: "About", url: "/#" },
  { name: "Projects", url: "/projects" },
  { name: "Contact", url: "/contact" },
];

const categories = [
  { id: null, name: "All" },
  { id: 1, name: "Mini" },
  { id: 2, name: "Medium" },
  { id: 3, name: "Large" },
  { id: 4, name: "Frontend" },
  { id: 5, name: "Backend" },
  { id: 6, name: "Custom Feature" },
];

export default function Project() {
  const [projects, setProjects] = useState([]);
  const [active, setActive] = useState(null);
  const [scrolled, setScrolled] = useState(false);

  // FETCH DATA
  useEffect(() => {
    async function fetchProjects() {
      try {
        const res = await fetch("/api/projects");
        const json = await res.json();
        setProjects(json.data || []);
      } catch (err) {
        console.log("Failed to load projects", err);
      }
    }

    fetchProjects();
  }, []);

  // SCROLL EFFECT FOR NAVBAR GLASS
  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // FILTER
  const filteredProjects = useMemo(() => {
    if (active === null) return projects;
    return projects.filter((p) => p.category.includes(active));
  }, [active, projects]);

  return (
    <Box position="relative" minH="100vh" bg="#050505" color="white">
      {/* NAVBAR (GLASS ON SCROLL) */}
      <Box
        position="fixed"
        w="100%"
        top={0}
        zIndex={100}
        pt={{ base: 4, md: 0 }}
      >
        <Box
          w="100%"
          backdropFilter={scrolled ? "blur(4px)" : "blur(0px)"}
          WebkitBackdropFilter={scrolled ? "blur(4px)" : "blur(0px)"}
          transition="all 0.3s ease"
        >
          <MemoNavBar navlist={navlist} />
        </Box>
      </Box>

      {/* BACKGROUND */}
      <Box
        position="absolute"
        inset={0}
        opacity={0.6}
        bgGradient="radial-gradient(circle at 20% 20%, rgba(168,85,247,0.25), transparent 40%), radial-gradient(circle at 80% 80%, rgba(59,130,246,0.25), transparent 40%)"
      />

      {/* CONTENT */}
      <Box
        maxW="7xl"
        mx="auto"
        px={6}
        pt={{ base: "120px", md: "140px" }}
        pb={32}
        position="relative"
        zIndex={1}
      >
        {/* FILTER BAR */}
        <Box
          position="sticky"
          top={{ base: "90px", md: "110px" }}
          zIndex={50}
          mb={10}
        >
          <Box
            display="flex"
            gap={2}
            flexWrap="wrap"
            bg={{ md: "blackAlpha.500" }}
            backdropFilter="blur(12px)"
            p={3}
            borderRadius={{ base: "md", md: "full" }}
            border={"1px solid rgba(255,255,255,0.08)"}
            w="fit-content"
          >
            {categories.map((c) => {
              const isActive = active === c.id;

              return (
                <Box
                  key={c.name}
                  as="button"
                  onClick={() => setActive(c.id)}
                  px={4}
                  py={1.5}
                  borderRadius="full"
                  fontSize={{ base: "10px", md: "sm" }}
                  bg={isActive ? "white" : "transparent"}
                  color={isActive ? "black" : "whiteAlpha.700"}
                  border="1px solid rgba(255,255,255,0.1)"
                  transition="all 0.2s ease"
                  cursor={"pointer"}
                  _hover={{
                    bg: "rgba(255, 255, 255, 0.2)",
                    transform: "translateY(-2px)",
                  }}
                >
                  {c.name}
                </Box>
              );
            })}
          </Box>
        </Box>

        {/* CARD LIST */}
        <Box display="flex" flexDirection="column" gap={20}>
          {filteredProjects.map((p, i) => (
            <motion.div
              key={p.url}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
            >
              <Box
                display="flex"
                flexDirection={{
                  base: "column",
                  md: i % 2 === 1 ? "row-reverse" : "row",
                }}
                gap={10}
                alignItems="center"
              >
                {/* IMAGE */}
                <Box
                  w="100%"
                  flex="1"
                  transition="all 0.2s ease"
                  _hover={{ transform: "translateY(-2px)" }}
                >
                  <AspectRatio
                    ratio={16 / 9}
                    borderRadius="3xl"
                    overflow="hidden"
                    border="1px solid rgba(255,255,255,0.08)"
                    position="relative"
                  >
                    <Box position="relative" w="100%" h="100%">
                      <Image
                        src={p.bannerimage}
                        alt={p.title}
                        fill
                        style={{ objectFit: "cover" }}
                      />

                      <Box
                        position="absolute"
                        top="12px"
                        right="12px"
                        bg="blackAlpha.700"
                        px={3}
                        py={1}
                        borderRadius="full"
                        fontSize="xs"
                        zIndex={2}
                      >
                        {p.company}
                      </Box>
                    </Box>
                  </AspectRatio>
                </Box>

                {/* TEXT */}
                <Box flex="1">
                  <Box fontSize="xs" color="whiteAlpha.500">
                    {p.subtitle}
                  </Box>

                  <Box fontSize={{ base: "2xl", md: "3xl" }} mt={2}>
                    {p.title}
                  </Box>

                  <Box mt={4} color="whiteAlpha.700">
                    {p.description}
                  </Box>

                  {/* STACKS */}
                  <Box display="flex" flexWrap="wrap" gap={2} mt={6}>
                    {p.stacks?.map((s) => (
                      <Box
                        key={s}
                        px={3}
                        py={1}
                        fontSize="xs"
                        borderRadius="full"
                        border="1px solid rgba(255,255,255,0.12)"
                        bg="whiteAlpha.50"
                        transition="all 0.2s ease"
                        cursor={"pointer"}
                        _hover={{
                          bg: "rgba(255, 255, 255, 0.2)",
                          transform: "translateY(-2px)",
                        }}
                      >
                        {s}
                      </Box>
                    ))}
                  </Box>

                  {/* BUTTONS */}
                  <Box display="flex" gap={3} mt={7}>
                    <Link href={"projects/" + p.url}>
                      <Box
                        bg="white"
                        color="black"
                        px={5}
                        py={2}
                        borderRadius="full"
                        transition="all 0.2s ease"
                        fontSize="sm"
                        _hover={{ bg: "#916CE7", color: "white" }}
                      >
                        Case Study
                      </Box>
                    </Link>
                    {p.doc && (
                      <Link
                        href={p.doc}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Box
                          border="1px solid rgba(255,255,255,0.2)"
                          px={5}
                          py={2}
                          borderRadius="full"
                          display="flex"
                          alignItems="center"
                          gap={2}
                          fontSize="sm"
                          color="whiteAlpha.700"
                          transition="all 0.2s ease"
                          _hover={{ borderColor: "#916CE7", color: "white" }}
                        >
                          Doc
                        </Box>
                      </Link>
                    )}
                    {p.link && (
                      <Link
                        href={p.link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Box
                          border="1px solid rgba(255,255,255,0.2)"
                          px={5}
                          py={2}
                          borderRadius="full"
                          display="flex"
                          alignItems="center"
                          gap={2}
                          fontSize="sm"
                          color="whiteAlpha.700"
                          transition="all 0.2s ease"
                          _hover={{ borderColor: "#916CE7", color: "white" }}
                        >
                          Live <ExternalLink size={14} />
                        </Box>
                      </Link>
                    )}
                  </Box>
                </Box>
              </Box>
            </motion.div>
          ))}
        </Box>
      </Box>

      <div className="w-full py-4">
        <StickyScroll content={content} />
      </div>
    </Box>
  );
}

const content = [
  {
    title: "Full-Stack Product Engineering",
    description:
      "I build scalable, production-ready web applications from the ground up using React.js, Next.js, Node.js, Express.js, Prisma, and PostgreSQL/MySQL. From architecture to deployment, I focus on performance, maintainability, and clean developer experience.",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--blue-500),var(--indigo-600))] text-white !text-xl !font-semibold">
        Full-Stack Engineering
      </div>
    ),
  },
  {
    title: "Modern UI & Frontend Systems",
    description:
      "I create responsive, accessible, and visually polished interfaces with React, Next.js, Tailwind CSS, and Chakra UI. My focus is building fast user experiences that feel smooth, intuitive, and conversion-driven across all devices.",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--blue-500),var(--indigo-600))] text-white !text-xl !font-semibold">
        Modern UI Design
      </div>
    ),
  },
  {
    title: "Backend Architecture & APIs",
    description:
      "I design secure and efficient backend systems with REST APIs, authentication flows, database design, and server-side logic. I work with Prisma ORM, authentication systems, and scalable application structures used in real-world products.",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--emerald-500),var(--teal-600))] text-white !text-xl !font-semibold">
        APIs & Backend Systems
      </div>
    ),
  },
  {
    title: "Business-Focused Development",
    description:
      "Beyond coding, I build solutions that solve business problems. I’ve worked on internal platforms, dashboards, issue trackers, and data-driven applications with a focus on usability, reliability, and long-term scalability for growing businesses.",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--red-500))] text-white !text-xl !font-semibold">
        Building Real Products
      </div>
    ),
  },
];
