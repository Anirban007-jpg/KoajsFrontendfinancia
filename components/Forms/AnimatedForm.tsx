// src/components/AnimatedSingleStepForm.tsx

'use client';


import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Signup, isAuth } from '@/actions/auth';
import { AlertCircle } from 'lucide-react';
import { toast } from 'react-toastify';

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

    const router = useRouter();

    const [values, setValues] = useState({
        PAN_No: '',
        Email: '',
        Address: '',
        Name: '',
        role: '',
        password: '',
        error: '',
        success: ''
    })

    
    useEffect(() => {
        if (!isAuth()){
          router.push('/register');
        }else if (isAuth() && isAuth().role === 'Company'){
          router.push('/company/dashboard');
        } else if (isAuth() && isAuth().role === 'Citizen'){
          router.push('/citizen/dashboard');
        }
    })

    const [loading, setLoading] = useState(false);

    const { PAN_No, Email, Address, Name, role, password, error, success } = values;

    const handleChangeInput = (name: string) => (e: { target: { value: any; }; }) => {
        setValues({ ...values, error: '', [name]: e.target.value })
    }

    const handleSubmit = (e: any) => {
        e.preventDefault();
        setValues({ ...values, error: '' });
        const individual = { PAN_No, Email, Address, Name, role, password };

        Signup(individual).then(data => {

            if (data.details) {
                setValues({ ...values, error: JSON.stringify(data.details[0]) });
                setLoading(false);
                console.log(data.details[0]);
            } else {
                setValues({
                    PAN_No: '',
                    Email: '',
                    Address: '',
                    Name: '',
                    role: '',
                    password: '',
                    error: '',
                    success: data.message
                })
                setLoading(false);
                console.log(data);
            }

        })
    }

    return (
        <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-blue-300 via-gray-200 to-red-500 p-4 sm:p-6 md:p-8">
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
                className="bg-white p-8 bg-gradient-to-br from-green-100 via-gray-150 to-yellow-200 sm:p-10 rounded-3xl shadow-4xl max-w-sm sm:max-w-md lg:max-w-lg w-full relative overflow-hidden
                   transform transition-all duration-500 ease-in-out
                   border-transparent mt-[50px] focus-within:ring-8 focus-within:ring-purple-300 focus-within:ring-opacity-70" // Refined borders and focus ring
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
                <form onSubmit={handleSubmit} className="space-y-6">
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
                        <label htmlFor="Pan No" className="block text-gray-800 text-lg font-medium mb-2">
                            PAN No/TAN No
                        </label>
                        <input
                            type="text"
                            id="Pan_no"
                            value={PAN_No}
                            onChange={handleChangeInput("PAN_No")}
                            placeholder="E.g., AABPX2345D"
                            className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition duration-200 ease-in-out text-lg"
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
                    }} >
                        <label htmlFor="email" className="block text-gray-800 text-lg font-medium mb-2">
                            Email
                        </label>
                        <input
                            value={Email}
                            onChange={handleChangeInput("Email")}
                            type="email"
                            id="email"
                            placeholder="E.g., john.doe@example.com"
                            className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition duration-200 ease-in-out text-lg"
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
                        <label htmlFor="Address" className="block text-gray-800 text-lg font-medium mb-2">
                            Registered/Official Address
                        </label>
                        <textarea
                            id="address"
                            value={Address}
                            onChange={handleChangeInput("Address")}
                            rows={3}
                            placeholder="E.g., 4/20, Namm, city Center, West Bengal"
                            className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition duration-200 ease-in-out text-lg"
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
                        <label htmlFor="Name" className="block text-gray-800 text-lg font-medium mb-2">
                            Company Name/User Name
                        </label>
                        <input
                            value={Name}
                            onChange={handleChangeInput("Name")}
                            type="text"
                            id="address"
                            placeholder="E.g., Popeye"
                            className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition duration-200 ease-in-out text-lg"
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
                        <label htmlFor="role" className="block text-gray-800 text-lg font-medium mb-2">
                            Role
                        </label>
                        <select
                            value={role}
                            onChange={handleChangeInput("role")}
                            id="role"
                            placeholder="E.g., Popeye"
                            className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition duration-200 ease-in-out text-lg"
                        >
                            <option value="">Select Role</option>
                            <option value="Company">Company</option>
                            <option value="Citizen">Citizen</option>
                        </select>
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
                        <label htmlFor="Password" className="block text-gray-800 text-lg font-medium mb-2">
                            Passsword
                        </label>
                        <input
                            value={password}
                            onChange={handleChangeInput("password")}
                            type="password"
                            id="password"
                            placeholder="E.g., XXXXXXXX"
                            className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition duration-200 ease-in-out text-lg"
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
                    {error && (
                            <>
                                  {toast.dismiss('error1')}
                               {toast(error, {type: "error", toastId: 'error1'})}
                             
                               
                            </>
                        )}
                        {success && (
                            <>
                                 {toast.dismiss('success1')}
                                {toast(success, {type: "success", toastId:'success1'})}
                              
                            </>
                          
                        )}
              
                </form>
            </motion.div>
        </div>
    );
};

export default AnimatedSingleStepForm;
