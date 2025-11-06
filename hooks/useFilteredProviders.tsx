"use client";

import React, { useState, useMemo, useCallback, useEffect } from "react";
import { useSearchParams, useRouter, usePathname } from "next/navigation";
import {
  Cpu,
  MapPin,
  Zap,
  HardDrive,
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
import { Provider } from "@/components/Marketplace/MarketplaceCard";
import { ProviderType } from "@/types";
import { configSupportedByProvider } from "@/lib/provider-configs";

interface FilterState {
  vendor: string;
  vram: string;
  region: string;
  gpuName: string;
  storage: string;
  provider: string;
}

interface SortState {
  priceSort: "none" | "asc" | "desc";
  vramSort: "none" | "asc" | "desc";
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
  togglePriceSort: () => void;
  toggleVramSort: () => void;
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
    priceSort:
      (searchParams.get("priceSort") as "none" | "asc" | "desc") || "none",
    vramSort:
      (searchParams.get("vramSort") as "none" | "asc" | "desc") || "none",
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
        if (newSorting.priceSort === "none") {
          params.delete("priceSort");
        } else {
          params.set("priceSort", newSorting.priceSort);
        }

        if (newSorting.vramSort === "none") {
          params.delete("vramSort");
        } else {
          params.set("vramSort", newSorting.vramSort);
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

  // Toggle price sorting: none -> asc -> desc -> none
  const togglePriceSort = useCallback(() => {
    const newSorting: SortState = { ...sorting };

    if (newSorting.priceSort === "none") {
      newSorting.priceSort = "asc";
    } else if (newSorting.priceSort === "asc") {
      newSorting.priceSort = "desc";
    } else {
      newSorting.priceSort = "none";
    }

    setSorting(newSorting);
    updateURL(filters, newSorting);
  }, [sorting, filters, updateURL]);

  // Toggle vRAM sorting: none -> asc -> desc -> none
  const toggleVramSort = useCallback(() => {
    const newSorting: SortState = { ...sorting };

    if (newSorting.vramSort === "none") {
      newSorting.vramSort = "asc";
    } else if (newSorting.vramSort === "asc") {
      newSorting.vramSort = "desc";
    } else {
      newSorting.vramSort = "none";
    }

    setSorting(newSorting);
    updateURL(filters, newSorting);
  }, [sorting, filters, updateURL]);

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
      priceSort: "none",
      vramSort: "none",
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
      priceSort:
        (searchParams.get("priceSort") as "none" | "asc" | "desc") || "none",
      vramSort:
        (searchParams.get("vramSort") as "none" | "asc" | "desc") || "none",
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

    // Normalize vRAM values to GB format
    const normalizeVram = (vram: string) => {
      return vram.replace(/gi|gb|Gb|Gi|GI/gi, "GB");
    };

    return {
      vendors: Array.from(new Set(providers.map((p) => p.gpuVendor))),
      vRams: Array.from(
        new Set(providers.map((p) => normalizeVram(p.gpuMemory)))
      ).sort((a, b) => {
        // Sort by numeric value
        const aNum = parseInt(a);
        const bNum = parseInt(b);
        return bNum - aNum; // Descending order
      }),
      regions: Array.from(new Set(providers.map((p) => p.region))),
      gpuNames: Array.from(new Set(providers.map((p) => p.gpuShortName))),
      providers: Object.values(ProviderType),
    };
  }, [providers]);

  // Filter and sort providers based on search and selected filters
  const filteredProviders = useMemo(() => {
    if (!providers) return [];

    const filtered = providers.filter((provider) => {
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

      // VRAM filter - normalize before comparing
      const normalizeVram = (vram: string) => {
        return vram.replace(/gi|gb|Gb|Gi|GI/gi, "GB");
      };
      const matchesVram =
        filters.vram === "all"
          ? true
          : normalizeVram(provider.gpuMemory) === filters.vram;

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
    if (sorting.priceSort !== "none" || sorting.vramSort !== "none") {
      filtered.sort((a, b) => {
        // First sort by price if enabled
        if (sorting.priceSort !== "none") {
          // Handle edge cases where price might be null, undefined, or 0
          const aSupportsGpuConfig = configSupportedByProvider[a.provider]?.gpu;
          const bSupportsGpuConfig = configSupportedByProvider[b.provider]?.gpu;

          // If a GPU count is explicitly selected, use total price (price * desiredGpuCount)
          // for providers that support GPU configs. Otherwise (no explicit gpuCount),
          // sort by price-per-GPU so listings are comparable.
          const priceA = aSupportsGpuConfig ? a.price : a.price * a.available;
          const priceB = bSupportsGpuConfig ? b.price : b.price * b.available;

          const priceDiff =
            sorting.priceSort === "asc" ? priceA - priceB : priceB - priceA;

          // If prices are different, return the difference
          return priceDiff;
        }

        // Then sort by vRAM if enabled (as secondary sort)
        if (sorting.vramSort !== "none") {
          const aVram = parseInt(a.gpuMemory.replace(/[^\d]/g, "")) || 0;
          const bVram = parseInt(b.gpuMemory.replace(/[^\d]/g, "")) || 0;
          return sorting.vramSort === "asc" ? aVram - bVram : bVram - aVram;
        }

        return 0;
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
        <SelectTrigger
          className={`h-[44px] rounded-[10px] backdrop-blur-sm ${
            filters.provider !== "all"
              ? "!bg-[#2A2A2A] text-white border border-gray-700"
              : "!bg-white text-gray-900 border border-gray-300 hover:border-gray-400"
          }`}
          style={{ fontFamily: "var(--font-inter)" }}
        >
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
        <SelectTrigger
          className={`w-40 h-[44px] rounded-[10px] backdrop-blur-sm ${
            filters.gpuName !== "all"
              ? "!bg-[#2A2A2A] text-white border border-gray-700"
              : "!bg-white text-gray-900 border border-gray-300 hover:border-gray-400"
          }`}
          style={{ fontFamily: "var(--font-inter)" }}
        >
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
        <SelectTrigger
          className={`h-[44px] rounded-[10px] backdrop-blur-sm ${
            filters.vram !== "all"
              ? "!bg-[#2A2A2A] text-white border border-gray-700"
              : "!bg-white text-gray-900 border border-gray-300 hover:border-gray-400"
          }`}
          style={{ fontFamily: "var(--font-inter)" }}
        >
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
        <SelectTrigger
          className={`h-[44px] rounded-[10px] backdrop-blur-sm ${
            filters.region !== "all"
              ? "!bg-[#2A2A2A] text-white border border-gray-700"
              : "!bg-white text-gray-900 border border-gray-300 hover:border-gray-400"
          }`}
          style={{ fontFamily: "var(--font-inter)" }}
        >
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
        <SelectTrigger
          className={`h-[44px] rounded-[10px] backdrop-blur-sm ${
            filters.storage !== "all"
              ? "!bg-[#2A2A2A] text-white border border-gray-700"
              : "!bg-white text-gray-900 border border-gray-300 hover:border-gray-400"
          }`}
          style={{ fontFamily: "var(--font-inter)" }}
        >
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

      {/* Sort by Price - Toggle Button */}
      <button
        onClick={togglePriceSort}
        className={`flex items-center justify-center gap-2 px-4 h-[44px] rounded-[10px] transition-all font-normal text-sm backdrop-blur-sm ${
          sorting.priceSort !== "none"
            ? "bg-[#2A2A2A] text-white border border-gray-700"
            : "bg-white text-gray-900 border border-gray-300 hover:border-gray-400"
        }`}
        style={{ fontFamily: "var(--font-inter)" }}
      >
        <DollarSign className="w-3 h-3" />
        <span>Price</span>
        {sorting.priceSort === "asc" && <ArrowUp className="w-3 h-3" />}
        {sorting.priceSort === "desc" && <ArrowDown className="w-3 h-3" />}
        {sorting.priceSort === "none" && (
          <ArrowUpDown className="w-3 h-3 opacity-50" />
        )}
      </button>

      {/* Sort by vRAM - Toggle Button */}
      <button
        onClick={toggleVramSort}
        className={`flex items-center justify-center gap-2 px-4 h-[44px] rounded-[10px] transition-all font-normal text-sm backdrop-blur-sm ${
          sorting.vramSort !== "none"
            ? "bg-[#2A2A2A] text-white border border-gray-700"
            : "bg-white text-gray-900 border border-gray-300 hover:border-gray-400"
        }`}
        style={{ fontFamily: "var(--font-inter)" }}
      >
        <Cpu className="w-3 h-3" />
        <span>vRAM</span>
        {sorting.vramSort === "asc" && <ArrowUp className="w-3 h-3" />}
        {sorting.vramSort === "desc" && <ArrowDown className="w-3 h-3" />}
        {sorting.vramSort === "none" && (
          <ArrowUpDown className="w-3 h-3 opacity-50" />
        )}
      </button>
    </div>
  );

  return {
    filteredProviders,
    filterTrigger,
    clearAllFilters,
    activeFiltersCount,
    isLoading: !providers,
    togglePriceSort,
    toggleVramSort,
    sorting,
  };
}
