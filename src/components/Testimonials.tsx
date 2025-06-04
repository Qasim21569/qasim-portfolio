
import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      text: "Qasim delivered exactly what we needed. The landing page not only looks amazing but converts 30% better than our previous design. His attention to detail and technical expertise are exceptional.",
      author: "Sarah Chen",
      role: "CEO",
      company: "TechStart",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b647?w=100&h=100&fit=crop&crop=face",
      rating: 5
    },
    {
      id: 2,
      text: "The new e-commerce store exceeded our expectations. Sales increased by 40% in the first month after launch. Qasim's understanding of user experience is remarkable.",
      author: "Michael Rodriguez",
      role: "Founder",
      company: "StyleHub",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
      rating: 5
    },
    {
      id: 3,
      text: "The portfolio perfectly captures my artistic vision. It's both beautiful and functional. The animations and interactions are smooth and engaging.",
      author: "Elena Vasquez",
      role: "Creative Director",
      company: "Design Studio",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
      rating: 5
    },
    {
      id: 4,
      text: "The dashboard is not only functional but delightful to use. Our team productivity increased significantly. Qasim's work speaks for itself.",
      author: "David Kim",
      role: "Product Manager",
      company: "DataFlow",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
      rating: 5
    },
    {
      id: 5,
      text: "Our online reservations doubled after the new website launch. The design perfectly captures our brand and the user experience is seamless.",
      author: "Maria Gonzalez",
      role: "Restaurant Owner",
      company: "Bella Vista",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop&crop=face",
      rating: 5
    },
    {
      id: 6,
      text: "The banking app interface is incredibly intuitive. Customer satisfaction scores improved by 40%. Qasim delivered beyond our expectations.",
      author: "James Wilson",
      role: "Digital Banking Director",
      company: "FinTech Bank",
      avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=100&h=100&fit=crop&crop=face",
      rating: 5
    }
  ];

  const clientLogos = [
    { name: 'TechStart', logo: 'TS' },
    { name: 'StyleHub', logo: 'SH' },
    { name: 'Design Studio', logo: 'DS' },
    { name: 'DataFlow', logo: 'DF' },
    { name: 'Bella Vista', logo: 'BV' },
    { name: 'FinTech Bank', logo: 'FB' }
  ];

  const itemsPerPage = window.innerWidth >= 1024 ? 3 : window.innerWidth >= 768 ? 2 : 1;
  const maxIndex = Math.max(0, testimonials.length - itemsPerPage);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  React.useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="testimonials" className="section-padding bg-pure-white">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-playfair font-bold text-4xl lg:text-5xl text-deep-charcoal mb-6">
            What Clients Are Saying
          </h2>
          <p className="font-inter text-xl text-gray-600 max-w-3xl mx-auto">
            Real feedback from the businesses I've helped flourish
          </p>
        </div>

        {/* Testimonials Carousel */}
        <div className="relative mb-16">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${currentIndex * (100 / itemsPerPage)}%)`
              }}
            >
              {testimonials.map((testimonial) => (
                <div
                  key={testimonial.id}
                  className={`flex-shrink-0 px-4 ${
                    itemsPerPage === 1 ? 'w-full' : 
                    itemsPerPage === 2 ? 'w-1/2' : 'w-1/3'
                  }`}
                >
                  <div className="bg-soft-gray rounded-xl p-8 h-full relative group hover:shadow-xl transition-all duration-300">
                    {/* Quote Icon */}
                    <div className="absolute -top-4 -left-4 w-12 h-12 bg-vivid-cyan rounded-full flex items-center justify-center text-pure-white text-2xl font-playfair">
                      "
                    </div>

                    {/* Rating */}
                    <div className="flex items-center space-x-1 mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-warm-coral fill-current" />
                      ))}
                    </div>

                    {/* Testimonial Text */}
                    <p className="font-inter text-lg text-gray-700 leading-relaxed mb-6 italic">
                      {testimonial.text}
                    </p>

                    {/* Client Info */}
                    <div className="flex items-center space-x-4">
                      <img
                        src={testimonial.avatar}
                        alt={testimonial.author}
                        className="w-16 h-16 rounded-full object-cover border-2 border-warm-coral"
                      />
                      <div>
                        <div className="font-poppins font-semibold text-deep-charcoal">
                          {testimonial.author}
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
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-vivid-cyan rounded-full flex items-center justify-center text-pure-white hover:bg-warm-coral transition-all duration-300 hover:scale-110 opacity-0 group-hover:opacity-100"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-vivid-cyan rounded-full flex items-center justify-center text-pure-white hover:bg-warm-coral transition-all duration-300 hover:scale-110 opacity-0 group-hover:opacity-100"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center space-x-2 mt-8">
            {Array.from({ length: maxIndex + 1 }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  currentIndex === index ? 'bg-vivid-cyan scale-125' : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Client Logos Ribbon */}
        <div className="border-t border-soft-gray pt-12">
          <div className="text-center mb-8">
            <h3 className="font-poppins font-semibold text-xl text-deep-charcoal">
              Trusted by Leading Companies
            </h3>
          </div>
          
          <div className="flex justify-center items-center space-x-8 overflow-hidden">
            <div className="flex animate-marquee space-x-8">
              {[...clientLogos, ...clientLogos].map((client, index) => (
                <div
                  key={`${client.name}-${index}`}
                  className="flex-shrink-0 w-16 h-16 bg-soft-gray rounded-full flex items-center justify-center font-poppins font-bold text-deep-charcoal hover:bg-vivid-cyan hover:text-pure-white transition-all duration-300 cursor-pointer grayscale hover:grayscale-0"
                >
                  {client.logo}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 20s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

export default Testimonials;
