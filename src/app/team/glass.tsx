import Image from "next/image";
import { FaLinkedin, FaInstagram, FaGithub } from 'react-icons/fa';

const cardsData = [
  {
    name: "John Doe",
    position: "Software Engineer",
    description: "A passionate developer with expertiseexperienced designer focused on creating intuitive user experienced designer focused on creating intuitive user experienced designer focused on creating intuitive user in web technologies.",
    image: "/sunny.png", // Replace with your image paths
    socials: {
      linkedin: "https://linkedin.com/in/johndoe",
      instagram: "https://instagram.com/johndoe",
      github: "https://github.com/johndoe",
    },
  },
  {
    name: "Jane Smith",
    position: "UI/UX Designer",
    description: "An experienced designer focused on creating intuitive us experienced designer focused on creating intuitive user experienced designer focused on creating intuitive user er interfaces.",
    image: "/sunny.png",
    socials: {
      linkedin: "https://linkedin.com/in/janesmith",
      instagram: "https://instagram.com/janesmith",
      github: "https://github.com/janesmith",
    },
  },
  {
    name: "Michael Johnson",
    position: "Project Manager",
    description: "A project manager experienced designer focused on creating intuitive user experienced designer focused on creating intuitive user experienced designer focused on creating intuitive user  ensuring timely delivery and effective communication.",
    image: "/sunny.png",
    socials: {
      linkedin: "https://linkedin.com/in/michaeljohnson",
      instagram: "https://instagram.com/michaeljohnson",
      github: "https://github.com/michaeljohnson",
    },
  },
];

export default function GlassmorphismCards() {
  return (
    <section className="py-16  bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]">
      
      <div className="container mx-auto px-4">
        <h2 className="text-5xl font-bold text-center mb-10 bg-clip-text bg-gradient-to-r from-blue-500 to-blue-300 text-transparent animate-fade-in">
          Club Founder
        </h2>        
        {cardsData.map((card, index) => (
          <div
            key={index}
            className={`flex flex-col md:flex-row items-cente bg-opacity-20 backdrop-blur-[7px] border border-black rounded-[25px] shadow-lg p-6 mb-8 transition-transform duration-300 w-full md:w-[65%] mx-auto ${
              index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
            }`}
          >
            {/* Left Side: Image */}
            <div className="flex-1 p-2" style={{ flex: '0 0 35%' }}>
              <Image
                src={card.image}
                alt={card.name}
                width={250} // Adjust size as needed
                height={250} // Adjust size as needed
                className="rounded-full w-full h-auto" // Make the image circular and responsive
              />
            </div>

            {/* Right Side: Text */}
            <div className="flex-1 p-4" style={{ flex: '0 0 60%' }}>
              <h3 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600 mb-1">
                {card.name}
              </h3>
              <p className="text-lg font-medium text-black mb-2 italic">{card.position}</p>
              <p className="text-black">{card.description}</p>

              {/* Social Icons */}
              <div className="flex space-x-4 mt-4">
                <a href={card.socials.linkedin} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">
                  <FaLinkedin size={28} />
                </a>
                <a href={card.socials.instagram} target="_blank" rel="noopener noreferrer" className="text-pink-500 hover:text-pink-700">
                  <FaInstagram size={28} />
                </a>
                <a href={card.socials.github} target="_blank" rel="noopener noreferrer" className="text-black hover:text-gray-900">
                  <FaGithub size={28} />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
