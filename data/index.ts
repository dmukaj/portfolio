// Updated to match your resume (Dajana_Mukaj_Resume.pdf) :contentReference[oaicite:0]{index=0}

export const navItems = [
  { name: "About", link: "#about-me" },
  { name: "Projects", link: "#projects" },
  { name: "Skills", link: "#skills" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "I prioritize clear, open collaboration.",
    description:
      "I bring a detail-oriented, reliable, and adaptable approach from healthcare into software development—communicating clearly and building trust throughout the process.",
    className: "lg:col-span-2 md:col-span-3 ",
    imgClassName: "",
    titleClassName: "justify-end text-white",
    img: "",
  },
  {
    id: 2,
    title: "I'm flexible with time zone communication",
    description: "Ensuring smooth collaboration regardless of location.",
    className: "lg:col-span-1 md:col-span-3 ",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
  },
  {
    id: 3,
    title: "I constantly try to improve",
    description:
      "I’m always learning—refining my skills and staying current with modern web and iOS development tools to deliver better solutions.",
    className: "lg:col-span-2 md:col-span-3 ",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-48 h-full",
    titleClassName: "justify-start ",
    img: "/grid.svg",
  },
  {
    id: 4,
    title: "Software developer student with a nursing background.",
    description:
      "I build responsive full-stack web and iOS applications, combining empathy and precision with strong problem-solving and collaboration.",
    className: "lg:col-span-1 md:col-span-3",
    imgClassName: "",
    titleClassName: "justify-start ",
    img: "",
  },
  {
    id: 5,
    title: "Focused on full-stack web + iOS app development",
    description:
      "React, Next.js, FastAPI, Node.js, Databases, Secure auth, Docker, Github.",
    className: "md:col-span-3 col-span-1 ",
    imgClassName: "",
    titleClassName:
      "absolute w-2/3  md:w-full justify-center md:justify-start lg:justify-center ",
    img: "",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want me on your team?",
    description: "",
    className: "lg:col-span-3 md:col-span-3 w-full",
    imgClassName: "",
    titleClassName: "justify-center gap-3 max-w-full text-center w-[100vw]",
    img: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "Portfolio",
    subTitle: "Personal Portfolio",
    des: "My portfolio site showcasing my projects, skills, and contact info.",
    longDes:
      "Portfolio Website is a personal web application designed to showcase my technical skills, projects, and professional background as a software developer. The site serves as a centralized hub where visitors can explore detailed information about my work, including full-stack applications, DevOps projects, and AI-powered tools, along with links to live demos and source code. Built with modern web technologies, the portfolio emphasizes responsive design, clean UI/UX, and clear navigation to ensure an engaging experience across devices.",
    img: "/portfolio.png",
    spareImg: "/grid.svg",
    iconLists: ["/re.svg", "/next.svg", "/ts.svg"],
    link: "https://github.com/dmukaj",
    http: "https://dajana.dev",
  },
  {
    id: 2,
    title: "Thinkr",
    subTitle: "Smart Shopping Assistant",
    des: "A smart shopping assistant that builds a list and searches multiple stores to compare prices in real time.",
    longDes:
      "Thinkr is a full-stack, AI-powered decision support application designed to help users make smarter purchasing choices by aggregating and analyzing real-world data from multiple online sources. The platform features a modern React/Next.js frontend and a FastAPI/Node.js backend that work together to search numerous online stores, retrieve product information through APIs and automated web scraping, and present clear price comparisons in a single interface. By combining external data sources, automation, and large language models, Thinkr transforms scattered product listings into structured insights, enabling users to quickly identify the best value options without manually browsing multiple websites. The system leverages asynchronous processing to handle data collection efficiently and delivers results through an intuitive, responsive UI, demonstrating advanced full-stack development, API integration, and real-world problem solving at scale.",
    img: "/thinkr.jpeg",
    spareImg: "/grid.svg",
    iconLists: [
      "/ts.svg",
      "/re.svg",
      "/next.svg",
      "/python.jpg",
      "/docker.svg",
    ],
    link: "https://github.com/dmukaj/thinkr",
    http: "https://thinkr.dajana.dev",
  },
  {
    id: 3,
    title: "My Daily Macros",
    subTitle: "Nutrition & Macro Tracking",
    des: "A nutrition app to calculate daily macros based on goals and track meals.",
    longDes:
      "My Daily Macros is a full-stack nutrition tracking web app built with Next.js (App Router), NextAuth, Prisma, and MongoDB. Users can create an account and securely log in, calculate a personalized daily calorie + macro target from their BMR, and log foods into meal categories (breakfast, lunch, dinner, snacks). The dashboard includes a calendar-based history view, allowing users to select any date and instantly see their exact intake totals, meal breakdown tables, and macro visualizations. All data is user-scoped and persisted in MongoDB, with server-side route handlers protecting sensitive operations and ensuring clean, accurate date-based queries.",
    img: "/macros.svg",
    spareImg: "/grid.svg",
    iconLists: ["/javascript.svg", "/re.svg", "/next.svg", "/docker.svg"],
    link: "https://github.com/dmukaj/macros-calculator",
    http: "https://macros.dajana.dev",
  },
  {
    id: 4,
    title: "Smart Light",
    subTitle: "iOS App",
    des: "An iOS app project focused on a clean mobile experience (built and deployed using Expo).",
    longDes:
      "Smart Lights is a cross-platform mobile application built with React Native, Expo, and TypeScript that enables users to control a network-connected smart light device directly from their phone. The app features a clean tab-based interface where users can toggle the light’s power state, choose from a palette of preset colors, and send real-time RGB commands to the device over the local network via HTTP requests. The device’s IP address is stored locally for persistent connectivity, allowing seamless control without repeated setup. Designed with cross-platform compatibility in mind, the application supports iOS, Android, and web environments, incorporates responsive layouts, theming, and haptic feedback for an intuitive user experience, and demonstrates integration between a mobile frontend and IoT hardware using lightweight REST-style communication.",
    img: "/smart-light.jpeg",
    spareImg: "/grid.svg",
    iconLists: ["/dock.svg", "/ts.svg"],
    link: "https://github.com/dmukaj/smart-lights",
    http: "",
  },
  {
    id: 5,
    title: "BusyBee",
    subTitle: "iOS App",
    des: "An iOS app project built with Expo as part of my mobile development work.",
    longDes:
      "BusyBee is an AI-powered mobile study app that helps users turn their learning materials into interactive quizzes for more effective practice. Built as a full-stack application with a React Native (Expo) iOS frontend and a backend powered by FastAPI and Node.js services. This app allows users to create quizzes from typed topics, uploaded documents, images, or photos taken directly from handwritten notes or textbooks. The system processes these inputs using document parsing, optical character recognition, and large language models to generate questions, answers, and explanations at a chosen difficulty level. Users can take quizzes with immediate feedback, save them to a personal library, and track their performance over time, while the app maintains a clean, engaging interface with features like camera integration, file uploads, secure storage, and smooth animations. BusyBee demonstrates full-stack mobile development, AI integration, and the ability to build a practical product that transforms raw study content into structured, interactive learning experiences.",
    img: "/busybee.jpeg",
    spareImg: "/grid.svg",
    iconLists: ["/dock.svg", "/ts.svg", "/python.jpg"],
    link: "https://github.com/dmukaj",
    http: "",
  },
  {
    id: 6,
    title: "Kube Pilot",
    subTitle: "Informational Website",
    des: "A website introducing the tools and services provided by Kube Pilot.",
    longDes:
      "Kube Pilot is a marketing/informational website for a DevOps business that specializes in Kubernetes-based infrastructure solutions. The site’s purpose is to present the company’s services, explain the value of Kubernetes adoption, showcase capabilities, and provide a way for potential clients to learn about and contact the business. It does not manage clusters directly — it functions as a professional web presence for a technical services company.",
    img: "/kube-pilot.png",
    spareImg: "/grid.svg",
    iconLists: ["/ts.svg", "/javascript.svg", "/css.svg"],
    link: "https://github.com/dmukaj/kube-pilot",
    http: "https://kube-pilot.dajana.dev",
  },
];

