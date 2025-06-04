
import React, { useState } from 'react';
import { Code, Palette, ShoppingCart, Zap, Wrench, MessageCircle, ChevronDown, ChevronUp } from 'lucide-react';

const Services = () => {
  const [activeCard, setActiveCard] = useState<number | null>(null);
  const [activeStep, setActiveStep] = useState<number | null>(null);

  const services = [
    {
      icon: <Code className="w-8 h-8" />,
      title: "Custom Responsive Development",
      description: "Bespoke websites built with Next.js & Tailwind that adapt flawlessly from mobile to desktop.",
      features: ["Next.js & React", "Responsive Design", "Performance Optimized", "SEO Ready"]
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: "Interactive UI/UX & Animations",
      description: "Elevate user engagement with Framer Motion micro-interactions and GSAP-scroll animations.",
      features: ["Framer Motion", "GSAP Animations", "User Experience", "Brand Integration"]
    },
    {
      icon: <ShoppingCart className="w-8 h-8" />,
      title: "E-Commerce & Headless CMS",
      description: "Shopify, Strapi, or Sanity CMS integrations—complete storefront solutions with Stripe/PayPal.",
      features: ["Shopify Integration", "Payment Processing", "Inventory Management", "Admin Dashboard"]
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Performance Optimization & SEO",
      description: "Sub-2s page loads, semantic markup, structured data—rank higher, convert more.",
      features: ["Speed Optimization", "SEO Strategy", "Core Web Vitals", "Analytics Setup"]
    },
    {
      icon: <Wrench className="w-8 h-8" />,
      title: "Maintenance & Support",
      description: "Ongoing site support: security updates, monthly analytics, feature iterations.",
      features: ["24/7 Monitoring", "Security Updates", "Content Updates", "Performance Reports"]
    },
    {
      icon: <MessageCircle className="w-8 h-8" />,
      title: "Consulting & Strategy",
      description: "From wireframe to roadmap—strategic planning for your next web project.",
      features: ["Project Planning", "Tech Stack Selection", "Timeline & Budget", "Growth Strategy"]
    }
  ];

  const processSteps = [
    {
      title: "Discovery & Planning",
      description: "We start with a deep dive—collect requirements, target audience, and define KPIs.",
      details: "Comprehensive project analysis including competitor research, user persona development, and technical requirements gathering."
    },
    {
      title: "Design & Prototype",
      description: "Wireframes → Figma prototypes → feedback loop.",
      details: "Creating pixel-perfect designs with interactive prototypes, ensuring every detail aligns with your brand and user expectations."
    },
    {
      title: "Development & Testing",
      description: "Agile sprints, code reviews, cross-browser/device QA.",
      details: "Clean, maintainable code with comprehensive testing across all devices and browsers, following industry best practices."
    },
    {
      title: "Launch & Growth",
      description: "Deploy via Vercel/Netlify, set up analytics, plan next-phase features.",
      details: "Smooth deployment with monitoring setup, performance optimization, and ongoing support for continuous improvement."
    }
  ];

  return (
    <section id="services" className="section-padding bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 relative overflow-hidden">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-32 left-32 w-96 h-96 bg-gradient-to-br from-emerald-400 to-teal-400 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-32 right-32 w-80 h-80 bg-gradient-to-br from-cyan-400 to-blue-400 rounded-full blur-3xl animate-pulse" style={{animationDelay: '3s'}}></div>
        <div className="absolute top-1/3 left-1/3 w-40 h-40 bg-gradient-to-br from-teal-300 to-emerald-300 rounded-full blur-2xl animate-float"></div>
      </div>

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-playfair font-bold text-4xl lg:text-5xl text-deep-charcoal mb-6">
            What I <span className="text-gradient">Create</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-vivid-cyan to-warm-coral mx-auto mb-6"></div>
          <p className="font-inter text-lg text-gray-600 max-w-3xl mx-auto">
            From concept to deployment, I deliver comprehensive web solutions that drive results and exceed expectations.
          </p>
        </div>

        {/* Enhanced Service Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {services.map((service, index) => (
            <div
              key={index}
              className={`group relative bg-white bg-opacity-70 backdrop-blur-sm rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer border border-white border-opacity-50 ${
                activeCard === index ? 'scale-105 shadow-2xl' : 'hover:scale-105'
              }`}
              onClick={() => setActiveCard(activeCard === index ? null : index)}
            >
              {/* Gradient Border Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-vivid-cyan via-purple-500 to-warm-coral rounded-xl opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
              
              {/* Icon */}
              <div className="relative z-10 w-16 h-16 bg-gradient-to-br from-vivid-cyan to-blue-500 rounded-xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                {service.icon}
              </div>

              {/* Content */}
              <div className="relative z-10">
                <h3 className="font-poppins font-semibold text-xl text-deep-charcoal mb-4 group-hover:text-vivid-cyan transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="font-inter text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <div className={`overflow-hidden transition-all duration-300 ${
                  activeCard === index ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'
                }`}>
                  <div className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-warm-coral rounded-full"></div>
                        <span className="font-inter text-sm text-gray-600">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Expand Icon */}
                <div className="flex justify-center mt-4">
                  {activeCard === index ? (
                    <ChevronUp className="w-5 h-5 text-vivid-cyan" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-400 group-hover:text-vivid-cyan transition-colors duration-300" />
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Enhanced Process Section */}
        <div className="bg-white bg-opacity-60 backdrop-blur-sm rounded-2xl p-8 lg:p-12 shadow-xl">
          <div className="text-center mb-12">
            <h3 className="font-playfair font-bold text-3xl text-deep-charcoal mb-4">
              My <span className="text-gradient">Process</span>
            </h3>
            <p className="font-inter text-gray-600 text-lg">
              A proven methodology that ensures project success from start to finish.
            </p>
          </div>

          <div className="relative">
            {/* Process Line */}
            <div className="hidden lg:block absolute top-16 left-0 right-0 h-1 bg-gradient-to-r from-vivid-cyan via-purple-500 to-warm-coral opacity-30"></div>

            <div className="grid lg:grid-cols-4 gap-8">
              {processSteps.map((step, index) => (
                <div
                  key={index}
                  className="relative text-center cursor-pointer group"
                  onClick={() => setActiveStep(activeStep === index ? null : index)}
                >
                  {/* Step Number */}
                  <div className={`relative z-10 w-16 h-16 mx-auto mb-6 rounded-full flex items-center justify-center font-poppins font-bold text-xl transition-all duration-300 shadow-lg ${
                    activeStep === index
                      ? 'bg-gradient-to-br from-warm-coral to-pink-500 text-white scale-110'
                      : 'bg-gradient-to-br from-vivid-cyan to-blue-500 text-white group-hover:scale-110'
                  }`}>
                    {index + 1}
                  </div>

                  {/* Step Content */}
                  <h4 className="font-poppins font-semibold text-lg text-deep-charcoal mb-3 group-hover:text-vivid-cyan transition-colors duration-300">
                    {step.title}
                  </h4>
                  <p className="font-inter text-gray-600 text-sm leading-relaxed mb-4">
                    {step.description}
                  </p>

                  {/* Expandable Details */}
                  <div className={`overflow-hidden transition-all duration-300 ${
                    activeStep === index ? 'max-h-24 opacity-100' : 'max-h-0 opacity-0'
                  }`}>
                    <div className="bg-gradient-to-br from-gray-50 to-white rounded-lg p-4 shadow-inner">
                      <p className="font-inter text-xs text-gray-500 leading-relaxed">
                        {step.details}
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

export default Services;
