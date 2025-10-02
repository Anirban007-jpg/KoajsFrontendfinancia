"use client";

import { useState } from "react";
import { motion } from "framer-motion";




export default function AnimatedFormDesign() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);




    const containerVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                staggerChildren: 0.1,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, x: -20 },
        visible: {
            opacity: 1,
            x: 0,
            transition: { duration: 0.4 },
        },
    };

    return (
        <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="w-full max-w-2xl"
        >
            <motion.div
                className="backdrop-blur-lg bg-white/10 rounded-3xl shadow-2xl p-8 md:p-12 border border-white/20"
                whileHover={{ scale: 1.01 }}
                transition={{ duration: 0.3 }}
            >
                <motion.h1
                    variants={itemVariants}
                    className="text-4xl md:text-5xl font-bold text-white mb-3 text-center"
                >
                    Create Your Ledger
                </motion.h1>

                <motion.p
                    variants={itemVariants}
                    className="text-white/80 text-center mb-8"
                >
                    Fill out the form below and ledger will be created shortly
                </motion.p>

                <form className="space-y-6">
                    <motion.div variants={itemVariants}>
                        <label
                            htmlFor="fullName"
                            className="block text-white font-medium mb-2"
                        >
                            Full Name
                        </label>
                        <motion.input
                            whileFocus={{ scale: 1.02 }}
                            transition={{ duration: 0.2 }}

                            type="text"
                            id="fullName"
                            className="w-full px-4 py-3 rounded-xl bg-white/20 border border-white/30 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent transition-all"
                            placeholder="John Doe"
                        />

                    </motion.div>

                    <motion.div variants={itemVariants} className="grid md:grid-cols-2 gap-6">
                        <div>
                            <label
                                htmlFor="email"
                                className="block text-white font-medium mb-2"
                            >
                                Email Address
                            </label>
                            <motion.input
                                whileFocus={{ scale: 1.02 }}
                                transition={{ duration: 0.2 }}

                                type="email"
                                id="email"
                                className="w-full px-4 py-3 rounded-xl bg-white/20 border border-white/30 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent transition-all"
                                placeholder="john@example.com"
                            />

                        </div>

                        <div>
                            <label
                                htmlFor="phone"
                                className="block text-white font-medium mb-2"
                            >
                                Phone Number
                            </label>
                            <motion.input
                                whileFocus={{ scale: 1.02 }}
                                transition={{ duration: 0.2 }}

                                type="tel"
                                id="phone"
                                className="w-full px-4 py-3 rounded-xl bg-white/20 border border-white/30 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent transition-all"
                                placeholder="+1 234 567 8900"
                            />

                        </div>
                    </motion.div>

                    <motion.div variants={itemVariants}>
                        <label
                            htmlFor="company"
                            className="block text-white font-medium mb-2"
                        >
                            Company
                        </label>
                        <motion.input
                            whileFocus={{ scale: 1.02 }}
                            transition={{ duration: 0.2 }}

                            type="text"
                            id="company"
                            className="w-full px-4 py-3 rounded-xl bg-white/20 border border-white/30 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent transition-all"
                            placeholder="Your Company"
                        />

                    </motion.div>

                    <motion.div variants={itemVariants}>
                        <label
                            htmlFor="message"
                            className="block text-white font-medium mb-2"
                        >
                            Message
                        </label>
                        <motion.textarea
                            whileFocus={{ scale: 1.02 }}
                            transition={{ duration: 0.2 }}

                            id="message"
                            rows={5}
                            className="w-full px-4 py-3 rounded-xl bg-white/20 border border-white/30 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent transition-all resize-none"
                            placeholder="Tell us about your project..."
                        />


                    </motion.div>

                    <motion.div variants={itemVariants}>
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            type="submit"
                            disabled={isSubmitting}
                            className="w-full py-4 px-6 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            {isSubmitting ? (
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    className="flex items-center justify-center"
                                >
                                    <motion.div
                                        animate={{ rotate: 360 }}
                                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                                        className="w-6 h-6 border-2 border-white border-t-transparent rounded-full mr-2"
                                    />
                                    Sending...
                                </motion.div>
                            ) : (
                                "Send Message"
                            )}
                        </motion.button>
                    </motion.div>
                </form>

            </motion.div>
        </motion.div>
    );
}
