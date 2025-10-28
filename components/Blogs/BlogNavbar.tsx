"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "@/assets/blogs/aquanode-black-logo.png";

export default function BlogNavbar() {
  const pathname = usePathname();

  return (
    <nav className="relative pt-10 px-6 md:px-12 lg:px-16 xl:px-20 bg-white">
      <div className="flex justify-between items-center px-6">
        <div className="flex items-center bg-gray-50 border border-gray-200 rounded-[10px] h-[56px] gap-6 px-8" style={{ width: '580px' }}>
          {/* Logo */}
          <Link href="/" className="flex items-center gap-4">
            <Image
              src={Logo}
              alt="Aquanode Logo"
              width={32}
              height={32}
              className="w-8 h-8"
            />
            <span className="text-black font-normal text-lg">Aquanode</span>
          </Link>

          {/* Separator */}
          <div className="hidden md:block w-px h-6 bg-gray-300" />

          {/* Navigation Links */}
          <div className="hidden md:flex items-center gap-6">
            <Link
              href="/"
              className={`transition-colors font-medium text-sm ${
                pathname === "/" ? "text-gray-900" : "text-gray-600 hover:text-black"
              }`}
            >
              Home
            </Link>
            <Link
              href="/pricing"
              className={`transition-colors font-medium text-sm ${
                pathname === "/pricing" ? "text-gray-900" : "text-gray-600 hover:text-black"
              }`}
            >
              Pricing
            </Link>
            <Link
              href="/marketplace"
              className={`transition-colors font-medium text-sm ${
                pathname === "/marketplace" ? "text-gray-900" : "text-gray-600 hover:text-black"
              }`}
            >
              Marketplace
            </Link>
            <Link
              href="/blog"
              className={`transition-colors font-medium text-sm ${
                pathname?.startsWith("/blog") ? "text-gray-900" : "text-gray-600 hover:text-black"
              }`}
            >
              Blogs
            </Link>
            <Link
              href="https://docs.aquanode.io"
              target="_blank"
              className="text-gray-600 hover:text-black transition-colors font-medium text-sm"
            >
              Docs
            </Link>
          </div>
        </div>

        {/* CTA Button */}
        <Link href="/marketplace">
          <button className="group bg-[#3B82F6] transition-all rounded-lg text-white text-sm font-normal flex items-center justify-center gap-3 cursor-pointer whitespace-nowrap px-6" style={{ width: '200px', height: '50px', borderRadius: '10px', fontFamily: 'var(--font-inter)' }}>
            Start for Free
            <div className="flex items-center gap-0">
              <div className="h-[2px] w-3 bg-current transition-all duration-200 group-hover:w-6" />
              <div className="w-2 h-2 border-r-2 border-b-2 border-current rotate-[-45deg] -translate-x-[7px] transition-all" />
            </div>
          </button>
        </Link>
      </div>
    </nav>
  );
}

