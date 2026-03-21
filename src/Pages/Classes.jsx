import React from 'react'
import { useState } from 'react'
import ClassCard from "../Components/layout/classes/ClassCard"
import ClassFilter from "../Components/layout/classes/ClassFilter"
import { classesData } from '../data/classesData'

const Classes = () => {
  const [selected, setSelected] = useState('All')

  const filtered = selected === 'All'
    ? classesData
    : classesData.filter((cls) => cls.level === selected)

  return (
    <div className="bg-white">

      {/* Hero */}
      <section className="bg-linear-to-br from-green-50 to-green-100 py-20 text-center">
        <div className="max-w-2xl mx-auto px-4">
          <span className="text-green-600 font-semibold text-sm uppercase tracking-widest">
            What We Offer
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mt-3">
            Our <span className="text-green-600">Yoga Classes</span>
          </h1>
          <p className="text-gray-500 mt-4 text-lg">
            Choose from a variety of classes designed for all levels. 
            Find the perfect practice for your journey.
          </p>
        </div>
      </section>

      {/* Filter + Cards */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <ClassFilter selected={selected} onSelect={setSelected} />

        {filtered.length === 0 ? (
          <p className="text-center text-gray-400 text-lg">No classes found.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filtered.map((cls) => (
              <ClassCard key={cls.id} cls={cls} />
            ))}
          </div>
        )}
      </section>

      {/* CTA */}
      <section className="bg-green-600 py-16 text-center text-white">
        <h2 className="text-3xl font-bold mb-4">Not Sure Where to Start?</h2>
        <p className="text-green-100 mb-8 text-lg">Book a free trial class and find your perfect fit.</p>
        
          <a href="/contact"
          className="bg-white text-green-600 px-8 py-3 rounded-full font-semibold hover:bg-green-50 transition"
        >
          Book Free Trial
        </a>
      </section>

    </div>
  )
}

export default Classes