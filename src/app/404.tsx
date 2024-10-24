// pages/404.tsx
import Head from 'next/head';
import React from 'react';
import Image from 'next/image';

const Custom404: React.FC = () => {
    return (
        <div className="min-h-screen bg-black text-green-200 relative overflow-hidden">
            <Head>
                <title>404 - Page Not Found</title>
            </Head>
            <div className="absolute inset-0 z-[-1] opacity-5">
                <Image 
                    src="https://media.giphy.com/media/oEI9uBYSzLpBK/giphy.gif" 
                    alt="Background Animation" 
                    layout="fill"
                    objectFit="cover"
                    className="object-cover"
                />
            </div>
            <div className="flex flex-col items-center justify-center h-full p-8">
                <h1 className="text-6xl font-mono">Error <span className="text-white">404</span></h1>
                <p className="mt-4 text-lg">The page you are looking for might have been removed, had its name changed or is temporarily unavailable.</p>
                <p className="mt-2">Please try to <a href="#1" className="text-white underline">go back</a> or <a href="#2" className="text-white underline">return to the homepage</a>.</p>
                <p className="mt-2">Good luck.</p>
            </div>
        </div>
    );
};

export default Custom404;
