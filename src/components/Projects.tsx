import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, ArrowRight } from 'lucide-react';



const projects = [
  {
    title: "Road Safety Quiz",
    description: "An interactive quiz application focused on road safety education",
    image: "https://images.unsplash.com/photo-1532974297617-c0f05fe48bff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
    tags: ["App", "Technology"],
    github: "https://github.com/yourusername/road-safety-quiz",
    demo: "https://road-safety-quiz.demo.com"
  },
  {
    title: "Direct Investing",
    description: "A modern investment platform with real-time market data",
    image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
    tags: ["Website", "Services"],
    github: "https://github.com/yourusername/direct-investing",
    demo: "https://direct-investing.demo.com"
  },
  {
    title: "Loho Real Estate",
    description: "Premium real estate platform for luxury properties",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
    tags: ["Website", "Real Estate"],
    github: "https://github.com/yourusername/loho-realestate",
    demo: "https://loho-realestate.demo.com"
  }
];

const Projects = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section id="projects" className="bg-black py-20">
      <div className="container mx-auto px-6">
        <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{once: true, margin: "-100px"}}
        >
          <div className="flex justify-between items-center mb-12">
            <motion.h2
                variants={itemVariants}
                className="text-4xl font-light text-white"
            >
              Recent Projects
            </motion.h2>
            <motion.a
                variants={itemVariants}
                href="#"
                className="text-green-400 flex items-center gap-2 group"
            >
              View All
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform"/>

            </motion.a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
                <motion.div
                    key={index}
                    variants={itemVariants}
                    className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-black to-green-400/5 border border-green-400/10"
                    whileHover={{y: -5}}
                >
                  <div className="aspect-[4/3] overflow-hidden">
                    <motion.img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover"
                        whileHover={{scale: 1.1}}
                        transition={{duration: 0.5}}
                    />
                  </div>

                  <motion.div
                      className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      initial={{opacity: 0}}
                      whileHover={{opacity: 1}}
                  >
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <div className="flex gap-2 mb-3">
                        {project.tags.map((tag, tagIndex) => (
                            <motion.span
                                key={tagIndex}
                                initial={{opacity: 0, y: 10}}
                                whileHover={{scale: 1.05}}
                                className="px-3 py-1 text-sm bg-green-400/10 text-green-400 rounded-full"
                            >
                              {tag}
                            </motion.span>
                        ))}
                      </div>
                      <h3 className="text-xl text-white mb-2">{project.title}</h3>
                      <p className="text-gray-400 mb-4">{project.description}</p>
                      <div className="flex gap-4">
                        <motion.a
                            href={project.github}
                            className="p-2 bg-green-400/10 text-green-400 rounded-full hover:bg-green-400/20 transition-colors"
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{scale: 1.1}}
                            whileTap={{scale: 0.95}}
                        >
                          <Github className="w-5 h-5"/>
                        </motion.a>
                        <motion.a
                            href={project.demo}
                            className="p-2 bg-green-400/10 text-green-400 rounded-full hover:bg-green-400/20 transition-colors"
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{scale: 1.1}}
                            whileTap={{scale: 0.95}}
                        >
                          <ExternalLink className="w-5 h-5"/>
                        </motion.a>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;