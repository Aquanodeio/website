import Link from "next/link";
import { getMarketplace } from "@/hooks/useMarketplace";
import { PricingComparisonClient } from "./PricingComparisonClient";

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

export default async function PricingComparisonSection() {
  // Fetch marketplace data
  let aquanodePrices: Record<string, number> = {};

  try {
    const { providers } = await getMarketplace();

    // Get cheapest prices for each GPU type
    aquanodePrices = {
      b200: getCheapestPrice(providers, "b200") || 3.99,
      h100: getCheapestPrice(providers, "h100") || 1.21,
      h200: getCheapestPrice(providers, "h200") || 2.09,
      a100: getCheapestPrice(providers, "a100") || 0.63,
    };
  } catch (error) {
    console.error("Failed to fetch marketplace data:", error);
    // Fallback to default prices if API fails
    aquanodePrices = {
      b200: 3.99,
      h100: 1.21,
      h200: 2.09,
      a100: 0.63,
    };
  }

  const pricingRows = [
    {
      gpu: "B200 SXM 180GB",
      runpod: "$5.98/hr",
      aquanode: `$${aquanodePrices.b200.toFixed(2)}/hr`,
      traditional: "$18/hr",
    },
    {
      gpu: "H200 SXM 141GB",
      runpod: "$3.59/hr",
      aquanode: `$${aquanodePrices.h200.toFixed(2)}/hr`,
      traditional: "$14/hr",
    },
    {
      gpu: "H100 SXM 80GB",
      runpod: "$2.69/hr",
      aquanode: `$${aquanodePrices.h100.toFixed(2)}/hr`,
      traditional: "$10/hr",
    },
    {
      gpu: "A100 SXM 80GB",
      runpod: "$1.39/hr",
      aquanode: `$${aquanodePrices.a100.toFixed(2)}/hr`,
      traditional: "$4/hr",
    },
  ];

  const metricsRows = [
    {
      metric: "Setup Time",
      runpod: "60 seconds",
      aquanode: "< 60 seconds",
      traditional: "1 wk+",
    },
    {
      metric: "Commitment Period",
      runpod: "No Commitment",
      aquanode: "No Commitment",
      traditional: "Month to Weeks contract",
    },
    {
      metric: "Support",
      runpod: "—",
      aquanode: "24/7",
      traditional: "—",
    },
  ];

  return (
    <PricingComparisonClient
      pricingRows={pricingRows}
      metricsRows={metricsRows}
    />
  );
}
