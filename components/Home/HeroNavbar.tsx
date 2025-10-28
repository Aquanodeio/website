"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "@/assets/home/logo.png";
import { CONSOLE_LINK } from "@/config/links";

export default function HeroNavbar() {
  const pathname = usePathname();

  return (
    <nav className="relative pt-10 px-6 md:px-12 lg:px-16 xl:px-20">
      <div className="flex justify-between items-center">
        <div className="flex items-center bg-white/[0.02] backdrop-blur-[0.5px] border-[0.5px] border-white/20 rounded-[10px] h-[56px] gap-6 px-6" style={{ width: '580px' }}>
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

          {/* Separator */}
          <div className="hidden md:block w-px h-6 bg-white/70" />

          {/* Navigation Links */}
          <div className="hidden md:flex items-center gap-6">
            <Link
              href="/"
              className={`transition-colors font-medium text-sm ${
                pathname === "/" ? "text-white" : "text-white/70 hover:text-white"
              }`}
            >
              Home
            </Link>
            <Link
              href="/pricing"
              className={`transition-colors font-medium text-sm ${
                pathname === "/pricing" ? "text-white" : "text-white/70 hover:text-white"
              }`}
            >
              Pricing
            </Link>
            <Link
              href="/marketplace"
              className={`transition-colors font-medium text-sm ${
                pathname === "/marketplace" ? "text-white" : "text-white/70 hover:text-white"
              }`}
            >
              Marketplace
            </Link>
            <Link
              href="/blog"
              className={`transition-colors font-medium text-sm ${
                pathname?.startsWith("/blog") ? "text-white" : "text-white/70 hover:text-white"
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

        {/* CTA Button */}
        <a href={CONSOLE_LINK}>
          <button className="group bg-[#3B82F6] transition-all rounded-lg text-white text-sm font-normal flex items-center justify-center gap-3 cursor-pointer whitespace-nowrap px-6" style={{ width: '200px', height: '50px', borderRadius: '10px', fontFamily: 'var(--font-inter)' }}>
            Start for Free
            <div className="flex items-center gap-0">
              <div className="h-[2px] w-3 bg-current transition-all duration-200 group-hover:w-6" />
              <div className="w-2 h-2 border-r-2 border-b-2 border-current rotate-[-45deg] -translate-x-[7px] transition-all" />
            </div>
          </button>
        </a>
      </div>
    </nav>
  );
}

