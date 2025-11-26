"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Menu,
  X,
  ChevronRight,
  Star,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Youtube,
} from "lucide-react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

import communicateImg from "@/public/i1.jpg";
import engageImg from "@/public/i2.jpg";
import multichannelImg from "@/public/i3.jpg";
import integrateImg from "@/public/i4.jpg";
import smsIcon from "@/public/bulk-sms.png";
import ussdIcon from "@/public/ussd.png";
import otpIcon from "@/public/otp.png";
import apiIcon from "@/public/api.png";
import servicesBg from "@/public/service.jpg";

// TypingText Component
const TypingText: React.FC<{ text: string; speed?: number }> = ({ text, speed = 100 }) => {
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setDisplayedText(text.slice(0, index + 1));
        setIndex(index + 1);
        if (index + 1 === text.length) setIsDeleting(true);
      } else {
        setDisplayedText(text.slice(0, index - 1));
        setIndex(index - 1);
        if (index - 1 === 0) setIsDeleting(false);
      }
    }, isDeleting ? speed / 2 : speed);

    return () => clearTimeout(timeout);
  }, [index, isDeleting, text, speed]);

  return (
    <span>
      {displayedText}
      <span className="inline-block w-[2px] bg-white animate-blink ml-1">&nbsp;</span>
    </span>
  );
};

