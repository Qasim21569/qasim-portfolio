
import React, { useState, useEffect } from 'react';
import { Calendar, Code, Users, Award } from 'lucide-react';

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
      title: 'Completed 8+ diverse projects',
      description: 'Successfully delivered eCommerce integrations, portfolio sites, and custom dashboards for various industries.',
      icon: <Users className="w-6 h-6" />
    },
    {
      date: 'May 2025',
      title: 'Showcased GSAP-driven animations',
      description: 'Implemented advanced animations that increased user engagement by 30% across client platforms.',
      icon: <Calendar className="w-6 h-6" />
    },
    {
      date: 'June 2025',
      title: 'Continuing studies & expanding portfolio',
      description: 'Balancing Computer Science studies while accepting new freelance opportunities and building innovative solutions.',
      icon: <Code className="w-6 h-6" />
    }
  ];

  return (
    <section id="about" className="section-padding diagonal-split">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Half - Portrait & Info */}
          <div className="space-y-8">
            {/* Profile Image */}
            <div className="flex justify-center lg:justify-start">
              <div className="relative group">
                <div className="w-64 h-64 rounded-full bg-gradient-to-br from-vivid-cyan to-warm-coral p-1">
                  <img
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face"
                    alt="Q-A-S-I-M Kharodia"
                    className="w-full h-full rounded-full object-cover bg-pure-white"
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-warm-coral rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Code className="w-8 h-8 text-pure-white" />
                </div>
              </div>
            </div>

            {/* About Text */}
            <div className="space-y-6">
              <h2 className="font-playfair font-bold text-4xl lg:text-5xl text-deep-charcoal">
                About Me
              </h2>
              
              <div className="space-y-4 text-gray-600 font-inter text-lg leading-relaxed">
                <p>
                  I'm Q-A-S-I-M Kharodia, a Computer Science undergrad with a passion for building 
                  immersive web experiences. Since January 2025, I've been freelancing on Reddit—delivering 
                  dynamic, performance-driven websites to startups across various sectors.
                </p>
                
                <p>
                  My goal is simple: fuse cutting-edge tech with engaging design to help businesses 
                  thrive online. Every project is an opportunity to push boundaries and create something 
                  that not only looks stunning but performs exceptionally.
                </p>
              </div>
            </div>

            {/* Skill Bars */}
            <div className="space-y-4">
              <h3 className="font-poppins font-semibold text-xl text-deep-charcoal mb-6">Core Skills</h3>
              {skills.map((skill, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="font-inter font-medium text-deep-charcoal">{skill.name}</span>
                    <span className="font-inter text-sm text-gray-500">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-soft-gray rounded-full h-2">
                    <div 
                      className="bg-vivid-cyan h-2 rounded-full transition-all duration-1000 ease-out"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Half - Interactive Timeline */}
          <div className="space-y-8">
            <h3 className="font-playfair font-bold text-3xl text-deep-charcoal text-center lg:text-left">
              My Journey
            </h3>
            
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-soft-gray"></div>
              
              {timelineItems.map((item, index) => (
                <div 
                  key={index}
                  className="relative flex items-start space-x-6 pb-8 cursor-pointer group"
                  onClick={() => setActiveTimelineItem(activeTimelineItem === index ? null : index)}
                >
                  {/* Timeline Marker */}
                  <div className={`flex-shrink-0 w-16 h-16 rounded-full flex items-center justify-center transition-all duration-300 z-10 ${
                    activeTimelineItem === index 
                      ? 'bg-warm-coral text-pure-white scale-110' 
                      : 'bg-vivid-cyan text-pure-white group-hover:scale-105'
                  }`}>
                    {item.icon}
                  </div>
                  
                  {/* Timeline Content */}
                  <div className="flex-1 space-y-2">
                    <div className="flex items-center space-x-3">
                      <span className="font-poppins font-semibold text-warm-coral text-sm">{item.date}</span>
                    </div>
                    <h4 className="font-poppins font-semibold text-lg text-deep-charcoal group-hover:text-vivid-cyan transition-colors duration-300">
                      {item.title}
                    </h4>
                    
                    {/* Expandable Description */}
                    <div className={`overflow-hidden transition-all duration-300 ${
                      activeTimelineItem === index ? 'max-h-32 opacity-100' : 'max-h-0 opacity-0'
                    }`}>
                      <p className="font-inter text-gray-600 pt-2">
                        {item.description}
                      </p>
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
