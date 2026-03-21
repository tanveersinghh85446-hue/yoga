import React from 'react'
import { useParams, Link } from 'react-router-dom'
import { classesData } from '../data/classesData'

const levelColor = (level) => {
  if (level === 'Beginner') return 'bg-green-100 text-green-600'
  if (level === 'Intermediate') return 'bg-yellow-100 text-yellow-600'
  return 'bg-red-100 text-red-600'
}

const ClassDetail = () => {
  const { id } = useParams()
  const cls = classesData.find((c) => c.id === parseInt(id))

  if (!cls) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center text-center px-4">
        <div className="text-6xl mb-4">😕</div>
        <h2 className="text-2xl font-bold text-gray-800 mb-2">Class Not Found</h2>
        <p className="text-gray-400 mb-6">The class you're looking for doesn't exist.</p>
        <Link
          to="/classes"
          className="bg-green-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-green-700 transition text-sm"
        >
          Back to Classes
        </Link>
      </div>
    )
  }

  const relatedClasses = classesData.filter(
    (c) => c.level === cls.level && c.id !== cls.id
  ).slice(0, 3)

  const benefits = [
    '🧘 Improves flexibility and balance',
    '💪 Builds strength and stamina',
    '🧠 Reduces stress and anxiety',
    '❤️ Boosts heart health',
    '😴 Improves sleep quality',
    '🌿 Increases mindfulness',
  ]

  const schedule = [
    { day: 'Monday', time: '6:00 AM' },
    { day: 'Wednesday', time: '6:00 AM' },
    { day: 'Friday', time: '6:00 AM' },
    { day: 'Saturday', time: '9:00 AM' },
  ]

  return (
    <div className="bg-white">

      {/* Hero */}
      <section className="bg-linear-to-br from-green-50 to-green-100 py-14 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

          {/* Left */}
          <div>
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-sm text-gray-400 mb-4 flex-wrap">
              <Link to="/" className="hover:text-green-600 transition">Home</Link>
              <span>/</span>
              <Link to="/classes" className="hover:text-green-600 transition">Classes</Link>
              <span>/</span>
              <span className="text-gray-600">{cls.name}</span>
            </div>

            <div className="flex items-center gap-3 mb-3 flex-wrap">
              <span className={`text-xs font-semibold px-3 py-1 rounded-full ${levelColor(cls.level)}`}>
                {cls.level}
              </span>
              <span className="text-xs text-gray-400 bg-gray-100 px-3 py-1 rounded-full">
                ⏱ {cls.duration}
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              {cls.emoji} {cls.name}
            </h1>
            <p className="text-gray-500 text-base sm:text-lg leading-relaxed mb-6">
              {cls.desc} Join us and experience the transformation that thousands
              of our students have already discovered through this class.
            </p>

            <div className="flex flex-wrap gap-4">
              <button className="bg-green-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-green-700 transition text-sm">
                Book This Class
              </button>
              <Link
                to="/schedule"
                className="border border-green-600 text-green-600 px-6 py-3 rounded-full font-semibold hover:bg-green-50 transition text-sm"
              >
                View Schedule
              </Link>
            </div>
          </div>

          {/* Right */}
          <div className="flex justify-center">
            <div className="bg-white rounded-3xl shadow-md w-full max-w-sm p-8 text-center">
              <div className="text-8xl mb-4">{cls.emoji}</div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">{cls.name}</h3>
              <p className="text-green-600 font-bold text-3xl mb-1">{cls.price}</p>
              <p className="text-gray-400 text-sm mb-6">per session</p>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 border-t pt-5">
                <div>
                  <p className="text-green-600 font-bold text-lg">50+</p>
                  <p className="text-gray-400 text-xs">Students</p>
                </div>
                <div>
                  <p className="text-green-600 font-bold text-lg">4.9</p>
                  <p className="text-gray-400 text-xs">Rating</p>
                </div>
                <div>
                  <p className="text-green-600 font-bold text-lg">{cls.duration}</p>
                  <p className="text-gray-400 text-xs">Duration</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Benefits + Schedule */}
      <section className="max-w-7xl mx-auto px-4 py-14 sm:py-16 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">

        {/* Benefits */}
        <div>
          <span className="text-green-600 font-semibold text-sm uppercase tracking-widest">
            What You'll Gain
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mt-2 mb-6">
            Benefits of {cls.name}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {benefits.map((benefit, i) => (
              <div key={i} className="bg-green-50 rounded-2xl p-4 text-sm text-gray-600 font-medium">
                {benefit}
              </div>
            ))}
          </div>
        </div>

        {/* Schedule */}
        <div>
          <span className="text-green-600 font-semibold text-sm uppercase tracking-widest">
            Class Timings
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mt-2 mb-6">
            Weekly Schedule
          </h2>
          <div className="space-y-3">
            {schedule.map((slot, i) => (
              <div
                key={i}
                className="flex items-center justify-between bg-gray-50 rounded-2xl px-5 py-4"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center text-lg">
                    📅
                  </div>
                  <span className="text-gray-700 font-semibold text-sm">{slot.day}</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-green-600 font-bold text-sm">{slot.time}</span>
                  <button className="bg-green-600 text-white text-xs px-4 py-1.5 rounded-full hover:bg-green-700 transition">
                    Book
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

      </section>

      {/* Instructor */}
      <section className="bg-green-50 py-14 sm:py-16">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-8">
            <span className="text-green-600 font-semibold text-sm uppercase tracking-widest">
              Your Guide
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mt-2">Meet Your Instructor</h2>
          </div>
          <div className="bg-white rounded-3xl p-6 sm:p-8 flex flex-col sm:flex-row items-center gap-6 shadow-sm">
            <div className="text-7xl bg-green-50 w-24 h-24 rounded-2xl flex items-center justify-center flex-shrink-2">
              🧘‍♀️
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-800">Priya Sharma</h3>
              <p className="text-green-600 font-medium text-sm mt-1">Head Instructor · 10+ years experience</p>
              <p className="text-gray-500 text-sm leading-relaxed mt-3">
                Priya is the founder of YogaZen and has trained over 500 students.
                She is certified by Yoga Alliance International and brings warmth,
                precision and passion to every class she teaches.
              </p>
              <Link
                to="/instructors"
                className="inline-block mt-4 text-green-600 text-sm font-semibold hover:underline"
              >
                View Full Profile →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Related Classes */}
      {relatedClasses.length > 0 && (
        <section className="max-w-7xl mx-auto px-4 py-14 sm:py-16">
          <div className="text-center mb-10">
            <span className="text-green-600 font-semibold text-sm uppercase tracking-widest">
              You Might Also Like
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mt-2">Related Classes</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {relatedClasses.map((c) => (
              <div
                key={c.id}
                className="bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-md transition p-5 text-center"
              >
                <div className="text-5xl mb-3">{c.emoji}</div>
                <h3 className="text-gray-800 font-bold text-lg">{c.name}</h3>
                <p className="text-gray-400 text-sm mt-1 mb-3">{c.duration} · {c.price}</p>
                <Link
                  to={`/classes/${c.id}`}
                  className="text-green-600 text-sm font-semibold hover:underline"
                >
                  View Details →
                </Link>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="bg-green-600 py-14 text-center text-white px-4">
        <h2 className="text-2xl sm:text-3xl font-bold mb-3">
          Ready to Join {cls.name}?
        </h2>
        <p className="text-green-100 mb-8 text-base sm:text-lg">
          Book your spot today and start your transformation journey.
        </p>
        <button className="bg-white text-green-600 px-8 py-3 rounded-full font-semibold hover:bg-green-50 transition">
          Book Now — {cls.price}
        </button>
      </section>

    </div>
  )
}

export default ClassDetail