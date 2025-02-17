import { Box } from '@chakra-ui/react';
import React from 'react'
import NavBar from '../components/navbar/NavBar';

const navlist = [
  { name: "Home", url: "/#" },
  // { name: "About", url: "/?about" },
  { name: "About", url: "/#" },
  { name: "Projects", url: "/projects" },
  { name: "Contact", url: "/contact" },
];
const Project = () => {
  return (
    <Box position={"fixed"} w={"100%"} zIndex={100}>
        <NavBar  navlist={navlist} />
      </Box>
  )
}

export default Project