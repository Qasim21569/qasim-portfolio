import React from 'react';
import { Github, Linkedin, MessageCircle } from 'lucide-react';

const Footer = () => {
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
      icon: <Linkedin className="w-5 h-5 md:w-6 md:h-6" />, 
      href: 'https://www.linkedin.com/in/qasim-kharodia-807951216/',
      name: 'LinkedIn',
      color: 'hover:from-blue-600 hover:to-blue-400'
    },
    { 
      icon: <Github className="w-5 h-5 md:w-6 md:h-6" />, 
      href: 'https://github.com/Qasim21569',
      name: 'GitHub',
      color: 'hover:from-gray-600 hover:to-gray-400'
    },
    { 
      icon: <MessageCircle className="w-5 h-5 md:w-6 md:h-6" />, 
      href: 'https://wa.me/917977801024?text=Hi%20Qasim,%20I%20would%20like%20to%20discuss%20a%20project%20with%20you.%20Let%27s%20connect!',
      name: 'WhatsApp',
      color: 'hover:from-green-600 hover:to-green-400'
    }
  ];

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-slate-900 to-gray-800 text-white relative overflow-hidden">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-6 md:top-10 left-6 md:left-10 w-20 md:w-32 h-20 md:h-32 border border-cyan-400 rounded-full animate-pulse"></div>
        <div className="absolute bottom-6 md:bottom-10 right-6 md:right-10 w-16 md:w-24 h-16 md:h-24 border border-purple-400 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/2 left-1/4 w-12 md:w-16 h-12 md:h-16 bg-cyan-400 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute top-1/3 right-1/4 w-14 md:w-20 h-14 md:h-20 bg-purple-400 rounded-full blur-xl animate-pulse" style={{animationDelay: '2s'}}></div>
      </div>

      <div className="container-custom pt-12 md:pt-16 pb-6 md:pb-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-8 md:mb-12">
          {/* Brand & Description */}
          <div className="space-y-4 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start space-x-2">
              <div className="text-2xl md:text-3xl font-playfair font-bold relative">
                <span className="text-cyan-400">Qasim</span>
                <span className="text-white ml-2">Kharodia</span>
                <div className="absolute -bottom-1 -right-1 w-2 md:w-3 h-2 md:h-3 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full animate-pulse"></div>
              </div>
            </div>
            
            <p className="font-inter text-sm md:text-base text-gray-300 leading-relaxed max-w-sm mx-auto md:mx-0">
              Computer Science student & freelance web developer crafting modern, 
              high-performance digital experiences for ambitious businesses worldwide.
            </p>

            <div className="flex justify-center md:justify-start space-x-3 md:space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-9 h-9 md:w-10 md:h-10 bg-gray-800/50 backdrop-blur-sm rounded-full flex items-center justify-center text-gray-300 hover:bg-gradient-to-r ${social.color} hover:text-white transition-all duration-300 hover:scale-110 border border-gray-700/50`}
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4 text-center md:text-left">
            <h3 className="font-poppins font-semibold text-lg md:text-xl text-white">
              Quick Links
            </h3>
            
            <nav className="space-y-2">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="block font-inter text-sm md:text-base text-gray-300 hover:text-cyan-400 transition-colors duration-300 text-center md:text-left relative group mx-auto md:mx-0 w-fit"
                >
                  {item.name}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-cyan-400 transition-all duration-300 group-hover:w-full"></span>
                </button>
              ))}
            </nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-4 text-center md:text-left">
            <h3 className="font-poppins font-semibold text-lg md:text-xl text-white">
              Get in Touch
            </h3>
            
            <div className="space-y-3 font-inter text-gray-300">
              <a 
                href="mailto:qasimkhrd@gmail.com"
                className="flex items-center justify-center md:justify-start space-x-3 hover:text-cyan-400 transition-colors duration-300 group text-sm md:text-base"
              >
                <span className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse group-hover:scale-125 transition-transform duration-300"></span>
                <span>qasimkhrd@gmail.com</span>
              </a>
              
              <a 
                href="tel:+917977801024"
                className="flex items-center justify-center md:justify-start space-x-3 hover:text-purple-400 transition-colors duration-300 group text-sm md:text-base"
              >
                <span className="w-2 h-2 bg-purple-400 rounded-full animate-pulse group-hover:scale-125 transition-transform duration-300" style={{animationDelay: '0.5s'}}></span>
                <span>+91 7977801024</span>
              </a>
              
              <div className="flex items-center justify-center md:justify-start space-x-3 text-sm md:text-base">
                <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" style={{animationDelay: '1s'}}></span>
                <span>India • Remote & Available Worldwide</span>
              </div>

              <div className="flex items-center justify-center md:justify-start space-x-3 text-sm md:text-base">
                <span className="w-2 h-2 bg-pink-400 rounded-full animate-pulse" style={{animationDelay: '1.5s'}}></span>
                <span>Response within 6 hours</span>
              </div>
            </div>

            <div className="pt-4 flex justify-center md:justify-start">
              <button 
                onClick={() => scrollToSection('#contact')}
                className="border-2 border-cyan-400 text-cyan-400 font-poppins font-semibold px-4 md:px-6 py-2 md:py-3 rounded-xl transition-all duration-300 hover:bg-cyan-400 hover:text-gray-900 hover:shadow-lg hover:-translate-y-1 text-sm md:text-base"
              >
                Start a Project
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 pt-6 md:pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-3 md:space-y-0">
            <div className="font-inter text-xs md:text-sm text-gray-400 text-center">
              © 2025 Qasim Kharodia. All Rights Reserved.
            </div>
            
            <div className="flex items-center space-x-2 md:space-x-4 font-inter text-xs md:text-sm text-gray-400">
              <span>Made with ❤️ in India</span>
              <span>•</span>
              <span>Available Worldwide</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
