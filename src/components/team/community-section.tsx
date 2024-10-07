import Image from "next/image";
import { FaLinkedin, FaInstagram, FaGithub } from 'react-icons/fa';

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
      title: "Secretary",
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
      <div className="container mx-auto px-4">
        <h2 className="text-5xl font-bold text-center mb-10 bg-clip-text bg-gradient-to-r from-blue-500 to-blue-300 text-transparent animate-fade-in">
          MEET OUR COUNCIL MEMBERS
        </h2>

        {/* Club Head */}
        <div className="flex justify-center mb-12 p-3">
            <div
              key={clubHead.name}
              className="flex flex-col border border-transparent rounded-xl text-center bg-white shadow-lg w-full max-w-xs mx-2 mb-4"
            >
              <div className="p-3">
                <Image
                  src={clubHead.image}
                  alt={clubHead.name}
                  width={250}
                  height={250}
                  className="rounded-full mx-auto mb-4 border-4 border-[#1FA2FF]"
                />
                <h3 className="text-2xl font-semibold text-gray-800">{clubHead.name}</h3>
                <p className="bg-gradient-to-b from-[#1FA2FF] via-[#12D8FA] to-[#A6FFCB] text-transparent bg-clip-text font-bold mb-2 text-lg">{clubHead.title}</p>
                <div className="flex justify-center space-x-4 mt-3">
                  <a href={clubHead.socials.linkedin} className="text-[#36a9f1] ">
                    <FaLinkedin size={28} />
                  </a>
                  <a href={clubHead.socials.twitter} className="text-[#080808] ">
                    <FaGithub size={28} />
                  </a>
                  <a href={clubHead.socials.instagram} className="text-[#fa365a] ">
                    <FaInstagram size={28} />
                  </a>
                </div>
              </div>
            </div>
        </div>

        {/* Coordinators */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-6 gap-x-2 mx-auto px-2">
          {coordinators.map((member) => (
            <div
              key={member.name}
              className="flex flex-col border border-transparent rounded-xl text-center bg-white shadow-lg w-full max-w-xs mx-2 mb-4"
            >
              <div className="p-3">
                <Image
                  src={member.image}
                  alt={member.name}
                  width={250}
                  height={250}
                  className="rounded-full mx-auto mb-4 border-4 border-[#1FA2FF]"
                />
                <h3 className="text-2xl font-semibold text-gray-800">{member.name}</h3>
                <p className="bg-gradient-to-b from-[#1FA2FF] via-[#12D8FA] to-[#A6FFCB] text-transparent bg-clip-text font-bold mb-2 text-lg">{member.title}</p>
                <div className="flex justify-center space-x-4 mt-3">
                  <a href={member.socials.linkedin} className="text-[#36a9f1] ">
                    <FaLinkedin size={28} />
                  </a>
                  <a href={member.socials.twitter} className="text-[#080808] ">
                    <FaGithub size={28} />
                  </a>
                  <a href={member.socials.instagram} className="text-[#fa365a] ">
                    <FaInstagram size={28} />
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