const Sms: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = ["Home", "Products", "Solutions", "Resources", "About", "Contact"];
  const services = [
    { icon: <Image src={smsIcon} alt="Bulk SMS" width={80} height={80} />, title: "Bulk SMS", description: "Reach a large number of contacts anywhere with ease." },
    { icon: <Image src={ussdIcon} alt="USSD" width={80} height={80} />, title: "USSD", description: "Enable interactive mobile experiences using USSD applications." },
    { icon: <Image src={otpIcon} alt="OTP" width={80} height={80} />, title: "OTP Verification", description: "Securely verify users' identity through OTPs." },
    { icon: <Image src={apiIcon} alt="API" width={80} height={80} />, title: "Developer APIs", description: "Integrate our APIs quickly and reliably." },
  ];
  const features = [
    { title: "Communicate", description: "Reach customers through Bulk SMS, Email, Voice, USSD.", image: communicateImg },
    { title: "Engage", description: "Transform communication with interactive messaging.", image: engageImg },
    { title: "Multi-Channel", description: "Combine SMS, USSD, and voice for comprehensive coverage.", image: multichannelImg },
    { title: "Integrate", description: "API solutions for seamless developer integration.", image: integrateImg },
  ];
  const testimonials = [
    { name: "Daniel Doe", company: "Tech Corp", text: "Excellent service and reliable delivery.", rating: 5 },
    { name: "Anita Smith", company: "E-Commerce Ltd", text: "API integration was seamless.", rating: 5 },
    { name: "Mike Johnson", company: "StartUp Inc", text: "Affordable pricing and intuitive platform.", rating: 4 },
  ];

  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.3 });
  const controls = useAnimation();
  useEffect(() => { if (inView) controls.start("visible"); }, [controls, inView]);

  return (
    <div className="min-h-screen bg-white text-black">

      {/* HEADER - Mobile Optimized */}
      <header className={`fixed top-0 w-full z-50 bg-white transition-all duration-300 ${isScrolled ? "shadow-lg py-1" : "shadow-sm py-2"} text-black`}>
        <div className="bg-[#00C853] py-2 px-4 text-white">
          <div className="max-w-7xl mx-auto flex justify-between items-center text-xs">
            <div className="flex items-center gap-3">
              <a href="tel:+233509405989" className="font-bold hover:text-gray-200 transition text-xs">(+233) 509 405 989</a>
              <a href="mailto:info@wgghana.com" className="hidden sm:inline font-bold hover:text-gray-200 transition text-xs">info@wgghana.com</a>
            </div>
            <div className="flex items-center gap-2">
              <Facebook className="w-3 h-3 cursor-pointer hover:text-gray-200 transition" />
              <Twitter className="w-3 h-3 cursor-pointer hover:text-gray-200 transition" />
              <Instagram className="w-3 h-3 cursor-pointer hover:text-gray-200 transition" />
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center h-16 text-black">
            <Image src="/po1.png" alt="Logo" width={120} height={40} className="object-contain" />
            <nav className="hidden lg:flex space-x-6">
              {navItems.map((item, i) => (
                <a
                  key={i}
                  href="#"
                  className="text-gray-700 text-sm font-medium hover:!text-[#00C853] uppercase tracking-wide transition-colors"
                >
                  {item}
                </a>
              ))}
            </nav>
            <div className="hidden md:flex items-center gap-3">
              <a href="https://isdbms.com/" target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-[#00C853] text-white font-bold rounded-md hover:opacity-90 uppercase transition text-sm">Log in</a>
              <a href="https://isdbms.com/" target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-[#00C853] text-white font-bold rounded-md hover:opacity-90 uppercase transition text-sm">ENQUIRY</a>
            </div>
            <button 
              className="lg:hidden p-2 rounded-md hover:bg-gray-100 transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-6 h-6 text-gray-700" /> : <Menu className="w-6 h-6 text-gray-700" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu - Modern Slide-in */}
        <motion.div 
          className="lg:hidden bg-white border-t"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: mobileMenuOpen ? 1 : 0, height: mobileMenuOpen ? "auto" : 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="px-4 py-4 space-y-3 text-black">
            {navItems.map((item, i) => (
              <a 
                key={i} 
                href="#" 
                className="block px-4 py-3 text-black rounded-lg hover:bg-gray-50 text-base font-medium transition-colors border-b border-gray-100"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item}
              </a>
            ))}
            <div className="pt-4 space-y-3 border-t border-gray-200">
              <a 
                href="https://isdbms.com/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="block w-full px-4 py-3 text-center bg-gray-100 text-black rounded-lg hover:bg-gray-200 transition-colors text-base font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                Log in
              </a>
              <a 
                href="https://isdbms.com/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="block w-full px-4 py-3 text-center bg-[#00C853] text-white rounded-lg hover:bg-[#00b849] transition-colors text-base font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                Get Started
              </a>
            </div>
          </div>
        </motion.div>
      </header>

     {/* HERO - Mobile Optimized */}
<section className="relative w-full pt-20 sm:pt-28 md:pt-32 h-[80vh] sm:h-[70vh] md:h-[75vh] overflow-hidden">
  {/* Video Container with Proper Aspect Ratio */}
  <div className="absolute top-0 left-0 w-full h-full">
    <video 
      src="/vid1.mp4" 
      autoPlay 
      loop 
      muted 
      playsInline 
      className="absolute top-1/2 left-1/2 w-auto h-auto min-w-full min-h-full -translate-x-1/2 -translate-y-1/2 object-cover"
    />
    {/* Overlay for better text readability */}
    <div className="absolute inset-0 bg-black/40"></div>
  </div>
  
  {/* Content */}
  <div className="relative z-10 w-full h-full flex flex-col justify-center items-center text-center px-4 sm:px-6 text-white">
    <motion.h1 
      ref={ref} 
      initial="hidden" 
      animate={controls} 
      variants={{ 
        hidden: { opacity: 0, y: 30 }, 
        visible: { opacity: 1, y: 0, transition: { duration: 1, ease: "easeOut" } } 
      }} 
      className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold uppercase tracking-wide mb-4"
    >
      Message & Engage Your Audience
    </motion.h1>
    
    <motion.p 
      initial={{ opacity: 0, y: 50 }} 
      animate={controls} 
      variants={{ hidden: { opacity: 0, y: 50 }, visible: { opacity: 1, y: 0, transition: { duration: 1.5, delay: 0.3, ease: "easeOut" } } }} 
      className="text-white text-lg sm:text-xl md:text-2xl max-w-2xl mb-6"
    >
      <TypingText text="Bulk SMS & USSD solutions to grow your business seamlessly" speed={100} />
    </motion.p>
    
    <motion.div 
      initial={{ opacity: 0, y: 50 }} 
      animate={controls} 
      variants={{ hidden: { opacity: 0, y: 50 }, visible: { opacity: 1, y: 0, transition: { duration: 1.5, delay: 0.6, ease: "easeOut" } } }} 
      className="mt-6 flex flex-col sm:flex-row gap-4"
    >
      <Link 
        href="#services" 
        className="px-6 py-3 border-2 border-white bg-white text-black rounded-md hover:text-blue-600 hover:bg-white uppercase font-bold tracking-wide transition-colors duration-300 !text-black"
      >
        Learn More
      </Link>
      <Link 
        href="#contact" 
        className="px-6 py-3 border-2 border-white bg-white text-black rounded-md hover:text-blue-600 hover:bg-white uppercase font-bold tracking-wide transition-colors duration-300 !text-black"
      >
        Contact Sales
      </Link>
    </motion.div>
  </div>
  
  {/* Scroll Indicator */}
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ delay: 1.5 }}
    className="absolute bottom-4 left-1/2 transform -translate-x-1/2"
  >
    <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
      <motion.div
        animate={{ y: [0, 12, 0] }}
        transition={{ duration: 1.5, repeat: Infinity, repeatType: "loop" }}
        className="w-1 h-3 bg-white rounded-full mt-2"
      />
    </div>
  </motion.div>
