'use client';
import React, { useEffect, useState } from 'react';
import MainSection from './MainSection';
import About from './About';
import { Box } from '@chakra-ui/react';
import NavBar from '../../navbar/NavBar';

const HomePage = ({ navlist, profile, journey, stacks, projects, gallary }) => {
  let home_section_id = navlist?.find(data => data.name.toLowerCase().includes('home'))?.name.toLowerCase();
  let about_section_id = navlist?.find(data => data.name.toLowerCase().includes('about'))?.name.toLowerCase();

  const [isHomeSection, setIsHomeSection] = useState(true);
  const [homePageNav, setHomePageNav] = useState(false);
  const [clickedItem, setClickedItem] = useState(null);
  const [enableAutoScroll, setEnableAutoScroll] = useState(false);

  // Set auto-scroll based on screen width
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const checkWidth = () => {
        if (window.innerWidth > 768) {
          setEnableAutoScroll(true);
        } else {
          setEnableAutoScroll(false);
        }
      };

      checkWidth();
      window.addEventListener('resize', checkWidth);
      return () => window.removeEventListener('resize', checkWidth);
    }
  }, []);

  // Fetch session storage value once client-side
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const storedClickedItem = sessionStorage.getItem('navClick');
      setClickedItem(storedClickedItem);
    }
  }, []);

  // Add scroll event listener only on larger screens
  useEffect(() => {
    if (enableAutoScroll) {
      let lastScrollTop = 0;
      let hasScrolledDown = false;
      let hasScrolledUp = false;

      const handleScroll = () => {
        const currentScroll = window.pageYOffset || document.documentElement.scrollTop;
        // Debug log
        console.log("Current scroll:", currentScroll, "Last scroll:", lastScrollTop);

        if (currentScroll > lastScrollTop && !hasScrolledDown) {
          hasScrolledDown = true;
          hasScrolledUp = false;
          const targetSection = document.getElementById(about_section_id.toLowerCase());
          if (targetSection) {
            targetSection.scrollIntoView({ behavior: 'smooth' });
            setIsHomeSection(false);
          }
        } else if (currentScroll < lastScrollTop && !hasScrolledUp) {
          hasScrolledUp = true;
          hasScrolledDown = false;
          const targetSection = document.getElementById(home_section_id.toLowerCase());
          if (targetSection) {
            targetSection.scrollIntoView({ behavior: 'smooth' });
            setIsHomeSection(true);
          }
        }
        lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
      };

      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }
  }, [enableAutoScroll, home_section_id, about_section_id]);

  // Scroll to section based on stored clicked item
  useEffect(() => {
    if (clickedItem && typeof window !== 'undefined') {
      const targetSection = document.getElementById(clickedItem.toLowerCase());
      if (targetSection) {
        targetSection.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [clickedItem]);

  return (
    <Box position="relative">
      {/* Uncomment this if you want to show a fixed NavBar */}
      <Box position="fixed" w="100%"  top={{md:'0'}}   bottom={{base:"0",md:'none'}} zIndex={100}>
        <NavBar isHomeSection={isHomeSection} homePageNav={homePageNav} setClickedItem={setClickedItem} navlist={navlist} />
      </Box>
      <Box id={home_section_id}>
        <MainSection {...{ profile }} />
      </Box>
      <Box bg="black" h={{md:"100vh"}}id={about_section_id}>
        <About {...{ profile, journey, stacks, projects, gallary }} />
      </Box>
    </Box>
  );
};

export default HomePage;
