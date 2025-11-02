import Image from "next/image";
import GPUVector from "@/assets/home/gpu-picker/GPU-Vector.svg";
import { getMarketplace } from "@/hooks/useMarketplace";
import { GPUPickerClient } from "./GPUPickerClient";

// Helper function to find cheapest price for a GPU type
const getCheapestPrice = (
  providers: Array<{ gpuShortName: string; price: number; gpuMemory: string }>,
  gpuName: string
): number | null => {
  const matchingProviders = providers.filter((p) =>
    p.gpuShortName.toLowerCase().includes(gpuName.toLowerCase())
  );

  if (matchingProviders.length === 0) return null;

  return Math.min(...matchingProviders.map((p) => p.price));
};

export default async function GPUPickerSection() {
  // Fetch marketplace data
  let aquanodePrices: Record<string, number> = {};

  try {
    const { providers } = await getMarketplace();

    // Get cheapest prices for each GPU type
    aquanodePrices = {
      b200: getCheapestPrice(providers, "b200") || 3.99,
      h100: getCheapestPrice(providers, "h100") || 1.99,
      a100: getCheapestPrice(providers, "a100") || 2.59,
    };
  } catch (error) {
    console.error("Failed to fetch marketplace data:", error);
    // Fallback to default prices if API fails
    aquanodePrices = {
      b200: 3.99,
      h100: 1.99,
      a100: 2.59,
    };
  }

  const gpuCards = [
    {
      model: "B200",
      vram: "180GB",
      vcpu: "30.00",
      memory: "184.00 GB",
      storageSpace: "9 TB",
      interface: "SXM6",
      price: `$${aquanodePrices.b200.toFixed(2)}/hr`,
    },
    {
      model: "H100",
      vram: "80GB",
      vcpu: "30.00",
      memory: "185.00 GB",
      storageSpace: "9 TB",
      interface: "SXM5",
      price: `$${aquanodePrices.h100.toFixed(2)}/hr`,
    },
    {
      model: "A100",
      vram: "80GB",
      vcpu: "44.00",
      memory: "182.00 GB",
      storageSpace: "9 TB",
      interface: "SXM",
      price: `$${aquanodePrices.a100.toFixed(2)}/hr`,
    },
  ];

  return <GPUPickerClient gpuCards={gpuCards} />;
}
