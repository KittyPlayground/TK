import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import {Github, Computer} from 'lucide-react';
import { Link } from 'react-router-dom';
import {FaJava, FaReact, FaMySQL, FaPython, FaFigma} from "react-icons/fa"; // Font Awesome Icons
import {
  SiTypescript,
  SiTailwindcss,
  SiFramer,
  SiMysql,
  SiCss3,
  SiHtml5,
  SiHibernate,
  SiJavascript, SiBootstrap, SiDotnet
} from "react-icons/si";
import {FaC} from "react-icons/fa6"; // Simple Icons


const projects = [
  {
    title: "Green Shadow",
    description: "Crop Monitoring System",
    longDescription: 'A robust and scalable application designed to streamline agricultural management processes. This system integrates a powerful backend built with Java Spring Boot and a responsive frontend using HTML/CSS/JavaScript, ensuring a seamless and secure user experience',
    image: 'https://imgur.com/cwJmNqU.jpg',
    color: "from-emerald-600/20 to-emerald-900/40",
    demoLink: "https://github.com/kawodyaarachchige/Green_shadow_frontend.git",
    features: [
      "Role-Based Access Control (RBAC): Permissions for ADMINISTRATIVE, MANAGER, and SCIENTIST roles.",
      "JWT Authentication: Secure login with token-based session management",
      "Comprehensive Logging: Logs activities at INFO, DEBUG, WARN, and ERROR levels for monitoring and debugging",
      "Location Management: Add and view field locations on an interactive map"
    ],
    techStack: [
      { name: "Java", icon: <FaJava className="text-orange-500" /> },
      { name: "MySQL", icon: <SiMysql className='text-cyan-400' /> },
      { name: "Hibernate", icon: <SiHibernate className='text-cyan-400' /> },
      { name: "JavaScript", icon: <SiJavascript className='text-yellow-300' /> },
      { name: "CSS", icon: <SiCss3  className='text-purple-500'/> },
      { name: "HTML", icon: <SiHtml5 className='text-orange-500' /> },
      { name: "Bootstrap", icon: <SiBootstrap className='text-sky-400' /> },
    ]
  },
  {
    title: "CandyLand",
    description: "POS System",
    longDescription: "Candy shop POS system is a point of sale application designed specifically for candy shopsIt helps manage sales, inventory, and customer data efficiently, providing an intuitive interface " +
        "for cashiers and store managers. The application features CRUD (Create, Read, Update, Delete) operations for customers, items, " +
        "and orders, along with secure REST API for data handling and real-time updates.",
    image: "https://imgur.com/cOnhu71.png",
    color: "from-cyan-600/20 to-cyan-900/40",
    demoLink: 'https://github.com/kawodyaarachchige/candy_land.git',
    features: [
      "Sales Management: Process transactions quickly and easily",
      "CRUD Operations: Create, Read, Update, and Delete customers, items, and orders",
      "Secure REST API: Access data securely with authentication and authorization",
      "Inventory Tracking: Keep track of stock levels and manage inventory efficiently"
    ],
    techStack: [
      { name: ".NET", icon:<SiDotnet className='text-cyan-400' /> },
      { name: "C#", icon: <FaC className='text-cyan-400' /> },
      { name: "SQL server" },
      { name: "JavaScript", icon: <SiJavascript className='text-yellow-300' /> },
      { name: "CSS", icon: <SiCss3  className='text-purple-500'/> },
      { name: "HTML", icon: <SiHtml5 className='text-orange-500' /> },
      { name: "Bootstrap", icon: <SiBootstrap className='text-sky-400' /> },
    ]
  },
  {
    title: "The Dark Knight",
    description: "The Dark Knight Website",
    longDescription: "Batman! 🖤 He has been my one and only favorite hero, and this project is my way of bringing Gotham's essence to life through design and technology.",
    image: "https://imgur.com/2LM0g75.png",
    color: "from-red-600/20 to-red-900/40",
    demoLink: 'https://dark-knight-orpin.vercel.app',
    features: [
      "Fully Responsive: Works perfectly across all devices",
      "Dark Aesthetic: Gotham-style UI with a cinematic and mysterious feel",
      "Interactive Elements: Dynamic UI components for an immersive experience",
      "Performance Optimized: Fast loading speeds and smooth interactions"
    ],
    techStack: [
      { name: "React", icon: <FaReact className='text-cyan-400' /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss className='text-cyan-400' /> },
      { name: "TypeScript", icon: <SiTypescript className='text-purple-300' /> },
      { name: "Framer Motion", icon: <SiFramer className='text-cyan-400' /> }
    ]
  },
  {
    title: "Medi Pro",
    description: "Pharmacy Management System",
    longDescription: "MediPro is a Point of Sale (POS) system designed to manage customer information, medicines, and " +
        "orders efficiently. The backend is built using Python Flask, providing a robust and scalable API for handling various operations related to medicines and customer management. " +
        "The system also includes functionality to send order confirmations to customers via email",
    image: "https://plus.unsplash.com/premium_photo-1672759455907-bdaef741cd88?q=80&w=3432&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    color: "from-cyan-600/20 to-cyan-900/40",
    demoLink: 'https://github.com/KittyPlayground/mediPro.git',
    features: [
      "Manage customer information, medicines, and orders",
      "Send order confirmations to customers via email",
      "User-friendly interface for easy navigation",
    ],
    techStack: [
      { name: "Python", icon:<FaPython className='text-cyan-400' />},
      { name: "Flask", icon: <FaPython className='text-cyan-400' /> },
      { name: "MySQL", icon: <SiMysql className='text-cyan-400' /> },
      {name: "HTML", icon: <SiHtml5 className='text-orange-500' /> },
      { name: "CSS", icon: <SiCss3  className='text-purple-500'/> },
      {name: "Javascript", icon: <SiJavascript className='text-yellow-300' /> }
    ]
  },
  {
    title: "Book Worm",
    description: "Library Management System",
    longDescription: "This application provides a comprehensive solution for managing a library, with features for both administrators and users",
    image: "https://live-production.wcms.abc-cdn.net.au/73419a11ea13b52c6bd9c0a69c10964e?impolicy=wcms_crop_resize&cropH=1080&cropW=1918&xPos=1&yPos=0&width=862&height=485",
    color: "from-blue-600/20 to-blue-900/40",
    demoLink: 'https://github.com/kawodyaarachchige/library-management-system.git',
    features: [
      "Admin side : Manage users, books, and branches, track borrowing status, update records, send return notices via email, and view insights on borrowing history, pending books, and overdue notices ",
      "User Side : Update settings, purchase books, view borrowing history, and browse available books in the library",
      "User-friendly interface for easy navigation",
    ],
    techStack: [
      { name: "JavaFX", icon:<FaJava className='text-orange-400' />},
      { name: "Hibernate", icon: <SiHibernate className='text-cyan-400' /> },
      { name: "MySQL", icon: <SiMysql className='text-cyan-400' /> },
      {name: "Regex" },
      { name: "CSS", icon: <SiCss3 className='text-purple-500' /> },
    ]
  },
  {
    title: "One Paw",
    description: "Pet Shop UI Design",
    longDescription: " I made it easy for pet lovers to find everything they need for their furry friends, from food and toys to grooming essentials and accessories",
    image: "https://imgur.com/lqnbcl4.png",
    color: "from-yellow-600/20 to-yellow-900/40",
    demoLink: 'https://dribbble.com/shots/25042268-Pet-Shop',
    features: [
        "Attractive and user-friendly UI design",
        "Responsive design for various screen sizes",
    ],
    techStack: [
      {name: "Figma",icon: <FaFigma className='text-cyan-400' /> },
    ]
  },

];

