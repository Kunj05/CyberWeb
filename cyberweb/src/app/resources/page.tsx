import React from 'react';
import Image from 'next/image';
import { BookOpenText } from 'lucide-react';
import Link from 'next/link';

interface Resource {
  id: number;
  title: string;
  date: string;
  time: string;
  imageUrl: string;
  url: string,
  tags: string[];
   // Treat as a string type
}

const events: Resource[] = [
  {
    id: 1,
    title: "Introduction to Competitive Programming",
    date: "5 Sept 2024",
    time: "05:30 pm",
    imageUrl: "/Screenshot.png", // Path to the image in the public folder
    url: "https://example.com/intro-to-competitive-programming",
    tags: ["Programming", "Beginner"],
  },
  {
    id: 2,
    title: "ML League 2024 - Introduction to CNNs",
    date: "31 Aug 2024",
    time: "12:00 am",
    imageUrl: "/Screenshot.png", // Path to the image in the public folder
    url: "https://example.com/ml-league-2024",
    tags: ["Programming", "Beginner"],
  },
,
  {
    id: 3,
    title: "Introduction to Competitive Programming",
    date: "5 Sept 2024",
    time: "05:30 pm",
    imageUrl: "/Screenshot.png", // Use the same image URL
    url: "https://example.com/intro-to-competitive-programming",
    tags: ["Programming", "Beginner"],
  },
  {
    id: 4,
    title: "Introduction to Competitive Programming",
    date: "5 Sept 2024",
    time: "05:30 pm",
    imageUrl: "/Screenshot.png", // Use the same image URL
    url: "https://example.com/intro-to-competitive-programming",
    tags: ["Programming", "Beginner"],
  },
  {
    id: 5,
    title: "Introduction to Competitive Programming",
    date: "5 Sept 2024",
    time: "05:30 pm",
    imageUrl: "/Screenshot.png", // Use the same image URL
    url: "https://example.com/intro-to-competitive-programming",
    tags: ["Programming", "Beginner"],
  },
  {
    id: 6,
    title: "Introduction to Competitive Programming",
    date: "5 Sept 2024",
    time: "05:30 pm",
    imageUrl: "/Screenshot.png", // Use the same image URL
    url: "https://example.com/intro-to-competitive-programming",
    tags: ["Programming", "Beginner"],
  },
  {
    id: 7,
    title: "Introduction to Competitive Programming",
    date: "5 Sept 2024",
    time: "05:30 pm",
    imageUrl: "/Screenshot.png", // Use the same image URL
    url: "https://example.com/intro-to-competitive-programming",
    tags: ["Programming", "Beginner"],
  },
  {
    id: 8,
    title: "Introduction to Competitive Programming",
    date: "5 Sept 2024",
    time: "05:30 pm",
    imageUrl: "/Screenshot.png", // Use the same image URL
    url: "https://example.com/intro-to-competitive-programming",
    tags: ["Programming", "Beginner"],
  },
  {
    id: 9,
    title: "Introduction to Competitive Programming",
    date: "5 Sept 2024",
    time: "05:30 pm",
    imageUrl: "/Screenshot.png", // Use the same image URL
    url: "https://example.com/intro-to-competitive-programming",
    tags: ["Programming", "Beginner"],
  },
] as Resource[];

export default function EventGrid() {
  return (
    <div className="relative">
      <div className="relative z-10">
        <div className="container mx-auto px-4 py-10 bg-black">
          <h1 className="text-6xl font-bold mb-12 text-center text-white">Resources</h1>
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
              {events.map((event) => (
                <a
                  href={event.url}
                  key={event.id}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-800 rounded-lg shadow-md overflow-hidden h-[340px] transform transition-transform duration-300 ease-in-out hover:-translate-y-4 cursor-pointer"
                >
                  <Image
                    src={event.imageUrl}
                    alt={event.title}
                    width={400}
                    height={350}
                    className="w-full h-44 object-cover"
                  />
                  <div className="p-6">
                    <div className='flex gap-6 items-center'>
                      <BookOpenText className="w-10 h-10 text-white" />
                      <h2 className="text-xl font-semibold text-white">{event.title}</h2>
                    </div>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {event.tags.map((tag, index) => (
                        <span key={index} className="bg-blue-500 text-white text-xs font-semibold px-2.5 py-0.5 rounded-full">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="bg-gray-600 h-[1px] w-full" />
      </div>
    </div>
  );
}
