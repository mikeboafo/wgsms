'use client';

import React from 'react';
import Link from 'next/link';
import { Package, ArrowLeft, Check, Star } from 'lucide-react';

export default function Products() {
  const products = [
    {
      name: "SMS Pro",
      price: "Starting at $0.01/SMS",
      features: ["Bulk Messaging", "Scheduled Campaigns", "Advanced Analytics", "API Access", "Real-time Delivery Reports", "Multiple Sender IDs"],
      popular: false,
      bestFor: "Small businesses & startups"
    },
    {
      name: "Business Suite",
      price: "$99/month",
      features: ["All SMS Pro Features", "USSD Platform", "OTP Service", "Priority Support", "Custom Sender ID", "Dedicated Short Code", "Multi-user Access"],
      popular: true,
      bestFor: "Growing businesses & agencies"
    },
    {
      name: "Enterprise",
      price: "Custom Pricing",
      features: ["All Business Features", "Dedicated Account Manager", "SLA Guarantee", "Custom Development", "White Label", "Advanced Security", "24/7 Premium Support"],
      popular: false,
      bestFor: "Large corporations & institutions"
    }
  ];

  return (
    <div className="min-h-screen bg-white py-16 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-6xl mx-auto">
        <Link href="/" className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-6 transition-colors duration-300 text-sm">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Home
        </Link>
        
        <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
          <div className="flex items-center mb-6">
            <Package className="w-6 h-6 text-blue-600 mr-3" />
            <h1 className="text-3xl font-bold text-gray-900 tracking-tight">Our Products & Pricing</h1>
          </div>
          
          <div className="text-gray-700 space-y-6 text-sm leading-relaxed">
            <p className="text-base">
              Choose the perfect communication solution for your business. All our plans include reliable delivery, 
              excellent support, and the tools you need to connect with your customers effectively.
            </p>

            <div className="grid md:grid-cols-3 gap-6 mt-8">
              {products.map((product, index) => (
                <div 
                  key={index} 
                  className={`relative bg-white rounded-xl border-2 p-6 ${
                    product.popular 
                      ? "border-blue-600 shadow-lg transform scale-105" 
                      : "border-gray-200 shadow-sm"
                  }`}
                >
                  {product.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <span className="bg-blue-600 text-white px-4 py-1 rounded-full text-xs font-semibold flex items-center">
                        <Star className="w-3 h-3 mr-1 fill-current" />
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{product.name}</h3>
                    <div className="text-2xl font-bold text-blue-600 mb-2">{product.price}</div>
                    <p className="text-sm text-gray-500">{product.bestFor}</p>
                  </div>
                  
                  <ul className="space-y-3 mb-6">
                    {product.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start text-sm">
                        <Check className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <button className={`w-full py-3 rounded-lg font-semibold transition-colors duration-300 ${
                    product.popular 
                      ? "bg-blue-600 text-white hover:bg-blue-700" 
                      : "border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white"
                  }`}>
                    Get Started
                  </button>
                </div>
              ))}
            </div>

            <section className="space-y-3 pt-6 border-t border-gray-300">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">All Plans Include</h2>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <div className="flex items-center">
                    <Check className="w-4 h-4 text-green-500 mr-2" />
                    <span className="text-gray-700">99.9% Uptime Guarantee</span>
                  </div>
                  <div className="flex items-center">
                    <Check className="w-4 h-4 text-green-500 mr-2" />
                    <span className="text-gray-700">Secure Data Encryption</span>
                  </div>
                  <div className="flex items-center">
                    <Check className="w-4 h-4 text-green-500 mr-2" />
                    <span className="text-gray-700">Real-time Delivery Reports</span>
                  </div>
                  <div className="flex items-center">
                    <Check className="w-4 h-4 text-green-500 mr-2" />
                    <span className="text-gray-700">Dedicated Customer Support</span>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <Check className="w-4 h-4 text-green-500 mr-2" />
                    <span className="text-gray-700">Easy Integration</span>
                  </div>
                  <div className="flex items-center">
                    <Check className="w-4 h-4 text-green-500 mr-2" />
                    <span className="text-gray-700">Comprehensive Documentation</span>
                  </div>
                  <div className="flex items-center">
                    <Check className="w-4 h-4 text-green-500 mr-2" />
                    <span className="text-gray-700">Regular Platform Updates</span>
                  </div>
                  <div className="flex items-center">
                    <Check className="w-4 h-4 text-green-500 mr-2" />
                    <span className="text-gray-700">No Hidden Fees</span>
                  </div>
                </div>
              </div>
            </section>

            <section className="space-y-3 pt-6 border-t border-gray-300">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Flexible Payment Options</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                <div className="p-4 bg-blue-50 rounded-lg">
                  <div className="text-lg font-bold text-blue-600">Pay-as-you-go</div>
                  <div className="text-sm text-gray-600">SMS Pro</div>
                </div>
                <div className="p-4 bg-green-50 rounded-lg">
                  <div className="text-lg font-bold text-green-600">Monthly</div>
                  <div className="text-sm text-gray-600">All Plans</div>
                </div>
                <div className="p-4 bg-purple-50 rounded-lg">
                  <div className="text-lg font-bold text-purple-600">Annual</div>
                  <div className="text-sm text-gray-600">Save 20%</div>
                </div>
                <div className="p-4 bg-orange-50 rounded-lg">
                  <div className="text-lg font-bold text-orange-600">Custom</div>
                  <div className="text-sm text-gray-600">Enterprise</div>
                </div>
              </div>
            </section>

            <section className="space-y-3 pt-6 border-t border-gray-300">
              <h2 className="text-xl font-semibold text-gray-900 mb-2">Need Help Choosing?</h2>
              <p>
                Not sure which plan is right for your business? Our team is here to help you find the perfect 
                solution based on your specific needs and budget.
              </p>
              <div className="mt-4 space-y-1">
                <p><strong className="text-gray-900">Free Consultation:</strong> Schedule a call with our experts</p>
                <p><strong className="text-gray-900">Trial Period:</strong> Test our platform risk-free</p>
                <p><strong className="text-gray-900">Custom Quotes:</strong> Get tailored pricing for your requirements</p>
              </div>
              <div className="mt-4">
                <Link 
                  href="/contact" 
                  className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300 font-semibold"
                >
                  Get Free Consultation
                </Link>
              </div>
            </section>

            <section className="space-y-3 pt-4 border-t border-gray-300">
              <h2 className="text-xl font-semibold text-gray-900 mb-2">Questions?</h2>
              <p>
                Contact our sales team for more information about our products and pricing.
              </p>
              <div className="mt-2 space-y-1">
                <p><strong className="text-gray-900">Phone:</strong> (+233) 509 405 989</p>
                <p><strong className="text-gray-900">Email:</strong> sales@wgghana.com</p>
                <p><strong className="text-gray-900">Hours:</strong> Mon-Fri, 8AM-6PM</p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}