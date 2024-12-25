import { FaInstagram, FaLinkedin } from 'react-icons/fa'

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8 mt-16">
      <div className="container mx-auto text-center">
        <div className="flex justify-center mb-4">
          <a href="https://www.instagram.com/yourprofile" target="_blank" rel="noopener noreferrer" className="mx-4 text-2xl hover:text-pink-500">
            <FaInstagram />
          </a>
          <a href="https://www.linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" className="mx-4 text-2xl hover:text-pink-500">
            <FaLinkedin />
          </a>
        </div>
        <p className="text-sm">&copy; {new Date().getFullYear()}Challida. All Rights Reserved.</p>
      </div>
    </footer>
  )
}