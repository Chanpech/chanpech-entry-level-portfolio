import { motion } from "framer-motion";
import { useState } from "react";

interface HardwareCardProps {
  title: string;
  role: string;
  specs: string[];
  image: string;
}

export default function HardwareCard({ 
  title, 
  role, 
  specs, 
  image 
}: HardwareCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative">
        <motion.img 
          src={image} 
          alt={title}
          className="w-full object-cover transition-all duration-300"
          animate={{
            height: isHovered ? "30rem" : "12rem" // Expand image height on hover
          }}
        />
        <motion.div 
          className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-gray-900 to-transparent px-4 py-2"
          animate={{
            opacity: isHovered ? 1 : 0
          }}
          transition={{ duration: 0.2 }}
        >
          <h3 className="text-xl font-bold text-white">{title}</h3>
          <p className="text-sm text-blue-300">{role}</p>
        </motion.div>
      </div>
      
      <motion.div 
        className="p-4 overflow-hidden"
        animate={{
          height: isHovered ? "0" : "auto",
          opacity: isHovered ? 0 : 1,
          marginTop: isHovered ? 0 : 4
        }}
        transition={{ duration: 0.3 }}
      >
        <h3 className="text-xl font-bold text-gray-800 dark:text-white">{title}</h3>
        <p className="text-sm text-blue-600 dark:text-blue-400 mb-2">{role}</p>
        <ul className="space-y-1">
          {specs.map((spec, i) => (
            <li key={i} className="text-gray-600 dark:text-gray-300 text-sm">
              • {spec}
            </li>
          ))}
        </ul>
      </motion.div>
    </motion.div>
  );
}