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

const profile = {
  bannerimage: "/staticimage/landingpage.png",
  profileimage: "/staticimage/Propic.png",
  name: "Sife Mahmud Simon",
  designation: "Software Engineer",
  stack: "Frontend",
  about:
    "Passionate software engineer with a BSc degree in CSE. Currently pursuing a career as a full stack developer also committed to tackling challenging projects and continuously expanding my knowledge base. Aiming to contribute valuable skills and drive innovation within software engineering field.",
  social: {
    title: "Contact me",
    sub: "Have some questions?",
    mobile: "+8801728337711",
    whatsapp: { name: "Whatsapp", url: "https://wa.me/8801728337711" },
    email: {
      address: "sifemahmudsimon@gmail.com",
      url: "mailto:sifemahmudsimon@gmail.com",
    },
    socialsite: {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/sifemahmudsimon/",
    },
  },
  resume: { name: "Resume", url: "https://drive.google.com/file/d/1oSDpG_rsC6nqQ94tVQCa35DSKcaBKKyn/view?usp=sharing" },
  avaiablity: {
    status: "Available To Work",
    color: "#6DD33D",
    // status:'Text Only',color:'#FF0000'
    // status:'On Vacation',color:'#FFFF00'
  },
};

const journey = {
  title: "My Journey",
  sub: "My Journey and details",
  data: [
    {
      date: "01 Aug",
      shortdescription: "Started Job at Mir Infosys as Intern",
    },
    {
      date: "10 Sep",
      shortdescription: "Sundarban Courier (Percel Tracking System)",
    },
    {
      date: "03 Oct",
      shortdescription: "Skitto (Revamp) Project by Grameenphone",
    },
    {
      date: "01 Nov",
      shortdescription: "Promoted As Software Engineer",
    },
    {
      date: "15 Dec",
      shortdescription: "GpFi (Revamp) Project By Grameenphone",
    },
  ],
};

