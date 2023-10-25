import React from 'react';
import { MapContainer, TileLayer, Marker } from 'react-leaflet';

const Map = () => {
  return (
    
    <MapContainer center={[51.505, -0.09]} zoom={13} style={{ width: '100%', height: '500px' }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={[51.505, -0.09]}>
      </Marker>
    </MapContainer>
  );
};

export default Map;
