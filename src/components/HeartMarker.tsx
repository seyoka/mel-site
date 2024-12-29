"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import { Icon } from "leaflet"; // Import the Icon type
import Image from "next/image"; // Use Next.js's optimized Image component

type Heart = {
  id: number;
  coordinates: { lat: number; lng: number };
  image: string;
  description: string;
};

// Dynamically load Leaflet components
const DynamicMarker = dynamic(() => import("react-leaflet").then((mod) => mod.Marker), { ssr: false });
const DynamicPopup = dynamic(() => import("react-leaflet").then((mod) => mod.Popup), { ssr: false });

type HeartMarkerProps = {
  heart: Heart;
  onClick: () => void;
};

const HeartMarker: React.FC<HeartMarkerProps> = ({ heart, onClick }) => {
  const [heartIcon, setHeartIcon] = useState<Icon | null>(null);

  useEffect(() => {
    // Dynamically import Leaflet for client-side use
    import("leaflet").then((L) => {
      const icon = new L.Icon({
        iconUrl: "/heart-icon.png", // Path to heart icon in public folder
        iconSize: [30, 30],
        iconAnchor: [15, 30],
      });
      setHeartIcon(icon);
    });
  }, []);

  if (!heartIcon) return null; // Render nothing until the icon is loaded

  return (
    <DynamicMarker
      position={[heart.coordinates.lat, heart.coordinates.lng]}
      icon={heartIcon}
      eventHandlers={{
        click: onClick,
      }}
    >
      <DynamicPopup>
        <div>
          <Image
            src={heart.image}
            alt="Memory"
            width={300} // Specify width for Next.js Image component
            height={200} // Specify height for Next.js Image component
            style={{ borderRadius: "8px" }}
          />
          <p>{heart.description}</p>
        </div>
      </DynamicPopup>
    </DynamicMarker>
  );
};

export default HeartMarker;
