
import React from 'react';
import { ChevronDown } from 'lucide-react';

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
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-deep-charcoal">
      {/* Animated Background */}
      <div className="particles-bg">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="particle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 10}s`,
            }}
          />
        ))}
      </div>

      {/* Hero Overlay */}
      <div className="hero-overlay absolute inset-0 z-10"></div>

      {/* Floating Skill Tags */}
      <div className="absolute top-20 left-10 animate-float z-20 hidden lg:block">
        <div className="skill-tag">Next.js</div>
      </div>
      <div className="absolute top-32 right-20 animate-float z-20 hidden lg:block" style={{animationDelay: '1s'}}>
        <div className="skill-tag">Tailwind CSS</div>
      </div>
      <div className="absolute bottom-32 left-20 animate-float z-20 hidden lg:block" style={{animationDelay: '2s'}}>
        <div className="skill-tag">Framer Motion</div>
      </div>

      {/* Main Content */}
      <div className="relative z-20 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <h1 className="font-playfair font-bold text-4xl md:text-6xl lg:text-7xl text-pure-white mb-6 leading-tight">
          I'm <span className="text-gradient">Q-A-S-I-M Kharodia</span>—
          <br />
          Crafting Interactive, High-Impact 
          <br />
          Web Experiences.
        </h1>
        
        <p className="font-inter font-medium text-lg md:text-xl lg:text-2xl text-soft-gray mb-12 max-w-4xl mx-auto leading-relaxed">
          Computer Science undergrad & freelance developer. Since January 2025, I've delivered 
          agency-grade solutions to startups and small businesses.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
          <button 
            onClick={scrollToPortfolio}
            className="btn-primary group"
          >
            Explore My Work
            <div className="ml-2 inline-block transition-transform duration-300 group-hover:translate-x-1">→</div>
          </button>
          
          <button 
            onClick={scrollToContact}
            className="btn-secondary group"
          >
            Book a Free Consultation
            <div className="ml-2 inline-block transition-transform duration-300 group-hover:scale-110">✦</div>
          </button>
        </div>

        {/* Scroll Indicator */}
        <div className="animate-pulse-glow">
          <ChevronDown 
            size={32} 
            className="text-soft-gray cursor-pointer hover:text-vivid-cyan transition-colors duration-300"
            onClick={scrollToPortfolio}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
