'use client'

import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

export default function Header() {
  return (
    (<header className="bg-pink-500 text-white p-4">
      <nav className="container mx-auto flex justify-between items-center">
        <motion.h1
          className="text-2xl font-normal"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}>
          Chalida's Portfolio
        </motion.h1>
        <ul className="flex space-x-4">
          {['Home', 'About', 'Portfolio', 'Contact'].map((item, index) => (
            <motion.li
              key={item}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}>
              <Link
                to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                className="hover:text-pink-200 transition-colors">
                {item}
              </Link>
            </motion.li>
          ))}
        </ul>
      </nav>
    </header>)
  );
}

