import { motion } from "framer-motion";

interface BlogPostProps {
  title: string;
  date: string;
  content: string;
  image?: string;
  index: number;
}

export function BlogPost({
  title,
  date,
  content,
  image,
  index
}: BlogPostProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      className='mb-8 p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md'
    >
      <div className='flex items-start gap-4'>
        {image && (
          <motion.div
            animate={{
              y: [0, -3, 0],
              boxShadow: [
                "0 0 0 0px rgba(99, 101, 241, 0.93)",
                "0 0 0 3px rgba(99, 102, 241, 0.1)", 
                "0 0 0 0px rgba(72, 72, 97, 0)"
              ],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="flex-shrink-0 rounded-full"
          >
            <img
              src={image}
              alt="Author memoji"
              className="w-16 h-16 rounded-full object-contain"
            />
          </motion.div>
        )}
        <div>
          <div className='flex items-center gap-2 mb-2'>
            <h3 className='text-xl font-bold text-gray-8000 dark:text-white'>{title}</h3>
            <span className='text-sm text-gray-500 dark:text-gray-400'>{date}</span>
          </div>
          <p className='text-gray-700 dark:text-gray-400 whitespace-pre-line'>
            {content}
          </p>

        </div>

      </div>
    </motion.article>
  )
}
