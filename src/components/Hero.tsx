
import React from 'react';
import { ChevronDown, Code, Sparkles, Zap, Users } from 'lucide-react';

const Hero = () => {
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
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-deep-charcoal via-gray-900 to-deep-charcoal">
      {/* Enhanced Animated Background */}
      <div className="particles-bg">
        {[...Array(20)].map((_, i) => (
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
        <div className="absolute top-20 left-10 w-72 h-72 bg-vivid-cyan opacity-10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-warm-coral opacity-10 rounded-full blur-3xl animate-float" style={{animationDelay: '3s'}}></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-purple-500 opacity-5 rounded-full blur-2xl animate-pulse"></div>
      </div>

      {/* Hero Overlay */}
      <div className="hero-overlay absolute inset-0 z-10"></div>

      {/* Enhanced Floating Skill Tags */}
      <div className="absolute top-20 left-10 animate-float z-20 hidden lg:block">
        <div className="skill-tag-enhanced">
          <Code className="w-4 h-4 mr-2" />
          Next.js
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
          GSAP
        </div>
      </div>
      <div className="absolute top-1/2 right-10 animate-float z-20 hidden lg:block" style={{animationDelay: '1.5s'}}>
        <div className="skill-tag-enhanced">
          <Users className="w-4 h-4 mr-2" />
          UX/UI
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-20 text-center px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        {/* Animated Badge */}
        <div className="inline-flex items-center bg-vivid-cyan bg-opacity-20 backdrop-blur-sm border border-vivid-cyan border-opacity-30 rounded-full px-6 py-3 mb-8 animate-fade-in-up">
          <div className="w-2 h-2 bg-vivid-cyan rounded-full animate-pulse mr-3"></div>
          <span className="font-inter text-sm font-medium text-vivid-cyan">Available for New Projects</span>
        </div>

        <h1 className="font-playfair font-bold text-4xl md:text-6xl lg:text-7xl text-pure-white mb-6 leading-tight animate-fade-in-up" style={{animationDelay: '0.2s'}}>
          Hi, I'm <span className="text-gradient">Qasim Kharodia</span>
          <br />
          <span className="text-3xl md:text-5xl lg:text-6xl">Crafting Digital Experiences</span>
          <br />
          <span className="text-2xl md:text-4xl lg:text-5xl text-vivid-cyan">That Drive Results</span>
        </h1>
        
        <p className="font-inter font-medium text-lg md:text-xl lg:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed animate-fade-in-up" style={{animationDelay: '0.4s'}}>
          Computer Science student & freelance developer specializing in modern web solutions. 
          Since January 2025, I've helped startups and businesses create stunning, high-performing websites 
          that convert visitors into customers.
        </p>

        {/* Enhanced Stats */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-8 mb-12 animate-fade-in-up" style={{animationDelay: '0.6s'}}>
          <div className="text-center">
            <div className="text-3xl font-playfair font-bold text-vivid-cyan">15+</div>
            <div className="text-sm font-inter text-gray-400">Projects Completed</div>
          </div>
          <div className="hidden sm:block w-px h-12 bg-gray-600"></div>
          <div className="text-center">
            <div className="text-3xl font-playfair font-bold text-warm-coral">100%</div>
            <div className="text-sm font-inter text-gray-400">Client Satisfaction</div>
          </div>
          <div className="hidden sm:block w-px h-12 bg-gray-600"></div>
          <div className="text-center">
            <div className="text-3xl font-playfair font-bold text-vivid-cyan">48h</div>
            <div className="text-sm font-inter text-gray-400">Avg Response Time</div>
          </div>
        </div>

        {/* Enhanced CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16 animate-fade-in-up" style={{animationDelay: '0.8s'}}>
          <button 
            onClick={scrollToPortfolio}
            className="btn-primary-enhanced group relative overflow-hidden"
          >
            <span className="relative z-10 flex items-center">
              View My Work
              <div className="ml-2 inline-block transition-transform duration-300 group-hover:translate-x-1">→</div>
            </span>
          </button>
          
          <button 
            onClick={scrollToContact}
            className="btn-secondary-enhanced group relative overflow-hidden"
          >
            <span className="relative z-10 flex items-center">
              Start Your Project
              <Sparkles className="ml-2 w-5 h-5 transition-transform duration-300 group-hover:rotate-12" />
            </span>
          </button>
        </div>

        {/* Enhanced Scroll Indicator */}
        <div className="animate-pulse-glow" style={{animationDelay: '1s'}}>
          <div className="flex flex-col items-center space-y-2">
            <span className="font-inter text-sm text-gray-400">Discover More</span>
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
