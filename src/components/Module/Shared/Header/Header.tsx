"use client";

import Link from "next/link";
import { motion, easeOut } from "framer-motion";
import { usePathname } from "next/navigation";

import { ReceiptText, Menu } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import LanguageButton from "../Buttons/LanguageButton";
import { navLinks } from "../Navlinks/navLinks";
import PrimaryButton from "../Buttons/PrimaryButton";

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
      role="banner"
    >
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        {/* Left Section: Logo */}
        <Link
          href="/"
          className="flex items-center gap-2"
          aria-label="InvoicePro BD Home"
        >
          <ReceiptText className="h-6 w-6 primary-color" aria-hidden="true" />
          <span className="gradient-text">InvoicePro BD</span>
        </Link>

        {/* Center Section: Desktop Navigation */}
        <nav
          className="hidden lg:flex lg:gap-6"
          aria-label="Primary navigation"
        >
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
                aria-current={isActive ? "page" : undefined}
                aria-label={link.name}
              >
                <link.icon className="h-4 w-4" aria-hidden="true" />
                {link.name}
              </MotionLink>
            );
          })}
        </nav>

        {/* Right Section: Actions */}
        <div className="flex items-center gap-2">
          {/* Language Switcher */}
          <LanguageButton
            className="hidden md:flex"
            aria-label="Switch language"
          />
          {/* Login Button */}
          <Link
            href="/login"
            className="hidden md:flex btn btn-ghost btn-sm"
            aria-label="Login"
          >
            Login
          </Link>

          {/* Get Started Button */}
          <Button
            className="bg-gradient-to-r from-[#007bff] to-[#28a745] text-white shadow-md transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-lg"
            size="sm"
            aria-label="Get Started with InvoicePro BD"
          >
            Get Started
          </Button>

          {/* Mobile Menu Trigger */}
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="lg:hidden"
                aria-label="Toggle navigation menu"
                aria-controls="mobile-menu"
              >
                <Menu className="h-6 w-6" aria-hidden="true" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="w-[250px] sm:w-[300px]"
              aria-labelledby="mobile-menu"
              id="mobile-menu"
              aria-label="Mobile navigation menu"
            >
              <div className="flex flex-col gap-6 p-4">
                {/* Mobile Logo */}
                <Link
                  href="#"
                  className="flex items-center gap-2"
                  aria-label="InvoicePro BD Home"
                >
                  <ReceiptText
                    className="h-6 w-6 text-[#007bff]"
                    aria-hidden="true"
                  />
                  <span className="gradient-text">InvoicePro BD</span>
                </Link>

                {/* Mobile Navigation Links */}
                <motion.nav
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                  className="grid gap-4"
                  aria-label="Mobile navigation links"
                >
                  {navLinks.map((link) => (
                    <motion.div key={link.name} variants={itemVariants}>
                      <Link
                        href={link.href}
                        className="flex items-center gap-2 text-lg font-medium text-gray-700 hover:text-[#007bff]"
                        aria-current={
                          pathname === link.href ? "page" : undefined
                        }
                        aria-label={link.name}
                      >
                        <link.icon className="h-5 w-5" aria-hidden="true" />
                        {link.name}
                      </Link>
                    </motion.div>
                  ))}
                </motion.nav>

                {/* Mobile Actions */}
                <div className="grid gap-3 pt-1">
                  <LanguageButton
                    className="flex w-full justify-start"
                    aria-label="Switch language"
                  />

                  <Link
                    href="/login"
                    className="hidden md:flex btn btn-ghost btn-sm"
                    aria-label="Login"
                  >
                    Login
                  </Link>
                  <PrimaryButton aria-label="Get Started with InvoicePro BD">
                    Get Started
                  </PrimaryButton>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </motion.header>
  );
}
