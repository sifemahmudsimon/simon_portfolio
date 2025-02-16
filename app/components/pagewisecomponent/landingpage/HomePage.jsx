'use client';
import React, { useEffect, useState } from 'react';
import MainSection from './MainSection';
import About from './About';
import { Box } from '@chakra-ui/react';
import NavBar from '../../navbar/NavBar';
import { usePathname, useSearchParams } from 'next/navigation'; // Import for the App Router


const HomePage = ({navlist}) => {
  const [activeSection, setActiveSection] = useState(navlist?.find(data => data.name)?.name.toLowerCase());
  const pathname = usePathname(); // Get current path
  const searchParams = useSearchParams(); // Get current query parameters

  console.log('simon+++++++++++++++++', navlist);

  
  useEffect(() => {
    let isScrolling = false;

 

    const handleScroll = (event) => {
      if (isScrolling) {
        event.preventDefault(); 
        return; 
      }
      isScrolling = true;

      const mainSection = document.getElementById(navlist?.find(data => data.name.toLowerCase().includes('home'))?.name.toLowerCase());
      const aboutSection = document.getElementById(navlist?.find(data => data.name.toLowerCase().includes('about'))?.name.toLowerCase());

      if (event.deltaY > 0) { // scrolling down
        if (window.scrollY >= mainSection.offsetTop + mainSection.offsetHeight - window.innerHeight) {
          aboutSection.scrollIntoView({ behavior: "smooth", block: "start" });
          setActiveSection(navlist?.find(data => data.name.toLowerCase().includes('about'))?.name.toLowerCase());
        }
      } else if (event.deltaY < 0) { // scrolling up
        if (window.scrollY <= aboutSection.offsetTop) {
          mainSection.scrollIntoView({ behavior: "smooth", block: "start" });
          setActiveSection(navlist?.find(data => data.name.toLowerCase().includes('home'))?.name.toLowerCase());
        }
      }

      setTimeout(() => {
        isScrolling = false;
      }, 600); 
    };

    const checkActiveSection = () => {
      const mainSection = document.getElementById(navlist?.find(data => data.name.toLowerCase().includes('home'))?.name.toLowerCase());
      const aboutSection = document.getElementById(navlist?.find(data => data.name.toLowerCase().includes('about'))?.name.toLowerCase());

      const mainSectionOffset = mainSection.offsetTop;
      const aboutSectionOffset = aboutSection.offsetTop;
      
      if (window.scrollY >= aboutSectionOffset - window.innerHeight / 2) {
        setActiveSection(navlist?.find(data => data.name.toLowerCase().includes('about'))?.name.toLowerCase());
      } else if (window.scrollY >= mainSectionOffset - window.innerHeight / 2) {
        setActiveSection(navlist?.find(data => data.name.toLowerCase().includes('home'))?.name.toLowerCase());
      }
    };

    // Check if the query param is `/?about` and scroll to the About section
    const checkUrl = () => {
      if (searchParams.has(navlist?.find(data => data.name.toLowerCase().includes('about'))?.name.toLowerCase())) {
        const aboutSection = document.getElementById("about");
        aboutSection?.scrollIntoView({ behavior: "smooth", block: "start" });
        setActiveSection(navlist?.find(data => data.name.toLowerCase().includes('about'))?.name.toLowerCase());
      }
    };

    // Call the checkUrl function when the component mounts or pathname/searchParams change
    checkUrl();

    // Listen for changes in the pathname or search params
    

    window.addEventListener("wheel", handleScroll, { passive: false });
    window.addEventListener("scroll", checkActiveSection);

    return () => {
      // Cleanup listeners
      window.removeEventListener("wheel", handleScroll);
      window.removeEventListener("scroll", checkActiveSection);
    };
  }, [pathname, searchParams]); // Watch for changes in pathname or search params

  return (
    <Box position={"relative"}>
      <Box position={"fixed"} w={"100%"} zIndex={100}>
        <NavBar activeSection={activeSection} navlist={navlist} />
      </Box>
      <Box  id={navlist?.find(data => data.name.toLowerCase().includes('home'))?.name.toLowerCase()}>
        <MainSection />
      </Box>
      <Box bg={'black'} h={"100vh"} id={navlist?.find(data => data.name.toLowerCase().includes('about'))?.name.toLowerCase()}>
        <About />
      </Box>
    </Box>
  );
};

export default HomePage;
