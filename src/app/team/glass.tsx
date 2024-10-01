import Image from "next/image";

const cardsData = [
  {
    name: "John Doe",
    position: "Software Engineer",
    description: "A passionate deproject manager ensuring timely delivery and effective communicationproject manager ensuring timely delivery and effective communicationveloper with expertise in web technologies.",
    image: "/sunny.png", // Replace with your image paths
  },
  {
    name: "Jane Smith",
    position: "UI/UX Designer",
    description: "An experienced designer focused on creating intuitive user inteproject manager ensuring timely delivery and effective communicationproject manager ensuring timely delivery and effective communicationrfaces.",
    image: "/sunny.png",
  },
  {
    name: "Michael Johnson",
    position: "Project Manager",
    description: "A project manager ensuring timely delivery and effective communication.project manager ensuring timely delivery and effective communicationproject manager ensuring timely delivery and effective communicationproject manager ensuring timely delivery and effective communication",
    image: "/sunny.png",
  },
];

export default function GlassmorphismCards() {
  return (
    <section className="py-16 bg-slate-900">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Club Founder</h2>
        
        {cardsData.map((card, index) => (
          <div
            key={index}
            className={`flex items-center bg-white bg-opacity-20 backdrop-blur-lg border border-gray-200 rounded-lg shadow-lg p-6 mb-8 transition-transform duration-300 w-[70%] mx-auto ${
              index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
            }`}
          >
            {/* Left Side: Image */}
            <div className="flex-1 p-2" style={{ flex: '0 0 35%' }}>
              <Image
                src={card.image}
                alt={card.name}
                width={270} // Adjust size as needed
                height={270} // Adjust size as needed
                className="rounded-full" // Make the image circular
              />
            </div>

            {/* Right Side: Text */}
            <div className="flex-1 p-4" style={{ flex: '0 0 60%' }}>
              <h3 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600 mb-1">{card.name}</h3>
              <p className="text-2lg font-medium text-white mb-2">{card.position}</p>
              <p className="text-white-600">{card.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
