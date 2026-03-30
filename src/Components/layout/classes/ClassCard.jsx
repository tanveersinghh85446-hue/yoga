import React from 'react'
import { Link } from 'react-router-dom'
import { FaClock } from 'react-icons/fa'

const ClassCard = ({ cls }) => {
  return (
    <div className="bg-white rounded-2xl shadow-sm hover:shadow-md transition duration-300 overflow-hidden border border-gray-100">
      {/* Image */}
      <div className="h-36 overflow-hidden">
        <img
          src={cls.image}
          alt={cls.name}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="p-5">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-gray-800 font-bold text-lg">{cls.name}</h3>
          <span className={`text-xs font-semibold px-3 py-1 rounded-full 
            ${cls.level === 'Beginner' ? 'bg-green-100 text-green-600' :
              cls.level === 'Intermediate' ? 'bg-yellow-100 text-yellow-600' :
                'bg-red-100 text-red-600'}`}>
            {cls.level}
          </span>
        </div>

        <p className="text-gray-400 text-sm leading-relaxed mb-4">{cls.desc}</p>

        <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
          <span className="flex items-center gap-1">
            <FaClock className="text-xs" /> {cls.duration}
          </span>
          <span className="text-green-600 font-bold text-base">{cls.price}</span>
        </div>

        <Link
          to={`/classes/${cls.id}`}
          className="block text-center bg-green-600 text-white py-2 rounded-full hover:bg-green-700 transition"
        >
          View Details
        </Link>
      </div>
    </div>
  )
}

export default ClassCard