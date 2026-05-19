"use client";

import { useEffect, useState } from "react";
import {
  Box,
  Button,
  Input,
  Textarea,
  VStack,
  Heading,
  Flex,
} from "@chakra-ui/react";
import { Terminal } from "@/components/ui/terminal";

export default function ContactFlip() {
  const [done, setDone] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setDone(true), 5000);
    return () => clearTimeout(t);
  }, []);

  return (
    <Flex
      w="600px"
      h="350px"
      mx="auto"
      position="relative"
      sx={{ perspective: "1200px" }}
    >
      {/* ================= TERMINAL ================= */}
      <Box
        position="absolute"
        inset="0"
        w="100%"
        h="100%"
        sx={{
          transformStyle: "preserve-3d",
          backfaceVisibility: "hidden",
          WebkitBackfaceVisibility: "hidden",
        }}
        transition="0.7s"
        transform={done ? "rotateY(180deg)" : "rotateY(0deg)"}
        pointerEvents={done ? "none" : "auto"} // 🔥 IMPORTANT FIX
      >
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
      </Box>

      {/* ================= FORM ================= */}
      <Box
        position="absolute"
        inset="0"
        w="100%"
        h="100%"
        sx={{
          transformStyle: "preserve-3d",
          backfaceVisibility: "hidden",
          WebkitBackfaceVisibility: "hidden",
        }}
        transition="0.7s"
        transform={done ? "rotateY(0deg)" : "rotateY(-180deg)"}
        pointerEvents={done ? "auto" : "none"} // 🔥 IMPORTANT FIX
      >
        <Box
          w="600px"
          h="350px"
          mx="auto"
          position="relative"
          sx={{ perspective: "1200px" }}
        >
          {/* ================= TERMINAL ================= */}
          <Box
            position="absolute"
            inset="0"
            w="100%"
            h="100%"
            sx={{
              transformStyle: "preserve-3d",
              backfaceVisibility: "hidden",
              WebkitBackfaceVisibility: "hidden",
            }}
            transition="0.7s"
            transform={done ? "rotateY(180deg)" : "rotateY(0deg)"}
            pointerEvents={done ? "none" : "auto"}
            zIndex={done ? 0 : 2}
          >
            <Terminal
              commands={["npm install", "npm run dev"]}
              outputs={{
                0: ["added 124 packages in 6s", "found 0 vulnerabilities"],
                1: ["✓ Compiled successfully", "✓ Ready at localhost:3000"],
              }}
              typingSpeed={45}
              delayBetweenCommands={1000}
            />
          </Box>

          {/* ================= FORM ================= */}
          <Box
            position="absolute"
            inset="0"
            w="100%"
            h="100%"
            sx={{
              transformStyle: "preserve-3d",
              backfaceVisibility: "hidden",
              WebkitBackfaceVisibility: "hidden",
            }}
            transition="0.7s"
            transform={done ? "rotateY(0deg)" : "rotateY(-180deg)"}
            pointerEvents={done ? "auto" : "none"}
            zIndex={done ? 2 : 0}
          >
            {/* ===== CLEAN SOLID CARD ===== */}
            <Box
              w="100%"
              h="100%"
              borderRadius="2xl"
              p={8}
              display="flex"
              alignItems="center"
              justifyContent="center"
              bg="gray.900"
              border="1px solid"
              borderColor="gray.700"
            >
              <VStack gap={4} w="100%" align="stretch">
                <Heading size="lg" color="white">
                  Get in Touch
                </Heading>

                <Flex gap={4}>
                  <Input
                    placeholder="Name"
                    bg="gray.800"
                    color="white"
                    border="1px solid"
                    borderColor="gray.700"
                    _focus={{
                      borderColor: "cyan.400",
                      boxShadow: "0 0 0 1px #22d3ee",
                    }}
                  />

                  <Input
                    placeholder="Email"
                    bg="gray.800"
                    color="white"
                    border="1px solid"
                    borderColor="gray.700"
                    _focus={{
                      borderColor: "cyan.400",
                      boxShadow: "0 0 0 1px #22d3ee",
                    }}
                  />
                </Flex>

                <Textarea
                  placeholder="Message"
                  bg="gray.800"
                  color="white"
                  border="1px solid"
                  borderColor="gray.700"
                  _focus={{
                    borderColor: "cyan.400",
                    boxShadow: "0 0 0 1px #22d3ee",
                  }}
                  resize="none"
                  minH="110px"
                />

                <Flex gap={4}>
                  <Button
                    flex={1}
                    borderRadius="xl"
                    bg="cyan.500"
                    color="black"
                    _hover={{ bg: "cyan.400" }}
                  >
                    Send Message →
                  </Button>
                  <Button
                    px={10}
                    borderRadius="xl"
                    bg="cyan.500"
                    color="black"
                    _hover={{ bg: "cyan.400" }}
                  >
                    Whatsapp
                  </Button>
                </Flex>
              </VStack>
            </Box>
          </Box>
        </Box>
      </Box>
    </Flex>
  );
}
