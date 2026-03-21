import React from 'react'

const HeroBanner = () => {
  return (
    <section className="bg-linear-to-br from-green-50 to-green-100 min-h-screen flex items-center py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

        {/* Left Content */}
        <div className="text-center md:text-left order-2 md:order-1">
          <span className="text-green-600 font-semibold text-xs sm:text-sm uppercase tracking-widest">
            Welcome to YogaZen
          </span>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mt-3 leading-tight">
            Find Your{' '}
            <span className="text-green-600">Inner Peace</span>{' '}
            Through Yoga
          </h1>

          <p className="text-gray-500 mt-4 sm:mt-5 text-base sm:text-lg leading-relaxed">
            Transform your mind, body, and soul with our expert-guided yoga classes.
            Suitable for all levels — beginners to advanced.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-7 sm:mt-8 items-center md:items-start">

            <a href="/classes"
            className="w-full sm:w-auto text-center bg-green-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-green-700 transition duration-300"
            >
            Explore Classes
          </a>

          <a href="/about"
          className="w-full sm:w-auto text-center border border-green-600 text-green-600 px-6 py-3 rounded-full font-semibold hover:bg-green-50 transition duration-300"
            >
          Learn More
        </a>
      </div>

      {/* Stats */}
      <div className="flex justify-center md:justify-start gap-6 sm:gap-8 mt-8 sm:mt-10">
        <div className="text-center md:text-left">
          <h3 className="text-2xl sm:text-3xl font-bold text-green-600">500+</h3>
          <p className="text-gray-500 text-xs sm:text-sm">Happy Students</p>
        </div>
        <div className="text-center md:text-left">
          <h3 className="text-2xl sm:text-3xl font-bold text-green-600">20+</h3>
          <p className="text-gray-500 text-xs sm:text-sm">Yoga Classes</p>
        </div>
        <div className="text-center md:text-left">
          <h3 className="text-2xl sm:text-3xl font-bold text-green-600">10+</h3>
          <p className="text-gray-500 text-xs sm:text-sm">Expert Instructors</p>
        </div>
      </div>
    </div>

        {/* Right Image */ }
  <div className="flex justify-center order-1 md:order-2">
    <div className="bg-green-200 rounded-3xl w-56 h-64 sm:w-72 sm:h-80 md:w-80 md:h-96 flex items-center justify-center text-7xl sm:text-8xl shadow-lg">
      🧘‍♀️
    </div>
  </div>

      </div >
    </section >
  )
}

export default HeroBanner