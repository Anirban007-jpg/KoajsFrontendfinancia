'use client'

import { motion } from "framer-motion";
// import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table'
import { format, isSameDay } from "date-fns";
import DataTable from 'react-data-table-component'
import { useState, useMemo } from 'react';
import { ArrowUpDown, ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from '@/components/ui/table';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';
import { CardBody, CardContainer, CardItem } from "@/components/ui/shadcn-io/3d-card";
// import { Product } from '@/lib/mock-data';




export default function LedgerDisplay({ array }: any) {

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

        <main className="min-h-screen relative overflow-hidden bg-gradient-to-branimate-gradient">
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float"></div>
                <div className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float" style={{ animationDelay: '2s' }}></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80  rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float" style={{ animationDelay: '4s' }}></div>
            </div>
            <div className="relative z-10 flex items-center justify-center min-h-screen p-4">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="w-full max-w-2xl"

                >

                    <motion.h1
                        variants={itemVariants}
                        className="text-4xl md:text-5xl font-bold text-black underline mb-10 text-center"
                    >
                        List of Ledgers Created
                    </motion.h1>
                    <motion.div
                        className="backdrop-blur-lg bg-transparent rounded-3xl shadow-2xl p-8 md:p-12 border border-transparent"
                        whileHover={{ scale: 1.01 }}
                        transition={{ duration: 0.3 }}
                    >

                        {array.map((item: any, index: Number) => {
                            let date = item.Opening_Balance_Date;
                            return (
                                <CardContainer className="inter-var backdrop-blur-lg bg-white/10 rounded-3xl shadow-2xl p-8 md:p-12 border border-white/20" containerClassName="py-8">
                                    <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[24rem] h-auto rounded-xl p-4 border">

                                        <CardItem translateZ="100" key={item._id} className="w-full text-sm mt-4">
                                            <motion.div
                                                className=""
                                                whileHover={{ scale: 1.01 }}
                                                transition={{ duration: 0.3 }}
                                            >
                                                <motion.p
                                                    whileHover={{ scale: 1.01 }}
                                                    transition={{ duration: 0.3 }}
                                                    className="">
                                                    <div className="text-0.02xl font-bold text-center">
                                                        Ledger Name  :  {item.Ledger_Name}
                                                    </div>
                                                </motion.p>
                                            </motion.div>
                                            <motion.div
                                                className=""
                                                whileHover={{ scale: 1.01 }}
                                                transition={{ duration: 0.3 }}
                                            >
                                                <motion.p
                                                    whileHover={{ scale: 1.01 }}
                                                    transition={{ duration: 0.3 }}
                                                    className="">
                                                    <div className="text-0.02xl font-bold text-center">
                                                        Opening Balance  : {item.Currency} {item.Opening_Balance}
                                                    </div>
                                                </motion.p>
                                            </motion.div>
                                            <motion.div
                                                className=""
                                                whileHover={{ scale: 1.01 }}
                                                transition={{ duration: 0.3 }}
                                            >
                                                <motion.p
                                                    whileHover={{ scale: 1.01 }}
                                                    transition={{ duration: 0.3 }}
                                                    className="">
                                                    <div className="text-0.02xl font-bold text-center">
                                                        Ledger Name  :  {item.Ledger_Name}
                                                    </div>
                                                </motion.p>
                                            </motion.div>
                                            <motion.div
                                                className=""
                                                whileHover={{ scale: 1.01 }}
                                                transition={{ duration: 0.3 }}
                                            >
                                                <motion.p
                                                    whileHover={{ scale: 1.01 }}
                                                    transition={{ duration: 0.3 }}
                                                    className="">
                                                    <div className="text-0.02xl font-bold text-center">
                                                        Opening Balance Date  :  {format(date, 'dd-MM-yyyy')}
                                                    </div>
                                                </motion.p>
                                            </motion.div>
                                            <motion.div
                                                className=""
                                                whileHover={{ scale: 1.01 }}
                                                transition={{ duration: 0.3 }}
                                            >
                                                <motion.p
                                                    whileHover={{ scale: 1.01 }}
                                                    transition={{ duration: 0.3 }}
                                                    className="">
                                                    <div className="text-sm font-bold text-center">
                                                        Current Balance  :  {item.Currency} {item.Current_Balance}
                                                    </div>
                                                </motion.p>
                                            </motion.div>
                                            <motion.div
                                                className=""
                                                whileHover={{ scale: 1.01 }}
                                                transition={{ duration: 0.3 }}
                                            >
                                                <motion.p
                                                    whileHover={{ scale: 1.01 }}
                                                    transition={{ duration: 0.3 }}
                                                    className="">
                                                    <div className="text-sm font-bold text-center">
                                                        Balance Sheet Item  :  {item.BS_Type_Item}
                                                    </div>
                                                </motion.p>
                                            </motion.div>
                                            <motion.div
                                                className=""
                                                whileHover={{ scale: 1.01 }}
                                                transition={{ duration: 0.3 }}
                                            >
                                                <motion.p
                                                    whileHover={{ scale: 1.01 }}
                                                    transition={{ duration: 0.3 }}
                                                    className="">
                                                    <div className="text-0.02xl font-bold text-center">
                                                        Profit & Loss Item : {item.PL_Type_Item == 'Null' ? 'N/A' : item.PL_Type_Item}
                                                    </div>
                                                </motion.p>
                                            </motion.div>
                                            <motion.div
                                                className=""
                                                whileHover={{ scale: 1.01 }}
                                                transition={{ duration: 0.3 }}
                                            >
                                                <motion.p
                                                    whileHover={{ scale: 1.01 }}
                                                    transition={{ duration: 0.3 }}
                                                    className="">
                                                    <div className="text-0.02xl font-bold text-center">
                                                        Ledger Type  :  {item.type_of_ledger}
                                                    </div>
                                                </motion.p>
                                            </motion.div>
                                            <motion.div
                                                className=""
                                                whileHover={{ scale: 1.01 }}
                                                transition={{ duration: 0.3 }}
                                            >
                                                <motion.p
                                                    whileHover={{ scale: 1.01 }}
                                                    transition={{ duration: 0.3 }}
                                                    className="">
                                                    <div className="text-0.02xl font-bold text-center">
                                                        Ledger Type Balance  :  {item.balance_type}
                                                    </div>
                                                </motion.p>
                                            </motion.div>





                                        </CardItem><hr className="font-extrabold mt-4 mb-4"/>
                                        <CardItem translateZ="100" key={item._id} className="w-full mt-8">
                                            {item.Debtors.length > 0 ? <motion.div
                                                className=""
                                                whileHover={{ scale: 1.01 }}
                                                transition={{ duration: 0.3 }}
                                            >
                                                <motion.p
                                                    whileHover={{ scale: 1.01 }}
                                                    transition={{ duration: 0.3 }}
                                                    className="">
                                                    <div className="text-0.02xl font-bold text-center">
                                                        <h1 className="font-serif underline font-extrabold text-blue-800">Details of Debtors :</h1>    {item.Debtors.map((subitem: any, index: Number) => {
                                                            return (
                                                                <CardItem translateZ="100" key={subitem._id} className="w-full mt-4">
                                                                    <motion.div
                                                                        className="font-mono font-extrabold text-blue-700"
                                                                        whileHover={{ scale: 1.01 }}
                                                                        transition={{ duration: 0.3 }}
                                                                    >
                                                                        <motion.p
                                                                            whileHover={{ scale: 1.01 }}
                                                                            transition={{ duration: 0.3 }}
                                                                            className="">
                                                                            <div className="text-0.02xl font-bold text-center">
                                                                                Debtor Name  :  {subitem.Debtor_name}
                                                                            </div>
                                                                        </motion.p>
                                                                    </motion.div>
                                                                    <motion.div
                                                                        className="font-mono font-extrabold text-blue-700"
                                                                        whileHover={{ scale: 1.01 }}
                                                                        transition={{ duration: 0.3 }}
                                                                    >
                                                                        <motion.p
                                                                            whileHover={{ scale: 1.01 }}
                                                                            transition={{ duration: 0.3 }}
                                                                            className="">
                                                                            <div className="text-sm font-extrabold text-center">
                                                                                Debtor Address  :  {subitem.Debtor_address}

                                                                            </div>
                                                                        </motion.p>
                                                                    </motion.div>
                                                                    <motion.div
                                                                        className="font-mono font-extrabold text-blue-700"
                                                                        whileHover={{ scale: 1.01 }}
                                                                        transition={{ duration: 0.3 }}
                                                                    >
                                                                        <motion.p
                                                                            whileHover={{ scale: 1.01 }}
                                                                            transition={{ duration: 0.3 }}
                                                                            className="">
                                                                            <div className="text-0.02xl font-bold text-center">
                                                                                Debtor Contact No  :  {subitem.Debtor_contact_no}
                                                                            </div>
                                                                        </motion.p>
                                                                    </motion.div>
                                                                    <motion.div
                                                                        className="font-mono font-extrabold text-blue-700"
                                                                        whileHover={{ scale: 1.01 }}
                                                                        transition={{ duration: 0.3 }}
                                                                    >
                                                                        <motion.p
                                                                            whileHover={{ scale: 1.01 }}
                                                                            transition={{ duration: 0.3 }}
                                                                            className="">
                                                                            <div className="text-0.02xl font-bold text-center">
                                                                                Debtor Email  :  {subitem.Debtor_email}
                                                                            </div>
                                                                        </motion.p>
                                                                    </motion.div>
                                                                    <motion.div
                                                                        className="font-mono font-extrabold text-blue-700"
                                                                        whileHover={{ scale: 1.01 }}
                                                                        transition={{ duration: 0.3 }}
                                                                    >
                                                                        <motion.p
                                                                            whileHover={{ scale: 1.01 }}
                                                                            transition={{ duration: 0.3 }}
                                                                            className="">
                                                                            <div className="text-0.02xl font-bold text-center">
                                                                                Debtor Balance  : {subitem.Debtor_Currency} {subitem.Debtor_balance}
                                                                            </div>
                                                                        </motion.p>
                                                                    </motion.div>
                                                                </CardItem>
                                                            )
                                                        })}
                                                    </div>
                                                </motion.p>
                                            </motion.div> : null}
                                            {item.Creditors.length > 0 ? <motion.div
                                                className=""
                                                whileHover={{ scale: 1.01 }}
                                                transition={{ duration: 0.3 }}
                                            >
                                                <motion.p
                                                    whileHover={{ scale: 1.01 }}
                                                    transition={{ duration: 0.3 }}
                                                    className="">
                                                    <div className="text-0.02xl font-bold text-center">
                                                        <h1 className="font-serif underline font-extrabold text-blue-800">Details of Creditors  : </h1> {item.Creditors.map((subitem: any, index: Number) => {
                                                            return (
                                                                <CardItem translateZ="100" key={subitem._id} className="w-full mt-4">
                                                                    <motion.div
                                                                        className="font-mono font-extrabold text-blue-700"
                                                                        whileHover={{ scale: 1.01 }}
                                                                        transition={{ duration: 0.3 }}
                                                                    >
                                                                        <motion.p
                                                                            whileHover={{ scale: 1.01 }}
                                                                            transition={{ duration: 0.3 }}
                                                                            className="">
                                                                            <div className="text-0.02xl font-bold text-center">
                                                                                Creditor Name  :  {subitem.Creditor_name}
                                                                            </div>
                                                                        </motion.p>
                                                                    </motion.div>
                                                                    <motion.div
                                                                        className="font-mono font-extrabold text-blue-700"
                                                                        whileHover={{ scale: 1.01 }}
                                                                        transition={{ duration: 0.3 }}
                                                                    >
                                                                        <motion.p
                                                                            whileHover={{ scale: 1.01 }}
                                                                            transition={{ duration: 0.3 }}
                                                                            className="">
                                                                            <div className="text-sm font-extrabold text-center">
                                                                                Creditor Address  :  {subitem.Creditor_address}

                                                                            </div>
                                                                        </motion.p>
                                                                    </motion.div>
                                                                    <motion.div
                                                                        className="font-mono font-extrabold text-blue-700"
                                                                        whileHover={{ scale: 1.01 }}
                                                                        transition={{ duration: 0.3 }}
                                                                    >
                                                                        <motion.p
                                                                            whileHover={{ scale: 1.01 }}
                                                                            transition={{ duration: 0.3 }}
                                                                            className="">
                                                                            <div className="text-0.02xl font-bold text-center">
                                                                                Creditor Contact No  :  {subitem.Creditor_contact_no}
                                                                            </div>
                                                                        </motion.p>
                                                                    </motion.div>
                                                                    <motion.div
                                                                        className="font-mono font-extrabold text-blue-700"
                                                                        whileHover={{ scale: 1.01 }}
                                                                        transition={{ duration: 0.3 }}
                                                                    >
                                                                        <motion.p
                                                                            whileHover={{ scale: 1.01 }}
                                                                            transition={{ duration: 0.3 }}
                                                                            className="">
                                                                            <div className="text-0.02xl font-bold text-center">
                                                                                Creditor Email  :  {subitem.Creditor_email}
                                                                            </div>
                                                                        </motion.p>
                                                                    </motion.div>
                                                                    <motion.div
                                                                        className="font-mono font-extrabold text-blue-700"
                                                                        whileHover={{ scale: 1.01 }}
                                                                        transition={{ duration: 0.3 }}
                                                                    >
                                                                        <motion.p
                                                                            whileHover={{ scale: 1.01 }}
                                                                            transition={{ duration: 0.3 }}
                                                                            className="">
                                                                            <div className="text-0.02xl font-bold text-center">
                                                                                Creditor Balance  : {subitem.Creditor_Currency} {subitem.Creditor_Balance}
                                                                            </div>
                                                                        </motion.p>
                                                                    </motion.div>
                                                                </CardItem>
                                                            )
                                                        })}
                                                    </div>
                                                </motion.p>
                                            </motion.div> : null}
                                        </CardItem>
                                        <div className="flex justify-between items-center mt-16">

                                            <CardItem
                                                translateZ={20}
                                                as="a"
                                                href="https://twitter.com/mannupaaji"
                                                target="__blank"
                                                className="px-4 py-2 rounded-xl text-xs bg-blue-400 font-normal dark:text-white"
                                            >
                                                Edit
                                            </CardItem>
                                            <CardItem
                                                translateZ={20}
                                                as="button"
                                                className="px-4 py-2 rounded-xl bg-red-500 dark:bg-white dark:text-black text-white text-xs font-bold"
                                            >
                                                Delete
                                            </CardItem>
                                        </div>
                                    </CardBody>
                                </CardContainer>
                            )
                        })}
                    </motion.div>
                </motion.div>

            </div>
        </main>
    )
}