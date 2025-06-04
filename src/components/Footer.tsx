
import React from 'react';
import { ChevronUp, Github, Linkedin, X as TwitterIcon } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Contact', href: '#contact' },
  ];

  const socialLinks = [
    { 
      icon: <Linkedin className="w-6 h-6" />, 
      href: '#',
      name: 'LinkedIn'
    },
    { 
      icon: <Github className="w-6 h-6" />, 
      href: '#',
      name: 'GitHub'
    },
    { 
      icon: <TwitterIcon className="w-6 h-6" />, 
      href: '#',
      name: 'Twitter'
    }
  ];

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-slate-900 to-gray-800 text-white relative overflow-hidden">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 border border-cyan-400 rounded-full animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-24 h-24 border border-purple-400 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-cyan-400 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute top-1/3 right-1/4 w-20 h-20 bg-purple-400 rounded-full blur-xl animate-pulse" style={{animationDelay: '2s'}}></div>
      </div>

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className="absolute -top-6 right-8 w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center text-white hover:from-purple-500 hover:to-pink-500 transition-all duration-300 hover:scale-110 shadow-lg"
        aria-label="Scroll to top"
      >
        <ChevronUp className="w-6 h-6" />
      </button>

      <div className="container-custom pt-16 pb-8 relative z-10">
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {/* Brand & Description */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="text-3xl font-playfair font-bold text-cyan-400 relative">
                QK
                <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full animate-pulse"></div>
              </div>
              <div className="font-poppins font-semibold text-lg">
                Qasim Kharodia
              </div>
            </div>
            
            <p className="font-inter text-gray-300 leading-relaxed">
              Computer Science student & freelance web developer crafting interactive, 
              high-impact web experiences for startups and small businesses worldwide.
            </p>

            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="w-10 h-10 bg-gray-800/50 backdrop-blur-sm rounded-full flex items-center justify-center text-gray-300 hover:bg-gradient-to-r hover:from-cyan-500 hover:to-blue-500 hover:text-white transition-all duration-300 hover:scale-110 border border-gray-700/50"
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-poppins font-semibold text-xl text-white">
              Quick Links
            </h3>
            
            <nav className="space-y-2">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="block font-inter text-gray-300 hover:text-cyan-400 transition-colors duration-300 text-left relative group"
                >
                  {item.name}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-cyan-400 transition-all duration-300 group-hover:w-full"></span>
                </button>
              ))}
            </nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="font-poppins font-semibold text-xl text-white">
              Get in Touch
            </h3>
            
            <div className="space-y-3 font-inter text-gray-300">
              <div className="flex items-center space-x-3">
                <span className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></span>
                <span>qasim@example.com</span>
              </div>
              
              <div className="flex items-center space-x-3">
                <span className="w-2 h-2 bg-purple-400 rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></span>
                <span>+1 (352) XXX-XXXX</span>
              </div>
              
              <div className="flex items-center space-x-3">
                <span className="w-2 h-2 bg-pink-400 rounded-full animate-pulse" style={{animationDelay: '1s'}}></span>
                <span>Remote & Available Worldwide</span>
              </div>
            </div>

            <div className="pt-4">
              <button 
                onClick={() => scrollToSection('#contact')}
                className="border-2 border-cyan-400 text-cyan-400 font-poppins font-semibold px-6 py-3 rounded-xl transition-all duration-300 hover:bg-cyan-400 hover:text-gray-900 hover:shadow-lg hover:-translate-y-1 text-sm"
              >
                Start a Project
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="font-inter text-sm text-gray-400">
              © 2025 Qasim Kharodia. All Rights Reserved.
            </div>
            
            <div className="flex space-x-6 font-inter text-sm">
              <button className="text-gray-400 hover:text-white transition-colors duration-300 relative group">
                Privacy Policy
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-cyan-400 transition-all duration-300 group-hover:w-full"></span>
              </button>
              <button className="text-gray-400 hover:text-white transition-colors duration-300 relative group">
                Terms of Service
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-purple-400 transition-all duration-300 group-hover:w-full"></span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
