"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Logo from "@/assets/home/logo.png";
import { CONSOLE_LINK, CONTACT_SALES_LINK } from "@/config/links";
import { navbarVariants, buttonHover, tapScale } from "@/lib/motionConfig";

export default function HeroNavbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <motion.nav
        variants={navbarVariants}
        initial="hidden"
        animate="show"
        className="relative pt-10 px-6 md:px-12 lg:px-16 xl:px-20"
      >
        <div className="flex justify-between items-center">
          <div className="flex items-center bg-white/[0.02] backdrop-blur-[0.5px] border-[0.5px] border-white/20 rounded-[10px] h-[56px] gap-6 px-6 lg:w-auto w-full max-w-[580px]">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-4">
              <Image
                src={Logo}
                alt="Aquanode Logo"
                width={32}
                height={32}
                className="w-8 h-8"
              />
              <span className="text-white font-normal text-lg">Aquanode</span>
            </Link>

            {/* Hamburger Menu Button (Mobile) */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden ml-auto flex flex-col gap-1.5 p-2"
              aria-label="Toggle menu"
            >
              <span
                className={`block w-5 h-0.5 bg-white transition-all duration-300 ${
                  mobileMenuOpen ? "rotate-45 translate-y-2" : ""
                }`}
              />
              <span
                className={`block w-5 h-0.5 bg-white transition-all duration-300 ${
                  mobileMenuOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`block w-5 h-0.5 bg-white transition-all duration-300 ${
                  mobileMenuOpen ? "-rotate-45 -translate-y-2" : ""
                }`}
              />
            </button>

            {/* Separator */}
            <div className="hidden lg:block w-px h-6 bg-white/70" />

            {/* Navigation Links (Desktop) */}
            <div className="hidden lg:flex items-center gap-6">
              <Link
                href="/"
                className={`transition-colors font-medium text-sm ${
                  pathname === "/"
                    ? "text-white"
                    : "text-white/70 hover:text-white"
                }`}
              >
                Home
              </Link>
              <Link
                href="/pricing"
                className={`transition-colors font-medium text-sm ${
                  pathname === "/pricing"
                    ? "text-white"
                    : "text-white/70 hover:text-white"
                }`}
              >
                Pricing
              </Link>
              <Link
                href="/marketplace"
                className={`transition-colors font-medium text-sm ${
                  pathname === "/marketplace"
                    ? "text-white"
                    : "text-white/70 hover:text-white"
                }`}
              >
                Marketplace
              </Link>
              <Link
                href="/blog"
                className={`transition-colors font-medium text-sm ${
                  pathname?.startsWith("/blog")
                    ? "text-white"
                    : "text-white/70 hover:text-white"
                }`}
              >
                Blogs
              </Link>
              <Link
                href="https://docs.aquanode.io"
                target="_blank"
                className="text-white/70 hover:text-white transition-colors font-medium text-sm"
              >
                Docs
              </Link>
            </div>
          </div>

          {/* CTA Buttons (Desktop) */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href={CONTACT_SALES_LINK}
              target="_blank"
              rel="noopener noreferrer"
            >
              <motion.button
                whileHover={{
                  scale: 1.02,
                  borderColor: "rgba(59, 130, 246, 0.8)",
                  transition: { type: "spring", damping: 20, stiffness: 120 },
                }}
                whileTap={tapScale}
                className="group bg-transparent transition-all rounded-lg text-[#3B82F6] text-sm font-normal flex items-center justify-center gap-3 cursor-pointer whitespace-nowrap px-6 border border-[#3B82F6]"
                style={{
                  width: "160px",
                  height: "50px",
                  borderRadius: "10px",
                  fontFamily: "var(--font-inter)",
                }}
              >
                Book a Demo
                <div className="flex items-center gap-0">
                  <div className="h-[2px] w-3 bg-current transition-all duration-200 group-hover:w-6" />
                  <div className="w-2 h-2 border-r-2 border-b-2 border-current rotate-[-45deg] -translate-x-[7px] transition-all" />
                </div>
              </motion.button>
            </a>
            <a href={CONSOLE_LINK}>
              <motion.button
                whileHover={buttonHover}
                whileTap={tapScale}
                className="group bg-[#3B82F6] transition-all rounded-lg text-white text-sm font-normal flex items-center justify-center gap-3 cursor-pointer whitespace-nowrap px-6"
                style={{
                  width: "200px",
                  height: "50px",
                  borderRadius: "10px",
                  fontFamily: "var(--font-inter)",
                }}
              >
                Start for Free
                <div className="flex items-center gap-0">
                  <div className="h-[2px] w-3 bg-current transition-all duration-200 group-hover:w-6" />
                  <div className="w-2 h-2 border-r-2 border-b-2 border-current rotate-[-45deg] -translate-x-[7px] transition-all" />
                </div>
              </motion.button>
            </a>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="lg:hidden fixed inset-y-0 right-0 w-[280px] bg-black/95 backdrop-blur-lg border-l border-white/20 z-50"
          >
            <div className="flex flex-col h-full pt-20 px-6">
              {/* Mobile Navigation Links */}
              <div className="flex flex-col gap-6">
                <Link
                  href="/"
                  onClick={() => setMobileMenuOpen(false)}
                  className={`transition-colors font-medium text-base ${
                    pathname === "/"
                      ? "text-white"
                      : "text-white/70 hover:text-white"
                  }`}
                >
                  Home
                </Link>
                <Link
                  href="/pricing"
                  onClick={() => setMobileMenuOpen(false)}
                  className={`transition-colors font-medium text-base ${
                    pathname === "/pricing"
                      ? "text-white"
                      : "text-white/70 hover:text-white"
                  }`}
                >
                  Pricing
                </Link>
                <Link
                  href="/marketplace"
                  onClick={() => setMobileMenuOpen(false)}
                  className={`transition-colors font-medium text-base ${
                    pathname === "/marketplace"
                      ? "text-white"
                      : "text-white/70 hover:text-white"
                  }`}
                >
                  Marketplace
                </Link>
                <Link
                  href="/blog"
                  onClick={() => setMobileMenuOpen(false)}
                  className={`transition-colors font-medium text-base ${
                    pathname?.startsWith("/blog")
                      ? "text-white"
                      : "text-white/70 hover:text-white"
                  }`}
                >
                  Blogs
                </Link>
                <Link
                  href="https://docs.aquanode.io"
                  target="_blank"
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-white/70 hover:text-white transition-colors font-medium text-base"
                >
                  Docs
                </Link>
              </div>

              {/* Mobile CTA Buttons */}
              <div className="mt-8 flex flex-col gap-3">
                <a
                  href={CONTACT_SALES_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button
                    className="w-full bg-white/10 hover:bg-white/20 transition-all rounded-lg text-white text-sm font-normal flex items-center justify-center cursor-pointer whitespace-nowrap px-6 h-[50px] border border-white/20"
                    style={{
                      borderRadius: "10px",
                      fontFamily: "var(--font-inter)",
                    }}
                  >
                    Book a Demo
                  </button>
                </a>
                <a href={CONSOLE_LINK}>
                  <button
                    className="w-full group bg-[#3B82F6] transition-all rounded-lg text-white text-sm font-normal flex items-center justify-center gap-3 cursor-pointer whitespace-nowrap px-6 h-[50px]"
                    style={{
                      borderRadius: "10px",
                      fontFamily: "var(--font-inter)",
                    }}
                  >
                    Start for Free
                    <div className="flex items-center gap-0">
                      <div className="h-[2px] w-3 bg-current transition-all duration-200 group-hover:w-6" />
                      <div className="w-2 h-2 border-r-2 border-b-2 border-current rotate-[-45deg] -translate-x-[7px] transition-all" />
                    </div>
                  </button>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Backdrop overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
            onClick={() => setMobileMenuOpen(false)}
          />
        )}
      </AnimatePresence>
    </>
  );
}
