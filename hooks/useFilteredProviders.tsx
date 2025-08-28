"use client";

import React, { useState, useMemo, useCallback, useEffect } from "react";
import { useSearchParams, useRouter, usePathname } from "next/navigation";
import {
  Filter,
  Cpu,
  MapPin,
  Zap,
  HardDrive,
  X,
  Building,
  ArrowUpDown,
  ArrowUp,
  ArrowDown,
  DollarSign,
} from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Provider } from "@/components/ui/MarketplaceCard";
import { Button } from "@/components/ui/button";

interface FilterState {
  vendor: string;
  vram: string;
  region: string;
  gpuName: string;
  storage: string;
  provider: string;
}

interface SortState {
  sortBy: "price" | "vram" | "none";
  sortOrder: "asc" | "desc";
}

interface UseFilteredProvidersOptions {
  providers: Provider[] | undefined;
  searchQuery: string;
}

interface UseFilteredProvidersReturn {
  filteredProviders: Provider[];
  filterTrigger: React.ReactElement;
  clearAllFilters: () => void;
  activeFiltersCount: number;
  isLoading: boolean;
  updateSorting: (
    sortBy: "price" | "vram" | "none",
    sortOrder?: "asc" | "desc"
  ) => void;
  sorting: SortState;
}

// Predefined storage cutoffs as minimum storage filters (in GB)
const STORAGE_OPTIONS = [
  { label: "20GB+", value: 20 },
  { label: "100GB+", value: 100 },
  { label: "200GB+", value: 200 },
  { label: "500GB+", value: 500 },
  { label: "1TB+", value: 1000 },
  { label: "2TB+", value: 2000 },
  { label: "5TB+", value: 5000 },
  { label: "10TB+", value: 10000 },
  { label: "50TB+", value: 50000 },
];

// Helper function to convert storage to GB for comparison
const convertStorageToGB = (value: number, unit: string): number => {
  switch (unit.toLowerCase()) {
    case "gi":
    case "gb":
      return value;
    case "ti":
    case "tb":
      return value * 1000;
    case "mi":
    case "mb":
      return value / 1000;
    default:
      return value; // assume GB if unknown
  }
};

