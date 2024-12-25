'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Figma, Framer, PencilIcon as Sketch } from 'lucide-react'
import Button from './components/ui/button'
import FallingStarts from './components/FallingStarts'


export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 to-purple-200 relative overflow-hidden">
      <FallingStars />
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-12"
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl sm:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-purple-600 mb-6">
              UI/UX Wizardry
            </h1>
            <p className="text-xl sm:text-2xl text-gray-700 mb-8 font-light max-w-3xl mx-auto">
              Transforming ideas into captivating digital experiences through innovative design and seamless user interactions
            </p>
            <motion.div
              className="flex justify-center space-x-4"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Button className="bg-pink-600 hover:bg-pink-700 text-white font-bold py-3 px-8 rounded-full text-lg transition duration-300 ease-in-out transform hover:scale-105 flex items-center space-x-2">
                <span>View Projects</span>
                <ArrowRight className="w-5 h-5" />
              </Button>
              <Button variant="outline" className="border-pink-600 text-pink-600 hover:bg-pink-100 font-bold py-3 px-8 rounded-full text-lg transition duration-300 ease-in-out transform hover:scale-105">
                Contact Me
              </Button>
            </motion.div>
          </motion.div>

          <motion.div
            className="relative"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-pink-400 to-purple-500 rounded-3xl transform rotate-3 scale-105 opacity-50"></div>
            <img
              src="/image/Hero.jpg"
              alt="UI/UX Design Showcase"
              className="relative rounded-2xl shadow-2xl w-full object-cover h-[400px]"
            />
            <div className="absolute bottom-4 left-4 right-4 bg-white bg-opacity-90 backdrop-blur-md rounded-xl p-4 flex justify-between items-center">
              <div className="text-gray-800 font-semibold">Latest Project: E-commerce Redesign</div>
              <div className="flex space-x-2">
                <Figma className="text-blue-500" />
                <Framer className="text-purple-500" />
                <Sketch className="text-yellow-500" />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white relative z-10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-800 mb-12 text-center">Featured Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((project) => (
              <motion.div
                key={project}
                className="bg-gray-100 rounded-xl overflow-hidden shadow-lg"
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.2 * project }}
              >
                <img
                  src={`/placeholder.svg?height=200&width=400&text=Project+${project}`}
                  alt={`Project ${project}`}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Project Title {project}</h3>
                  <p className="text-gray-600 mb-4">A brief description of the project and its key features.</p>
                  <Button variant="outline" className="text-pink-600 hover:bg-pink-100">
                    View Details
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

