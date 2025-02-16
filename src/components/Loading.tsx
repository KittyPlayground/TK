import React from 'react';
import { motion } from 'framer-motion';

const StarLoadingPage = () => {
    // Function to generate random stars
    const generateStars = (count) => {
        return Array.from({ length: count }).map((_, index) => {
            const size = Math.random() * 3 + 1; // Random size between 1 and 4
            const top = Math.random() * 100; // Random vertical position
            const left = Math.random() * 100; // Random horizontal position
            const delay = Math.random() * 2; // Random animation delay
            return (
                <motion.div
                    key={index}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: [0, 1, 0] }}
                    transition={{
                        duration: 0.8,
                        repeat: Infinity,
                        repeatType: 'mirror',
                        delay: delay,
                    }}
                    className="absolute bg-white rounded-full"
                    style={{
                        width: `${size}px`,
                        height: `${size}px`,
                        top: `${top}%`,
                        left: `${left}%`,
                    }}
                />
            );
        });
    };

    return (
        <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-black via-[#1E1E3F] to-black
"
        >
            <div className="absolute inset-0 overflow-hidden">
                {generateStars(100)} </div>

            {/* Content */}
            <div className="relative text-center">
                {/* Animated Logo */}
                <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    className="text-6xl font-bold mb-8"
                >
                    <span className="text-pink-700">Tharu</span>
                    <span className="text-purple-500">SHE</span>
                </motion.div>

                {/* Loading Text */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    className="text-lg text-gray-300"
                >
                  your fav Sassy Software Sorceress 🪄
                </motion.p>
            </div>
        </motion.div>
    );
};

export default StarLoadingPage;