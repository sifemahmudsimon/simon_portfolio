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
  {type:1,name:'Featured'},
  {type:2,name:'Mini Projects'},
  {type:3,name:'Medium Projects'},
  {type:4,name:'Large Projects'},
  {type:5,name:'Customized Projects'},
]


const projects ={
  title:'Projects',
  sub:'spotlight',
  data:[
    {
      category:[1],
      bannerimage:'/projectimage/sundarban.png',
      company:'Sundarban',
      title:'Shundarban Courier Service Ltd',
      subtitle:'Parcel Tracking System',
      description:'This project is an enhanced version that integrates a user and corporate parcel tracking system, supporting both national and international shipments. It has been designed using a combination of Tailwind CSS and the MUI library for a modern and responsive user interface. The core architecture is built with React and Next.js, utilizing the Next.js App Router for efficient routing and optimizaation.',
      stacks:[],
      url:'/sundarban',
      link:'https://cms.ergov.com/'
    },
    {
      category:[1,3],
      bannerimage:'/projectimage/skitto.png',
      company:'SKITTO',
      title:'Skitto (Revamp)',
      subtitle:'project by Grameenphone',
      description:'This project focused on the complete redevelopment of skitto.com, transitioning it from a legacy website into a modern, feature-rich platform utilizing cutting-edge technologies. The redesign prioritized enhancing user experience, boosting performance, and incorporating dynamic features to address evolving user needs.',
      stacks:[],
      url:'/skitto-revamp',
      link:'https://dev.skitto.com/'
    },
    {
      category:[1,4,5],
      bannerimage:'/projectimage/gpfi.jpg',
      company:'Grameenphone',
      title:'GpFi (Revamp)',
      subtitle:'project by Grameenphone',
      description:'',
      stacks:[],
      url:'/grameenphone-gpfi',
      link:'https://gpfi.grameenphone.com'
    },
    
  ]
}



const Project = () => {
  
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

     <ProjectMain {...{category_types,projects}}/>
     <Box
  position="fixed"
  top={{ base: 'auto', md: -4 }}  // For base, don't set top, and for md, set it to -4
  bottom={{ base: -4, md: 'auto' }}  // For base, set bottom to 0, and for md, don't set bottom
  left={0}
  right={0}
  height={{base:'150px',md:"10vw"}}
  bg={{
    base: "linear-gradient(to top, rgba(0, 0, 0, .9) 25%, rgba(0, 0, 0, 0))",  // From bottom for base
    md: "linear-gradient(to bottom, rgba(0, 0, 0, .9) 50%, rgba(0, 0, 0, 0))"  // From top for md
  }}
  filter="blur(10px)"
  pointerEvents="none"
  zIndex={20}
/>
    </Box>
  );
};

export default Project;