const stacks = {
  title: "My Stacks",
  sub: "Lets Make Magic Happen Together!",
  data: [
    {
      icon: (
        <svg
          width="800px"
          height="800px"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M18.6789 15.9759C18.6789 14.5415 17.4796 13.3785 16 13.3785C14.5206 13.3785 13.3211 14.5415 13.3211 15.9759C13.3211 17.4105 14.5206 18.5734 16 18.5734C17.4796 18.5734 18.6789 17.4105 18.6789 15.9759Z"
            fill="currentColor"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M24.7004 11.1537C25.2661 8.92478 25.9772 4.79148 23.4704 3.39016C20.9753 1.99495 17.7284 4.66843 16.0139 6.27318C14.3044 4.68442 10.9663 2.02237 8.46163 3.42814C5.96751 4.82803 6.73664 8.8928 7.3149 11.1357C4.98831 11.7764 1 13.1564 1 15.9759C1 18.7874 4.98416 20.2888 7.29698 20.9289C6.71658 23.1842 5.98596 27.1909 8.48327 28.5877C10.9973 29.9932 14.325 27.3945 16.0554 25.7722C17.7809 27.3864 20.9966 30.0021 23.4922 28.6014C25.9956 27.1963 25.3436 23.1184 24.7653 20.8625C27.0073 20.221 31 18.7523 31 15.9759C31 13.1835 26.9903 11.7923 24.7004 11.1537ZM24.4162 19.667C24.0365 18.5016 23.524 17.2623 22.8971 15.9821C23.4955 14.7321 23.9881 13.5088 24.3572 12.3509C26.0359 12.8228 29.7185 13.9013 29.7185 15.9759C29.7185 18.07 26.1846 19.1587 24.4162 19.667ZM22.85 27.526C20.988 28.571 18.2221 26.0696 16.9478 24.8809C17.7932 23.9844 18.638 22.9422 19.4625 21.7849C20.9129 21.6602 22.283 21.4562 23.5256 21.1777C23.9326 22.7734 24.7202 26.4763 22.85 27.526ZM9.12362 27.5111C7.26143 26.47 8.11258 22.8946 8.53957 21.2333C9.76834 21.4969 11.1286 21.6865 12.5824 21.8008C13.4123 22.9332 14.2816 23.9741 15.1576 24.8857C14.0753 25.9008 10.9945 28.557 9.12362 27.5111ZM2.28149 15.9759C2.28149 13.874 5.94207 12.8033 7.65904 12.3326C8.03451 13.5165 8.52695 14.7544 9.12123 16.0062C8.51925 17.2766 8.01977 18.5341 7.64085 19.732C6.00369 19.2776 2.28149 18.0791 2.28149 15.9759ZM9.1037 4.50354C10.9735 3.45416 13.8747 6.00983 15.1159 7.16013C14.2444 8.06754 13.3831 9.1006 12.5603 10.2265C11.1494 10.3533 9.79875 10.5569 8.55709 10.8297C8.09125 9.02071 7.23592 5.55179 9.1037 4.50354ZM20.3793 11.5771C21.3365 11.6942 22.2536 11.85 23.1147 12.0406C22.8562 12.844 22.534 13.6841 22.1545 14.5453C21.6044 13.5333 21.0139 12.5416 20.3793 11.5771ZM16.0143 8.0481C16.6054 8.66897 17.1974 9.3623 17.7798 10.1145C16.5985 10.0603 15.4153 10.0601 14.234 10.1137C14.8169 9.36848 15.414 8.67618 16.0143 8.0481ZM9.8565 14.5444C9.48329 13.6862 9.16398 12.8424 8.90322 12.0275C9.75918 11.8418 10.672 11.69 11.623 11.5748C10.9866 12.5372 10.3971 13.5285 9.8565 14.5444ZM11.6503 20.4657C10.6679 20.3594 9.74126 20.2153 8.88556 20.0347C9.15044 19.2055 9.47678 18.3435 9.85796 17.4668C10.406 18.4933 11.0045 19.4942 11.6503 20.4657ZM16.0498 23.9915C15.4424 23.356 14.8365 22.6531 14.2448 21.8971C15.4328 21.9423 16.6231 21.9424 17.811 21.891C17.2268 22.6608 16.6369 23.3647 16.0498 23.9915ZM22.1667 17.4222C22.5677 18.3084 22.9057 19.1657 23.1742 19.9809C22.3043 20.1734 21.3652 20.3284 20.3757 20.4435C21.015 19.4607 21.6149 18.4536 22.1667 17.4222ZM18.7473 20.5941C16.9301 20.72 15.1016 20.7186 13.2838 20.6044C12.2509 19.1415 11.3314 17.603 10.5377 16.0058C11.3276 14.4119 12.2404 12.8764 13.2684 11.4158C15.0875 11.2825 16.9178 11.2821 18.7369 11.4166C19.7561 12.8771 20.6675 14.4086 21.4757 15.9881C20.6771 17.5812 19.7595 19.1198 18.7473 20.5941ZM22.8303 4.4666C24.7006 5.51254 23.8681 9.22726 23.4595 10.8426C22.2149 10.5641 20.8633 10.3569 19.4483 10.2281C18.6239 9.09004 17.7698 8.05518 16.9124 7.15949C18.1695 5.98441 20.9781 3.43089 22.8303 4.4666Z"
            fill="currentColor"
          />
        </svg>
      ),
      name: "React",
    },
    {
      icon: (
        <svg
          fill="currentColor"
          width="800px"
          height="800px"
          viewBox="0 0 32 32"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M23.749 30.005c-0.119 0.063-0.109 0.083 0.005 0.025 0.037-0.015 0.068-0.036 0.095-0.061 0-0.021 0-0.021-0.1 0.036zM23.989 29.875c-0.057 0.047-0.057 0.047 0.011 0.016 0.036-0.021 0.068-0.041 0.068-0.047 0-0.027-0.016-0.021-0.079 0.031zM24.145 29.781c-0.057 0.047-0.057 0.047 0.011 0.016 0.037-0.021 0.068-0.043 0.068-0.048 0-0.025-0.016-0.020-0.079 0.032zM24.303 29.688c-0.057 0.047-0.057 0.047 0.009 0.015 0.037-0.020 0.068-0.041 0.068-0.047 0-0.025-0.016-0.020-0.077 0.032zM24.516 29.547c-0.109 0.073-0.147 0.12-0.047 0.068 0.067-0.041 0.181-0.131 0.161-0.131-0.043 0.016-0.079 0.043-0.115 0.063zM14.953 0.011c-0.073 0.005-0.292 0.025-0.484 0.041-4.548 0.412-8.803 2.86-11.5 6.631-1.491 2.067-2.459 4.468-2.824 6.989-0.129 0.88-0.145 1.14-0.145 2.333 0 1.192 0.016 1.448 0.145 2.328 0.871 6.011 5.147 11.057 10.943 12.927 1.043 0.333 2.136 0.563 3.381 0.704 0.484 0.052 2.577 0.052 3.061 0 2.152-0.24 3.969-0.771 5.767-1.688 0.276-0.14 0.328-0.177 0.291-0.208-0.88-1.161-1.744-2.323-2.609-3.495l-2.557-3.453-3.203-4.745c-1.068-1.588-2.14-3.172-3.229-4.744-0.011 0-0.025 2.109-0.031 4.681-0.011 4.505-0.011 4.688-0.068 4.792-0.057 0.125-0.151 0.229-0.276 0.287-0.099 0.047-0.188 0.057-0.661 0.057h-0.541l-0.141-0.088c-0.088-0.057-0.161-0.136-0.208-0.229l-0.068-0.141 0.005-6.271 0.011-6.271 0.099-0.125c0.063-0.077 0.141-0.14 0.229-0.187 0.131-0.063 0.183-0.073 0.724-0.073 0.635 0 0.74 0.025 0.907 0.208 1.296 1.932 2.588 3.869 3.859 5.812 2.079 3.152 4.917 7.453 6.312 9.563l2.537 3.839 0.125-0.083c1.219-0.813 2.328-1.781 3.285-2.885 2.016-2.308 3.324-5.147 3.767-8.177 0.129-0.88 0.145-1.141 0.145-2.333 0-1.193-0.016-1.448-0.145-2.328-0.871-6.011-5.147-11.057-10.943-12.928-1.084-0.343-2.199-0.577-3.328-0.697-0.303-0.031-2.371-0.068-2.631-0.041zM21.5 9.688c0.151 0.072 0.265 0.208 0.317 0.364 0.027 0.084 0.032 1.823 0.027 5.74l-0.011 5.624-0.989-1.52-0.995-1.521v-4.083c0-2.647 0.011-4.131 0.025-4.204 0.047-0.167 0.161-0.307 0.313-0.395 0.124-0.063 0.172-0.068 0.667-0.068 0.463 0 0.541 0.005 0.645 0.063z" />
        </svg>
      ),
      name: "NextJs",
    },
    {
      icon: (
        <svg
          width="800px"
          height="800px"
          viewBox="-4 0 23 23"
          id="meteor-icon-kit__solid-figma"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M7 0H3.5C1.567 0 0 1.567 0 3.5C0 5.433 1.567 7 3.5 7H7V0z"
            fill="currentColor"
          />
          <path
            d="M8 0H11.5C13.433 0 15 1.567 15 3.5C15 5.433 13.433 7 11.5 7H8V0z"
            fill="currentColor"
          />
          <path
            d="M7 8H3.5C1.567 8 0 9.567 0 11.5C0 13.433 1.567 15 3.5 15H7V8z"
            fill="currentColor"
          />
          <path
            d="M7 16H3.5C1.567 16 0 17.567 0 19.5C0 21.433 1.567 23 3.5 23C5.433 23 7 21.433 7 19.5V16z"
            fill="currentColor"
          />
          <path
            d="M11.5 15C13.433 15 15 13.433 15 11.5C15 9.567 13.433 8 11.5 8C9.567 8 8 9.567 8 11.5C8 13.433 9.567 15 11.5 15z"
            fill="currentColor"
          />
        </svg>
      ),
      name: "Figma",
    },
    {
      icon: (
        <svg
          fill="currentColor"
          width="800px"
          height="800px"
          viewBox="0 0 32 32"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title>django</title>
          <path d="M22.706 1.095h4.882v5.009h-4.882zM27.589 8.609v11.32c0.045 0.437 0.070 0.943 0.070 1.456 0 2.143-0.446 4.181-1.249 6.028l0.038-0.098c-0.871 1.637-2.259 2.903-3.943 3.596l-0.052 0.019-4.534-2.156c1.671-0.593 3.020-1.747 3.85-3.23l0.018-0.036c0.698-1.395 0.919-3.012 0.919-7.26v-9.64h4.882zM14.937 12.445c-0.462-0.162-0.996-0.255-1.55-0.255-0.034 0-0.069 0-0.103 0.001l0.005-0c-0.074-0.005-0.161-0.008-0.248-0.008-2.036 0-3.687 1.651-3.687 3.687 0 0.179 0.013 0.356 0.038 0.528l-0.002-0.020c-0.021 0.146-0.034 0.315-0.034 0.487 0 1.964 1.592 3.556 3.556 3.556 0.122 0 0.242-0.006 0.361-0.018l-0.015 0.001c0.593-0 1.175-0.046 1.743-0.135l-0.063 0.008v-7.832zM14.937 1.069h4.882v22.603c-1.901 0.411-4.089 0.653-6.331 0.666l-0.010 0c-5.961 0-9.068-2.695-9.068-7.864-0.008-0.134-0.013-0.29-0.013-0.447 0-4.302 3.488-7.79 7.79-7.79 0.22 0 0.438 0.009 0.653 0.027l-0.028-0.002c0.045-0.001 0.097-0.001 0.15-0.001 0.702 0 1.382 0.093 2.028 0.267l-0.055-0.012z"></path>
        </svg>
      ),
      name: "Djangp",
    },
  ],
};

