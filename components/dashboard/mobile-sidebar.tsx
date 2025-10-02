"use client";

import { Fragment } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Home,
  BarChart3,
  Users,
  Settings,
  Bell,
  Calendar,
  FolderOpen,
  X,
} from "lucide-react";
import { cn } from "@/lib/utils";

interface MobileSidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const navigation = [
  { name: "Dashboard", href: "/company/dashboard", icon: Home, current: true },
  { name: "Ledger", href: "/company/ledger", icon: BarChart3, current: false },

];

export function MobileSidebar({ isOpen, onClose }: MobileSidebarProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden"
          />

          {/* Sidebar */}
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ type: "spring", bounce: 0, duration: 0.4 }}
            className="fixed inset-y-0 left-0 z-50 w-80 bg-gradient-to-b from-white/95 via-white/90 to-slate-50/95 backdrop-blur-xl border-r border-gray-200/50 shadow-2xl dark:from-gray-950/95 dark:via-gray-900/90 dark:to-gray-950/95 dark:border-gray-800/50 lg:hidden overflow-hidden"
          >
            {/* Mobile Sidebar Background Pattern */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.03),transparent_50%)] dark:bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.08),transparent_50%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(139,92,246,0.02),transparent_50%)] dark:bg-[radial-gradient(circle_at_70%_80%,rgba(139,92,246,0.06),transparent_50%)]" />
            
            {/* Header */}
            <div className="relative z-10 flex items-center justify-between p-6 border-b border-gray-200/50 dark:border-gray-800/50 bg-white/20 dark:bg-gray-900/20 backdrop-blur-sm">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                  <BarChart3 className="w-4 h-4 text-white" />
                </div>
                <h1 className="font-bold text-xl text-gray-900 dark:text-white">
                  Dashboard
                </h1>
              </div>
              
              <button
                onClick={onClose}
                className="p-2 hover:bg-white/50 dark:hover:bg-gray-800/50 rounded-lg transition-colors"
              >
                <X className="w-5 h-5 text-gray-500 dark:text-gray-400" />
              </button>
            </div>

            {/* Navigation */}
            <nav className="relative z-10 flex-1 px-4 py-6 space-y-2 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300/50 scrollbar-track-transparent dark:scrollbar-thumb-gray-600/50 hover:scrollbar-thumb-gray-400/70 dark:hover:scrollbar-thumb-gray-500/70">
              {navigation.map((item, index) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                  onClick={onClose}
                  className={cn(
                    "group flex items-center px-3 py-3 text-sm font-medium rounded-xl transition-all duration-200",
                    item.current
                      ? "bg-gradient-to-r from-blue-500/15 to-purple-500/15 text-blue-600 dark:text-blue-400 border border-blue-500/30 shadow-sm"
                      : "text-gray-600 hover:text-gray-900 hover:bg-white/60 dark:text-gray-400 dark:hover:text-gray-100 dark:hover:bg-gray-800/60 hover:shadow-sm"
                  )}
                >
                  <item.icon
                    className={cn(
                      "flex-shrink-0 w-5 h-5 mr-3 transition-colors",
                      item.current ? "text-blue-600 dark:text-blue-400" : ""
                    )}
                  />
                  {item.name}
                  {item.current && (
                    <div className="ml-auto w-2 h-2 bg-blue-500 rounded-full" />
                  )}
                </motion.a>
              ))}
            </nav>

            {/* User Profile */}
            <div className="relative z-10 p-4 border-t border-gray-200/50 dark:border-gray-800/50 bg-white/20 dark:bg-gray-900/20 backdrop-blur-sm">
              <div className="flex items-center p-3 bg-white/60 dark:bg-gray-800/60 rounded-xl hover:bg-white/80 dark:hover:bg-gray-800/80 transition-colors shadow-sm">
                <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-green-400 to-blue-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-sm font-medium">JD</span>
                </div>
                <div className="ml-3 min-w-0 flex-1">
                  <p className="text-sm font-medium text-gray-900 dark:text-white truncate">
                    John Doe
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-400 truncate">
                    john@example.com
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}