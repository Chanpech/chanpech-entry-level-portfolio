import { GtagFunction } from "./gtag";

export {}; // Ensures this is treated as a module

declare global {
  interface Window {
    dataLayer: unknown[];
    gtag: GtagFunction;
  }
}
