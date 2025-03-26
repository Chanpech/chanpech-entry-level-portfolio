// components/WhatsNew.tsx
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaArrowRight, FaServer } from "react-icons/fa";

const updates = [
  {
    id: 1,
    title: "New Homelab Project Page",
    description: "Check out my self-hosted server setup with Mac Mini and Raspberry Pi",
    date: "March 2025",
    link: "/homelabserver",
    icon: <FaServer className="text-blue-500" />
  }
  // Add more updates as needed
];

export function WhatsNew() {
  return (
    <motion.section 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="mb-12"
    >
      <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
        <span className="bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 px-3 py-1 rounded-full text-sm">
          New
        </span>
        What's New
      </h2>
      
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
        <ul className="space-y-4">
          {updates.map((update) => (
            <li key={update.id} className="border-b border-gray-100 dark:border-gray-700 pb-4 last:border-0 last:pb-0">
              <div className="flex items-start gap-4">
                <div className="p-2 rounded-full bg-blue-50 dark:bg-blue-900/50">
                  {update.icon}
                </div>
                <div>
                  <h3 className="font-semibold">{update.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm mb-2">
                    {update.description} • {update.date}
                  </p>
                  <Link 
                    to={update.link} 
                    className="inline-flex items-center text-sm text-blue-600 dark:text-blue-400 hover:underline"
                  >
                    View details <FaArrowRight className="ml-1" size={12} />
                  </Link>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </motion.section>
  );
}