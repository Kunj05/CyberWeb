"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

interface Event {
  image: string;
  title: string;
}

const events: Event[] = [
  {
    image: '/event_ctf/event_ctf8.jpeg', // Replace with your image paths
    title: 'Lakshya CTF',
  },
  {
    image: '/event_webclass/event_webclass2.jpeg',
    title: 'Basics of Web Vulnerabilities',
  },
  {
    image: '/event_dao/event_dao3.jpeg',
    title: 'Jobs In Cybersecurity by PuneDAO',
  }
];

const EventsCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % events.length);
    }, 4000); // Change image every 4 seconds

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, []);

  return (
    <div className="relative mx-auto w-full md:w-1/2 h-[300px] md:h-[500px] overflow-hidden rounded-lg">
      <Image
        src={events[currentIndex].image}
        alt={events[currentIndex].title}
        layout="fill"
        objectFit="cover"
        className="rounded-lg"
      />
      <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 p-2 text-white text-center">
        <h2 className="text-lg sm:text-xl font-semibold">{events[currentIndex].title}</h2>
      </div>
    </div>
  );
};

const Home: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center md:h-screen p-2">
      <h1 className="text-3xl sm:text-5xl font-bold text-center bg-clip-text bg-gradient-to-r from-blue-500 to-blue-300 text-transparent animate-fade-in mb-5">
        Our Past Events
      </h1>
      <EventsCarousel />
    </div>
  );
};

export default Home;
