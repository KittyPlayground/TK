import React from 'react';
import {motion} from 'framer-motion';
import {Mail, MessageSquare} from 'lucide-react';

const Contact = () => {
    const containerVariants = {
        hidden: {opacity: 0, y: 20},
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
                ease: [0.215, 0.61, 0.355, 1]
            }
        }
    };

    return (
        <section id="contact" className="bg-black py-32">

            <div className="container mx-auto px-6">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{once: true, margin: "-100px"}}
                    className="max-w-4xl mx-auto text-center"
                >
                    <div className="mb-8 flex justify-center">
                        <div className="w-16 h-16 rounded-full bg-purple-400/20 flex items-center justify-center">
                            <svg
                                className="w-8 h-8 text-purple-400/60"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <path
                                    d="M20.42 4.58a5.4 5.4 0 0 0-7.65 0l-.77.78-.77-.78a5.4 5.4 0 0 0-7.65 0C1.46 6.7 1.33 10.28 4 13l8 8 8-8c2.67-2.72 2.54-6.3.42-8.42z"></path>
                            </svg>
                        </div>
                    </div>

                    <motion.h2
                        initial={{opacity: 0, y: 20}}
                        whileInView={{opacity: 1, y: 0}}
                        transition={{duration: 0.5, delay: 0.2}}
                        className="text-5xl font-light text-white mb-8"
                    >
                        Tell me about your next project 😉
                    </motion.h2>

                    <div className="flex justify-center gap-4 mt-12">
                        <motion.a
                            href="mailto:kawodya.wa@gmail.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-6 py-3 bg-purple-700 text-white rounded-full hover:bg-purple-600 transition-colors"
                            whileHover={{scale: 1.05}}
                            whileTap={{scale: 0.95}}
                        >
                            <Mail className="w-4 h-4"/>
                            Email Me
                        </motion.a>

                        <motion.a
                            href="https://wa.me/1234567890"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-6 py-3 bg-white/5 text-white rounded-full hover:bg-white/10 transition-colors"
                            whileHover={{scale: 1.05}}
                            whileTap={{scale: 0.95}}
                        >
                            <MessageSquare className="w-4 h-4"/>
                            WhatsApp
                        </motion.a>
                    </div>
                </motion.div>
            </div>
            <div
                className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-400/5 to-transparent pointer-events-none"></div>
        </section>
    );
};

export default Contact;