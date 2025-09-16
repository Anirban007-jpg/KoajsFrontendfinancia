"use client";

import { motion } from "framer-motion";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const activities = [
  {
    id: 1,
    user: "",
    action: "",
    target: "",
    time: "",
    avatar: "",
    color: "from-orange-500 to-amber-500",
  },
];

export function ActivityFeed() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.3 }}
    >
      <Card className="bg-white/80 backdrop-blur-sm border-gray-200/50 dark:bg-gray-900/80 dark:border-gray-800/50">
        <CardHeader>
          <CardTitle className="text-lg font-semibold text-gray-900 dark:text-white">
            Recent Activity
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {activities.map((activity, index) => (
              <motion.div
                key={activity.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50/50 dark:hover:bg-gray-800/50 transition-colors"
              >
                <div className={`p-2 rounded-full bg-gradient-to-r ${activity.color}`}>
                  <span className="text-white text-xs font-medium">
                    {activity.avatar}
                  </span>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm text-gray-900 dark:text-white">
                    <span className="font-medium">{activity.user}</span>{" "}
                    <span className="text-gray-600 dark:text-gray-400">
                      {activity.action}
                    </span>{" "}
                    <span className="font-medium text-blue-600 dark:text-blue-400">
                      {activity.target}
                    </span>
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                    {activity.time}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}