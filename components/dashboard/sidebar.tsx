"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Home,
  BarChart3,
  Users,
  Settings,
  Bell,
  Calendar,
  FolderOpen,
  ChevronLeft,
  ChevronRight,
  Menu,
  Book,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { isAuth } from "@/actions/auth";
import { usePathname } from "next/navigation";
// import { Ledger } from "next/font/google";

interface SidebarProps {
  collapsed: boolean;
  onToggle: () => void;
  className?: string;
}

const navigation = [
  { name: "Dashboard", href: "/company/dashboard", icon: Home, current: true },
  { name: "Ledger", href: "/company/ledger", icon:Book, current: true },
  { name: "Display Ledgers", href: "/company/ledger/display", icon:Book, current: true },
  { name: "Debtor Management" , href: "/company/debtor", icon:Book, current: true },
  { name: "Creditor Management", href: "/company/creditor", icon:Book, current: true },
  { name: "Asset Management", href: "/company/asset", icon:Book, current: true },
 

];


export function Sidebar({ collapsed, onToggle, className }: SidebarProps) {

  const url = usePathname();
  // console.log(url);

  return (
    <motion.div
      initial={false}
      animate={{
        width: collapsed ? "80px" : "280px",
      }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className={cn(
        "relative flex flex-col h-screen overflow-hidden",
        "bg-gradient-to-b from-white/95 via-white/90 to-slate-50/95 backdrop-blur-xl",
        "border-r border-gray-200/50 shadow-xl",
        "dark:from-gray-950/95 dark:via-gray-900/90 dark:to-gray-950/95 dark:border-gray-800/50",
        className
      )}
    >
      {/* Sidebar Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.03),transparent_50%)] dark:bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.08),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(139,92,246,0.02),transparent_50%)] dark:bg-[radial-gradient(circle_at_70%_80%,rgba(139,92,246,0.06),transparent_50%)]" />
      
      {/* Header */}
      <div className="relative z-10 flex items-center justify-between p-6 border-b border-gray-200/50 dark:border-gray-800/50 bg-white/20 dark:bg-gray-900/20 backdrop-blur-sm">
        <AnimatePresence mode="wait">
          {!collapsed && (
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.2 }}
              className="flex items-center space-x-3"
            >
              <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <BarChart3 className="w-4 h-4 text-white" />
              </div>
              <h1 className="font-bold text-xl text-gray-900 dark:text-white">
                Dashboard
              </h1>
            </motion.div>
          )}
        </AnimatePresence>
        
        <Button
          variant="ghost"
          size="sm"
          onClick={onToggle}
          className="p-2 hover:bg-white/50 dark:hover:bg-gray-800/50 rounded-lg transition-colors"
        >
          {collapsed ? (
            <ChevronRight className="w-4 h-4" />
          ) : (
            <ChevronLeft className="w-4 h-4" />
          )}
        </Button>
      </div>

      {/* Navigation */}
      <nav className="relative z-10 flex-1 px-4 py-6 space-y-2 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300/50 scrollbar-track-transparent dark:scrollbar-thumb-gray-600/50 hover:scrollbar-thumb-gray-400/70 dark:hover:scrollbar-thumb-gray-500/70">
        {navigation.map((item) => (
          <motion.a
            key={item.name}
            href={item.href}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className={cn(
              "group flex items-center px-3 py-3 text-sm font-medium rounded-xl transition-all duration-200",
            item.current
                ? `${url === item.href ? `bg-blue-100` : `` } text-blue-600 dark:text-blue-400 border border-blue-500/30 shadow-sm`
                : "text-gray-600 hover:text-gray-900 hover:bg-white/60 dark:text-gray-400 dark:hover:text-gray-100 dark:hover:bg-gray-800/60 hover:shadow-sm"
            )}
          >
            <item.icon
              className={cn(
                "flex-shrink-0 w-5 h-5 transition-colors",
                item.current ? "text-blue-600 dark:text-blue-400" : ""
              )}
            />
            <AnimatePresence>
              {!collapsed && (
                <motion.span
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -10 }}
                  transition={{ duration: 0.2 }}
                  className="ml-3 truncate"
                >
                  {item.name}
                </motion.span>
              )}
            </AnimatePresence>
            
            {item.current && !collapsed && (
              <motion.div
                layoutId="activeTab"
                className="ml-auto w-2 h-2 bg-blue-500 rounded-full"
                transition={{ duration: 0.2 }}
              />
            )}
          </motion.a>
        ))}
      </nav>

      {/* User Profile */}
      <div className="relative z-10 p-4 border-t border-gray-200/50 dark:border-gray-800/50 bg-white/20 dark:bg-gray-900/20 backdrop-blur-sm">
        <motion.div
          whileHover={{ scale: 1.02 }}
          className="flex items-center p-3 bg-white/60 dark:bg-gray-800/60 rounded-xl cursor-pointer hover:bg-white/80 dark:hover:bg-gray-800/80 transition-colors shadow-sm"
        >
          <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-green-400 to-blue-500 rounded-full flex items-center justify-center">
            <span className="text-white text-sm font-medium">{isAuth().Initials}</span>
          </div>
          <AnimatePresence>
            {!collapsed && (
              <motion.div
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -10 }}
                transition={{ duration: 0.2 }}
                className="ml-3 min-w-0 flex-1"
              >
                <p className="text-sm font-medium text-gray-900 dark:text-white truncate">
                  {isAuth().Name}
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-400 truncate">
                  {isAuth().Email}
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </motion.div>
  );
}