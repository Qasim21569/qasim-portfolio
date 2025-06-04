
import React, { useState, useEffect, useRef } from 'react';
import { Code, Palette, ShoppingCart, Zap, Wrench, MessageCircle } from 'lucide-react';

const Services = () => {
  const [activeCard, setActiveCard] = useState<number | null>(null);
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

  const services = [
    {
      icon: <Code className="w-8 h-8" />,
      title: "Custom Development",
      description: "Bespoke websites built with Next.js & Tailwind that adapt flawlessly across all devices.",
      gradient: "from-blue-500 to-cyan-400",
      features: ["Next.js & React", "Responsive Design", "Performance Optimized", "SEO Ready"]
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: "UI/UX & Animations",
      description: "Elevate user engagement with Framer Motion micro-interactions and smooth animations.",
      gradient: "from-purple-500 to-pink-400",
      features: ["Framer Motion", "GSAP Animations", "User Experience", "Brand Integration"]
    },
    {
      icon: <ShoppingCart className="w-8 h-8" />,
      title: "E-Commerce Solutions",
      description: "Complete storefront solutions with Shopify integration and secure payment processing.",
      gradient: "from-emerald-500 to-teal-400",
      features: ["Shopify Integration", "Payment Processing", "Inventory Management", "Admin Dashboard"]
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Performance Optimization",
      description: "Sub-2s page loads, semantic markup, structured data—rank higher, convert more.",
      gradient: "from-orange-500 to-red-400",
      features: ["Speed Optimization", "SEO Strategy", "Core Web Vitals", "Analytics Setup"]
    },
    {
      icon: <Wrench className="w-8 h-8" />,
      title: "Maintenance & Support",
      description: "Ongoing site support with security updates, monitoring, and feature iterations.",
      gradient: "from-indigo-500 to-purple-400",
      features: ["24/7 Monitoring", "Security Updates", "Content Updates", "Performance Reports"]
    },
    {
      icon: <MessageCircle className="w-8 h-8" />,
      title: "Consulting & Strategy",
      description: "Strategic planning for your next web project from wireframe to roadmap.",
      gradient: "from-pink-500 to-rose-400",
      features: ["Project Planning", "Tech Stack Selection", "Timeline & Budget", "Growth Strategy"]
    }
  ];

  return (
    <section 
      ref={sectionRef}
      id="services" 
      className="min-h-screen bg-gradient-to-br from-gray-900 via-slate-900 to-gray-800 text-white relative overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full blur-3xl animate-pulse" style={{animationDelay: '3s'}}></div>
      </div>

      <div className="container-custom py-20 lg:py-32 relative z-10">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
          <div className="flex items-center justify-center space-x-4 mb-8">
            <div className="w-12 h-px bg-gradient-to-r from-transparent to-cyan-400"></div>
            <span className="font-inter text-sm font-medium text-gray-400 uppercase tracking-wider">SERVICES</span>
            <div className="w-12 h-px bg-gradient-to-r from-cyan-400 to-transparent"></div>
          </div>

          <h2 className="font-playfair font-bold text-4xl lg:text-5xl mb-6">
            What I <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">Create</span>
          </h2>
          
          <p className="font-inter text-lg text-gray-300 max-w-3xl mx-auto">
            From concept to deployment, I deliver comprehensive web solutions that drive results.
          </p>
        </div>

        {/* Service Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className={`group relative bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 hover:border-gray-600/50 transition-all duration-500 cursor-pointer ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
              } ${
                activeCard === index ? 'scale-105 shadow-2xl' : 'hover:scale-105'
              }`}
              style={{transitionDelay: `${index * 150}ms`}}
              onClick={() => setActiveCard(activeCard === index ? null : index)}
            >
              {/* Gradient Border Effect */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
              
              {/* Icon */}
              <div className={`relative z-10 w-16 h-16 bg-gradient-to-br ${service.gradient} rounded-xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300`}>
                {service.icon}
              </div>

              {/* Content */}
              <div className="relative z-10">
                <h3 className="font-poppins font-semibold text-xl text-white mb-4 group-hover:text-cyan-400 transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="font-inter text-gray-300 mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <div className={`overflow-hidden transition-all duration-300 ${
                  activeCard === index ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'
                }`}>
                  <div className="space-y-2 pt-4 border-t border-gray-700/50">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-3">
                        <div className={`w-2 h-2 bg-gradient-to-r ${service.gradient} rounded-full`}></div>
                        <span className="font-inter text-sm text-gray-400">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
