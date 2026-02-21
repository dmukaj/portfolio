// Updated to match your resume (Dajana_Mukaj_Resume.pdf) :contentReference[oaicite:0]{index=0}

export const navItems = [
  { name: "About", link: "#about" },
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
      "React/Next.js + FastAPI/Node.js, databases (MongoDB/PostgreSQL), secure auth, and Docker containerization.",
    className: "md:col-span-3 col-span-1",
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
      "A personal portfolio website built to highlight my work as a software developer student, including featured projects, technical skills, and ways to get in touch.",
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
      "Thinkr is a full-stack app with a React/Next.js frontend and a FastAPI/Node.js backend. It integrates APIs and automation to search multiple online stores and helps users compare prices efficiently.",
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
      "My Daily Macros helps users calculate personalized macro targets and track meals. Built as a responsive web app with modern UI and data-driven components.",
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
      "A React Native + Expo iOS application built to practice mobile UI patterns and deployment workflows.",
    img: "/smart-light.jpeg",
    spareImg: "/grid.svg",
    iconLists: ["/dock.svg", "/ts.svg"],
    link: "https://smart-lights.dajana.dev",
    http: "https://smart-lights.dajana.dev",
  },
  {
    id: 5,
    title: "BusyBee",
    subTitle: "iOS App",
    des: "An iOS app project built with Expo as part of my mobile development work.",
    longDes:
      "BusyBee is an iOS application built with React Native and Expo to strengthen mobile development skills and deployment practices.",
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
      "Kube Pilot is a web project focused on presenting services and tooling clearly, with a modern responsive UI.",
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
