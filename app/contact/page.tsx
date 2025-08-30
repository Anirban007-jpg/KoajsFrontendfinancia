'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Code, Palette, Rocket, Users, Award, Heart, Mail, Phone, MapPin, Clock } from 'lucide-react';
import Navbar from '@/components/sections/Navbar';
import Footer from '@/components/sections/Footer';
import ContactForm from '@/components/Forms/ContactForm';

const ContactPage = () => {
    const contactInfo = [
      {
        icon: Mail,
        title: 'Email',
        description: '',
        color: 'text-blue-600',
        bgColor: 'bg-blue-50',
      },
      {
        icon: Phone,
        title: 'Phone',
        description: '',
        color: 'text-green-600',
        bgColor: 'bg-green-50',
      },
      {
        icon: MapPin,
        title: 'Registered Office',
        description: '',
        color: 'text-purple-600',
        bgColor: 'bg-purple-50',
      },
      {
        icon: Clock,
        title: 'Response Time',
        description: 'Within 24 hours',
        color: 'text-orange-600',
        bgColor: 'bg-orange-50',
      },
    ];
  
    const containerVariants = {
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: {
          duration: 0.6,
          staggerChildren: 0.2,
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
  
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
        <Navbar />
        
        <main className="pt-24 pb-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="text-center mb-16"
            >
              <motion.h1
                variants={itemVariants}
                className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
              >
                Get In{' '}
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Touch
                </span>
              </motion.h1>
              <motion.p
                variants={itemVariants}
                className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
              >
                Have a project in mind or just want to say hello? I'd love to hear from you.
                Let's create something amazing together.
              </motion.p>
            </motion.div>
  
            <div className="grid lg:grid-cols-2 gap-16 items-start">
              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="space-y-8"
              >
                <motion.h2
                  variants={itemVariants}
                  className="text-2xl font-semibold text-gray-900 mb-6"
                >
                  Let's Start a Conversation
                </motion.h2>
                
                <div className="grid sm:grid-cols-2 gap-6">
                  {contactInfo.map(({ icon: Icon, title, description, color, bgColor }, index) => (
                    <motion.div
                      key={title}
                      variants={itemVariants}
                      whileHover={{ scale: 1.05, y: -5 }}
                      className={`p-6 rounded-xl ${bgColor} border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300`}
                    >
                      <div className={`w-12 h-12 ${color} ${bgColor} rounded-lg flex items-center justify-center mb-4`}>
                        <Icon className="w-6 h-6" />
                      </div>
                      <h3 className="font-semibold text-gray-900 mb-2">{title}</h3>
                      <p className="text-gray-600">{description}</p>
                    </motion.div>
                  ))}
                </div>
  
                <motion.div
                  variants={itemVariants}
                  className="bg-white p-8 rounded-xl shadow-lg border border-gray-100"
                >
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">
                    Why Work With Company?
                  </h3>
                  <ul className="space-y-3 text-gray-600">
                    <motion.li
                      whileHover={{ x: 5 }}
                      className="flex items-center gap-3 cursor-default"
                    >
                      <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                      Fast and reliable communication
                    </motion.li>
                    <motion.li
                      whileHover={{ x: 5 }}
                      className="flex items-center gap-3 cursor-default"
                    >
                      <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                      Modern, responsive designs
                    </motion.li>
                    <motion.li
                      whileHover={{ x: 5 }}
                      className="flex items-center gap-3 cursor-default"
                    >
                      <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                      Clean, maintainable code
                    </motion.li>
                    <motion.li
                      whileHover={{ x: 5 }}
                      className="flex items-center gap-3 cursor-default"
                    >
                      <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                      Ongoing support and updates
                    </motion.li>
                  </ul>
                </motion.div>
              </motion.div>
  
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="bg-white p-8 rounded-xl shadow-lg border border-gray-100"
              >
                <h2 className="text-2xl font-semibold text-gray-900 mb-6">
                  Send Me a Message
                </h2>
                <ContactForm />
              </motion.div>
            </div>
          </div>
        </main>
        <Footer/>
      </div>
    );
  };

export default ContactPage;