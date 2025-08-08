"use client";

import Link from "next/link";
import { motion, easeOut } from "framer-motion";
import { usePathname } from "next/navigation";

import { ReceiptText, Menu } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import LanguageButton from "../Buttons/LanguageButton";
import { navLinks } from "../Navlinks/navLinks";

const headerVariants = {
  hidden: { opacity: 0, y: -50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: easeOut,
    },
  },
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.07,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

// Create a motion-enabled Link component
const MotionLink = motion(Link);

export default function Header() {
  const pathname = usePathname();

  return (
    <motion.header
      initial="hidden"
      animate="visible"
      variants={headerVariants}
      className="sticky top-0 z-50 w-full border-b border-gray-200/50 bg-white/80 backdrop-blur-md transition-all duration-300 ease-in-out"
    >
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        {/* Left Section: Logo */}
        <Link href="/" className="flex items-center gap-2">
          <ReceiptText className="h-6 w-6 primary-color" />
          <span className="gradient-text">
            InvoicePro BD
          </span>
        </Link>

        {/* Center Section: Desktop Navigation */}
        <nav className="hidden lg:flex lg:gap-6">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;

            return (
              <MotionLink
                key={link.name}
                href={link.href}
                className={`flex items-center gap-1 text-base font-medium transition-colors ${
                  isActive
                    ? "text-[#007bff]"
                    : "text-gray-600 hover:text-[#007bff]"
                }`}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2, ease: easeOut }}
              >
                <link.icon className="h-4 w-4" />
                {link.name}
              </MotionLink>
            );
          })}
        </nav>

        {/* Right Section: Actions */}
        <div className="flex items-center gap-2">
          {/* Language Switcher */}
          <LanguageButton className="hidden md:flex" />
          {/* Login Button */}
          <Button variant="ghost" size="sm">
            <Link href="/login">Login</Link>
          </Button>

          {/* Get Started Button */}
          <Button
            className="bg-gradient-to-r from-[#007bff] to-[#28a745] text-white shadow-md transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-lg"
            size="sm"
          >
            Get Started
          </Button>

          {/* Mobile Menu Trigger */}
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="lg:hidden">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[250px] sm:w-[300px]">
              <div className="flex flex-col gap-6 p-4">
                {/* Mobile Logo */}
                <Link href="#" className="flex items-center gap-2">
                  <ReceiptText className="h-6 w-6 text-[#007bff]" />
                  <span className="bg-gradient-to-r from-[#007bff] to-[#28a745] bg-clip-text text-xl font-bold text-transparent">
                    InvoicePro BD
                  </span>
                </Link>

                {/* Mobile Navigation Links */}
                <motion.nav
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                  className="grid gap-4"
                >
                  {navLinks.map((link) => (
                    <motion.div key={link.name} variants={itemVariants}>
                      <Link
                        href={link.href}
                        className="flex items-center gap-2 text-lg font-medium text-gray-700 hover:text-[#007bff]"
                      >
                        <link.icon className="h-5 w-5" />
                        {link.name}
                      </Link>
                    </motion.div>
                  ))}
                </motion.nav>

                {/* Mobile Actions */}
                <div className="grid gap-3 pt-1">
                  <LanguageButton className="flex w-full justify-start" />

                  <Button variant="ghost" className="w-full justify-start">
                    Login
                  </Button>
                  <Button className="w-full bg-gradient-to-r from-[#007bff] to-[#28a745] text-white shadow-md hover:scale-[1.02] hover:shadow-lg">
                    Get Started
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </motion.header>
  );
}
