"use client";

import React, { useState } from "react";
import { RefreshCw } from "lucide-react";
import MarketplaceList from "@/components/MaketplaceList";
import { useFilteredProviders } from "@/hooks/useFilteredProviders";
import { Provider } from "./ui/MarketplaceCard";
import { Button } from "./ui/button";

interface MarketplaceWithFiltersProps {
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

const MarketplaceWithFilters: React.FC<MarketplaceWithFiltersProps> = ({
  providers,
  isLoading,
  isFetching = false,
  error,
  onSelect,
  onRefresh,
  emptyStateMessage = "No GPU providers found matching your search criteria.",
  className = "",
}) => {
  const [searchQuery] = useState("");

  const { filteredProviders, filterTrigger } = useFilteredProviders({
    providers,
    searchQuery,
  });

  const handleRefresh = () => {
    if (onRefresh) {
      onRefresh();
    }
  };

  // Handle clear search

  return (
    <div className={`flex flex-col gap-8 ${className}`}>
      {/* Search and Filter Section */}
      <div className="flex gap-4 items-center">
        {filterTrigger}

        {onRefresh && (
          <Button
            variant="outline"
            onClick={handleRefresh}
            disabled={isFetching || isLoading}
            className="gap-2"
          >
            <RefreshCw size={16} className={isFetching ? "animate-spin" : ""} />
            Refresh
          </Button>
        )}
      </div>

      {/* GPU Cards Grid */}
      <div className="flex flex-col gap-4">
        <MarketplaceList
          isLoading={isLoading}
          providers={filteredProviders}
          error={error || ""}
          searchQuery={searchQuery}
          onSelect={onSelect}
        />

        {/* No results message */}
        {!isLoading && !error && filteredProviders.length === 0 && (
          <div className="text-center py-12 bg-muted/20 rounded-lg">
            <p className="text-sm text-muted-foreground">{emptyStateMessage}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default MarketplaceWithFilters;
