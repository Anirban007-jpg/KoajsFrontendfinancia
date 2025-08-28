// src/components/AnimatedSingleStepForm.tsx

'use client';

import { motion } from 'framer-motion';

// Defines the content for the single step of the form.
const formContent = {
    id: 1,
    title: 'Welcome Aboard!',
    text: 'Ready to start your journey with us? Just fill in your details below to get instant access.'
};



/**
 * AnimatedSingleStepForm component renders a single, animated, responsive form card.
 * It uses Framer Motion for a captivating entrance animation for the form itself
 * and its internal contents, attractive borders, and well-designed input fields.
 */
const AnimatedSingleStepForm = () => {
    return (
        <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-purple-700 via-pink-500 to-red-500 p-4 sm:p-6 md:p-8">
            {/* motion.div acts as the animated container for the single step */}
            <motion.div
                variants={{
                    hidden: {
                        opacity: 0,
                        y: 50,
                        scale: 0.9
                    },
                    visible: {
                        opacity: 1,
                        y: 0,
                        scale: 1,
                        transition: {
                            duration: 0.7,
                            ease: "easeOut",
                            when: "beforeChildren", // Animates the container first, then children
                            staggerChildren: 0.15   // Staggers the animation of child elements by 0.15 seconds
                        }
                    }
                }} // Use formVariants for the main container
                initial="hidden"
                animate="visible"
                className="bg-white p-8 sm:p-10 rounded-3xl shadow-4xl max-w-sm sm:max-w-md lg:max-w-lg w-full relative overflow-hidden
                   transform transition-all duration-500 ease-in-out
                   border-4 border-solid border-purple-500 hover:border-pink-600 hover:shadow-5xl
                   focus-within:ring-8 focus-within:ring-purple-300 focus-within:ring-opacity-70" // Refined borders and focus ring
            >
                {/* Animated Form Title */}
                <motion.h2
                    variants={{
                        hidden: { y: 20, opacity: 0 },
                        visible: {
                            y: 0,
                            opacity: 1,
                            transition: {
                                duration: 0.5,
                                ease: "easeOut"
                            }
                        }
                    }} // Apply itemVariants to the title
                    className="text-4xl font-extrabold text-center text-gray-900 mb-6 sm:mb-8 tracking-tight"
                >
                    {formContent.title}
                </motion.h2>

                {/* Animated Form Description Text */}
                <motion.p
                    variants={{
                        hidden: { y: 20, opacity: 0 },
                        visible: {
                            y: 0,
                            opacity: 1,
                            transition: {
                                duration: 0.5,
                                ease: "easeOut"
                            }
                        }
                    }} // Apply itemVariants to the description
                    className="text-gray-700 text-xl leading-relaxed text-center mb-8"
                >
                    {formContent.text}
                </motion.p>

                {/* Input fields wrapped in motion.div for animation */}
                <form className="space-y-6">
                    <motion.div variants={{
                        hidden: { y: 20, opacity: 0 },
                        visible: {
                            y: 0,
                            opacity: 1,
                            transition: {
                                duration: 0.5,
                                ease: "easeOut"
                            }
                        }
                    }}>
                        <label htmlFor="name" className="block text-gray-800 text-lg font-medium mb-2">
                            Your Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            placeholder="E.g., John Doe"
                            className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition duration-200 ease-in-out text-lg"
                            aria-label="Your Name"
                        />
                    </motion.div>

                    <motion.div variants={{
                        hidden: { y: 20, opacity: 0 },
                        visible: {
                            y: 0,
                            opacity: 1,
                            transition: {
                                duration: 0.5,
                                ease: "easeOut"
                            }
                        }
                    }}>
                        <label htmlFor="email" className="block text-gray-800 text-lg font-medium mb-2">
                            Email Address
                        </label>
                        <input
                            type="email"
                            id="email"
                            placeholder="E.g., john.doe@example.com"
                            className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition duration-200 ease-in-out text-lg"
                            aria-label="Email Address"
                        />
                    </motion.div>

                    {/* Submit Button wrapped in motion.div for animation */}
                    <motion.div variants={{
                        hidden: { y: 20, opacity: 0 },
                        visible: {
                            y: 0,
                            opacity: 1,
                            transition: {
                                duration: 0.5,
                                ease: "easeOut"
                            }
                        }
                    }} className="pt-4">
                        <button
                            type="submit"
                            className="w-full bg-purple-600 text-white py-3 px-6 rounded-lg font-bold text-xl
                         hover:bg-purple-700 transition duration-300 ease-in-out shadow-md hover:shadow-lg
                         focus:outline-none focus:ring-4 focus:ring-purple-300 focus:ring-opacity-75"
                            aria-label="Submit Form"
                        >
                            Register
                        </button>
                    </motion.div>
                </form>
            </motion.div>
        </div>
    );
};

export default AnimatedSingleStepForm;