const ProjectCard = ({ project, inView, setActiveIndex, index, isMobile }) => {
  useEffect(() => {
    if (inView) {
      setActiveIndex(index);
    }
  }, [inView, index, setActiveIndex]);



  return (
      <motion.div
          className={`rounded-3xl bg-gradient-to-br ${project.color} p-4 sm:p-6 md:p-8 relative overflow-hidden group cursor-pointer ${
              isMobile ? 'w-[85vw] flex-shrink-0' : 'w-full max-w-3xl mx-auto'
          }`}
          initial={{opacity: 0, y: 50}}
          whileInView={{opacity: 1, y: 0}}
          viewport={{once: true, margin: "-100px"}}
          transition={{duration: 0.5}}
      >
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-lg sm:text-xl text-white font-mono max-w-[80%]">
            {project.description}
          </h3>
          <Link
              to={project.demoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block"
          >
            <motion.div
                whileHover={{x: 5}}
                className="bg-white/10 p-1.5 rounded-full flex-shrink-0 ml-2 cursor-pointer"
            >
              <Github className="w-4 h-4 text-white"/>
            </motion.div>
          </Link>
        </div>

        <div className="aspect-[16/9] rounded-xl overflow-hidden">
          <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
          />
        </div>

        <div
            className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"/>
      </motion.div>
  );
};

const ProjectDetails = ({project}) => {
  return (
      <motion.div
          initial={{opacity: 0, x: 20}}
          animate={{opacity: 1, x: 0}}
          exit={{opacity: 0, x: -20}}
          transition={{duration: 0.5}}
          className="space-y-6"
      >
        <div>
          <h2 className="text-2xl sm:text-3xl font-light text-white mb-3">
            {project.title}
          </h2>
          <p className="text-gray-400 text-sm sm:text-base">
            {project.longDescription}
          </p>
        </div>

        <div className="space-y-3">
          {project.features.map((feature, idx) => (
              <div key={idx} className="flex items-start gap-2">
                <div className="text-purple-400 mt-1 flex-shrink-0">✦</div>
                <p className="text-gray-300 text-sm">{feature}</p>
              </div>
          ))}
        </div>

        <div className="flex flex-wrap gap-2">
          {project.techStack.map((tech, idx) => (
              <div
                  key={idx}
                  className="px-3 py-1.5 rounded-full bg-white/5 text-white text-xs flex items-center gap-1.5"
              >
                <span>{tech.icon}</span>
                {tech.name}
              </div>
          ))}
        </div>
      </motion.div>
  );
};

const Projects = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  return (
      <section id="projects" className="bg-black min-h-screen relative">
        <div className="container mx-auto py-12">
            <motion.div
                initial={{opacity: 0, y: -20}}
                animate={{opacity: 1, y: 0}}
                transition={{duration: 0.6}}
                className="flex items-center space-x-4 mb-12 ml-7 sm:ml-0"
            >
              <div className="relative">
                <motion.div
                    animate={{
                      rotate: 360,
                      transition: {duration: 20, repeat: Infinity, ease: "linear"}
                    }}
                    className="relative z-10"
                >
                  <Computer className="text-purple-600 w-12 h-12"/>
                </motion.div>
                <div className="absolute inset-0 bg-purple-500/20 blur-xl rounded-full"/>
              </div>
              <h2 className="text-5xl font-light text-white tracking-tight">Projects</h2>
            </motion.div>

            <div className="lg:grid lg:grid-cols-2 lg:gap-12">
              <div className="hidden lg:block sticky top-32 h-fit px-4 sm:px-6 mb-8 lg:mb-0">
                <motion.div style={{y}} transition={{duration: 0.5}}>
                  <ProjectDetails project={projects[activeIndex]}/>
                </motion.div>
              </div>
              <div className="lg:hidden">
                {/* Horizontal Scroll for Project Cards */}
                <div className="overflow-x-auto scrollbar-hide">
                  <div className="flex gap-4 px-4 pb-4">
                    {projects.map((project, index) => {
                      const ref = React.useRef(null);
                      const isInView = useInView(ref, {amount: 0.6});

                      return (
                          <div key={index} ref={ref}>
                            <ProjectCard
                                project={project}
                                inView={isInView}
                                setActiveIndex={setActiveIndex}
                                index={index}
                                isMobile={true}
                            />
                          </div>
                      );
                    })}
                  </div>
                </div>
                <div className="px-4 mt-6">
                  <ProjectDetails project={projects[activeIndex]}/>
                </div>
              </div>

              {/* Desktop/Larger Screens - Project Cards on Right */}
              <div className="hidden lg:block space-y-20">
                {projects.map((project, index) => {
                  const ref = React.useRef(null);
                  const isInView = useInView(ref, {amount: 0.5});

                  return (
                      <div key={index} ref={ref}>
                        <ProjectCard
                            project={project}
                            inView={isInView}
                            setActiveIndex={setActiveIndex}
                            index={index}
                            isMobile={false}
                        />
                      </div>
                  );
                })}
              </div>
            </div>
          </div>
      </section>
);
};

export default Projects;