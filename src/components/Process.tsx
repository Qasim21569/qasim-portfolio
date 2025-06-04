import React, { useEffect, useRef, useState } from 'react';
import { Phone, FileSearch, Calendar, Code, Monitor, Rocket, Settings } from 'lucide-react';

const Process = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const steps = [
    {
      icon: Phone,
      title: "Initial Call",
      description: "We discuss your vision, goals, and requirements to understand your project needs.",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: FileSearch,
      title: "Project Analysis",
      description: "Deep dive into scope, technical solutions, and project planning.",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Calendar,
      title: "Timeline & Budget",
      description: "Establish clear timeline, budget, and deliverables based on requirements.",
      color: "from-green-500 to-teal-500"
    },
    {
      icon: Code,
      title: "Development",
      description: "Build your project with regular updates and prototype reviews.",
      color: "from-yellow-500 to-orange-500"
    },
    {
      icon: Monitor,
      title: "Revisions",
      description: "Incorporate feedback and refine until everything is perfect.",
      color: "from-red-500 to-pink-500"
    },
    {
      icon: Rocket,
      title: "Launch",
      description: "Final testing, optimization, and deployment preparation.",
      color: "from-indigo-500 to-purple-500"
    },
    {
      icon: Settings,
      title: "Support",
      description: "Ongoing maintenance and support to keep your project thriving.",
      color: "from-cyan-500 to-blue-500"
    }
  ];

  return (
    <section
      ref={sectionRef}
      id="process"
      className="py-20 lg:py-24 bg-gradient-to-br from-gray-900 via-slate-900 to-gray-800 text-white relative overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-full blur-3xl animate-pulse" style={{animationDelay: '3s'}}></div>
      </div>

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
          <div className="flex items-center justify-center space-x-4 mb-6">
            <div className="w-12 h-px bg-gradient-to-r from-transparent to-purple-400"></div>
            <span className="font-inter text-sm font-medium text-gray-400 uppercase tracking-wider">Process</span>
            <div className="w-12 h-px bg-gradient-to-r from-purple-400 to-transparent"></div>
          </div>

          <h2 className="font-playfair font-bold text-4xl lg:text-5xl mb-4">
            How We <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400">Work Together</span>
          </h2>
          
          <p className="font-inter text-lg text-gray-300 max-w-2xl mx-auto">
            A simple, transparent process from idea to launch
          </p>
        </div>

        {/* Timeline Container */}
        <div className="max-w-4xl mx-auto relative">
          {/* Vertical Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-purple-500 via-pink-500 to-cyan-500 transform md:-translate-x-px"></div>

          {/* Timeline Steps */}
          <div className="space-y-8">
            {steps.map((step, index) => (
              <div
                key={index}
                className={`relative transition-all duration-700 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                {/* Step Number Circle */}
                <div className="absolute left-8 md:left-1/2 w-16 h-16 bg-gray-900 border-4 border-white rounded-full transform -translate-x-1/2 flex items-center justify-center z-10 group-hover:scale-110 transition-transform duration-300">
                  <div className={`w-10 h-10 rounded-full bg-gradient-to-r ${step.color} flex items-center justify-center`}>
                    <step.icon className="w-5 h-5 text-white" />
                  </div>
                </div>

                {/* Content */}
                <div className={`ml-20 md:ml-0 md:grid md:grid-cols-2 md:gap-8 items-center ${
                  index % 2 === 0 ? '' : 'md:text-right'
                }`}>
                  {/* Left Content (even) or Right Content (odd) */}
                  <div className={`${index % 2 === 0 ? 'md:pr-12' : 'md:order-2 md:pl-12'}`}>
                    <div className="bg-gray-800/30 backdrop-blur-sm rounded-xl p-6 border border-gray-700/30 hover:bg-gray-800/50 transition-all duration-300">
                      <div className={`inline-flex items-center space-x-2 mb-3 px-3 py-1 rounded-full bg-gradient-to-r ${step.color} text-sm font-medium`}>
                        <span>Step {index + 1}</span>
                      </div>
                      <h3 className="font-poppins font-semibold text-xl text-white mb-2">
                        {step.title}
                      </h3>
                      <p className="font-inter text-gray-300 text-sm leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>

                  {/* Empty space for opposite side */}
                  <div className={`hidden md:block ${index % 2 === 0 ? 'md:order-2' : ''}`}></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className={`text-center mt-16 transition-all duration-1000 delay-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`}>
          <p className="font-inter text-gray-300 mb-6">
            Ready to start your project?
          </p>
          <a
            href="#contact"
            className="inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full font-poppins font-medium text-white hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300 transform hover:scale-105"
          >
            <Phone className="w-4 h-4" />
            <span>Let's Talk</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Process; 