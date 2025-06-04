
import React, { useState, useEffect } from 'react';
import { Calendar, Code, Users, Award, Lightbulb, Target } from 'lucide-react';

const About = () => {
  const [skillLevels, setSkillLevels] = useState({
    react: 0,
    tailwind: 0,
    animations: 0,
    nodejs: 0,
    uiux: 0
  });

  const [activeTimelineItem, setActiveTimelineItem] = useState<number | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Animate skill bars
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
      { threshold: 0.5 }
    );

    const aboutSection = document.querySelector('#about');
    if (aboutSection) {
      observer.observe(aboutSection);
    }

    return () => observer.disconnect();
  }, []);

  const skills = [
    { name: 'React & Next.js', level: skillLevels.react },
    { name: 'Tailwind CSS & Styled Components', level: skillLevels.tailwind },
    { name: 'Framer Motion & GSAP Animations', level: skillLevels.animations },
    { name: 'Node.js & Express', level: skillLevels.nodejs },
    { name: 'UI/UX Design (Figma)', level: skillLevels.uiux }
  ];

  const timelineItems = [
    {
      date: 'Jan 2025',
      title: 'Launched freelance journey on Reddit',
      description: 'Started taking on client projects, focusing on modern web development with React and Next.js.',
      icon: <Code className="w-6 h-6" />
    },
    {
      date: 'Feb 2025',
      title: 'Delivered first interactive landing page',
      description: 'Created a high-converting landing page with Next.js & Tailwind, featuring smooth animations and optimized performance.',
      icon: <Award className="w-6 h-6" />
    },
    {
      date: 'Mar 2025',
      title: 'Completed 15+ diverse projects',
      description: 'Successfully delivered eCommerce integrations, portfolio sites, and custom dashboards for various industries.',
      icon: <Users className="w-6 h-6" />
    },
    {
      date: 'May 2025',
      title: 'Showcased GSAP-driven animations',
      description: 'Implemented advanced animations that increased user engagement by 30% across client platforms.',
      icon: <Lightbulb className="w-6 h-6" />
    },
    {
      date: 'June 2025',
      title: 'Continuing studies & expanding portfolio',
      description: 'Balancing Computer Science studies while accepting new freelance opportunities and building innovative solutions.',
      icon: <Target className="w-6 h-6" />
    }
  ];

  return (
    <section id="about" className="section-padding bg-gradient-to-br from-purple-50 via-blue-50 to-cyan-50 relative overflow-hidden">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-20 w-64 h-64 bg-gradient-to-br from-vivid-cyan to-blue-400 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-br from-warm-coral to-pink-400 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 left-1/4 w-32 h-32 bg-gradient-to-br from-purple-400 to-indigo-400 rounded-full blur-2xl animate-float"></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Half - Portrait & Info */}
          <div className="space-y-8">
            {/* Profile Image */}
            <div className="flex justify-center lg:justify-start">
              <div className="relative group">
                <div className="w-64 h-64 rounded-full bg-gradient-to-br from-vivid-cyan via-purple-500 to-warm-coral p-1 animate-spin-slow">
                  <img
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face"
                    alt="Qasim Kharodia"
                    className="w-full h-full rounded-full object-cover bg-pure-white"
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-gradient-to-br from-warm-coral to-pink-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <Code className="w-8 h-8 text-pure-white" />
                </div>
                <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-br from-vivid-cyan to-blue-500 rounded-full flex items-center justify-center animate-bounce">
                  <Lightbulb className="w-6 h-6 text-pure-white" />
                </div>
              </div>
            </div>

            {/* About Text */}
            <div className="space-y-6">
              <h2 className="font-playfair font-bold text-4xl lg:text-5xl text-deep-charcoal">
                About <span className="text-gradient">Qasim</span>
              </h2>
              
              <div className="space-y-4 text-gray-700 font-inter text-lg leading-relaxed">
                <p>
                  I'm Qasim Kharodia, a passionate Computer Science student with an obsession for creating 
                  digital experiences that don't just look good—they perform exceptionally. Since January 2025, 
                  I've been helping startups and businesses transform their online presence through modern web development.
                </p>
                
                <p>
                  My approach combines cutting-edge technology with user-centered design, ensuring every project 
                  not only meets expectations but exceeds them. I believe in building websites that tell stories, 
                  drive engagement, and deliver measurable results.
                </p>
              </div>

              {/* Enhanced Stats */}
              <div className="grid grid-cols-3 gap-4">
                <div className="text-center p-4 bg-white bg-opacity-60 backdrop-blur-sm rounded-xl shadow-lg">
                  <div className="text-2xl font-playfair font-bold text-vivid-cyan">15+</div>
                  <div className="text-sm font-inter text-gray-600">Projects</div>
                </div>
                <div className="text-center p-4 bg-white bg-opacity-60 backdrop-blur-sm rounded-xl shadow-lg">
                  <div className="text-2xl font-playfair font-bold text-warm-coral">100%</div>
                  <div className="text-sm font-inter text-gray-600">Satisfaction</div>
                </div>
                <div className="text-center p-4 bg-white bg-opacity-60 backdrop-blur-sm rounded-xl shadow-lg">
                  <div className="text-2xl font-playfair font-bold text-purple-600">24/7</div>
                  <div className="text-sm font-inter text-gray-600">Support</div>
                </div>
              </div>
            </div>

            {/* Enhanced Skill Bars */}
            <div className="space-y-4">
              <h3 className="font-poppins font-semibold text-xl text-deep-charcoal mb-6">Core Skills</h3>
              {skills.map((skill, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="font-inter font-medium text-deep-charcoal">{skill.name}</span>
                    <span className="font-inter text-sm text-gray-500">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                    <div 
                      className="bg-gradient-to-r from-vivid-cyan to-purple-500 h-3 rounded-full transition-all duration-1000 ease-out relative overflow-hidden"
                      style={{ width: `${skill.level}%` }}
                    >
                      <div className="absolute inset-0 bg-white opacity-30 animate-pulse"></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Half - Interactive Timeline */}
          <div className="space-y-8">
            <h3 className="font-playfair font-bold text-3xl text-deep-charcoal text-center lg:text-left">
              My <span className="text-gradient">Journey</span>
            </h3>
            
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-vivid-cyan via-purple-500 to-warm-coral opacity-30"></div>
              
              {timelineItems.map((item, index) => (
                <div 
                  key={index}
                  className="relative flex items-start space-x-6 pb-8 cursor-pointer group"
                  onClick={() => setActiveTimelineItem(activeTimelineItem === index ? null : index)}
                >
                  {/* Enhanced Timeline Marker */}
                  <div className={`flex-shrink-0 w-16 h-16 rounded-full flex items-center justify-center transition-all duration-300 z-10 shadow-lg ${
                    activeTimelineItem === index 
                      ? 'bg-gradient-to-br from-warm-coral to-pink-500 text-pure-white scale-110 shadow-xl' 
                      : 'bg-gradient-to-br from-vivid-cyan to-blue-500 text-pure-white group-hover:scale-105 group-hover:shadow-xl'
                  }`}>
                    {item.icon}
                  </div>
                  
                  {/* Enhanced Timeline Content */}
                  <div className="flex-1 space-y-2">
                    <div className="flex items-center space-x-3">
                      <span className="font-poppins font-semibold text-warm-coral text-sm bg-white bg-opacity-60 px-3 py-1 rounded-full">{item.date}</span>
                    </div>
                    <h4 className="font-poppins font-semibold text-lg text-deep-charcoal group-hover:text-vivid-cyan transition-colors duration-300">
                      {item.title}
                    </h4>
                    
                    {/* Expandable Description */}
                    <div className={`overflow-hidden transition-all duration-300 ${
                      activeTimelineItem === index ? 'max-h-32 opacity-100' : 'max-h-0 opacity-0'
                    }`}>
                      <div className="bg-white bg-opacity-60 backdrop-blur-sm rounded-lg p-4 mt-3 shadow-lg">
                        <p className="font-inter text-gray-600">
                          {item.description}
                        </p>
                      </div>
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
