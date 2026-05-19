"use client";

import { Box } from "@chakra-ui/react";
import React, { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import NavBar from "../components/navbar/NavBar";
import { ExternalLink } from "lucide-react";
import { StickyScroll } from "@/components/ui/sticky-scroll-reveal";
import Image from "next/image";
import { ThreeDMarquee } from "@/components/ui/3d-marquee";

const MemoNavBar = React.memo(NavBar);

const navlist = [
  { name: "Home", url: "/#" },
  { name: "About", url: "/#" },
  { name: "Projects", url: "/projects" },
  { name: "Contact", url: "/contact" },
];

const categories = [
  { id: null, name: "All" },
  { id: 1, name: "Featured" },
  { id: 2, name: "Mini" },
  { id: 3, name: "Medium" },
  { id: 4, name: "Large" },
  { id: 5, name: "Custom" },
];

const content = [
  {
    title: "Collaborative Editing",
    description:
      "Work together in real time with your team, clients, and stakeholders. Collaborate on documents, share ideas, and make decisions quickly. With our platform, you can streamline your workflow and increase productivity.",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] text-white">
        Collaborative Editing
      </div>
    ),
  },
  {
    title: "Real time changes",
    description:
      "See changes as they happen. With our platform, you can track every modification in real time. No more confusion about the latest version of your project. Say goodbye to the chaos of version control and embrace the simplicity of real-time updates.",
    content: (
      <div className="flex h-full w-full items-center justify-center text-white">
        <Image
          src="/linear.webp"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "Version control",
    description:
      "Experience real-time updates and never stress about version control again. Our platform ensures that you're always working on the most recent version of your project, eliminating the need for constant manual updates. Stay in the loop, keep your team aligned, and maintain the flow of your work without any interruptions.",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] text-white">
        Version control
      </div>
    ),
  },
  {
    title: "Running out of content",
    description:
      "Experience real-time updates and never stress about version control again. Our platform ensures that you're always working on the most recent version of your project, eliminating the need for constant manual updates. Stay in the loop, keep your team aligned, and maintain the flow of your work without any interruptions.",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] text-white">
        Running out of content
      </div>
    ),
  },
];

const images = [
  "https://assets.aceternity.com/cloudinary_bkp/3d-card.png",
  "https://assets.aceternity.com/animated-modal.png",
  "https://assets.aceternity.com/animated-testimonials.webp",
  "https://assets.aceternity.com/cloudinary_bkp/Tooltip_luwy44.png",
  "https://assets.aceternity.com/github-globe.png",
  "https://assets.aceternity.com/glare-card.png",
  "https://assets.aceternity.com/layout-grid.png",
  "https://assets.aceternity.com/flip-text.png",
  "https://assets.aceternity.com/hero-highlight.png",
  "https://assets.aceternity.com/carousel.webp",
  "https://assets.aceternity.com/placeholders-and-vanish-input.png",
  "https://assets.aceternity.com/shooting-stars-and-stars-background.png",
  "https://assets.aceternity.com/signup-form.png",
  "https://assets.aceternity.com/cloudinary_bkp/stars_sxle3d.png",
  "https://assets.aceternity.com/spotlight-new.webp",
  "https://assets.aceternity.com/cloudinary_bkp/Spotlight_ar5jpr.png",
  "https://assets.aceternity.com/cloudinary_bkp/Parallax_Scroll_pzlatw_anfkh7.png",
  "https://assets.aceternity.com/tabs.png",
  "https://assets.aceternity.com/cloudinary_bkp/Tracing_Beam_npujte.png",
  "https://assets.aceternity.com/cloudinary_bkp/typewriter-effect.png",
  "https://assets.aceternity.com/glowing-effect.webp",
  "https://assets.aceternity.com/hover-border-gradient.png",
  "https://assets.aceternity.com/cloudinary_bkp/Infinite_Moving_Cards_evhzur.png",
  "https://assets.aceternity.com/cloudinary_bkp/Lamp_hlq3ln.png",
  "https://assets.aceternity.com/macbook-scroll.png",
  "https://assets.aceternity.com/cloudinary_bkp/Meteors_fye3ys.png",
  "https://assets.aceternity.com/cloudinary_bkp/Moving_Border_yn78lv.png",
  "https://assets.aceternity.com/multi-step-loader.png",
  "https://assets.aceternity.com/vortex.png",
  "https://assets.aceternity.com/wobble-card.png",
  "https://assets.aceternity.com/world-map.webp",
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
      <Box position="fixed" w="100%" top={0} zIndex={100}>
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
            bg="blackAlpha.500"
            backdropFilter="blur(12px)"
            p={3}
            borderRadius="full"
            border="1px solid rgba(255,255,255,0.08)"
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
                  fontSize="sm"
                  bg={isActive ? "white" : "transparent"}
                  color={isActive ? "black" : "whiteAlpha.700"}
                  border="1px solid rgba(255,255,255,0.1)"
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
                <Box flex="1">
                  <Box
                    position="relative"
                    overflow="hidden"
                    borderRadius="3xl"
                    border="1px solid rgba(255,255,255,0.08)"
                    height={{ base: "240px", md: "340px" }}
                  >
                    <Box
                      position="absolute"
                      inset={0}
                      bgGradient="linear(to-br, purple.500, blue.500)"
                      opacity={0.3}
                    />

                    <img
                      src={p.bannerimage}
                      alt={p.title}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        position: "absolute",
                      }}
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
                    >
                      {p.company}
                    </Box>
                  </Box>
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
                      >
                        {s}
                      </Box>
                    ))}
                  </Box>

                  {/* BUTTONS */}
                  <Box display="flex" gap={3} mt={7}>
                    <Box
                      as="a"
                      href={"projects/" + p.url}
                      bg="white"
                      color="black"
                      px={5}
                      py={2}
                      borderRadius="full"
                      fontSize="sm"
                    >
                      Case Study
                    </Box>

                    {p.link && (
                      <Box
                        as="a"
                        href={p.link}
                        target="_blank"
                        border="1px solid rgba(255,255,255,0.2)"
                        px={5}
                        py={2}
                        borderRadius="full"
                        display="flex"
                        alignItems="center"
                        gap={2}
                        fontSize="sm"
                        color="whiteAlpha.700"
                      >
                        Live <ExternalLink size={14} />
                      </Box>
                    )}
                  </Box>
                </Box>
              </Box>
            </motion.div>
          ))}
        </Box>
      </Box>
      {/* <div className="mx-auto my-10 max-w-full rounded-3xl bg-gray-950/5 p-2 ring-1 ring-neutral-700/10 dark:bg-neutral-800">
        <ThreeDMarquee images={images} />
      </div> */}
      <div className="w-full py-4">
        <StickyScroll content={content} />
      </div>
    </Box>
  );
}
