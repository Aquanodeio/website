import { cn, toTitleCase } from "@/lib/utils";
import { Globe } from "lucide-react";
import React from "react";
import { useSearchParams } from "next/navigation";

export interface Provider {
  id: string;
  provider: "spheron" | "akash" | "voltagepark" | "datacrunch" | "hotaisle";
  providerId: string;
  providerName: string;
  address: string;
  isPersistent: boolean;
  region: string;
  gpuShortName: string;
  gpuVendor: string;
  available: number;
  num: number;
  cpuCoresPerGpu: number;
  ramPerGpu: number;
  storagePerGpu: number;
  gpuMemory: string;
  availableCpu: number;
  availableMemory: {
    value: number;
    unit: string;
  };
  availableStorage: {
    value: number;
    unit: string;
  };
  interface: string;
  price: number;
}

export interface MarketplaceCardProps
  extends React.HTMLAttributes<HTMLDivElement> {
  isSelected?: boolean;
  provider: Provider;
  onSelect?: (provider: any) => void;
  variant?: "default" | "selectable";
  showPricing?: boolean;
  recommended?: boolean;
}

export const MarketplaceCard = React.forwardRef<
  HTMLDivElement,
  MarketplaceCardProps
>(({ provider, showPricing = true, ...props }, ref) => {
  const searchParams = useSearchParams();

  // Convert params into string that can be used in url
  const appliableFilters = new URLSearchParams(searchParams.toString());

  return (
    <div
      ref={ref}
      {...props}
      className="flex flex-col bg-[#141414] rounded-md border border-white/10 hover:border-white/20 transition-all duration-300 ease-in-out overflow-clip w-full hover:scale-105 cursor-pointer"
      style={{ fontFamily: 'var(--font-inter)' }}
    >
      <div className="flex flex-col items-center justify-between w-full p-6">
        <div className="flex items-start justify-between w-full gap-4 mb-6">
          <div className="flex items-center gap-2">
            <h4 className="text-3xl font-normal text-white" style={{ fontFamily: 'var(--font-jetbrains-mono)' }}>
              {provider.gpuShortName.toUpperCase()}
            </h4>
            <p className="text-gray-400 text-xl">
              ({provider.gpuMemory})
            </p>
          </div>

          <div className="flex items-center gap-2">
            <span className="px-4 py-2 bg-[#2A2A2A] rounded-full text-white text-sm font-normal">
              {toTitleCase(provider.provider)}
            </span>
          </div>
        </div>

        <div className="space-y-3 w-full mb-6">
          <div className="flex justify-between items-center">
            <span className="text-white">vCPU</span>
            <span className="text-gray-400">{provider.availableCpu.toFixed(2)}</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-white">Memory</span>
            <span className="text-gray-400">
              {provider.availableMemory.value.toFixed(2)}{" "}
              {provider.availableMemory.unit}
            </span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-white">Storage</span>
            <span className="text-gray-400">
              {provider.availableStorage.value.toFixed(2)}{" "}
              {provider.availableStorage.unit}
            </span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-white">Interface</span>
            <span className="text-gray-400">{provider.interface}</span>
          </div>
        </div>

        {showPricing && (
          <a
            href={
              "https://console.aquanode.io/marketplace" +
              (appliableFilters.toString()
                ? "?" + appliableFilters.toString()
                : "")
            }
            target="_blank"
            rel="noreferrer"
            className="w-full"
          >
            <button
              className="w-full group bg-[#3B82F6] transition-all text-white font-normal flex items-center justify-center gap-3 backdrop-blur-sm border border-blue-600/10 shadow-[0_0_20px_rgba(59,130,246,0.3)] cursor-pointer"
              style={{ height: '44px', borderRadius: '10px', fontFamily: 'var(--font-inter)' }}
              type="button"
            >
              <p>${provider.price.toFixed(2)}/hr</p>
              <div className="flex items-center gap-0">
                <div className="h-[2px] w-3 bg-current transition-all duration-200 group-hover:w-6" />
                <div className="w-2 h-2 border-r-2 border-b-2 border-current rotate-[-45deg] -translate-x-[7px] transition-all" />
              </div>
            </button>
          </a>
        )}
      </div>

      <div className="w-full flex justify-between items-center px-6 py-3 border-t border-white/10">
        <div className="flex items-center gap-1.5">
          <Globe className="h-3 w-3 text-gray-400" />
          <p className="text-xs text-gray-400">{provider.region}</p>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 bg-green-500 rounded-full" />
          <p className="text-xs text-gray-400">
            {provider.available} GPUs
          </p>
        </div>
      </div>
    </div>
  );
});
MarketplaceCard.displayName = "MarketplaceCard";

// MarketplaceCard Loading Skeleton
export const MarketplaceCardSkeleton = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        "flex flex-col bg-[#141414] rounded-md border border-white/10",
        className
      )}
      {...props}
    >
      <div className="p-6 space-y-4">
        <div className="flex items-start justify-between mb-6">
          <div className="flex items-center gap-2">
            <div className="h-8 bg-white/10 rounded w-24 animate-pulse" />
            <div className="h-5 bg-white/10 rounded w-16 animate-pulse" />
          </div>
          <div className="h-8 bg-white/10 rounded-full w-20 animate-pulse" />
        </div>
        <div className="space-y-3 mb-6">
          <div className="flex justify-between">
            <div className="h-4 bg-white/10 rounded w-12 animate-pulse" />
            <div className="h-4 bg-white/10 rounded w-16 animate-pulse" />
          </div>
          <div className="flex justify-between">
            <div className="h-4 bg-white/10 rounded w-14 animate-pulse" />
            <div className="h-4 bg-white/10 rounded w-20 animate-pulse" />
          </div>
          <div className="flex justify-between">
            <div className="h-4 bg-white/10 rounded w-14 animate-pulse" />
            <div className="h-4 bg-white/10 rounded w-20 animate-pulse" />
          </div>
          <div className="flex justify-between">
            <div className="h-4 bg-white/10 rounded w-16 animate-pulse" />
            <div className="h-4 bg-white/10 rounded w-12 animate-pulse" />
          </div>
        </div>
        <div className="h-11 bg-white/10 rounded-lg w-full animate-pulse" />
      </div>
      <div className="w-full flex justify-between items-center px-6 py-3 border-t border-white/10">
        <div className="flex items-center gap-2">
          <div className="h-3 w-3 bg-white/10 rounded animate-pulse" />
          <div className="h-3 bg-white/10 rounded w-16 animate-pulse" />
        </div>
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 bg-white/10 rounded-full animate-pulse" />
          <div className="h-3 bg-white/10 rounded w-20 animate-pulse" />
        </div>
      </div>
    </div>
  );
});
MarketplaceCardSkeleton.displayName = "MarketplaceCardSkeleton";
