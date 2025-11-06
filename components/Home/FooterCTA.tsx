"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import Logo from "@/assets/home/logo.png";
import { CONTACT_SALES_LINK } from "@/config/links";
import {
  fadeInUp,
  staggerContainer,
  viewport,
  buttonHover,
  tapScale,
  hoverScale,
} from "@/lib/motionConfig";

export default function FooterCTA() {
  return (
    <section className="relative w-full bg-[#0A0A0F] py-20 overflow-hidden">
      {/* Grid background like hero */}
      <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[size:80px_80px]" />
      {/* Dotted background pattern */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(255,255,255,0.1) 1px, transparent 1px)",
          backgroundSize: "30px 30px",
        }}
      />

      {/* Blue gradient at bottom */}
      <div
        className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
        style={{
          background:
            "linear-gradient(180deg, transparent 0%, rgba(59, 130, 246, 0.15) 100%)",
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-6 md:px-12 lg:px-16 xl:px-20">
        {/* CTA Section */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          variants={staggerContainer}
          className="text-center mb-20"
        >
          <motion.p
            variants={fadeInUp}
            className="text-gray-400 text-lg mb-8 leading-relaxed"
          >
            Aquanode lets you deploy GPUs across multiple clouds, with built-in
            tooling and<br className="hidden md:inline" /> connector support,
            without the complexity, limits, or hidden costs.
          </motion.p>

          <motion.h2
            variants={fadeInUp}
            className="text-4xl md:text-5xl font-normal text-white mb-8"
          >
            Want to see a provider or a<br className="hidden md:inline" />{" "}
            feature you love?
          </motion.h2>

          <motion.div variants={fadeInUp}>
            <Link href="mailto:hi@aquanode.io">
              <motion.button
                whileHover={buttonHover}
                whileTap={tapScale}
                className="group bg-[#3B82F6] transition-all text-white font-normal rounded-lg flex items-center justify-center gap-3 mx-auto cursor-pointer whitespace-nowrap px-6"
                style={{
                  width: "250px",
                  height: "50px",
                  fontFamily: "var(--font-inter)",
                  borderRadius: "10px",
                }}
              >
                Share your feedback
                <div className="flex items-center gap-0">
                  <div className="h-[2px] w-3 bg-current transition-all duration-200 group-hover:w-6" />
                  <div className="w-2 h-2 border-r-2 border-b-2 border-current rotate-[-45deg] -translate-x-[7px] transition-all" />
                </div>
              </motion.button>
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* Full-width footer area */}
      <div className="relative z-10 w-full px-6 md:px-12 lg:px-16 xl:px-20">
        {/* Divider */}
        <div className="w-full h-px bg-gray-500 mb-12" />

        {/* Footer Content */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-start gap-8">
          {/* Left: Logo and Copyright */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Image
                src={Logo}
                alt="Aquanode Logo"
                width={32}
                height={32}
                className="w-8 h-8"
              />
              <span className="text-white font-normal text-xl">Aquanode</span>
            </div>
            <p className="text-gray-400 text-sm mb-2">
              © 2025 Aquanode. All rights reserved.
            </p>
            <p className="text-gray-500 text-xs">
              All trademarks, logos and brand names are the
              <br />
              property of their respective owners.
            </p>
          </div>

          {/* Right: Links and Social */}
          <div className="flex flex-col items-start md:items-end gap-10">
            {/* Navigation Links */}
            <div className="flex items-center gap-8">
              <Link
                href="/pricing"
                className="text-gray-300 hover:text-white transition-colors"
              >
                Pricing
              </Link>
              <Link
                href={CONTACT_SALES_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors"
              >
                Contact Sales
              </Link>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-3">
              <Link
                href="https://twitter.com/aquanodeio"
                target="_blank"
                rel="noopener noreferrer"
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 rounded-full bg-[#4A90FF] hover:bg-[#3B82F6] transition-all flex items-center justify-center"
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="text-white"
                  >
                    <path
                      d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"
                      fill="currentColor"
                    />
                  </svg>
                </motion.div>
              </Link>
              <Link
                href="https://discord.gg/TMwjdpVXjn"
                target="_blank"
                rel="noopener noreferrer"
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotate: -5 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 rounded-full bg-[#4A90FF] hover:bg-[#3B82F6] transition-all flex items-center justify-center"
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="text-white"
                  >
                    <path
                      d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.956-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.946 2.418-2.157 2.418z"
                      fill="currentColor"
                    />
                  </svg>
                </motion.div>
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Links */}
        <div className="flex items-center gap-6 mt-8">
          {/* <Link
            href="/terms"
            className="text-gray-400 hover:text-white transition-colors text-sm"
          >
            Terms of Service
          </Link>
          <Link
            href="/privacy"
            className="text-gray-400 hover:text-white transition-colors text-sm"
          >
            Privacy Policy
          </Link> */}
          <Link
            href="https://docs.aquanode.io"
            target="_blank"
            className="text-gray-400 hover:text-white transition-colors text-sm"
          >
            Docs
          </Link>
        </div>
      </div>
    </section>
  );
}

