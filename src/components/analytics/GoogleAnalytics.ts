import { useEffect } from "react";
import { GtagFunction } from "@/types/gtag";

const GoogleAnalytics = () => {
  const gaId = import.meta.env.VITE_GA_ID;

  useEffect(() => {
    if (!gaId || typeof window === "undefined") return;

    // Load script
    const script = document.createElement("script");
    script.src = `https://www.googletagmanager.com/gtag/js?id=${gaId}`;
    script.async = true;
    
    // Initialize dataLayer and gtag
    window.dataLayer = window.dataLayer || [];
    const gtag: GtagFunction = function (...args){
      window.dataLayer.push(args);
    }
    window.gtag = gtag;
    
    gtag("js", new Date());
    gtag("config", gaId, {
      send_page_view: false // Optional: handle page views manually
    });

    document.head.appendChild(script);

    // No cleanup needed - we want this to persist
  }, [gaId]);

  if (!gaId) {
    console.error("Missing Google Analytics ID. Please check the .env file.");
    return null;
  }

  return null;
};

export default GoogleAnalytics;