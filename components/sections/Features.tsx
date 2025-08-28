'use client';

import { motion } from 'framer-motion';
import { Shield, TrendingUp, Brain, Clock, DollarSign, Users } from 'lucide-react';

const features = [
  {
    icon: Brain,
    title: 'AI-Powered Analytics',
    description: 'Advanced machine learning algorithms analyze market trends and optimize your portfolio in real-time.'
  },
  {
    icon: Shield,
    title: 'Bank-Level Security',
    description: '256-bit encryption and multi-factor authentication keep your investments safe and secure.'
  },
  {
    icon: TrendingUp,
    title: 'Smart Portfolio Management',
    description: 'Automated rebalancing and tax-loss harvesting to maximize your returns and minimize taxes.'
  },
  {
    icon: Clock,
    title: '24/7 Market Monitoring',
    description: 'Round-the-clock surveillance of market conditions with instant alerts and recommendations.'
  },
  {
    icon: DollarSign,
    title: 'Low Fees',
    description: 'Transparent pricing with no hidden fees. More of your money stays invested and working for you.'
  },
  {
    icon: Users,
    title: 'Expert Support',
    description: 'Access to certified financial advisors and investment experts whenever you need guidance.'
  }
];

export default function Features() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16 fade-up"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Why Choose Our Platform?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Experience the future of investing with our cutting-edge technology and personalized approach.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="group relative fade-up"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
            >
              <div className="h-full bg-white border border-gray-200 rounded-2xl p-8 transition-all duration-300 group-hover:shadow-2xl group-hover:border-blue-300">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="h-8 w-8 text-white" />
                </div>
                
                <h3 className="text-xl font-semibold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                  {feature.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>

                {/* Gradient border on hover */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur-xl"></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}