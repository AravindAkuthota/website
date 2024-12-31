"use client";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { ArrowRight } from "lucide-react";

interface CTAButtonProps {
  href: string;
  children: React.ReactNode;
  variant?: "default" | "outline";
  icon?: boolean;
}

export default function CTAButton({ href, children, variant = "default", icon = false }: CTAButtonProps) {
  const router = useRouter();

  return (
    <Button 
      onClick={() => router.push(href)}
      variant={variant}
      size="lg" 
      className={`text-lg group relative overflow-hidden ${
        variant === "default" ? "hover:shadow-lg" : "hover:border-primary"
      }`}
    >
      <span className="relative z-10">{children}</span>
      {variant === "default" && (
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-primary transform translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
      )}
      {icon && <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />}
    </Button>
  );
}