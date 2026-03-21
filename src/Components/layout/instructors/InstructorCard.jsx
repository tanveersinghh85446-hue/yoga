import React from 'react'
const InstructorCard = ({ instructor }) => {
  return (
    <div className="bg-white rounded-2xl shadow-sm hover:shadow-md transition duration-300 border border-gray-100 overflow-hidden">
      {/* Top */}
      <div className="bg-green-50 h-40 flex items-center justify-center text-8xl">
        {instructor.emoji}
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="text-gray-800 font-bold text-xl">{instructor.name}</h3>
        <p className="text-green-600 font-medium text-sm mt-1">{instructor.role}</p>
        <p className="text-gray-400 text-xs mt-1">⭐ {instructor.speciality}</p>

        <p className="text-gray-500 text-sm leading-relaxed mt-3 mb-4">
          {instructor.bio}
        </p>

        {/* Stats */}
        <div className="flex justify-between text-center border-t pt-4">
          <div>
            <p className="text-green-600 font-bold text-lg">{instructor.exp}</p>
            <p className="text-gray-400 text-xs">Experience</p>
          </div>
          <div>
            <p className="text-green-600 font-bold text-lg">{instructor.classes}</p>
            <p className="text-gray-400 text-xs">Classes</p>
          </div>
          <div>
            <p className="text-green-600 font-bold text-lg">{instructor.students}+</p>
            <p className="text-gray-400 text-xs">Students</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default InstructorCard