'use client';
import React, { useEffect, useState } from 'react';
import MainSection from './MainSection';
import About from './About';
import { Box } from '@chakra-ui/react';
import NavBar from '../../navbar/NavBar';
import { usePathname, useSearchParams } from 'next/navigation'; // Import for the App Router

const HomePage = ({ navlist, profile, journey, stacks, projects, gallary }) => {
  let home_section_id = navlist?.find(data => data.name.toLowerCase().includes('home'))?.name.toLowerCase();
  let about_section_id = navlist?.find(data => data.name.toLowerCase().includes('about'))?.name.toLowerCase();

  const [isHomeSection, setIsHomeSection] = useState(true);
  const [homePageNav, setHomePageNav] = useState(false);
  const [clickedItem, setClickedItem] = useState(null);

  // Fetch session storage value once client-side
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const storedClickedItem = sessionStorage.getItem('navClick');
      setClickedItem(storedClickedItem);
    }
  }, []);

  useEffect(() => {
    let lastScrollTop = 0;
    let hasScrolledDown = false;
    let hasScrolledUp = false;

    const handleScroll = () => {
      const currentScroll = window.pageYOffset || document.documentElement.scrollTop;

      if (currentScroll > lastScrollTop && !hasScrolledDown) {
        hasScrolledDown = true;
        hasScrolledUp = false;
        const targetSection = document.getElementById(about_section_id.toLowerCase());
        if (targetSection && window.innerWidth > 768) {
          targetSection.scrollIntoView({ behavior: 'smooth' });
          setIsHomeSection(false);
        }
      } else if (currentScroll < lastScrollTop && !hasScrolledUp) {
        hasScrolledUp = true;
        hasScrolledDown = false;
        const targetSection = document.getElementById(home_section_id.toLowerCase());
        if (targetSection && window.innerWidth > 768) {
          targetSection.scrollIntoView({ behavior: 'smooth' });
          setIsHomeSection(true);
        }
      }

      lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [home_section_id, about_section_id]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const targetSection = entry.target;
          const sectionId = targetSection.id;

          if (entry.isIntersecting) {
            if (sectionId === home_section_id.toLowerCase()) {
              setIsHomeSection(true);
              setHomePageNav(home_section_id);
            } else if (sectionId === about_section_id.toLowerCase()) {
              setIsHomeSection(false);
              setHomePageNav(about_section_id);
            }

            sessionStorage.setItem('navClick', sectionId); // Store active section in sessionStorage
          }
        });
      },
      { threshold: 0.5 }
    );

    const homeSection = document.getElementById(home_section_id.toLowerCase());
    const aboutSection = document.getElementById(about_section_id.toLowerCase());

    if (homeSection) observer.observe(homeSection);
    if (aboutSection) observer.observe(aboutSection);

    return () => {
      if (homeSection) observer.unobserve(homeSection);
      if (aboutSection) observer.unobserve(aboutSection);
    };
  }, [home_section_id, about_section_id]);

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
      <Box position="fixed" w="100%"  
      top={{md:'0'}}   bottom={{base:"0",md:'unset'}} 
      zIndex={100}>
        <NavBar isHomeSection={isHomeSection} homePageNav={homePageNav} setClickedItem={setClickedItem} navlist={navlist} />
      </Box>
      <Box id={home_section_id}>
        <MainSection {...{ profile }} />
      </Box>
      <Box bg="black"  h={{md:"100vh"}}id={about_section_id}>
        <About {...{ profile, journey, stacks, projects, gallary }} />
      </Box>
    </Box>
  );
};

export default HomePage;
