"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Check } from "lucide-react";
import CTAButton from "@/components/home/CTAButton";

const plans = [
  {
    name: "Starter",
    price: "$999",
    description: "Perfect for small businesses and startups",
    features: [
      "Custom Website Development",
      "Mobile Responsive Design",
      "5 Pages",
      "Basic SEO Setup",
      "Contact Form Integration",
      "3 Months Support"
    ]
  },
  {
    name: "Professional",
    price: "$2,499",
    description: "Ideal for growing businesses",
    features: [
      "Everything in Starter",
      "E-commerce Integration",
      "Custom Features",
      "Advanced SEO",
      "Performance Optimization",
      "6 Months Support"
    ],
    popular: true
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "For large-scale applications",
    features: [
      "Everything in Professional",
      "Custom Application Development",
      "Advanced Security Features",
      "API Integration",
      "Database Design",
      "12 Months Support"
    ]
  }
];

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">Pricing Plans</h1>
          <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto text-center">
            Choose the perfect plan for your business needs. All plans include our core features and dedicated support.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className={`p-6 hover:shadow-xl transition-all duration-300 relative ${
                  plan.popular ? 'border-2 border-primary' : ''
                }`}>
                  {plan.popular && (
                    <div className="absolute top-0 right-0 bg-primary text-white px-4 py-1 text-sm rounded-bl-lg rounded-tr-lg">
                      Popular
                    </div>
                  )}
                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <div className="mb-4">
                    <span className="text-4xl font-bold">{plan.price}</span>
                    {plan.price !== "Custom" && <span className="text-gray-600">/project</span>}
                  </div>
                  <p className="text-gray-600 mb-6">{plan.description}</p>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <Check className="h-5 w-5 text-green-500 mr-2" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <CTAButton 
                    href="/contact" 
                    variant={plan.popular ? "default" : "outline"}
                  >
                    Get Started
                  </CTAButton>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}