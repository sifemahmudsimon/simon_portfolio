import { Box, Flex, Text } from "@chakra-ui/react";
import React from "react";
import NavBar from "../components/navbar/NavBar";
import ProjectCards from "../components/pagewisecomponent/projects/ProjectCards";
import ProjectMain from "../components/pagewisecomponent/projects/ProjectMain";
import { GET_METHOD } from "../service-pattern/api-request-service";
import { CATEGORY_TYPES } from "../service-pattern/api-data-service";

const navlist = [
  { name: "Home", url: "/#" },
  // { name: "About", url: "/?about" },
  { name: "About", url: "/#" },
  { name: "Projects", url: "/projects" },
  { name: "Contact", url: "/contact" },
];

const category_types = [
  { type: 1, name: "Featured" },
  { type: 2, name: "Mini Projects" },
  { type: 3, name: "Medium Projects" },
  { type: 4, name: "Large Projects" },
  { type: 5, name: "Customized Projects" },
];

async function getProjects() {
  try {
    const res = await fetch("http://localhost:3000/api/projects", {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch projects");
    }

    return res.json();
  } catch (error) {
    console.log(error);
    return null;
  }
}

const Project = async () => {
  //   let dataToBeSent = {};  // Initialize the dataToBeSent object

  //   try {
  //     const data = await GET_METHOD({
  //       URL: Home_Page_End_Point,  // Replace with the actual endpoint
  //     });

  //     dataToBeSent.page_data = data.data;  // Assign the fetched data to page_data
  //     console.log('Data to be sent:', dataToBeSent);  // Optional: log the result
  //   } catch (error) {
  //     console.log('Error fetching data:', error);  // Handle errors gracefully
  //   }

  //   return dataToBeSent;  // Return the data that was fetched and assigned
  // }

  const projects = await getProjects();

  return (
    <Box position="relative">
      <Box position={"fixed"} w={"100%"} zIndex={100}>
        <Box
          position="fixed"
          w="100%"
          top={{ md: "0" }}
          bottom={{ base: "0", md: "unset" }}
          zIndex={100}
        >
          <NavBar navlist={navlist} />
        </Box>
      </Box>

      <ProjectMain {...{ category_types, projects }} />
      <Box
        position="fixed"
        top={{ base: "auto", md: -4 }} // For base, don't set top, and for md, set it to -4
        bottom={{ base: -4, md: "auto" }} // For base, set bottom to 0, and for md, don't set bottom
        left={0}
        right={0}
        height={{ base: "150px", md: "10vw" }}
        bg={{
          base: "linear-gradient(to top, rgba(0, 0, 0, .9) 25%, rgba(0, 0, 0, 0))", // From bottom for base
          md: "linear-gradient(to bottom, rgba(0, 0, 0, .9) 50%, rgba(0, 0, 0, 0))", // From top for md
        }}
        filter="blur(10px)"
        pointerEvents="none"
        zIndex={20}
      />
    </Box>
  );
};

export default Project;
