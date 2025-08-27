import { cn, toTitleCase } from "@/lib/utils";
import { Globe } from "lucide-react";
import React from "react";
import { Button } from "./button";

export interface Provider {
  id: string;
  provider: "spheron" | "akash" | "voltagepark";
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
>(({ provider, showPricing = true }) => {
  return (
    <div className="space-y-4 flex flex-col shadow-md backdrop-blur-md shadow-[#311579] rounded-md overflow-clip w-full border border-[#311579]">
      <div className="flex flex-col items-center justify-between w-full px-4 pt-4">
        <div className="flex items-center justify-between w-full gap-4 pb-2">
          <div className="flex items-center gap-2">
            <p className="text-xl">{provider.gpuShortName.toUpperCase()}</p>
            <p className="text-sm text-muted-foreground">
              ({provider.gpuMemory})
            </p>
          </div>

          <div className="flex items-center gap-2">
            <div className="text-sm rounded-sm bg-[#311579]/40 py-0.5 px-2">
              {toTitleCase(provider.provider)}
            </div>
            <div className="text-sm rounded-sm bg-[#311579]/40 py-0.5 px-2">
              {provider.interface}
            </div>
          </div>
        </div>

        <div className="text-xs text-muted-foreground gap-1 flex flex-col w-full">
          {/* <div className="flex justify-between">
              <Text variant="secondary">vRAM</Text>
              <Text variant="secondary">{provider.gpuMemory}</Text>
            </div> */}
          <div className="flex justify-between w-full text-xs text-muted-foreground">
            <p>vCPU</p>
            <p>{provider.availableCpu.toFixed(2)}</p>
          </div>
          <div className="flex justify-between">
            <p>Memory</p>
            <p>
              {provider.availableMemory.value.toFixed(2)}{" "}
              {provider.availableMemory.unit}
            </p>
          </div>
          <div className="flex justify-between">
            <p>Storage</p>
            <p>
              {provider.availableStorage.value.toFixed(2)}{" "}
              {provider.availableStorage.unit}
            </p>
          </div>
        </div>

        {showPricing && (
          <Button
            className="mt-4 w-full bg-[#5d45a4] text-white hover:bg-[#5d45a4]"
            type="button"
          >
            <p>${provider.price.toFixed(2)}/hr</p>
          </Button>
        )}
      </div>

      <div className="w-full flex h-8 justify-between items-center px-3">
        <div className="flex items-center gap-1.5">
          <Globe className="h-3 w-3" />
          <p className="text-xs text-muted-foreground">{provider.region}</p>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 bg-green-500 rounded-full" />
          <p className="text-xs text-muted-foreground">
            {provider.available} vGPUs
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
        "overflow-clip flex flex-col justify-between rounded-md backdrop-blur-2xl shadow-md shadow-[#311579] border-[#311579]",
        className
      )}
      {...props}
    >
      <div className="p-4 space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-6 bg-[#311579]/10 rounded w-20 animate-pulse" />
            <div className="h-3 bg-[#311579]/10 rounded w-12 animate-pulse" />
          </div>
          <div className="h-5 bg-[#311579]/10 rounded w-12 animate-pulse" />
        </div>
        <div className="space-y-2">
          <div className="flex justify-between">
            <div className="h-3 bg-[#311579]/10 rounded w-8 animate-pulse" />
            <div className="h-3 bg-[#311579]/10 rounded w-12 animate-pulse" />
          </div>
          <div className="flex justify-between">
            <div className="h-3 bg-[#311579]/10 rounded w-10 animate-pulse" />
            <div className="h-3 bg-[#311579]/10 rounded w-16 animate-pulse" />
          </div>
          <div className="flex justify-between">
            <div className="h-3 bg-[#311579]/10 rounded w-10 animate-pulse" />
            <div className="h-3 bg-[#311579]/10 rounded w-16 animate-pulse" />
          </div>
        </div>
        <div className="h-10 bg-[#311579]/10 rounded w-full animate-pulse" />
      </div>
      <div className="w-full flex h-8 justify-between items-center px-3">
        <div className="flex items-center gap-2">
          <div className="h-3 w-4 bg-[#311579]/10 rounded animate-pulse" />
          <div className="h-3 bg-[#311579]/10 rounded w-12 animate-pulse" />
        </div>
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 bg-[#311579]/10 rounded-full animate-pulse" />
          <div className="h-3 bg-[#311579]/10 rounded w-16 animate-pulse" />
        </div>
      </div>
    </div>
  );
});
MarketplaceCardSkeleton.displayName = "MarketplaceCardSkeleton";
