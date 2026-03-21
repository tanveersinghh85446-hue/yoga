import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

// Layout
import Navbar from './Components/layout/Navbar'
import Footer from './Components/layout/Footer'

// Pages
import Home from './Pages/Home'
import About from './Pages/About'
import Classes from './Pages/Classes'
import ClassDetail from './Pages/ClassDetail'
import Schedule from './Pages/Schedule'
import Instructors from './Pages/Instructors'
import Blog from './Pages/Blog'
import BlogPost from './Pages/BlogPost'
import Pricing from './Pages/Pricing'
import Contact from './Pages/Contact'
import Login from './Pages/Login'
import Register from './Pages/Register'
import Dashboard from './Pages/Dashboard'

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        
        {/* Navbar har page pe show hoga */}
        <Navbar />

        {/* Main Content */}
        <main className="grow">
          <Routes>
            <Route path="/"            element={<Home />} />
            <Route path="/about"       element={<About />} />
            <Route path="/classes"     element={<Classes />} />
            <Route path="/classes/:id" element={<ClassDetail />} />
            <Route path="/schedule"    element={<Schedule />} />
            <Route path="/instructors" element={<Instructors />} />
            <Route path="/blog"        element={<Blog />} />
            <Route path="/blog/:id"    element={<BlogPost />} />
            <Route path="/pricing"     element={<Pricing />} />
            <Route path="/contact"     element={<Contact />} />
            <Route path="/login"       element={<Login />} />
            <Route path="/register"    element={<Register />} />
            <Route path="/dashboard"   element={<Dashboard />} />

            {/* 404 Page */}
            <Route path="*" element={
              <div className="text-center py-32 text-2xl text-gray-500">
                404 - Page Not Found 😅
              </div>
            } />
          </Routes>
        </main>

        {/* Footer har page pe show hoga */}
        <Footer />

      </div>
    </Router>
  )
}

export default App