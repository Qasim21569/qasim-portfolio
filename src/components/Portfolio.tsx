import React, { useState, useEffect, useRef } from 'react';
import { ExternalLink, Github, X, ChevronLeft, ChevronRight } from 'lucide-react';

const Portfolio = () => {
  const [selectedProject, setSelectedProject] = useState<any>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const carouselRef = useRef<HTMLDivElement>(null);

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

  // Reset image index when project changes
  useEffect(() => {
    setCurrentImageIndex(0);
  }, [selectedProject]);

  const projects = [
    {
      id: 1,
      title: "MVRK",
      image: "./mvrk/main.png",
      images: [
        "./mvrk/screen1.png",
        "./mvrk/screen2.png",
        "./mvrk/screen3.png"
      ],
      description: "Professional website for a Salesforce consultant firm, designed to match their brand theme and establish a strong online presence in the competitive consulting market.",
      challenge: "Create a sophisticated, brand-aligned website that effectively communicates MVRK's Salesforce expertise while building trust with potential enterprise clients and establishing credible online presence.",
      solution: "Developed a modern, responsive website using React and Tailwind CSS with custom GSAP animations that reflect the company's professional brand identity. Implemented clean UI/UX patterns that showcase their consulting services and case studies effectively.",
      technologies: ["React", "Tailwind CSS", "GSAP", "JavaScript ES6+", "Responsive Design", "SEO Optimization"],
      metrics: {
        loadTime: 1.2,
        conversion: 45,
        engagement: 68
      },
      testimonial: {
        text: "Qasim perfectly captured our brand essence and delivered a website that truly represents our Salesforce expertise. Our client inquiries increased significantly.",
        author: "MVRK Team",
        role: "Salesforce Consultants"
      },
      liveUrl: "https://mvrk.ca",
      githubUrl: "#"
    },
    {
      id: 2,
      title: "Flat Rate Bookkeeping",
      image: "./flatrate/main.png",
      images: [
        "./flatrate/screen1.png",
        "./flatrate/screen2.png",
        "./flatrate/screen3.png"
      ],
      description: "Comprehensive website for a Melbourne, Florida-based accounting firm featuring minimalistic design, multiple service pages, and integrated booking system to drive user signups and increase traffic.",
      challenge: "Design a trustworthy, professional platform for a growing accounting firm that needed to increase online visibility, streamline client acquisition, and provide clear service information across multiple pages while maintaining fast load times.",
      solution: "Built a feature-rich website using Next.js with optimized performance across services, timeline-based how-it-works, pricing tiers, and contact pages. Integrated Calendly for seamless appointment booking and implemented SEO best practices to drive organic traffic.",
      technologies: ["Next.js", "React", "Tailwind CSS", "Calendly Integration", "SEO Optimization", "TypeScript", "Vercel Deployment"],
      metrics: {
        loadTime: 0.9,
        conversion: 52,
        engagement: 72
      },
      testimonial: {
        text: "The new website has transformed our business. We've seen a 150% increase in online inquiries and the Calendly integration has streamlined our booking process perfectly.",
        author: "Flat Rate Bookkeeping",
        role: "Accounting Firm Owner"
      },
      liveUrl: "https://flatratebookkeeping.us",
      githubUrl: "#"
    },
    {
      id: 3,
      title: "AlgoForge Tech",
      image: "./algoforge/main.png",
      images: [
        "./algoforge/screen1.png",
        "./algoforge/screen2.png",
        "./algoforge/screen3.png"
      ],
      description: "Cutting-edge website for a tech hackathon event, featuring cyber-themed design with heavy animations and immersive 3D elements to create an engaging experience for participants and sponsors.",
      challenge: "Create an innovative, cyber-themed platform for a tech hackathon that would captivate developers and tech enthusiasts while providing comprehensive event information and maintaining smooth performance despite heavy animations.",
      solution: "Developed an immersive web experience using React.js with Three.js for 3D graphics and GSAP for complex animations. Implemented performance optimization techniques to ensure smooth animations while maintaining fast load times across all devices.",
      technologies: ["React.js", "Three.js", "GSAP", "WebGL", "Framer Motion", "Styled Components", "Performance Optimization"],
      metrics: {
        loadTime: 1.8,
        conversion: 38,
        engagement: 85
      },
      testimonial: {
        text: "The website perfectly captured the hackathon's innovative spirit. Participants were amazed by the design, and we saw record registration numbers.",
        author: "AlgoForge Team",
        role: "Event Organizers"
      },
      liveUrl: "https://algoforge.tech",
      githubUrl: "#"
    },
    {
      id: 4,
      title: "Thrive Physios",
      image: "./thrive/main.png",
      images: [
        "./thrive/screen1.png",
        "./thrive/screen2.png",
        "./thrive/screen3.png"
      ],
      description: "Modern healthcare website for a group of physiotherapists focused on building online presence and increasing online session bookings through intuitive design and medicine-themed aesthetics.",
      challenge: "Design a trustworthy healthcare platform that would increase online physiotherapy session bookings while building credibility and providing easy access to services for patients seeking physical therapy.",
      solution: "Created a patient-centered website with clean, medical-themed design that builds trust and confidence. Implemented intuitive booking flows, service descriptions, and accessibility features to ensure all patients can easily navigate and book sessions.",
      technologies: ["Next.js", "React", "Tailwind CSS", "Booking Integration", "Healthcare Compliance", "Accessibility (WCAG)", "Mobile Optimization"],
      metrics: {
        loadTime: 1.1,
        conversion: 48,
        engagement: 65
      },
      testimonial: {
        text: "Our online bookings have tripled since the new website launched. Patients love how easy it is to schedule appointments and learn about our services.",
        author: "Thrive Physios",
        role: "Healthcare Professionals"
      },
      liveUrl: "https://thrivephysios.vercel.app",
      githubUrl: "#"
    },
    {
      id: 5,
      title: "PBX Pickle",
      image: "./pbx/main.png",
      images: [
        "./pbx/screen1.png",
        "./pbx/screen2.png",
        "./pbx/screen3.png"
      ],
      description: "Dynamic e-commerce website for a Chicago-based pickleball apparel brand with a mission of 'pickleball for all athletes, including those with disabilities,' featuring sporty design and inclusive messaging.",
      challenge: "Create an inclusive, sporty e-commerce platform for a Chicago-based pickleball apparel company that promotes accessibility in sports while providing seamless shopping experience and showcasing their mission-driven brand values.",
      solution: "Developed a vibrant, sports-themed e-commerce site using Next.js with accessibility-first design principles. Implemented intuitive product browsing, secure checkout, and compelling storytelling that highlights the brand's inclusive mission.",
      technologies: ["Next.js", "React", "E-commerce Integration", "Stripe Payment", "Accessibility Features", "Responsive Design", "Performance Optimization"],
      metrics: {
        loadTime: 1.3,
        conversion: 42,
        engagement: 58
      },
      testimonial: {
        text: "The website beautifully represents our mission and has helped us connect with athletes from all backgrounds. Sales have increased and our brand message is clearer than ever.",
        author: "PBX Pickle",
        role: "Brand Founders"
      },
      liveUrl: "https://pbxpickle.vercel.app",
      githubUrl: "#"
    }
  ];

  const nextImage = () => {
    if (selectedProject && !isTransitioning) {
      setIsTransitioning(true);
      setCurrentImageIndex((prev) => 
        prev === selectedProject.images.length - 1 ? 0 : prev + 1
      );
      setTimeout(() => setIsTransitioning(false), 500); // Match transition duration
    }
  };

  const prevImage = () => {
    if (selectedProject && !isTransitioning) {
      setIsTransitioning(true);
      setCurrentImageIndex((prev) => 
        prev === 0 ? selectedProject.images.length - 1 : prev - 1
      );
      setTimeout(() => setIsTransitioning(false), 500); // Match transition duration
    }
  };

  return (
    <section 
      ref={sectionRef}
      id="portfolio" 
      className="min-h-screen bg-gradient-to-br from-gray-900 via-slate-900 to-gray-800 text-white relative overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 md:top-20 left-10 md:left-20 w-48 md:w-96 h-48 md:h-96 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 md:bottom-20 right-10 md:right-20 w-40 md:w-80 h-40 md:h-80 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-full blur-3xl animate-pulse" style={{animationDelay: '3s'}}></div>
      </div>

      <div className="container-custom py-16 md:py-20 lg:py-32 relative z-10">
        {/* Section Header */}
        <div className={`text-center mb-12 md:mb-16 transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
          <div className="flex items-center justify-center space-x-3 md:space-x-4 mb-6 md:mb-8">
            <div className="w-8 md:w-12 h-px bg-gradient-to-r from-transparent to-purple-400"></div>
            <span className="font-inter text-xs md:text-sm font-medium text-gray-400 uppercase tracking-wider">PORTFOLIO</span>
            <div className="w-8 md:w-12 h-px bg-gradient-to-r from-purple-400 to-transparent"></div>
          </div>

          <h2 className="font-playfair font-bold text-3xl md:text-4xl lg:text-5xl mb-4 md:mb-6">
            Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400">Projects</span>
          </h2>
          
          <p className="font-inter text-base md:text-lg text-gray-300 max-w-3xl mx-auto">
            A curated selection of my favorite works, each blending design finesse with technical precision.
          </p>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`group relative bg-gray-800/30 backdrop-blur-sm rounded-xl md:rounded-2xl overflow-hidden border border-gray-700/50 hover:border-gray-600/50 transition-all duration-500 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
              }`}
              style={{transitionDelay: `${300 + index * 150}ms`}}
            >
              {/* Project Image */}
              <div className="relative h-40 md:h-48 overflow-hidden bg-gray-900">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-contain p-2"
                  loading="lazy"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    console.error(`Failed to load image: ${target.src}`);
                    target.src = './placeholder.svg';
                    target.onerror = null;
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                
                {/* Mobile View Live Site Button - Always Visible */}
                <div className="absolute bottom-2 right-2 md:hidden">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="flex items-center gap-1 bg-gradient-to-r from-vivid-cyan to-blue-500 text-white px-3 py-1.5 rounded-lg text-xs font-poppins font-medium hover:shadow-lg transition-all duration-300"
                  >
                    <ExternalLink className="w-3 h-3" />
                    <span>Live Site</span>
                  </a>
                </div>

                {/* Desktop Hover Effect */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 hidden md:block"></div>
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 hidden md:block">
                  <ExternalLink className="w-6 h-6 text-white" />
                </div>
              </div>

              {/* Project Info */}
              <div className="p-4 md:p-6">
                <h3 className="font-poppins font-semibold text-lg md:text-xl text-white mb-2 md:mb-3 group-hover:text-purple-400 transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="font-inter text-gray-300 text-sm leading-relaxed mb-3 md:mb-4">
                  {project.description}
                </p>

                {/* Desktop Action Buttons */}
                <div className="hidden md:flex gap-3">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="flex-1 bg-gradient-to-r from-vivid-cyan to-blue-500 text-white px-4 py-2 rounded-lg text-sm font-poppins font-medium text-center hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    <ExternalLink className="w-4 h-4" />
                    View Live Site
                  </a>
                  <button
                    onClick={() => {
                      setSelectedProject(project);
                      setCurrentImageIndex(0);
                    }}
                    className="px-4 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded-lg text-sm font-poppins font-medium transition-colors duration-300"
                  >
                    Details
                  </button>
                </div>

                {/* Mobile Details Button */}
                <div className="md:hidden">
                  <button
                    onClick={() => {
                      setSelectedProject(project);
                      setCurrentImageIndex(0);
                    }}
                    className="w-full bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded-lg text-sm font-poppins font-medium transition-colors duration-300"
                  >
                    View Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Enhanced Case Study Modal */}
        {selectedProject && (
          <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 p-4">
            <div className="bg-gray-900 rounded-xl md:rounded-2xl max-w-6xl w-full max-h-[90vh] overflow-y-auto border border-gray-700">
              <div className="sticky top-0 bg-gray-900 border-b border-gray-700 p-4 md:p-6 flex justify-between items-center z-10">
                <h3 className="font-playfair font-bold text-xl md:text-2xl text-white">
                  {selectedProject.title}
                </h3>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="w-8 h-8 md:w-10 md:h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors duration-300"
                >
                  <X className="w-4 h-4 md:w-5 md:h-5 text-gray-300" />
                </button>
              </div>

              <div className="p-4 md:p-6 grid lg:grid-cols-2 gap-6 md:gap-8">
                {/* Left Column - Images & Details */}
                <div className="space-y-4 md:space-y-6">
                  {/* Image Carousel */}
                  <div className="relative overflow-hidden rounded-lg bg-gray-900" ref={carouselRef}>
                    <div 
                      className="relative h-60 md:h-[400px] transition-transform duration-500 ease-in-out"
                      style={{
                        transform: `translateX(-${currentImageIndex * 100}%)`
                      }}
                    >
                      <div className="absolute inset-0 flex">
                        {selectedProject.images.map((img: string, idx: number) => (
                          <div
                            key={idx}
                            className="relative w-full h-60 md:h-[400px] flex-shrink-0"
                          >
                            <img
                              src={img}
                              alt={`${selectedProject.title} - Image ${idx + 1}`}
                              className="w-full h-full object-contain p-2 md:p-4 bg-gray-900"
                              loading="lazy"
                              onError={(e) => {
                                const target = e.target as HTMLImageElement;
                                console.error(`Failed to load image: ${target.src}`);
                                target.src = './placeholder.svg';
                                target.onerror = null;
                              }}
                            />
                          </div>
                        ))}
                      </div>
                    </div>

                    {selectedProject.images.length > 1 && (
                      <>
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            prevImage();
                          }}
                          className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 md:w-10 md:h-10 bg-black/50 rounded-full flex items-center justify-center text-white hover:bg-black/70 transition-colors duration-300 backdrop-blur-sm"
                        >
                          <ChevronLeft className="w-4 h-4 md:w-6 md:h-6" />
                        </button>
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            nextImage();
                          }}
                          className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 md:w-10 md:h-10 bg-black/50 rounded-full flex items-center justify-center text-white hover:bg-black/70 transition-colors duration-300 backdrop-blur-sm"
                        >
                          <ChevronRight className="w-4 h-4 md:w-6 md:h-6" />
                        </button>
                      </>
                    )}

                    {/* Dots Indicator */}
                    {selectedProject.images.length > 1 && (
                      <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
                        {selectedProject.images.map((_, idx) => (
                          <button
                            key={idx}
                            onClick={(e) => {
                              e.stopPropagation();
                              if (!isTransitioning) {
                                setIsTransitioning(true);
                                setCurrentImageIndex(idx);
                                setTimeout(() => setIsTransitioning(false), 500);
                              }
                            }}
                            className={`w-2 h-2 md:w-2.5 md:h-2.5 rounded-full transition-all duration-300 ${
                              idx === currentImageIndex 
                                ? 'bg-white w-3 md:w-4'
                                : 'bg-gray-500 hover:bg-gray-400'
                            }`}
                          />
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Challenge & Solution */}
                  <div className="space-y-3 md:space-y-4">
                    <div>
                      <h4 className="font-poppins font-semibold text-base md:text-lg text-white mb-2">Challenge</h4>
                      <p className="font-inter text-gray-300 text-sm md:text-base">{selectedProject.challenge}</p>
                    </div>
                    <div>
                      <h4 className="font-poppins font-semibold text-base md:text-lg text-white mb-2">Solution</h4>
                      <p className="font-inter text-gray-300 text-sm md:text-base">{selectedProject.solution}</p>
                    </div>
                  </div>

                  {/* Technologies */}
                  <div>
                    <h4 className="font-poppins font-semibold text-base md:text-lg text-white mb-3">Technologies Used</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.technologies.map((tech, index) => (
                        <span
                          key={index}
                          className="px-2 md:px-3 py-1 bg-gradient-to-r from-vivid-cyan to-blue-500 text-white text-xs md:text-sm font-poppins font-medium rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Right Column - Metrics & Testimonial */}
                <div className="space-y-4 md:space-y-6">
                  {/* Metrics */}
                  <div className="space-y-3 md:space-y-4">
                    <h4 className="font-poppins font-semibold text-base md:text-lg text-white">Project Impact</h4>
                    <div className="grid grid-cols-1 gap-3 md:gap-4">
                      <div className="bg-gradient-to-br from-vivid-cyan to-blue-500 rounded-lg p-3 md:p-4 text-white text-center">
                        <div className="text-xl md:text-2xl font-playfair font-bold">{selectedProject.metrics.loadTime}s</div>
                        <div className="text-xs md:text-sm font-inter">Load Time</div>
                      </div>
                      <div className="bg-gradient-to-br from-warm-coral to-pink-500 rounded-lg p-3 md:p-4 text-white text-center">
                        <div className="text-xl md:text-2xl font-playfair font-bold">+{selectedProject.metrics.conversion}%</div>
                        <div className="text-xs md:text-sm font-inter">Performance</div>
                      </div>
                      <div className="bg-gradient-to-br from-purple-500 to-violet-500 rounded-lg p-3 md:p-4 text-white text-center">
                        <div className="text-xl md:text-2xl font-playfair font-bold">+{selectedProject.metrics.engagement}%</div>
                        <div className="text-xs md:text-sm font-inter">User Engagement</div>
                      </div>
                    </div>
                  </div>

                  {/* Testimonial */}
                  <div className="bg-gray-800/50 rounded-lg p-4 md:p-6">
                    <h4 className="font-poppins font-semibold text-base md:text-lg text-white mb-3">Client Feedback</h4>
                    <blockquote className="font-inter text-gray-300 italic mb-3 md:mb-4 text-sm md:text-base">
                      "{selectedProject.testimonial.text}"
                    </blockquote>
                    <div className="font-poppins font-medium text-white text-sm md:text-base">
                      {selectedProject.testimonial.author}
                    </div>
                    <div className="font-inter text-xs md:text-sm text-gray-400">
                      {selectedProject.testimonial.role}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
                    <a
                      href={selectedProject.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 bg-gradient-to-r from-vivid-cyan to-blue-500 text-white px-4 md:px-6 py-3 rounded-lg font-poppins font-medium text-center hover:shadow-lg transition-shadow duration-300 flex items-center justify-center gap-2 text-sm md:text-base"
                    >
                      <ExternalLink className="w-4 h-4 md:w-5 md:h-5" />
                      View Live Site
                    </a>
                    <a
                      href={selectedProject.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center w-full sm:w-12 h-12 bg-gray-700 rounded-lg hover:bg-gray-600 transition-colors duration-300"
                    >
                      <Github className="w-4 h-4 md:w-5 md:h-5 text-gray-300" />
                      <span className="ml-2 sm:hidden text-sm">GitHub</span>
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
