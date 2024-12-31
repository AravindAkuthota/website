"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "E-Commerce Platform",
    description: "A full-featured online shopping platform with real-time inventory management.",
    tech: ["Next.js", "Firebase", "Tailwind CSS"],
    image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&q=80"
  },
  {
    title: "Healthcare Dashboard",
    description: "Analytics dashboard for healthcare providers with patient management.",
    tech: ["React", "Node.js", "Chart.js"],
    image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800&q=80"
  },
  {
    title: "Social Learning App",
    description: "Mobile-first educational platform connecting students and teachers.",
    tech: ["React Native", "Firebase", "WebRTC"],
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&q=80"
  }
];

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Our Projects</h1>
          <p className="text-xl text-gray-600 mb-12 max-w-3xl">
            Explore our portfolio of successful projects where we've helped businesses transform their digital presence.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="group hover:shadow-xl transition-shadow overflow-hidden">
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <ExternalLink className="text-white h-8 w-8" />
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                    <p className="text-gray-600 mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}