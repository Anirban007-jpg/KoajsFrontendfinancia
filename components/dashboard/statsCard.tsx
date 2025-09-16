"use client";

import { motion } from "framer-motion";
import { DivideIcon as LucideIcon } from "lucide-react";
import { Card } from "@/components/ui/card";

interface StatsCardProps {
  title: string;
  value: string;
  change: string;
  trend: "up" | "down";
  icon: typeof LucideIcon;
  color: string;
  index: number;
}

export function StatsCard({
  title,
  value,
  change,
  trend,
  icon: Icon,
  color,
  index,
}: StatsCardProps) {
  const colorVariants = {
    blue: "from-blue-500 to-blue-600",
    green: "from-green-500 to-green-600", 
    purple: "from-purple-500 to-purple-600",
    orange: "from-orange-500 to-orange-600",
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
    >
      <Card className="p-6 bg-white/80 backdrop-blur-sm border-gray-200/50 dark:bg-gray-900/80 dark:border-gray-800/50 hover:shadow-lg transition-all duration-300">
        <div className="flex items-center justify-between">
          <div className="flex-1">
            <p className="text-sm font-medium text-gray-600 dark:text-gray-400">
              {title}
            </p>
            <motion.p
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ delay: index * 0.1 + 0.2 }}
              className="text-3xl font-bold text-gray-900 dark:text-white mt-2"
            >
              {value}
            </motion.p>
            <div className="flex items-center mt-2">
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: index * 0.1 + 0.3 }}
                className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                  trend === "up"
                    ? "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400"
                    : "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400"
                }`}
              >
                {trend === "up" ? "↗" : "↘"} {change}
              </motion.span>
            </div>
          </div>
          <motion.div
            initial={{ rotate: -180, opacity: 0 }}
            animate={{ rotate: 0, opacity: 1 }}
            transition={{ delay: index * 0.1 + 0.1, duration: 0.5 }}
            className={`p-3 rounded-xl bg-gradient-to-br ${colorVariants[color as keyof typeof colorVariants]} shadow-lg`}
          >
            <Icon className="w-6 h-6 text-white" />
          </motion.div>
        </div>
      </Card>
    </motion.div>
  );
}