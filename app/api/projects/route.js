export async function GET() {
  const projects = {
    title: "Projects",
    sub: "spotlight",
    data: [
      {
        category: [3, 4, 6],
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
        link: "https://sb-ft.ergov.com",
        doc: "",
      },
      {
        category: [2, 4],
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
        link: "https://skitto.com",
        doc: "",
      },
      {
        category: [3, 4, 6],
        bannerimage: "/projectimage/gpfi.jpg",
        projectdemo: "/projectimage/screenshots/gpfi.png",
        company: "Grameenphone",
        title: "GpFi (Revamp)",
        subtitle: "project by Grameenphone",
        description:
          "This project involved the redevelopment of the GPFi platform, a next-generation Wi-Fi service provisioning and management system for Grameenphone. The revamp aimed to enhance the user experience, streamline the ordering and tracking process, and integrate modern authentication and payment solutions. The redesigned platform features an intuitive step-by-step flow for ordering and tracking Wi-Fi services, along with a centralized plan management dashboard. Additionally, it incorporates SSO login and bKash-based ordering to provide a seamless and user-friendly service experience.",
        stacks: ["Next.js", "ChakraUI", "LeafletJS", "js-cookie"],
        details: {
          overview:
            "GPFi is a next-generation Wi-Fi service provisioning and management platform developed for Grameenphone. It is designed to serve both individual and corporate users through a seamless digital experience. The system features an intuitive step-by-step ordering and tracking flow, along with a centralized plan management dashboard. It also integrates modern authentication and payment solutions, including SSO login and bKash-based ordering, ensuring a smooth and user-friendly service experience.",
          features: [
            "Dynamic Sortable Homepage section through CMS",
            "Developed different plans and device across available areas",
            "Designed complete order journey flow (Geo Location → Plan → Device → Info → Review → Submission → Tracking → Plan Activation → Dashboard)",
            "Cookies management for storing left out session data and user preferences",
            "Integration OTP & SSO login for seamless authentication across Grameenphone services and Third Party apps",
            "GEO Location by using BariKoi API for personalized access plan & device recommendation",
            "OTT platform access assigned to plans and device",
            "Map integration using LeafletJS for visualizing Wi-Fi coverage areas and user locations",
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
            backend: ["dhrupal & 3rd party api"],
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
            "LeafletJS for interactive maps by taking geo code from BariKoi API",
          ],
          architecture: {
            type: "client-server & server-side",
            pattern: "component-based + API-driven",
            dataFlow: "API → Server/Client → UI → Conditional Rendering",
          },
          integrations: [
            "REST Api (Step by step order flow)",
            "OTP Login system for authentication",
            "Dashboard data visualization",
            "Third Party API for Geo Location data (BariKoi)",
          ],
          performance: [
            "API Caching for frequently accessed data",
            "Dynamic Imports for homepage components reduced initial load time",
            "Maintain Static & Dynamic page balance for better SEO and user experience",
          ],
          testing: [
            "Manual testing for tracking flows",
            "API response validation for order flow and payment validation",
          ],
          roles: {
            user: "Order, maintain & renew plans and devices",
            corporate: "Manage contents for the user",
            admin: "Manage shipments",
          },
        },
        url: "/grameenphone-gpfi",
        link: "https://gpfi.grameenphone.com",
        doc: "",
      },
      {
        category: [1, 4, 5],
        bannerimage: "/projectimage/issuetracker.png",
        projectdemo: "/projectimage/screenshots/issuetracker.png",
        company: "Issue Tracker",
        title: "Issue Tracking & Team Assignment System",
        subtitle: "Full Stack Issue Management Platform",
        description:
          "Issue Tracker is a modern issue tracking and assignment platform built for teams to efficiently manage bugs, tasks, and feature requests. The system provides a clean workflow for creating, assigning, updating, and resolving issues through a real-time dashboard and status-driven workflow. Built with Next.js, TypeScript, Prisma ORM, and NextAuth, the platform delivers a fast, responsive, and scalable experience with Google authentication, markdown support, filtering, sorting, and team collaboration features.",
        stacks: [
          "Next.js",
          "React",
          "TypeScript",
          "Prisma ORM",
          "NextAuth",
          "Tailwind CSS",
          "React Markdown",
          "MySQL",
        ],

        details: {
          overview:
            "Issue Tracker is a collaborative issue management platform designed for small-to-medium teams to track bugs, feature requests, and project tasks in one centralized workspace. The system includes Google authentication, markdown-powered issue descriptions, assignment workflows, filtering and sorting capabilities, and a live analytics dashboard that provides real-time visibility into project health and task progress.",

          features: [
            "Google authentication using NextAuth for secure and seamless sign-in",
            "Create, edit, delete, and manage issues with markdown descriptions",
            "Three-stage issue workflow (Open → In Progress → Closed)",
            "Issue assignment system with assignee avatars and ownership tracking",
            "Live dashboard with issue statistics and project health visualization",
            "Latest issues activity feed with real-time status updates",
            "Status filtering and column-based sorting system",
            "Pagination support for managing large issue backlogs",
            "Responsive UI optimized for desktop and mobile devices",
            "Persistent authentication sessions across browser restarts",
            "Markdown rendering support for structured issue descriptions",
            "URL-based filter and sorting persistence for shareable views",
          ],

          challenges: [
            "Managing authenticated and unauthenticated user states across protected actions",
            "Implementing real-time dashboard synchronization with issue updates",
            "Handling markdown rendering and validation securely",
            "Designing scalable filtering, sorting, and pagination logic",
            "Maintaining responsive table layouts across smaller devices",
            "Optimizing Prisma queries for dashboard statistics and issue feeds",
          ],

          results: [
            "Delivered a streamlined workflow for issue tracking and team collaboration",
            "Improved task visibility through live dashboard analytics",
            "Reduced workflow complexity with a clean and intuitive UI",
            "Created a scalable issue management architecture for future expansion",
            "Enabled teams to organize and resolve issues more efficiently",
          ],

          techStack: {
            frontend: [
              "Next.js",
              "React",
              "TypeScript",
              "Tailwind CSS",
              "React Markdown",
            ],

            backend: ["Next.js API Routes", "Prisma ORM", "MySQL", "NextAuth"],

            tools: [
              "Axios",
              "React Hook Form",
              "Zod Validation",
              "React Query",
              "Lucide Icons",
              "React Toastify",
            ],
          },

          responsibilities: [
            "Designed and developed the complete frontend UI and workflow",
            "Implemented Google authentication with NextAuth",
            "Integrated Prisma ORM with relational database schema",
            "Built issue CRUD operations with validation",
            "Developed dashboard analytics and issue visualization",
            "Implemented filtering, sorting, and pagination system",
            "Created responsive layouts for desktop and mobile experiences",
            "Managed markdown rendering and issue detail pages",
          ],

          technologies: [
            "Next.js for routing, server-side rendering, and API handling",
            "TypeScript for scalable and type-safe development",
            "Prisma ORM for database management and optimized querying",
            "NextAuth for Google OAuth authentication and session handling",
            "Tailwind CSS for responsive and utility-first styling",
            "React Markdown for rendering formatted issue descriptions",
            "MySQL for relational database storage and issue management",
          ],

          architecture: {
            type: "full-stack web application",
            pattern: "component-based + API-driven architecture",
            dataFlow:
              "Client UI → Next.js API Routes → Prisma ORM → Database → Dashboard/UI Rendering",
          },

          integrations: [
            "Google OAuth authentication with NextAuth",
            "RESTful API routes for issue operations",
            "Markdown editor and renderer integration",
            "Database integration using Prisma ORM",
          ],

          performance: [
            "Optimized database queries using Prisma select and pagination",
            "Server-side rendering for faster page loading and SEO benefits",
            "Reusable component architecture for maintainability",
            "Efficient dashboard aggregation queries for live statistics",
            "Conditional rendering and lazy loading for improved UX",
          ],

          testing: [
            "Manual testing for issue creation and assignment workflows",
            "Authentication and session validation testing",
            "Responsive UI testing across devices",
            "Validation testing for issue forms and markdown inputs",
            "API response and database consistency testing",
          ],

          roles: {
            user: "View issues and dashboard information",
            corporate: "Create, edit, assign, update, and manage issues",
            admin: "Monitor project activity and manage workflow",
          },
        },

        url: "/issue-tracker",
        link: "https://issue-tracker-simon.vercel.app/",
        doc: "https://simon-1606e4c3.mintlify.app",
      },
      {
        category: [2, 4],
        bannerimage: "/projectimage/skysearch.png",
        projectdemo: "/projectimage/screenshots/skysearch.png",
        company: "Skysearch",
        title: "Real-Time Flight Search & Booking Platform",
        subtitle: "Flight Aggregation & Booking System",
        description:
          "Skysearch Two is a modern flight search and booking platform that allows travelers to search, compare, and book flights using real-time airline pricing data. The platform supports one-way and round-trip bookings, advanced filtering, live pricing trends, traveler management, and a guided booking workflow. Built with a responsive and performance-focused architecture, the system provides a seamless travel booking experience from search to confirmation.",

        stacks: [
          "Next.js",
          "React",
          "TypeScript",
          "Tailwind CSS",
          "REST API",
          "Chart.js",
          "React Hook Form",
          "Zod",
        ],

        details: {
          overview:
            "Skysearch Two is a real-time flight discovery and booking platform built for travelers who need fast access to live airline fares and a streamlined booking experience. Users can search flights by airport or city, compare pricing across airlines, filter results by aircraft or route, visualize pricing trends, and complete bookings through a multi-step traveler information flow. The system focuses on usability, live data synchronization, and responsive performance.",

          features: [
            "Real-time flight search using live airline pricing APIs",
            "Support for One Way and Round Trip booking flows",
            "Airport autocomplete using IATA codes and city names",
            "Advanced flight filtering by airline, aircraft, and route",
            "Interactive flight price trends chart with min/avg/max fare analysis",
            "Passenger management for adults, children, and infants",
            "Travel class selection (Economy, Business, First)",
            "Responsive booking workflow with step-by-step traveler forms",
            "Dynamic itinerary review modal with pricing breakdown",
            "Passport and travel document management for each traveler",
            "Real-time booking confirmation and failure handling",
            "Pagination and filtering system for large flight result sets",
            "Live pricing refresh before booking confirmation",
            "Mobile-friendly UI with filter drawer and optimized layouts",
          ],

          challenges: [
            "Handling live airline pricing fluctuations between searches and bookings",
            "Managing complex traveler forms with multiple passenger types",
            "Building scalable filter logic with dynamic API-driven data",
            "Synchronizing search state, filters, and pagination in the URL",
            "Handling real-time flight availability and pricing validation",
            "Designing responsive flight cards and itinerary displays for mobile devices",
            "Managing complex date validation for one-way and round-trip searches",
          ],

          results: [
            "Delivered a smooth and responsive flight booking experience",
            "Improved flight discovery with advanced filtering and live trends",
            "Reduced booking friction with a guided traveler flow",
            "Created a scalable architecture for future airline integrations",
            "Enhanced user decision-making with real-time price visualization",
          ],

          techStack: {
            frontend: [
              "Next.js",
              "React",
              "TypeScript",
              "Tailwind CSS",
              "Chart.js",
              "React Hook Form",
            ],

            backend: [
              "REST API Integration",
              "Flight Search APIs",
              "Booking APIs",
            ],

            tools: [
              "Axios",
              "Zod Validation",
              "React Query",
              "Date Picker",
              "Dynamic Filters",
              "Responsive Drawer UI",
            ],
          },

          responsibilities: [
            "Built the complete search and booking UI workflow",
            "Integrated real-time flight search APIs",
            "Developed advanced filtering and sorting systems",
            "Implemented booking review and traveler detail flows",
            "Managed passenger validation and travel document forms",
            "Designed responsive layouts for desktop and mobile devices",
            "Integrated dynamic chart visualization for pricing trends",
            "Handled live pricing updates and booking state management",
          ],

          technologies: [
            "Next.js for routing, performance optimization, and server-side rendering",
            "TypeScript for scalable and type-safe development",
            "Tailwind CSS for responsive and utility-first UI design",
            "REST APIs for flight search and booking integrations",
            "Chart.js for dynamic fare trend visualization",
            "React Hook Form for scalable traveler form handling",
            "Zod for client-side validation and error management",
          ],

          architecture: {
            type: "real-time booking platform",
            pattern: "component-based + API-driven architecture",
            dataFlow:
              "Search Form → Flight API → Filter Engine → Booking Flow → Traveler Validation → Booking Confirmation",
          },

          integrations: [
            "Real-time flight search APIs",
            "Flight booking and reservation APIs",
            "Airport autocomplete and IATA search integration",
            "Dynamic pricing and fare validation APIs",
          ],

          performance: [
            "Optimized API requests for faster flight result rendering",
            "Client-side filtering reduced unnecessary API calls",
            "Lazy rendering for large flight result sets",
            "Responsive layouts optimized for mobile booking flows",
            "Efficient state management for filters, pagination, and booking data",
          ],

          testing: [
            "Manual testing for booking and traveler workflows",
            "Validation testing for passport and traveler information",
            "Search and filter accuracy testing",
            "Responsive UI testing across multiple devices",
            "API response and live pricing validation testing",
          ],

          roles: {
            user: "Search, filter, review, and book flights",
            admin: "Monitor bookings and API performance",
          },
        },

        url: "/skysearch-two",
        link: "https://skysearch-two.vercel.app/",
        doc: "https://interfurnbangladesh.mintlify.app",
      },
      {
        category: [1, 4],
        bannerimage: "/projectimage/grocery.png",
        projectdemo: "/projectimage/screenshots/grocery.png",
        company: "Monthly Grocery Tracker",
        title: "Smart Household Grocery & Budget Tracker",
        subtitle: "Static Inventory & Consumption Prediction App",
        description:
          "Monthly Grocery Tracker is a lightweight, static web application designed to help households manage groceries, track consumption, and monitor monthly budgets. It provides an intuitive system for tracking inventory levels, predicting usage patterns, generating shopping lists, and analyzing spending — all without any backend or external dependencies. Built using vanilla HTML, CSS, and JavaScript, the app runs entirely in the browser with a structured three-layer architecture.",

        stacks: ["HTML5", "CSS3", "JavaScript (Vanilla)", "Netlify CLI"],

        details: {
          overview:
            "Monthly Grocery Tracker is a client-side household inventory management tool that helps users track grocery items, monitor remaining stock, predict consumption rates, and manage monthly budgets. The system uses in-memory data structures and pure JavaScript logic to calculate usage trends, alert low stock items, and estimate restocking needs. It is designed as a fully static application with no backend, making it fast, portable, and easy to deploy.",

          features: [
            "Track grocery items with quantity, cost, and expiry information",
            "Real-time budget calculation and monthly spending overview",
            "Low-stock and expiry alerts based on configurable thresholds",
            "Consumption history tracking with usage logs",
            "Automatic prediction of item depletion dates",
            "Smart notifications for restocking needs",
            "Daily usage tracking for selected grocery items",
            "Simple and fast UI with no framework dependencies",
            "Fully static deployment with zero backend requirements",
            "Netlify CLI support for local development server",
          ],

          challenges: [
            "Managing state consistently in a fully client-side environment without persistence",
            "Implementing consumption prediction logic using usage history data",
            "Handling budget calculations in real-time across multiple item updates",
            "Structuring logic separation between data, business rules, and UI rendering",
            "Dealing with hardcoded UI constraints such as fixed dropdown items",
            "Simulating real-world inventory behavior using in-memory data only",
          ],

          results: [
            "Delivered a fully functional offline-capable grocery tracking system",
            "Enabled predictive insights for household consumption patterns",
            "Improved budgeting visibility through real-time calculations",
            "Created a lightweight and fast-loading static web application",
            "Demonstrated clean separation of logic, data, and UI layers",
          ],

          techStack: {
            frontend: ["HTML5", "CSS3", "JavaScript (Vanilla)"],

            backend: ["None (fully client-side application)"],

            tools: [
              "Netlify CLI",
              "Browser DevTools",
              "Local Storage (optional extension)",
            ],
          },

          responsibilities: [
            "Built full UI using semantic HTML and responsive CSS",
            "Implemented core business logic for budget and inventory tracking",
            "Developed consumption prediction algorithms in vanilla JavaScript",
            "Managed state using in-memory data structures",
            "Created dashboard rendering and event-driven UI updates",
            "Integrated local development workflow using Netlify CLI",
          ],

          technologies: [
            "Vanilla JavaScript for all application logic and state handling",
            "HTML5 for semantic structure and accessibility",
            "CSS3 for responsive and clean UI design",
            "Custom calculation functions for budget and inventory tracking",
            "Browser runtime for full client-side execution",
          ],

          architecture: {
            type: "fully client-side static application",
            pattern: "three-layer architecture (data → logic → UI)",
            dataFlow:
              "data.js (state) → logic.js (calculations) → script.js (DOM rendering & events)",
          },

          integrations: [
            "Netlify CLI for local development server",
            "Browser-based storage execution model",
            "Optional localStorage extension for persistence (not implemented by default)",
          ],

          performance: [
            "Zero dependency architecture ensures instant load time",
            "Lightweight vanilla JS execution with no framework overhead",
            "Efficient DOM re-rendering on state changes",
            "Minimal memory footprint due to static data model",
          ],

          testing: [
            "Manual testing across modern browsers",
            "Validation of budget calculation logic",
            "Inventory update and deletion scenario testing",
            "Edge case testing for consumption prediction functions",
            "UI interaction and form handling verification",
          ],

          roles: {
            user: "Manage groceries, track consumption, and monitor budget",
          },
        },

        url: "/monthly-grocery-tracker",

        link: "https://monthly-grocery-tracker.netlify.app/",
      },
      {
        category: [1, 4],
        bannerimage: "/projectimage/imagegallery.png",
        projectdemo: "/projectimage/screenshots/imagegallery.png",
        company: "Image Gallery",
        title: "Interactive Image Gallery & Drag-and-Drop System",
        subtitle: "React-based Visual Gallery with DnD Sorting",
        description:
          "Image Gallery is a modern React-based interactive image gallery application that allows users to view, reorder, select, and upload images directly in the browser without any backend. Built with Create React App and powered by dnd-kit, it provides a smooth drag-and-drop experience, bulk image selection, and client-side image uploads using object URLs. The project is deployed on Netlify and optimized for fast, lightweight performance.",

        stacks: [
          "React 18",
          "JavaScript (ES6+)",
          "dnd-kit",
          "Bootstrap 5",
          "Reactstrap",
          "Netlify",
        ],

        details: {
          overview:
            "Image Gallery is a fully client-side image management and interaction system built with React. It enables users to visually organize images through drag-and-drop reordering, select multiple images for bulk actions, and upload new images directly from their device. The application uses in-memory state management and requires no backend, making it fast, portable, and easy to deploy.",

          features: [
            "Interactive 5-column responsive image grid layout",
            "Drag-and-drop image reordering using dnd-kit",
            "Featured 2×2 layout for highlighted images",
            "Bulk image selection with checkbox controls",
            "Select all / unselect all functionality",
            "Client-side image upload using object URLs",
            "Drag-and-drop file upload support from OS",
            "Visual hover and drag interaction feedback",
            "Dynamic state updates without page reload",
            "Fully client-side execution with no backend dependency",
          ],

          challenges: [
            "Implementing smooth drag-and-drop reordering with consistent grid layout",
            "Managing in-memory image state without persistence layer",
            "Handling file uploads entirely in the browser using object URLs",
            "Maintaining UI performance during frequent state updates",
            "Balancing grid responsiveness with featured image layout logic",
            "Avoiding state complexity in a single-component architecture",
          ],

          results: [
            "Delivered a smooth and intuitive drag-and-drop gallery experience",
            "Enabled fully browser-based image management without backend",
            "Improved user interaction with real-time visual feedback",
            "Created a lightweight and fast-loading React application",
            "Demonstrated efficient use of dnd-kit for sortable UI systems",
          ],

          techStack: {
            frontend: [
              "React 18",
              "JavaScript (ES6+)",
              "Bootstrap 5",
              "Reactstrap",
              "React Icons",
              "dnd-kit",
            ],

            backend: ["None (fully client-side application)"],

            tools: [
              "Create React App",
              "Jest",
              "React Testing Library",
              "Netlify Deployment",
              "web-vitals",
            ],
          },

          responsibilities: [
            "Built complete image gallery UI in React",
            "Implemented drag-and-drop sorting with dnd-kit",
            "Developed bulk selection and delete functionality",
            "Created client-side image upload system using object URLs",
            "Managed all application state using React hooks",
            "Designed responsive grid layout with featured image support",
            "Deployed application on Netlify with CI-based builds",
          ],

          technologies: [
            "React for component-based UI architecture",
            "dnd-kit for modern drag-and-drop interactions",
            "Bootstrap for responsive layout and styling",
            "Reactstrap for UI components",
            "Create React App for build tooling and development environment",
            "Netlify for deployment and hosting",
          ],

          architecture: {
            type: "single-page client-side application",
            pattern: "single-component state-driven architecture",
            dataFlow:
              "User Actions → React State (useState) → UI Re-render → DOM Update (no backend persistence)",
          },

          integrations: [
            "dnd-kit drag-and-drop system for sorting",
            "Browser File API for image uploads",
            "Netlify static hosting and deployment pipeline",
            "Object URL API for temporary image storage",
          ],

          performance: [
            "Lightweight client-only architecture ensures fast load times",
            "Efficient React state updates for smooth drag interactions",
            "No backend calls reduce latency and improve responsiveness",
            "Optimized grid rendering for image-heavy layouts",
          ],

          testing: [
            "Basic Jest setup via Create React App",
            "React Testing Library integration (minimal usage)",
            "Manual UI testing for drag-and-drop interactions",
            "File upload and selection behavior testing",
            "Cross-browser compatibility testing",
          ],

          roles: {
            user: "Browse, upload, select, and reorder images",
            admin: "Manage gallery content and UI behavior (conceptual)",
          },
        },

        url: "/img-gallery",

        link: "https://dnd-imagegallery.netlify.app",
      },
      {
        category: [1, 4],
        bannerimage: "/projectimage/daffodilnewsportal.png",
        projectdemo: "/projectimage/screenshots/daffodilnewsportal.png",
        company: "Daffodil International University",
        title: "Institutional News & Notice Aggregation Platform",
        subtitle: "Static University Information Portal",

        description:
          "Daffodil News Portal is a static institutional web platform built for Daffodil International University to aggregate and present official news, notices, academic journals, and campus events in a structured, responsive layout. Built using HTML5, Bootstrap 5, and custom CSS, the system provides fast access to university updates with a clean, dependency-light architecture deployed on Netlify.",

        stacks: [
          "HTML5",
          "CSS3",
          "Bootstrap 5.1.3",
          "FontAwesome",
          "Google Fonts",
        ],

        details: {
          overview:
            "The Daffodil News Portal is a framework-free static website designed to serve as a centralized information hub for university news, notices, academic journals, and campus events. It focuses on simplicity, fast loading, and direct access to institutional content, relying entirely on HTML, CSS, and CDN-based dependencies without any backend or build system.",

          features: [
            "Responsive Bootstrap-based navigation system",
            "Full-screen hero section with university branding and CTAs",
            "Official notice board linking to external PDF notices",
            "Academic journal showcase with hover interactions",
            "Campus news and events card grid layout",
            "Contact form UI with social media integration",
            "Fully responsive design across mobile and desktop devices",
            "Static deployment via Netlify CDN",
            "Clean section-based single-page layout",
          ],

          challenges: [
            "Managing fully hardcoded content without CMS or API layer",
            "Handling large unoptimized image assets (~23MB total)",
            "Maintaining scalability in a single-page HTML architecture",
            "Non-functional contact form due to lack of backend integration",
            "Dependency on external CDNs for UI libraries and fonts",
            "No build pipeline leading to lack of optimization and caching control",
          ],

          results: [
            "Delivered a fast and lightweight institutional information portal",
            "Improved accessibility of university notices and news",
            "Enabled simple deployment with zero build complexity",
            "Maintained consistent branding aligned with university identity",
            "Provided scalable foundation for future CMS or API integration",
          ],

          techStack: {
            frontend: [
              "HTML5",
              "CSS3",
              "Bootstrap 5.1.3",
              "FontAwesome",
              "Google Fonts",
            ],

            backend: ["None (fully static site)"],

            tools: [
              "Netlify Hosting",
              "CDN-based asset delivery",
              "Static file deployment pipeline",
            ],
          },

          responsibilities: [
            "Developed full static UI using HTML and Bootstrap",
            "Implemented responsive layouts for all sections",
            "Structured academic content sections (news, journals, notices)",
            "Integrated external university links and resources",
            "Managed deployment through Netlify static hosting",
          ],

          technologies: [
            "Bootstrap for responsive grid and UI components",
            "FontAwesome for iconography and UI enhancement",
            "Google Fonts for typography styling",
            "Netlify for static hosting and deployment",
            "CSS transitions for hover interactions and UI effects",
          ],

          architecture: {
            type: "fully static web application",
            pattern: "single-page section-based layout",
            dataFlow:
              "Static HTML → Bootstrap Rendering → CDN Assets → Client Browser (no backend processing)",
          },

          integrations: [
            "Bootstrap CDN for UI framework",
            "FontAwesome CDN for icons",
            "Google Fonts CDN for typography",
            "Netlify static hosting platform",
            "External university links for journals and notices",
          ],

          performance: [
            "Fast load time due to static HTML structure",
            "No JavaScript framework overhead",
            "CDN-based asset delivery for UI libraries",
            "Simple DOM structure improves rendering speed",
          ],

          testing: [
            "Cross-browser layout validation",
            "Responsive design testing across devices",
            "Manual UI verification for navigation and links",
            "Content rendering validation across sections",
          ],

          roles: {
            user: "Browse news, notices, journals, and campus events",
            student: "Access academic updates and official notices",
            admin: "Manually update content via HTML and redeployment",
          },
        },

        url: "/daffodil-news-portal",

        link: "https://daffodilnewsportal.netlify.app",
      },
    ],
  };

  return new Response(JSON.stringify(projects), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}
