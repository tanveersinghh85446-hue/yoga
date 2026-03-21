import React from 'react'
import InstructorCard from "../Components/layout/instructors/InstructorCard"
import { instructorsData } from '../data/instructorsData'

const Instructors = () => {
  return (
    <div className="bg-white">

      {/* Hero */}
      <section className="bg-linear-to-br from-green-50 to-green-100 py-20 text-center">
        <div className="max-w-2xl mx-auto px-4">
          <span className="text-green-600 font-semibold text-sm uppercase tracking-widest">
            Our Team
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mt-3">
            Meet Our <span className="text-green-600">Expert Instructors</span>
          </h1>
          <p className="text-gray-500 mt-4 text-lg">
            Our certified instructors are passionate about helping you achieve
            your wellness goals through the art of yoga.
          </p>
        </div>
      </section>

      {/* Instructors Grid */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {instructorsData.map((instructor) => (
            <InstructorCard key={instructor.id} instructor={instructor} />
          ))}
        </div>
      </section>

      {/* Join Team CTA */}
      <section className="bg-green-50 py-16 text-center">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Want to Teach at YogaZen?
          </h2>
          <p className="text-gray-500 mb-8 text-lg">
            We are always looking for passionate and certified yoga instructors
            to join our growing team.
          </p>

          <a href="/contact"
          className="bg-green-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-green-700 transition"
          >
          Get In Touch
        </a>
    </div>
      </section >

    </div >
  )
}

export default Instructors