// HomeLabPage.tsx
import { motion } from "framer-motion";
import HardwareCard from "../components/HardwareCard";
import ServiceBadge from "../components/ServiceBadge";
import raspberry from '../assets/raspberry-pi.webp'
import macmini from '../assets/mac-mini.webp'
import { Button } from "@/components/ui/button";
import { BiArrowBack } from "react-icons/bi";
import { Link } from "react-router-dom";
import { BlogPost } from "@/components/BlogPost";

const buildJourney = [
  {
    title: "The Research",
    date: "January 2025",
    content: `Started researching homelab setups after getting interested in self-hosting.
    - Key requirements: Low power consumption, 24/7 uptime, expandability
    - Chose the Mac Mini for its compact size and power efficiency
    - Added Raspberry Pi for network-level services`,
    image: "/memoji/Questioned.PNG",
  },
  {
    title: "Hardware Acquisition",
    date: "February 2025",
    content: `Found a used 2012 Mac Mini, Raspberry Pi 3, and j5Create external hard drive enclosure for the lows. 
    - Diagnoise these devices for any problems (focus on fusion drive, rams)
    - Added external 1TB HDD storage for media and backups
    - Repurposed an old Raspberry Pi 3 for network services`,
    image: "/memoji/HappySmile.PNG",
  },
  {
    title: "Initial Setup",
    date: "March 2025",
    content: `Installed Ubuntu Desktop (for ease of WIFI configuration) on the Mac Mini and did a clean Raspbian install on the pi.
    - Installed CasaOS for easy self-hosted app deployment
    - Configured SSH access and basic security like UFW and Fail2Ban
    - Set up Docker and Portainer for container management`,
    image: "/memoji/TakeALook.PNG",
  },
  {
    title: "Current Status",
    date: "Present",
    content: `Now running multiple services:
    - Pi-hole DNS Server on Raspberry Pi for network-wide ad blocking
    - NAS functions through Casaos built in storage features
    - Openvpn server with authentication for secure remote access
    - Containerized deployment test environment for web applications`,
    image: "/memoji/Bye.PNG",
  }
]

// Add this to your constants near buildJourney
const documentationResources = [
  {
    title: "CasaOS Documentation",
    url: "https://casaos.zimaspace.com/",
    category: "Self-Hosting"
  },
  {
    title: "Pi-hole Network-wide Ad Blocking",
    url: "https://pi-hole.net/",
    category: "Networking"
  },
  {
    title: "Ubuntu Desktop (LTS)",
    url: "https://ubuntu.com/download/desktop",
    category: "Operating System",
    note: "Recommended for WiFi configuration"
  },
  {
    title: "Ubuntu Server",
    url: "https://ubuntu.com/download/server",
    category: "Operating System",
    note: "Use if only Ethernet connection is needed"
  },
  {
    title: "Portainer Container Management",
    url: "https://www.portainer.io/",
    category: "Containerization"
  },
  {
    title: "OpenSSH Server Guide",
    url: "https://documentation.ubuntu.com/server/how-to/security/openssh-server/index.html",
    category: "Security"
  },
  {
    title: "OpenVPN Access Server",
    url: "https://openvpn.net/access-server/",
    category: "Networking"
  }
];


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
            specs={["Raspbian", "Pi-hole", "Traffic Gateway"]}
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


      {/* Build Journey */}
      <section className="">
        <h2 className="text-2xl font-semibold text-gray-700 dark:text-gray-200 mb-6">
          Build Journey
        </h2>
        <div>
          {buildJourney.map((post, index) => (
            <BlogPost
              key={index}
              title={post.title}
              date={post.date}
              content={post.content}
              image={post.image}
              index={index}
            />
          ))}
        </div>
      </section>

      {/* Supporting Documentation */}
      <section className="mb-5">
        <h2 className="text-2xl font-semibold text-gray-700 dark:text-gray-200 mb-6">
          Supporting Documentation
        </h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6"
        >
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            These resources helped me build and maintain my homelab.
          </p>

          <div className="space-y-4">
            {documentationResources.map((doc, index) => (
              <div
                key={index}
                className="flex items-start gap-4"
              >
                <div className="flex-shrink-0 mt-1">
                  <svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                  </svg>
                </div>
                <div>
                  <a
                    href={doc.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 dark:text-blue-400 hover:underline font-medium"
                  >
                    {doc.title}
                  </a>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="text-xs px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded-full">
                      {doc.category}
                    </span>
                    {doc.note && (
                      <span className="text-xs text-gray-500 dark:text-gray-400">
                        {doc.note}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Back Button */}
      <section className="mb-16 flex justify-center">
        <Button asChild>
          <Link to="/">
            <BiArrowBack />
            Go Back
          </Link>
        </Button>
      </section>
    </div>
  );
}