
import React, { useState, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';

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
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800">
      {/* Minimal Background Effects */}
      <div className="particles-bg">
        {[...Array(15)].map((_, i) => (
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

      {/* Subtle Background Shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-96 h-96 bg-vivid-cyan opacity-5 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-warm-coral opacity-5 rounded-full blur-3xl animate-float" style={{animationDelay: '3s'}}></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-purple-500 opacity-3 rounded-full blur-2xl animate-pulse"></div>
      </div>

      {/* Hero Overlay */}
      <div className="hero-overlay absolute inset-0 z-10"></div>

      {/* Main Content - Left Aligned */}
      <div className="relative z-20 w-full px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="flex items-center min-h-screen">
          <div className="w-full lg:w-2/3 pt-20">
            {/* Small greeting */}
            <div className="flex items-center mb-8 animate-fade-in-up">
              <span className="font-inter text-sm font-medium text-gray-400 uppercase tracking-wider">HELLO, I'M QASIM</span>
              <div className="w-12 h-px bg-warm-coral ml-4"></div>
            </div>

            {/* Dynamic Headline - Left Aligned */}
            <h1 className="font-playfair font-bold text-5xl md:text-6xl lg:text-7xl text-pure-white mb-8 leading-tight animate-fade-in-up text-left" style={{animationDelay: '0.2s'}}>
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
              <span className="text-4xl md:text-5xl lg:text-6xl">for your business?</span>
            </h1>
            
            <p className="font-inter font-medium text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl leading-relaxed animate-fade-in-up text-left" style={{animationDelay: '0.4s'}}>
              Say goodbye to website headaches. Enjoy seamless, worry-free solutions 
              so you can focus on growing your product and business.
            </p>

            {/* CTA Buttons - Left Aligned */}
            <div className="flex flex-col sm:flex-row gap-6 mb-16 animate-fade-in-up" style={{animationDelay: '0.6s'}}>
              <button 
                onClick={scrollToContact}
                className="group relative overflow-hidden bg-warm-coral hover:bg-opacity-90 text-white font-poppins font-semibold text-lg px-10 py-4 rounded-full transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 hover:scale-105"
              >
                <span className="relative z-10">Let's Work Together</span>
                <div className="absolute inset-0 bg-gradient-to-r from-warm-coral to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
              
              <button 
                onClick={scrollToPortfolio}
                className="group relative overflow-hidden border-2 border-gray-500 text-gray-300 hover:border-vivid-cyan hover:text-vivid-cyan font-poppins font-semibold text-lg px-10 py-4 rounded-full transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
              >
                <span className="relative z-10">View My Work</span>
              </button>
            </div>

            {/* Enhanced Stats - Left Aligned */}
            <div className="flex flex-col sm:flex-row gap-8 mb-16 animate-fade-in-up" style={{animationDelay: '0.8s'}}>
              <div className="text-left">
                <div className="text-4xl font-playfair font-bold text-vivid-cyan">15+</div>
                <div className="text-sm font-inter text-gray-400">Projects Completed</div>
              </div>
              <div className="hidden sm:block w-px h-12 bg-gray-600"></div>
              <div className="text-left">
                <div className="text-4xl font-playfair font-bold text-warm-coral">100%</div>
                <div className="text-sm font-inter text-gray-400">Client Satisfaction</div>
              </div>
              <div className="hidden sm:block w-px h-12 bg-gray-600"></div>
              <div className="text-left">
                <div className="text-4xl font-playfair font-bold text-emerald-400">48h</div>
                <div className="text-sm font-inter text-gray-400">Response Time</div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator - Centered at Bottom */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce" style={{animationDelay: '1s'}}>
          <div className="flex flex-col items-center space-y-2">
            <ChevronDown 
              size={32} 
              className="text-gray-400 cursor-pointer hover:text-vivid-cyan transition-all duration-300 hover:scale-110"
              onClick={scrollToPortfolio}
            />
          </div>
        </div>
      </div>

      {/* Minimal Particle Effects */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(8)].map((_, i) => (
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
