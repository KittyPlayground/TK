import React, {useEffect} from 'react';
import {motion} from 'framer-motion';
import {Facebook, Twitter, Linkedin, Github, Mail, Dribbble} from 'lucide-react';

const Hero = () => {
    const letterVariants = {
        hidden: {y: 50, opacity: 0},
        visible: (i: number) => ({
            y: 0,
            opacity: 1,
            transition: {
                delay: i * 0.1,
                duration: 0.8,
                ease: [0.215, 0.61, 0.355, 1]
            }
        })
    };
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


    const codeVariants = {
        hidden: {opacity: 0, x: 20},
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.8,
                ease: [0.215, 0.61, 0.355, 1]
            }
        }
    };

    const name = 'Kawodya Arachchige'.split('');

    return (
        <section id="home" className="min-h-screen bg-black relative overflow-hidden ">
            <div className="absolute inset-0 bg-black"></div>
            <div className="absolute inset-0 backdrop-blur-[100px]"></div>

            <div
                className="container mx-auto px-4 pt-32 pb-12 flex flex-col lg:flex-row items-center justify-between min-h-screen relative z-10">
                <div className="lg:w-1/2 mb-12 lg:mb-0">
                    <motion.div
                        initial={{opacity: 0}}
                        animate={{opacity: 1}}
                        transition={{duration: 6, ease: [0.215, 0.61, 0.355, 1]}}
                        className="mb-6"
                    >
                        <div className="inline-flex items-center px-4 py-2 rounded-full glass-effect mb-8">
                            <span className="w-2 h-2 rounded-full bg-green-400 mr-2 animate-pulse"></span>
                            <span className="text-sm"> Open for opportunities</span>
                        </div>
                    </motion.div>

                    <div className="overflow-hidden">
                        <h1 className="text-4xl lg:text-5xl font-light mb-4">
                            <span className="text-white">Hello,</span><br/>
                            <span className="text-white"> I'm a</span>
                            <span className="text-pink-500"> Kawodya Arachchige</span><br/>
                            <span className="text-white">Professional </span>
                            <span className="text-purple-400">Software</span><br/>
                            <span className="text-purple-400">Developer</span>
                            <span className="text-white">.</span>
                        </h1>
                    </div>

                    <motion.div
                        initial={{opacity: 0, y: 20}}
                        animate={{opacity: 1, y: 0}}
                        transition={{delay: 1.2, duration: 4, ease: [0.215, 0.61, 0.355, 1]}}
                        className="mt-8 mb-12"
                    >
                        <p className="text-xl text-gray-400 leading-relaxed max-w-lg">
                            Crafting digital experiences through elegant code and intuitive design.
                            Specializing in modern web development with a focus on performance and user experience.
                        </p>
                    </motion.div>

                    <div className="flex gap-6 mt-12">
                        <motion.a
                            whileHover={{scale: 1.05}}
                            whileTap={{scale: 0.95}}
                            className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full text-neutral-950 font-semibold flex items-center gap-2"
                            href="#contact"
                        >
                            <Mail className="w-5 h-5"/>
                            Let's Connect
                        </motion.a>
                    </div>

                    <motion.div
                        initial={{opacity: 0}}
                        animate={{opacity: 1}}
                        transition={{delay: 1}}
                        whileHover={{scale: 1.2, rotate: 10}}
                        whileTap={{scale: 0.9}}
                        className="fixed left-8 bottom-8 flex flex-col gap-6"
                    >
                        {[
                            {icon: <Github className="w-6 h-6"/>, link: '#'},
                            {icon: <Linkedin className="w-6 h-6"/>, link: '#'},
                            {icon: <Dribbble className="w-6 h-6"/>, link: '#'},
                        ].map((social, index) => (
                            <motion.a
                                key={index}
                                href={social.link}
                                className="text-neutral-400 hover:text-cyan-400 transition-colors"
                                whileHover={{y: -4}}
                            >
                                {social.icon}
                            </motion.a>
                        ))}
                    </motion.div>
                </div>

                <motion.div
                    variants={codeVariants}
                    initial="hidden"
                    animate="visible"
                    className="lg:w-1/2 relative"
                >
                    <div className="w-full max-w-2xl mx-auto">
                        <div className="bg-[#1E1E3F] rounded-lg shadow-2xl overflow-hidden">
                            <div className="flex items-center gap-2 px-4 py-3 bg-[#2D2B55]">
                                <div className="flex gap-2">
                                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                                </div>
                            </div>

                            <div className="p-6">
                <pre className="text-white font-mono text-sm leading-relaxed">
                  <motion.div
                      initial={{opacity: 0}}
                      animate={{opacity: 1}}
                      transition={{delay: 0.5}}
                  >
                    <span className="text-pink-400">const</span> developer = {"{"}
                      <br/>
                      {"  "}name: <span className="text-yellow-300">'Kawodya Arachchige'</span>,
                    <br/>
                      {"  "}skills: [
                    <br/>
                      {"    "}<span className="text-yellow-300">'React'</span>,
                      {"  "}<span className="text-yellow-300">'TypeScript'</span>,
                    <br/>
                      {"    "}<span className="text-yellow-300">'Java'</span>,
                      {"  "}<span className="text-yellow-300">'Python'</span>,
                    <br/>
                      {"    "}<span className="text-yellow-300">'Swift'</span>,
                      {"  "}<span className="text-yellow-300">'.NET'</span>
                    <br/>
                      {"  "}],
                    <br/>
                      {"  "}hardworker: <span className="text-blue-400">true</span>,
                    <br/>
                      {"  "}quickLearner: <span className="text-blue-400">true</span>,
                    <br/>
                      {"  "}problemSolver: <span className="text-blue-400">true</span>,
                    <br/>
                      {"  "}hireable: <span className="text-pink-400">function</span>() {"{"}
                      <br/>
                      {"    "}<span className="text-pink-400">return</span> (
                    <br/>
                      {"      "}<span className="text-blue-300">this</span>.hardworker
                    <br/>
                      {"      "}<span className="text-blue-300">this</span>.problemSolver &&
                    <br/>
                      {"      "}<span className="text-blue-300">this</span>.skills.length {">="} <span
                      className="text-blue-400">5</span>
                    <br/>
                      {"    "});
                    <br/>
                      {"  "}{"}"}
                      <br/>
                      {"}"};
                  </motion.div>
                </pre>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                transition={{delay: 2}}
                className="absolute bottom-8 right-8 flex items-center gap-2 text-neutral-400"
            >
                <span className="text-sm rotate-90">Scroll</span>
                <div className="h-16 w-px bg-gradient-to-b from-cyan-400/50 to-transparent relative overflow-hidden">
                    <motion.div
                        animate={{y: ['-100%', '100%']}}
                        transition={{duration: 2, repeat: Infinity}}
                        className="absolute inset-0 bg-gradient-to-b from-cyan-400 to-transparent"
                    />
                </div>
            </motion.div>
            {/* Custom Cursor */}
            <div
                className="custom-cursor fixed w-8 h-8 rounded-full pointer-events-none z-50 mix-blend-difference bg-gradient-to-r from-pink-400 to-purple-400 transform -translate-x-1/2 -translate-y-1/2 scale-50 transition-transform duration-200"/>
        </section>
    );
};

export default Hero;
