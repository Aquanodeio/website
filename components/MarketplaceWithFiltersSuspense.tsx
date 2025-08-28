"use client";

import React, { Suspense } from "react";
import { RefreshCw } from "lucide-react";
import MarketplaceWithFilters from "./MarketplaceWithFilters";
import { MarketplaceCardSkeleton, Provider } from "./ui/MarketplaceCard";
import { Button } from "./ui/button";

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
      <Button variant="outline" disabled>
        Filters
      </Button>
      <Button variant="outline" disabled>
        <RefreshCw size={16} />
        Refresh
      </Button>
    </div>
    <div>
      <div className="grid sm:grid-cols-3 gap-4">
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
