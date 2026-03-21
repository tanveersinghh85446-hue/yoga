import React from 'react'
const ClassFilter = ({ selected, onSelect }) => {
  const filters = ['All', 'Beginner', 'Intermediate', 'Advanced']

  return (
    <div className="flex flex-wrap gap-3 justify-center mb-10">
      {filters.map((filter) => (
        <button
          key={filter}
          onClick={() => onSelect(filter)}
          className={`px-5 py-2 rounded-full font-medium transition duration-200
            ${selected === filter
              ? 'bg-green-600 text-white'
              : 'bg-gray-100 text-gray-600 hover:bg-green-50 hover:text-green-600'
            }`}
        >
          {filter}
        </button>
      ))}
    </div>
  )
}

export default ClassFilter