  'use client'

  import { motion } from 'framer-motion'
  import { ArrowRight, Figma, Framer, PencilIcon as Sketch } from 'lucide-react'
  import { Button } from "@/components/ui/button"
  import { FallingStars } from '@/components/FallingStarts'
  import { SiFlutter } from 'react-icons/si'
  import { useNavigate } from 'react-router-dom' // Import useNavigate

export default function Home() {
  const navigate = useNavigate();  // Initialize the navigate function

  const navigateToPortfolio = () => {
    navigate('/portfolio'); // Use navigate to go to the Portfolio page
  }

  const navigateToContact = () => {
    navigate('/contact'); // Use navigate to go to the Contact page
  }
    
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
              Chalida UI/UX
              </h1>
              <p className="text-xl sm:text-2xl text-gray-700 mb-8 font-light max-w-3xl mx-auto">
              Turning ideas into engaging digital experiences with creative design and seamless user interactions. Let's build something that connects and excites!  
              </p>
              <motion.div
                className="flex justify-center space-x-4"
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <Button
            className="bg-pink-600 hover:bg-pink-700 text-white font-bold py-3 px-8 rounded-full text-lg transition duration-300 ease-in-out transform hover:scale-105 flex items-center space-x-2"
            onClick={navigateToPortfolio}
          >
            <span>View Projects</span>
            <ArrowRight className="w-5 h-5" />
          </Button>

          <Button
            variant="outline"
            className="border-pink-600 text-pink-600 hover:bg-pink-100 font-bold py-3 px-8 rounded-full text-lg transition duration-300 ease-in-out transform hover:scale-105"
            onClick={navigateToContact}
          >
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
                <div className="text-gray-800 font-semibold">Latest Project: Pondok Link</div>
                <div className="flex space-x-2">
                  <Figma className="text-blue-500" />
                  <Framer className="text-purple-500" />
                  <Sketch className="text-yellow-500" />
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Skills Section - Figma and Flutter */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-100 to-teal-200 relative z-10">
    <div className="max-w-6xl mx-auto">
      <motion.div
        className="text-center mb-12"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-4xl font-extrabold text-gray-800 mb-6">
          UI/UX & Design Expertise
        </h2>
        <p className="text-xl sm:text-2xl text-gray-700 mb-8 font-light max-w-3xl mx-auto">
          Apart from UI/UX design, I am also proficient in front-end development with Flutter for building beautiful mobile apps, as well as using Figma for creating intuitive design systems and prototypes.
        </p>
      </motion.div>

      <div className="flex justify-center space-x-8">
        {/* Figma Card w Background Image */}
        <motion.div
          className="flex flex-col items-center bg-cover bg-center text-white p-6 rounded-xl shadow-lg w-96 h-60 relative"
          style={{ backgroundImage: 'url(/image/figma.jpg)' }} // Background image for Figma card
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          {/* Black overlay w 50% opacity */}
          <div className="absolute inset-0 bg-black opacity-50 rounded-xl"></div>

          <div className="relative z-10">
            <h3 className="text-2xl font-semibold mb-4">Figma</h3>
            <p className="text-lg mb-4">
              Designing interactive prototypes and creating design systems using Figma, enabling efficient collaboration and design workflows.
            </p>
            <motion.div
              className="text-5xl hover:text-blue-600 transition-colors duration-300"
              initial={{ opacity: 0.6 }}
              whileHover={{ opacity: 1 }}
            >
              <Figma />
            </motion.div>
          </div>
        </motion.div>

        {/* Flutter Card with Background Image */}
        <motion.div
          className="flex flex-col items-center bg-cover bg-center text-white p-6 rounded-xl shadow-lg w-96 h-60 relative"
          style={{ backgroundImage: 'url(/image/fluter.jpg)' }} // Background image for Flutter card
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {/* Black overlay with 50% opacity */}
          <div className="absolute inset-0 bg-black opacity-50 rounded-xl"></div>

          <div className="relative z-10">
            <h3 className="text-2xl font-semibold mb-4">Flutter</h3>
            <p className="text-lg mb-4">
              Building beautiful, high-performance mobile apps for Android using Flutter, with seamless user experiences.
            </p>
            <motion.div
              className="text-5xl hover:text-blue-400 transition-colors duration-300"
              initial={{ opacity: 0.6 }}
              whileHover={{ opacity: 1 }}
            >
              <SiFlutter />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  </section>

  {/* Section Certificates */}
  <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white relative z-10">
  <div className="max-w-6xl mx-auto">
    <h2 className="text-4xl font-bold text-gray-800 mb-12 text-center">My Certificates</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      
      {[
        {
          id: 1,
          image: '/image/gdsc.png',
          title: 'GDSC Core Team - Creative Media',
          description: 'I was a Creative Media of Google Developer Student Club Udinus Core Team periode 2023/2024. And now i became a Public Relations of GDGoC periode 2024/2025.',
        },
        {
          id: 2,
          image: '/image/p2.jpg',
          title: 'Dicoding - Basic SQL',
          description: 'Certified in Basic SQL from Dicoding, gaining fundamental skills in database management and SQL queries. Ready to apply this knowledge in real-world projects!',
        },
        {
          id: 3,
          image: '/image/p3.jpg',
          title: 'Dicoding - Basic Data Science',
          description: 'Certified in Basic Data Science from Dicoding, gaining essential skills in data analysis, processing, and visualization. I was fomo at the moment, hehe :D',
        },
      ].map((project, index) => (
        <motion.div
          key={project.id}
          className="bg-gray-100 rounded-xl overflow-hidden shadow-lg"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: index * 0.2 }}
        >
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-48 object-cover"
          />
          <div className="p-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">{project.title}</h3>
            <p className="text-gray-600 mb-4">{project.description}</p>
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
