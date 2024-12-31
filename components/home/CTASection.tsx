"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion } from "framer-motion";

export default function CTASection() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="bg-gradient-to-r from-primary/10 to-blue-600/10 py-16 mt-20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Ready to Start Your Project?
        </h2>
        <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
          Let's collaborate to create something extraordinary together.
        </p>
        <Link href="/contact">
          <Button size="lg" className="text-lg group relative overflow-hidden">
            <span className="relative z-10">Contact Us Today</span>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-primary transform translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
          </Button>
        </Link>
      </div>
    </motion.div>
  );
}