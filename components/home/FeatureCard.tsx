"use client";

import { Card } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";
import { motion } from "framer-motion";

interface FeatureCardProps {
  Icon: LucideIcon;
  title: string;
  description: string;
}

export default function FeatureCard({ Icon, title, description }: FeatureCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <Card className="p-6 group hover:shadow-2xl transition-all duration-300 bg-gradient-to-br from-white to-gray-50 border-2 hover:border-primary">
        <div className="relative">
          <Icon className="h-12 w-12 text-primary mb-4 group-hover:scale-110 transition-transform" />
          <div className="absolute inset-0 bg-primary/5 rounded-full scale-0 group-hover:scale-150 transition-transform duration-500" />
        </div>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </Card>
    </motion.div>
  );
}