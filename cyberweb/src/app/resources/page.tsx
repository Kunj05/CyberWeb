"use client";
import React from "react";
import Image from "next/image";
import { PinContainer } from "../../components/ui/3d-pin"; // Adjust the import path as needed

interface Resource {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  url: string;
  tags: string[];
}

const projects: Resource[] = [
  {
    id: 1,
    title: "Introduction to Competitive Programming",
    description: "A brief description of the project.",
    imageUrl: "/Screenshot.png",
    url: "https://example.com/intro-to-competitive-programming",
    tags: ["Programming", "Beginner"],
  },
  {
    id: 1,
    title: "Introduction to Competitive Programming",
    description: "A brief description of the project.",
    imageUrl: "/Screenshot.png",
    url: "https://example.com/intro-to-competitive-programming",
    tags: ["Programming", "Beginner"],
  },
  {
    id: 1,
    title: "Introduction to Competitive Programming",
    description: "A brief description of the project.",
    imageUrl: "/Screenshot.png",
    url: "https://example.com/intro-to-competitive-programming",
    tags: ["Programming", "Beginner"],
  },
  {
    id: 1,
    title: "Introduction to Competitive Programming",
    description: "A brief description of the project.",
    imageUrl: "/Screenshot.png",
    url: "https://example.com/intro-to-competitive-programming",
    tags: ["Programming", "Beginner"],
  },
];

export default function EventGrid() {
  return (
    <div className="py-10 bg-black text-white">
      <h1 className="text-6xl font-bold mb-1 text-center text-white">
        Resources
      </h1>
      <div className="flex flex-wrap items-center justify-center p-4 gap-x-24 ">
        {projects.map(({ id, title, description, imageUrl, url, tags }) => (
          <div
            className="sm:h-[55rem] h-[46rem] lg:min-h-[50rem] flex items-center justify-center sm:w-[570px] w-[80vw] " // Added margin-bottom
            key={id}
          >
            <PinContainer title={url} href={url}>
              <div className="relative flex items-center justify-center sm:w-[570px] w-[80vw] overflow-hidden sm:h-[40vh] h-[35vh]">
                <div
                  className="relative w-full h-full overflow-hidden lg:rounded-3xl"
                  style={{ backgroundColor: '#13162D' }}
                >
                  <Image 
                    src={imageUrl} 
                    alt={title}  
                    layout="fill" 
                    objectFit="cover" 
                    className="absolute z-10"
                  />
                </div>
              </div>
              <h1 className="font-bold lg:text-4xl md:text-4xl text-3xl mt-5">
                {title}
              </h1>

              <p
                className="lg:text-xl lg:font-normal font-light text-xs"
                style={{
                  color: '#BEC1DD',
                  margin: '1vh 0',
                }}
              >
                {description}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {tags.map((tag, index) => (
                  <span key={index} className="bg-blue-500 text-white text-xs font-semibold px-2.5 py-0.5 rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
            </PinContainer>
          </div>
        ))}
      </div>
    </div>
  );
}
