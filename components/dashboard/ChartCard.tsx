"use client";

import { motion } from "framer-motion";
import {
  ResponsiveContainer,
  LineChart,
  Line,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface ChartCardProps {
  title: string;
  data: any[];
  type: "line" | "area";
  color: string;
  index: number;
}

const data = [
  { name: "Jan", value: 400, value2: 240 },
  { name: "Feb", value: 300, value2: 139 },
  { name: "Mar", value: 200, value2: 980 },
  { name: "Apr", value: 278, value2: 390 },
  { name: "May", value: 189, value2: 480 },
  { name: "Jun", value: 239, value2: 380 },
  { name: "Jul", value: 349, value2: 430 },
];

export function ChartCard({ title, type, color, index }: ChartCardProps) {
  const colorMap = {
    blue: "#3B82F6",
    green: "#10B981",
    purple: "#8B5CF6",
    orange: "#F97316",
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
    >
      <Card className="bg-white/80 backdrop-blur-sm border-gray-200/50 dark:bg-gray-900/80 dark:border-gray-800/50 hover:shadow-lg transition-all duration-300">
        <CardHeader className="pb-3">
          <CardTitle className="text-lg font-semibold text-gray-900 dark:text-white">
            {title}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              {type === "line" ? (
                <LineChart data={data}>
                  <CartesianGrid strokeDasharray="3 3" opacity={0.3} />
                  <XAxis 
                    dataKey="name" 
                    axisLine={false}
                    tickLine={false}
                    tick={{ fontSize: 12, fill: '#6B7280' }}
                  />
                  <YAxis 
                    axisLine={false}
                    tickLine={false}
                    tick={{ fontSize: 12, fill: '#6B7280' }}
                  />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: 'rgba(255, 255, 255, 0.95)',
                      border: 'none',
                      borderRadius: '8px',
                      boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
                    }}
                  />
                  <Line
                    type="monotone"
                    dataKey="value"
                    stroke={colorMap[color as keyof typeof colorMap]}
                    strokeWidth={3}
                    dot={false}
                    activeDot={{ r: 6, stroke: colorMap[color as keyof typeof colorMap] }}
                  />
                </LineChart>
              ) : (
                <AreaChart data={data}>
                  <CartesianGrid strokeDasharray="3 3" opacity={0.3} />
                  <XAxis 
                    dataKey="name" 
                    axisLine={false}
                    tickLine={false}
                    tick={{ fontSize: 12, fill: '#6B7280' }}
                  />
                  <YAxis 
                    axisLine={false}
                    tickLine={false}
                    tick={{ fontSize: 12, fill: '#6B7280' }}
                  />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: 'rgba(255, 255, 255, 0.95)',
                      border: 'none',
                      borderRadius: '8px',
                      boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
                    }}
                  />
                  <Area
                    type="monotone"
                    dataKey="value"
                    stroke={colorMap[color as keyof typeof colorMap]}
                    fill={`${colorMap[color as keyof typeof colorMap]}20`}
                    strokeWidth={2}
                  />
                </AreaChart>
              )}
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}