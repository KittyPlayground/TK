import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ArrowRight } from 'lucide-react';
import hero from '../../assets/tk.PNG';
import { Parallax } from 'react-scroll-parallax';

const Hero = () => {
  useEffect(() => {
    const cursor = document.querySelector('.custom-cursor');
    const handleMouseMove = (e: MouseEvent) => {
      if (cursor) {
        cursor.style.left = `${e.clientX}px`;
        cursor.style.top = `${e.clientY}px`;
      }
    };
    document.addEventListener('mousemove', handleMouseMove);
    document.body.style.cursor = 'none';

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.body.style.cursor = 'auto';
    };
  }, []);

  const letterVariants = {
    hidden: { y: 40, opacity: 0 },
    visible: (i: number) => ({
      y: 0,
      opacity: 1,
      transition: {
        delay: i * 0.08,
        duration: 0.6,
        ease: [0.215, 0.61, 0.355, 1],
      },
    }),
  };

  const name = 'Kawodya Arachchige'.split('');

  return (
      <section id="home" className="min-h-screen bg-neutral-950 relative overflow-hidden">
        {/* Grid background */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48cGF0aCBkPSJNNjAgMEgwdjYwaDYweiIgZmlsbD0iIzAwMDAwMCIvPjxwYXRoIGQ9Ik02MCAwSDB2NjBoNjB6IiBzdHJva2U9IiMwMDAwMDAiLz48L2c+PC9zdmc+')] opacity-15" />

        <div className="container mx-auto px-4 pt-28 pb-12 flex flex-col md:flex-row items-center justify-between min-h-screen relative z-10">
          {/* Left content */}
          <div className="md:w-1/2 space-y-8">
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
                className="flex items-center gap-3 group cursor-pointer w-fit"
            >
              <div className="w-3 h-3 rounded-full bg-cyan-400 animate-pulse" />
              <span className="text-sm text-cyan-400 font-medium tracking-wide">
              Open for opportunities
            </span>
              <ArrowRight className="w-4 h-4 text-cyan-400 translate-x-0 group-hover:translate-x-1 transition-transform" />
            </motion.div>

            <div className="overflow-hidden">
              <motion.h1
                  initial={{ y: 100 }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.8, ease: [0.215, 0.61, 0.355, 1] }}
                  className="text-6xl md:text-7xl font-bold tracking-tight"
              >
                {name.map((letter, i) => (
                    <motion.span
                        key={i}
                        custom={i}
                        variants={letterVariants}
                        initial="hidden"
                        animate="visible"
                        className="inline-block bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent hover:scale-110 transition-transform duration-300"
                    >
                      {letter === ' ' ? '\u00A0' : letter}
                    </motion.span>
                ))}
              </motion.h1>
            </div>

            <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-xl text-neutral-400 max-w-2xl leading-relaxed"
            >
              Building digital experiences that combine cutting-edge technology with elegant design.
              Specializing in modern web development and interactive design systems.
            </motion.p>

            <div className="flex gap-6 mt-12">
              <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full text-neutral-950 font-semibold flex items-center gap-2"
                  href="#contact"
              >
                <Mail className="w-5 h-5" />
                Let's Connect
              </motion.a>
            </div>
          </div>

          {/* Right image */}
          <Parallax speed={-15}>
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                className="relative md:w-[400px] md:h-[400px] w-[250px] h-[250px] mt-12 md:mt-0" // Middle size
            >
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/30 to-purple-400/30 blur-3xl rounded-full" /> {/* Rounded gradient */}
              <div className="relative z-10 h-full rounded-full overflow-hidden border-2 border-neutral-800/50 backdrop-blur-xl"> {/* Rounded container */}
                <img
                    src={hero}
                    alt="Portrait"
                    className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500 rounded-full" // Rounded image
                />
              </div>
            </motion.div>
          </Parallax>


          {/* Social links */}
          <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              whileHover={{scale: 1.2, rotate: 10}}
              whileTap={{scale: 0.9}}
              className="fixed left-8 bottom-8 flex flex-col gap-6"
          >
            {[
              { icon: <Github className="w-6 h-6" />, link: '#' },
              { icon: <Linkedin className="w-6 h-6" />, link: '#' },
            ].map((social, index) => (
                <motion.a
                    key={index}
                    href={social.link}
                    className="text-neutral-400 hover:text-cyan-400 transition-colors"
                    whileHover={{ y: -4 }}
                >
                  {social.icon}
                </motion.a>
            ))}
          </motion.div>
        </div>

        {/* Custom cursor */}
        <div className="custom-cursor fixed w-8 h-8 rounded-full pointer-events-none z-50
        mix-blend-difference bg-gradient-to-r from-cyan-400 to-purple-400 transform
        -translate-x-1/2 -translate-y-1/2 scale-50 transition-transform duration-200" />

        {/* Scroll indicator */}
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2 }}
            className="absolute bottom-8 right-8 flex items-center gap-2 text-neutral-400"
        >
          <span className="text-sm rotate-90">Scroll</span>
          <div className="h-16 w-px bg-gradient-to-b from-cyan-400/50 to-transparent relative overflow-hidden">
            <motion.div
                animate={{ y: ['-100%', '100%'] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute inset-0 bg-gradient-to-b from-cyan-400 to-transparent"
            />
          </div>
        </motion.div>
      </section>
  );
};

export default Hero;