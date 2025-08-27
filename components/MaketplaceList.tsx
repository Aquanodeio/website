import React, { useState, useMemo, useCallback } from "react";
import {
  MarketplaceCard,
  MarketplaceCardSkeleton,
  Provider,
} from "./ui/MarketplaceCard";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { usePathname } from "next/navigation";

interface MarketplaceListProps {
  isLoading: boolean;
  providers?: Provider[];
  error?: string | null;
  searchQuery?: string;
  onSelect: (provider: Provider) => void;
  itemsPerPage?: number; // Number of items to show per page (default: 12)
}

const MarketplaceList: React.FC<MarketplaceListProps> = ({
  providers,
  isLoading,
  error,
  onSelect,
  itemsPerPage = 12,
}) => {
  const [currentPage, setCurrentPage] = useState(1);
  const pathname = usePathname();

  const filterVoltagePark = useCallback(
    (provider: Provider) => {
      if (
        provider.provider === "voltagepark" &&
        !["/workloads/services", "/marketplace"].includes(pathname)
      ) {
        return false; // Exclude VoltagePark providers on specific pages
      }
      return true;
    },
    [pathname]
  );

  // Pagination calculations
  const { paginatedProviders, totalPages } = useMemo(() => {
    if (!providers || providers.length === 0) {
      return { paginatedProviders: [], totalPages: 0 };
    }

    const filteredProviders = providers.filter(filterVoltagePark);

    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const paginatedData = filteredProviders.slice(startIndex, endIndex);
    const totalPagesCount = Math.ceil(filteredProviders.length / itemsPerPage);

    return {
      paginatedProviders: paginatedData,
      totalPages: totalPagesCount,
    };
  }, [providers, filterVoltagePark, currentPage, itemsPerPage]);

  // Reset to first page when providers change
  React.useEffect(() => {
    setCurrentPage(1);
  }, [providers]);

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  if (isLoading || !providers) {
    return (
      <div>
        <div className="grid sm:grid-cols-3 gap-4">
          {[...Array(12)].map((_, i) => (
            <MarketplaceCardSkeleton key={i} />
          ))}
        </div>
      </div>
    );
  }

  if (error) {
    console.log(error);
    return (
      <div className="text-center py-12">
        <p className="text-xs text-muted-foreground">
          Failed to load GPU providers. Please try refreshing.
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* GPU Cards Grid */}
      <div className="grid sm:grid-cols-3 gap-4 w-full">
        {paginatedProviders.map((provider, index) => (
          <MarketplaceCard
            key={`${provider.id}-${index}`}
            provider={provider}
            onSelect={onSelect}
          />
        ))}
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex justify-end items-center w-full">
          <div className="flex items-center gap-4">
            <p>
              Page {currentPage} of {totalPages}
            </p>

            <Pagination className="w-fit">
              <PaginationContent>
                <PaginationItem>
                  <PaginationPrevious
                    onClick={() => handlePageChange(currentPage - 1)}
                    className={
                      currentPage === 1
                        ? "pointer-events-none opacity-50"
                        : "cursor-pointer"
                    }
                  />
                </PaginationItem>

                <PaginationItem>
                  <PaginationNext
                    onClick={() => handlePageChange(currentPage + 1)}
                    className={
                      currentPage === totalPages
                        ? "pointer-events-none opacity-50"
                        : "cursor-pointer"
                    }
                  />
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          </div>
        </div>
      )}
    </div>
  );
};

export default MarketplaceList;
