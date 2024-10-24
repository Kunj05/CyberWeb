import { FaSearch } from 'react-icons/fa';
import { useState } from 'react';
import Image from 'next/image';
import { motion } from "framer-motion";
import { useRouter } from 'next/navigation';

const events = [
  {
    id: 1,
    title: "Introduction to Competitive Programming",
    description: "Learn the basics of competitive programming and problem-solving techniques in this comprehensive workshop.",
    imageUrl: "/placeholder.svg?height=300&width=400",
    url: "https://example.com/intro-to-competitive-programming",
    tags: ["Programming", "Beginner"],
  },
  {
    id: 2,
    title: "Advanced Data Structures Workshop",
    description: "Dive deep into advanced data structures and their applications in solving complex algorithmic problems.",
    imageUrl: "/placeholder.svg?height=300&width=400",
    url: "https://example.com/advanced-data-structures",
    tags: ["Data Structures", "Advanced"],
  },
  {
    id: 3,
    title: "Introduction to Competitive Programming",
    description: "Learn the basics of competitive programming and problem-solving techniques in this comprehensive workshop.",
    imageUrl: "/placeholder.svg?height=300&width=400",
    url: "https://example.com/intro-to-competitive-programming",
    tags: ["Programming", "Beginner"],
  },
  {
    id: 4,
    title: "Advanced Data Structures Workshop",
    description: "Dive deep into advanced data structures and their applications in solving complex algorithmic problems.",
    imageUrl: "/placeholder.svg?height=300&width=400",
    url: "https://example.com/advanced-data-structures",
    tags: ["Data Structures", "Advanced"],
  },
  // Add more events as needed
];

export default function EventGrid() {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [selectedTags, setSelectedTags] = useState<string[]>([]); // Specify the type here
  const router = useRouter();

  // Filter events based on search term and selected tags
  const filteredEvents = events.filter(event => {
    const matchesSearchTerm = event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                              event.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const matchesTags = selectedTags.length === 0 || selectedTags.some(tag => event.tags.includes(tag));

    return matchesSearchTerm && matchesTags;
  });

  const handleTagClick = (tag: string) => {
    setSelectedTags(prev => {
      if (prev.includes(tag)) {
        return prev.filter(t => t !== tag); // Deselect tag
      } else {
        return [...prev, tag]; // Select tag
      }
    });
  };

  return (
    <div className="py-16 bg-black min-h-screen">
      {/* Resources Heading */}
      <h1 className="text-5xl font-bold text-center mb-8 text-white">Resources</h1>

      <div className="flex flex-col md:flex-row">
        {/* Left Side: Search Box and Tags */}
        <div className="w-full md:w-1/4 p-4 border border-gray-500 bg-gray-900 rounded-md mx-auto mb-4 md:mb-0 h-[260px] flex flex-col mt-3">
          <div className="relative mb-4 flex-grow">
            <input
              type="text"
              placeholder="Search resources..."
              className="w-full p-2 pl-10 pr-3 bg-gray-800 text-white rounded"
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <FaSearch className="absolute left-3 top-3 text-gray-400" />
          </div>

          {/* Tag Buttons */}
          <div className="flex flex-wrap gap-2 mb-2">
            {["All", "Programming", "Data Structures", "Machine Learning", "Web Development", "Cloud", "AI", "Beginner", "Advanced", "Workshop"].map(tag => (
              <button
                key={tag}
                className={`px-3 py-1 rounded-full text-sm ${selectedTags.includes(tag) ? 'bg-blue-600' : 'bg-gray-700'} text-white hover:bg-gray-600 transition duration-200`}
                onClick={() => tag === "All" ? setSelectedTags([]) : handleTagClick(tag)}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>

        {/* Right Side: Resource Cards */}
        <div className="w-full md:w-2/3 p-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredEvents.map(event => (
              <motion.div
                key={event.id}
                className="bg-transparent border border-gray-500 rounded-lg shadow-md overflow-hidden cursor-pointer"
                onClick={() => router.push(event.url)} // Navigate to the link on click
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <Image src={event.imageUrl} alt={event.title} width={400} height={300} className="w-full h-48 object-cover" />
                <div className="p-4">
                  <h2 className="text-xl font-semibold text-white">{event.title}</h2>
                  <p className="text-gray-400">{event.description}</p>
                  <div className="mt-4">
                    {event.tags.map(tag => (
                      <span key={tag} className="inline-block bg-gray-700 text-white text-sm font-medium mr-2 px-3 py-1 rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
