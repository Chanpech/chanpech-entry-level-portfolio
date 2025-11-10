import { motion } from "framer-motion";

interface HardwareCardProps {
  title: string;
  role: string;
  specs: string[];
  date: string;
  image: string;
}

export default function HardwareCardV3({
  title,
  role,
  specs,
  date,
  image
}: HardwareCardProps) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden"
    > <a
      href={role}
      target="_blank"
      rel="noopener noreferrer"
      className="text-blue-500 block mt-1"
    >
        <img
          src={image}
          alt={title}
          className="w-full h-90 object-cover"
        />
        <div className="p-4">
          <h3 className="text-xl font-bold text-gray-800 dark:text-white">{title}</h3>

          <ul className="space-y-1">
            {specs.map((spec, i) => (
              <li key={i} className="text-gray-600 dark:text-gray-300 text-sm">
                • {spec}
              </li>
            ))}
          </ul>
          <p className="text-md text-blue-700 font-semibold dark:text-blue-400 mb-2 text-right">{date}</p>
        </div>
      </a>

    </motion.div>
  );
}