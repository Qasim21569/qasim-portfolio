import React, { useState, useEffect, useRef } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle, Github, MessageCircle, Linkedin, AlertCircle, Calendar, RefreshCw, X, Check } from 'lucide-react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: '',
    description: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [submitError, setSubmitError] = useState('');
  const [errors, setErrors] = useState<any>({});
  const [isVisible, setIsVisible] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
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
    'UI/UX Design',
    'Full-Stack Development',
    'Other'
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    if (errors[name]) {
      setErrors((prev: any) => ({ ...prev, [name]: '' }));
    }
    if (submitError) {
      setSubmitError('');
    }
  };

  const validateForm = () => {
    const newErrors: any = {};
    
    if (!formData.name.trim()) newErrors.name = 'Please enter your name';
    if (!formData.email.trim()) {
      newErrors.email = 'Please enter your email';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    if (!formData.projectType) newErrors.projectType = 'Please select a project type';
    if (!formData.description.trim()) newErrors.description = 'Please describe your project';
    if (formData.description.trim().length < 10) newErrors.description = 'Please provide more details (at least 10 characters)';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    setIsLoading(true);
    setSubmitError('');

    try {
      // EmailJS Integration - Replace with your actual credentials
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        project_type: formData.projectType,
        message: formData.description,
        to_email: 'qasimkhrd@gmail.com' // Your email where you want to receive messages
      };

      // Replace these with your actual EmailJS credentials
      await emailjs.send(
        'service_75gmj02',    // Get from EmailJS dashboard
        'template_ahb9e1h',   // Get from EmailJS dashboard  
        templateParams,
        'Z5JvEBn3gN7L0x5iv'     // Get from EmailJS dashboard
      );

      setShowSuccess(true);
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        projectType: '',
        description: ''
      });

    } catch (error) {
      console.error('Form submission failed:', error);
      setSubmitError('Failed to send message. Please try emailing me directly at qasimkhrd@gmail.com');
    } finally {
      setIsLoading(false);
    }
  };

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
              {submitError && (
                <div className="mb-6 p-4 bg-red-900/20 border border-red-500 rounded-lg flex items-center space-x-3">
                  <AlertCircle className="w-5 h-5 text-red-400 flex-shrink-0" />
                  <p className="text-red-300 text-sm">{submitError}</p>
                </div>
              )}
              
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name Field */}
                <div>
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name *"
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
                    placeholder="Your Email *"
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
                    <option value="" className="bg-gray-900">Select Project Type *</option>
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
                    placeholder="Tell me about your project... *"
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

                {/* Budget Note */}
                <div className="p-4 rounded-xl bg-gray-800/30 backdrop-blur-sm border border-gray-700/50">
                  <div className="flex items-start space-x-3">
                    <div className="flex-shrink-0">
                      <Calendar className="w-5 h-5 text-purple-400 mt-0.5" />
                    </div>
                    <div>
                      <h4 className="font-poppins font-medium text-white text-sm mb-1">Budget & Timeline Discussion</h4>
                      <p className="font-inter text-gray-300 text-xs leading-relaxed">
                        Budget and timeline will be discussed during our initial consultation to ensure we create a plan that perfectly fits your needs and goals.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-poppins font-semibold text-lg px-8 py-4 rounded-xl transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:scale-105 flex items-center justify-center space-x-3 group disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0 disabled:hover:scale-100"
                >
                  {isLoading ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                      <span>Send Message</span>
                    </>
                  )}
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
                Prefer a quick chat? Reach out directly via email or phone for immediate assistance.
              </p>
            </div>

            {/* Direct Contact Info */}
            <div className="space-y-6">
              <a 
                href="mailto:qasimkhrd@gmail.com"
                className="flex items-center space-x-4 text-white hover:text-cyan-400 transition-colors duration-300 group"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <div className="font-inter font-medium text-lg">qasimkhrd@gmail.com</div>
                  <div className="font-inter text-sm text-gray-400">Available 24/7</div>
                </div>
              </a>

              <a 
                href="tel:+917977801024"
                className="flex items-center space-x-4 text-white hover:text-purple-400 transition-colors duration-300 group"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <div className="font-inter font-medium text-lg">+91 7977801024</div>
                  <div className="font-inter text-sm text-gray-400">Response within 6h</div>
                </div>
              </a>

              <div className="flex items-center space-x-4 text-white">
                <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full flex items-center justify-center">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <div className="font-inter font-medium text-lg">India</div>
                  <div className="font-inter text-sm text-gray-400">Remote & Available Worldwide</div>
                </div>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="bg-gray-800/30 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50">
              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle className="w-8 h-8 text-white" />
                </div>
                <h4 className="font-poppins font-semibold text-xl text-white">
                  Quick Response Guarantee
                </h4>
                <p className="font-inter text-gray-300">
                  I respond to all inquiries within 6 hours. Let's discuss your project today!
                </p>
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-cyan-400">6h</div>
                    <div className="text-xs text-gray-400">Response Time</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-purple-400">10+</div>
                    <div className="text-xs text-gray-400">Projects Done</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex space-x-4 justify-center lg:justify-start">
              {[
                { 
                  icon: <Linkedin className="w-6 h-6" />, 
                  href: 'https://www.linkedin.com/in/qasim-kharodia-807951216/', 
                  color: 'hover:from-blue-600 hover:to-blue-400',
                  label: 'LinkedIn'
                },
                { 
                  icon: <Github className="w-6 h-6" />, 
                  href: 'https://github.com/Qasim21569', 
                  color: 'hover:from-gray-600 hover:to-gray-400',
                  label: 'GitHub'
                },
                { 
                  icon: <MessageCircle className="w-6 h-6" />, 
                  href: 'https://wa.me/917977801024?text=Hi%20Qasim,%20I%20would%20like%20to%20discuss%20a%20project%20with%20you.%20Let%27s%20connect!', 
                  color: 'hover:from-green-600 hover:to-green-400',
                  label: 'WhatsApp'
                }
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className={`w-12 h-12 bg-gray-800/50 backdrop-blur-sm rounded-full flex items-center justify-center text-gray-300 hover:bg-gradient-to-r ${social.color} hover:text-white transition-all duration-300 hover:scale-110 border border-gray-700/50`}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Success Message Modal */}
        {showSuccess && (
          <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 p-4">
            <div className="bg-gray-900 rounded-2xl max-w-md w-full border border-gray-700">
              <div className="p-8 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-500/20 mb-4">
                  <Check className="w-8 h-8 text-green-500" />
                </div>
                <h3 className="font-playfair font-bold text-2xl text-white mb-2">Message Sent!</h3>
                <p className="font-inter text-gray-300 mb-6">
                  Thank you for reaching out! I'll get back to you within 6 hours.
                </p>
                <button
                  onClick={() => setShowSuccess(false)}
                  className="inline-flex items-center space-x-2 px-6 py-3 bg-gray-800 rounded-full font-poppins font-medium text-white hover:bg-gray-700 transition-colors duration-300"
                >
                  <X className="w-4 h-4" />
                  <span>Close</span>
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Contact;
