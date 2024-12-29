"use client";

import dynamic from "next/dynamic";
import HeartMarker from "./HeartMarker";
import "leaflet/dist/leaflet.css";

const DynamicMap = dynamic(() => import("react-leaflet").then((mod) => mod.MapContainer), { ssr: false });
const DynamicTileLayer = dynamic(() => import("react-leaflet").then((mod) => mod.TileLayer), { ssr: false });


type Heart = {
    id: number;
    coordinates: { lat: number; lng: number };
    image: string;
    description: string;
  };

type MapComponentProps = {
  hearts: Heart[];
  onHeartClick: (heart: Heart) => void;
};

export default function MapComponent({ hearts, onHeartClick }: MapComponentProps) {
  return (
    <DynamicMap
      center={[52.666259328697194, -8.630123]} // Centered on Limerick
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
