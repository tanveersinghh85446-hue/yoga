import React from 'react'
import { GiHealing, GiPowerLightning, GiPeaceDove, GiMeditation } from "react-icons/gi"
import { RiCommunityLine } from "react-icons/ri"
import { PiPlantLight } from "react-icons/pi"
import { GrYoga } from "react-icons/gr"
import { TbYoga } from "react-icons/tb"

const About = () => {
  const team = [
    { name: 'Priya Sharma', role: 'Head Instructor',   icon: <GiMeditation className="text-6xl text-green-600 mx-auto" />, exp: '10+ years' },
    { name: 'Rahul Verma',  role: 'Meditation Coach',  icon: <GrYoga       className="text-6xl text-green-600 mx-auto" />, exp: '8+ years'  },
    { name: 'Anita Singh',  role: 'Hatha Yoga Expert', icon: <TbYoga       className="text-6xl text-green-600 mx-auto" />, exp: '6+ years'  },
  ]

  const values = [
    { icon: <GiHealing        className="text-4xl text-green-600 mx-auto" />, title: 'Natural Healing', desc: 'We believe in the power of nature and mindful movement to heal the body.' },
    { icon: <RiCommunityLine  className="text-4xl text-green-600 mx-auto" />, title: 'Community',       desc: 'A warm, welcoming space for everyone regardless of age or skill level.' },
    { icon: <GiPowerLightning className="text-4xl text-green-600 mx-auto" />, title: 'Strength',        desc: 'Build physical and mental strength through consistent practice.' },
    { icon: <GiPeaceDove      className="text-4xl text-green-600 mx-auto" />, title: 'Inner Peace',     desc: 'Find balance and calm in your daily life through yoga and meditation.' },
  ]

  return (
    <div className="bg-white">

      {/* Hero Section */}
      <section className="bg-linear-to-br from-green-50 to-green-100 py-20 text-center">
        <div className="max-w-3xl mx-auto px-4">
          <span className="text-green-600 font-semibold text-sm uppercase tracking-widest">
            About Us
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mt-3">
            Who We <span className="text-green-600">Are</span>
          </h1>
          <p className="text-gray-500 mt-5 text-lg leading-relaxed">
            YogaZen was founded with one mission — to make yoga accessible,
            enjoyable, and transformative for everyone. We are a community
            of passionate yoga lovers dedicated to your wellness journey.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="max-w-7xl mx-auto px-4 py-16 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="bg-green-100 rounded-3xl h-80 flex items-center justify-center shadow">
          <PiPlantLight className="text-8xl text-green-600" />
        </div>
        <div>
          <span className="text-green-600 font-semibold text-sm uppercase tracking-widest">
            Our Story
          </span>
          <h2 className="text-3xl font-bold text-gray-800 mt-2 mb-4">
            Started With a Simple Dream
          </h2>
          <p className="text-gray-500 leading-relaxed mb-4">
            In 2015, our founder Priya Sharma started teaching yoga in a small
            park in Delhi with just 5 students. Her vision was simple — spread
            the joy and healing power of yoga to as many people as possible.
          </p>
          <p className="text-gray-500 leading-relaxed">
            Today, YogaZen has grown into a full yoga studio with 500+ students,
            20+ classes, and a team of 10+ expert instructors. But our heart
            remains the same — your wellness is our mission.
          </p>
        </div>
      </section>

      {/* Values Section */}
      <section className="bg-green-50 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-green-600 font-semibold text-sm uppercase tracking-widest">
              What We Stand For
            </span>
            <h2 className="text-3xl font-bold text-gray-800 mt-2">Our Core Values</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {values.map((val) => (
              <div key={val.title} className="bg-white rounded-2xl p-6 shadow-sm text-center hover:shadow-md transition">
                <div className="mb-3 flex justify-center">{val.icon}</div>
                <h3 className="text-gray-800 font-semibold text-lg mb-2">{val.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{val.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <span className="text-green-600 font-semibold text-sm uppercase tracking-widest">
            Meet The Team
          </span>
          <h2 className="text-3xl font-bold text-gray-800 mt-2">Our Expert Instructors</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {team.map((member) => (
            <div key={member.name} className="bg-green-50 rounded-2xl p-8 text-center hover:shadow-md transition">
              <div className="mb-4 flex justify-center">{member.icon}</div>
              <h3 className="text-gray-800 font-bold text-xl">{member.name}</h3>
              <p className="text-green-600 font-medium mt-1">{member.role}</p>
              <p className="text-gray-400 text-sm mt-1">Experience: {member.exp}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-green-600 py-16 text-center text-white">
        <h2 className="text-3xl font-bold mb-4">Ready to Start Your Yoga Journey?</h2>
        <p className="text-green-100 mb-8 text-lg">Join 500+ students who have transformed their lives with YogaZen.</p>
        <a href="/classes" className="bg-white text-green-600 px-8 py-3 rounded-full font-semibold hover:bg-green-50 transition">
          Explore Classes
        </a>
      </section>

    </div>
  )
}

export default About