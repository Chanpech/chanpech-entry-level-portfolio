// HomeLabPage.tsx
import { motion } from "framer-motion";
import HardwareCard from "../components/HardwareCard";
import ServiceBadge from "../components/ServiceBadge";
import raspberry from '../assets/raspberry-pi.webp'
import macmini from '../assets/mac-mini.webp'

export default function HomeLabPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 p-4 md:p-8">
      {/* Hero Section */}
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-12 text-center"
      >
        <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">
          My Homelab Server
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          A self-hosted ecosystem powered by a Mac Mini, Raspberry Pi, and custom services.
        </p>
      </motion.section>

      {/* Hardware Showcase */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold text-gray-700 dark:text-gray-200 mb-6">
          Hardware Stack
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <HardwareCard 
            title="Mac Mini (2012)"
            role="Main Server"
            specs={["16GB RAM", "1TB Split Fusion Drive + 1TB Backup storage", "Ubuntu OS", "Casaos - Private cloud service"]}
            image={macmini}
          />
          <HardwareCard 
            title="Raspberry Pi 3"
            role="Network Services"
            specs={["8GB RAM", "Pi-hole", "Traffic Gateway"]}
            image={raspberry}
          />
        </div>
      </section>

      {/* Software Stack */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold text-gray-700 dark:text-gray-200 mb-6">
          Software & Services
        </h2>
        <div className="flex flex-wrap gap-3">
          <ServiceBadge name="Docker" color="blue" />
          <ServiceBadge name="Portainer" color="purple" />
          <ServiceBadge name="Openvpn Server" color="orange" />
          <ServiceBadge name="Apache" color="blue" />
          <ServiceBadge name="Ngnix" color="purple" />
          <ServiceBadge name="NAS" color="orange" />
        </div>
      </section>
    </div>
  );
}