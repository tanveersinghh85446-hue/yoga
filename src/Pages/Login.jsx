import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaEye, FaEyeSlash, FaRocket, FaGoogle } from 'react-icons/fa'
import { GiMeditation } from 'react-icons/gi'

const Login = () => {
  const [form, setForm] = useState({ email: '', password: '' })
  const [showPass, setShowPass] = useState(false)
  const [error, setError] = useState('')

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
    setError('')
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!form.email || !form.password) {
      setError('Please fill in all fields.')
      return
    }
    alert('Login Successful!')
  }

  return (
    <div className="min-h-screen bg-linear-to-br from-green-50 to-green-100 flex items-center justify-center px-4 py-12">
      <div className="bg-white rounded-3xl shadow-md w-full max-w-md p-8 sm:p-10">

        {/* Logo */}
        <div className="text-center mb-8">
          <Link to="/" className="text-3xl font-bold text-green-600 flex items-center justify-center gap-2">
            <GiMeditation className="text-4xl" /> YogaZen
          </Link>
          <h2 className="text-2xl font-bold text-gray-800 mt-3">Welcome Back!</h2>
          <p className="text-gray-400 text-sm mt-1">Login to continue your yoga journey</p>
        </div>

        {/* Error */}
        {error && (
          <div className="bg-red-50 text-red-500 text-sm px-4 py-3 rounded-xl mb-5 text-center">
            {error}
          </div>
        )}

        {/* Form */}
        <div className="space-y-4">

          {/* Email */}
          <div>
            <label className="text-sm text-gray-500 font-medium block mb-1">Email Address</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="rahul@email.com"
              className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm text-gray-700 outline-none focus:border-green-400 transition"
            />
          </div>

          {/* Password */}
          <div>
            <label className="text-sm text-gray-500 font-medium block mb-1">Password</label>
            <div className="relative">
              <input
                type={showPass ? 'text' : 'password'}
                name="password"
                value={form.password}
                onChange={handleChange}
                placeholder="••••••••"
                className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm text-gray-700 outline-none focus:border-green-400 transition pr-12"
              />
              <button
                type="button"
                onClick={() => setShowPass(!showPass)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition"
              >
                {showPass ? <FaEyeSlash className="text-base" /> : <FaEye className="text-base" />}
              </button>
            </div>
          </div>

          {/* Forgot Password */}
          <div className="text-right">
            <a href="#" className="text-green-600 text-sm hover:underline">
              Forgot Password?
            </a>
          </div>

          {/* Submit */}
          <button
            onClick={handleSubmit}
            className="w-full bg-green-600 text-white py-3 rounded-xl font-semibold hover:bg-green-700 transition text-sm mt-2 flex items-center justify-center gap-2"
          >
            Login <FaRocket className="text-sm" />
          </button>

        </div>

        {/* Divider */}
        <div className="flex items-center gap-3 my-6">
          <div className="grow h-px bg-gray-200" />
          <span className="text-gray-400 text-xs">OR</span>
          <div className="grow h-px bg-gray-200" />
        </div>

        {/* Google Login */}
        <button className="w-full border border-gray-200 text-gray-600 py-3 rounded-xl text-sm font-medium hover:bg-gray-50 transition flex items-center justify-center gap-2">
          <FaGoogle className="text-lg text-red-500" /> Continue with Google
        </button>

        {/* Register Link */}
        <p className="text-center text-gray-400 text-sm mt-6">
          Don't have an account?{' '}
          <Link to="/register" className="text-green-600 font-semibold hover:underline">
            Register Now
          </Link>
        </p>

      </div>
    </div>
  )
}

export default Login