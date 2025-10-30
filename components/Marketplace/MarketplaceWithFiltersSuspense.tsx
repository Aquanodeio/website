"use client";

import React, { Suspense } from "react";
import MarketplaceWithFilters from "./MarketplaceWithFilters";
import { MarketplaceCardSkeleton, Provider } from "./MarketplaceCard";

interface MarketplaceWithFiltersSuspenseProps {
  providers: Provider[] | undefined;
  isLoading: boolean;
  isFetching?: boolean;
  error?: string;
  onSelect: (provider: Provider) => void;
  selectedProviderVendor?: string | null;
  selectedProviderId?: string | null;
  onRefresh?: () => void;
  emptyStateMessage?: string;
  emptyStateAction?: React.ReactNode;
  className?: string;
}

const MarketplaceFallback: React.FC = () => (
  <div className="flex flex-col gap-8">
    <div className="flex gap-4 items-center">
      <div className="h-[44px] w-32 bg-white border border-gray-300 rounded-[10px] animate-pulse backdrop-blur-sm" />
      <div className="h-[44px] w-28 bg-white border border-gray-300 rounded-[10px] animate-pulse backdrop-blur-sm" />
    </div>
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[...Array(12)].map((_, i) => (
          <MarketplaceCardSkeleton key={i} />
        ))}
      </div>
    </div>
  </div>
);

const MarketplaceWithFiltersSuspense: React.FC<
  MarketplaceWithFiltersSuspenseProps
> = (props) => {
  return (
    <Suspense fallback={<MarketplaceFallback />}>
      <MarketplaceWithFilters {...props} />
    </Suspense>
  );
};

export default MarketplaceWithFiltersSuspense;
