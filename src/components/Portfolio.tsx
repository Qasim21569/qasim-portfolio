
import React, { useState } from 'react';
import { ExternalLink, Github, X, ChevronLeft, ChevronRight } from 'lucide-react';

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [selectedProject, setSelectedProject] = useState<any>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const filters = ['All', 'Landing Pages', 'eCommerce', 'Web Apps', 'Animations'];

  const projects = [
    {
      id: 1,
      title: "TechStart Landing Page",
      category: "Landing Pages",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
      images: [
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1553472257-cf8ba65e6ad0?w=800&h=600&fit=crop"
      ],
      description: "A modern, conversion-focused landing page for a tech startup with interactive animations and optimized performance.",
      challenge: "Create a landing page that converts visitors into leads while showcasing the startup's innovative technology.",
      solution: "Built with Next.js and Tailwind CSS, featuring GSAP animations and optimized for Core Web Vitals.",
      technologies: ["Next.js", "Tailwind CSS", "GSAP", "Framer Motion", "Vercel"],
      metrics: {
        loadTime: 1.2,
        conversion: 35,
        engagement: 45
      },
      testimonial: {
        text: "Qasim delivered exactly what we needed. The site looks amazing and performs even better.",
        author: "Sarah Chen",
        role: "Founder, TechStart"
      },
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      id: 2,
      title: "StyleCo E-Commerce",
      category: "eCommerce",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
      images: [
        "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=600&fit=crop"
      ],
      description: "Complete e-commerce solution with custom design, payment integration, and admin dashboard.",
      challenge: "Build a scalable e-commerce platform that handles high traffic and provides excellent user experience.",
      solution: "Developed using React with Stripe integration, featuring real-time inventory and order management.",
      technologies: ["React", "Node.js", "Stripe", "MongoDB", "Express"],
      metrics: {
        loadTime: 1.8,
        conversion: 42,
        engagement: 55
      },
      testimonial: {
        text: "Our sales increased by 60% after launching the new site. The user experience is incredible.",
        author: "Emily Rodriguez",
        role: "Marketing Director, StyleCo"
      },
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      id: 3,
      title: "InnovateTech Dashboard",
      category: "Web Apps",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
      images: [
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800&h=600&fit=crop"
      ],
      description: "Real-time analytics dashboard with interactive charts and data visualization.",
      challenge: "Create a complex dashboard that displays real-time data in an intuitive and visually appealing way.",
      solution: "Built with React and D3.js for data visualization, featuring real-time updates and responsive design.",
      technologies: ["React", "D3.js", "WebSocket", "Chart.js", "TypeScript"],
      metrics: {
        loadTime: 2.1,
        conversion: 28,
        engagement: 65
      },
      testimonial: {
        text: "The dashboard has transformed how we analyze our data. It's both beautiful and functional.",
        author: "David Park",
        role: "Product Manager, InnovateTech"
      },
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      id: 4,
      title: "EcoVibe Portfolio",
      category: "Animations",
      image: "https://images.unsplash.com/photo-1545665277-5937750eaa38?w=600&h=400&fit=crop",
      images: [
        "https://images.unsplash.com/photo-1545665277-5937750eaa38?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=800&h=600&fit=crop"
      ],
      description: "Animated portfolio website with scroll-triggered animations and interactive elements.",
      challenge: "Create an engaging portfolio that showcases the client's work through creative animations.",
      solution: "Implemented complex GSAP animations with scroll triggers and interactive hover effects.",
      technologies: ["HTML5", "GSAP", "CSS3", "JavaScript", "Netlify"],
      metrics: {
        loadTime: 1.5,
        conversion: 38,
        engagement: 75
      },
      testimonial: {
        text: "The animations bring our work to life. Visitors spend much longer on our site now.",
        author: "Lisa Thompson",
        role: "Founder, EcoVibe"
      },
      liveUrl: "#",
      githubUrl: "#"
    }
  ];

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  const nextImage = () => {
    if (selectedProject) {
      setCurrentImageIndex((prev) => 
        prev === selectedProject.images.length - 1 ? 0 : prev + 1
      );
    }
  };

  const prevImage = () => {
    if (selectedProject) {
      setCurrentImageIndex((prev) => 
        prev === 0 ? selectedProject.images.length - 1 : prev - 1
      );
    }
  };

  return (
    <section id="portfolio" className="section-padding bg-gradient-to-br from-rose-50 via-pink-50 to-purple-50 relative overflow-hidden">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-40 left-40 w-80 h-80 bg-gradient-to-br from-rose-400 to-pink-400 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-40 right-40 w-96 h-96 bg-gradient-to-br from-purple-400 to-violet-400 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/4 right-1/4 w-48 h-48 bg-gradient-to-br from-pink-300 to-rose-300 rounded-full blur-2xl animate-float"></div>
      </div>

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-playfair font-bold text-4xl lg:text-5xl text-deep-charcoal mb-6">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-warm-coral to-purple-500 mx-auto mb-6"></div>
          <p className="font-inter text-lg text-gray-600 max-w-3xl mx-auto">
            A curated selection of my favorite works—each blending design finesse with technical precision.
          </p>
        </div>

        {/* Enhanced Filter Controls */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-6 py-3 rounded-full font-poppins font-medium transition-all duration-300 ${
                activeFilter === filter
                  ? 'bg-gradient-to-r from-vivid-cyan to-blue-500 text-white shadow-lg scale-105'
                  : 'bg-white bg-opacity-70 text-gray-600 hover:bg-opacity-90 hover:text-vivid-cyan border border-gray-200'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Enhanced Project Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group relative bg-white bg-opacity-80 backdrop-blur-sm rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer hover:scale-105"
              onClick={() => {
                setSelectedProject(project);
                setCurrentImageIndex(0);
              }}
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <ExternalLink className="w-6 h-6 text-white" />
                </div>
              </div>

              {/* Project Info */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="px-3 py-1 bg-gradient-to-r from-vivid-cyan to-blue-500 text-white text-sm font-poppins font-medium rounded-full">
                    {project.category}
                  </span>
                </div>
                <h3 className="font-poppins font-semibold text-xl text-deep-charcoal mb-3 group-hover:text-vivid-cyan transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="font-inter text-gray-600 text-sm leading-relaxed">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Enhanced Case Study Modal */}
        {selectedProject && (
          <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-2xl max-w-6xl w-full max-h-[90vh] overflow-y-auto">
              <div className="sticky top-0 bg-white border-b border-gray-200 p-6 flex justify-between items-center z-10">
                <h3 className="font-playfair font-bold text-2xl text-deep-charcoal">
                  {selectedProject.title}
                </h3>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors duration-300"
                >
                  <X className="w-5 h-5 text-gray-600" />
                </button>
              </div>

              <div className="p-6 grid lg:grid-cols-2 gap-8">
                {/* Left Column - Images & Details */}
                <div className="space-y-6">
                  {/* Image Carousel */}
                  <div className="relative">
                    <img
                      src={selectedProject.images[currentImageIndex]}
                      alt={`${selectedProject.title} - Image ${currentImageIndex + 1}`}
                      className="w-full h-64 object-cover rounded-lg"
                    />
                    {selectedProject.images.length > 1 && (
                      <>
                        <button
                          onClick={prevImage}
                          className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-black bg-opacity-50 rounded-full flex items-center justify-center text-white hover:bg-opacity-70 transition-colors duration-300"
                        >
                          <ChevronLeft className="w-4 h-4" />
                        </button>
                        <button
                          onClick={nextImage}
                          className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-black bg-opacity-50 rounded-full flex items-center justify-center text-white hover:bg-opacity-70 transition-colors duration-300"
                        >
                          <ChevronRight className="w-4 h-4" />
                        </button>
                      </>
                    )}
                    {/* Dots Indicator */}
                    {selectedProject.images.length > 1 && (
                      <div className="flex justify-center space-x-2 mt-4">
                        {selectedProject.images.map((_, index) => (
                          <button
                            key={index}
                            onClick={() => setCurrentImageIndex(index)}
                            className={`w-2 h-2 rounded-full transition-colors duration-300 ${
                              index === currentImageIndex ? 'bg-vivid-cyan' : 'bg-gray-300'
                            }`}
                          />
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Challenge & Solution */}
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-poppins font-semibold text-lg text-deep-charcoal mb-2">Challenge</h4>
                      <p className="font-inter text-gray-600">{selectedProject.challenge}</p>
                    </div>
                    <div>
                      <h4 className="font-poppins font-semibold text-lg text-deep-charcoal mb-2">Solution</h4>
                      <p className="font-inter text-gray-600">{selectedProject.solution}</p>
                    </div>
                  </div>

                  {/* Technologies */}
                  <div>
                    <h4 className="font-poppins font-semibold text-lg text-deep-charcoal mb-3">Technologies Used</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.technologies.map((tech, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-gradient-to-r from-vivid-cyan to-blue-500 text-white text-sm font-poppins font-medium rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Right Column - Metrics & Testimonial */}
                <div className="space-y-6">
                  {/* Metrics */}
                  <div className="space-y-4">
                    <h4 className="font-poppins font-semibold text-lg text-deep-charcoal">Project Impact</h4>
                    <div className="grid grid-cols-1 gap-4">
                      <div className="bg-gradient-to-br from-vivid-cyan to-blue-500 rounded-lg p-4 text-white text-center">
                        <div className="text-2xl font-playfair font-bold">{selectedProject.metrics.loadTime}s</div>
                        <div className="text-sm font-inter">Load Time</div>
                      </div>
                      <div className="bg-gradient-to-br from-warm-coral to-pink-500 rounded-lg p-4 text-white text-center">
                        <div className="text-2xl font-playfair font-bold">+{selectedProject.metrics.conversion}%</div>
                        <div className="text-sm font-inter">Conversion Rate</div>
                      </div>
                      <div className="bg-gradient-to-br from-purple-500 to-violet-500 rounded-lg p-4 text-white text-center">
                        <div className="text-2xl font-playfair font-bold">+{selectedProject.metrics.engagement}%</div>
                        <div className="text-sm font-inter">User Engagement</div>
                      </div>
                    </div>
                  </div>

                  {/* Testimonial */}
                  <div className="bg-gray-50 rounded-lg p-6">
                    <h4 className="font-poppins font-semibold text-lg text-deep-charcoal mb-3">Client Feedback</h4>
                    <blockquote className="font-inter text-gray-600 italic mb-4">
                      "{selectedProject.testimonial.text}"
                    </blockquote>
                    <div className="font-poppins font-medium text-deep-charcoal">
                      {selectedProject.testimonial.author}
                    </div>
                    <div className="font-inter text-sm text-gray-500">
                      {selectedProject.testimonial.role}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex space-x-4">
                    <a
                      href={selectedProject.liveUrl}
                      className="flex-1 bg-gradient-to-r from-vivid-cyan to-blue-500 text-white px-6 py-3 rounded-lg font-poppins font-medium text-center hover:shadow-lg transition-shadow duration-300"
                    >
                      View Live Site
                    </a>
                    <a
                      href={selectedProject.githubUrl}
                      className="flex items-center justify-center w-12 h-12 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors duration-300"
                    >
                      <Github className="w-5 h-5 text-gray-600" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Portfolio;
