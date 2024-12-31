"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import Link from "next/link";
import { Calendar, Clock, ArrowRight } from "lucide-react";

const posts = [
  {
    title: "The Future of Web Development",
    excerpt: "Explore the latest trends and technologies shaping the future of web development.",
    date: "2024-03-15",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&q=80",
    slug: "future-of-web-development"
  },
  {
    title: "Building Scalable Applications with Firebase",
    excerpt: "Learn how to leverage Firebase to build scalable and secure applications.",
    date: "2024-03-10",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&q=80",
    slug: "scalable-applications-firebase"
  },
  {
    title: "Mobile-First Design Principles",
    excerpt: "Best practices for creating mobile-first, responsive web applications.",
    date: "2024-03-05",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&q=80",
    slug: "mobile-first-design"
  }
];

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Blog</h1>
          <p className="text-xl text-gray-600 mb-12 max-w-3xl">
            Insights and articles about web development, design, and technology.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Link href={`/blog/${post.slug}`}>
                  <Card className="group hover:shadow-xl transition-all duration-300 overflow-hidden">
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-6">
                      <div className="flex items-center text-sm text-gray-500 mb-4">
                        <Calendar className="h-4 w-4 mr-1" />
                        <span>{new Date(post.date).toLocaleDateString()}</span>
                        <Clock className="h-4 w-4 ml-4 mr-1" />
                        <span>{post.readTime}</span>
                      </div>
                      <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                        {post.title}
                      </h3>
                      <p className="text-gray-600 mb-4">{post.excerpt}</p>
                      <div className="flex items-center text-primary font-medium group-hover:translate-x-2 transition-transform">
                        Read More
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </div>
                    </div>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}