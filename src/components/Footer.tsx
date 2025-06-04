
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
    { name: 'Testimonials', href: '#testimonials' },
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
    <footer className="bg-deep-charcoal text-pure-white relative">
      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className="absolute -top-6 right-8 w-12 h-12 bg-vivid-cyan rounded-full flex items-center justify-center text-pure-white hover:bg-warm-coral transition-all duration-300 hover:scale-110 shadow-lg"
        aria-label="Scroll to top"
      >
        <ChevronUp className="w-6 h-6" />
      </button>

      <div className="container-custom pt-16 pb-8">
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {/* Brand & Description */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="text-3xl font-playfair font-bold text-vivid-cyan relative">
                QK
                <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-warm-coral rounded-full"></div>
              </div>
              <div className="font-poppins font-semibold text-lg">
                Q-A-S-I-M Kharodia
              </div>
            </div>
            
            <p className="font-inter text-gray-300 leading-relaxed">
              Computer Science undergrad & freelance web developer crafting interactive, 
              high-impact web experiences for startups and small businesses.
            </p>

            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center text-pure-white hover:bg-vivid-cyan transition-all duration-300 hover:scale-110"
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-poppins font-semibold text-xl text-pure-white">
              Quick Links
            </h3>
            
            <nav className="space-y-2">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="block font-inter text-gray-300 hover:text-vivid-cyan transition-colors duration-300 text-left"
                >
                  {item.name}
                </button>
              ))}
            </nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="font-poppins font-semibold text-xl text-pure-white">
              Get in Touch
            </h3>
            
            <div className="space-y-3 font-inter text-gray-300">
              <div className="flex items-center space-x-3">
                <span className="w-2 h-2 bg-vivid-cyan rounded-full"></span>
                <span>qasim@example.com</span>
              </div>
              
              <div className="flex items-center space-x-3">
                <span className="w-2 h-2 bg-warm-coral rounded-full"></span>
                <span>+1 (352) XXX-XXXX</span>
              </div>
              
              <div className="flex items-center space-x-3">
                <span className="w-2 h-2 bg-vivid-cyan rounded-full"></span>
                <span>Remote & Available Worldwide</span>
              </div>
            </div>

            <div className="pt-4">
              <button 
                onClick={() => scrollToSection('#contact')}
                className="btn-secondary text-sm"
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
              © 2025 Q-A-S-I-M Kharodia. All Rights Reserved.
            </div>
            
            <div className="flex space-x-6 font-inter text-sm">
              <button className="text-gray-400 hover:text-pure-white transition-colors duration-300">
                Privacy Policy
              </button>
              <button className="text-gray-400 hover:text-pure-white transition-colors duration-300">
                Terms of Service
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute top-10 left-10 w-32 h-32 border border-vivid-cyan rounded-full"></div>
        <div className="absolute bottom-10 right-10 w-24 h-24 border border-warm-coral rounded-full"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-vivid-cyan rounded-full blur-xl"></div>
        <div className="absolute top-1/3 right-1/4 w-20 h-20 bg-warm-coral rounded-full blur-xl"></div>
      </div>
    </footer>
  );
};

export default Footer;
