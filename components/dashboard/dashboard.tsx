'use client'
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Users, TrendingUp, DollarSign, Activity } from "lucide-react";
import { Sidebar } from "./sidebar";
import { MobileSidebar } from "./mobile-sidebar";
import { DashboardHeader } from "./dashboardheader";
import { StatsCard } from "./statsCard";
import { ChartCard } from "./ChartCard";
import { ActivityFeed } from "./Activityfeed";
import { isAuth } from "@/actions/auth";


const statsData = [
    {
      title: "Total Users",
      value: "12,543",
      change: "+12.5%",
      trend: "up" as const,
      icon: Users,
      color: "blue",
    },
    {
      title: "Revenue",
      value: "$45,231",
      change: "+18.3%",
      trend: "up" as const,
      icon: DollarSign,
      color: "green",
    },
    {
      title: "Growth Rate",
      value: "23.5%",
      change: "+5.2%",
      trend: "up" as const,
      icon: TrendingUp,
      color: "purple",
    },
    {
      title: "Active Sessions",
      value: "1,847",
      change: "-2.1%",
      trend: "down" as const,
      icon: Activity,
      color: "orange",
    },
  ];



export default function Dashboard() {
    const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
    const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);

  
  
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-100/50 dark:from-slate-950 dark:via-blue-950/20 dark:to-indigo-950/30 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.05),transparent_50%)] dark:bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(139,92,246,0.04),transparent_50%)] dark:bg-[radial-gradient(circle_at_80%_20%,rgba(139,92,246,0.08),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(16,185,129,0.04),transparent_50%)] dark:bg-[radial-gradient(circle_at_20%_80%,rgba(16,185,129,0.08),transparent_50%)]" />
        
        {/* Desktop Sidebar */}
        <div className="hidden lg:block relative z-10">
          <Sidebar
            collapsed={sidebarCollapsed}
            onToggle={() => setSidebarCollapsed(!sidebarCollapsed)}
            className="fixed inset-y-0 left-0 z-50"
          />
        </div>
  
        {/* Mobile Sidebar */}
        <MobileSidebar
          isOpen={mobileSidebarOpen}
          onClose={() => setMobileSidebarOpen(false)}
        />
  
        {/* Main Content */}
        <div
          className={`relative z-10 lg:transition-all lg:duration-300 ${
            sidebarCollapsed ? "lg:ml-20" : "lg:ml-72"
          }`}
        >
          {/* Header */}
          <DashboardHeader
            onMobileMenuToggle={() => setMobileSidebarOpen(true)}
          />
  
          {/* Dashboard Content */}
          <main className="p-6">
            {/* Stats Grid */}
            {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              {statsData.map((stat, index) => (
                <StatsCard key={stat.title} {...stat} index={index} />
              ))}
            </div> */}
  
            {/* Charts and Activity */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
              <div className="lg:col-span-2 space-y-6">
                <ChartCard
                  title="Revenue Overview"
                  data={[]}
                  type="area"
                  color="blue"
                  index={0}
                />
                <ChartCard
                  title="User Growth"
                  data={[]}
                  type="line"
                  color="green"
                  index={1}
                />
              </div>
              
              <div className="space-y-6">
                <ActivityFeed />
              </div>
            </div>
  
            {/* Additional Widgets */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="bg-white/80 backdrop-blur-sm border border-gray-200/50 dark:bg-gray-900/80 dark:border-gray-800/50 rounded-xl p-6 hover:shadow-lg transition-all duration-300"
              >
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                  Quick Actions
                </h3>
                <div className="space-y-3">
               
                </div>
              </motion.div>
  
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="bg-white/80 backdrop-blur-sm border border-gray-200/50 dark:bg-gray-900/80 dark:border-gray-800/50 rounded-xl p-6 hover:shadow-lg transition-all duration-300"
              >
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                  Recent 
                </h3>
                <div className="space-y-3">
                
                </div>
              </motion.div>
            </div>
          </main>
        </div>
      </div>
    );
  }