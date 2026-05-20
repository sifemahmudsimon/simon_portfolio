import { Box, Text, VStack, HStack, Button } from "@chakra-ui/react";
import React, { useState } from "react";

const Skills = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        "React",
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "Material UI",
        "Shadcn",
        "Chakra UI",
      ],
    },
    {
      title: "Backend",
      skills: ["Prisma ORM", "Express", "MySQL", "MongoDB", "REST APIs"],
    },
    {
      title: "Tools & Other",
      skills: ["Git", "Docker", "Vercel", "Figma"],
    },
  ];

  if (isExpanded) {
    return (
      <>
        {/* Backdrop overlay */}
        <Box
          position="fixed"
          top={0}
          left={0}
          right={0}
          bottom={0}
          bg="rgba(0, 0, 0, 0.7)"
          zIndex={998}
          onClick={() => setIsExpanded(false)}
        />

        {/* Pure Modal Panel */}
        <Box
          position="fixed"
          left={0}
          top={0}
          right={0}
          bottom={0}
          bg="#101010"
          zIndex={999}
          w="100vw"
          h="100vh"
          p={{ base: "24px", md: "40px" }}
          overflowY="auto"
          animation="slideInLeft 0.4s ease-out"
          css={{
            "@keyframes slideInLeft": {
              from: {
                transform: "translateX(-100%)",
              },
              to: {
                transform: "translateX(0)",
              },
            },
          }}
        >
          <Box
            position="absolute"
            inset={0}
            opacity={0.3}
            pointerEvents="none"
            zIndex={0}
            bgGradient="
    radial-gradient(circle at 80% 30%, rgba(145, 108, 231, 0.35), transparent 50%)
  "
            filter="blur(40px)"
          />
          <HStack justify="space-between" mb="32px">
            <Text
              fontSize={{ base: "28px", md: "36px" }}
              fontWeight="900"
              color="rgba(255, 255, 255, 0.9)"
            >
              SKILLSETS
            </Text>
            <Button
              bg="transparent"
              color="rgba(255, 255, 255, 0.6)"
              fontSize="24px"
              _hover={{ color: "rgba(255, 255, 255, 0.9)" }}
              onClick={() => setIsExpanded(false)}
            >
              ✕
            </Button>
          </HStack>

          <VStack align="start" spacing="24px">
            {skillCategories.map((category, idx) => (
              <Box key={idx} mb={10}>
                <Text
                  fontSize="16px"
                  fontWeight="700"
                  color="rgba(255, 255, 255, 0.5)"
                  mb="12px"
                  textTransform="uppercase"
                  letterSpacing="1px"
                >
                  {category.title}
                </Text>
                <HStack flexWrap="wrap" gap="8px">
                  {category.skills.map((skill, i) => (
                    <Box
                      key={i}
                      bg="rgba(255, 255, 255, 0.1)"
                      px="12px"
                      py="6px"
                      borderRadius="6px"
                      color="rgba(255, 255, 255, 0.8)"
                      fontSize="14px"
                      fontWeight="500"
                      transition="all 0.2s ease"
                      _hover={{
                        bg: "rgba(255, 255, 255, 0.2)",
                        transform: "translateY(-2px)",
                      }}
                    >
                      {skill}
                    </Box>
                  ))}
                </HStack>
              </Box>
            ))}
          </VStack>
        </Box>
      </>
    );
  }

  return (
    <Box
      p={{ base: "32px", md: "none" }}
      position={"relative"}
      flex={1}
      w={"100%"}
      bg={{
        base: "linear-gradient(45deg, rgba(255, 255, 255, 0.2) 25%, rgba(255, 255, 255, 0.4) 50%, rgba(255, 255, 255, 0.2) 75%)",
        md: "#101010",
      }}
      borderRadius={{ base: "12px", md: "1.32vw" }}
      overflow={"hidden"}
      transition="all 0.3s ease-in-out"
      onClick={() => setIsExpanded(true)}
      _hover={{
        bg: "linear-gradient(45deg, rgba(255, 255, 255, 0.2) 25%, rgba(255, 255, 255, 0.4) 50%, rgba(255, 255, 255, 0.2) 75%)",
        boxShadow: "0px 4px 20px rgba(255, 255, 255, 0.15)",
        transform: "scale(1.025)",
        backgroundSize: "200% 100%",
        backgroundPosition: "top center",
      }}
      cursor={"pointer"}
    >
      <Text
        fontWeight={"900"}
        fontSize={{ base: "56px", md: "5vw" }}
        color={"rgba(255, 255, 255, 0.35)"}
        position={{ md: "absolute" }}
        bottom={{ md: "6vw" }}
        left={{ md: "7.65vw" }}
        transform={{ md: "translate(-50%, -50%) rotate(-90deg)" }}
        whiteSpace="nowrap"
        textAlign={{ base: "center", md: "none" }}
      >
        SKILLSETS
      </Text>
    </Box>
  );
};

export default Skills;
