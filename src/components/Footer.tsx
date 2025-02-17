import React from 'react';
import {motion} from 'framer-motion';
import {ArrowUp} from 'lucide-react';

const Footer = () => {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return (

        <footer className="bg-neutral-900 text-neutral-400 py-12 relative ">

            <div className="container mx-auto px-4">
                <motion.div
                    initial={{opacity: 0, y: 20}}
                    whileInView={{opacity: 1, y: 0}}
                    transition={{duration: 0.8}}
                    className="text-center mb-8"
                >
                    <p className="text-lg italic bg-gradient-to-r from-cyan-400 to-purple-800 bg-clip-text text-transparent">
                        "The only way to do great work is to love what you do." – Steve Jobs
                    </p>
                </motion.div>


                {/* Copyright Notice */}
                <motion.div
                    initial={{opacity: 0, y: 20}}
                    whileInView={{opacity: 1, y: 0}}
                    transition={{duration: 0.8, delay: 0.2}}
                    className="text-center"
                >
                    <p className="text-sm">
                        &copy; {new Date().getFullYear()} Kawodya Arachchige. All rights reserved.
                    </p>
                </motion.div>

                <motion.button
                    initial={{opacity: 0, y: 20}}
                    whileInView={{opacity: 1, y: 0}}
                    transition={{duration: 0.8, delay: 0.4}}
                    onClick={scrollToTop}
                    className="absolute bottom-8 right-8 p-3 bg-neutral-800 rounded-full text-neutral-400 hover:text-cyan-400 hover:bg-neutral-700 transition-all"
                >
                    <ArrowUp className="w-5 h-5"/>
                </motion.button>
            </div>
        </footer>
    );
};

export default Footer;