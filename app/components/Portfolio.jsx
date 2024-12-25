'use client'

import { motion } from 'framer-motion'

const projects = [
  { id: 1, title: 'Pondok Link', image: '/image/p1.jpg?height=200&width=300' },
  { id: 2, title: 'S-Dicoding', image: '/image/p2.jpg?height=200&width=300' },
  { id: 3, title: 'S-Dicoding', image: '/image/p3.jpg?height=200&width=300' },
  { id: 4, title: 'S-Dicoding', image: '/image/p4.jpg?height=200&width=300' },
]
export default function Portfolio() {
  return (
    (<div className="container mx-auto mt-16 p-8">
      <h2 className="text-3xl font-bold text-pink-600 mb-8">My Portfolio</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            className="bg-white rounded-lg shadow-lg overflow-hidden"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}>
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="text-xl font-bold text-pink-500 mb-2">{project.title}</h3>
              <p className="text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>)
  );
}

