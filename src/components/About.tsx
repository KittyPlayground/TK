import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Briefcase, GraduationCap } from 'lucide-react';

const About = () => {
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
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="about" className="bg-black py-20">
      <div className="container mx-auto px-6">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-6xl mx-auto"
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl font-light text-white mb-4">About Me</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Passionate web developer with a keen eye for design and a commitment to creating seamless, user-centric experiences.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              variants={itemVariants}
              className="relative aspect-square rounded-3xl overflow-hidden"
            >
              <img
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80"
                alt="Profile"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            </motion.div>

            <div className="space-y-8">
              <motion.div
                variants={itemVariants}
                className="p-6 rounded-2xl bg-gradient-to-br from-green-400/5 to-transparent border border-green-400/10"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-green-400/10">
                    <Code2 className="w-6 h-6 text-green-400" />
                  </div>
                  <div>
                    <h3 className="text-xl text-white mb-2">Professional Journey</h3>
                    <p className="text-gray-400">
                      With over 5 years of experience in web development, I specialize in creating modern, responsive applications using cutting-edge technologies.
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                variants={itemVariants}
                className="p-6 rounded-2xl bg-gradient-to-br from-green-400/5 to-transparent border border-green-400/10"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-green-400/10">
                    <Briefcase className="w-6 h-6 text-green-400" />
                  </div>
                  <div>
                    <h3 className="text-xl text-white mb-2">Work Experience</h3>
                    <p className="text-gray-400">
                      Led development teams at various startups and established companies, delivering high-impact projects that drove business growth.
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                variants={itemVariants}
                className="p-6 rounded-2xl bg-gradient-to-br from-green-400/5 to-transparent border border-green-400/10"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-green-400/10">
                    <GraduationCap className="w-6 h-6 text-green-400" />
                  </div>
                  <div>
                    <h3 className="text-xl text-white mb-2">Education</h3>
                    <p className="text-gray-400">
                      Bachelor's degree in Computer Science with a focus on web technologies and user experience design.
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;