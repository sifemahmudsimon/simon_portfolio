// import Image from "next/image";
// import styles from "./page.module.css";
// import { Box, Button, Flex, Text } from "@chakra-ui/react";
// import NavBar from "../components/navbar/NavBar";
// import { CommonLink } from "../components/reuseable/CommonLink";
// import Link from "next/link";
// import MainSection from "../components/pagewisecomponent/landingpage/MainSection";
// import About from "../components/pagewisecomponent/landingpage/About";
import HomePage from "./components/pagewisecomponent/landingpage/HomePage";

const navlist = [
  { name: "Home", url: "/" },
  // { name: "About", url: "/?about" },
  { name: "About", url: "/" },
  { name: "Projects", url: "/projects" },
  { name: "Contact", url: "/contact" },
];

export default function Home() {
  return (
    
    <HomePage navlist={navlist}/>
   
  );
}
