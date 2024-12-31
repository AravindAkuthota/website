"use client";

import { useState } from "react";
import Link from "next/link";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "@/lib/firebase";
import { Button } from "@/components/ui/button";
import { Menu, X, Code2 } from "lucide-react";
import { motion } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [user] = useAuthState(auth);

  const menuItems = [
    { href: "/projects", label: "Projects" },
    { href: "/services", label: "Services" },
    { href: "/about", label: "About" },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="bg-white/80 backdrop-blur-md shadow-lg fixed w-full z-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <Link href="/" className="flex-shrink-0 flex items-center group">
            <Code2 className="h-8 w-8 text-primary group-hover:rotate-12 transition-transform duration-300" />
            <span className="ml-2 text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-600">
              DevStudio
            </span>
          </Link>

          {/* Desktop menu */}
          <div className="hidden sm:ml-6 sm:flex sm:items-center sm:space-x-8">
            {menuItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="relative text-gray-700 hover:text-primary transition-colors group"
              >
                {item.label}
                <span className="absolute inset-x-0 bottom-0 h-0.5 bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
              </Link>
            ))}
            {user ? (
              <Button
                onClick={() => auth.signOut()}
                variant="outline"
                className="group hover:border-primary"
              >
                <span className="group-hover:scale-105 transition-transform">
                  Sign Out
                </span>
              </Button>
            ) : (
              <Link href="/auth">
                <Button className="group relative overflow-hidden">
                  <span className="relative z-10">Sign In</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-primary transform translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                </Button>
              </Link>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="sm:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-primary transition-colors"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <motion.div
        initial={{ opacity: 0, height: 0 }}
        animate={{ opacity: isOpen ? 1 : 0, height: isOpen ? "auto" : 0 }}
        transition={{ duration: 0.3 }}
        className="sm:hidden overflow-hidden"
      >
        <div className="px-2 pt-2 pb-3 space-y-1">
          {menuItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-primary hover:bg-gray-50 rounded-md transition-colors"
            >
              {item.label}
            </Link>
          ))}
          {user ? (
            <Button
              onClick={() => auth.signOut()}
              variant="outline"
              className="w-full mt-2"
            >
              Sign Out
            </Button>
          ) : (
            <Link href="/auth" className="block px-3 py-2">
              <Button className="w-full">Sign In</Button>
            </Link>
          )}
        </div>
      </motion.div>
    </motion.nav>
  );
}