</section>

      {/* SERVICES - Mobile Optimized */}
      <section id="services" className="py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 bg-[#f8fff8] text-black">
        <div className="max-w-7xl mx-auto text-center mb-8 sm:mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4 uppercase tracking-wide">
            Our Services
          </h2>
          <div className="w-16 sm:w-20 h-1 bg-[#00C853] mx-auto mb-4 sm:mb-6"></div>
          <p className="text-gray-600 max-w-3xl mx-auto text-sm sm:text-base md:text-lg leading-relaxed px-4">
            Comprehensive communication solutions designed to help your business thrive in the digital age.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8 max-w-7xl mx-auto">
          {services.map((s,i)=>(
            <div key={i} className="group p-4 sm:p-6 md:p-8 bg-[#f8fff8] rounded-xl border-2 border-[#00C853]/30 hover:border-[#00C853] hover:shadow-2xl transition-all duration-300 text-center">
              <div className="flex justify-center mb-4 sm:mb-5">
                <div className="w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center transition-transform group-hover:scale-110 duration-300">
                  {s.icon}
                </div>
              </div>
              <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 text-gray-800 uppercase tracking-wide">
                {s.title}
              </h3>
              <p className="text-gray-600 text-xs sm:text-sm leading-relaxed mb-3 sm:mb-4">
                {s.description}
              </p>
              <button className="text-[#00C853] font-semibold text-xs sm:text-sm uppercase tracking-wide hover:text-[#00b849] cursor-pointer transition-colors">
                Learn More →
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* FEATURES - Mobile Optimized */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 bg-gray-50 text-black">
        <div className="max-w-7xl mx-auto space-y-12 sm:space-y-16 md:space-y-20 lg:space-y-24">
          {features.map((f,i)=>(
            <div key={i} className={`flex flex-col ${i%2===1?"lg:flex-row-reverse":"lg:flex-row"} items-center gap-6 sm:gap-8 md:gap-10 lg:gap-16`}>
              <motion.div 
                className="flex-1 w-full h-48 sm:h-64 md:h-80 lg:h-[500px] bg-gray-200 rounded-xl overflow-hidden shadow-lg"
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ amount: 0.2 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                <Image 
                  src={f.image} 
                  alt={f.title} 
                  width={700} 
                  height={500} 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </motion.div>
              <motion.div 
                className="flex-1 text-center lg:text-left"
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ amount: 0.2 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
              >
                <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 text-gray-800 uppercase tracking-wide px-4 sm:px-0">
                  {f.title}
                </h3>
                <div className="w-12 sm:w-16 h-1 bg-[#00C853] mb-4 sm:mb-6 mx-auto lg:mx-0"></div>
                <p className="text-gray-600 mb-4 sm:mb-6 md:mb-8 text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed px-4 sm:px-0">
                  {f.description}
                </p>
                <button className="px-6 sm:px-8 py-2 sm:py-3 bg-[#00C853] text-white rounded-lg hover:bg-[#00b849] transition-colors text-xs sm:text-sm font-medium uppercase tracking-wide cursor-pointer shadow-lg mx-auto lg:mx-0 block">
                  Discover More
                </button>
              </motion.div>
            </div>
          ))}
        </div>
      </section>

      {/* TESTIMONIALS - Mobile Optimized */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 bg-white text-black">
        <div className="max-w-7xl mx-auto text-center mb-8 sm:mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4 uppercase tracking-wide">
            Client Testimonials
          </h2>
          <div className="w-16 sm:w-20 h-1 bg-[#00C853] mx-auto mb-4 sm:mb-6"></div>
          <p className="text-gray-600 max-w-3xl mx-auto text-sm sm:text-base md:text-lg px-4">
            See what our valued clients have to say about our services
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 max-w-7xl mx-auto mb-12 sm:mb-16 md:mb-20">
          {testimonials.map((t,i)=>(
            <div key={i} className="p-4 sm:p-6 cursor-pointer md:p-8 bg-gray-50 rounded-xl border border-gray-200 hover:border-[#00C853] hover:shadow-xl transition-all duration-300">
              <div className="flex mb-3 sm:mb-4 justify-center sm:justify-start">
                {[...Array(5)].map((_,idx)=>(
                  <Star key={idx} className={`w-4 h-4 sm:w-5 sm:h-5 ${idx<t.rating?"text-yellow-400 fill-[#00b178]":"text-gray-300"}`} />
                ))}
              </div>
              <p className="text-black italic mb-4 sm:mb-6 text-xs sm:text-sm md:text-base text-center sm:text-left leading-relaxed">
                "{t.text}"
              </p>
              <div className="text-center sm:text-left pt-3 sm:pt-4 border-t border-gray-200">
                <p className="font-bold text-gray-800 text-sm sm:text-base md:text-lg uppercase tracking-wide">
                  {t.name}
                </p>
                <p className="text-gray-500 text-xs sm:text-sm uppercase">
                  {t.company}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Logo Marquee Section - Mobile Optimized */}
        <div className="max-w-4xl mx-auto border-2 border-gray-200 rounded-xl p-4 sm:p-6 md:p-8 bg-gray-50 text-black">
          <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800 mb-4 sm:mb-6 uppercase tracking-wide text-center">
            Trusted By Industry Leaders
          </h3>
          <div className="relative overflow-hidden">
            <motion.div 
              className="flex"
              animate={{
                x: ["0%", "-50%"]
              }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 25,
                  ease: "linear",
                }
              }}
            >
              {[...Array(4)].map((_, setIndex) => (
                <React.Fragment key={setIndex}>
                  {[
                    { name: "Google", image: "/knust.jpg" },
                    { name: "Microsoft", image: "/mp.png" },
                    { name: "Apple", image: "/nei.webp" },
                    { name: "Amazon", image: "/ciba.png" }
                  ].map((company, index) => (
                    <div key={`${setIndex}-${index}`} className="flex-shrink-0 flex items-center justify-center mx-2 sm:mx-4 md:mx-6">
                      <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 bg-white rounded-lg shadow-md flex items-center justify-center p-2 sm:p-3 border border-gray-200">
                        <Image 
                          src={company.image} 
                          alt={company.name}
                          width={64}
                          height={64}
                          className="w-full h-full object-contain"
                        />
                      </div>
                    </div>
                  ))}
                </React.Fragment>
              ))}
            </motion.div>
            
            {/* Gradient overlays for smooth edges */}
            <div className="absolute left-0 top-0 bottom-0 w-8 sm:w-12 md:w-20 bg-gradient-to-r from-gray-50 to-transparent z-10"></div>
            <div className="absolute right-0 top-0 bottom-0 w-8 sm:w-12 md:w-20 bg-gradient-to-l from-gray-50 to-transparent z-10"></div>
          </div>
        </div>
      </section>

      {/* CTA - Mobile Optimized */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 bg-gradient-to-br from-[#003b00] to-[#002a00] text-center text-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 text-white uppercase tracking-wide px-4">
            Ready to Transform Your Communication?
          </h2>
          <p className="text-green-100 mb-6 sm:mb-8 md:mb-10 max-w-2xl mx-auto text-sm sm:text-base md:text-lg leading-relaxed px-4">
            Join thousands of businesses worldwide that trust WGSMS for their messaging needs. Get started today with our powerful platform.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 max-w-md mx-auto px-4">
            <button className="px-6 sm:px-8 md:px-10 py-3 sm:py-4 border-2 border-white cursor-pointer text-white rounded-lg hover:bg-[#00c853] hover:text-white transition-all duration-300 text-sm sm:text-base font-bold uppercase tracking-wide">
              Start Free Trial 
            </button>
            <button className="px-6 sm:px-8 md:px-10 py-3 sm:py-4 border-2 border-white cursor-pointer text-white rounded-lg hover:bg-[#00c853] hover:text-white transition-all duration-300 text-sm sm:text-base font-bold uppercase tracking-wide">
              Contact Sales
            </button>
          </div>
        </div>
      </section>

      {/* FOOTER - Mobile Optimized */}
      <footer className="bg-[#f8fff8] text-black py-8 sm:py-12 md:py-16 px-4 sm:px-6 border-t border-gray-200">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 sm:gap-8 md:gap-10 mb-8 sm:mb-12">
            <div className="lg:col-span-2">
              <img src="/po1.png" alt="Logo" className="h-40 sm:h-48 md:h-60 mb-4 sm:mb-6" />
              <p className="text-gray-600 text-xs sm:text-sm mb-4 sm:mb-6 leading-relaxed">
                WGSMS is your trusted partner for powerful communication solutions. We help businesses connect with customers through SMS, USSD, and innovative messaging technologies.
              </p>
              <div className="flex space-x-3">
                {[Facebook, Twitter, Linkedin, Instagram, Youtube].map((Icon,index)=>(
                  <div key={index} className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-gray-200 flex items-center justify-center hover:bg-[#00C853] transition-colors cursor-pointer">
                    <Icon className="w-3 h-3 sm:w-4 sm:h-4 text-gray-700 hover:text-white" />
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h4 className="text-black font-bold mb-3 sm:mb-4 uppercase text-xs sm:text-sm tracking-wider">Quick Links</h4>
              <ul className="space-y-2 sm:space-y-3 text-gray-600 text-xs sm:text-sm">
                {["About Us", "Our Team", "Careers", "News & Blog"].map((item, index) => (
                  <li key={index}>
                    <Link href="#" className="hover:text-black transition-all duration-200 hover:pl-2 block py-1">
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-black font-bold mb-3 sm:mb-4 uppercase text-xs sm:text-sm tracking-wider">Services</h4>
              <ul className="space-y-2 sm:space-y-3 text-gray-600 text-xs sm:text-sm">
                {["Bulk SMS", "USSD", "OTP Verification", "Developer API"].map((item, index) => (
                  <li key={index}>
                    <Link href="#" className="hover:text-black transition-all duration-200 hover:pl-2 block py-1">
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-black font-bold mb-3 sm:mb-4 uppercase text-xs sm:text-sm tracking-wider">Support</h4>
              <ul className="space-y-2 sm:space-y-3 text-gray-600 text-xs sm:text-sm">
                {["Help Center", "Documentation", "Contact Us", "FAQs"].map((item, index) => (
                  <li key={index}>
                    <Link href="#" className="hover:text-black transition-all duration-200 hover:pl-2 block py-1">
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-300 pt-6 sm:pt-8 flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-4">
            <p className="text-gray-600 text-xs sm:text-sm text-center sm:text-left">
              © 2025 WGSMS. All Rights Reserved.
            </p>
            <div className="flex gap-4 sm:gap-6 text-gray-600 text-xs sm:text-sm">
              {["Privacy Policy", "Terms of Service", "Cookie Policy"].map((item, index) => (
                <Link key={index} href="#" className="hover:text-black transition-colors">
                  {item}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Sms;