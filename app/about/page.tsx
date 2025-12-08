'use client';

import React from 'react';
import Link from 'next/link';
import { Users, Target, Shield, Zap, Heart, MessageCircle, Smartphone, Code, Check } from 'lucide-react';

export default function About() {
  return (
    <div className="min-h-screen bg-white font-sans">
      {/* Hero Section - Full Width No Borders */}
      <section className="relative w-full h-[60vh] min-h-[500px] bg-gray-900">
        <div className="absolute inset-0">
          <video 
            src="/a1.mp4" 
            autoPlay 
            loop 
            muted 
            playsInline 
            className="absolute top-1/2 left-1/2 w-auto h-auto min-w-full min-h-full -translate-x-1/2 -translate-y-1/2 object-cover"
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        
        <div className="relative z-10 h-full flex flex-col">
          <div className="flex-1 pt-8 ">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
              <nav className="flex items-center">
                <Link href="/" className="px-4 py-2 bg-transparent text-white rounded-md hover:bg-white/20 transition-all duration-300 font-bold">
                  HOME
                </Link>
              </nav>
            </div>
          </div>

          {/* Title - Bottom Left */}
          <div className="pb-12">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
              <div className="flex items-start">
                <Users className="w-16 h-16 text-white mr-6 flex-shrink-0" />
                <div>
                  <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">About WGSMS</h1>
                  <p className="text-2xl text-blue-100 max-w-2xl leading-relaxed">
                    Your trusted partner for innovative communication solutions in Ghana and beyond
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Container */}
      <div className="w-full">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Introduction */}
          <section className="mb-16">
            <div className="prose prose-lg max-w-none">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
              <div className="text-gray-700 leading-relaxed space-y-4">
                <p>
                  Founded with a vision to revolutionize business communication, WGSMS has been at 
                  the forefront of providing reliable and scalable messaging solutions to businesses 
                  across various industries in Ghana and beyond.
                </p>
                <p>
                  Our journey began with a simple mission: to make business communication more accessible, 
                  affordable, and effective for organizations of all sizes. Today, we proudly serve thousands 
                  of businesses, helping them reach millions of customers through our robust platform.
                </p>
              </div>
            </div>
          </section>

          {/* Mission & Vision - White Cards */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Our Purpose</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                <Target className="w-12 h-12 text-blue-600 mb-6" />
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Our Mission</h3>
                <p className="text-gray-700 leading-relaxed text-lg">
                  To empower businesses with innovative communication tools that drive growth, enhance 
                  customer engagement, and simplify complex messaging needs through reliable and 
                  scalable technology solutions.
                </p>
              </div>
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                <Zap className="w-12 h-12 text-green-600 mb-6" />
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Our Vision</h3>
                <p className="text-gray-700 leading-relaxed text-lg">
                  To be the leading communication solutions provider in Africa, recognized for our 
                  technological excellence, customer-centric approach, and commitment to driving 
                  digital transformation through accessible messaging technologies.
                </p>
              </div>
            </div>
          </section>

          {/* Services Overview */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">What We Do</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="flex items-start space-x-4 p-6 bg-gray-50 rounded-xl">
                  <MessageCircle className="w-8 h-8 text-blue-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Bulk SMS Services</h3>
                    <p className="text-gray-600">Mass communication for marketing, alerts, and customer notifications with high delivery rates.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4 p-6 bg-gray-50 rounded-xl">
                  <Smartphone className="w-8 h-8 text-blue-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">USSD Applications</h3>
                    <p className="text-gray-600">Interactive mobile experiences that work on all devices without internet connection.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4 p-6 bg-gray-50 rounded-xl">
                  <Shield className="w-8 h-8 text-blue-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">OTP Verification</h3>
                    <p className="text-gray-600">Secure user authentication and two-factor authentication for enhanced security.</p>
                  </div>
                </div>
              </div>
              <div className="space-y-6">
                <div className="flex items-start space-x-4 p-6 bg-gray-50 rounded-xl">
                  <Code className="w-8 h-8 text-blue-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Developer APIs</h3>
                    <p className="text-gray-600">Seamless integration with your existing systems and applications.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4 p-6 bg-gray-50 rounded-xl">
                  <Zap className="w-8 h-8 text-blue-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Multi-Channel Platforms</h3>
                    <p className="text-gray-600">Combined SMS, USSD, and voice solutions for comprehensive coverage.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4 p-6 bg-gray-50 rounded-xl">
                  <Users className="w-8 h-8 text-blue-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Real-time Analytics</h3>
                    <p className="text-gray-600">Comprehensive reporting and insights for data-driven decisions.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Values - White Cards */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Our Values</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex items-start space-x-6 p-8 bg-white rounded-2xl shadow-lg border border-gray-100">
                <Zap className="w-10 h-10 text-blue-600 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Innovation</h3>
                  <p className="text-gray-600 leading-relaxed">Constantly evolving our technology to stay ahead of market trends and deliver cutting-edge solutions that meet tomorrow's needs today.</p>
                </div>
              </div>
              <div className="flex items-start space-x-6 p-8 bg-white rounded-2xl shadow-lg border border-gray-100">
                <Shield className="w-10 h-10 text-green-600 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Reliability</h3>
                  <p className="text-gray-600 leading-relaxed">Ensuring 99.9% uptime and consistent service delivery you can depend on, backed by robust infrastructure and proactive monitoring.</p>
                </div>
              </div>
              <div className="flex items-start space-x-6 p-8 bg-white rounded-2xl shadow-lg border border-gray-100">
                <Heart className="w-10 h-10 text-purple-600 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Partnership</h3>
                  <p className="text-gray-600 leading-relaxed">Building long-term relationships based on trust, transparency, and mutual success. Your growth is our success.</p>
                </div>
              </div>
              <div className="flex items-start space-x-6 p-8 bg-white rounded-2xl shadow-lg border border-gray-100">
                <Target className="w-10 h-10 text-orange-600 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Excellence</h3>
                  <p className="text-gray-600 leading-relaxed">Committed to delivering the highest quality solutions with exceptional customer service that exceeds expectations.</p>
                </div>
              </div>
            </div>
          </section>

          {/* Impact Stats */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Our Impact</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center p-8 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl text-white">
                <div className="text-4xl font-bold mb-3">10K+</div>
                <div className="text-lg font-semibold">Happy Clients</div>
              </div>
              <div className="text-center p-8 bg-[#00c9a7] from-[#00c9a7] to-[#00c9a7] rounded-2xl text-white">
                <div className="text-4xl font-bold mb-3">50M+</div>
                <div className="text-lg font-semibold">Messages Sent</div>
              </div>
              <div className="text-center p-8 bg-[#845ec2] to-[#845ec2] rounded-2xl text-white">
                <div className="text-4xl font-bold mb-3">5+</div>
                <div className="text-lg font-semibold">Years Experience</div>
              </div>
              <div className="text-center p-8 bg-[#c4fcef] from-[#c4fcef] to-[#c4fcef] rounded-2xl text-white">
                <div className="text-4xl font-bold mb-3">24/7</div>
                <div className="text-lg font-semibold">Support</div>
              </div>
            </div>
          </section>

          {/* Why Choose Us */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Why Choose WGSMS?</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                {[
                  "Proven Track Record: Years of experience serving diverse industries",
                  "Advanced Technology: State-of-the-art messaging infrastructure",
                  "Scalable Solutions: Services that grow with your business"
                ].map((item, index) => (
                  <div key={index} className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg">
                    <Check className="w-6 h-6 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700 font-medium">{item}</span>
                  </div>
                ))}
              </div>
              <div className="space-y-4">
                {[
                  "24/7 Support: Dedicated customer service team",
                  "Competitive Pricing: Affordable solutions without compromising quality",
                  "Local Expertise: Deep understanding of the African market"
                ].map((item, index) => (
                  <div key={index} className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg">
                    <Check className="w-6 h-6 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700 font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Contact CTA */}
          <section className="bg-[#0089ba] to-[#0089ba] rounded-2xl p-12 text-center text-white">
            <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Communication?</h2>
            <p className="text-blue-100 text-xl mb-8 max-w-2xl mx-auto">
              Join thousands of businesses that trust WGSMS for their messaging needs. 
              Get started today with our powerful platform and experience the difference.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact" 
                className="px-10 py-4 bg-white text-blue-600 rounded-lg hover:bg-blue-50 transition-all duration-300 font-semibold text-lg shadow-lg"
              >
                Contact Us Today
              </Link>
              <Link 
                href="/solutions" 
                className="px-10 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-blue-600 transition-all duration-300 font-semibold text-lg"
              >
                View Solutions
              </Link>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}