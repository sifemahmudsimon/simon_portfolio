'use client';
import React, { useEffect, useState } from 'react';
import MainSection from './MainSection';
import About from './About';
import { Box } from '@chakra-ui/react';
import NavBar from '../../navbar/NavBar';
import { usePathname, useSearchParams } from 'next/navigation'; // Import for the App Router

const HomePage = ({ navlist,profile,journey,stacks,projects,gallary }) => {
  let home_section_id = navlist?.find(data => data.name.toLowerCase().includes('home'))?.name.toLowerCase();
  let about_section_id = navlist?.find(data => data.name.toLowerCase().includes('about'))?.name.toLowerCase();

  const [isHomeSection, setIsHomeSection] = useState();
  const[homePageNav,setHomePageNav] = useState(false)
  const [clickedItem, setClickedItem] = useState(sessionStorage.getItem('navClick'));

  console.log('profile++++++++',profile)
  useEffect(() => {
    let lastScrollTop = 0;
    let hasScrolledDown = false;
    let hasScrolledUp = false;

    const handleScroll = () => {
      const currentScroll = window.pageYOffset || document.documentElement.scrollTop;

      if (currentScroll > lastScrollTop && !hasScrolledDown) {
        console.log('You scrolled down!');
        hasScrolledDown = true;
        hasScrolledUp = false;
        const targetSection = document.getElementById(about_section_id.toLowerCase());
        if (targetSection) {
          targetSection.scrollIntoView({ behavior: 'smooth' });
          { about_section_id === targetSection.id && setIsHomeSection(false)  }
        }
      } else if (currentScroll < lastScrollTop && !hasScrolledUp) {
        console.log('You scrolled up!');
        hasScrolledUp = true;
        hasScrolledDown = false;
        const targetSection = document.getElementById(home_section_id.toLowerCase());
        if (targetSection) {
          targetSection.scrollIntoView({ behavior: 'smooth' });
          { home_section_id === targetSection.id && setIsHomeSection(true) }
        }
      }

      lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    // IntersectionObserver to detect when sections are in the viewport
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.target.id === about_section_id.toLowerCase() && entry.isIntersecting) {
            setIsHomeSection(false);
            setHomePageNav(about_section_id)
            sessionStorage.setItem('navClick', about_section_id);
          } else if (entry.target.id === home_section_id.toLowerCase() && entry.isIntersecting) {
            setIsHomeSection(true); 
            setHomePageNav(home_section_id)
            sessionStorage.setItem('navClick', home_section_id);
          }
        });
      },
      { threshold: 0.5 } // Trigger when at least 50% of the element is in the viewport
    );

    // Start observing both sections
    const homeSection = document.getElementById(home_section_id.toLowerCase());
    const aboutSection = document.getElementById(about_section_id.toLowerCase());

    if (homeSection) observer.observe(homeSection);
    if (aboutSection) observer.observe(aboutSection);

    // Cleanup observer
    return () => {
      if (homeSection) observer.unobserve(homeSection);
      if (aboutSection) observer.unobserve(aboutSection);
    };
  }, [home_section_id, about_section_id]);

  useEffect(() => {
    if (clickedItem) {
      const targetSection = document.getElementById(clickedItem.toLowerCase());
      if (targetSection) {
        targetSection.scrollIntoView({ behavior: 'smooth' });
        // { home_section_id === targetSection.id ? setIsHomeSection(true) : setIsHomeSection(false) }
      }
    }
  }, [clickedItem]);

  return (
    <Box position={"relative"}>
      <Box position={"fixed"} w={"100%"} zIndex={100}>
        <NavBar isHomeSection={isHomeSection} homePageNav={homePageNav} setClickedItem={setClickedItem} navlist={navlist} />
      </Box>
      <Box id={home_section_id}>
        <MainSection {...{profile}} />
      </Box>
      <Box bg={'black'} h={"100vh"} id={about_section_id}>
        <About {...{profile,journey,stacks,projects,gallary}}/>
      </Box>
    </Box>
  );
};

export default HomePage;
