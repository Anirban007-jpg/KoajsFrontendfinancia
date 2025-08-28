'use client';

import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';

interface Stat {
  number: string;
  label: string;
  suffix?: string;
}

const stats: Stat[] = [
  { number: '0', label: 'Active Clients', suffix: 'K+' },
  { number: '0', label: 'Analyzed Results', suffix: 'B+' },
  { number: '0', label: 'ACtivity Rate', suffix: '%' },
  { number: '0', label: 'No of Clients', suffix: '' }
];

export default function Stats() {
  const [animatedNumbers, setAnimatedNumbers] = useState(stats.map(() => '0'));
  const statsRef = useRef<HTMLElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated.current) {
            hasAnimated.current = true;
            
            stats.forEach((stat, index) => {
              gsap.to({ value: 0 }, {
                value: parseFloat(stat.number),
                duration: 2,
                ease: 'power2.out',
                onUpdate: function() {
                  const current = this.targets()[0].value;
                  setAnimatedNumbers(prev => {
                    const newNumbers = [...prev];
                    newNumbers[index] = current.toFixed(stat.number.includes('.') ? 1 : 0);
                    return newNumbers;
                  });
                }
              });
            });
          }
        });
      },
      { threshold: 0.5 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={statsRef} className="py-20 bg-gradient-to-r from-gray-50 to-blue-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16 fade-up"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Trusted by Thousands of Investors
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Our track record speaks for itself. Join a community of successful investors.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="text-center fade-up"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="text-4xl lg:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 mb-2">
                  {animatedNumbers[index]}{stat.suffix}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}