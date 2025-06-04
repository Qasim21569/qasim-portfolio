
import React from 'react';
import { 
  Code, 
  Palette, 
  ShoppingCart, 
  Zap, 
  Wrench, 
  MessageCircle,
  ArrowRight,
  CheckCircle
} from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Code className="w-8 h-8" />,
      title: 'Custom Responsive Development',
      description: 'Bespoke websites built with Next.js & Tailwind that adapt flawlessly from mobile to desktop.',
      features: ['Mobile-First Design', 'SEO Optimized', 'Lightning Fast']
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: 'Interactive UI/UX & Animations',
      description: 'Elevate user engagement with Framer Motion micro-interactions and GSAP-scroll animations.',
      features: ['Smooth Animations', 'User-Centered Design', 'Brand Identity']
    },
    {
      icon: <ShoppingCart className="w-8 h-8" />,
      title: 'E-Commerce & Headless CMS',
      description: 'Shopify, Strapi, or Sanity CMS integrations—complete storefront solutions with Stripe/PayPal.',
      features: ['Payment Integration', 'Inventory Management', 'Admin Dashboard']
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'Performance Optimization & SEO',
      description: 'Sub-2s page loads, semantic markup, structured data—rank higher, convert more.',
      features: ['Core Web Vitals', 'Technical SEO', 'Speed Optimization']
    },
    {
      icon: <Wrench className="w-8 h-8" />,
      title: 'Maintenance & Support',
      description: 'Ongoing site support: security updates, monthly analytics, feature iterations.',
      features: ['24/7 Monitoring', 'Regular Updates', 'Performance Reports']
    },
    {
      icon: <MessageCircle className="w-8 h-8" />,
      title: 'Consulting & Strategy',
      description: 'From wireframe to roadmap—strategic planning for your next web project.',
      features: ['Project Planning', 'Technology Consulting', 'Growth Strategy']
    }
  ];

  const processSteps = [
    {
      title: 'Discovery & Planning',
      description: 'We start with a deep dive—collect requirements, target audience, and define KPIs.',
      color: 'bg-vivid-cyan'
    },
    {
      title: 'Design & Prototype',
      description: 'Wireframes → Figma prototypes → feedback loop.',
      color: 'bg-warm-coral'
    },
    {
      title: 'Development & Testing',
      description: 'Agile sprints, code reviews, cross-browser/device QA.',
      color: 'bg-vivid-cyan'
    },
    {
      title: 'Launch & Growth',
      description: 'Deploy via Vercel/Netlify, set up analytics, plan next-phase features.',
      color: 'bg-warm-coral'
    }
  ];

  const [activeStep, setActiveStep] = React.useState(0);

  return (
    <section id="services" className="section-padding bg-pure-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-32 h-32 bg-vivid-cyan rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-48 h-48 bg-warm-coral rounded-full blur-3xl animate-float" style={{animationDelay: '2s'}}></div>
      </div>

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-playfair font-bold text-4xl lg:text-5xl text-deep-charcoal mb-6">
            What I Do
          </h2>
          <div className="w-24 h-1 bg-warm-coral mx-auto mb-6"></div>
          <p className="font-inter text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive web development services tailored to help your business thrive in the digital landscape.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {services.map((service, index) => (
            <div 
              key={index}
              className="card-hover bg-pure-white rounded-xl p-8 shadow-lg border border-soft-gray group relative overflow-hidden"
              style={{
                transform: `translateY(${index % 2 === 0 ? '0' : '20px'})`
              }}
            >
              {/* Background Gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-soft-gray opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              {/* Icon */}
              <div className="relative z-10 mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-vivid-cyan to-warm-coral rounded-lg flex items-center justify-center text-pure-white transform -rotate-3 group-hover:rotate-0 transition-transform duration-300">
                  {service.icon}
                </div>
              </div>

              {/* Content */}
              <div className="relative z-10 space-y-4">
                <h3 className="font-poppins font-semibold text-xl text-vivid-cyan group-hover:text-warm-coral transition-colors duration-300">
                  {service.title}
                </h3>
                
                <p className="font-inter text-gray-600 leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-2 font-inter text-sm text-gray-500">
                      <CheckCircle className="w-4 h-4 text-vivid-cyan flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <div className="pt-4">
                  <button className="font-inter font-bold text-warm-coral flex items-center space-x-2 group-hover:space-x-3 transition-all duration-300">
                    <span>Discover More</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Process Section */}
        <div className="bg-soft-gray rounded-3xl p-8 lg:p-12">
          <div className="text-center mb-12">
            <h3 className="font-playfair font-bold text-3xl text-deep-charcoal mb-4">
              My Process
            </h3>
            <p className="font-inter text-gray-600">
              A proven methodology that ensures successful project delivery
            </p>
          </div>

          {/* Process Steps */}
          <div className="grid lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div 
                key={index}
                className={`cursor-pointer transition-all duration-300 ${
                  activeStep === index ? 'scale-105' : 'hover:scale-102'
                }`}
                onClick={() => setActiveStep(index)}
              >
                <div className="text-center space-y-4">
                  {/* Step Number */}
                  <div className={`w-16 h-16 ${step.color} rounded-full flex items-center justify-center mx-auto text-pure-white font-poppins font-bold text-xl transition-all duration-300 ${
                    activeStep === index ? 'shadow-xl' : ''
                  }`}>
                    {index + 1}
                  </div>

                  {/* Step Title */}
                  <h4 className="font-poppins font-semibold text-lg text-deep-charcoal">
                    {step.title}
                  </h4>

                  {/* Step Description */}
                  <div className={`overflow-hidden transition-all duration-300 ${
                    activeStep === index ? 'max-h-32 opacity-100' : 'max-h-0 opacity-0'
                  }`}>
                    <p className="font-inter text-gray-600 text-sm">
                      {step.description}
                    </p>
                  </div>
                </div>

                {/* Connecting Line (Desktop) */}
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-soft-gray transform translate-y-7 -translate-x-1/2">
                    <div className={`h-full transition-all duration-500 ${
                      activeStep >= index ? step.color : 'bg-soft-gray'
                    }`} style={{ width: activeStep > index ? '100%' : '0%' }}></div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
