'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

const Star = ({ delay }) => {
  const [position, setPosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    setPosition({
      x: Math.random() * window.innerWidth,
      y: -20,
    })
  }, [])

  return (
    <motion.div
      className="absolute w-1 h-1 bg-white rounded-full"
      style={{ left: position.x, top: position.y }}
      animate={{
        y: window.innerHeight + 20,
        opacity: [1, 0.8, 0.6, 0.4, 0.2, 0],
      }}
      transition={{
        duration: Math.random() * 2 + 1,
        delay,
        repeat: Infinity,
        repeatDelay: Math.random() * 3 + 2,
      }}
    />
  )
}

export const FallingStars = () => {
  return (
    <div className="fixed inset-0 pointer-events-none">
      {[...Array(20)].map((_, i) => (
        <Star key={i} delay={Math.random() * 5} />
      ))}
    </div>
  )
}

