import { motion } from 'framer-motion'
import { useState } from 'react'

export default function Contact() {
  const [formStatus, setFormStatus] = useState(null)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault()

    // Construct a message for WhatsApp
    const message = `Name: ${formData.name}%0AEmail: ${formData.email}%0AMessage: ${formData.message}`
    const phoneNumber = '+6285600547876' // Updated phone number
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${message}`

    // Redirect the user to WhatsApp with the pre-filled message
    window.location.href = whatsappURL

    // Optionally, show a form submission success message
    setFormStatus('Redirecting to WhatsApp...')
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value
    })
  }

  return (
    <motion.div
      className="container mx-auto mt-16 p-8 bg-white rounded-lg shadow-xl"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}>
      <h2 className="text-3xl font-bold text-pink-600 mb-8">Contact Me</h2>
      <form onSubmit={handleSubmit} className="max-w-lg mx-auto">
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700 font-bold mb-2">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            required
            className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none focus:border-pink-500" />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 font-bold mb-2">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
            className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none focus:border-pink-500" />
        </div>
        <div className="mb-4">
          <label htmlFor="message" className="block text-gray-700 font-bold mb-2">Message</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            required
            className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none focus:border-pink-500"
            rows={4}></textarea>
        </div>
        <motion.button
          type="submit"
          className="bg-pink-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-pink-600 transition-colors"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}>
          Send Message
        </motion.button>
      </form>
      {formStatus && (
        <motion.p
          className="mt-4 text-green-600 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}>
          {formStatus}
        </motion.p>
      )}
    </motion.div>
  )
}
