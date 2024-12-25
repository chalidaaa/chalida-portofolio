'use client'

import { motion } from 'framer-motion'

const projects = [
  { id: 1, title: 'Pondok Link', image: '/image/p1.jpg?height=200&width=300', description: 'Save time and find your ideal pondok pesantren with Pondok Link. This app offers a seamless application process, tailored recommendations based on your preferences, and the ability to connect with pondok pesantren directly.' },
  { id: 2, title: 'Redesign Shopee', image: '/image/syopi.png?height=200&width=300', description:'I love shopee, so i redesign and more especially Globalizing Shopee. A redesigned platform that offers a localized experience, supports Mastercard payments, and caters to a diverse international audience. GO GO SHOPEE GO!'},
  { id: 3, title: 'Bilik Foto FrontEnd', image: '/image/blikft.png?height=200&width=300',description:'In matkul RPL, I choose to built Bilik Foto booking system, made with Laravel, provides a seamless user experience. By using Laravels validation and form components, i ensured data integrity and a smooth booking process.' },
  { id: 4, title: 'Bilik Foto UI/UX', image: '/image/bilikfto.png?height=200&width=300', description: 'I played a dual role as frontend developer and UI/UX designer for the Bilik Foto project. My responsibilities included designing the UI, creating wireframes, prototypes, and implementing the design in code. My goal is to create a great user experience from the homepage to the booking process.' },
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
              <p className="text-gray-700">{project.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>)
  );
}

