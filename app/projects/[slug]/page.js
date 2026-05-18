import NavBar from "@/app/components/navbar/NavBar";
import HeroScrollDemo from "@/components/container-scroll-animation-demo";
import MacbookScrollDemo from "@/components/macbook-scroll-demo";
import { Box, Flex } from "@chakra-ui/react";

const navlist = [
  { name: "Home", url: "/#" },
  { name: "About", url: "/#" },
  { name: "Projects", url: "/projects" },
  { name: "Contact", url: "/contact" },
];

async function getProject(slug) {
  const res = await fetch("http://localhost:3000/api/projects", {
    cache: "no-store",
  });

  const data = await res.json();

  const project = data.data.find((item) => item.url === `/${slug}`);

  return project;
}

const Page = async ({ params }) => {
  const project = await getProject(params.slug);

  return (
    <>
      <Box
        w="100%"
        pt={{ base: "6px", md: "0" }}
        bottom={{ base: "0", md: "unset" }}
        zIndex={100}
      >
        <NavBar navlist={navlist} />
      </Box>

      <Box position="relative">
        <Box pt={{ base: "0px", md: "4.23vw" }}>
          <MacbookScrollDemo
            title={project?.title}
            src={project?.bannerimage}
          />
        </Box>

        <Flex bg="black" color="white" pt="8vw" px="3.25vw" h={{ md: "100vh" }}>
          <Box w="50%">
            <Box mb={4} fontWeight="bold">
              Stacks:
            </Box>

            <Flex wrap="wrap" gap={2}>
              {project?.stacks.map((stack, i) => (
                <Box
                  key={i}
                  px={3}
                  py={1}
                  border="1px solid white"
                  borderRadius="full"
                  fontSize="sm"
                >
                  {stack}
                </Box>
              ))}
            </Flex>
          </Box>

          <Box w="50%">
            <h1>{project?.title}</h1>
            <p>{project?.subtitle}</p>
            <p>{project?.description}</p>
          </Box>
        </Flex>
      </Box>
    </>
  );
};

export default Page;
