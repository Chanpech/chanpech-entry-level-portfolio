import { useEffect } from "react"

const GoogleAnalytics = () => {
    const gaId = import.meta.env.VITE_GA_ID;    // Read the ID from the environment variable

    if(!gaId){
        console.error("Missing Google Analytics ID. Please check the .env file.");
        return ;
    }

    useEffect(()=> {
        //Add the Google Ananlytics script to the document
        const script = document.createElement("script");
        script.src =  `https://www.googletagmanager.com/gtag/js?id=${gaId}`;
        script.async = true;
        document.head.appendChild(script);

        // Initialize the dataLayer and gtag function
        window.dataLayer = window.dataLayer || [];
        function gtag(...args: any[]) {
        window.dataLayer.push(args);
        }
        window.gtag = gtag;

        // Configure Google Analytics
        gtag("js", new Date());
        gtag("config", gaId);

        // Cleanup function to remove the script when the component unmounts
        return () => {
            document.head.removeChild(script);
        };
    },[]);
    
    return null;
};

export default GoogleAnalytics;