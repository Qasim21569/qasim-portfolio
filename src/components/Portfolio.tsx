
import React, { useState } from 'react';
import { X, ExternalLink, Calendar, Users, Zap } from 'lucide-react';

const Portfolio = () => {
  const [selectedProject, setSelectedProject] = useState<any>(null);
  const [activeFilter, setActiveFilter] = useState('All');

  const projects = [
    {
      id: 1,
      title: 'TechStart Landing Page',
      category: 'Landing Pages',
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&h=400&fit=crop',
      challenge: 'Create a high-converting SaaS landing page that effectively communicates complex technical features to non-technical users.',
      solution: 'Designed a clean, modern interface with interactive demos, clear value propositions, and strategic CTAs using Next.js and Framer Motion.',
      technologies: ['Next.js', 'Tailwind CSS', 'Framer Motion', 'TypeScript'],
      metrics: {
        loadTime: 45,
        conversion: 30,
        engagement: 50
      },
      testimonial: {
        text: "Qasim delivered exactly what we needed. The landing page not only looks amazing but converts 30% better than our previous design.",
        author: "Sarah Chen",
        role: "CEO, TechStart"
      },
      liveUrl: '#'
    },
    {
      id: 2,
      title: 'E-Commerce Fashion Store',
      category: 'eCommerce',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop',
      challenge: 'Build a modern e-commerce platform with seamless shopping experience and advanced filtering capabilities.',
      solution: 'Developed a full-featured online store with Shopify integration, custom product filters, and optimized checkout flow.',
      technologies: ['React', 'Shopify API', 'Stripe', 'GSAP'],
      metrics: {
        loadTime: 35,
        conversion: 25,
        engagement: 40
      },
      testimonial: {
        text: "The new store exceeded our expectations. Sales increased by 40% in the first month after launch.",
        author: "Michael Rodriguez",
        role: "Founder, StyleHub"
      },
      liveUrl: '#'
    },
    {
      id: 3,
      title: 'Interactive Portfolio Site',
      category: 'Web Apps',
      image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=600&h=400&fit=crop',
      challenge: 'Create an immersive portfolio website that showcases creative work through interactive animations.',
      solution: 'Built a dynamic portfolio with GSAP scroll animations, 3D hover effects, and smooth page transitions.',
      technologies: ['Next.js', 'GSAP', 'Three.js', 'Tailwind CSS'],
      metrics: {
        loadTime: 40,
        conversion: 35,
        engagement: 60
      },
      testimonial: {
        text: "The portfolio perfectly captures my artistic vision. It's both beautiful and functional.",
        author: "Elena Vasquez",
        role: "Creative Director"
      },
      liveUrl: '#'
    },
    {
      id: 4,
      title: 'Animated Dashboard',
      category: 'Animations',
      image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&h=400&fit=crop',
      challenge: 'Design an engaging admin dashboard with smooth data visualizations and micro-interactions.',
      solution: 'Created an intuitive dashboard with animated charts, hover states, and real-time data updates.',
      technologies: ['React', 'D3.js', 'Framer Motion', 'Chart.js'],
      metrics: {
        loadTime: 30,
        conversion: 20,
        engagement: 45
      },
      testimonial: {
        text: "The dashboard is not only functional but delightful to use. Our team productivity increased significantly.",
        author: "David Kim",
        role: "Product Manager"
      },
      liveUrl: '#'
    },
    {
      id: 5,
      title: 'Restaurant Website',
      category: 'Landing Pages',
      image: 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=600&h=400&fit=crop',
      challenge: 'Create an appetizing website that drives reservations and showcases the restaurant\'s atmosphere.',
      solution: 'Designed a mouth-watering site with food photography, online reservations, and location integration.',
      technologies: ['Next.js', 'Sanity CMS', 'Google Maps API'],
      metrics: {
        loadTime: 38,
        conversion: 28,
        engagement: 42
      },
      testimonial: {
        text: "Our online reservations doubled after the new website launch. The design perfectly captures our brand.",
        author: "Maria Gonzalez",
        role: "Restaurant Owner"
      },
      liveUrl: '#'
    },
    {
      id: 6,
      title: 'Mobile Banking App',
      category: 'Web Apps',
      image: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=600&h=400&fit=crop',
      challenge: 'Develop a secure and user-friendly mobile banking interface with complex financial features.',
      solution: 'Built a progressive web app with biometric authentication, transaction history, and budget tracking.',
      technologies: ['React', 'PWA', 'Chart.js', 'Security APIs'],
      metrics: {
        loadTime: 25,
        conversion: 45,
        engagement: 70
      },
      testimonial: {
        text: "The app interface is incredibly intuitive. Customer satisfaction scores improved by 40%.",
        author: "James Wilson",
        role: "Digital Banking Director"
      },
      liveUrl: '#'
    }
  ];

  const filters = ['All', 'Landing Pages', 'eCommerce', 'Web Apps', 'Animations'];

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="portfolio" className="section-padding bg-soft-gray">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-playfair font-bold text-4xl lg:text-5xl text-deep-charcoal mb-6">
            Projects that Speak Volumes
          </h2>
          <p className="font-inter font-medium text-xl text-gray-600 max-w-4xl mx-auto">
            A curated selection of my favorite works—each blending design finesse with technical precision.
          </p>
        </div>

        {/* Filter Controls */}
        <div className="flex flex-wrap justify-center gap-4 mb-12 sticky top-24 z-30 bg-soft-gray py-4">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-6 py-3 rounded-full font-poppins font-medium transition-all duration-300 ${
                activeFilter === filter
                  ? 'bg-vivid-cyan text-pure-white shadow-lg scale-105'
                  : 'bg-pure-white text-deep-charcoal border-2 border-vivid-cyan hover:bg-vivid-cyan hover:text-pure-white'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div 
              key={project.id}
              className="card-hover bg-pure-white rounded-xl overflow-hidden shadow-lg group cursor-pointer"
              style={{
                animationDelay: `${index * 0.1}s`
              }}
              onClick={() => setSelectedProject(project)}
            >
              {/* Project Image */}
              <div className="relative overflow-hidden h-48">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-deep-charcoal/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-2 h-8 bg-warm-coral"></div>
                </div>
              </div>

              {/* Project Info */}
              <div className="p-6 space-y-4">
                <div className="flex items-center justify-between">
                  <span className="inline-block bg-vivid-cyan text-pure-white px-3 py-1 rounded-full text-sm font-poppins font-medium">
                    {project.category}
                  </span>
                  <div className="text-warm-coral group-hover:translate-x-1 transition-transform duration-300">
                    <ExternalLink className="w-5 h-5" />
                  </div>
                </div>

                <h3 className="font-poppins font-semibold text-xl text-deep-charcoal group-hover:text-vivid-cyan transition-colors duration-300">
                  {project.title}
                </h3>

                <div className="flex items-center space-x-2 text-warm-coral">
                  <span className="font-inter font-bold text-sm">View Case Study</span>
                  <div className="transform group-hover:rotate-12 transition-transform duration-300">→</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Case Study Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div 
            className="absolute inset-0 bg-deep-charcoal/85 backdrop-blur-sm"
            onClick={() => setSelectedProject(null)}
          ></div>
          
          <div className="relative bg-pure-white rounded-2xl max-w-6xl w-full max-h-[90vh] overflow-y-auto">
            {/* Close Button */}
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-6 right-6 z-10 w-12 h-12 bg-pure-white rounded-full flex items-center justify-center shadow-lg hover:bg-warm-coral hover:text-pure-white transition-all duration-300"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="grid lg:grid-cols-5 gap-8 p-8">
              {/* Left Column - Project Details */}
              <div className="lg:col-span-3 space-y-8">
                {/* Hero Image */}
                <div className="rounded-xl overflow-hidden">
                  <img 
                    src={selectedProject.image} 
                    alt={selectedProject.title}
                    className="w-full h-64 object-cover"
                  />
                </div>

                {/* Challenge & Goals */}
                <div className="space-y-4">
                  <h3 className="font-playfair font-bold text-2xl text-deep-charcoal">
                    Challenge & Goals
                  </h3>
                  <p className="font-inter text-gray-600 leading-relaxed">
                    {selectedProject.challenge}
                  </p>
                </div>

                {/* Solution & Tech */}
                <div className="space-y-4">
                  <h3 className="font-poppins font-semibold text-xl text-deep-charcoal">
                    Solution & Tech
                  </h3>
                  <p className="font-inter text-gray-600 leading-relaxed mb-4">
                    {selectedProject.solution}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.technologies.map((tech: string, index: number) => (
                      <span 
                        key={index}
                        className="bg-vivid-cyan text-pure-white px-3 py-1 rounded-lg text-sm font-poppins font-medium"
                        style={{ animationDelay: `${index * 0.1}s` }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Column - Metrics & Testimonial */}
              <div className="lg:col-span-2 space-y-6">
                {/* Metrics */}
                <div className="space-y-4">
                  <h3 className="font-poppins font-semibold text-xl text-deep-charcoal">
                    Results
                  </h3>
                  
                  <div className="space-y-4">
                    <div className="bg-pure-white rounded-lg p-4 shadow-md border border-soft-gray">
                      <div className="flex items-center space-x-3 mb-2">
                        <Zap className="w-6 h-6 text-vivid-cyan" />
                        <span className="font-inter font-medium text-deep-charcoal">Load Time</span>
                      </div>
                      <div className="font-inter font-bold text-3xl text-vivid-cyan">
                        ↓ {selectedProject.metrics.loadTime}%
                      </div>
                    </div>

                    <div className="bg-pure-white rounded-lg p-4 shadow-md border border-soft-gray">
                      <div className="flex items-center space-x-3 mb-2">
                        <Users className="w-6 h-6 text-warm-coral" />
                        <span className="font-inter font-medium text-deep-charcoal">Conversion</span>
                      </div>
                      <div className="font-inter font-bold text-3xl text-warm-coral">
                        ↑ {selectedProject.metrics.conversion}%
                      </div>
                    </div>

                    <div className="bg-pure-white rounded-lg p-4 shadow-md border border-soft-gray">
                      <div className="flex items-center space-x-3 mb-2">
                        <Calendar className="w-6 h-6 text-vivid-cyan" />
                        <span className="font-inter font-medium text-deep-charcoal">Engagement</span>
                      </div>
                      <div className="font-inter font-bold text-3xl text-vivid-cyan">
                        ↑ {selectedProject.metrics.engagement}%
                      </div>
                    </div>
                  </div>
                </div>

                {/* Testimonial */}
                <div className="bg-soft-gray rounded-lg p-6">
                  <div className="text-warm-coral text-4xl mb-4">"</div>
                  <p className="font-inter italic text-lg text-deep-charcoal mb-4 leading-relaxed">
                    {selectedProject.testimonial.text}
                  </p>
                  <div className="border-t border-gray-300 pt-4">
                    <div className="font-poppins font-semibold text-deep-charcoal">
                      {selectedProject.testimonial.author}
                    </div>
                    <div className="font-inter text-gray-600 text-sm">
                      {selectedProject.testimonial.role}
                    </div>
                  </div>
                </div>

                {/* Live Site Button */}
                <button 
                  onClick={() => window.open(selectedProject.liveUrl, '_blank')}
                  className="w-full btn-primary flex items-center justify-center space-x-2"
                >
                  <ExternalLink className="w-5 h-5" />
                  <span>View Live Site</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Portfolio;
