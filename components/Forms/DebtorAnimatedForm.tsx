"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
// import { useRouter } from "next/navigation";
import { getCookie, isAuth, signout } from "@/actions/auth";
// import { useIdleTimer } from "react-idle-timer";
import { AlertCircle } from "lucide-react";
// import { createLedger, getSpecificLedger } from "@/actions/ledger";
import { createDebtor, updateDebtor } from "@/actions/debtor";
import { toast } from "react-toastify";
// import math from "mathjs";



export default function DebotrAnimatedFormDesign() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    // const [isSubmitted, setIsSubmitted] = useState(false);
    const [values, setValues] = useState({
        Debtor_name: '',
        Debtor_address: '',
        Debtor_contact_no: '',
        Debtor_email: '',
        Debtor_balance: 0,
        error: '',
        success: '',
    })

    const {
        Debtor_name,
        Debtor_address,
        Debtor_contact_no,
        Debtor_email,
        Debtor_balance,
        error,
        success 
    } = values;

    const token = getCookie('token');
    const [Ledger, setLedger] = useState("");
    // console.log(token)

    const handleChangeInput = (name: string) => (e: { target: { value: any; }; }) => {
        setValues({ ...values, error: '', [name]: e.target.value })
    }

    // useEffect(() => {
    //     getSpecificLedger(token).then(data => {setLedger(data.ledgers[0])});
    //     // if (Ledger.Current_Balance !==)
    // },[])

    const handleClick = (e:any) => {
        e.preventDefault();
        setIsSubmitting(true);
        updateDebtor(token).then(data => {setValues({...values, error: '', success: data.message}), setIsSubmitting(false);});
        
    }

    const handleSubmit = (e: any) => {
        e.preventDefault();
        setValues({ ...values, error: '' });
        const debtor = {
            Debtor_name,
            Debtor_address,
            Debtor_contact_no,
            Debtor_email,
            Debtor_balance,
              
        }
        setIsSubmitting(true);

        createDebtor(debtor, token).then(data => {
            if (data.details) {
                setValues({ ...values, error: JSON.stringify(data.details[0]) });
                setIsSubmitting(false);
                // console.log(data.details[0]);
            } else {
                setValues({
                    Debtor_name: '',
                    Debtor_address: '',
                    Debtor_contact_no: '',
                    Debtor_email: '',
                    Debtor_balance: 0,
                    error: '',
                    success: data.message
                })
                setIsSubmitting(false);
                // console.log(data);

            }
        })


    }
   

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
                    Create Your Debtor
                </motion.h1>

                <motion.p
                    variants={itemVariants}
                    className="text-white/80 text-center mb-8"
                >
                    Fill out the form below and Debtor will be created shortly
                </motion.p>

                <form onSubmit={handleSubmit} className="space-y-6">
                    <motion.div variants={itemVariants}>
                        <label

                            className="block text-white font-medium mb-2"
                        >
                            Debtor Name
                        </label>
                        <motion.input
                            whileFocus={{ scale: 1.02 }}
                            transition={{ duration: 0.2 }}
                            value={Debtor_name}
                            onChange={handleChangeInput("Debtor_name")}
                            type="text"
                            className="w-full px-4 py-3 rounded-xl bg-white/20 border border-white/30 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent transition-all"

                        />

                    </motion.div>

                    <motion.div variants={itemVariants} className="grid md:grid-cols-1 gap-6">
                        <div>
                            <label

                                className="block text-white font-medium mb-2"
                            >
                                Debtor Address
                            </label>
                            <motion.textarea
                                whileFocus={{ scale: 1.02 }}
                                transition={{ duration: 0.2 }}
                                rows={3}
                                value={Debtor_address}
                                onChange={handleChangeInput("Debtor_address")}
                                className="w-full px-4 py-3 rounded-xl bg-white/20 border border-white/30 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent transition-all"

                            />

                        </div>

                        <motion.div variants={itemVariants}>
                            <label

                                className="block text-white font-medium mb-2"
                            >
                                Debtor Contact No
                            </label>
                            <motion.input
                                whileFocus={{ scale: 1.02 }}
                                transition={{ duration: 0.2 }}
                                type="text"
                                value={Debtor_contact_no}
                                onChange={handleChangeInput("Debtor_contact_no")}

                                className="w-full px-4 py-3 rounded-xl bg-white/20 border border-white/30 text-black placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent transition-all"

                            >
                                
                            </motion.input>

                        </motion.div>
                    </motion.div>

                    <motion.div variants={itemVariants}>
                        <label

                            className="block text-white font-medium mb-2"
                        >
                            Debtor Email
                        </label>
                        <motion.input
                            whileFocus={{ scale: 1.02 }}
                            transition={{ duration: 0.2 }}

                            type="email"
                            value={Debtor_email}
                            onChange={handleChangeInput("Debtor_email")}
                            className="w-full px-4 py-3 rounded-xl bg-white/20 border border-white/30 text-black placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent transition-all"
                    
                        >
                           
                        </motion.input>


                    </motion.div>

                    <motion.div variants={itemVariants}>
                        <label

                            className="block text-white font-medium mb-2"
                        >
                            Debtor Balance
                        </label>
                        <motion.input
                            whileFocus={{ scale: 1.02 }}
                            transition={{ duration: 0.2 }}
                            value={Debtor_balance}
                            onChange={handleChangeInput("Debtor_balance")}
                            type="number"
                            className="w-full px-4 py-3 rounded-xl bg-white/20 border border-white/30 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent transition-all resize-none"

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
                                    Creating Debtor
                                </motion.div>
                            ) : (
                                "Create Debtor"
                            )}
                        </motion.button>
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            type="submit"
                            onClick={handleClick}
                            disabled={isSubmitting}
                            className={`w-full py-4 px-6 gap-6 my-6 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-50`}
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
                                    Updating Debtor Ledger
                                </motion.div>
                            ) : (
                                "Update Debtor Ledger"
                            )}
                        </motion.button>
                        {error && (
                            <>
                  
                               {toast(error, {type: "error", toastId: 'SOME ERROR OCCURED!'})}
                             
                               
                            </>
                        )}
                        {success && (
                            <>
    
                                {toast(success, {type: "success",  toastId:'EVENT COMPLETED'})}
                              
                            </>
                          
                        )}

                    </motion.div>

                </form>

            </motion.div>
        </motion.div>
    );
}