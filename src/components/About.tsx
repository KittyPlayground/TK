import React from 'react';
import { motion } from 'framer-motion';
import heroImage from '../../assets/hero.png';

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
      <section id="about" className="bg-[#0A0A1B] py-32 relative overflow-hidden ">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-black via-red-400/5 to-black"></div>

        <div className="container mx-auto px-6 relative z-10">
          <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="max-w-6xl mx-auto"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div variants={itemVariants} className="space-y-8">
                <h2 className="text-4xl font-light">
                  <span className="text-purple-400">WHO I AM?</span>
                </h2>

                <div className="prose prose-invert">
                  <p className="text-lg text-gray-300 leading-relaxed">
                    My name is Kawodya Arachchige. I am a professional and enthusiastic programmer in
                    my daily life. I am a quick learner with a self-learning attitude. I love to learn
                    and explore new technologies and I am passionate about problem-solving.
                  </p>

                  <p className="text-lg text-gray-300 leading-relaxed">
                    I like to be a data engineer, and I love to play games. I think I can do everything a little bit, but I follow through,
                    and I believe I can master anything I put my mind to..
                    I am available for any kind of
                    job opportunity that suits my skills and interests.
                  </p>
                </div>

                <motion.div
                    variants={itemVariants}
                    className="grid grid-cols-2 gap-6 pt-8"
                >
                  <div className="space-y-2">
                    <div className="text-4xl font-light text-purple-400">2+</div>
                    <div className="text-sm text-gray-400">Years of Experience</div>
                  </div>
                  <div className="space-y-2">
                    <div className="text-4xl font-light text-cyan-400">10+</div>
                    <div className="text-sm text-gray-400">Projects Completed</div>
                  </div>
                  <div className="space-y-2">
                    <div className="text-4xl font-light text-pink-400">10+</div>
                    <div className="text-sm text-gray-400">Hours of Coding</div>
                  </div>
                  <div className="space-y-2">
                    <div className="text-4xl font-light text-red-400">40+</div>
                    <div className="text-sm text-gray-400">Certificates</div>
                  </div>
                </motion.div>
              </motion.div>

              <motion.div
                  variants={itemVariants}
                  className="relative"
              >
                <div className="relative rounded-2xl overflow-hidden ">
                  <img
                      src={heroImage}
                      alt="Profile"
                      className="w-half h-half object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0"></div>
                  <div className="absolute -top-4 -right-4 w-24 h-24 bg-pink-400/10 rounded-full blur-xl"></div>
                </div>

                {/* About Me text on the side */}
                <div className="absolute -right-4 top-1/2 -translate-y-1/2 transform rotate-90 origin-right">
                <span className="text-5xl font-light tracking-widest text-purple-400/10 uppercase">
                  ABOUT ME
                </span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
  );
};

export default About;