"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { getCookie, isAuth, signout } from "@/actions/auth";
import { useIdleTimer } from "react-idle-timer";
import { AlertCircle } from "lucide-react";
import { createLedger } from "@/actions/ledger";




export default function AssetAnimatedFormDesign() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [values, setValues] = useState({
        Ledger_Name: '',
        Opening_Balance: 0,
        type_of_ledger: '',
        balance_type: '',
        BS_Type_Item: '',
        PL_Type_Item: '',
        error: '',
        success: ''
    })

    const { Ledger_Name,
        Opening_Balance,
        type_of_ledger,
        balance_type,
        BS_Type_Item,
        PL_Type_Item,
        error,
        success } = values;

    const token = getCookie('token');
    // console.log(token)

    const handleChangeInput = (name: string) => (e: { target: { value: any; }; }) => {
        setValues({ ...values, error: '', [name]: e.target.value })
    }

    const handleSubmit = (e: any) => {
        e.preventDefault();
        setValues({ ...values, error: '' });
        const ledger = {
            Ledger_Name,
            Opening_Balance,
            type_of_ledger,
            balance_type,
            BS_Type_Item,
            PL_Type_Item
        }
        setIsSubmitting(true);

        createLedger(ledger, token).then(data => {
            if (data.details) {
                setValues({ ...values, error: JSON.stringify(data.details[0]) });
                setIsSubmitting(false);
                console.log(data.details[0]);
            } else {
                setValues({
                    Ledger_Name: '',
                    Opening_Balance: 0,
                    type_of_ledger: '',
                    balance_type: '',
                    BS_Type_Item: '',
                    PL_Type_Item: '',
                    error: '',
                    success: data.message
                })
                setIsSubmitting(false);
                console.log(data);

            }
        })


    }

    const router = useRouter()
    const handleOnIdle = (event: any) => {
        console.log('user is idle', event)
        console.log('last active', getLastActiveTime())
        signout(() => router.push('/'))
    }

    const handleOnActive = (event: any) => {
        // console.log('user is active', event)
        // console.log('time remaining', getRemainingTime())
    }

    const handleOnAction = (event: any) => {
        console.log('user did something', event)
        console.log('time remaining', getRemainingTime())
    }

    const { getRemainingTime, getLastActiveTime } = useIdleTimer({
        timeout: 1000 * 60 * 10,
        onIdle: handleOnIdle,
        onActive: handleOnActive,
        onAction: handleOnAction,
        debounce: 500
    })

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

                <form onSubmit={handleSubmit} className="space-y-6">
                    <motion.div variants={itemVariants}>
                        <label

                            className="block text-white font-medium mb-2"
                        >
                            Ledger A/C
                        </label>
                        <motion.input
                            whileFocus={{ scale: 1.02 }}
                            transition={{ duration: 0.2 }}
                            value={Ledger_Name}
                            onChange={handleChangeInput("Ledger_Name")}
                            type="text"
                            className="w-full px-4 py-3 rounded-xl bg-white/20 border border-white/30 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent transition-all"

                        />

                    </motion.div>

                    <motion.div variants={itemVariants} className="grid md:grid-cols-2 gap-6">
                        <div>
                            <label

                                className="block text-white font-medium mb-2"
                            >
                                Opening Balance
                            </label>
                            <motion.input
                                whileFocus={{ scale: 1.02 }}
                                transition={{ duration: 0.2 }}

                                type="number"
                                value={Opening_Balance}
                                onChange={handleChangeInput("Opening_Balance")}
                                className="w-full px-4 py-3 rounded-xl bg-white/20 border border-white/30 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent transition-all"

                            />

                        </div>

                        <motion.div variants={itemVariants}>
                            <label

                                className="block text-white font-medium mb-2"
                            >
                                Ledger Type
                            </label>
                            <motion.select
                                whileFocus={{ scale: 1.02 }}
                                transition={{ duration: 0.2 }}

                                value={type_of_ledger}
                                onChange={handleChangeInput("type_of_ledger")}

                                className="w-full px-4 py-3 rounded-xl bg-white/20 border border-white/30 text-black placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent transition-all"

                            >
                                <motion.option value="">Select</motion.option>
                                <motion.option value="Assets">Assets</motion.option>
                                <motion.option value="Liabilities">Liabilities</motion.option>
                            </motion.select>

                        </motion.div>
                    </motion.div>

                    <motion.div variants={itemVariants}>
                        <label

                            className="block text-white font-medium mb-2"
                        >
                            Ledger Balance Type
                        </label>
                        <motion.select
                            whileFocus={{ scale: 1.02 }}
                            transition={{ duration: 0.2 }}


                            value={balance_type}
                            onChange={handleChangeInput("balance_type")}
                            className="w-full px-4 py-3 rounded-xl bg-white/20 border border-white/30 text-black placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent transition-all"
                            placeholder="+1 234 567 8900"
                        >
                            <motion.option value="">Select</motion.option>
                            <motion.option value="Dr">Debit</motion.option>
                            <motion.option value="Cr">credit</motion.option>
                        </motion.select>


                    </motion.div>

                    <motion.div variants={itemVariants}>
                        <label

                            className="block text-white font-medium mb-2"
                        >
                            Balance Sheet Item Type
                        </label>
                        <motion.input
                            whileFocus={{ scale: 1.02 }}
                            transition={{ duration: 0.2 }}
                            value={BS_Type_Item}
                            onChange={handleChangeInput("BS_Type_Item")}
                            type="text"
                            className="w-full px-4 py-3 rounded-xl bg-white/20 border border-white/30 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent transition-all resize-none"

                        />


                    </motion.div>
                    <motion.div variants={itemVariants}>
                        <label

                            className="block text-white font-medium mb-2"
                        >
                            Profit & Loss Item Type
                        </label>
                        <motion.input
                            whileFocus={{ scale: 1.02 }}
                            transition={{ duration: 0.2 }}
                            type="text"
                            value={PL_Type_Item}
                            onChange={handleChangeInput("PL_Type_Item")}
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
                                    Creating Ledger
                                </motion.div>
                            ) : (
                                "Create Ledger"
                            )}
                        </motion.button>
                        {error && (
                            <motion.p
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="text-red-500 mt-6 font-bold text-sm flex items-center gap-1"
                            >
                                <AlertCircle className="w-4 h-4" />
                                {error}
                            </motion.p>
                        )}
                        {success && (
                            <motion.p
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="text-green-500 text-sm mt-6 flex font-bold items-center gap-1"
                            >
                                <AlertCircle className="w-4 h-4" />
                                {success}
                            </motion.p>
                        )}
                    </motion.div>

                </form>

            </motion.div>
        </motion.div>
    );
}
