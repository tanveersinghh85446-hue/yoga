import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-12 pb-6 mt-auto">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">

        {/* Brand */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-3">🧘 YogaZen</h2>
          <p className="text-sm text-gray-400 leading-relaxed">
            Find your inner peace with our expert-guided yoga classes. 
            Mind, body, and soul — all in one place.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-white font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            {[
              { name: 'Home',        path: '/' },
              { name: 'About',       path: '/about' },
              { name: 'Classes',     path: '/classes' },
              { name: 'Schedule',    path: '/schedule' },
              { name: 'Instructors', path: '/instructors' },
            ].map((link) => (
              <li key={link.name}>
                <Link
                  to={link.path}
                  className="hover:text-green-400 transition duration-200"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Support */}
        <div>
          <h3 className="text-white font-semibold mb-4">Support</h3>
          <ul className="space-y-2 text-sm">
            {[
              { name: 'Blog',     path: '/blog' },
              { name: 'Pricing',  path: '/pricing' },
              { name: 'Contact',  path: '/contact' },
              { name: 'Login',    path: '/login' },
              { name: 'Register', path: '/register' },
            ].map((link) => (
              <li key={link.name}>
                <Link
                  to={link.path}
                  className="hover:text-green-400 transition duration-200"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-white font-semibold mb-4">Contact Us</h3>
          <ul className="space-y-2 text-sm text-gray-400">
            <li>📍 123 Yoga Street, Delhi, India</li>
            <li>📞 +91 98765 43210</li>
            <li>✉️ hello@yogazen.com</li>
          </ul>

          {/* Social Icons */}
          <div className="flex gap-4 mt-4 text-xl">
            <a href="#" className="hover:text-green-400 transition">📘</a>
            <a href="#" className="hover:text-green-400 transition">📸</a>
            <a href="#" className="hover:text-green-400 transition">🐦</a>
            <a href="#" className="hover:text-green-400 transition">▶️</a>
          </div>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 mt-8 pt-4 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} YogaZen. All rights reserved. Made with 🧘 & ❤️
      </div>
    </footer>
  )
}

export default Footer