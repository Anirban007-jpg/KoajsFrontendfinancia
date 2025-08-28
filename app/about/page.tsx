'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Code, Palette, Rocket, Users, Award, Heart } from 'lucide-react';
import Navbar from '@/components/sections/Navbar';
import Footer from '@/components/sections/Footer';


const AboutPage = () => {
  const skillsRef = useRef(null);
  const valuesRef = useRef(null);
  const skillsInView = useInView(skillsRef, { once: true, });
  const valuesInView = useInView(valuesRef, { once: true,});

  const skills = [
    { name: 'React/Next.js', level: 100, color: 'from-blue-500 to-cyan-500' },
    { name: 'TypeScript', level: 100, color: 'from-blue-600 to-indigo-600' },
    { name: 'Node.js', level: 100, color: 'from-green-500 to-emerald-500' },
    { name: 'UI/UX Design', level: 100, color: 'from-purple-500 to-pink-500' },
    { name: 'Database Design', level: 100, color: 'from-orange-500 to-red-500' },
    { name: 'DevOps', level: 100, color: 'from-yellow-500 to-orange-500' },
  ];



  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  const skillBarVariants = {
    visible: (level: number) => ({
      width: `${level}%`,
      transition: { duration: 1.2, delay: 0.2, ease: "easeOut" },
    }),
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
        <Navbar/>
      
      <main className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="text-center mb-20"
          >
            <motion.div
              variants={itemVariants}
              className="relative inline-block mb-8"
            >
              <div className="w-32 h-32 mx-auto mb-6 relative">
                <div className="w-full h-full bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white text-4xl font-bold shadow-xl">
                    F
                </div>
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="absolute -inset-4 border-2 border-blue-200 rounded-full opacity-20"
                />
              </div>
            </motion.div>
            
            <motion.h1
              variants={itemVariants}
              className="text-4xl md:text-6xl font-bold text-gray-900 mb-6"
            >
              About{' '}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Company
              </span>
            </motion.h1>
            
            <motion.p
              variants={itemVariants}
              className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
            >
              Empowering your financial future with intelligent analytics and solutions and personalized wealth management strategies.
            </motion.p>
          </motion.div>

          {/* Story Section */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, }}
            className="mb-20"
          >
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <motion.div variants={itemVariants}>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Company's Overview</h2>
                <div className="space-y-4 text-gray-600 leading-relaxed">
                  <p>
 
                  </p>
                  <p>
           
                  </p>
                  <p>
                 
                  </p>
                </div>
              </motion.div>

              <motion.div
                variants={itemVariants}
                className="bg-white p-8 rounded-xl shadow-lg border border-gray-100"
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-6">Quick Stats</h3>
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                      className="text-3xl font-bold text-blue-600 mb-2"
                    >
                      0+
                    </motion.div>
                    <p className="text-gray-600 text-sm">Financial Data Analyzed</p>
                  </div>
                  <div className="text-center">
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.4 }}
                      className="text-3xl font-bold text-purple-600 mb-2"
                    >
                      0+
                    </motion.div>
                    <p className="text-gray-600 text-sm">Service Provided(years)</p>
                  </div>
                  <div className="text-center">
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.6 }}
                      className="text-3xl font-bold text-green-600 mb-2"
                    >
                      0+
                    </motion.div>
                    <p className="text-gray-600 text-sm">Clients Retained</p>
                  </div>
                  <div className="text-center">
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.8 }}
                      className="text-3xl font-bold text-orange-600 mb-2"
                    >
                      24/7
                    </motion.div>
                    <p className="text-gray-600 text-sm">Support Available</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Skills Section */}
          <motion.div
            ref={skillsRef}
            variants={containerVariants}
            initial="hidden"
            animate={skillsInView ? "visible" : "hidden"}
            className="mb-20"
          >
            <motion.h2
              variants={itemVariants}
              className="text-3xl font-bold text-gray-900 text-center mb-12"
            >
             Technologies Usage Data
            </motion.h2>
            
            <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
              <div className="grid md:grid-cols-2 gap-8">
                {skills.map(({ name, level, color }, index) => (
                  <motion.div
                    key={name}
                    variants={itemVariants}
                    className="space-y-2"
                  >
                    <div className="flex justify-between items-center">
                      <span className="font-medium text-gray-900">{name}</span>
                      <span className="text-sm text-gray-500">{level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                      <motion.div
                        custom={level}

                        initial="hidden"
                        animate={skillsInView ? "visible" : "hidden"}
                        className={`h-full bg-gradient-to-r ${color} rounded-full`}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

        
        </div>
     
      </main>
      <Footer/>
    </div>
  );
};

export default AboutPage;