import NavBar from "@/app/components/navbar/NavBar";
import HeroScrollDemo from "@/components/container-scroll-animation-demo";
import MacbookScrollDemo from "@/components/macbook-scroll-demo";
import { Box, Flex } from "@chakra-ui/react";

async function getProject(slug) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/projects`, {
    cache: "no-store",
  });

  const data = await res.json();

  const project = data.data.find((item) => item.url === `/${slug}`);

  return project;
}

const Page = async ({ params }) => {
  const { slug } = await params;
  const project = await getProject(slug);

  return (
    <>
      <Box position="relative">
        <Box>
          <MacbookScrollDemo
            title={project?.title}
            src={project?.projectdemo}
          />
        </Box>

        <Flex
          bg="black"
          color="white"
          px={{ base: "5vw", md: "3.25vw" }}
          py={{ base: 12, md: 20 }}
          direction={{ base: "column", md: "row" }}
          gap={{ base: 10, md: 16 }}
        >
          {/* LEFT - META + STACKS */}
          <Box w={{ base: "100%", md: "35%" }}>
            <Box fontSize="2xl" fontWeight="bold" mb={2}>
              {project?.title}
            </Box>

            <Box opacity={0.7} mb={6}>
              {project?.subtitle}
            </Box>

            {/* TECH STACK */}
            <Box mb={10}>
              <Box mb={3} fontSize="sm" opacity={0.6}>
                Tech Stack
              </Box>

              <Box mb={4} opacity={0.8} fontSize="xs">
                Frontend
              </Box>

              <Flex wrap="wrap" gap={2} mb={4}>
                {project?.details?.techStack?.frontend?.map((stack, i) => (
                  <Box
                    key={i}
                    px={3}
                    py={1}
                    border="1px solid rgba(255,255,255,0.2)"
                    borderRadius="full"
                    fontSize="xs"
                  >
                    {stack}
                  </Box>
                ))}
              </Flex>

              <Box mb={4} opacity={0.8} fontSize="xs">
                Backend
              </Box>

              <Flex wrap="wrap" gap={2} mb={4}>
                {project?.details?.techStack?.backend?.map((stack, i) => (
                  <Box
                    key={i}
                    px={3}
                    py={1}
                    border="1px solid rgba(255,255,255,0.2)"
                    borderRadius="full"
                    fontSize="xs"
                  >
                    {stack}
                  </Box>
                ))}
              </Flex>

              <Box mb={4} opacity={0.8} fontSize="xs">
                Tools
              </Box>

              <Flex wrap="wrap" gap={2}>
                {project?.details?.techStack?.tools?.map((stack, i) => (
                  <Box
                    key={i}
                    px={3}
                    py={1}
                    border="1px solid rgba(255,255,255,0.2)"
                    borderRadius="full"
                    fontSize="xs"
                  >
                    {stack}
                  </Box>
                ))}
              </Flex>
            </Box>

            {/* QUICK INFO */}
            <Box fontSize="sm" opacity={0.7} lineHeight="1.8">
              <p>
                <strong>Company:</strong> {project?.company}
              </p>
              <p>
                <strong>Type:</strong> {project?.type}
              </p>
              <p>
                <strong>Status:</strong> {project?.status}
              </p>
              <p>
                <strong>Year:</strong> {project?.year}
              </p>
              <p>
                <strong>Duration:</strong> {project?.duration}
              </p>
            </Box>
          </Box>

          {/* RIGHT - FULL DETAILS */}
          <Box w={{ base: "100%", md: "65%" }}>
            {/* OVERVIEW */}
            <Section title="Overview">{project?.details?.overview}</Section>

            {/* FEATURES */}
            <Section title="Features">
              <List items={project?.details?.features} />
            </Section>

            {/* CHALLENGES */}
            <Section title="Challenges">
              <List items={project?.details?.challenges} />
            </Section>

            {/* RESULTS */}
            <Section title="Results">
              <List items={project?.details?.results} />
            </Section>

            {/* TECHNOLOGIES */}
            <Section title="Technologies Used">
              <List items={project?.details?.technologies} />
            </Section>

            {/* RESPONSIBILITIES */}
            <Section title="Responsibilities">
              <List items={project?.details?.responsibilities} />
            </Section>

            {/* ARCHITECTURE */}
            <Section title="Architecture">
              <Box opacity={0.8} lineHeight="1.8">
                <p>
                  <strong>Type:</strong> {project?.details?.architecture?.type}
                </p>
                <p>
                  <strong>Pattern:</strong>{" "}
                  {project?.details?.architecture?.pattern}
                </p>
                <p>
                  <strong>Data Flow:</strong>{" "}
                  {project?.details?.architecture?.dataFlow}
                </p>
              </Box>
            </Section>

            {/* INTEGRATIONS */}
            <Section title="Integrations">
              <List items={project?.details?.integrations} />
            </Section>

            {/* PERFORMANCE */}
            <Section title="Performance Optimizations">
              <List items={project?.details?.performance} />
            </Section>

            {/* TESTING */}
            <Section title="Testing">
              <List items={project?.details?.testing} />
            </Section>

            {/* ROLES */}
            <Section title="User Roles">
              <Box opacity={0.8} lineHeight="1.8">
                <p>
                  <strong>User:</strong> {project?.details?.roles?.user}
                </p>
                <p>
                  <strong>Corporate:</strong>{" "}
                  {project?.details?.roles?.corporate}
                </p>
                <p>
                  <strong>Admin:</strong> {project?.details?.roles?.admin}
                </p>
              </Box>
            </Section>
          </Box>
        </Flex>
      </Box>
    </>
  );
};

const Section = ({ title, children }) => (
  <Box mb={10}>
    <Box
      fontSize="lg"
      fontWeight="bold"
      mb={3}
      borderBottom="1px solid rgba(255,255,255,0.1)"
      pb={2}
    >
      {title}
    </Box>
    <Box opacity={0.85} fontSize="sm" lineHeight="1.9">
      {children}
    </Box>
  </Box>
);

const List = ({ items = [] }) => (
  <Box as="ul" pl={4} style={{ listStyle: "disc" }}>
    {items.map((item, i) => (
      <Box as="li" key={i} mb={2}>
        {item}
      </Box>
    ))}
  </Box>
);

export default Page;
