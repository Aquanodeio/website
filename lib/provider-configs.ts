import { ProviderType } from "./../types";

export interface SupportedDeploymentConfig {
  gpu: boolean;
  ram: boolean;
  vcpu: boolean;
  storage: boolean;
}

export const configSupportedByProvider: Record<
  ProviderType,
  SupportedDeploymentConfig
> = {
  [ProviderType.AKASH]: {
    gpu: true,
    ram: true,
    vcpu: true,
    storage: true,
  },
  [ProviderType.VOLTAGE_PARK]: {
    gpu: false,
    ram: false,
    vcpu: false,
    storage: false,
  },
  [ProviderType.DATACRUNCH]: {
    gpu: false,
    ram: false,
    vcpu: false,
    storage: false,
  },
  [ProviderType.HOTAISLE]: {
    gpu: false,
    ram: false,
    vcpu: false,
    storage: false,
  },
  [ProviderType.VASTAI]: {
    gpu: false,
    ram: false,
    vcpu: false,
    storage: false,
  },
  [ProviderType.MASSECOMPUTE]: {
    gpu: false,
    ram: false,
    vcpu: false,
    storage: false,
  },
  [ProviderType.CUDO_COMPUTE]: {
    gpu: false,
    ram: false,
    vcpu: false,
    storage: false,
  },
  [ProviderType.HYPERSTACK]: {
    gpu: false,
    ram: false,
    vcpu: false,
    storage: false,
  },
};
