'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { Mail, ArrowRight, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsLoading(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsLoading(false);
    setIsSubscribed(true);
    setEmail('');
  };

  return (
    <section className="py-20 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-blue-600/50 to-purple-600/50"></div>
        <div className="absolute -top-40 -left-40 w-80 h-80 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="max-w-4xl mx-auto text-center fade-up"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-8">
            <Mail className="h-10 w-10 text-white" />
          </div>

          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Stay Ahead of Market Trends
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Get weekly market insights, investment tips, and exclusive updates delivered to your inbox.
          </p>

          {!isSubscribed ? (
            <form onSubmit={handleSubmit} className="max-w-md mx-auto">
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex-1">
                  <Input
                    type="email"
                    placeholder="Enter your email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-full px-6 py-3 rounded-full border-2 border-white/30 bg-white/20 backdrop-blur-lg text-white placeholder-blue-200 focus:border-white focus:outline-none"
                  />
                </div>
                <Button
                  type="submit"
                  disabled={isLoading}
                  className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 disabled:opacity-70"
                >
                  {isLoading ? (
                    <div className="flex items-center">
                      <div className="w-4 h-4 border-2 border-blue-600 border-t-transparent rounded-full animate-spin mr-2"></div>
                      Subscribing...
                    </div>
                  ) : (
                    <>
                      Subscribe
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </>
                  )}
                </Button>
              </div>
              <p className="text-blue-200 text-sm mt-4">
                No spam. Unsubscribe anytime. We respect your privacy.
              </p>
            </form>
          ) : (
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="max-w-md mx-auto"
            >
              <div className="flex items-center justify-center text-white mb-4">
                <CheckCircle className="h-8 w-8 text-green-400 mr-3" />
                <span className="text-xl font-semibold">Successfully Subscribed!</span>
              </div>
              <p className="text-blue-200">
                Thank you for subscribing. Check your email for confirmation.
              </p>
            </motion.div>
          )}

          <motion.div
            className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-white"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="text-center">
              <div className="text-2xl font-bold mb-2">5K+</div>
              <div className="text-blue-200">Newsletter Subscribers</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold mb-2">Weekly</div>
              <div className="text-blue-200">Market Updates</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold mb-2">Exclusive</div>
              <div className="text-blue-200">Investment Insights</div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}