import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { classesData } from '../data/classesData'
import { GiMeditation } from 'react-icons/gi'
import {
  FiBarChart2, FiCalendar, FiBook, FiPhone,
  FiUser, FiAward, FiClock, FiMapPin
} from 'react-icons/fi'
import { FaFire, FaStar } from 'react-icons/fa'

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState('overview')

  const user = {
    name: 'Rahul Sharma',
    email: 'rahul@email.com',
    plan: 'Pro',
    joined: 'January 2026',
    streak: 12,
    totalClasses: 48,
    hoursSpent: 36,
  }

  const bookedClasses = [
    { id: 1, name: 'Hatha Yoga', day: 'Monday', time: '6:00 AM', instructor: 'Priya Sharma', status: 'Upcoming' },
    { id: 2, name: 'Meditation', day: 'Wednesday', time: '9:00 AM', instructor: 'Rahul Verma', status: 'Upcoming' },
    { id: 3, name: 'Power Yoga', day: 'Friday', time: '6:00 PM', instructor: 'Vikram Nair', status: 'Completed' },
    { id: 4, name: 'Vinyasa Flow', day: 'Saturday', time: '4:00 PM', instructor: 'Arjun Mehta', status: 'Completed' },
  ]

  const achievements = [
    { icon: <FiAward className="text-yellow-500 text-4xl" />, title: '7 Day Streak', desc: 'Practiced 7 days in a row' },
    { icon: <FaStar className="text-yellow-400 text-4xl" />, title: 'First Class', desc: 'Completed your first class' },
    { icon: <GiMeditation className="text-green-500 text-4xl" />, title: '10 Classes Done', desc: 'Attended 10 classes' },
    { icon: <GiMeditation className="text-purple-500 text-4xl" />, title: 'Zen Master', desc: 'Completed 5 meditation sessions' },
  ]

  const tabs = [
    { id: 'overview', label: 'Overview', icon: <FiBarChart2 /> },
    { id: 'classes', label: 'My Classes', icon: <GiMeditation /> },
    { id: 'achievements', label: 'Achievements', icon: <FiAward /> },
    { id: 'profile', label: 'Profile', icon: <FiUser /> },
  ]

  const stats = [
    { label: 'Day Streak', value: user.streak, icon: <FaFire className="text-orange-500 text-3xl" /> },
    { label: 'Total Classes', value: user.totalClasses, icon: <GiMeditation className="text-green-600 text-3xl" /> },
    { label: 'Hours Spent', value: user.hoursSpent, icon: <FiClock className="text-blue-500 text-3xl" /> },
    { label: 'Member Since', value: user.joined, icon: <FiCalendar className="text-purple-500 text-3xl" /> },
  ]

  const quickLinks = [
    { label: 'Browse Classes', path: '/classes', icon: <GiMeditation className="text-3xl text-green-600" /> },
    { label: 'View Schedule', path: '/schedule', icon: <FiCalendar className="text-3xl text-green-600" /> },
    { label: 'Read Blog', path: '/blog', icon: <FiBook className="text-3xl text-green-600" /> },
    { label: 'Contact Us', path: '/contact', icon: <FiPhone className="text-3xl text-green-600" /> },
  ]

  return (
    <div className="bg-gray-50 min-h-screen">

      {/* Top Header */}
      <section className="bg-linear-to-br from-green-600 to-green-700 py-10 sm:py-14 px-4">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center sm:items-start gap-5">
          <div className="w-20 h-20 bg-white rounded-2xl flex items-center justify-center shadow-md shrink-0">
            <GiMeditation className="text-green-600 text-5xl" />
          </div>
          <div className="text-center sm:text-left">
            <p className="text-green-200 text-sm font-medium flex items-center gap-1 justify-center sm:justify-start">
              Welcome back
            </p>
            <h1 className="text-2xl sm:text-3xl font-bold text-white mt-1">{user.name}</h1>
            <p className="text-green-200 text-sm mt-1">{user.email}</p>
            <span className="inline-flex items-center gap-1 mt-2 bg-white text-green-600 text-xs font-bold px-3 py-1 rounded-full">
              <FaStar className="text-yellow-400" /> {user.plan} Member
            </span>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 py-8 sm:py-10">

        {/* Tabs */}
        <div className="flex flex-wrap gap-2 mb-8">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition
                ${activeTab === tab.id
                  ? 'bg-green-600 text-white shadow'
                  : 'bg-white text-gray-500 hover:bg-green-50 hover:text-green-600 border border-gray-200'
                }`}
            >
              {tab.icon} {tab.label}
            </button>
          ))}
        </div>

        {/* OVERVIEW TAB */}
        {activeTab === 'overview' && (
          <div className="space-y-6">

            {/* Stats Cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {stats.map((stat) => (
                <div key={stat.label} className="bg-white rounded-2xl p-5 shadow-sm text-center">
                  <div className="flex justify-center mb-2">{stat.icon}</div>
                  <p className="text-xl sm:text-2xl font-bold text-gray-800">{stat.value}</p>
                  <p className="text-gray-400 text-xs mt-1">{stat.label}</p>
                </div>
              ))}
            </div>

            {/* Upcoming Classes */}
            <div className="bg-white rounded-2xl shadow-sm p-6">
              <div className="flex items-center justify-between mb-5">
                <h3 className="text-gray-800 font-bold text-lg">Upcoming Classes</h3>
                <button
                  onClick={() => setActiveTab('classes')}
                  className="text-green-600 text-sm font-semibold hover:underline"
                >
                  View All →
                </button>
              </div>
              <div className="space-y-3">
                {bookedClasses.filter(c => c.status === 'Upcoming').map((cls, i) => (
                  <div key={i} className="flex items-center gap-4 bg-green-50 rounded-2xl p-4 flex-wrap">
                    <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-sm shrink-0">
                      <GiMeditation className="text-green-600 text-2xl" />
                    </div>
                    <div className="grow min-w-0">
                      <p className="text-gray-800 font-semibold text-sm">{cls.name}</p>
                      <p className="text-gray-400 text-xs mt-0.5">
                        {cls.day} · {cls.time} · {cls.instructor}
                      </p>
                    </div>
                    <span className="bg-green-100 text-green-600 text-xs font-semibold px-3 py-1 rounded-full">
                      {cls.status}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {quickLinks.map((item) => (
                <Link
                  key={item.label}
                  to={item.path}
                  className="bg-white rounded-2xl p-5 shadow-sm text-center hover:shadow-md transition hover:border-green-200 border border-transparent"
                >
                  <div className="flex justify-center mb-2">{item.icon}</div>
                  <p className="text-gray-600 text-sm font-medium">{item.label}</p>
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* CLASSES TAB */}
        {activeTab === 'classes' && (
          <div className="space-y-4">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-gray-800 font-bold text-xl">My Booked Classes</h3>
              <Link
                to="/classes"
                className="bg-green-600 text-white px-4 py-2 rounded-full text-sm font-semibold hover:bg-green-700 transition"
              >
                + Book New
              </Link>
            </div>
            {bookedClasses.map((cls, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl shadow-sm p-5 flex flex-col sm:flex-row sm:items-center gap-4"
              >
                <div className="w-14 h-14 bg-green-50 rounded-2xl flex items-center justify-center shrink-0">
                  <GiMeditation className="text-green-600 text-3xl" />
                </div>
                <div className="grow">
                  <h4 className="text-gray-800 font-bold text-base">{cls.name}</h4>
                  <p className="text-gray-400 text-sm mt-0.5 flex items-center gap-2 flex-wrap">
                    <span className="flex items-center gap-1"><FiCalendar className="text-xs" /> {cls.day}</span>
                    <span className="flex items-center gap-1"><FiClock className="text-xs" /> {cls.time}</span>
                    <span className="flex items-center gap-1"><FiUser className="text-xs" /> {cls.instructor}</span>
                  </p>
                </div>
                <div className="flex items-center gap-3 flex-wrap">
                  <span className={`text-xs font-semibold px-3 py-1 rounded-full
                    ${cls.status === 'Upcoming'
                      ? 'bg-green-100 text-green-600'
                      : 'bg-gray-100 text-gray-400'
                    }`}>
                    {cls.status}
                  </span>
                  {cls.status === 'Upcoming' && (
                    <button className="text-red-400 text-xs font-medium hover:underline">
                      Cancel
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* ACHIEVEMENTS TAB */}
        {activeTab === 'achievements' && (
          <div>
            <h3 className="text-gray-800 font-bold text-xl mb-6 flex items-center gap-2">
              <FiAward className="text-yellow-500" /> My Achievements
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5">
              {achievements.map((ach, i) => (
                <div
                  key={i}
                  className="bg-white rounded-2xl shadow-sm p-6 text-center hover:shadow-md transition"
                >
                  <div className="flex justify-center mb-3">{ach.icon}</div>
                  <h4 className="text-gray-800 font-bold text-base">{ach.title}</h4>
                  <p className="text-gray-400 text-sm mt-1">{ach.desc}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* PROFILE TAB */}
        {activeTab === 'profile' && (
          <div className="max-w-2xl space-y-6">
            <h3 className="text-gray-800 font-bold text-xl">My Profile</h3>

            <div className="bg-white rounded-2xl shadow-sm p-6 space-y-4">
              {[
                { label: 'Full Name', value: user.name, type: 'text' },
                { label: 'Email', value: user.email, type: 'email' },
                { label: 'Phone', value: '+91 98765 43210', type: 'tel' },
                { label: 'City', value: 'Delhi, India', type: 'text' },
              ].map((field) => (
                <div key={field.label}>
                  <label className="text-sm text-gray-400 font-medium block mb-1">
                    {field.label}
                  </label>
                  <input
                    type={field.type}
                    defaultValue={field.value}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm text-gray-700 outline-none focus:border-green-400 transition"
                  />
                </div>
              ))}
              <button className="w-full bg-green-600 text-white py-3 rounded-xl font-semibold text-sm hover:bg-green-700 transition mt-2 flex items-center justify-center gap-2">
                Save Changes
              </button>
            </div>

            {/* Membership */}
            <div className="bg-green-50 rounded-2xl p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <p className="text-xs text-green-600 font-semibold uppercase tracking-widest mb-1">Current Plan</p>
                <h4 className="text-gray-800 font-bold text-xl flex items-center gap-2">
                  <FaStar className="text-yellow-400" /> {user.plan} Membership
                </h4>
                <p className="text-gray-400 text-sm mt-1">Member since {user.joined}</p>
              </div>
              <Link
                to="/pricing"
                className="bg-green-600 text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-green-700 transition text-center"
              >
                Upgrade Plan
              </Link>
            </div>

            {/* Danger Zone */}
            <div className="bg-red-50 rounded-2xl p-6">
              <h4 className="text-red-500 font-bold mb-1">Danger Zone</h4>
              <p className="text-gray-400 text-sm mb-4">
                Once you delete your account, there is no going back.
              </p>
              <button className="border border-red-400 text-red-400 px-5 py-2 rounded-full text-sm font-semibold hover:bg-red-50 transition">
                Delete Account
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  )
}

export default Dashboard