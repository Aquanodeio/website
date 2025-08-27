"use client";

import React, { useState, useMemo, useCallback, useEffect } from "react";
import { useSearchParams, useRouter, usePathname } from "next/navigation";
import { Filter, Cpu, MapPin, Zap, HardDrive, X } from "lucide-react";
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
  });

  // Update URL when filters change
  const updateURL = useCallback(
    (newFilters: FilterState) => {
      const params = new URLSearchParams(searchParams.toString());

      // Set or remove each filter param
      Object.entries(newFilters).forEach(([key, value]) => {
        if (value === "all") {
          params.delete(key);
        } else {
          params.set(key, value);
        }
      });

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

  // Clear all filters
  const clearAllFilters = useCallback(() => {
    const clearedFilters: FilterState = {
      vendor: "all",
      vram: "all",
      region: "all",
      gpuName: "all",
      storage: "all",
    };
    setFilters(clearedFilters);
    updateURL(clearedFilters);
  }, [updateURL]);

  // Update state when URL changes (e.g., back/forward navigation)
  useEffect(() => {
    const newFilters: FilterState = {
      vendor: searchParams.get("vendor") || "all",
      vram: searchParams.get("vram") || "all",
      region: searchParams.get("region") || "all",
      gpuName: searchParams.get("gpuName") || "all",
      storage: searchParams.get("storage") || "all",
    };
    setFilters(newFilters);
  }, [searchParams]);

  // Calculate unique filter options
  const filterOptions = useMemo(() => {
    if (!providers)
      return { vendors: [], vRams: [], regions: [], gpuNames: [] };

    return {
      vendors: Array.from(new Set(providers.map((p) => p.gpuVendor))),
      vRams: Array.from(new Set(providers.map((p) => p.gpuMemory))),
      regions: Array.from(new Set(providers.map((p) => p.region))),
      gpuNames: Array.from(new Set(providers.map((p) => p.gpuShortName))),
    };
  }, [providers]);

  // Filter providers based on search and selected filters
  const filteredProviders = useMemo(() => {
    if (!providers) return [];

    return providers.filter((provider) => {
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
        matchesStorage
      );
    });
  }, [providers, searchQuery, filters]);

  const activeFiltersCount = useMemo(() => {
    return Object.entries(filters).filter(
      ([key, value]) => key !== "gpuName" && value !== "all"
    ).length;
  }, [filters]);

  const filterTrigger = (
    <div className="flex gap-4">
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
    </div>
  );

  return {
    filteredProviders,
    filterTrigger,
    clearAllFilters,
    activeFiltersCount,
    isLoading: !providers,
  };
}
