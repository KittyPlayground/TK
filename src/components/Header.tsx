import React, {useState, useEffect, useCallback} from "react";
import {motion, AnimatePresence} from "framer-motion";
import {Menu, X} from "lucide-react";
import {useLocation, useNavigate} from "react-router-dom";
import loading from "./Loading.tsx";

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Simulate loading time
        const timer = setTimeout(() => {
            setLoading(false);
        }, 2000);

        return () => clearTimeout(timer);
    }, []);

    // Optimize scroll listener with useCallback
    const handleScroll = useCallback(() => {
        setScrolled(window.pageYOffset > 50);
    }, []);

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [handleScroll]);

    const navItems = ["Home", "About", "Tech Stack", "Creating", "Contact"];

    const navigate = useNavigate();

    const handleNavigation = (hash) => {
        if (location.pathname === "/projectPage") {
            navigate(`/${hash}`);
        } else {
            window.location.hash = hash;
        }
    };

    return (
        <header
            className={`fixed w-full top-0 z-50 transition-all duration-300 ${loading ? 'hidden' : ''} ${
                scrolled
                    ? "bg-black/90 backdrop-blur-lg py-3 border-b border-purple-400/10"
                    : "bg-transparent py-6"
            }`}
        >
            <div className="container mx-auto px-6">
                <nav className="flex justify-between items-center">
                    {/* Logo with animated gradient */}
                    <motion.div whileHover={{scale: 1.05}} className="flex items-center space-x-2">
            <span
                className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-600 text-2xl font-bold tracking-wider">
              TharuSHE
            </span>
                        <div className="w-6 h-6 flex items-center justify-center">
                            <span className="text-black text-lg">🦇</span>
                        </div>
                    </motion.div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center space-x-4">
                        {navItems.map((item) => {
                            const hash = `#${item.toLowerCase().replace(" ", "-")}`;
                            return (
                                <motion.button
                                    key={item}
                                    onClick={() => handleNavigation(hash)}
                                    className="relative text-gray-300 hover:text-pink-400 px-3 py-2 transition-colors duration-300 text-sm uppercase tracking-wider group"
                                    whileHover={{scale: 1.05}}
                                >
                                    {item}
                                    <span
                                        className="absolute bottom-0 left-0 w-0 h-[2px] bg-purple-400 transition-all duration-300 group-hover:w-full"></span>
                                </motion.button>
                            )
                        })}
                        <motion.button
                            className="px-6 py-2 bg-gradient-to-r from-cyan-400/20 to-purple-600/20 border border-purple-400/30 text-purple-400 rounded-full hover:bg-cyan-400/30 transition-all duration-300 text-sm uppercase tracking-wider relative overflow-hidden group"
                            whileHover={{scale: 1.05}}
                        >
                            <span className="relative z-10">Resume</span>
                            <div
                                className="absolute inset-0 bg-gradient-to-r from-green-400/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        </motion.button>
                    </div>

                    {/* Mobile Menu Button */}
                    <motion.button
                        className="md:hidden text-cyan-400 p-2 rounded-lg hover:bg-purple-400/10 transition-colors"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        whileTap={{scale: 0.95}}
                    >
                        {isMenuOpen ? <X size={24}/> : <Menu size={24}/>}
                    </motion.button>
                </nav>

                {/* Mobile Menu with AnimatePresence */}
                <AnimatePresence>
                    {isMenuOpen && (
                        <motion.div
                            initial={{opacity: 0, y: -20}}
                            animate={{opacity: 1, y: 0}}
                            exit={{opacity: 0, y: -20}}
                            className="md:hidden absolute top-full left-0 right-0 bg-black/95 backdrop-blur-lg border-t border-cyan-400/10"
                        >
                            <div className="flex flex-col items-center py-6 space-y-6">
                                {navItems.map((item) => {
                                    const hash = `#${item.toLowerCase().replace(" ", "-")}`;
                                    return (
                                        <motion.button
                                            key={item}
                                            className="text-gray-300 hover:text-cyan-400 px-4 py-2 transition-colors duration-300 text-sm uppercase tracking-wider"
                                            onClick={() => {
                                                setIsMenuOpen(false);
                                                handleNavigation(hash);
                                            }}
                                            whileHover={{scale: 1.05}}
                                        >
                                            {item}
                                        </motion.button>
                                    )
                                })}
                                <motion.button
                                    className="px-6 py-2 bg-gradient-to-r from-cyan-400/20 to-purple-600/20 border border-purple-400/30 text-cyan-400 rounded-full hover:bg-cyan-400/30 transition-all duration-300 text-sm uppercase tracking-wider"
                                    whileHover={{scale: 1.05}}
                                >
                                    Resume
                                </motion.button>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </header>
    );
};

export default Header;
