"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Users, Target, Lightbulb } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-8">About Us</h1>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="text-2xl font-semibold mb-4">Who We Are</h2>
              <p className="text-gray-600 mb-6">
                We are a team of passionate developers and designers dedicated to creating exceptional digital experiences. With years of expertise in web and mobile development, we help businesses transform their ideas into reality.
              </p>
              <p className="text-gray-600">
                Our approach combines technical excellence with creative innovation, ensuring that every project we deliver exceeds expectations and drives real business value.
              </p>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=800&q=80"
                alt="Team collaboration"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <Card className="p-6 hover:shadow-xl transition-all duration-300">
              <Users className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">Our Team</h3>
              <p className="text-gray-600">
                Skilled professionals with diverse expertise in modern web technologies and development practices.
              </p>
            </Card>

            <Card className="p-6 hover:shadow-xl transition-all duration-300">
              <Target className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">Our Mission</h3>
              <p className="text-gray-600">
                To deliver innovative digital solutions that help businesses grow and succeed in the digital age.
              </p>
            </Card>

            <Card className="p-6 hover:shadow-xl transition-all duration-300">
              <Lightbulb className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">Our Vision</h3>
              <p className="text-gray-600">
                To be the leading force in digital transformation, setting new standards in web development.
              </p>
            </Card>
          </div>
        </motion.div>
      </div>
    </div>
  );
}