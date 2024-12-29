// components/HeartMarker.tsx
"use client"

import { Marker, Popup } from 'react-leaflet';
import L from 'leaflet';


type Heart = {
    id: number;
    coordinates: { lat: number; lng: number };
    image: string;
    description: string;
  };

// Custom heart icon
const heartIcon = new L.Icon({
  iconUrl: '/heart-icon.png', // Updated to root-level public path
  iconSize: [30, 30],
  iconAnchor: [15, 30],
});

type HeartMarkerProps = {
  heart: Heart;
  onClick: () => void;
};

const HeartMarker: React.FC<HeartMarkerProps> = ({ heart, onClick }) => {
  return (
    <Marker
      position={[heart.coordinates.lat, heart.coordinates.lng]}
      icon={heartIcon}
      eventHandlers={{
        click: onClick,
      }}
    >
        <Popup>
        <div className="text-center">
            <p className="font-bold">{heart.description}</p>
            <img
            src={heart.image}
            alt="Memory preview"
            className="max-w-full max-h-[400px] w-auto h-auto object-cover rounded-md"
            />
        </div>
        </Popup>

    </Marker>
  );
};

export default HeartMarker;
