export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Testimonials", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title:
      "I prioritize client collaboration, fostering open and transparent communication to ensure every project aligns with their vision and goals.",
    description:
      "By actively listening and maintaining a clear dialogue, I create a partnership built on trust, enabling me to deliver tailored solutions that truly resonate with the client’s needs.",
    className: "lg:col-span-2 md:col-span-3 ",
    imgClassName: "",
    titleClassName: "justify-end text-black",
    img: "",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: "ensuring seamless collaboration regardless of location.",
    className: "lg:col-span-1 md:col-span-3 ",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "I constantly try to improve",
    description: "",
    className: "lg:col-span-2 md:col-span-3 ",
    imgClassName: "",
    titleClassName: "justify-start ",
    img: "/tech.jpg",
    spareImg: "",
  },
  {
    id: 4,
    title: "Nursing professional with a passion for development.",
    description:
      "A nursing professional turned developer, I blend empathy, precision, and problem-solving to create intuitive, user-focused web applications that make a real impact.",
    className: "lg:col-span-1 md:col-span-3",
    imgClassName: "",
    titleClassName: "justify-start ",
    img: "/grid.svg",
    spareImg: "",
  },

  {
    id: 5,
    title: "Currently building a React Native app",
    description:
      "It's a Home Automation App where you can control your lights and appliances.",
    className: "md:col-span-3",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/app.png",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want me in your team?",
    description: "",
    className: "lg:col-span-3 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center gap-3 md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "My First Portfolio",
    des: "A simple yet, modern portfolio build with nextjs, typescript and tailwindcss.",
    img: "/p3.svg",
    iconLists: ["/javascript.svg", "html.svg", "css.svg"],
    link: "https://github.com/dmukaj/portfolio",
  },
  {
    id: 2,
    title: "My Library App",
    des: "An online library where you can search and purchase your favorite books. Build with javascript, react,  mongodb and tailwidcss ",
    img: "/library.jpg",
    iconLists: ["/re.svg", "/javascript.svg", "css.svg"],
    link: "/https://github.com/dmukaj/library-app",
  },

  {
    id: 4,
    title: "My Macros Calculator",
    des: "A more complex app where you can calculate your daily macros accordind to you activity level and goal and tract all your meals with ease.",
    img: "/macros.svg",
    iconLists: ["javascript.svg", "re.svg", "/docker.svg", "css.svg"],
    link: "https://macros.dajana.dev",
  },
  {
    id: 4,
    title: "Bubble ",
    des: "A chatbot app where you can chat with a virtual asssitant who can answer all your questions and read your files help with your work.",
    img: "/bubble.jpg",
    iconLists: ["re.svg", "/javascript.svg", "/docker.svg", "css.svg"],
    link: "https://github.com/dmukaj/todo-app",
  },
  {
    id: 4,
    title: "CrunchyRoll",
    des: " A copycat  website of crunchyroll where you can watch anime and manga.",
    img: "/crunchyroll.webp",
    iconLists: ["re.svg", "/javascript.svg", "/docker.svg", "css.svg"],
    link: "https://github.com/dmukaj/todo-app",
  },
];

export const testimonials = [
  {
    quote:
      "I am a Self-taught and compassionate healthcare professional transitioning to front-end web development.",
    name: "Education and",
    title: "Experience",
  },
  {
    quote:
      "With over 2 years in HTML, CSS, JavaScript, and React. Meta Front-End Developer Certificate.",
    name: "Healthcare",
    title: "Experience",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Languages &  Frameworks",
    desc: " HTML, CSS, JavaScript, React, React Native, Next.js, MongoDB, Docker, Prisma, NextAuth ",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Backend & Databases",
    desc: "Node.js, Docker, Prisma, NextAuth, MongoDB, MySQL, PostgreSQL.",
    className: "md:col-span-2",
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Tools and Libraries",
    desc: "Visual Studio Code, Git, GitHub, Figma, Tailwind CSS, Bootstrap, Axios, Lodash, ShadCN, Mongoose ",
    className: "md:col-span-2",
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "Technologies",
    desc: "Responsive Design, REST APIs, JSON, AJAX.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
  },
  {
    id: 2,
    img: "/insta.svg",
  },
  {
    id: 3,
    img: "/link.svg",
  },
];
