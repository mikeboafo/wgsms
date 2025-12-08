'use client';

import React from 'react';
import Link from 'next/link';
import { Settings, MessageSquare, Smartphone, Shield, Code, Check, Zap, Users, Target, Heart } from 'lucide-react';

export default function Solutions() {
  const solutions = [
    {
      icon: MessageSquare,
      title: "Bulk SMS",
      description: "Reach thousands of customers instantly with our reliable bulk SMS platform. Perfect for marketing campaigns, alerts, and customer notifications.",
      features: ["High Delivery Rates", "Real-time Analytics", "Scheduled Messaging", "Multiple Sender IDs", "Contact Management", "Delivery Reports"],
      useCases: ["Marketing Campaigns", "Appointment Reminders", "Emergency Alerts", "Customer Notifications"]
    },
    {
      icon: Smartphone,
      title: "USSD Solutions",
      description: "Create interactive USSD applications for customer engagement and services. No internet required - works on all mobile devices.",
      features: ["Menu Builder", "Session Management", "Payment Integration", "Multi-language Support", "Real-time Processing", "Custom Workflows"],
      useCases: ["Mobile Banking", "Bill Payments", "Data Services", "Customer Support"]
    },
    {
      icon: Shield,
      title: "OTP Verification",
      description: "Secure user authentication with one-time password verification. Protect your applications and user accounts with reliable 2FA.",
      features: ["Instant Delivery", "High Security", "Easy Integration", "Multiple Channels", "Custom Templates", "Delivery Tracking"],
      useCases: ["User Authentication", "Transaction Verification", "Password Reset", "Account Security"]
    },
    {
      icon: Code,
      title: "API Integration",
      description: "Seamlessly integrate our services into your existing systems with our comprehensive API solutions and developer tools.",
      features: ["REST API", "Webhooks", "SDK Support", "Documentation", "Sandbox Environment", "Technical Support"],
      useCases: ["System Integration", "Custom Applications", "Automated Workflows", "Third-party Platforms"]
    }
  ];

  return (
    <div className="min-h-screen bg-white font-sans">
      {/* Hero Section with Full Background Video */}
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
          {/* Home Link - Top Left */}
          <div className="flex-1 pt-8">
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
                <Settings className="w-16 h-16 text-white mr-6 flex-shrink-0" />
                <div>
                  <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">Our Solutions</h1>
                  <p className="text-2xl text-blue-100 max-w-2xl leading-relaxed">
                    Comprehensive communication solutions designed to meet your business needs
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Introduction */}
        <section className="mb-16">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Transform Your Communication</h2>
            <div className="text-gray-700 leading-relaxed space-y-4">
              <p>
                Discover our comprehensive communication solutions designed to meet your business needs. 
                From bulk messaging to secure authentication, we provide the tools you need to connect 
                with your customers effectively and efficiently.
              </p>
              <p>
                Whether you're looking to engage customers, secure transactions, or automate workflows, 
                our solutions are built to scale with your business and deliver exceptional results.
              </p>
            </div>
          </div>
        </section>

        {/* Solutions Grid */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Our Solutions</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {solutions.map((solution, index) => {
              const IconComponent = solution.icon;
              return (
                <div key={index} className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mr-6">
                      <IconComponent className="w-8 h-8 text-blue-600" />
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900">{solution.title}</h2>
                  </div>
                  
                  <p className="text-gray-700 mb-6 leading-relaxed text-lg">
                    {solution.description}
                  </p>
                  
                  <div className="mb-6">
                    <h3 className="font-semibold text-gray-900 mb-4 text-lg">Key Features:</h3>
                    <ul className="space-y-2">
                      {solution.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-gray-700">
                          <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="mb-6">
                    <h3 className="font-semibold text-gray-900 mb-3 text-lg">Common Use Cases:</h3>
                    <div className="flex flex-wrap gap-2">
                      {solution.useCases.map((useCase, useCaseIndex) => (
                        <span 
                          key={useCaseIndex} 
                          className="bg-blue-100 text-blue-700 text-sm px-3 py-2 rounded-lg font-medium"
                        >
                          {useCase}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <Link 
                    href="/contact" 
                    className="block w-full text-center px-6 py-4 border-2 border-blue-600 text-blue-600 rounded-xl hover:bg-blue-600 hover:text-white transition-colors duration-300 font-semibold text-lg"
                  >
                    Learn More About {solution.title}
                  </Link>
                </div>
              );
            })}
          </div>
        </section>

        {/* Why Choose Our Solutions */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Why Choose Our Solutions?</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-6">
              <div className="flex items-start space-x-6 p-6 bg-white rounded-2xl shadow-lg border border-gray-100">
                <Zap className="w-10 h-10 text-blue-600 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Proven Reliability</h3>
                  <p className="text-gray-600 leading-relaxed">99.9% uptime guarantee with redundant infrastructure and continuous monitoring.</p>
                </div>
              </div>
              <div className="flex items-start space-x-6 p-6 bg-white rounded-2xl shadow-lg border border-gray-100">
                <Target className="w-10 h-10 text-green-600 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Scalable Performance</h3>
                  <p className="text-gray-600 leading-relaxed">Grow from hundreds to millions of messages seamlessly with our elastic infrastructure.</p>
                </div>
              </div>
              <div className="flex items-start space-x-6 p-6 bg-white rounded-2xl shadow-lg border border-gray-100">
                <Users className="w-10 h-10 text-purple-600 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Local Expertise</h3>
                  <p className="text-gray-600 leading-relaxed">Deep understanding of African markets, regulations, and communication patterns.</p>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <div className="flex items-start space-x-6 p-6 bg-white rounded-2xl shadow-lg border border-gray-100">
                <Shield className="w-10 h-10 text-orange-600 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Advanced Security</h3>
                  <p className="text-gray-600 leading-relaxed">Enterprise-grade security, data protection, and compliance with industry standards.</p>
                </div>
              </div>
              <div className="flex items-start space-x-6 p-6 bg-white rounded-2xl shadow-lg border border-gray-100">
                <Code className="w-10 h-10 text-indigo-600 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Easy Integration</h3>
                  <p className="text-gray-600 leading-relaxed">Simple APIs, comprehensive documentation, and dedicated developer support.</p>
                </div>
              </div>
              <div className="flex items-start space-x-6 p-6 bg-white rounded-2xl shadow-lg border border-gray-100">
                <Heart className="w-10 h-10 text-red-600 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">24/7 Support</h3>
                  <p className="text-gray-600 leading-relaxed">Dedicated technical support team available whenever you need assistance.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Industry Solutions */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Industry Solutions</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center p-8 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl text-white">
              <div className="text-2xl font-bold mb-3">Banking</div>
              <div className="text-blue-100">OTP & Alerts</div>
            </div>
            <div className="text-center p-8 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl text-white">
              <div className="text-2xl font-bold mb-3">Healthcare</div>
              <div className="text-green-100">Appointments & Alerts</div>
            </div>
            <div className="text-center p-8 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl text-white">
              <div className="text-2xl font-bold mb-3">E-commerce</div>
              <div className="text-purple-100">Order Updates</div>
            </div>
            <div className="text-center p-8 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl text-white">
              <div className="text-2xl font-bold mb-3">Education</div>
              <div className="text-orange-100">Notices & Alerts</div>
            </div>
          </div>
        </section>

        {/* Get Started CTA */}
        <section className="mb-16">
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-12 text-white">
            <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
            <p className="text-blue-100 text-xl mb-8 max-w-2xl">
              Contact our solutions team for a personalized consultation and discover how our communication 
              solutions can transform your business operations.
            </p>
            <div className="space-y-4 mb-8">
              <div className="flex items-center text-blue-100">
                <Check className="w-6 h-6 mr-3" />
                <span className="text-lg">Free Assessment: Get recommendations for your specific needs</span>
              </div>
              <div className="flex items-center text-blue-100">
                <Check className="w-6 h-6 mr-3" />
                <span className="text-lg">Demo Session: See our solutions in action</span>
              </div>
              <div className="flex items-center text-blue-100">
                <Check className="w-6 h-6 mr-3" />
                <span className="text-lg">Implementation Support: Get help with setup and integration</span>
              </div>
            </div>
            <Link 
              href="/contact" 
              className="inline-flex items-center px-10 py-4 bg-white text-blue-600 rounded-xl hover:bg-blue-50 transition-all duration-300 font-semibold text-lg shadow-lg"
            >
              Get Free Consultation
            </Link>
          </div>
        </section>

        {/* Technical Support */}
        <section className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Technical Questions?</h2>
          <p className="text-gray-700 text-lg mb-6 leading-relaxed">
            Our technical team is available to answer any questions about implementation, 
            integration, or technical specifications.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center p-6 bg-gray-50 rounded-xl">
              <div className="text-2xl font-bold text-blue-600 mb-2">Technical Support</div>
              <div className="text-gray-700">(+233) 509 405 989</div>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-xl">
              <div className="text-2xl font-bold text-green-600 mb-2">Email</div>
              <div className="text-gray-700">tech@wgghana.com</div>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-xl">
              <div className="text-2xl font-bold text-purple-600 mb-2">Documentation</div>
              <div className="text-gray-700">Comprehensive guides available</div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}