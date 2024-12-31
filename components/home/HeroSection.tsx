"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center"
      >
        <h1 className="text-5xl sm:text-7xl font-bold text-gray-900 mb-8 bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-600">
          Transform Your Digital Vision
        </h1>
        <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
          We craft exceptional digital experiences using cutting-edge technologies
          to bring your ideas to life.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link href="/projects">
            <Button size="lg" className="text-lg group relative overflow-hidden">
              <span className="relative z-10">Explore Our Work</span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-primary transform translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            </Button>
          </Link>
          <Link href="/contact">
            <Button
              size="lg"
              variant="outline"
              className="text-lg group hover:border-primary"
            >
              Get Started
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </motion.div>
    </div>
  );
}