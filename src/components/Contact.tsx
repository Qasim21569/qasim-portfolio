
import React, { useState } from 'react';
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
    
    // Clear error when user starts typing
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
      
      // Reset form after 3 seconds
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
      <section id="contact" className="section-padding relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-pure-white via-soft-gray to-deep-charcoal"></div>
        
        <div className="relative z-10 container-custom">
          <div className="max-w-2xl mx-auto text-center">
            <div className="bg-pure-white rounded-3xl p-12 shadow-2xl">
              <div className="w-20 h-20 bg-vivid-cyan rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-10 h-10 text-pure-white" />
              </div>
              
              <h2 className="font-playfair font-bold text-3xl text-deep-charcoal mb-4">
                Thanks for reaching out!
              </h2>
              
              <p className="font-inter text-xl text-gray-600">
                I'll get back to you within 24 hours.
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="section-padding relative overflow-hidden">
      {/* Background with diagonal split */}
      <div className="absolute inset-0 bg-gradient-to-br from-pure-white via-soft-gray to-deep-charcoal" style={{
        clipPath: 'polygon(0 0, 100% 0, 100% 70%, 0 100%)'
      }}></div>
      
      <div className="relative z-10 container-custom">
        <div className="grid lg:grid-cols-5 gap-12 items-start">
          {/* Left Column - Contact Form */}
          <div className="lg:col-span-3">
            <div className="bg-pure-white rounded-3xl p-8 lg:p-12 shadow-2xl">
              <div className="mb-8">
                <h2 className="font-playfair font-bold text-3xl lg:text-4xl text-deep-charcoal mb-4">
                  Let's Create Something Amazing
                </h2>
                <p className="font-inter text-gray-600 text-lg">
                  Ready to bring your vision to life? Fill out the form below and let's discuss your project.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name Field */}
                <div>
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-4 border-2 rounded-lg font-poppins font-medium transition-all duration-300 focus:outline-none ${
                      errors.name 
                        ? 'border-red-500 focus:border-red-500' 
                        : 'border-warm-coral focus:border-vivid-cyan focus:shadow-lg'
                    }`}
                  />
                  {errors.name && (
                    <p className="font-inter text-sm text-red-500 mt-1">{errors.name}</p>
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
                    className={`w-full px-4 py-4 border-2 rounded-lg font-poppins font-medium transition-all duration-300 focus:outline-none ${
                      errors.email 
                        ? 'border-red-500 focus:border-red-500' 
                        : 'border-warm-coral focus:border-vivid-cyan focus:shadow-lg'
                    }`}
                  />
                  {errors.email && (
                    <p className="font-inter text-sm text-red-500 mt-1">{errors.email}</p>
                  )}
                </div>

                {/* Project Type Dropdown */}
                <div>
                  <select
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-4 border-2 rounded-lg font-poppins font-medium transition-all duration-300 focus:outline-none ${
                      errors.projectType 
                        ? 'border-red-500 focus:border-red-500' 
                        : 'border-warm-coral focus:border-vivid-cyan focus:shadow-lg'
                    }`}
                  >
                    <option value="">Select Project Type</option>
                    {projectTypes.map((type) => (
                      <option key={type} value={type}>{type}</option>
                    ))}
                  </select>
                  {errors.projectType && (
                    <p className="font-inter text-sm text-red-500 mt-1">{errors.projectType}</p>
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
                    className={`w-full px-4 py-4 border-2 rounded-lg font-inter resize-none transition-all duration-300 focus:outline-none ${
                      errors.description 
                        ? 'border-red-500 focus:border-red-500' 
                        : 'border-soft-gray focus:border-vivid-cyan focus:shadow-lg'
                    }`}
                  />
                  {errors.description && (
                    <p className="font-inter text-sm text-red-500 mt-1">{errors.description}</p>
                  )}
                </div>

                {/* Budget Range */}
                <div>
                  <div className="space-y-2">
                    <label className="font-poppins font-medium text-deep-charcoal">Budget Range</label>
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
                              ? 'bg-warm-coral text-pure-white'
                              : 'bg-soft-gray text-deep-charcoal hover:bg-warm-coral hover:text-pure-white'
                          }`}>
                            {range}
                          </div>
                        </label>
                      ))}
                    </div>
                    {errors.budget && (
                      <p className="font-inter text-sm text-red-500">{errors.budget}</p>
                    )}
                  </div>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full btn-primary flex items-center justify-center space-x-3 group"
                >
                  <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                  <span>Send Message</span>
                </button>
              </form>
            </div>
          </div>

          {/* Right Column - Contact Info & Calendly */}
          <div className="lg:col-span-2 space-y-8">
            <div className="text-center lg:text-left">
              <h3 className="font-playfair font-bold text-3xl text-pure-white mb-4">
                Let's Collaborate
              </h3>
              <p className="font-inter text-xl text-gray-300 leading-relaxed">
                Prefer a quick chat? Schedule a 30-minute call to discuss your project.
              </p>
            </div>

            {/* Calendly Embed Placeholder */}
            <div className="bg-pure-white rounded-xl p-6">
              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-vivid-cyan rounded-full flex items-center justify-center mx-auto">
                  <Mail className="w-8 h-8 text-pure-white" />
                </div>
                <h4 className="font-poppins font-semibold text-xl text-deep-charcoal">
                  Book a Free Consultation
                </h4>
                <p className="font-inter text-gray-600">
                  Schedule a 30-minute discovery call to discuss your project needs and goals.
                </p>
                <button className="btn-secondary w-full">
                  Schedule Call
                </button>
              </div>
            </div>

            {/* Direct Contact Info */}
            <div className="space-y-6">
              <div className="flex items-center space-x-4 text-pure-white">
                <div className="w-12 h-12 bg-warm-coral rounded-full flex items-center justify-center">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <div className="font-inter font-medium text-lg">qasim@example.com</div>
                </div>
              </div>

              <div className="flex items-center space-x-4 text-pure-white">
                <div className="w-12 h-12 bg-warm-coral rounded-full flex items-center justify-center">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <div className="font-inter font-medium text-lg">+1 (352) XXX-XXXX</div>
                </div>
              </div>

              <div className="flex items-center space-x-4 text-pure-white">
                <div className="w-12 h-12 bg-warm-coral rounded-full flex items-center justify-center">
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
                  className="w-12 h-12 bg-warm-coral rounded-full flex items-center justify-center text-pure-white hover:bg-vivid-cyan transition-all duration-300 hover:scale-110"
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
