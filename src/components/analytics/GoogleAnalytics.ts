// import { useEffect } from "react";

// const GoogleAnalytics = () => {
//   const gaId = import.meta.env.VITE_GA_ID;

//   useEffect(() => {
//     if (!gaId || typeof window === "undefined") return;

//     // Avoid double insertion
//     if (document.querySelector(`script[src*="googletagmanager.com/gtag/js"]`)) return;

//     // Load GA script
//     const script = document.createElement("script");
//     script.src = `https://www.googletagmanager.com/gtag/js?id=${gaId}`;
//     script.async = true;
//     document.head.appendChild(script);

//     // Wait for script to load before calling gtag
//     script.onload = () => {
//       window.dataLayer = window.dataLayer || [];
//       function gtag(...args: Arra) {
//         window.dataLayer.push(args);
//       }
//       window.gtag = gtag;

//       gtag("js", new Date());
//       gtag("config", gaId); // or send_page_view: false if routing manually
//     };
//   }, [gaId]);

//   return null;
// };

// export default GoogleAnalytics;
