"use client";

// import ThreeGlobe from "three-globe";
import React from "react";
import { Canvas, extend } from "@react-three/fiber";
import { PerspectiveCamera, Vector3, Scene } from "three";
import { OrbitControls } from "@react-three/drei";
import { Globe, GlobeConfig } from "@/components/ui/globe";
import { SparklesCore } from "@/components/ui/sparkles";
import { TypewriterEffect } from "@/components/ui/typewriter-effect";
import dynamic from "next/dynamic";

// declare module "@react-three/fiber" {
//   interface ThreeElements {
//     threeGlobe: Object3DNode<ThreeGlobe, typeof ThreeGlobe>;
//   }
// }

// Helper function to generate a gradient color between two colors
// function getGradientColor(color1: string, color2: string, percentage: number): string {
//   const r1 = parseInt(color1.slice(1, 3), 16);
//   const g1 = parseInt(color1.slice(3, 5), 16);
//   const b1 = parseInt(color1.slice(5, 7), 16);
//   const r2 = parseInt(color2.slice(1, 3), 16);
//   const g2 = parseInt(color2.slice(3, 5), 16);
//   const b2 = parseInt(color2.slice(5, 7), 16);
  
//   const r = Math.round(r1 + (r2 - r1) * percentage).toString(16).padStart(2, '0');
//   const g = Math.round(g1 + (g2 - g1) * percentage).toString(16).padStart(2, '0');
//   const b = Math.round(b1 + (b2 - b1) * percentage).toString(16).padStart(2, '0');
  
//   return `#${r}${g}${b}`;
// }

// Predefined list of cities with coordinates
// interface City {
//   name: string;
//   lat: number;
//   lng: number;
// }

// const cities: City[] = [
//   { name: 'San Francisco', lat: 37.7749, lng: -122.4194 },
//   { name: 'Los Angeles', lat: 34.0522, lng: -118.2437 },
//   { name: 'New York', lat: 40.7128, lng: -74.0060 },
//   { name: 'London', lat: 51.5074, lng: -0.1278 },
//   { name: 'Paris', lat: 48.8566, lng: 2.3522 },
//   { name: 'Mumbai', lat: 19.0760, lng: 72.8777 },
//   { name: 'Dubai', lat: 25.276987, lng: 55.296249 },
//   { name: 'Beijing', lat: 39.9042, lng: 116.4074 },
//   { name: 'Tokyo', lat: 35.6895, lng: 139.6917 },
//   { name: 'Sydney', lat: -33.8688, lng: 151.2093 },
//   { name: 'Hong Kong', lat: 22.3193, lng: 114.1694 },
//   { name: 'Berlin', lat: 52.5200, lng: 13.4050 },
//   { name: 'Toronto', lat: 43.65107, lng: -79.347015 },
//   { name: 'Rio de Janeiro', lat: -22.9068, lng: -43.1729 },
//   { name: 'Istanbul', lat: 41.0082, lng: 28.9784 },
//   { name: 'Rome', lat: 41.9028, lng: 12.4964 },
//   { name: 'Buenos Aires', lat: -34.6037, lng: -58.3816 },
//   { name: 'Singapore', lat: 1.3521, lng: 103.8198 },
//   { name: 'Seoul', lat: 37.5665, lng: 126.978 },
//   { name: 'Amsterdam', lat: 52.3676, lng: 4.9041 },
// ];

// // Generate random globe data
// interface GlobeData {
//   order: number;
//   startLat: number;
//   startLng: number;
//   endLat: number;
//   endLng: number;
//   arcAlt: number;
//   color: string;
// }

// const globeData: GlobeData[] = [];
// const numberOfConnections = 20;

// for (let i = 0; i < numberOfConnections; i++) {
//   const startCity = cities[Math.floor(Math.random() * cities.length)];
//   let endCity: City;
//   do {
//     endCity = cities[Math.floor(Math.random() * cities.length)];
//   } while (startCity === endCity);

//   const color1 = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
//   const color2 = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
//   const color = getGradientColor(color1, color2, Math.random());

//   globeData.push({
//     order: i + 1,
//     startLat: startCity.lat,
//     startLng: startCity.lng,
//     endLat: endCity.lat,
//     endLng: endCity.lng,
//     arcAlt: Math.random() * 0.4 + 0.1, 
//     color: color,
//   });
// }

// const globeConfig: GlobeConfig = {
//   pointSize: 2,
//   atmosphereColor: "#ffffff",
//   showAtmosphere: true,
//   atmosphereAltitude: 0.1,
//   polygonColor: "rgba(255, 255, 255, 0.6)",
//   globeColor: "#1d072e",
//   emissive: "#004080",
//   emissiveIntensity: 0.2,
//   shininess: 0.9,
//   arcTime: 2500,
//   arcLength: 0.7,
//   rings: 2,
//   maxRings: 5,
// };

const World = dynamic(() => import("../../components/ui/globe").then((m) => m.World), {
  ssr: false,
});


