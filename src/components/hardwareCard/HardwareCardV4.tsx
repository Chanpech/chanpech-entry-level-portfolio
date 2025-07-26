"use client"

import { motion } from "framer-motion"

interface HardwareCardProps {
  title: string
  description: string
  specs: string[]
  icon: string
  index: number
}

const HardwareCard = ({ title, description, specs, icon, index }: HardwareCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
      className="bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border border-gray-200 dark:border-gray-700"
    >
      <div className="flex items-center mb-4">
        <div className="text-3xl mr-3">{icon}</div>
        <h3 className="text-xl font-semibold text-gray-800 dark:text-white">{title}</h3>
      </div>
      <p className="text-gray-600 dark:text-gray-300 mb-4">{description}</p>
      <ul className="space-y-2">
        {specs.map((spec, i) => (
          <li key={i} className="flex items-center text-sm text-gray-500 dark:text-gray-400">
            <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></div>
            {spec}
          </li>
        ))}
      </ul>
    </motion.div>
  )
}

export default HardwareCard
