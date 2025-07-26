"use client"

import { motion } from "framer-motion"

interface BlogPostProps {
  title: string
  date: string
  content: string
  image?: string
  index: number
  tags?: string[]
}

const BlogPost = ({ title, date, content, image, index, tags }: BlogPostProps) => {
  return (
    <motion.article
      initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 mb-8 border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all duration-300"
    >
      {image && (
        <div className="mb-4 rounded-lg overflow-hidden">
          <img
            src={image || "/placeholder.svg"}
            alt={title}
            className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
          />
        </div>
      )}
      <div className="flex items-center justify-between mb-3">
        <time className="text-sm text-blue-600 dark:text-blue-400 font-medium">{date}</time>
        {tags && (
          <div className="flex gap-2">
            {tags.map((tag, i) => (
              <span
                key={i}
                className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-xs rounded-full text-gray-600 dark:text-gray-300"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
      <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-3">{title}</h3>
      <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{content}</p>
    </motion.article>
  )
}

export default BlogPost
