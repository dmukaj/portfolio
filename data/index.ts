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
      "I prioritize clear and open collaboration with clients, ensuring every project aligns perfectly with their vision, goals, and expectations while delivering impactful results.",
    description: `By actively listening and communicating clearly, I build trust-based partnerships, ensuring every solution is tailored, effective, and aligned with the client’s goals.`,
    className: "lg:col-span-2 md:col-span-3 ",
    imgClassName: "",
    titleClassName: "justify-end text-white",
    img: "",
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: "ensuring seamless collaboration regardless of location.",
    className: "lg:col-span-1 md:col-span-3 ",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
  },
  {
    id: 3,
    title: "I constantly try to improve",
    description: `I believe in continuous learning and growth, always striving to refine my skills and stay up to date with the latest technologies. Every challenge is an opportunity to improve, adapt, and deliver better solutions.`,
    className: "lg:col-span-2 md:col-span-3 ",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-48 h-full",
    titleClassName: "justify-start ",
    img: "/grid.svg",
  },
  {
    id: 4,
    title: "Nursing professional with a passion for development.",
    description:
      "A nursing professional turned developer, I blend empathy, precision, and problem-solving to create intuitive, user-focused web applications that make a real impact.",
    className: "lg:col-span-1 md:col-span-3",
    imgClassName: "",
    titleClassName: "justify-start ",
    img: "",
  },

  {
    id: 5,
    title: "Currently building a copycat of the Crunchyroll website",
    description: "It's a website where you can watch anime and manga.",
    className: "md:col-span-3",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-48 h-full",
    titleClassName: "justify-center md:justify-start lg:justify-center ",
    img: "",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want me on your team?",
    description: "",
    className: "lg:col-span-3 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center gap-3 md:max-w-full max-w-60 text-center",
    img: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "My Library App",
    subTitle: `📚 Your Personal Book Collection 📚`,
    des: "My first website. An online library where you can search and purchase your favorite books. Build with javascript, react,  mongodb and tailwidcss ",
    longDes: `My Library App is my first website, designed as an online library where you can search, explore, and purchase your favorite books with ease. Built with JavaScript, React, MongoDB, and Tailwind CSS, this platform offers a smooth and responsive user experience for book lovers. Whether you're looking for bestsellers, hidden gems, or academic reads, My Library App makes discovering and buying books simple and enjoyable. Dive into the world of literature and start building your perfect book collection today!`,
    img: "/library.jpg",
    spareImg: "/grid.svg",
    iconLists: ["/docker.svg", "/re.svg", "/javascript.svg", "/css.svg"],
    link: "/https://github.com/dmukaj/library-app",
    http: "https://library.dajana.dev",
  },
  {
    id: 2,
    title: "My Macros Calculator",
    subTitle: `🥗 My Macros Calculator – Your Ultimate Nutrition & Meal Tracking App! 💪📊`,
    des: "A more complex app where you can calculate your daily macros according to you activity level and goal and tract all your meals with ease.",
    longDes: `My Macros Calculator is a comprehensive nutrition app designed to help you calculate your daily macros based on your activity level and personal fitness goals. Whether you're aiming to lose weight, build muscle, or maintain a balanced diet, My Macros Calculator provides a personalized macro breakdown to guide your nutrition. With an intuitive meal tracker, you can log your food intake, monitor your calories, proteins, carbs, and fats, and gain insights into your eating habits. Stay on track with smart recommendations, goal adjustments, and progress reports, making meal planning effortless. Take control of your nutrition and achieve your health goals with My Macros Calculator!`,
    img: "/macros.svg",
    spareImg: "/grid.svg",
    iconLists: [
      "/javascript.svg",
      "/re.svg",
      "/docker.svg",
      "/css.svg",
      "/next.svg",
    ],
    link: "https://github.com/dmukaj/macros-calculator",
    http: "https://macros.dajana.dev",
  },
  {
    id: 3,
    title: "Bubble ",
    subTitle: `Your AI-Powered Virtual Assistant! 🤖`,
    des: "A chatbot app where you can chat with a virtual assistant who can answer all your questions, read your files and help with your work.",
    longDes: `SmartChat is your personal AI-powered assistant, ready to answer all your questions, read your files, and help with your work in real-time. Whether you need quick information, document insights, or assistance with daily tasks, SmartChat is here to make your workflow smoother and more efficient. Perfect for students, professionals, and anyone looking for an intelligent, always-available helper—just start chatting and let SmartChat do the rest! 🚀📂💡`,
    img: "/bubble.jpg",
    spareImg: "/grid.svg",
    iconLists: [
      "/re.svg",
      "/javascript.svg",
      "/docker.svg",
      "/css.svg",
      "/next.svg",
    ],
    link: "https://github.com/dmukaj/bubble",
    http: "https://bubble.dajana.dev",
  },
  {
    id: 4,
    title: "Smart Lights",
    subTitle: `💡 Control Your Lights with Ease! 🏠`,
    des: "A React Native app where you can control your lights of your home.",
    longDes: `Smart Lights is a React Native app that lets you control the lighting in your home right from your phone. Easily turn lights on or off, adjust brightness, and even change colors—all with a simple tap. Whether you're at home or away, SmartHome gives you seamless control, making your space smarter, more energy-efficient, and tailored to your mood. Say goodbye to manual switches and experience the future of home automation today!`,
    img: "/img2.PNG",
    spareImg: "/grid.svg",
    iconLists: ["/ts.svg", "/javascript.svg", "/docker.svg"],
    link: "https://smart-lights.dajana.dev",
    http: "https://smart-lights.dajana.dev",
  },
  {
    id: 5,
    title: "Cupid",
    subTitle: `💘 A Fun & Romantic Valentine’s Web App! 💘`,
    des: `A fun valentine's app where you can send love messages and buy gifts to your loved ones.`,
    longDes: `Make your Valentine's confession extra special with this interactive three-phase journey! First, prove you're "the one" by answering some fun, lighthearted questions. Then, craft a heartfelt love message and even add a surprise gift. Finally, your loved one reaches the big moment—"Do you want to be my Valentine?" 💕 If they say yes, a sweet message and cute animation await! Whether for a crush, partner, or best friend, this playful experience makes Valentine's Day unforgettable. Try it now and spread the love!`,
    img: "/img6.jpg",
    spareImg: "/grid.svg",
    iconLists: ["/re.svg", "/javascript.svg", "/docker.svg", "/css.svg"],
    link: "https://github.com/dmukaj/cupid",
    http: "https://cupid.dajana.dev",
  },
  {
    id: 6,
    title: "Kube Pilot",
    subTitle: `🌐 Kube Pilot – Your Guide to Seamless Kubernetes Management 🚀`,
    des: " A website where you can learns about the services and tool that Kube Pilot provides.",
    longDes: `Welcome to Kube Pilot, the ultimate platform for managing and optimizing your Kubernetes environment. This website introduces you to the powerful tools and services that Kube Pilot offers, helping businesses streamline their container orchestration, automation, and cloud deployments. Learn how Kube Pilot simplifies scaling, monitoring, and securing your workloads, making Kubernetes management effortless. Explore our solutions and see how Kube Pilot can take your infrastructure to the next level!`,
    img: "/kube-pilot.png",
    spareImg: "/grid.svg",
    iconLists: ["/ts.svg", "/javascript.svg", "/docker.svg", "/css.svg"],
    link: "https://github.com/dmukaj/kube-pilot",
    http: "https://kube-pilot.dajana.dev",
  },
  {
    id: 7,
    title: "Crunchyroll Clone",
    subTitle: `🎬 Your Personal Streaming Service 🎬`,
    des: `A website where you can watch anime and manga. It's a copycat of the Crunchyroll website.`,
    longDes: `Crunchyroll is a streaming service that offers a wide range of anime and manga titles, including classics, new releases, and exclusive content. With its user-friendly interface and vast library, Crunchyroll provides a seamless experience for users of all ages. Whether you're a die-hard anime fan or a casual manga enthusiast, you can enjoy your favorite shows and stories with ease. Join the Crunchyroll community and discover new titles that you'll love. Start watching anime and manga today!`,
    img: "/crunchyroll.webp",
    spareImg: "/grid.svg",
    iconLists: ["/ts.svg", "/javascript.svg", "/docker.svg", "/css.svg"],
    link: "https://github.com/dmukaj/crunchyroll",
    http: "https://crunchyroll.dajana.dev",
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
  {
    id: 4,
    title: "Technologies",
    desc: "Responsive Design, REST APIs, JSON, AJAX.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
];

// export const socialMedia = [
//   {
//     id: 1,
//     img: "/git.svg",
//   },
//   {
//     id: 2,
//     img: "/insta.svg",
//   },
//   {
//     id: 3,
//     img: "/link.svg",
//   },
// ];
