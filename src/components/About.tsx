import React, { useState, useEffect, useRef } from 'react';
import { Calendar, Code, Users, Award, Lightbulb, Target } from 'lucide-react';

const About = () => {
  const [skillLevels, setSkillLevels] = useState({
    react: 0,
    tailwind: 0,
    animations: 0,
    nodejs: 0,
    uiux: 0
  });

  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            // Animate skill bars with staggered effect
            setTimeout(() => {
              setSkillLevels({
                react: 90,
                tailwind: 85,
                animations: 80,
                nodejs: 75,
                uiux: 85
              });
            }, 500);
          }
        });
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const skills = [
    { name: 'React & Next.js', level: skillLevels.react, color: 'from-blue-500 to-cyan-400' },
    { name: 'Tailwind CSS', level: skillLevels.tailwind, color: 'from-cyan-400 to-teal-400' },
    { name: 'Framer Motion & GSAP', level: skillLevels.animations, color: 'from-purple-500 to-pink-400' },
    { name: 'Node.js & Express', level: skillLevels.nodejs, color: 'from-green-500 to-emerald-400' },
    { name: 'UI/UX Design', level: skillLevels.uiux, color: 'from-orange-500 to-red-400' }
  ];

  const stats = [
    { number: '10+', label: 'Projects Completed', color: 'text-cyan-400' },
    { number: '100%', label: 'Client Satisfaction', color: 'text-emerald-400' },
    { number: '6h', label: 'Response Time', color: 'text-purple-400' }
  ];

  return (
    <section 
      ref={sectionRef}
      id="about" 
      className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800 text-white relative overflow-hidden"
    >
      {/* Subtle Background Effects */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-16 md:top-32 left-8 md:left-32 w-48 md:w-96 h-48 md:h-96 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-16 md:bottom-32 right-8 md:right-32 w-40 md:w-80 h-40 md:h-80 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
      </div>

      <div className="container-custom py-16 md:py-20 lg:py-32 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
          {/* Left Side - Content */}
          <div className={`space-y-6 md:space-y-8 transition-all duration-1000 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}>
            <div className="space-y-4 md:space-y-6">
              <div className="flex items-center space-x-3 md:space-x-4 mb-6 md:mb-8">
                <span className="font-inter text-xs md:text-sm font-medium text-gray-400 uppercase tracking-wider">ABOUT ME</span>
                <div className="w-8 md:w-12 h-px bg-gradient-to-r from-cyan-400 to-transparent"></div>
              </div>

              <h2 className="font-playfair font-bold text-3xl md:text-4xl lg:text-5xl">
                Crafting Digital
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
                  Experiences
                </span>
              </h2>
              
              <div className="space-y-3 md:space-y-4 text-gray-300 font-inter text-base md:text-lg leading-relaxed">
                <p>
                  I'm Qasim Kharodia, a passionate Computer Science student with an obsession for creating 
                  digital experiences that don't just look good, they perform exceptionally.
                </p>
                
                <p>
                  Since January 2025, I've been helping startups and businesses transform their online presence 
                  through modern web development that combines cutting-edge technology with user-centered design.
                </p>
              </div>
            </div>

            {/* Enhanced Stats */}
            <div className="grid grid-cols-3 gap-3 md:gap-6">
              {stats.map((stat, index) => (
                <div 
                  key={index}
                  className={`text-center transition-all duration-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}
                  style={{transitionDelay: `${index * 200}ms`}}
                >
                  <div className={`text-2xl md:text-3xl font-playfair font-bold ${stat.color} mb-1 md:mb-2`}>
                    {stat.number}
                  </div>
                  <div className="text-xs md:text-sm font-inter text-gray-400">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side - Skills & Profile */}
          <div className={`space-y-6 md:space-y-8 transition-all duration-1000 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`} style={{transitionDelay: '300ms'}}>
            {/* Profile Section */}
            <div className="flex justify-center lg:justify-start mb-6 md:mb-8">
              <div className="relative">
                <div className="w-32 md:w-40 lg:w-48 h-32 md:h-40 lg:h-48 rounded-xl md:rounded-2xl bg-gradient-to-br from-cyan-500 via-purple-500 to-pink-500 p-1">
                  <img
                    src="\Qasim imag.jpeg"
                    alt="Qasim Kharodia"
                    className="w-full h-full rounded-xl md:rounded-2xl object-cover bg-gray-900"
                    loading="lazy"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      console.error(`Failed to load image: ${target.src}`);
                      target.src = '/placeholder.svg';
                      target.onerror = null;
                    }}
                  />
                </div>
                <div className="absolute -bottom-2 md:-bottom-4 -right-2 md:-right-4 w-8 md:w-10 lg:w-12 h-8 md:h-10 lg:h-12 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-lg md:rounded-xl flex items-center justify-center">
                  <Code className="w-4 md:w-5 lg:w-6 h-4 md:h-5 lg:h-6 text-white" />
                </div>
              </div>
            </div>

            {/* Skills Section */}
            <div className="space-y-4 md:space-y-6">
              <h3 className="font-poppins font-semibold text-lg md:text-xl text-white mb-4 md:mb-6 text-center lg:text-left">Core Expertise</h3>
              
              {skills.map((skill, index) => (
                <div key={index} className="space-y-2 md:space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="font-inter font-medium text-white text-sm md:text-base">{skill.name}</span>
                    <span className="font-inter text-xs md:text-sm text-gray-400">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-1.5 md:h-2 overflow-hidden">
                    <div 
                      className={`bg-gradient-to-r ${skill.color} h-1.5 md:h-2 rounded-full transition-all duration-1000 ease-out relative overflow-hidden`}
                      style={{ 
                        width: `${skill.level}%`,
                        transitionDelay: `${index * 200 + 500}ms`
                      }}
                    >
                      <div className="absolute inset-0 bg-white opacity-20 animate-pulse"></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