export function useFilteredProviders({
  providers,
  searchQuery,
}: UseFilteredProvidersOptions): UseFilteredProvidersReturn {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  // Initialize filters from URL params
  const [filters, setFilters] = useState<FilterState>({
    vendor: searchParams.get("vendor") || "all",
    vram: searchParams.get("vram") || "all",
    region: searchParams.get("region") || "all",
    gpuName: searchParams.get("gpuName") || "all",
    storage: searchParams.get("storage") || "all",
    provider: searchParams.get("provider") || "all",
  });

  // Initialize sorting from URL params
  const [sorting, setSorting] = useState<SortState>({
    sortBy: (searchParams.get("sortBy") as "price" | "vram") || "none",
    sortOrder: (searchParams.get("sortOrder") as "asc" | "desc") || "asc",
  });

  // Update URL when filters change
  const updateURL = useCallback(
    (newFilters: FilterState, newSorting?: SortState) => {
      const params = new URLSearchParams(searchParams.toString());

      // Set or remove each filter param
      Object.entries(newFilters).forEach(([key, value]) => {
        if (value === "all") {
          params.delete(key);
        } else {
          params.set(key, value);
        }
      });

      // Set or remove sorting params
      if (newSorting) {
        if (newSorting.sortBy === "none") {
          params.delete("sortBy");
          params.delete("sortOrder");
        } else {
          params.set("sortBy", newSorting.sortBy);
          params.set("sortOrder", newSorting.sortOrder);
        }
      }

      // Update the URL without triggering a page reload
      const newURL = `${pathname}${
        params.toString() ? `?${params.toString()}` : ""
      }`;
      router.replace(newURL, { scroll: false });
    },
    [pathname, router, searchParams]
  );

  // Update filters and URL
  const updateFilter = useCallback(
    (key: keyof FilterState, value: string) => {
      const newFilters = { ...filters, [key]: value };
      setFilters(newFilters);
      updateURL(newFilters);
    },
    [filters, updateURL]
  );

  // Update sorting
  const updateSorting = useCallback(
    (sortBy: "price" | "vram" | "none", sortOrder: "asc" | "desc" = "asc") => {
      const newSorting: SortState = { sortBy, sortOrder };
      setSorting(newSorting);
      updateURL(filters, newSorting);
    },
    [filters, updateURL]
  );

  // Clear all filters
  const clearAllFilters = useCallback(() => {
    const clearedFilters: FilterState = {
      vendor: "all",
      vram: "all",
      region: "all",
      gpuName: "all",
      storage: "all",
      provider: "all",
    };
    const clearedSorting: SortState = {
      sortBy: "none",
      sortOrder: "asc",
    };
    setFilters(clearedFilters);
    setSorting(clearedSorting);
    updateURL(clearedFilters, clearedSorting);
  }, [updateURL]);

  // Update state when URL changes (e.g., back/forward navigation)
  useEffect(() => {
    const newFilters: FilterState = {
      vendor: searchParams.get("vendor") || "all",
      vram: searchParams.get("vram") || "all",
      region: searchParams.get("region") || "all",
      gpuName: searchParams.get("gpuName") || "all",
      storage: searchParams.get("storage") || "all",
      provider: searchParams.get("provider") || "all",
    };
    const newSorting: SortState = {
      sortBy: (searchParams.get("sortBy") as "price" | "vram") || "none",
      sortOrder: (searchParams.get("sortOrder") as "asc" | "desc") || "asc",
    };
    setFilters(newFilters);
    setSorting(newSorting);
  }, [searchParams]);

  // Calculate unique filter options
  const filterOptions = useMemo(() => {
    if (!providers)
      return {
        vendors: [],
        vRams: [],
        regions: [],
        gpuNames: [],
        providers: [],
      };

    return {
      vendors: Array.from(new Set(providers.map((p) => p.gpuVendor))),
      vRams: Array.from(new Set(providers.map((p) => p.gpuMemory))),
      regions: Array.from(new Set(providers.map((p) => p.region))),
      gpuNames: Array.from(new Set(providers.map((p) => p.gpuShortName))),
      providers: Array.from(new Set(providers.map((p) => p.provider))),
    };
  }, [providers]);

  // Filter and sort providers based on search and selected filters
  const filteredProviders = useMemo(() => {
    if (!providers) return [];

    let filtered = providers.filter((provider) => {
      // Search filter
      const matchesSearch = searchQuery
        ? provider.gpuShortName
            .toLowerCase()
            .includes(searchQuery.toLowerCase()) ||
          provider.providerName
            .toLowerCase()
            .includes(searchQuery.toLowerCase())
        : true;

      // Vendor filter
      const matchesVendor =
        filters.vendor === "all" ? true : provider.gpuVendor === filters.vendor;

      // VRAM filter
      const matchesVram =
        filters.vram === "all" ? true : provider.gpuMemory === filters.vram;

      // Region filter
      const matchesRegion =
        filters.region === "all" ? true : provider.region === filters.region;

      // GPU name filter
      const matchesGpuName =
        filters.gpuName === "all"
          ? true
          : provider.gpuShortName === filters.gpuName;

      // Provider filter
      const matchesProvider =
        filters.provider === "all"
          ? true
          : provider.provider === filters.provider;

      // Storage filter: check if provider storage meets minimum requirement
      const matchesStorage =
        filters.storage === "all"
          ? true
          : (() => {
              const providerStorageGB = convertStorageToGB(
                provider.availableStorage.value,
                provider.availableStorage.unit
              );
              const minStorageGB = parseInt(filters.storage);
              return providerStorageGB >= minStorageGB;
            })();

      return (
        matchesSearch &&
        matchesVendor &&
        matchesVram &&
        matchesRegion &&
        matchesGpuName &&
        matchesProvider &&
        matchesStorage
      );
    });

    // Apply sorting
    if (sorting.sortBy !== "none") {
      filtered.sort((a, b) => {
        let aValue, bValue;

        if (sorting.sortBy === "price") {
          aValue = a.price;
          bValue = b.price;
        } else if (sorting.sortBy === "vram") {
          // Extract numeric value from vRAM string (e.g., "24GB" -> 24)
          aValue = parseInt(a.gpuMemory.replace(/[^\d]/g, ""));
          bValue = parseInt(b.gpuMemory.replace(/[^\d]/g, ""));
        } else {
          return 0;
        }

        if (sorting.sortOrder === "asc") {
          return aValue - bValue;
        } else {
          return bValue - aValue;
        }
      });
    }

    return filtered;
  }, [providers, searchQuery, filters, sorting]);

  const activeFiltersCount = useMemo(() => {
    return Object.entries(filters).filter(
      ([key, value]) => key !== "gpuName" && value !== "all"
    ).length;
  }, [filters]);

  const filterTrigger = (
    <div className="flex gap-4 flex-wrap">
      {/* Provider Filter */}
      <Select
        value={filters.provider}
        onValueChange={(value: any) => updateFilter("provider", value)}
      >
        <SelectTrigger>
          <div className="flex items-center gap-2">
            <Building className="w-3 h-3" />
            <SelectValue placeholder="All Providers" />
          </div>
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">All Providers</SelectItem>
          {filterOptions.providers.map((provider) => (
            <SelectItem key={provider} value={provider}>
              {provider.charAt(0).toUpperCase() + provider.slice(1)}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      <Select
        value={filters.gpuName}
        onValueChange={(value: any) => updateFilter("gpuName", value)}
      >
        <SelectTrigger className="w-40">
          <div className="flex items-center gap-2">
            <Zap className="w-4 h-4" />
            <SelectValue placeholder="All GPUs" />
          </div>
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">All GPUs</SelectItem>
          {filterOptions.gpuNames.map((gpuName) => (
            <SelectItem key={gpuName} value={gpuName}>
              {gpuName.toUpperCase()}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      {/* VRAM Filter */}
      <Select
        value={filters.vram}
        onValueChange={(value: any) => updateFilter("vram", value)}
      >
        <SelectTrigger>
          <div className="flex items-center gap-2">
            <Cpu className="w-3 h-3" />
            <SelectValue placeholder="All vRAM" />
          </div>
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">All vRAM</SelectItem>
          {filterOptions.vRams.map((vram) => (
            <SelectItem key={vram} value={vram}>
              {vram}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>

      {/* Region Filter */}
      <Select
        value={filters.region}
        onValueChange={(value: any) => updateFilter("region", value)}
      >
        <SelectTrigger>
          <div className="flex items-center gap-2">
            <MapPin className="w-3 h-3" />
            <SelectValue placeholder="All Regions" />
          </div>
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">All Regions</SelectItem>
          {filterOptions.regions.map((region) => (
            <SelectItem key={region} value={region}>
              {region}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>

      {/* Storage Filter */}
      <Select
        value={filters.storage}
        onValueChange={(value: any) => updateFilter("storage", value)}
      >
        <SelectTrigger>
          <div className="flex items-center gap-2">
            <HardDrive className="w-3 h-3" />
            <SelectValue placeholder="All Storage" />
          </div>
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">All Storage</SelectItem>
          {STORAGE_OPTIONS.map((option) => (
            <SelectItem key={option.value} value={option.value.toString()}>
              {option.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>

      {/* Sort by Price */}
      <Select
        value={
          sorting.sortBy === "price" ? `price-${sorting.sortOrder}` : "none"
        }
        onValueChange={(value: any) => {
          if (value === "none") {
            updateSorting("none");
          } else {
            const [sortBy, sortOrder] = value.split("-");
            updateSorting(sortBy as "price", sortOrder as "asc" | "desc");
          }
        }}
      >
        <SelectTrigger>
          <div className="flex items-center gap-2">
            <DollarSign className="w-3 h-3" />
            <SelectValue placeholder="Sort by Price" />
          </div>
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="none">No sorting</SelectItem>
          <SelectItem value="price-asc">
            <div className="flex items-center gap-2">
              <ArrowUp className="w-3 h-3" />
              Price: Low to High
            </div>
          </SelectItem>
          <SelectItem value="price-desc">
            <div className="flex items-center gap-2">
              <ArrowDown className="w-3 h-3" />
              Price: High to Low
            </div>
          </SelectItem>
        </SelectContent>
      </Select>

      {/* Sort by vRAM */}
      <Select
        value={sorting.sortBy === "vram" ? `vram-${sorting.sortOrder}` : "none"}
        onValueChange={(value: any) => {
          if (value === "none") {
            updateSorting("none");
          } else {
            const [sortBy, sortOrder] = value.split("-");
            updateSorting(sortBy as "vram", sortOrder as "asc" | "desc");
          }
        }}
      >
        <SelectTrigger>
          <div className="flex items-center gap-2">
            <Cpu className="w-3 h-3" />
            <SelectValue placeholder="Sort by vRAM" />
          </div>
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="none">No sorting</SelectItem>
          <SelectItem value="vram-asc">
            <div className="flex items-center gap-2">
              <ArrowUp className="w-3 h-3" />
              vRAM: Low to High
            </div>
          </SelectItem>
          <SelectItem value="vram-desc">
            <div className="flex items-center gap-2">
              <ArrowDown className="w-3 h-3" />
              vRAM: High to Low
            </div>
          </SelectItem>
        </SelectContent>
      </Select>
    </div>
  );

  return {
    filteredProviders,
    filterTrigger,
    clearAllFilters,
    activeFiltersCount,
    isLoading: !providers,
    updateSorting,
    sorting,
  };
}
