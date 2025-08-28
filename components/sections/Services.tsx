'use client';

import { motion } from 'framer-motion';
import { ArrowRight, PieChart, Target, Briefcase } from 'lucide-react';
import { Button } from '@/components/ui/button';

const services = [
  {
    icon: PieChart,
    title: 'Portfolio Management',
    description: 'Diversified investment strategies tailored to your risk tolerance and financial goals.',
    features: ['Custom asset allocation', 'Risk assessment', 'Regular rebalancing', 'Performance tracking'],
    price: 'Starting at 0.25%',
    popular: false
  },
  {
    icon: Target,
    title: 'Wealth Planning',
    description: 'Comprehensive financial planning to help you achieve your long-term objectives.',
    features: ['Retirement planning', 'Tax optimization', 'Estate planning', 'Insurance review'],
    price: 'Starting at $299/month',
    popular: true
  },
  {
    icon: Briefcase,
    title: 'Corporate Solutions',
    description: 'Enterprise-level investment management for businesses and institutions.',
    features: ['401(k) management', 'Cash management', 'Institutional pricing', 'Dedicated support'],
    price: 'Custom pricing',
    popular: false
  }
];

export default function Services() {
  return (
    <section id="services" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16 slide-in-left"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Investment Services Tailored for You
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose from our range of professional services designed to meet your unique financial needs.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className={`relative h-full slide-in-right ${service.popular ? 'lg:scale-105' : ''}`}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
            >
              {service.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                  <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-6 py-2 rounded-full text-sm font-semibold">
                    Most Popular
                  </span>
                </div>
              )}

              <div className={`h-full bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 ${
                service.popular ? 'border-2 border-yellow-400' : 'border border-gray-200'
              }`}>
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6">
                  <service.icon className="h-8 w-8 text-white" />
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>

                <div className="mb-6">
                  <div className="text-2xl font-bold text-gray-900 mb-4">{service.price}</div>
                  <ul className="space-y-3">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-600">
                        <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <Button 
                  className={`w-full font-semibold py-3 rounded-full transition-all duration-300 ${
                    service.popular 
                      ? 'bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-black' 
                      : 'bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white'
                  }`}
                >
                  Get Started
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}