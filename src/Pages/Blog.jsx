import React from 'react'
import { useState } from 'react'
import BlogCard from "../Components/layout/common/BlogCard"
import { blogData } from '../data/blogData'
import { FaSearch } from "react-icons/fa";
import { FaFaceFlushed } from "react-icons/fa6";

const categories = ['All', 'Health', 'Meditation', 'Wellness', 'Lifestyle']

const Blog = () => {
  const [selected, setSelected] = useState('All')
  const [search, setSearch] = useState('')

  const filtered = blogData.filter((blog) => {
    const matchCategory = selected === 'All' || blog.category === selected
    const matchSearch = blog.title.toLowerCase().includes(search.toLowerCase())
    return matchCategory && matchSearch
  })

  return (
    <div className="bg-white">

      {/* Hero */}
      <section className="bg-linear-to-br from-green-50 to-green-100 py-16 sm:py-20 text-center">
        <div className="max-w-2xl mx-auto px-4">
          <span className="text-green-600 font-semibold text-sm uppercase tracking-widest">
            Our Blog
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mt-3">
            Yoga Tips &amp; <span className="text-green-600">Wellness Guides</span>
          </h1>
          <p className="text-gray-500 mt-4 text-base sm:text-lg">
            Explore articles on yoga, meditation, health and mindful living 
            written by our expert instructors.
          </p>

          {/* Search Bar */}
          <div className="mt-6 flex items-center bg-white rounded-full shadow px-4 py-2 max-w-md mx-auto">
            <span className="text-gray-400 mr-2"><FaSearch/></span>
            <input
              type="text"
              placeholder="Search articles..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="grow outline-none text-sm text-gray-600 bg-transparent"
            />
          </div>
        </div>
      </section>

      {/* Filter + Grid */}
      <section className="max-w-7xl mx-auto px-4 py-12 sm:py-16">

        {/* Category Filter */}
        <div className="flex flex-wrap gap-3 justify-center mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelected(cat)}
              className={`px-4 sm:px-5 py-2 rounded-full font-medium text-sm transition duration-200
                ${selected === cat
                  ? 'bg-green-600 text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-green-50 hover:text-green-600'
                }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Blog Cards */}
        {filtered.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-5xl mb-4"><FaFaceFlushed/></p>
            <p className="text-gray-400 text-lg">No articles found.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filtered.map((blog) => (
              <BlogCard key={blog.id} blog={blog} />
            ))}
          </div>
        )}
      </section>

      {/* Newsletter CTA */}
      <section className="bg-green-600 py-14 sm:py-16 text-center text-white px-4">
        <h2 className="text-2xl sm:text-3xl font-bold mb-3">
          Get Wellness Tips in Your Inbox
        </h2>
        <p className="text-green-100 mb-8 text-base sm:text-lg">
          Subscribe to our newsletter and never miss a new article.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center max-w-md mx-auto">
          <input
            type="email"
            placeholder="Enter your email"
            className="grow px-5 py-3 rounded-full text-gray-700 outline-none text-sm w-full"
          />
          <button className="bg-white text-green-600 px-6 py-3 rounded-full font-semibold hover:bg-green-50 transition w-full sm:w-auto">
            Subscribe
          </button>
        </div>
      </section>

    </div>
  )
}

export default Blog