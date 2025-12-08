'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Mail, ArrowLeft, Phone, MapPin, Send } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div className="min-h-screen bg-white py-16 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-4xl mx-auto">
        <Link href="/" className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-6 transition-colors duration-300 text-sm">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Home
        </Link>
        
        <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
          <div className="flex items-center mb-6">
            <Mail className="w-6 h-6 text-blue-600 mr-3" />
            <h1 className="text-3xl font-bold text-gray-900 tracking-tight">Contact Us</h1>
          </div>
          
          <div className="text-gray-700 space-y-6 text-sm leading-relaxed">
            <p className="text-base">
              Ready to transform your business communication? Get in touch with our team to discuss 
              how our SMS and USSD solutions can help your business grow and connect with customers more effectively.
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Contact Information */}
              <div className="space-y-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-4">Get In Touch</h2>
                
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white flex-shrink-0">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Phone</h3>
                      <p className="text-gray-600">(+233) 509 405 989</p>
                      <p className="text-sm text-gray-500">Available 24/7 for support</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white flex-shrink-0">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Email</h3>
                      <p className="text-gray-600">info@wgghana.com</p>
                      <p className="text-sm text-gray-500">We'll respond within 24 hours</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white flex-shrink-0">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Office Location</h3>
                      <p className="text-gray-600">Accra, Ghana</p>
                      <p className="text-sm text-gray-500">Serving clients nationwide</p>
                    </div>
                  </div>
                </div>

                <div className="bg-blue-50 rounded-lg p-4 mt-6">
                  <h3 className="font-semibold text-gray-900 mb-2">Business Hours</h3>
                  <div className="space-y-1 text-sm">
                    <p><strong className="text-gray-900">Monday - Friday:</strong> 8:00 AM - 6:00 PM</p>
                    <p><strong className="text-gray-900">Saturday:</strong> 9:00 AM - 2:00 PM</p>
                    <p><strong className="text-gray-900">Sunday:</strong> Emergency Support Only</p>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div>
                <h2 className="text-xl font-semibold text-gray-900 mb-4">Send us a Message</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent text-sm"
                      required
                      placeholder="Enter your full name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent text-sm"
                      required
                      placeholder="Enter your email address"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
                      Company
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent text-sm"
                      placeholder="Enter your company name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent text-sm"
                      required
                      placeholder="Tell us about your communication needs..."
                    />
                  </div>
                  
                  <button
                    type="submit"
                    className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors duration-300 font-semibold flex items-center justify-center"
                  >
                    <Send className="w-4 h-4 mr-2" />
                    Send Message
                  </button>
                </form>
              </div>
            </div>

            <section className="space-y-3 pt-6 border-t border-gray-300">
              <h2 className="text-xl font-semibold text-gray-900 mb-2">Why Contact WGSMS?</h2>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li><strong className="text-gray-900">Expert Consultation:</strong> Get personalized advice for your business communication needs</li>
                <li><strong className="text-gray-900">Custom Solutions:</strong> Tailored messaging strategies for your industry</li>
                <li><strong className="text-gray-900">Quick Setup:</strong> Get started with our services in no time</li>
                <li><strong className="text-gray-900">Ongoing Support:</strong> Dedicated account management and technical assistance</li>
                <li><strong className="text-gray-900">Competitive Pricing:</strong> Affordable solutions that deliver real value</li>
              </ul>
            </section>

            <section className="space-y-3 pt-4 border-t border-gray-300">
              <h2 className="text-xl font-semibold text-gray-900 mb-2">Response Time</h2>
              <p>
                We pride ourselves on quick response times. You can expect to hear back from our team within:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-3">
                <div className="text-center p-4 bg-green-50 rounded-lg">
                  <div className="text-lg font-bold text-green-600">1-2 Hours</div>
                  <div className="text-sm text-gray-600">Phone Calls</div>
                </div>
                <div className="text-center p-4 bg-blue-50 rounded-lg">
                  <div className="text-lg font-bold text-blue-600">24 Hours</div>
                  <div className="text-sm text-gray-600">Email Responses</div>
                </div>
                <div className="text-center p-4 bg-purple-50 rounded-lg">
                  <div className="text-lg font-bold text-purple-600">Immediate</div>
                  <div className="text-sm text-gray-600">Emergency Support</div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}