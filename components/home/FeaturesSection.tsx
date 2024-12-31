"use client";

import { Code2, Globe, Shield } from "lucide-react";
import FeatureCard from "./FeatureCard";

const features = [
  {
    Icon: Code2,
    title: "Expert Development",
    description: "Building scalable solutions with React, Next.js, and Node.js that exceed expectations."
  },
  {
    Icon: Globe,
    title: "Cloud Solutions",
    description: "Leveraging Firebase for powerful, scalable, and secure cloud infrastructure."
  },
  {
    Icon: Shield,
    title: "Security First",
    description: "Implementing robust security measures and best practices for your applications."
  }
];

export default function FeaturesSection() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <FeatureCard key={index} {...feature} />
        ))}
      </div>
    </div>
  );
}