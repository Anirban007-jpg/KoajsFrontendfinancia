'use client'
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Users, TrendingUp, DollarSign, Activity } from "lucide-react";
import { Sidebar } from "../../dashboard/sidebar";
import { MobileSidebar } from "../../dashboard/mobile-sidebar";
import { DashboardHeader } from "../../dashboard/dashboardheader";
import { StatsCard } from "../../dashboard/statsCard";
import { ChartCard } from "../../dashboard/ChartCard";
import { ActivityFeed } from "../../dashboard/Activityfeed";
import { isAuth, signout } from "@/actions/auth";
import { usePathname, useRouter } from "next/navigation";
import { useIdleTimer } from 'react-idle-timer';

import AnimatedFormDesign from "../../Forms/AnimatedFormDesign";
import LedgerContent from "../Ledger/LedgerContent";

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



export default function Common({ children }: { children: React.ReactNode }) {
    const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
    const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);


    const router = useRouter();
    const url = usePathname();

    useEffect(() => {
        if (!isAuth()) {
            router.push('/register');
        } else if (isAuth() && isAuth().role === 'Company' && (url === '/citizen/ledger' || url === '/citizen/debtor' || url === '/citizen/creditor' || url === '/citizen/asset')) {
            router.push('/company/dashboard');
        } else if (isAuth() && isAuth().role === 'Citizen' && (url === '/company/ledger' || url === '/company/debtor' || url === '/company/creditor' || url === '/company/asset')) {
            router.push('/citizen/dashboard');
        }
    })

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
        // console.log('user did something', event)
    }

    const { getRemainingTime, getLastActiveTime } = useIdleTimer({
        timeout: 1000 * 60 * 10,
        onIdle: handleOnIdle,
        onActive: handleOnActive,
        onAction: handleOnAction,
        debounce: 500
    })
    
    const [hydrated, setHydrated] = useState(false);
    useEffect(() => {
        setHydrated(true);
    }, []);
    if (!hydrated) {
        // Returns null on first render, so the client and server match
        return null;
    }


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
                className={`relative z-10 lg:transition-all lg:duration-300 ${sidebarCollapsed ? "lg:ml-20" : "lg:ml-72"
                    }`}
            >
                {/* Header */}
                <DashboardHeader
                    onMobileMenuToggle={() => setMobileSidebarOpen(true)}
                />

                {/* Dashboard Content */}
                    {children}
            </div>
        </div>
    );
}