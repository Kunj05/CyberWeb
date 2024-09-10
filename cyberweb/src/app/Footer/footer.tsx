import Link from 'next/link'
import { FaLinkedin, FaTwitter, FaInstagram, FaGithub } from 'react-icons/fa'

export default function Footer() {
  return (
    <footer className="bg-custom-bg text-white py-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-sm font-semibold mb-4">CONTACT US</h2>
            <h3 className="text-4xl font-bold mb-4">
              ANSWERS TO <span className="text-blue-400">YOUR</span><br />
              QUESTIONS
            </h3>
            <p className="text-gray-400 mb-4">
            In our club, we fortify digital defenses together.
            Join us in building a safer online community, one secure connection at a time.
            </p>
          </div>
          <div>
            <form className="space-y-4 mr-2">
              <input
                type="text"
                placeholder="Name"
                className="w-full p-2 bg-gray-800 rounded"
              />
              <input
                type="email"
                placeholder="Email *"
                required
                className="w-full p-2 bg-gray-800 rounded"
              />
              <textarea
                placeholder="Message"
                rows={4}
                className="w-full p-2 bg-gray-800 rounded"
              ></textarea>
              <button
                type="submit"
                className="bg-white text-black px-6 py-2 rounded float-right "
              >
                SUBMIT
              </button>
            </form>
          </div>
        </div>
      </div>
      <div className="flex justify-center space-x-8">
        <Link href="#" className="text-[#1da1f2] hover:-translate-y-1 transition-transform duration-300">
          <FaLinkedin size={35} />
        </Link>
        <Link href="#" className="text-[#3b5998] hover:-translate-y-1 transition-transform duration-300">
          <FaGithub size={35} />
        </Link>
        <Link href="#" className="text-[#e4405f] hover:-translate-y-1 transition-transform duration-300">
          <FaInstagram size={35} />
        </Link>
        <Link href="#" className="text-[#1da1f2] hover:-translate-y-1 transition-transform duration-300">
          <FaTwitter size={35} />
        </Link>
      </div>
    </footer>
  )
}