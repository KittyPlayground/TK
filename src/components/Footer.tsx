import React from 'react';
import { Github, Linkedin, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black border-t border-green-400/10">
      <div className="container mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-green-400 text-2xl font-light tracking-wider">
            Mighty<span className="text-white">.</span>
          </div>
          
          <div className="flex items-center gap-8">
            <a href="#" className="text-gray-400 hover:text-green-400 transition-colors">About</a>
            <a href="#" className="text-gray-400 hover:text-green-400 transition-colors">Projects</a>
            <a href="#" className="text-gray-400 hover:text-green-400 transition-colors">Contact</a>
          </div>
          
          <div className="flex gap-6">
            <a 
              href="#"
              className="text-gray-400 hover:text-green-400 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="w-5 h-5" />
            </a>
            <a 
              href="#"
              className="text-gray-400 hover:text-green-400 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a 
              href="#"
              className="text-gray-400 hover:text-green-400 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Twitter className="w-5 h-5" />
            </a>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-green-400/10 text-center text-gray-400">
          <p>© {new Date().getFullYear()} Mighty. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;