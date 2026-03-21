import React from 'react'
import { useParams, Link } from 'react-router-dom'
import { blogData } from '../data/blogData'

const BlogPost = () => {
  const { id } = useParams()
  const blog = blogData.find((b) => b.id === parseInt(id))

  if (!blog) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center text-center px-4">
        <div className="text-6xl mb-4">😕</div>
        <h2 className="text-2xl font-bold text-gray-800 mb-2">Post Not Found</h2>
        <p className="text-gray-400 mb-6">The article you're looking for doesn't exist.</p>
        <Link
          to="/blog"
          className="bg-green-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-green-700 transition text-sm"
        >
          Back to Blog
        </Link>
      </div>
    )
  }

  const relatedPosts = blogData.filter(
    (b) => b.category === blog.category && b.id !== blog.id
  ).slice(0, 3)

  const content = [
    {
      heading: 'Introduction',
      text: `Yoga has been practiced for thousands of years and continues to grow in popularity around the world. ${blog.desc} In this article, we dive deep into everything you need to know to get started and make the most of your practice.`,
    },
    {
      heading: 'Why It Matters',
      text: 'Whether you are a complete beginner or a seasoned practitioner, understanding the core principles behind this topic can transform your relationship with yoga. Many students report feeling more grounded, focused, and energetic after incorporating these practices into their daily routine.',
    },
    {
      heading: 'Getting Started',
      text: 'The best way to begin is to start small and stay consistent. Even 10–15 minutes a day can make a significant difference over time. Find a quiet space, wear comfortable clothing, and approach each session with an open mind and a gentle attitude toward yourself.',
    },
    {
      heading: 'Tips from Our Instructors',
      text: 'Our expert instructors at YogaZen recommend focusing on your breath above all else. The breath is your anchor — it keeps you present and connected to each movement. Don\'t rush through postures; instead, hold each one mindfully and listen to what your body is telling you.',
    },
    {
      heading: 'Final Thoughts',
      text: 'Remember that yoga is a journey, not a destination. Progress may be slow at first, but with patience and dedication, the benefits will compound over time. We hope this article inspires you to take the next step on your wellness journey. See you on the mat! 🧘',
    },
  ]

  return (
    <div className="bg-white">

      {/* Hero */}
      <section className="bg-linear-to-br from-green-50 to-green-100 py-14 sm:py-20 text-center">
        <div className="max-w-3xl mx-auto px-4">

          {/* Breadcrumb */}
          <div className="flex items-center justify-center gap-2 text-sm text-gray-400 mb-5 flex-wrap">
            <Link to="/" className="hover:text-green-600 transition">Home</Link>
            <span>/</span>
            <Link to="/blog" className="hover:text-green-600 transition">Blog</Link>
            <span>/</span>
            <span className="text-gray-600 line-clamp-1">{blog.title}</span>
          </div>

          {/* Category */}
          <span className="text-xs font-semibold bg-green-100 text-green-600 px-3 py-1 rounded-full">
            {blog.category}
          </span>

          {/* Title */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mt-4 leading-tight">
            {blog.title}
          </h1>

          {/* Meta */}
          <div className="flex flex-wrap items-center justify-center gap-4 mt-6 text-sm text-gray-400">
            <span>✍️ {blog.author}</span>
            <span>·</span>
            <span>📅 {blog.date}</span>
            <span>·</span>
            <span>⏱ {blog.readTime}</span>
          </div>
        </div>
      </section>

      {/* Emoji Banner */}
      <div className="max-w-3xl mx-auto px-4 -mt-6 sm:-mt-8 mb-10">
        <div className="bg-white rounded-3xl shadow-md h-48 sm:h-64 flex items-center justify-center text-8xl sm:text-9xl">
          {blog.emoji}
        </div>
      </div>

      {/* Content + Sidebar */}
      <section className="max-w-7xl mx-auto px-4 pb-16 grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-16">

        {/* Article Content */}
        <article className="lg:col-span-2">
          {/* Intro Highlight */}
          <div className="bg-green-50 border-l-4 border-green-500 rounded-r-2xl p-5 mb-8 text-gray-600 text-base leading-relaxed italic">
            "{blog.desc}"
          </div>

          {/* Sections */}
          {content.map((section, i) => (
            <div key={i} className="mb-8">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-3">
                {section.heading}
              </h2>
              <p className="text-gray-500 leading-relaxed text-base">
                {section.text}
              </p>
            </div>
          ))}

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mt-10 pt-8 border-t">
            {['Yoga', blog.category, 'Wellness', 'Mindfulness'].map((tag) => (
              <span
                key={tag}
                className="bg-gray-100 text-gray-500 text-xs px-3 py-1.5 rounded-full hover:bg-green-100 hover:text-green-600 transition cursor-pointer"
              >
                #{tag}
              </span>
            ))}
          </div>

          {/* Author Card */}
          <div className="bg-green-50 rounded-3xl p-6 mt-10 flex flex-col sm:flex-row items-center sm:items-start gap-5">
            <div className="text-5xl bg-white w-16 h-16 rounded-2xl flex items-center justify-center shadow-sm flex-shrink-2">
              🧘‍♀️
            </div>
            <div>
              <p className="text-xs text-green-600 font-semibold uppercase tracking-widest mb-1">Written by</p>
              <h3 className="text-gray-800 font-bold text-lg">{blog.author}</h3>
              <p className="text-gray-500 text-sm mt-1 leading-relaxed">
                A certified yoga instructor at YogaZen with years of experience 
                helping students achieve balance, strength, and inner peace.
              </p>
              <Link
                to="/instructors"
                className="inline-block mt-3 text-green-600 text-sm font-semibold hover:underline"
              >
                View Profile →
              </Link>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex flex-col sm:flex-row justify-between gap-4 mt-10 pt-8 border-t">
            <Link
              to="/blog"
              className="flex items-center gap-2 text-green-600 font-semibold text-sm hover:underline"
            >
              ← Back to Blog
            </Link>
            <Link
              to="/classes"
              className="flex items-center gap-2 text-green-600 font-semibold text-sm hover:underline"
            >
              Explore Classes →
            </Link>
          </div>
        </article>

        {/* Sidebar */}
        <aside className="lg:col-span-1 space-y-8">

          {/* About */}
          <div className="bg-green-50 rounded-3xl p-6 text-center">
            <div className="text-4xl mb-3">🧘 YogaZen</div>
            <p className="text-gray-500 text-sm leading-relaxed">
              Your trusted source for yoga tips, wellness guides, 
              and mindful living. Join our community today!
            </p>
            <Link
              to="/register"
              className="inline-block mt-4 bg-green-600 text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-green-700 transition"
            >
              Join Free
            </Link>
          </div>

          {/* Categories */}
          <div className="bg-gray-50 rounded-3xl p-6">
            <h3 className="text-gray-800 font-bold text-lg mb-4">Categories</h3>
            <div className="space-y-2">
              {['Health', 'Meditation', 'Wellness', 'Lifestyle'].map((cat) => (
                <Link
                  key={cat}
                  to="/blog"
                  className="flex items-center justify-between text-sm text-gray-500 hover:text-green-600 transition py-1"
                >
                  <span>📂 {cat}</span>
                  <span className="bg-gray-200 text-gray-500 text-xs px-2 py-0.5 rounded-full">
                    {blogData.filter((b) => b.category === cat).length}
                  </span>
                </Link>
              ))}
            </div>
          </div>

          {/* Recent Posts */}
          <div className="bg-gray-50 rounded-3xl p-6">
            <h3 className="text-gray-800 font-bold text-lg mb-4">Recent Posts</h3>
            <div className="space-y-4">
              {blogData.slice(0, 4).map((b) => (
                <Link
                  key={b.id}
                  to={`/blog/${b.id}`}
                  className="flex items-start gap-3 group"
                >
                  <div className="text-2xl bg-white w-10 h-10 rounded-xl flex items-center justify-center shadow-sm flex-shrink-2">
                    {b.emoji}
                  </div>
                  <div>
                    <p className="text-gray-700 text-sm font-medium leading-snug group-hover:text-green-600 transition line-clamp-2">
                      {b.title}
                    </p>
                    <p className="text-gray-400 text-xs mt-1">{b.date}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Newsletter */}
          <div className="bg-green-600 rounded-3xl p-6 text-white text-center">
            <div className="text-3xl mb-2">✉️</div>
            <h3 className="font-bold text-lg mb-1">Newsletter</h3>
            <p className="text-green-100 text-sm mb-4">Get weekly yoga tips in your inbox.</p>
            <input
              type="email"
              placeholder="Your email"
              className="w-full px-4 py-2.5 rounded-xl text-gray-700 text-sm outline-none mb-3"
            />
            <button className="w-full bg-white text-green-600 py-2.5 rounded-xl font-semibold text-sm hover:bg-green-50 transition">
              Subscribe
            </button>
          </div>

        </aside>
      </section>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="bg-green-50 py-14">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-10">
              <span className="text-green-600 font-semibold text-sm uppercase tracking-widest">
                Keep Reading
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mt-2">Related Articles</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {relatedPosts.map((post) => (
                <div
                  key={post.id}
                  className="bg-white rounded-2xl shadow-sm hover:shadow-md transition overflow-hidden"
                >
                  <div className="bg-green-50 h-32 flex items-center justify-center text-6xl">
                    {post.emoji}
                  </div>
                  <div className="p-5">
                    <span className="text-xs bg-green-100 text-green-600 px-3 py-0.5 rounded-full font-semibold">
                      {post.category}
                    </span>
                    <h3 className="text-gray-800 font-bold text-base mt-2 mb-2 leading-snug">
                      {post.title}
                    </h3>
                    <p className="text-gray-400 text-xs mb-3">⏱ {post.readTime} · {post.date}</p>
                    <Link
                      to={`/blog/${post.id}`}
                      className="text-green-600 text-sm font-semibold hover:underline"
                    >
                      Read More →
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="bg-green-600 py-14 text-center text-white px-4">
        <h2 className="text-2xl sm:text-3xl font-bold mb-3">
          Ready to Start Your Yoga Journey?
        </h2>
        <p className="text-green-100 mb-8 text-base sm:text-lg">
          Join thousands of students at YogaZen and transform your life.
        </p>
        <Link
          to="/classes"
          className="bg-white text-green-600 px-8 py-3 rounded-full font-semibold hover:bg-green-50 transition"
        >
          Explore Classes
        </Link>
      </section>

    </div>
  )
}

export default BlogPost