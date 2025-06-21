import Image from "next/image";
import { GradientText } from "./GradientText";
import AquaNodeLogo from "@/assets/aquanode-logo.png";
import Link from "next/link";
import HorizontalDivider from "./HorizontalDivider";

export default function Header() {
  return (
    <header className="h-24 relative z-10">
      <div className="flex items-center justify-between py-8">
        <div className="flex items-center gap-2">
          <Image
            src={AquaNodeLogo}
            alt="AquaNode Logo"
            width={32}
            height={32}
            className="w-8 h-8"
          />
          <div className="text-white font-bold text-xl">Aquanode</div>
        </div>

        <div className="flex items-center gap-6">
          <Link href="/app">
            <button
              className="flex items-center justify-center px-[17px] py-[5px] rounded-full border border-white/10"
              style={{
                background: `radial-gradient(circle at 50% 215%, rgba(255, 255, 255, 0.24) 0%, rgba(255, 255, 255, 0) 100%)`,
              }}
            >
              <GradientText className="text-sm">Launch app</GradientText>
            </button>
          </Link>
        </div>
      </div>

      <HorizontalDivider />
    </header>
  );
}
