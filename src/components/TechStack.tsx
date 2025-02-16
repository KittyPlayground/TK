import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Layout, Palette, Smartphone, Server, Database, Terminal, Blocks, Braces, Cpu, Globe, Layers } from 'lucide-react';

const techStacks = [
  {
    title: "Frontend",
    icon: <Layout className="w-8 h-8" />,
    skills: [
      { icon: <Blocks className="w-4 h-4" />, name: "React.js" },
      { icon: <Globe className="w-4 h-4" />, name: "Next.js" },
      { icon: <Braces className="w-4 h-4" />, name: "TypeScript" },
      { icon: <Cpu className="w-4 h-4" />, name: "JavaScript" },
      { icon: <Layers className="w-4 h-4" />, name: "HTML/CSS" }
    ]
  },
  {
    title: "Backend",
    icon: <Server className="w-8 h-8" />,
    skills: [
      { icon: <Blocks className="w-4 h-4" />, name: "Node.js" },
      { icon: <Globe className="w-4 h-4" />, name: "Express.js" },
      { icon: <Braces className="w-4 h-4" />, name: "Python" },
      { icon: <Cpu className="w-4 h-4" />, name: "REST APIs" },
      { icon: <Layers className="w-4 h-4" />, name: "GraphQL" }
    ]
  },
  {
    title: "UI/UX",
    icon: <Palette className="w-8 h-8" />,
    skills: [
      { icon: <Blocks className="w-4 h-4" />, name: "Figma" },
      { icon: <Globe className="w-4 h-4" />, name: "Tailwind" },
      { icon: <Braces className="w-4 h-4" />, name: "Material-UI" },
      { icon: <Cpu className="w-4 h-4" />, name: "Framer" },
      { icon: <Layers className="w-4 h-4" />, name: "SCSS" }
    ]
  },
  {
    title: "Mobile",
    icon: <Smartphone className="w-8 h-8" />,
    skills: [
      { icon: <Blocks className="w-4 h-4" />, name: "React Native" },
      { icon: <Globe className="w-4 h-4" />, name: "Flutter" },
      { icon: <Braces className="w-4 h-4" />, name: "iOS" },
      { icon: <Cpu className="w-4 h-4" />, name: "Android" }
    ]
  },
  {
    title: "Database",
    icon: <Database className="w-8 h-8" />,
    skills: [
      { icon: <Blocks className="w-4 h-4" />, name: "MongoDB" },
      { icon: <Globe className="w-4 h-4" />, name: "PostgreSQL" },
      { icon: <Braces className="w-4 h-4" />, name: "MySQL" },
      { icon: <Cpu className="w-4 h-4" />, name: "Firebase" },
      { icon: <Layers className="w-4 h-4" />, name: "Supabase" }
    ]
  },
  {
    title: "Tools",
    icon: <Terminal className="w-8 h-8" />,
    skills: [
      { icon: <Blocks className="w-4 h-4" />, name: "Git" },
      { icon: <Globe className="w-4 h-4" />, name: "Docker" },
      { icon: <Braces className="w-4 h-4" />, name: "AWS" },
      { icon: <Cpu className="w-4 h-4" />, name: "Vercel" },
      { icon: <Layers className="w-4 h-4" />, name: "VS Code" }
    ]
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 20,
    scale: 0.95
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15
    }
  }
};

const skillVariants = {
  hidden: { scale: 0.8, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 200,
      damping: 10
    }
  }
};

const TechStack = () => {
  return (
      <section id="tech-stack" className="bg-black py-20 overflow-hidden">
        <div className="container mx-auto px-6">
          <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex items-center space-x-4 mb-12"
          >
            <div className="relative">
              <motion.div
                  animate={{
                    rotate: 360,
                    transition: { duration: 20, repeat: Infinity, ease: "linear" }
                  }}
                  className="relative z-10"
              >
                <Code2 className="text-purple-600 w-12 h-12" />
              </motion.div>
              <div className="absolute inset-0 bg-purple-500/20 blur-xl rounded-full" />
            </div>
            <h2 className="text-5xl font-light text-white tracking-tight">Tech Stack</h2>
          </motion.div>

          <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {techStacks.map((stack, index) => (
                <motion.div
                    key={index}
                    variants={cardVariants}
                    whileHover={{
                      scale: 1.02,
                      rotateY: 5,
                      rotateX: 5,
                      transition: { duration: 0.2 }
                    }}
                    className="group p-8 rounded-2xl bg-gradient-to-br from-purple-900/5 via-black to-cyan-900/5 border border-purple-500/10 hover:border-cyan-500/30 transition-all duration-500 transform perspective-1000 backdrop-blur-sm"
                >
                  <motion.div
                      className="flex items-center space-x-4 mb-8"
                      whileHover={{ x: 5 }}
                  >
                    <motion.div
                        className="relative p-4 rounded-xl bg-gradient-to-r from-purple-600/10 to-cyan-500/10"
                        whileHover={{
                          rotate: 360,
                          scale: 1.1,
                          transition: { duration: 0.6 }
                        }}
                    >
                      <div className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-400">
                        {stack.icon}
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 blur-lg rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    </motion.div>
                    <h3 className="text-2xl font-light text-white tracking-wide">{stack.title}</h3>
                  </motion.div>
                  <div className="grid grid-cols-2 gap-3">
                    {stack.skills.map((skill, skillIndex) => (
                        <motion.div
                            key={skillIndex}
                            variants={skillVariants}
                            whileHover={{
                              scale: 1.05,
                              transition: { duration: 0.2 }
                            }}
                            className="px-4 py-2.5 bg-gradient-to-r from-purple-600/5 via-pink-500/5 to-cyan-500/5 rounded-xl border border-purple-500/20 hover:border-cyan-500/30 flex items-center gap-3 group/skill transition-all duration-300"
                        >
                          <span className="text-cyan-400 transition-transform duration-300 group-hover/skill:scale-110">{skill.icon}</span>
                          <span className="text-sm font-light text-purple-200/90 group-hover/skill:text-cyan-300 transition-colors duration-300">{skill.name}</span>
                        </motion.div>
                    ))}
                  </div>
                </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
  );
};

export default TechStack;