import React, { useState } from 'react'

const HeroBanner = () => {
  const [imgHover, setImgHover] = useState(false)

  return (
    <>
      {/* ── MARQUEE ANIMATION STYLE ── */}
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 25s linear infinite;
        }
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(24px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .fade-up { animation: fadeUp 0.7s ease forwards; }
        .fade-up-1 { animation: fadeUp 0.7s 0.1s ease both; }
        .fade-up-2 { animation: fadeUp 0.7s 0.25s ease both; }
        .fade-up-3 { animation: fadeUp 0.7s 0.4s ease both; }
        .fade-up-4 { animation: fadeUp 0.7s 0.55s ease both; }
        .fade-up-5 { animation: fadeUp 0.7s 0.7s ease both; }
      `}</style>

      <section className="relative min-h-screen bg-linear-to-br from-green-50 via-green-100 to-green-200 flex flex-col items-center justify-center py-16 overflow-hidden">

        {/* ── BG BLOBS ── */}
        <div className="absolute top-0 right-0 w-125 h-125 bg-green-300 opacity-20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-green-400 opacity-15 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 w-72 h-72 bg-green-200 opacity-30 rounded-full blur-2xl -translate-x-1/2 -translate-y-1/2 pointer-events-none" />

        {/* ── DOT GRID ── */}
        <div
          className="absolute inset-0 pointer-events-none opacity-20"
          style={{
            backgroundImage: 'radial-gradient(circle, #16a34a 1px, transparent 1px)',
            backgroundSize: '28px 28px',
          }}
        />

        {/* ── TOP NAV STRIP ── */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6 fade-up-1">
          <div className="flex flex-wrap items-center justify-between gap-3 bg-white/50 backdrop-blur-sm border border-green-200 rounded-2xl px-5 py-3">
            <div className="flex items-center gap-2">
              <span className="text-2xl">🪷</span>
              <span className="text-green-700 font-extrabold text-lg tracking-tight">YogaZen</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {['Classes', 'Instructors', 'Schedule', 'Pricing'].map((nav) => (
                <a key={nav} href="#" className="text-gray-600 hover:text-green-600 text-sm font-medium transition-colors duration-200 px-3 py-1 rounded-full hover:bg-green-100">
                  {nav}
                </a>
              ))}
            </div>
            <a href="/join" className="bg-green-600 hover:bg-green-700 text-white text-sm font-bold px-5 py-2 rounded-full transition-all duration-300 shadow-md shadow-green-200">
              Join Free
            </a>
          </div>
        </div>

        {/* ── MARQUEE STRIP ── */}
        <div className="relative z-10 w-full overflow-hidden mb-8 fade-up-1">
          <div className="flex gap-6 animate-marquee whitespace-nowrap">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="flex gap-6 shrink-0">
                {['Morning Flow', 'Power Yoga', 'Meditation', 'Breathwork', 'Vinyasa', 'Hatha Yoga', 'Yin Yoga', 'Ashtanga'].map((item) => (
                  <span key={item} className="inline-flex items-center gap-2 text-green-700 font-semibold text-sm bg-white/60 border border-green-200 rounded-full px-4 py-1.5">
                    <span className="text-green-400 text-xs">✦</span> {item}
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* ── MAIN GRID ── */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

          {/* ── LEFT CONTENT ── */}
          <div className="order-2 md:order-1 flex flex-col items-center md:items-start text-center md:text-left">

            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white/70 border border-green-300 backdrop-blur-sm rounded-full px-4 py-2 mb-5 shadow-sm fade-up-2">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span className="text-green-700 font-bold text-xs tracking-widest uppercase">
                Welcome to YogaZen
              </span>
            </div>

            {/* Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-800 leading-tight mb-5 fade-up-2">
              Find Your{' '}
              <span className="relative inline-block text-green-600">
                Inner Peace
                <svg viewBox="0 0 220 12" className="absolute -bottom-2 left-0 w-full" preserveAspectRatio="none">
                  <path d="M2 8 Q55 2 110 8 Q165 14 218 6" stroke="#4ade80" strokeWidth="3" fill="none" strokeLinecap="round" />
                </svg>
              </span>
              {' '}Through Yoga
            </h1>

            {/* Description */}
            <p className="text-gray-500 text-base sm:text-lg leading-relaxed max-w-lg mb-8 fade-up-3">
              Transform your mind, body, and soul with our expert-guided yoga classes.
              Suitable for all levels — beginners to advanced.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8 w-full sm:w-auto fade-up-3">
              <a href="/classes" className="w-full sm:w-auto text-center bg-green-600 hover:bg-green-700 active:scale-95 text-white px-8 py-3.5 rounded-full font-bold text-sm shadow-lg shadow-green-200 hover:shadow-green-300 transition-all duration-300">
                Explore Classes
              </a>
              <a href="/about" className="w-full sm:w-auto text-center border-2 border-green-600 text-green-600 hover:bg-green-600 hover:text-white active:scale-95 px-8 py-3.5 rounded-full font-bold text-sm transition-all duration-300">
                Learn More
              </a>
            </div>

            {/* Divider */}
            <div className="w-16 h-px bg-green-300 mb-6 hidden md:block" />

            {/* Stats */}
            <div className="flex gap-8 sm:gap-10 mb-8 fade-up-4">
              {[
                { value: '500+', label: 'Happy Students' },
                { value: '20+',  label: 'Yoga Classes' },
                { value: '10+',  label: 'Expert Instructors' },
              ].map((stat) => (
                <div key={stat.label} className="text-center md:text-left group">
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-green-600 group-hover:scale-110 transition-transform duration-200 inline-block">
                    {stat.value}
                  </h3>
                  <p className="text-gray-400 text-xs sm:text-sm mt-0.5 font-medium">{stat.label}</p>
                </div>
              ))}
            </div>

            {/* Feature Pills */}
            <div className="flex flex-wrap gap-3 justify-center md:justify-start fade-up-5">
              {[
                { icon: '🕐', text: 'Flexible Timings' },
                { icon: '📱', text: 'Online & Offline' },
                { icon: '🏅', text: 'Certified Trainers' },
                { icon: '🧘', text: 'All Levels Welcome' },
              ].map((pill) => (
                <div key={pill.text} className="flex items-center gap-2 bg-white/70 border border-green-200 rounded-full px-4 py-2 shadow-sm hover:shadow-md hover:border-green-400 transition-all duration-200">
                  <span className="text-base">{pill.icon}</span>
                  <span className="text-gray-600 text-xs font-semibold">{pill.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* ── RIGHT IMAGE ── */}
          <div className="order-1 md:order-2 flex justify-center fade-up-2">
            <div className="relative">

              {/* Glow ring */}
              <div className="absolute inset-0 rounded-3xl bg-linear-to-br from-green-300 to-green-500 opacity-20 blur-xl scale-110 pointer-events-none" />

              {/* Live Class Badge */}
              <div className="absolute -top-4 -left-4 z-20 bg-white rounded-2xl shadow-lg px-4 py-2.5 flex items-center gap-2.5 border border-green-100">
                <div className="w-8 h-8 bg-green-100 rounded-xl flex items-center justify-center text-lg">🧘</div>
                <div>
                  <p className="text-xs font-bold text-gray-700 leading-none">Live Class</p>
                  <p className="text-xs text-green-600 font-semibold mt-0.5">Starting Now</p>
                </div>
              </div>

              {/* Rating Badge */}
              <div className="absolute -bottom-4 -right-4 z-20 bg-white rounded-2xl shadow-lg px-4 py-2.5 border border-green-100">
                <div className="flex items-center gap-0.5 mb-0.5">
                  {[1,2,3,4,5].map(i => (
                    <svg key={i} className="w-3 h-3 fill-yellow-400" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                    </svg>
                  ))}
                </div>
                <p className="text-xs font-bold text-gray-700">4.9 <span className="text-gray-400 font-normal">(2.3k reviews)</span></p>
              </div>

              {/* Weekly Progress Card */}
              <div className="absolute -left-8 bottom-20 z-20 bg-white rounded-2xl shadow-lg px-4 py-3 border border-green-100 w-44">
                <p className="text-xs font-bold text-gray-700 mb-2.5">Weekly Progress</p>
                {[
                  { label: 'Flexibility', val: 75 },
                  { label: 'Strength', val: 60 },
                  { label: 'Balance', val: 85 },
                ].map((bar) => (
                  <div key={bar.label} className="mb-2">
                    <div className="flex justify-between mb-1">
                      <span className="text-xs text-gray-500">{bar.label}</span>
                      <span className="text-xs text-green-600 font-bold">{bar.val}%</span>
                    </div>
                    <div className="w-full bg-green-100 rounded-full h-1.5">
                      <div className="bg-green-500 h-1.5 rounded-full transition-all duration-500" style={{ width: `${bar.val}%` }} />
                    </div>
                  </div>
                ))}
              </div>

              {/* Main Image */}
              <div
                className={`relative z-10 rounded-3xl overflow-hidden shadow-2xl transition-transform duration-500 ${imgHover ? 'scale-105' : 'scale-100'}`}
                style={{ width: 'clamp(240px, 35vw, 380px)', aspectRatio: '3/4' }}
                onMouseEnter={() => setImgHover(true)}
                onMouseLeave={() => setImgHover(false)}
              >
                <img src="Yoga.jpg" alt="Yoga pose" className="w-full h-full object-cover" />
                <div className={`absolute inset-0 bg-green-600 transition-opacity duration-300 ${imgHover ? 'opacity-10' : 'opacity-0'}`} />
              </div>

            </div>
          </div>
        </div>

        {/* ── BOTTOM TRUST BAR ── */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-14 fade-up-5">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {[
              { icon: '🌿', title: 'Holistic Approach', desc: 'Mind, body & soul balance' },
              { icon: '🏆', title: 'Award Winning', desc: 'Best yoga studio 2024' },
              { icon: '💚', title: 'Community', desc: '500+ active members' },
              { icon: '📅', title: 'Daily Sessions', desc: 'Morning & evening batches' },
            ].map((card) => (
              <div key={card.title} className="bg-white/60 backdrop-blur-sm border border-green-200 rounded-2xl px-4 py-4 flex items-center gap-3 hover:bg-white/80 hover:shadow-md transition-all duration-300 group">
                <div className="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center text-xl shrink-0 group-hover:scale-110 transition-transform duration-200">
                  {card.icon}
                </div>
                <div>
                  <p className="text-gray-700 font-bold text-sm leading-tight">{card.title}</p>
                  <p className="text-gray-400 text-xs mt-0.5">{card.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </section>
    </>
  )
}

export default HeroBanner