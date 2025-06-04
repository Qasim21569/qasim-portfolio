import React, { useState, useEffect } from 'react';
import { ArrowUpRight, Code, Palette, Zap } from 'lucide-react';

const Hero = () => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isMobile, setIsMobile] = useState(false);
  
  const rotatingWords = [
    { text: "websites", color: "text-vivid-cyan", accent: "bg-vivid-cyan/20" },
    { text: "designs", color: "text-warm-coral", accent: "bg-warm-coral/20" },
    { text: "solutions", color: "text-purple-400", accent: "bg-purple-400/20" },
    { text: "experiences", color: "text-emerald-400", accent: "bg-emerald-400/20" },
    { text: "brands", color: "text-pink-400", accent: "bg-pink-400/20" }
  ];

  useEffect(() => {
    // Check if device is mobile
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768 || 'ontouchstart' in window);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false);
      setTimeout(() => {
        setCurrentWordIndex((prev) => (prev + 1) % rotatingWords.length);
        setIsVisible(true);
      }, 300);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    // Only add mouse tracking for non-mobile devices
    if (!isMobile) {
      const handleMouseMove = (e: MouseEvent) => {
        setMousePosition({ x: e.clientX, y: e.clientY });
      };

      window.addEventListener('mousemove', handleMouseMove);
      return () => window.removeEventListener('mousemove', handleMouseMove);
    }
  }, [isMobile]);

  const scrollToPortfolio = () => {
    const element = document.querySelector('#portfolio');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      {/* Cursor follower - only on desktop */}
      {!isMobile && (
        <div 
          className="fixed w-6 h-6 pointer-events-none z-50 mix-blend-difference hidden md:block"
          style={{
            left: mousePosition.x - 12,
            top: mousePosition.y - 12,
            transition: 'all 0.1s ease-out'
          }}
        >
          <div className="w-full h-full rounded-full bg-white opacity-80"></div>
        </div>
      )}

      {/* Subtle geometric background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-[0.02]">
          <div className="absolute inset-0" style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px'
          }}></div>
        </div>

        {/* Floating elements - fewer on mobile */}
        <div className="absolute top-1/4 left-4 md:left-10 w-2 h-2 bg-vivid-cyan rounded-full animate-pulse opacity-60"></div>
        <div className="absolute top-1/3 right-8 md:right-20 w-1 h-1 bg-warm-coral rounded-full animate-pulse opacity-40" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-1/4 left-1/4 w-1.5 h-1.5 bg-purple-400 rounded-full animate-pulse opacity-50" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-1/3 right-1/3 w-1 h-1 bg-emerald-400 rounded-full animate-pulse opacity-60" style={{animationDelay: '3s'}}></div>

        {/* Large subtle accent */}
        <div className="absolute top-0 right-0 w-64 md:w-96 h-64 md:h-96 bg-gradient-to-bl from-vivid-cyan/5 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-48 md:w-80 h-48 md:h-80 bg-gradient-to-tr from-warm-coral/5 to-transparent rounded-full blur-3xl"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-20 w-full px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="flex items-center min-h-screen py-16 md:py-0">
          <div className="w-full max-w-4xl">
            
            {/* Name highlight with modern styling */}
            <div className="flex items-center mb-4 animate-fade-in-up">
              <div className="flex items-center space-x-3">
                <div className="w-6 md:w-8 h-px bg-gradient-to-r from-vivid-cyan to-warm-coral"></div>
                <span className="font-inter text-xs md:text-sm font-medium text-gray-400 uppercase tracking-[0.15em] md:tracking-[0.2em]">
                  Hello, I'm
                </span>
              </div>
            </div>

            {/* Enhanced name display */}
            <div className="mb-4 md:mb-6 animate-fade-in-up" style={{animationDelay: '0.1s'}}>
              <h2 className="font-playfair text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-100 to-gray-300 leading-none tracking-tight">
                QASIM
                <span className="block text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal text-gray-400 mt-1">
                  Kharodia
                </span>
              </h2>
            </div>

            {/* Dynamic headline with animated text */}
            <h1 className="font-playfair font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white mb-4 md:mb-6 leading-tight animate-fade-in-up" style={{animationDelay: '0.2s'}}>
              I craft modern{' '}
              <span className="relative inline-block">
                <span 
                  className={`inline-block px-2 sm:px-3 md:px-4 lg:px-6 py-1 sm:py-1.5 md:py-2 lg:py-3 rounded-lg md:rounded-xl lg:rounded-2xl font-semibold transition-all duration-500 ${
                    isVisible ? 'opacity-100 scale-100 blur-0' : 'opacity-0 scale-95 blur-sm'
                  } ${rotatingWords[currentWordIndex].color} ${rotatingWords[currentWordIndex].accent} text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl`}
                >
                  {rotatingWords[currentWordIndex].text}
                </span>
              </span>
              <br />
              for ambitious businesses
            </h1>
            
            <p className="font-inter text-lg md:text-xl lg:text-2xl text-gray-400 mb-6 md:mb-8 max-w-2xl leading-relaxed animate-fade-in-up" style={{animationDelay: '0.3s'}}>
              Computer Science student & freelance developer turning ideas into 
              <span className="text-vivid-cyan font-medium"> pixel-perfect</span>, 
              <span className="text-warm-coral font-medium"> performance-driven</span> digital experiences.
            </p>

            {/* Enhanced CTA buttons */}
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 mb-8 md:mb-12 animate-fade-in-up" style={{animationDelay: '0.4s'}}>
              <button 
                onClick={scrollToContact}
                className="group relative overflow-hidden bg-gradient-to-r from-vivid-cyan to-blue-500 text-white font-poppins font-semibold text-base md:text-lg px-6 md:px-8 py-3 md:py-4 rounded-xl md:rounded-2xl transition-all duration-300 hover:shadow-xl hover:shadow-vivid-cyan/25 hover:-translate-y-1 flex items-center justify-center gap-2"
              >
                <span>Start Your Project</span>
                <ArrowUpRight size={18} className="md:w-5 md:h-5 group-hover:rotate-45 transition-transform duration-300" />
              </button>
              
              <button 
                onClick={scrollToPortfolio}
                className="group relative overflow-hidden border border-gray-600 text-gray-300 hover:border-gray-400 hover:text-white font-poppins font-semibold text-base md:text-lg px-6 md:px-8 py-3 md:py-4 rounded-xl md:rounded-2xl transition-all duration-300 hover:shadow-lg hover:-translate-y-1 flex items-center justify-center gap-2"
              >
                <span>View My Work</span>
                <div className="w-1.5 h-1.5 rounded-full bg-vivid-cyan animate-pulse"></div>
              </button>
            </div>

            {/* Modern stats with icons */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6 animate-fade-in-up" style={{animationDelay: '0.5s'}}>
              <div className="flex items-center space-x-3 md:space-x-4">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl md:rounded-2xl bg-vivid-cyan/10 flex items-center justify-center">
                  <Code size={20} className="md:w-6 md:h-6 text-vivid-cyan" />
                </div>
                <div>
                  <div className="text-2xl md:text-3xl font-playfair font-bold text-white">10+</div>
                  <div className="text-xs md:text-sm font-inter text-gray-400">Projects Delivered</div>
                </div>
              </div>
              
              <div className="flex items-center space-x-3 md:space-x-4">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl md:rounded-2xl bg-warm-coral/10 flex items-center justify-center">
                  <Palette size={20} className="md:w-6 md:h-6 text-warm-coral" />
                </div>
                <div>
                  <div className="text-2xl md:text-3xl font-playfair font-bold text-white">100%</div>
                  <div className="text-xs md:text-sm font-inter text-gray-400">Client Satisfaction</div>
                </div>
              </div>
              
              <div className="flex items-center space-x-3 md:space-x-4">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl md:rounded-2xl bg-emerald-400/10 flex items-center justify-center">
                  <Zap size={20} className="md:w-6 md:h-6 text-emerald-400" />
                </div>
                <div>
                  <div className="text-2xl md:text-3xl font-playfair font-bold text-white">6h</div>
                  <div className="text-xs md:text-sm font-inter text-gray-400">Response Time</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
