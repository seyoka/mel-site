"use client";

import dynamic from "next/dynamic";
import "leaflet/dist/leaflet.css";
import HeartMarker from "./HeartMarker";

type Heart = {
  id: number;
  coordinates: { lat: number; lng: number };
  image: string;
  description: string;
};

// Dynamically import Leaflet components
const DynamicMap = dynamic(() => import("react-leaflet").then((mod) => mod.MapContainer), { ssr: false });
const DynamicTileLayer = dynamic(() => import("react-leaflet").then((mod) => mod.TileLayer), { ssr: false });

type MapComponentProps = {
  hearts: Heart[];
  onHeartClick: (heart: Heart) => void;
};

export default function MapComponent({ hearts, onHeartClick }: MapComponentProps) {
  return (
    <DynamicMap
      center={[52.666259328697194, -8.630123]}
      zoom={13}
      className="h-full w-full rounded-lg"
    >
      <DynamicTileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution="&copy; OpenStreetMap contributors"
      />
      {hearts.map((heart) => (
        <HeartMarker key={heart.id} heart={heart} onClick={() => onHeartClick(heart)} />
      ))}
    </DynamicMap>
  );
}
