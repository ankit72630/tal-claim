// src/components/GeoMap/GeoMap.jsx
import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import iconUrl from 'leaflet/dist/images/marker-icon.png';
import iconRetinaUrl from 'leaflet/dist/images/marker-icon-2x.png';
import shadowUrl from 'leaflet/dist/images/marker-shadow.png';

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl,
  iconUrl,
  shadowUrl,
});

export default function GeoMap({ points = [], height = 300 }) {
  // Fallback when no location data is provided
  if (!points || points.length === 0) {
    return (
      <div className="bg-white p-4 rounded shadow text-center text-gray-500">
        No location data to display
      </div>
    );
  }

  // Use the first point as the map center
  const center = [points[0].lat, points[0].lng];

  return (
    <MapContainer
      center={center}
      zoom={5}
      style={{ height: `${height}px`, width: '100%' }}
    >
      <TileLayer
        attribution="&copy; OpenStreetMap contributors"
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {points.map((p, i) => (
        <Marker key={i} position={[p.lat, p.lng]}>
          <Popup>{p.label}</Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}
