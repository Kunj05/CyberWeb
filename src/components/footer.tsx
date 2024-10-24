import Link from 'next/link';
import Image from 'next/image';
import { FaLinkedin, FaInstagram, FaGithub } from 'react-icons/fa';
import { FaXTwitter } from "react-icons/fa6";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";

export default function Footer() {
  return (
    <footer>
      <BackgroundBeamsWithCollision className="min-h-52 h-auto md:h-auto bg-gradient-to-b from-neutral-800 to-black text-white py-10">
        <div className="container mx-auto px-4 w-3/4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center justify-items-center">
            {/* Contact Us Section */}
            <div className="flex flex-col items-center justify-items-center">
              <div className="flex flex-row mb-4 items-center">
                <Image
                  src="/logo.png"
                  alt="Website Logo"
                  width={70}
                  height={70}
                  className="rounded-full md:h-5rem md:w-5rem" // Making the logo circular
                />
                <div className="text-center md:text-left m-4">
                  A group of passionate PICT students are helping the community of PICT.
                </div>
              </div>
              <hr className='w-10/12 2xl:w-full border-gray-400' />
              <div className="flex space-x-4 mt-4">
                <Link
                  href="https://www.linkedin.com/in/pictcybercell/"
                  aria-label="LinkedIn"
                  className="text-[#1da1f2] hover:-translate-y-1 transition-transform duration-300"
                >
                  <FaLinkedin size={28} />
                </Link>
                <Link
                  href="https://github.com/PICT-Cyber-Cell"
                  aria-label="GitHub"
                  className="text-[#3b5998] hover:-translate-y-1 transition-transform duration-300"
                >
                  <FaGithub size={28} />
                </Link>
                <Link
                  href="https://www.instagram.com/pict_cybercell"
                  aria-label="Instagram"
                  className="text-[#e4405f] hover:-translate-y-1 transition-transform duration-300"
                >
                  <FaInstagram size={28} />
                </Link>
                <Link
                  href="#"
                  aria-label="Twitter"
                  className="text-[#000000] hover:-translate-y-1 transition-transform duration-300"
                >
                  <FaXTwitter size={28} />
                </Link>
              </div>
            </div>

            {/* Quick Links Section */}
            <div className="flex flex-col items-center md:items-start">
              <h2 className="text-2xl font-semibold mb-4">QUICK LINKS</h2>
              <ul className="space-y-2 text-center md:text-left">
                <li>
                  <Link
                    href="/"
                    className="text-gray-400 hover:text-blue-400 transition duration-300"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href="/team"
                    className="text-gray-400 hover:text-blue-400 transition duration-300"
                  >
                    Team
                  </Link>
                </li>
                <li>
                  <Link
                    href="/resources"
                    className="text-gray-400 hover:text-blue-400 transition duration-300"
                  >
                    Resources
                  </Link>
                </li>
                <li>
                  <Link
                    href="/events"
                    className="text-gray-400 hover:text-blue-400 transition duration-300"
                  >
                    Events
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className=" mt-2 text-gray-400">
            <p className="text-sm">
              © 2024 PICT CyberCell. Made with ❤️ by <Link href="/developers" className="text-blue-400 hover:underline">PICT CyberCell Web Developers</Link>.
            </p>
          </div>
        </div>
      </BackgroundBeamsWithCollision>
    </footer>
  );
}
