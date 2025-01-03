"use client";

// pages/index.tsx
import { useState } from 'react';



import MapComponent from "../components/MapComponent";

type Heart = {
  id: number;
  coordinates: { lat: number; lng: number };
  image: string;
  description: string;
};


const heartData: Heart[] = [
  {
    id: 1,
    coordinates: { lat: 52.666259328697194, lng: -8.5913801145919 },
    image: '/reboge_meadows.jpg',
    description: 'Meadows - Where we met, thats the snap i sent you after',
  },
  {
    id: 2,
    coordinates: { lat: 52.67052252971229, lng: -8.658144557672227 },
    image: '/funworld.jpg',
    description: 'Funworld - Where you destroy me at pool',
  },
  {
    id: 3,
    coordinates: { lat: 52.661984157721406, lng: -8.626637186508342 },
    image: '/wildberry.jpg',
    description: 'Wildberry',
  },
  {
    id: 4,
    coordinates: { lat: 52.6602992045651, lng: -8.63105 },
    image: '/julies.jpg',
    description: 'Julies - Where youre currently enslaved and where I used to see to you everyday',
  },
  {
    id: 5,
    coordinates: { lat: 52.68205773380979, lng: -8.614087257672224 },
    image: '/munchins.jpg',
    description: 'Munchins Gym - Where I watch my Lebron',
  },
  {
    id: 6,
    coordinates: { lat: 52.66381168334033, lng: -8.622807257672225 },
    image: '/angel_lane.jpg',
    description: 'Lane - Where we get wrecked tg',
  },

  {
    id: 8,
    coordinates: { lat: 52.673360521798095, lng: -8.573516459826301 },
    image: '/glucksman_library.jpg',
    description: 'UL library - You used to collect me every night at 12, image is you driving',
  },
  {
    id: 9,
    coordinates: { lat: 52.663096778819636, lng: -8.592662405223596 },
    image: '/spar.jpg',
    description: 'Spar - our little walks there',
  },

  {
    id: 10,
    coordinates: { lat: 52.669263164122974, lng: -8.62391214448208 },
    image: '/escape_room.jpg',
    description: 'Escape Limerick - Where we did not solve that shit',
  },

  {
    id: 11,
    coordinates: { lat: 52.667984269712534, lng: -8.57585202207085 },
    image: '/aces.jpg',
    description: 'Aces - Banging food.',
  },
  {
    id: 12,
    coordinates: { lat: 52.634599485015734, lng: -8.645890988664343 },
    image: '/garryowen.jpg',
    description: 'Garryowen - d bday spot',
  },
  {
    id: 13,
    coordinates: { lat: 52.66545805920469, lng: -8.626238430990611 },
    image: '/limerick_on_ice.jpg',
    description: 'Limerick on Ice - Where you glide.',
  },
  
  
  
];

export default function Home() {
  const [selectedHeart, setSelectedHeart] = useState<Heart | null>(null);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white px-4">
      <div className="text-center mb-8">
        <h1 className="text-3xl md:text-4xl font-bold">Places that mean the most to me ❤️</h1>
        <p className="text-lg md:text-xl mt-2">Click on each heart to see, I love you mel</p>
      </div>

      <div className="bg-gray-800 rounded-lg p-4 shadow-lg w-full max-w-[90%] md:max-w-[800px]">
        <div className="relative w-full h-[400px] sm:h-[500px]">
          <MapComponent hearts={heartData} onHeartClick={(heart) => setSelectedHeart(heart)} />
        </div>
      </div>

      {selectedHeart && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
          onClick={() => setSelectedHeart(null)}
        >
          <div
            className="bg-white p-4 shadow-lg rounded-lg text-black max-w-[90%] md:max-w-[400px] max-h-[80%] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedHeart.image}
              alt="Memory"
              className="max-w-full max-h-[300px] w-auto h-auto object-cover rounded-md mb-2"
            />
            <p className="text-center">{selectedHeart.description}</p>
            <button
              onClick={() => setSelectedHeart(null)}
              className="mt-4 px-4 py-2 bg-red-500 text-white rounded-lg w-full"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}