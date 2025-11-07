import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const toTitleCase = (str: string): string => {
  return str
    .split(" ")
    .map((word) => word[0].toUpperCase() + word.slice(1).toLowerCase())
    .join(" ");
};

export const formatStorageValue = (
  value: number,
  unit: string
): { displayValue: string; displayUnit: string } => {
  // Only convert if unit is GB and value is >= 1024 (1TB)
  if (unit === "GB" && value >= 1024) {
    return {
      displayValue: (value / 1024).toFixed(2),
      displayUnit: "TB",
    };
  }
  return {
    displayValue: value.toFixed(2),
    displayUnit: unit,
  };
};
