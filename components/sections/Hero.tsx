'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Play, TrendingUp, Shield, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const tl = gsap.timeline();
    
    tl.fromTo('.hero-title', 
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, ease: 'power3.out' }
    )
    .fromTo('.hero-subtitle',
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' },
      '-=0.5'
    )
    .fromTo('.hero-buttons',
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out' },
      '-=0.3'
    )
    .fromTo('.floating-card',
      { opacity: 0, scale: 0.8 },
      { opacity: 1, scale: 1, duration: 1, stagger: 0.2, ease: 'back.out(1.7)' },
      '-=0.8'
    );

    // Floating animation for cards
    gsap.to('.floating-card', {
      y: -10,
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: 'power2.inOut',
      stagger: 0.3
    });
  }, []);

  return (
    <section id="home" ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900"></div>
      
      {/* Floating Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-400/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-indigo-400/20 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            <motion.h1 
              className="hero-title text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              Secure Your
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500"> Financial Future</span>
            </motion.h1>
            
            <motion.p 
              className="hero-subtitle text-xl text-blue-100 mb-8 max-w-2xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              Join over to analyze ur Financial data with investors who trust our platform for intelligent portfolio management, 
              personalized strategies, and exceptional returns.
            </motion.p>

            <motion.div 
              className="hero-buttons flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <Button size="lg" className="bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-black font-semibold px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105">
                Register Today
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              
        
            </motion.div>

            {/* Trust Indicators */}
            <motion.div 
              className="mt-12 flex flex-wrap justify-center lg:justify-start items-center gap-6 text-blue-200"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
            >
              <div className="flex items-center gap-2">
                <Shield className="h-5 w-5 text-green-400" />
                <span className="text-sm">SEC Registered</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="h-5 w-5 text-yellow-400" />
                <span className="text-sm">Award Winning</span>
              </div>
              <div className="flex items-center gap-2">
                <TrendingUp className="h-5 w-5 text-blue-400" />
                <span className="text-sm">1+ Years Experience</span>
              </div>
            </motion.div>
          </div>

          {/* Right Content - Floating Cards */}
          <div className="relative hidden lg:block">
            <div className="relative w-full h-96">
              {/* Main Card */}
              <motion.div 
                className="floating-card absolute top-0 left-1/2 transform -translate-x-1/2 w-72 h-44 bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-white font-semibold">Portfolio Value</h3>
                  <TrendingUp className="h-6 w-6 text-green-400" />
                </div>
                <div className="text-2xl font-bold text-white mb-2"></div>
                <div className="text-green-400 text-sm"></div>
              </motion.div>

              {/* Smaller Cards */}
              <motion.div 
                className="floating-card absolute top-16 -left-8 w-48 h-32 bg-gradient-to-r from-yellow-500/20 to-orange-500/20 backdrop-blur-lg rounded-xl p-4 border border-yellow-500/30"
                whileHover={{ scale: 1.05 }}
              >
                <div className="text-yellow-400 text-sm font-medium mb-2">Customer Retention Rate</div>
                <div className="text-white text-xl font-bold">5%</div>
              </motion.div>

              <motion.div 
                className="floating-card absolute top-32 -right-8 w-48 h-32 bg-gradient-to-r from-blue-500/20 to-indigo-500/20 backdrop-blur-lg rounded-xl p-4 border border-blue-500/30"
                whileHover={{ scale: 1.05 }}
              >
                <div className="text-blue-400 text-sm font-medium mb-2"></div>
                <div className="text-white text-xl font-bold"></div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}