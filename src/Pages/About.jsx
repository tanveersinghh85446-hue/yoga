import React from 'react'
import { GiHealing, GiPowerLightning, GiPeaceDove, GiMeditation } from "react-icons/gi"
import { RiCommunityLine } from "react-icons/ri"
import { PiPlantLight } from "react-icons/pi"
import { GrYoga } from "react-icons/gr"
import { TbYoga } from "react-icons/tb"

const About = () => {
  const team = [
    { name: 'Priya Sharma', role: 'Head Instructor',   icon: <GiMeditation className="text-6xl mx-auto" style={{ color: '#C8A27A' }} />, exp: '10+ years' },
    { name: 'Rahul Verma',  role: 'Meditation Coach',  icon: <GrYoga       className="text-6xl mx-auto" style={{ color: '#C8A27A' }} />, exp: '8+ years'  },
    { name: 'Anita Singh',  role: 'Hatha Yoga Expert', icon: <TbYoga       className="text-6xl mx-auto" style={{ color: '#C8A27A' }} />, exp: '6+ years'  },
  ]

  const values = [
    { icon: <GiHealing        className="text-4xl mx-auto" style={{ color: '#C8A27A' }} />, title: 'Natural Healing', desc: 'We believe in the power of nature and mindful movement to heal the body.' },
    { icon: <RiCommunityLine  className="text-4xl mx-auto" style={{ color: '#C8A27A' }} />, title: 'Community',       desc: 'A warm, welcoming space for everyone regardless of age or skill level.' },
    { icon: <GiPowerLightning className="text-4xl mx-auto" style={{ color: '#C8A27A' }} />, title: 'Strength',        desc: 'Build physical and mental strength through consistent practice.' },
    { icon: <GiPeaceDove      className="text-4xl mx-auto" style={{ color: '#C8A27A' }} />, title: 'Inner Peace',     desc: 'Find balance and calm in your daily life through yoga and meditation.' },
  ]

  return (
    <div style={{ backgroundColor: '#F5F1E9' }}>

      {/* Hero Section */}
      <section className="py-20 text-center" style={{ background: 'linear-gradient(to bottom right, #F5F1E9, #E8D8C3)' }}>
        <div className="max-w-3xl mx-auto px-4">
          <span className="font-semibold text-sm uppercase tracking-widest" style={{ color: '#C8A27A' }}>
            About Us
          </span>
          <h1 className="text-4xl md:text-5xl font-bold mt-3" style={{ color: '#5C4033' }}>
            Who We <span style={{ color: '#C8A27A' }}>Are</span>
          </h1>
          <p className="mt-5 text-lg leading-relaxed" style={{ color: '#5C4033', opacity: 0.7 }}>
            YogaZen was founded with one mission — to make yoga accessible,
            enjoyable, and transformative for everyone. We are a community
            of passionate yoga lovers dedicated to your wellness journey.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="max-w-7xl mx-auto px-4 py-16 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="rounded-3xl h-80 flex items-center justify-center shadow" style={{ backgroundColor: '#E8D8C3' }}>
          <PiPlantLight className="text-8xl" style={{ color: '#C8A27A' }} />
        </div>
        <div>
          <span className="font-semibold text-sm uppercase tracking-widest" style={{ color: '#C8A27A' }}>
            Our Story
          </span>
          <h2 className="text-3xl font-bold mt-2 mb-4" style={{ color: '#5C4033' }}>
            Started With a Simple Dream
          </h2>
          <p className="leading-relaxed mb-4" style={{ color: '#5C4033', opacity: 0.7 }}>
            In 2015, our founder Priya Sharma started teaching yoga in a small
            park in Delhi with just 5 students. Her vision was simple — spread
            the joy and healing power of yoga to as many people as possible.
          </p>
          <p className="leading-relaxed" style={{ color: '#5C4033', opacity: 0.7 }}>
            Today, YogaZen has grown into a full yoga studio with 500+ students,
            20+ classes, and a team of 10+ expert instructors. But our heart
            remains the same — your wellness is our mission.
          </p>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16" style={{ backgroundColor: '#E8D8C3' }}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <span className="font-semibold text-sm uppercase tracking-widest" style={{ color: '#C8A27A' }}>
              What We Stand For
            </span>
            <h2 className="text-3xl font-bold mt-2" style={{ color: '#5C4033' }}>Our Core Values</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {values.map((val) => (
              <div key={val.title} className="rounded-2xl p-6 shadow-sm text-center hover:shadow-md transition" style={{ backgroundColor: '#F5F1E9' }}>
                <div className="mb-3 flex justify-center">{val.icon}</div>
                <h3 className="font-semibold text-lg mb-2" style={{ color: '#5C4033' }}>{val.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: '#5C4033', opacity: 0.65 }}>{val.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <span className="font-semibold text-sm uppercase tracking-widest" style={{ color: '#C8A27A' }}>
            Meet The Team
          </span>
          <h2 className="text-3xl font-bold mt-2" style={{ color: '#5C4033' }}>Our Expert Instructors</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {team.map((member) => (
            <div key={member.name} className="rounded-2xl p-8 text-center hover:shadow-md transition" style={{ backgroundColor: '#E8D8C3' }}>
              <div className="mb-4 flex justify-center">{member.icon}</div>
              <h3 className="font-bold text-xl" style={{ color: '#5C4033' }}>{member.name}</h3>
              <p className="font-medium mt-1" style={{ color: '#C8A27A' }}>{member.role}</p>
              <p className="text-sm mt-1" style={{ color: '#5C4033', opacity: 0.6 }}>Experience: {member.exp}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 text-center" style={{ backgroundColor: '#B08968' }}>
        <h2 className="text-3xl font-bold mb-4 text-white">Ready to Start Your Yoga Journey?</h2>
        <p className="mb-8 text-lg" style={{ color: '#F5F1E9' }}>Join 500+ students who have transformed their lives with YogaZen.</p>
        <a
          href="/classes"
          className="px-8 py-3 rounded-full font-semibold transition hover:opacity-90"
          style={{ backgroundColor: '#F5F1E9', color: '#B08968' }}
        >
          Explore Classes
        </a>
      </section>

    </div>
  )
}

export default About