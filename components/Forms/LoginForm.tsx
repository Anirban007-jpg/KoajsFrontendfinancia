// src/components/AnimatedSingleStepForm.tsx

'use client';


import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Signup, authenticate, isAuth, signin } from '@/actions/auth';
import { AlertCircle } from 'lucide-react';

// Defines the content for the single step of the form.
const formContent = {
    id: 1,
    title: 'Welcome Back!',
    text: 'Ready to Login? Just fill in your details below to get instant access.'
};


const LoginForm = () => {

    const router = useRouter();

    useEffect(() => {
        if (!isAuth()){
          router.push('/login');
        }else if (isAuth() && isAuth().role === 'Company'){
          router.push('/company/dashboard');
        } else if (isAuth() && isAuth().role === 'Citizen'){
          router.push('/citizen/dashboard');
        }
      })

    const [values, setValues] = useState({
        PAN_No: '',
        password: '',
        error: '',
        success: ''
    })

    const [loading, setLoading] = useState(false);

    const { PAN_No,password, error, success } = values;

    const handleChangeInput = (name: string) => (e: { target: { value: any; }; }) => {
        setValues({ ...values, error: '', [name]: e.target.value })
    }

    const handleSubmit = (e: any) => {
        e.preventDefault();
        setValues({ ...values, error: '' });
        const individual = { PAN_No,  password };


        signin(individual).then(data => {

            if (data.error) {
                setValues({ ...values, error: data.error});
                setLoading(false);

            } else {
                // setValues({
                //     PAN_No: '',
                //     password: '',
                //     error: '',
                //     success: data.message
                // })
                authenticate(data, () => {
                    if (data.user.role === 'Company'){
                        router.push('/company/dashboard');
                    }else {
                        router.push('/citizen/dashboard');
                    }
                    setLoading(false);
                    console.log(data);
                })
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
                            Login
                        </button>
                    </motion.div>
                    {error && (
                        <motion.p
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-red-500 font-bold text-sm flex items-center gap-1"
                        >
                            <AlertCircle className="w-4 h-4" />
                            {error}
                        </motion.p>
                    )}
                    {success && (
                        <motion.p
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-green-500 text-sm flex font-bold items-center gap-1"
                        >
                            <AlertCircle className="w-4 h-4" />
                            {success}
                        </motion.p>
                    )}
                </form>
            </motion.div>
        </div>
    );
};

export default LoginForm;
