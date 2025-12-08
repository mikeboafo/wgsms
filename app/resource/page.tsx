'use client';

import React from 'react';
import Link from 'next/link';
import { BookOpen, ArrowLeft, FileText, Video, Users, MessageCircle, Download } from 'lucide-react';

export default function Resources() {
  const resources = [
    {
      category: "Documentation",
      icon: FileText,
      items: [
        { 
          title: "API Documentation", 
          description: "Complete guide to our API endpoints and integration methods",
          link: "/docs/api",
          type: "PDF"
        },
        { 
          title: "Integration Guide", 
          description: "Step-by-step tutorials for platform integration",
          link: "/docs/integration",
          type: "Guide"
        },
        { 
          title: "Best Practices", 
          description: "Industry best practices for effective messaging",
          link: "/docs/best-practices",
          type: "Article"
        },
        { 
          title: "Developer SDK", 
          description: "Software development kits for various programming languages",
          link: "/docs/sdk",
          type: "Download"
        }
      ]
    },
    {
      category: "Learning Center",
      icon: Video,
      items: [
        { 
          title: "Video Tutorials", 
          description: "Watch and learn with our comprehensive video guides",
          link: "/learning/videos",
          type: "Video"
        },
        { 
          title: "Live Webinars", 
          description: "Join live sessions with our communication experts",
          link: "/learning/webinars",
          type: "Live"
        },
        { 
          title: "Case Studies", 
          description: "Success stories and implementations from our clients",
          link: "/learning/case-studies",
          type: "Case Study"
        },
        { 
          title: "Training Courses", 
          description: "Structured courses to master our platform",
          link: "/learning/courses",
          type: "Course"
        }
      ]
    },
    {
      category: "Support",
      icon: Users,
      items: [
        { 
          title: "Help Center", 
          description: "Find answers to frequently asked questions",
          link: "/support/help",
          type: "FAQ"
        },
        { 
          title: "Community Forum", 
          description: "Connect with other developers and users",
          link: "/support/community",
          type: "Community"
        },
        { 
          title: "Technical Support", 
          description: "Get direct help from our technical team",
          link: "/support/technical",
          type: "Support"
        },
        { 
          title: "Service Status", 
          description: "Check real-time platform status and updates",
          link: "/support/status",
          type: "Status"
        }
      ]
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
            <BookOpen className="w-6 h-6 text-blue-600 mr-3" />
            <h1 className="text-3xl font-bold text-gray-900 tracking-tight">Resources & Documentation</h1>
          </div>
          
          <div className="text-gray-700 space-y-6 text-sm leading-relaxed">
            <p className="text-base">
              Access comprehensive resources, documentation, and learning materials to help you get the most 
              out of our communication platform. From API guides to video tutorials, we've got everything 
              you need to succeed.
            </p>

            <div className="grid md:grid-cols-3 gap-6 mt-8">
              {resources.map((resource, categoryIndex) => {
                const IconComponent = resource.icon;
                return (
                  <div key={categoryIndex} className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                    <div className="flex items-center mb-4">
                      <IconComponent className="w-5 h-5 text-blue-600 mr-2" />
                      <h2 className="text-xl font-semibold text-gray-900">{resource.category}</h2>
                    </div>
                    
                    <div className="space-y-4">
                      {resource.items.map((item, itemIndex) => (
                        <div 
                          key={itemIndex} 
                          className="bg-white rounded-lg p-4 border border-gray-200 hover:border-blue-300 hover:shadow-md transition-all duration-300 cursor-pointer"
                        >
                          <div className="flex justify-between items-start mb-2">
                            <h3 className="font-semibold text-gray-900 text-sm">{item.title}</h3>
                            <span className="bg-blue-100 text-blue-600 text-xs px-2 py-1 rounded-full font-medium">
                              {item.type}
                            </span>
                          </div>
                          <p className="text-gray-600 text-xs leading-relaxed mb-3">
                            {item.description}
                          </p>
                          <div className="flex items-center text-blue-600 text-xs font-medium">
                            <Download className="w-3 h-3 mr-1" />
                            Access Resource
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>

            <section className="space-y-3 pt-6 border-t border-gray-300">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Quick Start Guides</h2>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
                  <h3 className="font-semibold text-gray-900 mb-2">Getting Started with SMS</h3>
                  <p className="text-gray-600 text-sm mb-3">
                    Learn how to set up and send your first bulk SMS campaign in under 10 minutes.
                  </p>
                  <Link href="/guides/sms-getting-started" className="text-blue-600 text-sm font-medium">
                    Read Guide →
                  </Link>
                </div>
                <div className="bg-green-50 rounded-lg p-4 border border-green-200">
                  <h3 className="font-semibold text-gray-900 mb-2">USSD Implementation</h3>
                  <p className="text-gray-600 text-sm mb-3">
                    Step-by-step guide to creating and deploying USSD applications.
                  </p>
                  <Link href="/guides/ussd-implementation" className="text-green-600 text-sm font-medium">
                    Read Guide →
                  </Link>
                </div>
              </div>
            </section>

            <section className="space-y-3 pt-6 border-t border-gray-300">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Developer Resources</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                <div className="p-4 bg-gray-50 rounded-lg">
                  <FileText className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                  <div className="text-sm font-semibold text-gray-900">API Reference</div>
                  <div className="text-xs text-gray-600">Complete endpoints</div>
                </div>
                <div className="p-4 bg-gray-50 rounded-lg">
                  <Download className="w-8 h-8 text-green-600 mx-auto mb-2" />
                  <div className="text-sm font-semibold text-gray-900">SDK Downloads</div>
                  <div className="text-xs text-gray-600">Multiple languages</div>
                </div>
                <div className="p-4 bg-gray-50 rounded-lg">
                  <MessageCircle className="w-8 h-8 text-purple-600 mx-auto mb-2" />
                  <div className="text-sm font-semibold text-gray-900">Code Samples</div>
                  <div className="text-xs text-gray-600">Ready-to-use examples</div>
                </div>
                <div className="p-4 bg-gray-50 rounded-lg">
                  <Users className="w-8 h-8 text-orange-600 mx-auto mb-2" />
                  <div className="text-sm font-semibold text-gray-900">Community</div>
                  <div className="text-xs text-gray-600">Developer forum</div>
                </div>
              </div>
            </section>

            <section className="space-y-3 pt-6 border-t border-gray-300">
              <h2 className="text-xl font-semibold text-gray-900 mb-2">Need Additional Help?</h2>
              <p>
                Can't find what you're looking for? Our support team is ready to assist you with any questions 
                or technical challenges you might encounter.
              </p>
              <div className="mt-4 space-y-1">
                <p><strong className="text-gray-900">Technical Support:</strong> Available 24/7 for urgent issues</p>
                <p><strong className="text-gray-900">Documentation Requests:</strong> Need specific guides? Let us know</p>
                <p><strong className="text-gray-900">Training Sessions:</strong> Schedule personalized training for your team</p>
              </div>
              <div className="mt-4">
                <Link 
                  href="/contact" 
                  className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300 font-semibold"
                >
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Contact Support
                </Link>
              </div>
            </section>

            <section className="space-y-3 pt-4 border-t border-gray-300">
              <h2 className="text-xl font-semibold text-gray-900 mb-2">Stay Updated</h2>
              <p>
                Subscribe to our newsletter to receive updates about new features, documentation releases, 
                and best practices.
              </p>
              <div className="mt-2 space-y-1">
                <p><strong className="text-gray-900">Monthly Updates:</strong> Platform improvements and new features</p>
                <p><strong className="text-gray-900">Technical Bulletins:</strong> Important updates and announcements</p>
                <p><strong className="text-gray-900">Best Practices:</strong> Tips for better communication strategies</p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}