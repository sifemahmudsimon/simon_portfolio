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
  const [disabled, setDisabled] = useState({
    message: "Send Message",
    disable: false,
  });

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async () => {
    setDisabled((prev) => ({
      ...prev,
      message: "Sending...",
      disable: true,
    }));

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, message }),
      });

      if (res.ok) {
        setDisabled((prev) => ({
          ...prev,
          message: "Message sent!",
          disable: true, // keep disabled OR false depending on UX
        }));
      } else {
        setDisabled((prev) => ({
          ...prev,
          message: "Try Again",
          disable: false,
        }));
      }
    } catch (error) {
      console.log(error);

      setDisabled((prev) => ({
        ...prev,
        message: "Try Again Later",
        disable: false,
      }));
    }
  };

  useEffect(() => {
    const t = setTimeout(() => setDone(true), 5000);
    return () => clearTimeout(t);
  }, []);

  return (
    <Flex
      w="100%"
      maxW="600px"
      mx="auto"
      px={4}
      position="relative"
      sx={{ perspective: "1200px" }}
      aspectRatio={{ base: "4/3", md: "16/10" }}
    >
      {/* INNER WRAPPER */}
      <Box w="100%" h="100%" position="relative">
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
          pointerEvents={done ? "auto" : "none"}
        >
          {/* CARD */}
          <Box
            w="100%"
            h="100%"
            borderRadius="2xl"
            p={{ base: 4, md: 8 }}
            display="flex"
            alignItems="center"
            justifyContent="center"
            bg="gray.900"
            border="1px solid"
            borderColor="gray.700"
          >
            <VStack gap={4} w="100%" maxW="420px" align="stretch">
              <Heading size="lg" color="white">
                Get in Touch
              </Heading>

              {/* INPUT ROW */}
              <Flex direction={{ base: "column", md: "row" }} gap={4}>
                <Input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
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
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
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
                value={message}
                onChange={(e) => setMessage(e.target.value)}
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
                  disabled={disabled.disable}
                  onClick={handleSubmit}
                  flex={1}
                  variant={"outline"}
                  borderRadius="md"
                  color="white"
                  _hover={{ bg: "#916CE7" }}
                >
                  {disabled.message}
                </Button>

                <Button
                  px={10}
                  variant={"outline"}
                  borderRadius="md"
                  color="white"
                  _hover={{ bg: "#916CE7" }}
                >
                  Whatsapp
                </Button>
              </Flex>
            </VStack>
          </Box>
        </Box>
      </Box>
    </Flex>
  );
}
