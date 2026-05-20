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
          responsibilities: ["Built dashboard UI", "Integrated GraphQL APIs"],
          architecture: {
            type: "server-side  & client-server",
            pattern: "component-based + API-driven",
            dataFlow: "GraphQL/Api → Server/Client → UI",
          },
          integrations: [
            "GraphQL API (parcel tracking)",
            "CMS api for page details",
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
            admin: "Manage page content",
          },
        },
        url: "/sundarban",
        link: "",
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
        stacks: [],
        details: {
          overview:
            "The project is a comprehensive parcel tracking system that caters to both individual users and corporate clients. It provides real-time tracking of parcels, allowing users to monitor their shipments from dispatch to delivery. The system supports both national and international shipments, making it versatile for a wide range of users.",
          features: [
            "Real-time tracking of parcels",
            "Support for national and international shipments",
            "User-friendly interface built with Tailwind CSS and MUI",
            "Efficient routing and optimization using Next.js App Router",
            "Integration with GraphQL for seamless data management",
          ],
          challenges: [
            "Handling real-time tracking updates",
            "Optimizing GraphQL queries for large datasets",
          ],
          results: [
            "Reduced parcel tracking latency by 30%",
            "Improved UX for corporate users",
          ],
          techStack: {
            frontend: [],
            backend: [],
            tools: [],
          },
          responsibilities: ["Built dashboard UI", "Integrated GraphQL APIs"],
          technologies: [
            "Next.js for server-side rendering and efficient routing",
            "Material UI for a modern and responsive user interface",
            "Tailwind CSS for custom styling and design flexibility",
            "Axios for handling API requests and responses",
            "GraphQL for efficient data querying and management",
          ],
          architecture: {
            type: "client-server",
            pattern: "component-based + API-driven",
            dataFlow: "GraphQL → React Query/Client → UI",
          },
          integrations: [
            "GraphQL API (parcel tracking)",
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
        url: "/skitto-revamp",
        link: "",
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
            "The project is a comprehensive parcel tracking system that caters to both individual users and corporate clients. It provides real-time tracking of parcels, allowing users to monitor their shipments from dispatch to delivery. The system supports both national and international shipments, making it versatile for a wide range of users.",
          features: [
            "Real-time tracking of parcels",
            "Support for national and international shipments",
            "User-friendly interface built with Tailwind CSS and MUI",
            "Efficient routing and optimization using Next.js App Router",
            "Integration with GraphQL for seamless data management",
          ],
          challenges: [
            "Handling real-time tracking updates",
            "Optimizing GraphQL queries for large datasets",
          ],
          results: [
            "Reduced parcel tracking latency by 30%",
            "Improved UX for corporate users",
          ],
          techStack: {
            frontend: [],
            backend: [],
            tools: [],
          },
          responsibilities: ["Built dashboard UI", "Integrated GraphQL APIs"],
          technologies: [
            "Next.js for server-side rendering and efficient routing",
            "Material UI for a modern and responsive user interface",
            "Tailwind CSS for custom styling and design flexibility",
            "Axios for handling API requests and responses",
            "GraphQL for efficient data querying and management",
          ],
          architecture: {
            type: "client-server",
            pattern: "component-based + API-driven",
            dataFlow: "GraphQL → React Query/Client → UI",
          },
          integrations: [
            "GraphQL API (parcel tracking)",
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
