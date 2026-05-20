export async function GET() {
  const projects = {
    title: "Projects",
    sub: "spotlight",
    data: [
      {
        category: [2, 4, 6],
        type: "Frontend Development",
        year: 2025,
        duration: "2 months",
        status: "completed",
        bannerimage: "/projectimage/sundarban.png",
        projectdemo: "/projectimage/screenshots/sundarban.png",
        company: "Sundarban",
        title: "Shundarban Courier Service Ltd",
        subtitle: "Parcel Tracking System",
        description:
          "This project is an enhanced version that integrates a user and corporate parcel tracking system, supporting both national and international shipments. It has been designed using a combination of Tailwind CSS and the MUI library for a modern and responsive user interface. The core architecture is built with React and Next.js, utilizing the Next.js App Router for efficient routing and optimizaation.",
        stacks: ["Next.js", "Material UI", "Axios", "GraphQL"],
        details: {
          overview:
            "The project is a comprehensive parcel tracking system that caters to both individual users and corporate clients. It provides real-time tracking of parcels, allowing users to monitor their shipments from dispatch to delivery. The system supports both national and international shipments, making it versatile for a wide range of users.",
          features: [
            "Real-time tracking of parcels",
            "Price calculation for national and international shipments",
            "Track table of signle percel and multiple percel",
            "Career application portal",
            "Integration with GraphQL for seamless data management",
            "Dynamic homepage design",
          ],
          challenges: [
            "Handling real-time tracking updates",
            "Optimizing GraphQL queries for large datasets",
            "Maintain Strapi defaul richtext behaviour optimization",
          ],
          results: [
            "Reduced parcel tracking latency by 30%",
            "Improved UX for corporate users",
          ],
          techStack: {
            frontend: [
              "Next.js",
              "React",
              "Material UI (MUI)",
              "Tailwind CSS",
              "React Hook Form",
            ],

            backend: ["Strapi & 3rd party api"],

            tools: [
              "Dayjs",
              "js-cookie",
              "clsx",
              "Next Image (image optimization)",
              "Emotion",
              "Redux Toolkit",
              "React Redux",
              "Axios",
              "React Toastify",
              "React Markdown",
              "Swiper",
              "React Slick",
              "Font Awesome",
            ],
          },
          technologies: [
            "Next.js for server-side rendering and efficient routing",
            "Material UI for a modern and responsive user interface",
            "Tailwind CSS for custom styling and design flexibility",
            "Axios for handling API requests and responses",
            "GraphQL for efficient data querying and management",
          ],
          responsibilities: [
            "Built UI",
            "API Integration",
            "Integrated GraphQL APIs",
          ],
          architecture: {
            type: "server-side & client-server",
            pattern: "component-based + API-driven",
            dataFlow: "GraphQL/Api → Server/Client → UI",
          },
          integrations: [
            "GraphQL API (parcel tracking)",
            "CMS api for page details",
            "Authentication system",
            "Courier backend system",
          ],
          performance: [
            "Optimized GraphQL queries",
            "Lazy-loaded tracking components",
            "Reduced API calls using caching",
          ],
          testing: [
            "Manual testing for tracking flows",
            "API response validation",
          ],
          roles: {
            user: "Track parcels",
            corporate: "Bulk tracking + dashboard",
            admin: "Manage page content",
          },
        },
        url: "/sundarban",
        link: "sb-ft.ergov.com",
      },
      {
        category: [1, 3],
        bannerimage: "/projectimage/skitto.png",
        projectdemo: "/projectimage/screenshots/skitto.png",
        company: "SKITTO",
        title: "Skitto (Revamp)",
        subtitle: "project by Grameenphone",
        description:
          "This project focused on the complete redevelopment of skitto.com, transitioning it from a legacy website into a modern, feature-rich platform utilizing cutting-edge technologies. The redesign prioritized enhancing user experience, boosting performance, and incorporating dynamic features to address evolving user needs.",
        stacks: ["Next.js", "FramerMotion", "ChakraUI", "TailwindCSS"],
        details: {
          overview:
            "The project is a redevlopment of Skitto website with a focus on modern design, feature rich content and enhanced user experience. The revamped website features a sleek and intuitive interface built with Tailwind CSS and Material UI, providing users with a seamless browsing experience. The core architecture is built with Next.js, utilizing the Next.js App Router for efficient routing and optimization. Additionally, revalidating caching is integrated for seamless data management, allowing for real-time updates and efficient data fetching.",
          features: [
            "Google analytics implementation for user behavior tracking",
            "Custom animations and transitions using Framer Motion",
            "Flexiplan like custom pack maker",
            "Plan listing & OTT platform",
          ],
          challenges: [
            "Making the design responsive and accessible across devices",
            "Animation trigger and myltiple design change logic from a single component",
            "Optimizing performance while maintaining rich animations and dynamic content",
            "Server side & Client side rendering optimization for better SEO and user experience",
            "Carousels custom design",
          ],
          results: [
            "Achieved a 40% increase in user engagement metrics post-launch",
            "Improved UX for users",
            "OTT platform visits increased by 25% within the first month of launch",
          ],
          techStack: {
            frontend: [
              "Next.js",
              "React",
              "Framer Motion",
              "Chakra UI",
              "Tailwind CSS",
              "Google Analytics",
            ],
            backend: [],
            tools: ["SwiperJS", "Framer Motion", "SCSS"],
          },
          responsibilities: ["Built dashboard UI", "Integrated GraphQL APIs"],
          technologies: [
            "Next.js for server-side rendering and efficient routing",
            "SwiperJS for carousels",
            "Material UI for a modern and responsive user interface",
            "Tailwind CSS for custom styling and design flexibility",
            "Axios for handling API requests and responses",
            "Framer Motion for animation",
          ],
          architecture: {
            type: "client-server & server-side",
            pattern: "component-based + API-driven",
            dataFlow: "Api → Render logic → Server/Client → UI",
          },
          integrations: [
            "API (Dynamic Rendering)",
            "Google Analytics for user behavior tracking",
          ],
          performance: [
            "Optimized heavy response using dynamic imports",
            "Lazy-loaded big data mapped components",
          ],
          testing: [
            "Manual testing for tracking flows",
            "API response validation",
          ],
          roles: {
            user: "View Packs offer & OTT offers",
            corporate: "Content Manage + dashboard",
            admin: "Manage corporate roles",
          },
        },
        url: "/skitto-revamp",
        link: "skitto.com",
      },
      {
        category: [1, 4, 5],
        bannerimage: "/projectimage/gpfi.jpg",
        projectdemo: "/projectimage/screenshots/gpfi.png",
        company: "Grameenphone",
        title: "GpFi (Revamp)",
        subtitle: "project by Grameenphone",
        description: "",
        stacks: [],
        details: {
          overview:
            "GPFi is a next-generation Wi-Fi service provisioning and management platform developed for Grameenphone. It is designed to serve both individual and corporate users through a seamless digital experience. The system features an intuitive step-by-step ordering and tracking flow, along with a centralized plan management dashboard. It also integrates modern authentication and payment solutions, including SSO login and bKash-based ordering, ensuring a smooth and user-friendly service experience.",
          features: [
            "Dynamic Sortable Homepage section through CMS",
            "Developed different plans and device across available areas",
            "Designed complete order journey flow (Geo Location → Plan → Device → Info → Review → Submission → Tracking → Plan Activation → Dashboard)",
            "Cookies management for storing left out session data and user preferences",
            "Integration SSO login for seamless authentication across Grameenphone services and Third Party apps",
            "GEO Location by using BariKoi API for personalized access plan & device recommendation",
          ],
          challenges: [
            "Manage and update Cookies for different scenarios",
            "Third Party api for Geo Location data and its response changed which miss aligned with backend database frequently",
            "Payment System validation with bKash and its different flow for corporate and individual users",
            "Dashboard data visualization of different cases",
          ],
          results: [
            "Complex process made easy for users with step-by-step flow",
            "Enterprise level UI for users to manage their plans and devices",
          ],
          techStack: {
            frontend: ["Next.js", "React", "Chakra UI", "React Markdown"],
            backend: ["Node.js"],
            tools: [
              "Custom Forms",
              "js-cookie",
              "Next Image (image optimization)",
              "Axios",
              "React Toastify",
              "Swiper",
            ],
          },
          responsibilities: [
            "Built UI",
            "Integration REST API",
            "Payment validation",
          ],
          technologies: [
            "Next.js for server-side rendering and efficient routing",
            "Chakra UI for a modern and responsive user interface",
            "Tailwind CSS for custom styling and design flexibility",
            "Axios for handling API requests and responses",
            "js-cookies for maintaining user sessions and preferences",
          ],
          architecture: {
            type: "client-server & server-side",
            pattern: "component-based + API-driven",
            dataFlow: "API → Server/Client → UI → Conditional Rendering",
          },
          integrations: [
            "API (Step by step )",
            "Authentication system (if any)",
            "Courier backend system",
          ],
          performance: [
            "Optimized GraphQL queries",
            "Lazy-loaded tracking components",
            "Reduced API calls using caching",
          ],
          testing: [
            "Manual testing for tracking flows",
            "API response validation",
          ],
          roles: {
            user: "Track parcels",
            corporate: "Bulk tracking + dashboard",
            admin: "Manage shipments",
          },
        },
        url: "/grameenphone-gpfi",
        link: "https://gpfi.grameenphone.com",
      },
    ],
  };

  return new Response(JSON.stringify(projects), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}
