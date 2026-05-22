"use client";
import BackgroundGradientAnimationDemo from "@/components/background-gradient-animation-demo";
import { ThreeDMarquee } from "@/components/ui/3d-marquee";
import { BackgroundGradientAnimation } from "@/components/ui/background-gradient-animation";
import { StickyScroll } from "@/components/ui/sticky-scroll-reveal";
import { Box } from "@chakra-ui/react";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import NavBar from "../components/navbar/NavBar";
import TerminalDemo from "@/components/terminal-demo";
import { Terminal } from "@/components/ui/terminal";
import ContactForm from "../components/pagewisecomponent/contact/ContactForm";

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

const navlist = [
  { name: "Home", url: "/#" },
  { name: "About", url: "/#" },
  { name: "Projects", url: "/projects" },
  { name: "Contact", url: "/contact" },
];

function Page() {
  const [done, setDone] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDone(true);
    }, 7000); // ⬅️ 5 seconds flip

    return () => clearTimeout(timer);
  }, []);
  return (
    <>
      <Box
        position="fixed"
        w="100%"
        top={0}
        zIndex={100}
        pt={{ base: 4, md: 0 }}
      >
        <Box
          w="100%"
          backdropFilter={"blur(0px)"}
          WebkitBackdropFilter={"blur(0px)"}
          transition="all 0.3s ease"
        >
          <NavBar navlist={navlist} />
        </Box>
      </Box>

      <BackgroundGradientAnimation>
        <div className="absolute z-50 inset-0 flex flex-col md:flex-row gap-6 md:gap-12 items-center justify-center text-white font-bold px-4 md:px-10 pointer-events-none">
          {/* KEEP AS-IS */}
          <p className="bg-clip-text text-center text-transparent drop-shadow-2xl !text-9xl bg-gradient-to-b from-white/80 to-white/20">
            Lets Talk
          </p>

          {/* RESPONSIVE FIX ONLY HERE */}
          <div className="relative w-full max-w-[520px] md:w-[600px] aspect-[16/9] md:aspect-[16/10] [perspective:1200px]">
            {/* TERMINAL */}
            <div
              className={`absolute inset-0 transition-all duration-700 [transform-style:preserve-3d] [backface-visibility:hidden] ${
                done
                  ? "[transform:rotateY(180deg)] opacity-0"
                  : "[transform:rotateY(0deg)] opacity-100"
              }`}
            >
              <div className="w-full min-h-[300px] h-full rounded-xl overflow-hidden">
                <Terminal
                  commands={["npm install", "npm run dev"]}
                  outputs={{
                    0: ["added 124 packages in 6s", "found 0 vulnerabilities"],
                    1: [
                      "▲ Next.js 15.1.7",
                      "✓ Compiled successfully",
                      "✓ Ready at http://localhost:3000",
                    ],
                  }}
                  typingSpeed={45}
                  delayBetweenCommands={1000}
                />
              </div>
            </div>

            {/* FORM */}
            <div
              className={`absolute inset-0 transition-all duration-700 [transform-style:preserve-3d] [backface-visibility:hidden] ${
                done
                  ? "[transform:rotateY(0deg)] opacity-100"
                  : "[transform:rotateY(-180deg)] opacity-0"
              }`}
            >
              <div className="w-full h-full flex items-center justify-center p-3">
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </BackgroundGradientAnimation>
    </>
  );
}

export default Page;
