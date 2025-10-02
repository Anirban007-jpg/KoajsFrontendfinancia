"use client";

import { motion } from "framer-motion";
import { Bell, Search, Menu, LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useEffect } from "react";
import { isAuth, signout } from "@/actions/auth";
import { useRouter } from "next/navigation";
import { useIdleTimer } from "react-idle-timer";

interface DashboardHeaderProps {
  onMobileMenuToggle: () => void;
}

export function DashboardHeader({ onMobileMenuToggle }: DashboardHeaderProps) {
  
  const router = useRouter();



  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="sticky top-0 z-30 flex items-center justify-between px-6 py-4 bg-white/80 backdrop-blur-xl border-b border-gray-200/50 dark:bg-gray-950/80 dark:border-gray-800/50"
    >
      <div className="flex items-center space-x-4">
        <Button
          variant="ghost"
          size="sm"
          onClick={onMobileMenuToggle}
          className="lg:hidden p-2"
        >
          <Menu className="w-5 h-5" />
        </Button>
        
        <div className="hidden sm:block">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
            {isAuth() && isAuth().role === 'Company' ? isAuth().Name: `Welcome Back ${isAuth().Name}`}
          </h1>
          <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
            Here's what's happening with your financials today.
          </p>
        </div>
      </div>

      <div className="flex items-center space-x-4">
        <div className="hidden md:block relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
          <Input
            type="text"
            placeholder="Search..."
            className="pl-10 w-64 bg-gray-50/50 dark:bg-gray-800/50 border-gray-200/50 dark:border-gray-700/50"
          />
        </div>
        
        {/* <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Button variant="ghost" size="sm" className="relative p-2">
            <Bell className="w-5 h-5" />
            <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full text-xs flex items-center justify-center">
              <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
            </span>
          </Button>
        </motion.div> */}
        
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center cursor-pointer"
        >
          <span className="text-white text-sm font-medium">{isAuth().Initials}</span>

        </motion.div>
        <span className="text-black text-lg font-bold  cursor-pointer" onClick={() => signout(() => router.push("/"))}><LogOut></LogOut></span>
      </div>
    </motion.header>
  );
}

