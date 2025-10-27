"use client";
import Image from "next/image";
import AquaNodeLogo from "@/assets/aquanode-logo.png";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { CONSOLE_LINK, CONTACT_SALES_LINK } from "@/config/links";

export default function OverlayNavbar() {
  const pathname = usePathname();

  return (
    <div className="absolute top-10 sm:top-12 left-1/2 transform -translate-x-1/2 z-20 w-full max-w-7xl px-4">
      <div className="bg-[#09001E] backdrop-blur-xl rounded-2xl border border-[#2F2F2F]/64 px-6 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <Image
              src={AquaNodeLogo}
              alt="AquaNode Logo"
              width={32}
              height={32}
              className="w-8 h-8"
            />
            <div className="text-white font-medium text-xl">Aquanode</div>
          </Link>

          {/* Navigation Links */}
          <nav className="hidden md:flex items-center gap-8">
            <Link
              href="/#Home"
              className={`transition-colors text-sm font-medium ${
                pathname === "/" ? "text-white" : "text-white/70 hover:text-white"
              }`}
            >
              Home
            </Link>
            <Link
              href="/pricing"
              className={`transition-colors text-sm font-medium ${
                pathname === "/pricing" ? "text-white" : "text-white/70 hover:text-white"
              }`}
            >
              Pricing
            </Link>
            <Link
              href="/marketplace"
              className={`transition-colors text-sm font-medium ${
                pathname === "/marketplace" ? "text-white" : "text-white/70 hover:text-white"
              }`}
            >
              Marketplace
            </Link>
            <Link
              href={"https://docs.aquanode.io"}
              className="text-white/70 hover:text-white transition-colors text-sm font-medium"
              target="_blank"
            >
              Docs
            </Link>
            <Link
              href="/blog"
              className={`transition-colors text-sm font-medium ${
                pathname?.startsWith("/blog") ? "text-white" : "text-white/70 hover:text-white"
              }`}
            >
              Blogs
            </Link>
            <Link
              href={CONTACT_SALES_LINK}
              className="text-white/70 hover:text-white transition-colors text-sm font-medium"
              target="_blank"
            >
              Contact Sales
            </Link>
          </nav>

          {/* Get Started Button - Hidden on mobile */}
          <div className="hidden md:flex items-center gap-6">
            <Link href={CONSOLE_LINK}>
              <button
                className="flex cursor-pointer items-center justify-center w-[136px] h-[36px] rounded-full border-[0.5px]"
                style={{
                  background: `linear-gradient(135deg, #6C50BE 0%, #322558 100%)`,
                  borderColor: "#C6ACEC",
                }}
              >
                <span className="text-white text-sm font-medium">
                  Get Started
                </span>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
