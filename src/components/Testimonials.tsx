
import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const testimonials = [
    {
      id: 1,
      name: "Sarah Chen",
      role: "Founder, TechStart",
      company: "TechStart Inc.",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      text: "Qasim transformed our outdated website into a modern masterpiece. The animations and user experience are phenomenal. Our conversion rate increased by 45% within the first month!"
    },
    {
      id: 2,
      name: "Marcus Johnson",
      role: "CEO, GrowthLab",
      company: "GrowthLab Solutions",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      text: "Working with Qasim was a game-changer. His attention to detail and technical expertise delivered exactly what we envisioned. The site performs flawlessly across all devices."
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      role: "Marketing Director, StyleCo",
      company: "StyleCo Fashion",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      text: "Qasim's creative approach and technical skills brought our brand to life online. The interactive elements and smooth animations perfectly capture our brand essence."
    },
    {
      id: 4,
      name: "David Park",
      role: "Product Manager, InnovateTech",
      company: "InnovateTech Ltd.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      text: "Outstanding work! Qasim delivered our e-commerce platform ahead of schedule with features we didn't even know we needed. Highly recommend his services."
    },
    {
      id: 5,
      name: "Lisa Thompson",
      role: "Startup Founder, EcoVibe",
      company: "EcoVibe Solutions",
      image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      text: "Qasim's expertise in modern web technologies helped us launch with confidence. The site is not only beautiful but also incredibly fast and user-friendly."
    }
  ];

  const clientLogos = [
    { name: "TechStart", url: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=120&h=60&fit=crop" },
    { name: "GrowthLab", url: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=120&h=60&fit=crop" },
    { name: "StyleCo", url: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=120&h=60&fit=crop" },
    { name: "InnovateTech", url: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=120&h=60&fit=crop" },
    { name: "EcoVibe", url: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=120&h=60&fit=crop" },
    { name: "Digital Corp", url: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=120&h=60&fit=crop" }
  ];

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, testimonials.length]);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    setIsAutoPlaying(false);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setIsAutoPlaying(false);
  };

  const goToTestimonial = (index: number) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
  };

  return (
    <>
      <section id="testimonials" className="section-padding bg-gradient-to-br from-deep-charcoal via-gray-900 to-deep-charcoal relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-40 h-40 bg-vivid-cyan rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-32 h-32 bg-warm-coral rounded-full blur-2xl animate-pulse" style={{animationDelay: '2s'}}></div>
          <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-vivid-cyan rounded-full blur-xl animate-float"></div>
        </div>

        <div className="container-custom relative z-10">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="font-playfair font-bold text-4xl lg:text-5xl text-pure-white mb-6">
              What Clients Are Saying
            </h2>
            <p className="font-inter text-lg text-gray-300 max-w-2xl mx-auto">
              Real feedback from the businesses I've helped flourish through exceptional web experiences.
            </p>
          </div>

          {/* Testimonials Carousel */}
          <div className="relative max-w-6xl mx-auto">
            <div className="overflow-hidden rounded-2xl">
              <div 
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              >
                {testimonials.map((testimonial) => (
                  <div key={testimonial.id} className="w-full flex-shrink-0 px-4">
                    <div className="bg-pure-white rounded-xl p-8 lg:p-12 shadow-2xl relative">
                      {/* Quote Icon */}
                      <Quote className="absolute top-6 left-6 w-8 h-8 text-vivid-cyan opacity-30" />
                      
                      {/* Stars */}
                      <div className="flex space-x-1 mb-6">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="w-5 h-5 fill-warm-coral text-warm-coral" />
                        ))}
                      </div>

                      {/* Testimonial Text */}
                      <blockquote className="font-inter text-xl lg:text-2xl text-deep-charcoal leading-relaxed mb-8 italic">
                        "{testimonial.text}"
                      </blockquote>

                      {/* Client Info */}
                      <div className="flex items-center space-x-4">
                        <img
                          src={testimonial.image}
                          alt={testimonial.name}
                          className="w-16 h-16 rounded-full object-cover ring-4 ring-vivid-cyan ring-opacity-20"
                        />
                        <div>
                          <div className="font-poppins font-semibold text-lg text-deep-charcoal">
                            {testimonial.name}
                          </div>
                          <div className="font-inter text-gray-600">
                            {testimonial.role}
                          </div>
                          <div className="font-inter text-sm text-vivid-cyan font-medium">
                            {testimonial.company}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={prevTestimonial}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-vivid-cyan rounded-full flex items-center justify-center text-pure-white hover:bg-warm-coral transition-all duration-300 hover:scale-110 shadow-lg"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <button
              onClick={nextTestimonial}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-vivid-cyan rounded-full flex items-center justify-center text-pure-white hover:bg-warm-coral transition-all duration-300 hover:scale-110 shadow-lg"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center space-x-3 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'bg-vivid-cyan scale-125' 
                    : 'bg-gray-500 hover:bg-gray-400'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>

          {/* Client Logos */}
          <div className="mt-20">
            <h3 className="font-poppins font-semibold text-xl text-pure-white text-center mb-12">
              Trusted by Forward-Thinking Companies
            </h3>
            
            <div className="relative overflow-hidden">
              <div className="flex animate-marquee space-x-12">
                {[...clientLogos, ...clientLogos].map((logo, index) => (
                  <div
                    key={index}
                    className="flex-shrink-0 w-32 h-16 bg-pure-white rounded-lg flex items-center justify-center opacity-60 hover:opacity-100 transition-opacity duration-300 grayscale hover:grayscale-0"
                  >
                    <img
                      src={logo.url}
                      alt={`${logo.name} logo`}
                      className="max-w-24 max-h-10 object-contain"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
        
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </>
  );
};

export default Testimonials;
