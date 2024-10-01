import Image from "next/image";
import { FaLinkedin, FaTwitter, FaInstagram, FaGithub } from 'react-icons/fa';

export default function CommunitySection() {
  const clubHead = {
    name: "Devendra Ingale",
    title: "Chairperson",
    image: "/Devendra.png",
    socials: {
      linkedin: "#",
      twitter: "#",
      instagram: "#"
    }
  };

  const coordinators = [
    {
      name: "Tanmay Shingavi",
      title: "Vice Chairperson",
      image: "/tanmay.png",
      socials: {
        linkedin: "#",
        twitter: "#",
        instagram: "#"
      }
    },
    {
      name: "Pranav Deshpande",
      title: "Secretory",
      image: "/pranav.png",
      socials: {
        linkedin: "#",
        twitter: "#",
        instagram: "#"
      }
    },
    {
      name: "Kunj Chandak",
      title: "Technical Head",
      image: "/kunj.png",
      socials: {
        linkedin: "#",
        twitter: "#",
        instagram: "#"
      }
    },
    {
      name: "Jagdish Bainade",
      title: "Web Security Head",
      image: "/Jagdish.png",
      socials: {
        linkedin: "#",
        twitter: "#",
        instagram: "#"
      }
    },
    {
      name: "Aditya Gaikwad",
      title: "Digital Forensic Head",
      image: "/aditya.png",
      socials: {
        linkedin: "#",
        twitter: "#",
        instagram: "#"
      }
    },
    {
      name: "Kedar Attarde",
      title: "Marketing Head",
      image: "/kedar.png",
      socials: {
        linkedin: "#",
        twitter: "#",
        instagram: "#"
      }
    },
    {
      name: "Ajinkya Kachare",
      title: "Admin Head",
      image: "/ajinkya.png",
      socials: {
        linkedin: "#",
        twitter: "#",
        instagram: "#"
      }
    },
    {
      name: "Sunny Bagul",
      title: "Design Head",
      image: "/sunny.png",
      socials: {
        linkedin: "#",
        twitter: "#",
        instagram: "#"
      }
    }
  ];

  return (
    <section className="py-16 ">
      <div className="container mx-auto px-1">
        <h2 className="text-5xl font-bold text-center mb-10 bg-clip-text bg-gradient-to-r from-blue-500 to-blue-300 text-transparent animate-fade-in">
          MEET OUR COUNCIL MEMBERS
        </h2>

        {/* Club Head */}
        <div className="flex justify-center">
          <div
            className="flex flex-col border border-transparent rounded-xl text-center bg-white shadow-lg transition-transform transform hover:-translate-y-2"
          >
            <div className="px-1 py-10">
              <Image
                src={clubHead.image}
                alt={clubHead.name}
                width={300}
                height={300}
                className="rounded-full mx-auto mb-4 border-4 border-[#1FA2FF]"
              />
              <h3 className="text-3xl font-semibold text-gray-800">{clubHead.name}</h3>
              <p className="bg-gradient-to-b from-[#1FA2FF] via-[#12D8FA] to-[#A6FFCB] text-transparent bg-clip-text font-bold mb-2 text-xl">{clubHead.title}</p>
              <div className="flex justify-center space-x-4 mt-auto">
                <a href={clubHead.socials.linkedin} className="text-[#36a9f1] hover:-translate-y-1 transition-transform duration-300">
                  <FaLinkedin size={29} />
                </a>
                <a href={clubHead.socials.twitter} className="text-[#080808] hover:-translate-y-1 transition-transform duration-300">
                  <FaGithub size={29} />
                </a>
                <a href={clubHead.socials.instagram} className="text-[#fa365a] hover:-translate-y-1 transition-transform duration-300">
                  <FaInstagram size={29} />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Coordinators */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mx-7 md:mx-20 mt-10">
          {coordinators.map((member) => (
            <div
              key={member.name}
              className="flex flex-col border border-transparent rounded-xl text-center bg-white shadow-lg transition-transform transform hover:-translate-y-2"
            >
              <div className="px-1 py-10">
                <Image
                  src={member.image}
                  alt={member.name}
                  width={300}
                  height={300}
                  className="rounded-full mx-auto mb-4 border-4 border-[#1FA2FF]"
                />
                <h3 className="text-3xl font-semibold text-gray-800">{member.name}</h3>
                <p className="bg-gradient-to-b from-[#1FA2FF] via-[#12D8FA] to-[#A6FFCB] text-transparent bg-clip-text font-bold mb-2 text-xl">{member.title}</p>
                <div className="flex justify-center space-x-4 mt-auto">
                  <a href={member.socials.linkedin} className="text-[#36a9f1] hover:-translate-y-1 transition-transform duration-300">
                    <FaLinkedin size={29} />
                  </a>
                  <a href={member.socials.twitter} className="text-[#080808] hover:-translate-y-1 transition-transform duration-300">
                    <FaGithub size={29} />
                  </a>
                  <a href={member.socials.instagram} className="text-[#fa365a] hover:-translate-y-1 transition-transform duration-300">
                    <FaInstagram size={29} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}