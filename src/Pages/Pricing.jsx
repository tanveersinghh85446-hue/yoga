import React from 'react'
import { useState } from 'react'

const Pricing = () => {
  const [isYearly, setIsYearly] = useState(false)

  const plans = [
    {
      name: 'Starter',
      emoji: '🌱',
      monthlyPrice: '₹499',
      yearlyPrice: '₹4,999',
      desc: 'Perfect for beginners who want to explore yoga.',
      color: 'border-gray-200',
      btnColor: 'border border-green-600 text-green-600 hover:bg-green-50',
      badge: null,
      features: [
        '2 Classes per week',
        'Access to Beginner classes',
        'Online schedule access',
        'Community support',
        '1 Free trial class',
      ],
    },
    {
      name: 'Pro',
      emoji: '🧘‍♀️',
      monthlyPrice: '₹999',
      yearlyPrice: '₹9,999',
      desc: 'Most popular plan for regular practitioners.',
      color: 'border-green-500 ring-2 ring-green-400',
      btnColor: 'bg-green-600 text-white hover:bg-green-700',
      badge: '⭐ Most Popular',
      features: [
        'Unlimited Classes',
        'Access to All levels',
        'Priority booking',
        'Personalized feedback',
        '1 Free PT session/month',
        'Nutrition tips',
      ],
    },
    {
      name: 'Elite',
      emoji: '👑',
      monthlyPrice: '₹1,999',
      yearlyPrice: '₹19,999',
      desc: 'For dedicated yogis who want the full experience.',
      color: 'border-gray-200',
      btnColor: 'border border-green-600 text-green-600 hover:bg-green-50',
      badge: null,
      features: [
        'Everything in Pro',
        '1-on-1 private sessions',
        'Custom yoga plan',
        'Diet & wellness coaching',
        'Unlimited PT sessions',
        'Early access to workshops',
        'Exclusive member events',
      ],
    },
  ]

  const faqs = [
    { q: 'Can I cancel anytime?', a: 'Yes! You can cancel your subscription anytime with no hidden charges.' },
    { q: 'Is there a free trial?', a: 'Yes, every new member gets 1 free trial class before subscribing.' },
    { q: 'Can I switch plans later?', a: 'Absolutely! You can upgrade or downgrade your plan at any time.' },
    { q: 'Are online classes available?', a: 'Yes, Pro and Elite members get access to live online classes as well.' },
    { q: 'What payment methods accepted?', a: 'We accept UPI, Credit/Debit cards, Net Banking and Wallets.' },
  ]

  const [openFaq, setOpenFaq] = useState(null)

  return (
    <div className="bg-white">

      {/* Hero */}
      <section className="bg-linear-to-br from-green-50 to-green-100 py-16 sm:py-20 text-center">
        <div className="max-w-2xl mx-auto px-4">
          <span className="text-green-600 font-semibold text-sm uppercase tracking-widest">
            Membership Plans
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mt-3">
            Simple & <span className="text-green-600">Transparent</span> Pricing
          </h1>
          <p className="text-gray-500 mt-4 text-base sm:text-lg">
            Choose a plan that fits your goals. No hidden charges, no confusion.
          </p>

          {/* Monthly / Yearly Toggle */}
          <div className="flex items-center justify-center gap-3 mt-8">
            <span className={`text-sm font-medium ${!isYearly ? 'text-green-600' : 'text-gray-400'}`}>Monthly</span>
            <button
              onClick={() => setIsYearly(!isYearly)}
              className={`w-14 h-7 rounded-full transition-colors duration-300 flex items-center px-1
                ${isYearly ? 'bg-green-600' : 'bg-gray-300'}`}
            >
              <div className={`w-5 h-5 bg-white rounded-full shadow transition-transform duration-300
                ${isYearly ? 'translate-x-7' : 'translate-x-0'}`}
              />
            </button>
            <span className={`text-sm font-medium ${isYearly ? 'text-green-600' : 'text-gray-400'}`}>
              Yearly <span className="bg-green-100 text-green-600 text-xs px-2 py-0.5 rounded-full ml-1">Save 20%</span>
            </span>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="max-w-7xl mx-auto px-4 py-14 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 items-start">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`bg-white rounded-3xl border-2 ${plan.color} p-6 sm:p-8 relative flex flex-col`}
            >
              {/* Badge */}
              {plan.badge && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-green-600 text-white text-xs font-semibold px-4 py-1.5 rounded-full whitespace-nowrap">
                  {plan.badge}
                </div>
              )}

              {/* Top */}
              <div className="text-center mb-6">
                <div className="text-5xl mb-3">{plan.emoji}</div>
                <h3 className="text-xl font-bold text-gray-800">{plan.name}</h3>
                <p className="text-gray-400 text-sm mt-1">{plan.desc}</p>
                <div className="mt-4">
                  <span className="text-4xl font-bold text-gray-800">
                    {isYearly ? plan.yearlyPrice : plan.monthlyPrice}
                  </span>
                  <span className="text-gray-400 text-sm ml-1">
                    / {isYearly ? 'year' : 'month'}
                  </span>
                </div>
              </div>

              {/* Features */}
              <ul className="space-y-3 mb-8 grow">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2 text-sm text-gray-600">
                    <span className="text-green-500 font-bold">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>

              {/* Button */}
              <button className={`w-full py-3 rounded-full font-semibold text-sm transition ${plan.btnColor}`}>
                Get Started
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-green-50 py-14 sm:py-16">
        <div className="max-w-3xl mx-auto px-4">
          <div className="text-center mb-10">
            <span className="text-green-600 font-semibold text-sm uppercase tracking-widest">FAQ</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mt-2">Frequently Asked Questions</h2>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-sm overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full flex items-center justify-between px-5 py-4 text-left"
                >
                  <span className="text-gray-700 font-semibold text-sm sm:text-base">{faq.q}</span>
                  <span className="text-green-600 text-xl ml-4 flex-shrink-2">
                    {openFaq === index ? '−' : '+'}
                  </span>
                </button>
                {openFaq === index && (
                  <div className="px-5 pb-4 text-gray-500 text-sm leading-relaxed border-t border-gray-100 pt-3">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-green-600 py-14 text-center text-white px-4">
        <h2 className="text-2xl sm:text-3xl font-bold mb-3">
          Start Your Free Trial Today!
        </h2>
        <p className="text-green-100 mb-8 text-base sm:text-lg">
          No credit card required. Just show up and experience the magic of yoga.
        </p>

        <a href="/contact"
        className="bg-white text-green-600 px-8 py-3 rounded-full font-semibold hover:bg-green-50 transition"
        >
        Book Free Trial
      </a>
    </section>

    </div >
  )
}

export default Pricing