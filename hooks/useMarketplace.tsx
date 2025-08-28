import { Provider } from "@/components/ui/MarketplaceCard";
import { api } from "@/lib/api-client";
import { QueryConfig } from "@/lib/react-query";
import { useQuery, queryOptions } from "@tanstack/react-query";

export interface ApiResponse<T> {
  data: T;
  message: string;
  success: boolean;
  timestamp: string;
}

export const getMarketplace = async (
  provider = "akash"
): Promise<{ providers: Provider[] }> => {
  const response = await api.get<ApiResponse<Provider[]>>(`/marketplace`);
  return {
    providers: response.data.data
      .filter((p) => p.provider !== "datacrunch")
      .map((provider) => ({
        ...provider,
        id: provider.gpuShortName + provider.providerId, // Ensure unique ID for React keys
        gpuMemory: provider.gpuMemory.replace("Gi", "gb"), // Normalize GPU memory format
        provider:
          provider.provider === "voltagepark"
            ? ("Voltage Park" as Provider["provider"])
            : provider.provider,
      }))
      .sort((a, b) => {
        // Sort by GPU VRAM in descending order (highest VRAM first)
        // Parse GPU memory strings like "24Gi", "16Gi" to numeric values
        const parseGpuMemory = (memory: string | undefined): number => {
          if (!memory) return 0;
          const match = memory.match(/(\d+)(Gi?|[Gg][Bb])/);
          return match ? parseInt(match[1], 10) : 0;
        };

        const aVram = parseGpuMemory(a.gpuMemory);
        const bVram = parseGpuMemory(b.gpuMemory);
        return bVram - aVram;
      }),
  };
};

export const getMarketplaceQueryOptions = () => {
  return queryOptions({
    queryKey: ["marketplace", "akash"],
    queryFn: () => getMarketplace(),
  });
};

type UseMarketplaceOptions = {
  queryConfig?: QueryConfig<typeof getMarketplaceQueryOptions>;
};

export const useMarketplace = ({ queryConfig }: UseMarketplaceOptions = {}) => {
  return useQuery({
    ...getMarketplaceQueryOptions(),
    ...queryConfig,
  });
};
