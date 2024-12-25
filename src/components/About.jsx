'use client'

import { motion } from 'framer-motion'
import { Figma, Framer, PenTool, Users, LayoutGrid, FileSearch } from 'lucide-react'

const SkillBar = ({ icon, skill, percentage }) => (
  <motion.div 
    className="flex items-center mb-4"
    initial={{ opacity: 0, x: -50 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.5 }}
  >
    <div className="w-8 h-8 mr-4 flex items-center justify-center bg-pink-100 rounded-full">
      {icon}
    </div>
    <div className="flex-grow">
      <div className="flex justify-between mb-1">
        <span className="text-sm font-medium text-gray-700">{skill}</span>
        <span className="text-sm font-medium text-gray-700">{percentage}%</span>
      </div>
      <div className="w-full bg-pink-100 rounded-full h-2.5">
        <motion.div 
          className="bg-pink-600 h-2.5 rounded-full" 
          initial={{ width: 0 }}
          animate={{ width: `${percentage}%` }}
          transition={{ duration: 1, delay: 0.5 }}
        />
      </div>
    </div>
  </motion.div>
)

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 to-purple-200 py-16 px-4 sm:px-6 lg:px-8">
      <motion.div
        className="max-w-4xl mx-auto bg-white rounded-2xl overflow-hidden mb-12"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="md:flex">
          <div className="md:flex-shrink-0">
            <img
              className="h-full w-full object-cover md:w-48"
              src="/image/About.jpg" // Ensure this path is correct and the image is present in your public folder
              alt="Profile"
            />
          </div>
          <div className="p-8">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">About Me</h2>
              <p className="mt-4 text-lg text-gray-600">
                I'm a passionate UI/UX designer with expertise in Figma and a keen eye for creating intuitive, visually appealing interfaces. With years of experience, I strive to make digital experiences both beautiful and functional, always putting the user at the center of my designs.
              </p>
            </motion.div>

            <motion.div
              className="mt-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-4">My Skills</h3>
              <SkillBar icon={<Figma className="text-pink-600" />} skill="Figma" percentage={95} />
              <SkillBar icon={<PenTool className="text-pink-600" />} skill="UI Design" percentage={90} />
              <SkillBar icon={<Users className="text-pink-600" />} skill="UX Design" percentage={85} />
              <SkillBar icon={<LayoutGrid className="text-pink-600" />} skill="Wireframing" percentage={88} />
              <SkillBar icon={<Framer className="text-pink-600" />} skill="Prototyping" percentage={92} />
              <SkillBar icon={<FileSearch className="text-pink-600" />} skill="User Research" percentage={80} />
            </motion.div>

            <motion.div
              className="mt-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.5 }}
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Why Figma?</h3>
              <p className="text-gray-600">
                Figma is my tool of choice for its collaborative features, powerful design capabilities, and seamless prototyping. It allows me to create, iterate, and share designs efficiently, ensuring the best possible outcomes for my clients. The real-time collaboration feature of Figma has revolutionized my workflow, making it easier to work with teams and clients across different time zones.
              </p>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Personal Introduction Section */}
      <div className="max-w-4xl mx-auto mt-16 px-4">
        <h2 className="text-3xl font-extrabold text-gray-900 mb-8 text-center">More About Me</h2>
        <div className="space-y-12">
          <motion.div 
            className="text-center flex flex-col md:flex-row items-center space-x-8"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="w-full md:w-1/3">
              <img
                className="object-cover w-full h-64 rounded-lg shadow-lg"
                src="/image/About2.jpg" // Ensure this path is correct and the image is present in your public folder
                alt="Experience"
              />
            </div>
            <div className="w-full md:w-2/3 text-left">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">My Journey in Design</h3>
              <p className="text-lg text-gray-600">
                My journey in design started with a passion for creativity and an interest in technology. Over the years, I’ve honed my skills in both UI and UX design, learning to balance aesthetics with functionality. Every project I work on is an opportunity to solve problems and make a lasting impact on the user experience. I’ve collaborated with various teams and clients, bringing their ideas to life while maintaining a focus on creating intuitive and engaging experiences.
              </p>
            </div>
          </motion.div>

          <motion.div 
            className="text-center flex flex-col md:flex-row items-center space-x-8"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="w-full md:w-1/3">
              <img
                className="object-cover w-full h-64 rounded-lg shadow-lg"
                src="/image/About3.jpg" // Ensure this path is correct and the image is present in your public folder
                alt="Achievements"
              />
            </div>
            <div className="w-full md:w-2/3 text-left">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Achievements & Impact</h3>
              <p className="text-lg text-gray-600">
                Over the years, I’ve had the privilege of contributing to a variety of successful projects that made a significant difference in how users interact with technology. From increasing user engagement to improving conversion rates, my designs have delivered measurable results. I take pride in designing solutions that are not only visually appealing but also highly functional, ensuring that users have the best possible experience.
              </p>
            </div>
          </motion.div>

          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Let's Collaborate</h3>
            <p className="text-lg text-gray-600">
              If you are looking for someone passionate about design and user experience, I would love to collaborate with you. Whether it's a new project, a redesign, or improving an existing user flow, I’m always open to creative challenges. Let’s work together to bring your vision to life!
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