const projects ={
  title:'Projects',
  sub:'spotlight',
  data:[
    {
      bannerimage:'/projectimage/sundarban.png',
      company:'Sundarban',
      title:'Shundarban Courier Service Ltd',
      subtitle:'Parcel Tracking System',
      description:'This project is an enhanced version that integrates a user and corporate parcel tracking system, supporting both national and international shipments. It has been designed using a combination of Tailwind CSS and the MUI library for a modern and responsive user interface. The core architecture is built with React and Next.js, utilizing the Next.js App Router for efficient routing and optimizaation.',
      stacks:[],
      url:'',
    },
    {
      bannerimage:'/projectimage/skitto.png',
      company:'SKITTO',
      title:'Skitto (Revamp)',
      subtitle:'project by Grameenphone',
      description:'This project focused on the complete redevelopment of skitto.com, transitioning it from a legacy website into a modern, feature-rich platform utilizing cutting-edge technologies. The redesign prioritized enhancing user experience, boosting performance, and incorporating dynamic features to address evolving user needs.',
      stacks:[],
      url:'',
    },
    {
      bannerimage:'/projectimage/gpfi.jpg',
      company:'Grameenphone',
      title:'GpFi (Revamp)',
      subtitle:'project by Grameenphone',
      description:'',
      stacks:[],
      url:'',
    }
  ]
}

const gallary = [
  {url:'/tempimage/img1.png'},
  {url:'/tempimage/img3.png'},
  {url:'/tempimage/img4.png'},
  {url:'/tempimage/img2.png'},
]


export default function Home() {
  return (
    <HomePage navlist={navlist} {...{ navlist, profile, journey, stacks,projects,gallary }} />
  );
}
