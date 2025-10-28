"use client";

import React, { useState } from "react";
import { RefreshCw } from "lucide-react";
import MarketplaceList from "@/components/MaketplaceList";
import { useFilteredProviders } from "@/hooks/useFilteredProviders";
import { Provider } from "./ui/MarketplaceCard";

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
          <button
            onClick={handleRefresh}
            disabled={isFetching || isLoading}
            className="group bg-[#3B82F6] disabled:opacity-50 disabled:cursor-not-allowed transition-all text-white font-normal flex items-center justify-center gap-3 border border-blue-600 shadow-[0_0_20px_rgba(59,130,246,0.3)] backdrop-blur-sm px-6 cursor-pointer whitespace-nowrap"
            style={{ height: '44px', borderRadius: '10px', fontFamily: 'var(--font-inter)' }}
          >
            <RefreshCw size={16} className={isFetching ? "animate-spin" : ""} />
            Refresh
          </button>
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
          <div className="text-center py-12 bg-gray-50 rounded-lg border border-gray-200">
            <p className="text-sm text-gray-600">{emptyStateMessage}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default MarketplaceWithFilters;
