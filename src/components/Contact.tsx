
import React, { useState, useEffect, useRef } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle, Github, X as TwitterIcon, Linkedin } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: '',
    description: '',
    budget: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState<any>({});
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

  const projectTypes = [
    'Landing Page',
    'Custom Web App',
    'E-Commerce Solution',
    'Animations & UI/UX',
    'Other'
  ];

  const budgetRanges = [
    '<$1k',
    '$1k–$3k',
    '$3k–$5k',
    '>$5k'
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    if (errors[name]) {
      setErrors((prev: any) => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors: any = {};
    
    if (!formData.name.trim()) newErrors.name = 'Please fill out this field';
    if (!formData.email.trim()) newErrors.email = 'Please fill out this field';
    if (!formData.email.includes('@')) newErrors.email = 'Please enter a valid email';
    if (!formData.projectType) newErrors.projectType = 'Please select a project type';
    if (!formData.description.trim()) newErrors.description = 'Please fill out this field';
    if (!formData.budget) newErrors.budget = 'Please select a budget range';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      console.log('Form submitted:', formData);
      setIsSubmitted(true);
      
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({
          name: '',
          email: '',
          projectType: '',
          description: '',
          budget: ''
        });
      }, 3000);
    }
  };

  if (isSubmitted) {
    return (
      <section 
        ref={sectionRef}
        id="contact" 
        className="min-h-screen bg-gradient-to-br from-gray-900 via-slate-900 to-gray-800 flex items-center justify-center relative overflow-hidden"
      >
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-br from-green-500 to-cyan-500 rounded-full blur-3xl animate-pulse"></div>
        </div>
        
        <div className="relative z-10 max-w-2xl mx-auto text-center px-4">
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-3xl p-12 border border-gray-700/50">
            <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-10 h-10 text-white" />
            </div>
            
            <h2 className="font-playfair font-bold text-3xl text-white mb-4">
              Thanks for reaching out!
            </h2>
            
            <p className="font-inter text-xl text-gray-300">
              I'll get back to you within 24 hours.
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section 
      ref={sectionRef}
      id="contact" 
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
            <span className="font-inter text-sm font-medium text-gray-400 uppercase tracking-wider">CONTACT</span>
            <div className="w-12 h-px bg-gradient-to-r from-cyan-400 to-transparent"></div>
          </div>

          <h2 className="font-playfair font-bold text-4xl lg:text-5xl mb-6">
            Let's Create Something <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">Amazing</span>
          </h2>
          
          <p className="font-inter text-lg text-gray-300 max-w-3xl mx-auto">
            Ready to bring your vision to life? Fill out the form below and let's discuss your project.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12 items-start">
          {/* Left Column - Contact Form */}
          <div className={`lg:col-span-3 transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`} style={{transitionDelay: '200ms'}}>
            <div className="bg-gray-800/30 backdrop-blur-sm rounded-3xl p-8 lg:p-12 border border-gray-700/50">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name Field */}
                <div>
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-4 bg-gray-900/50 border-2 rounded-lg font-poppins font-medium transition-all duration-300 focus:outline-none text-white placeholder-gray-400 ${
                      errors.name 
                        ? 'border-red-500 focus:border-red-500' 
                        : 'border-gray-700 focus:border-cyan-400 focus:shadow-lg'
                    }`}
                  />
                  {errors.name && (
                    <p className="font-inter text-sm text-red-400 mt-1">{errors.name}</p>
                  )}
                </div>

                {/* Email Field */}
                <div>
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-4 bg-gray-900/50 border-2 rounded-lg font-poppins font-medium transition-all duration-300 focus:outline-none text-white placeholder-gray-400 ${
                      errors.email 
                        ? 'border-red-500 focus:border-red-500' 
                        : 'border-gray-700 focus:border-cyan-400 focus:shadow-lg'
                    }`}
                  />
                  {errors.email && (
                    <p className="font-inter text-sm text-red-400 mt-1">{errors.email}</p>
                  )}
                </div>

                {/* Project Type Dropdown */}
                <div>
                  <select
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-4 bg-gray-900/50 border-2 rounded-lg font-poppins font-medium transition-all duration-300 focus:outline-none text-white ${
                      errors.projectType 
                        ? 'border-red-500 focus:border-red-500' 
                        : 'border-gray-700 focus:border-cyan-400 focus:shadow-lg'
                    }`}
                  >
                    <option value="" className="bg-gray-900">Select Project Type</option>
                    {projectTypes.map((type) => (
                      <option key={type} value={type} className="bg-gray-900">{type}</option>
                    ))}
                  </select>
                  {errors.projectType && (
                    <p className="font-inter text-sm text-red-400 mt-1">{errors.projectType}</p>
                  )}
                </div>

                {/* Description */}
                <div>
                  <textarea
                    name="description"
                    placeholder="Brief Description of Your Project"
                    rows={4}
                    value={formData.description}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-4 bg-gray-900/50 border-2 rounded-lg font-inter resize-none transition-all duration-300 focus:outline-none text-white placeholder-gray-400 ${
                      errors.description 
                        ? 'border-red-500 focus:border-red-500' 
                        : 'border-gray-700 focus:border-cyan-400 focus:shadow-lg'
                    }`}
                  />
                  {errors.description && (
                    <p className="font-inter text-sm text-red-400 mt-1">{errors.description}</p>
                  )}
                </div>

                {/* Budget Range */}
                <div>
                  <div className="space-y-2">
                    <label className="font-poppins font-medium text-white">Budget Range</label>
                    <div className="flex flex-wrap gap-3">
                      {budgetRanges.map((range) => (
                        <label key={range} className="flex items-center cursor-pointer">
                          <input
                            type="radio"
                            name="budget"
                            value={range}
                            checked={formData.budget === range}
                            onChange={handleInputChange}
                            className="sr-only"
                          />
                          <div className={`px-4 py-2 rounded-full font-poppins font-medium transition-all duration-300 ${
                            formData.budget === range
                              ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white'
                              : 'bg-gray-800/50 text-gray-300 hover:bg-gradient-to-r hover:from-cyan-500 hover:to-blue-500 hover:text-white border border-gray-700'
                          }`}>
                            {range}
                          </div>
                        </label>
                      ))}
                    </div>
                    {errors.budget && (
                      <p className="font-inter text-sm text-red-400">{errors.budget}</p>
                    )}
                  </div>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-poppins font-semibold text-lg px-8 py-4 rounded-xl transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:scale-105 flex items-center justify-center space-x-3 group"
                >
                  <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                  <span>Send Message</span>
                </button>
              </form>
            </div>
          </div>

          {/* Right Column - Contact Info */}
          <div className={`lg:col-span-2 space-y-8 transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`} style={{transitionDelay: '400ms'}}>
            <div className="text-center lg:text-left">
              <h3 className="font-playfair font-bold text-3xl text-white mb-4">
                Let's Collaborate
              </h3>
              <p className="font-inter text-xl text-gray-300 leading-relaxed">
                Prefer a quick chat? Schedule a 30-minute call to discuss your project.
              </p>
            </div>

            {/* Quick Contact */}
            <div className="bg-gray-800/30 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50">
              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center mx-auto">
                  <Mail className="w-8 h-8 text-white" />
                </div>
                <h4 className="font-poppins font-semibold text-xl text-white">
                  Book a Free Consultation
                </h4>
                <p className="font-inter text-gray-300">
                  Schedule a 30-minute discovery call to discuss your project needs and goals.
                </p>
                <button className="border-2 border-cyan-400 text-cyan-400 font-poppins font-semibold px-6 py-3 rounded-xl transition-all duration-300 hover:bg-cyan-400 hover:text-gray-900 hover:shadow-lg hover:-translate-y-1 w-full">
                  Schedule Call
                </button>
              </div>
            </div>

            {/* Direct Contact Info */}
            <div className="space-y-6">
              <div className="flex items-center space-x-4 text-white">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <div className="font-inter font-medium text-lg">qasim@example.com</div>
                </div>
              </div>

              <div className="flex items-center space-x-4 text-white">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <div className="font-inter font-medium text-lg">+1 (352) XXX-XXXX</div>
                </div>
              </div>

              <div className="flex items-center space-x-4 text-white">
                <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full flex items-center justify-center">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <div className="font-inter font-medium text-lg">Remote & Available Worldwide</div>
                </div>
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex space-x-4">
              {[
                { icon: <Linkedin className="w-6 h-6" />, href: '#' },
                { icon: <Github className="w-6 h-6" />, href: '#' },
                { icon: <TwitterIcon className="w-6 h-6" />, href: '#' }
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="w-12 h-12 bg-gray-800/50 backdrop-blur-sm rounded-full flex items-center justify-center text-gray-300 hover:bg-gradient-to-r hover:from-cyan-500 hover:to-blue-500 hover:text-white transition-all duration-300 hover:scale-110 border border-gray-700/50"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