export const testimonials = [
  {
    id: 1,
    quote:
      "I’m a software developer student with a healthcare background, bringing empathy, reliability, and attention to detail into every build.",
    title: "Healthcare-to-Tech Perspective",
  },
  {
    id: 2,
    quote:
      "I focus on responsive, user-friendly experiences—backed by clean APIs and practical full-stack implementation.",
    title: "User-Focused Full-Stack",
  },
  {
    id: 3,
    quote:
      "I’m comfortable working across the stack: React/Next.js on the front end and FastAPI/Node.js on the back end.",
    title: "Full-Stack Builder",
  },
  {
    id: 4,
    quote:
      "Security matters—I'm familiar with implementing authentication flows using tools like Auth0, NextAuth, and JWT.",
    title: "Security Mindset",
  },
  {
    id: 5,
    quote:
      "I like building in a professional workflow—Docker containerization, GitHub collaboration, and real deployments.",
    title: "Build → Ship → Improve",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Languages",
    desc: "JavaScript, Python, Node.js, HTML, CSS",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Frameworks",
    desc: "React, TypeScript, Next.js, Tailwind CSS, Express.js, FastAPI, React Native",
    className: "md:col-span-2",
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "APIs & Core Skills",
    desc: "REST API, 3rd Party API Integration, OOP",
    className: "md:col-span-2",
    thumbnail: "/exp2.svg",
  },
  {
    id: 4,
    title: "Databases",
    desc: "MongoDB, PostgreSQL",
    className: "md:col-span-2",
    thumbnail: "/exp2.svg",
  },
  {
    id: 5,
    title: "Auth & Security",
    desc: "Auth0, BetterAuth, NextAuth, JWT",
    className: "md:col-span-2",
    thumbnail: "/exp2.svg",
  },
  {
    id: 6,
    title: "Developer Tools",
    desc: "GitHub, VS Code, Docker, Postman, CLI",
    className: "md:col-span-2",
    thumbnail: "/exp3.svg",
  },
  {
    id: 7,
    title: "Deployment",
    desc: "Vercel, Expo (iOS)",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
];
