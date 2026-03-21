import React from 'react'
import { useState } from 'react'
import { scheduleData } from '../data/scheduleData'

const levelColor = (level) => {
  if (level === 'Beginner') return 'bg-green-100 text-green-600'
  if (level === 'Intermediate') return 'bg-yellow-100 text-yellow-600'
  return 'bg-red-100 text-red-600'
}

const Schedule = () => {
  const days = scheduleData.map((d) => d.day)
  const [selectedDay, setSelectedDay] = useState('Monday')

  const todayData = scheduleData.find((d) => d.day === selectedDay)

  return (
    <div className="bg-white">

      {/* Hero */}
      <section className="bg-linear-to-br from-green-50 to-green-100 py-16 sm:py-20 text-center">
        <div className="max-w-2xl mx-auto px-4">
          <span className="text-green-600 font-semibold text-sm uppercase tracking-widest">
            Weekly Timetable
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mt-3">
            Class <span className="text-green-600">Schedule</span>
          </h1>
          <p className="text-gray-500 mt-4 text-base sm:text-lg">
            Plan your week ahead. Pick your favorite classes and
            never miss a session.
          </p>
        </div>
      </section>

      {/* Day Selector */}
      <section className="max-w-7xl mx-auto px-4 py-10 sm:py-14">
        <div className="flex flex-wrap gap-2 sm:gap-3 justify-center mb-10">
          {days.map((day) => (
            <button
              key={day}
              onClick={() => setSelectedDay(day)}
              className={`px-4 sm:px-5 py-2 rounded-full font-medium text-sm transition duration-200
                ${selectedDay === day
                  ? 'bg-green-600 text-white shadow'
                  : 'bg-gray-100 text-gray-600 hover:bg-green-50 hover:text-green-600'
                }`}
            >
              {day}
            </button>
          ))}
        </div>

        {/* Classes List */}
        <div className="max-w-4xl mx-auto space-y-4">
          {todayData?.classes.map((cls, index) => (
            <div
              key={index}
              className="bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-md transition duration-300 p-4 sm:p-6 flex flex-col sm:flex-row sm:items-center gap-4"
            >
              {/* Emoji + Time */}
              <div className="flex items-center gap-4 sm:w-32">
                <div className="bg-green-50 rounded-xl w-12 h-12 flex items-center justify-center text-2xl flex-shrink-2">
                  {cls.emoji}
                </div>
                <p className="text-green-600 font-bold text-sm">{cls.time}</p>
              </div>

              {/* Info */}
              <div className="grow">
                <div className="flex flex-wrap items-center gap-2 mb-1">
                  <h3 className="text-gray-800 font-bold text-lg">{cls.name}</h3>
                  <span className={`text-xs font-semibold px-3 py-0.5 rounded-full ${levelColor(cls.level)}`}>
                    {cls.level}
                  </span>
                </div>
                <p className="text-gray-400 text-sm">
                  👤 {cls.instructor} &nbsp;·&nbsp; ⏱ {cls.duration}
                </p>
              </div>

              {/* Book Button */}
              <div className="sm:ml-auto">
                <button className="w-full sm:w-auto bg-green-600 text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-green-700 transition">
                  Book Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Legend */}
      <section className="max-w-4xl mx-auto px-4 pb-10">
        <div className="bg-gray-50 rounded-2xl p-5 flex flex-wrap gap-4 justify-center">
          <p className="text-gray-500 text-sm font-medium w-full text-center mb-1">Level Legend:</p>
          <span className="bg-green-100 text-green-600 text-xs font-semibold px-3 py-1 rounded-full">🟢 Beginner</span>
          <span className="bg-yellow-100 text-yellow-600 text-xs font-semibold px-3 py-1 rounded-full">🟡 Intermediate</span>
          <span className="bg-red-100 text-red-600 text-xs font-semibold px-3 py-1 rounded-full">🔴 Advanced</span>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-green-600 py-14 text-center text-white px-4">
        <h2 className="text-2xl sm:text-3xl font-bold mb-3">
          Want a Personalized Schedule?
        </h2>
        <p className="text-green-100 mb-8 text-base sm:text-lg">
          Contact us and our instructors will create a custom plan just for you.
        </p>

        <a href="/contact"
        className="bg-white text-green-600 px-8 py-3 rounded-full font-semibold hover:bg-green-50 transition"
        >
        Contact Us
      </a>
    </section>

    </div >
  )
}

export default Schedule