const Earth: React.FC = () => {
  const words = [
    { text: "Welcome" },
    { text: "to" },
    { text: "PICT", className: "text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-blue-300 shadow-lg" },
    { text: "Cyber", className: "text-blue-500 dark:text-blue-500" },
    { text: "Cell", className: "text-blue-500 dark:text-blue-500" },
  ];

  const globeConfig = {
    pointSize: 4,
    globeColor: "#062056",
    showAtmosphere: true,
    atmosphereColor: "#FFFFFF",
    atmosphereAltitude: 0.1,
    emissive: "#062056",
    emissiveIntensity: 0.1,
    shininess: 0.9,
    polygonColor: "rgba(255,255,255,0.7)",
    ambientLight: "#38bdf8",
    directionalLeftLight: "#ffffff",
    directionalTopLight: "#ffffff",
    pointLight: "#ffffff",
    arcTime: 1000,
    arcLength: 0.9,
    rings: 1,
    maxRings: 3,
    initialPosition: { lat: 22.3193, lng: 114.1694 },
    autoRotate: true,
    autoRotateSpeed: 0.5,
  };
  const colors = ["#06b6d4", "#3b82f6", "#6366f1"];
  const sampleArcs = [
    {
      order: 1,
      startLat: -19.885592,
      startLng: -43.951191,
      endLat: -22.9068,
      endLng: -43.1729,
      arcAlt: 0.1,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 1,
      startLat: 28.6139,
      startLng: 77.209,
      endLat: 3.139,
      endLng: 101.6869,
      arcAlt: 0.2,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 1,
      startLat: -19.885592,
      startLng: -43.951191,
      endLat: -1.303396,
      endLng: 36.852443,
      arcAlt: 0.5,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 2,
      startLat: 1.3521,
      startLng: 103.8198,
      endLat: 35.6762,
      endLng: 139.6503,
      arcAlt: 0.2,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 2,
      startLat: 51.5072,
      startLng: -0.1276,
      endLat: 3.139,
      endLng: 101.6869,
      arcAlt: 0.3,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 2,
      startLat: -15.785493,
      startLng: -47.909029,
      endLat: 36.162809,
      endLng: -115.119411,
      arcAlt: 0.3,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 3,
      startLat: -33.8688,
      startLng: 151.2093,
      endLat: 22.3193,
      endLng: 114.1694,
      arcAlt: 0.3,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 3,
      startLat: 21.3099,
      startLng: -157.8581,
      endLat: 40.7128,
      endLng: -74.006,
      arcAlt: 0.3,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 3,
      startLat: -6.2088,
      startLng: 106.8456,
      endLat: 51.5072,
      endLng: -0.1276,
      arcAlt: 0.3,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 4,
      startLat: 11.986597,
      startLng: 8.571831,
      endLat: -15.595412,
      endLng: -56.05918,
      arcAlt: 0.5,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 4,
      startLat: -34.6037,
      startLng: -58.3816,
      endLat: 22.3193,
      endLng: 114.1694,
      arcAlt: 0.7,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 4,
      startLat: 51.5072,
      startLng: -0.1276,
      endLat: 48.8566,
      endLng: -2.3522,
      arcAlt: 0.1,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 5,
      startLat: 14.5995,
      startLng: 120.9842,
      endLat: 51.5072,
      endLng: -0.1276,
      arcAlt: 0.3,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 5,
      startLat: 1.3521,
      startLng: 103.8198,
      endLat: -33.8688,
      endLng: 151.2093,
      arcAlt: 0.2,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 5,
      startLat: 34.0522,
      startLng: -118.2437,
      endLat: 48.8566,
      endLng: -2.3522,
      arcAlt: 0.2,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 6,
      startLat: -15.432563,
      startLng: 28.315853,
      endLat: 1.094136,
      endLng: -63.34546,
      arcAlt: 0.7,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 6,
      startLat: 37.5665,
      startLng: 126.978,
      endLat: 35.6762,
      endLng: 139.6503,
      arcAlt: 0.1,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 6,
      startLat: 22.3193,
      startLng: 114.1694,
      endLat: 51.5072,
      endLng: -0.1276,
      arcAlt: 0.3,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 7,
      startLat: -19.885592,
      startLng: -43.951191,
      endLat: -15.595412,
      endLng: -56.05918,
      arcAlt: 0.1,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 7,
      startLat: 48.8566,
      startLng: -2.3522,
      endLat: 52.52,
      endLng: 13.405,
      arcAlt: 0.1,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 7,
      startLat: 52.52,
      startLng: 13.405,
      endLat: 34.0522,
      endLng: -118.2437,
      arcAlt: 0.2,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 8,
      startLat: -8.833221,
      startLng: 13.264837,
      endLat: -33.936138,
      endLng: 18.436529,
      arcAlt: 0.2,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 8,
      startLat: 49.2827,
      startLng: -123.1207,
      endLat: 52.3676,
      endLng: 4.9041,
      arcAlt: 0.2,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 8,
      startLat: 1.3521,
      startLng: 103.8198,
      endLat: 40.7128,
      endLng: -74.006,
      arcAlt: 0.5,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 9,
      startLat: 51.5072,
      startLng: -0.1276,
      endLat: 34.0522,
      endLng: -118.2437,
      arcAlt: 0.2,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 9,
      startLat: 22.3193,
      startLng: 114.1694,
      endLat: -22.9068,
      endLng: -43.1729,
      arcAlt: 0.7,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 9,
      startLat: 1.3521,
      startLng: 103.8198,
      endLat: -34.6037,
      endLng: -58.3816,
      arcAlt: 0.5,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 10,
      startLat: -22.9068,
      startLng: -43.1729,
      endLat: 28.6139,
      endLng: 77.209,
      arcAlt: 0.7,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 10,
      startLat: 34.0522,
      startLng: -118.2437,
      endLat: 31.2304,
      endLng: 121.4737,
      arcAlt: 0.3,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 10,
      startLat: -6.2088,
      startLng: 106.8456,
      endLat: 52.3676,
      endLng: 4.9041,
      arcAlt: 0.3,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 11,
      startLat: 41.9028,
      startLng: 12.4964,
      endLat: 34.0522,
      endLng: -118.2437,
      arcAlt: 0.2,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 11,
      startLat: -6.2088,
      startLng: 106.8456,
      endLat: 31.2304,
      endLng: 121.4737,
      arcAlt: 0.2,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 11,
      startLat: 22.3193,
      startLng: 114.1694,
      endLat: 1.3521,
      endLng: 103.8198,
      arcAlt: 0.2,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 12,
      startLat: 34.0522,
      startLng: -118.2437,
      endLat: 37.7749,
      endLng: -122.4194,
      arcAlt: 0.1,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 12,
      startLat: 35.6762,
      startLng: 139.6503,
      endLat: 22.3193,
      endLng: 114.1694,
      arcAlt: 0.2,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 12,
      startLat: 22.3193,
      startLng: 114.1694,
      endLat: 34.0522,
      endLng: -118.2437,
      arcAlt: 0.3,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 13,
      startLat: 52.52,
      startLng: 13.405,
      endLat: 22.3193,
      endLng: 114.1694,
      arcAlt: 0.3,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 13,
      startLat: 11.986597,
      startLng: 8.571831,
      endLat: 35.6762,
      endLng: 139.6503,
      arcAlt: 0.3,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 13,
      startLat: -22.9068,
      startLng: -43.1729,
      endLat: -34.6037,
      endLng: -58.3816,
      arcAlt: 0.1,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 14,
      startLat: -33.936138,
      startLng: 18.436529,
      endLat: 21.395643,
      endLng: 39.883798,
      arcAlt: 0.3,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
  ];

  return (
    <div className  ="relative flex flex-col items-center justify-center h-[40rem] bg-black overflow-hidden pb-20">
      {/* <Canvas
        className="absolute inset-0"
        scene={new Scene()}
        camera={new PerspectiveCamera(50, 1.2, 180, 1800)}
      >
        <ambientLight color="#ffffff" intensity={0.6} />
        <directionalLight color="#ffffff" position={new Vector3(-400, 100, 400)} />
        <directionalLight color="#ffffff" position={new Vector3(-200, 500, 200)} />
        <pointLight color="#ffffff" position={new Vector3(-200, 500, 200)} intensity={0.8} />
        <Globe globeConfig={globeConfig} data={globeData} />
        <div> hello lets see</div>
        
        <OrbitControls
          enablePan={false}
          enableZoom={false}
          minDistance={300}
          maxDistance={300}
          autoRotateSpeed={1}
          autoRotate={true}
          minPolarAngle={Math.PI / 3.5}
          maxPolarAngle={Math.PI - Math.PI / 3}
        />
      </Canvas> */}
      <World data={sampleArcs} globeConfig={globeConfig} />;
      <SparklesCore
        id="tsparticlesfullpage"
        background="transparent"
        minSize={0.6}
        maxSize={1.4}
        particleDensity={100}
        className="absolute inset-0"
        particleColor="#FFFFFF"
      />
      <div className="relative z-10 flex flex-col items-center">
        <h1 className="md:text-7xl text-3xl lg:text-6xl font-bold text-center text-white mb-10">
          <TypewriterEffect words={words} />
        </h1>
        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4">
        <a
          href="https://wa.me/1234567890" // Replace with actual WhatsApp number
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="w-40 h-10 rounded-xl bg-black border border-white dark:border-gray-400 text-white text-sm">
            Join now
          </button>
        </a>

          <button className="w-40 h-10 rounded-xl bg-white text-black border border-black text-sm">
            Signup
          </button>
        </div>
      </div>
    </div>
  );
};

export default Earth;
