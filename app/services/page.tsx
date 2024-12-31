"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Code, Cloud, Smartphone, Gauge, Lock, Wrench } from "lucide-react";

const services = [
  {
    icon: Code,
    title: "Web Development",
    description: "Custom web applications built with React, Next.js, and Node.js"
  },
  {
    icon: Cloud,
    title: "Cloud Solutions",
    description: "Scalable cloud infrastructure using Firebase and modern cloud services"
  },
  {
    icon: Smartphone,
    title: "Mobile Development",
    description: "Cross-platform mobile apps that deliver exceptional user experiences"
  },
  {
    icon: Gauge,
    title: "Performance Optimization",
    description: "Speed up your applications for better user engagement"
  },
  {
    icon: Lock,
    title: "Security Solutions",
    description: "Implement robust security measures to protect your data"
  },
  {
    icon: Wrench,
    title: "Maintenance & Support",
    description: "Ongoing support and updates to keep your applications running smoothly"
  }
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Our Services</h1>
          <p className="text-xl text-gray-600 mb-12 max-w-3xl">
            We offer a comprehensive range of digital solutions to help your business thrive in the modern world.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="p-6 hover:shadow-xl transition-all duration-300 group">
                  <service.icon className="h-12 w-12 text-primary mb-4 group-hover:scale-110 transition-transform" />
                  <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}