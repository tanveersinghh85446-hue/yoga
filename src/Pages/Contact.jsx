import React from 'react'
import { useState } from 'react'

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!form.name || !form.email || !form.message) return
    setSubmitted(true)
    setForm({ name: '', email: '', subject: '', message: '' })
  }

  const contactInfo = [
    { icon: '📍', label: 'Address', value: '123 Yoga Street, Delhi, India' },
    { icon: '📞', label: 'Phone', value: '+91 98765 43210' },
    { icon: '✉️', label: 'Email', value: 'hello@yogazen.com' },
    { icon: '🕐', label: 'Hours', value: 'Mon–Sat: 6AM – 8PM' },
  ]

  return (
    <div className="bg-white">

      {/* Hero */}
      <section className="bg-linear-to-br from-green-50 to-green-100 py-16 sm:py-20 text-center">
        <div className="max-w-2xl mx-auto px-4">
          <span className="text-green-600 font-semibold text-sm uppercase tracking-widest">
            Get In Touch
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mt-3">
            Contact <span className="text-green-600">Us</span>
          </h1>
          <p className="text-gray-500 mt-4 text-base sm:text-lg">
            Have a question or want to book a class? We'd love to hear from you.
            Reach out and we'll get back to you shortly.
          </p>
        </div>
      </section>

      {/* Contact Info + Form */}
      <section className="max-w-7xl mx-auto px-4 py-14 sm:py-16 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">

        {/* Left — Contact Info */}
        <div>
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6">
            We're Here to Help 🙏
          </h2>
          <p className="text-gray-500 leading-relaxed mb-8">
            Whether you're a beginner looking to start your yoga journey, or an
            experienced practitioner with questions — our team is always here for you.
          </p>

          {/* Info Cards */}
          <div className="space-y-4">
            {contactInfo.map((info) => (
              <div
                key={info.label}
                className="flex items-center gap-4 bg-green-50 rounded-2xl p-4"
              >
                <div className="text-2xl w-10 h-10 bg-white rounded-xl flex items-center justify-center shadow-sm flex-shrink-2">
                  {info.icon}
                </div>
                <div>
                  <p className="text-xs text-gray-400 font-medium">{info.label}</p>
                  <p className="text-gray-700 font-semibold text-sm">{info.value}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Social */}
          <div className="mt-8">
            <p className="text-gray-500 text-sm mb-3 font-medium">Follow Us:</p>
            <div className="flex gap-3">
              {['📘', '📸', '🐦', '▶️'].map((icon, i) => (
                <button
                  key={i}
                  className="w-10 h-10 bg-green-50 hover:bg-green-100 rounded-xl flex items-center justify-center text-xl transition"
                >
                  {icon}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Right — Contact Form */}
        <div className="bg-gray-50 rounded-3xl p-6 sm:p-8">
          {submitted ? (
            <div className="flex flex-col items-center justify-center h-full py-16 text-center">
              <div className="text-6xl mb-4">🎉</div>
              <h3 className="text-2xl font-bold text-gray-800 mb-2">Message Sent!</h3>
              <p className="text-gray-500 mb-6">
                Thank you for reaching out. We'll get back to you within 24 hours.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="bg-green-600 text-white px-6 py-2 rounded-full hover:bg-green-700 transition text-sm font-semibold"
              >
                Send Another
              </button>
            </div>
          ) : (
            <>
              <h3 className="text-xl font-bold text-gray-800 mb-6">Send Us a Message</h3>
              <div className="space-y-4">

                {/* Name + Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm text-gray-500 font-medium block mb-1">Your Name *</label>
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Rahul Sharma"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm text-gray-700 outline-none focus:border-green-400 transition bg-white"
                    />
                  </div>
                  <div>
                    <label className="text-sm text-gray-500 font-medium block mb-1">Email Address *</label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="rahul@email.com"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm text-gray-700 outline-none focus:border-green-400 transition bg-white"
                    />
                  </div>
                </div>

                {/* Subject */}
                <div>
                  <label className="text-sm text-gray-500 font-medium block mb-1">Subject</label>
                  <input
                    type="text"
                    name="subject"
                    value={form.subject}
                    onChange={handleChange}
                    placeholder="Class booking enquiry..."
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm text-gray-700 outline-none focus:border-green-400 transition bg-white"
                  />
                </div>

                {/* Message */}
                <div>
                  <label className="text-sm text-gray-500 font-medium block mb-1">Message *</label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Write your message here..."
                    rows={5}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm text-gray-700 outline-none focus:border-green-400 transition bg-white resize-none"
                  />
                </div>

                {/* Submit */}
                <button
                  onClick={handleSubmit}
                  className="w-full bg-green-600 text-white py-3 rounded-xl font-semibold hover:bg-green-700 transition text-sm"
                >
                  Send Message 🚀
                </button>

              </div>
            </>
          )}
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="max-w-7xl mx-auto px-4 pb-16">
        <div className="bg-green-50 rounded-3xl h-56 sm:h-72 flex items-center justify-center text-center">
          <div>
            <p className="text-5xl mb-3">🗺️</p>
            <p className="text-gray-400 font-medium">Map Placeholder</p>
            <p className="text-gray-400 text-sm">123 Yoga Street, Delhi, India</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-green-600 py-14 text-center text-white px-4">
        <h2 className="text-2xl sm:text-3xl font-bold mb-3">
          Ready to Start Your Journey?
        </h2>
        <p className="text-green-100 mb-8 text-base sm:text-lg">
          Book a free trial class today and experience the YogaZen difference.
        </p>

        <a href="/classes"
          className="bg-white text-green-600 px-8 py-3 rounded-full font-semibold hover:bg-green-50 transition"
        >
          Explore Classes
        </a>
      </section>

    </div>
  )
}

export default Contact