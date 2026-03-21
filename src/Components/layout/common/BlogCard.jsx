import React from 'react'
import { Link } from 'react-router-dom'

const BlogCard = ({ blog }) => {
  return (
    <div className="bg-white rounded-2xl shadow-sm hover:shadow-md transition duration-300 border border-gray-100 overflow-hidden flex flex-col h-full">
      {/* Top */}
      <div className="bg-green-50 h-40 sm:h-44 flex items-center justify-center text-7xl">
        {blog.emoji}
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col grow">
        {/* Category + Date */}
        <div className="flex items-center justify-between mb-3 flex-wrap gap-2">
          <span className="text-xs font-semibold bg-green-100 text-green-600 px-3 py-1 rounded-full">
            {blog.category}
          </span>
          <span className="text-xs text-gray-400">{blog.date}</span>
        </div>

        {/* Title */}
        <h3 className="text-gray-800 font-bold text-lg leading-snug mb-2">
          {blog.title}
        </h3>

        {/* Desc */}
        <p className="text-gray-400 text-sm leading-relaxed grow">
          {blog.desc}
        </p>

        {/* Footer */}
        <div className="flex items-center justify-between mt-5 pt-4 border-t flex-wrap gap-2">
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <span>✍️</span>
            <span>{blog.author}</span>
          </div>
          <div className="flex items-center gap-3 flex-wrap">
            <span className="text-xs text-gray-400">⏱ {blog.readTime}</span>
            <Link
              to={`/blog/${blog.id}`}
              className="text-sm text-green-600 font-semibold hover:underline"
            >
              Read More →
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BlogCard