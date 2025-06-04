
import React, { useState, useEffect } from 'react';
import { ChevronDown, Code, Sparkles, Zap, Users } from 'lucide-react';

const Hero = () => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  
  const rotatingWords = [
    { text: "website", color: "bg-warm-coral" },
    { text: "design", color: "bg-vivid-cyan" },
    { text: "consultant", color: "bg-purple-500" },
    { text: "developer", color: "bg-emerald-500" },
    { text: "solution", color: "bg-pink-500" }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false);
      setTimeout(() => {
        setCurrentWordIndex((prev) => (prev + 1) % rotatingWords.length);
        setIsVisible(true);
      }, 300);
    }, 2500);

    return () => clearInterval(interval);
  }, []);

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
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800">
      {/* Enhanced Animated Background */}
      <div className="particles-bg">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="particle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 15}s`,
              animationDuration: `${8 + Math.random() * 12}s`,
            }}
          />
        ))}
      </div>

      {/* Dynamic Background Shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-96 h-96 bg-vivid-cyan opacity-10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-warm-coral opacity-10 rounded-full blur-3xl animate-float" style={{animationDelay: '3s'}}></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-purple-500 opacity-8 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute top-1/4 right-1/4 w-48 h-48 bg-emerald-400 opacity-5 rounded-full blur-xl animate-float" style={{animationDelay: '1.5s'}}></div>
      </div>

      {/* Hero Overlay */}
      <div className="hero-overlay absolute inset-0 z-10"></div>

      {/* Enhanced Floating Skill Tags */}
      <div className="absolute top-20 left-10 animate-float z-20 hidden lg:block">
        <div className="skill-tag-enhanced">
          <Code className="w-4 h-4 mr-2" />
          React & Next.js
        </div>
      </div>
      <div className="absolute top-32 right-20 animate-float z-20 hidden lg:block" style={{animationDelay: '1s'}}>
        <div className="skill-tag-enhanced">
          <Sparkles className="w-4 h-4 mr-2" />
          Framer Motion
        </div>
      </div>
      <div className="absolute bottom-32 left-20 animate-float z-20 hidden lg:block" style={{animationDelay: '2s'}}>
        <div className="skill-tag-enhanced">
          <Zap className="w-4 h-4 mr-2" />
          GSAP Animations
        </div>
      </div>
      <div className="absolute top-1/2 right-10 animate-float z-20 hidden lg:block" style={{animationDelay: '1.5s'}}>
        <div className="skill-tag-enhanced">
          <Users className="w-4 h-4 mr-2" />
          UX/UI Design
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-20 text-center px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        {/* Small greeting */}
        <div className="inline-flex items-center mb-6 animate-fade-in-up">
          <span className="font-inter text-sm font-medium text-gray-400 uppercase tracking-wider">HELLO</span>
          <div className="w-8 h-px bg-warm-coral ml-4"></div>
        </div>

        {/* Dynamic Headline */}
        <h1 className="font-playfair font-bold text-5xl md:text-7xl lg:text-8xl text-pure-white mb-8 leading-tight animate-fade-in-up" style={{animationDelay: '0.2s'}}>
          Need a{' '}
          <span className="relative inline-block">
            <span 
              className={`inline-block px-6 py-2 rounded-2xl text-white font-bold transition-all duration-300 ${
                isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
              } ${rotatingWords[currentWordIndex].color}`}
            >
              {rotatingWords[currentWordIndex].text}
            </span>
          </span>
          <br />
          <span className="text-4xl md:text-6xl lg:text-7xl">for your business?</span>
        </h1>
        
        <p className="font-inter font-medium text-xl md:text-2xl lg:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed animate-fade-in-up" style={{animationDelay: '0.4s'}}>
          Say goodbye to website headaches. Enjoy seamless, worry-free solutions 
          so you can focus on growing your product and business.
        </p>

        {/* Enhanced CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16 animate-fade-in-up" style={{animationDelay: '0.6s'}}>
          <button 
            onClick={scrollToContact}
            className="group relative overflow-hidden bg-warm-coral hover:bg-opacity-90 text-white font-poppins font-semibold text-lg px-10 py-4 rounded-full transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 hover:scale-105"
          >
            <span className="relative z-10">Contact</span>
            <div className="absolute inset-0 bg-gradient-to-r from-warm-coral to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>
          
          <button 
            onClick={scrollToPortfolio}
            className="group relative overflow-hidden border-2 border-gray-500 text-gray-300 hover:border-vivid-cyan hover:text-vivid-cyan font-poppins font-semibold text-lg px-10 py-4 rounded-full transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
          >
            <span className="relative z-10">Explore</span>
          </button>
        </div>

        {/* Enhanced Stats */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-8 mb-16 animate-fade-in-up" style={{animationDelay: '0.8s'}}>
          <div className="text-center">
            <div className="text-4xl font-playfair font-bold text-vivid-cyan">15+</div>
            <div className="text-sm font-inter text-gray-400">Projects Completed</div>
          </div>
          <div className="hidden sm:block w-px h-12 bg-gray-600"></div>
          <div className="text-center">
            <div className="text-4xl font-playfair font-bold text-warm-coral">100%</div>
            <div className="text-sm font-inter text-gray-400">Client Satisfaction</div>
          </div>
          <div className="hidden sm:block w-px h-12 bg-gray-600"></div>
          <div className="text-center">
            <div className="text-4xl font-playfair font-bold text-emerald-400">48h</div>
            <div className="text-sm font-inter text-gray-400">Response Time</div>
          </div>
        </div>

        {/* Enhanced Scroll Indicator */}
        <div className="animate-bounce" style={{animationDelay: '1s'}}>
          <div className="flex flex-col items-center space-y-2">
            <ChevronDown 
              size={32} 
              className="text-gray-400 cursor-pointer hover:text-vivid-cyan transition-all duration-300 hover:scale-110"
              onClick={scrollToPortfolio}
            />
          </div>
        </div>
      </div>

      {/* Enhanced Particle Effects */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-vivid-cyan rounded-full animate-twinkle"
            style={{
              left: `${10 + Math.random() * 80}%`,
              top: `${10 + Math.random() * 80}%`,
              animationDelay: `${Math.random() * 3}s`,
            }}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;
