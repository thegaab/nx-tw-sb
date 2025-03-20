// components/MapSection.js
"use client"; // Necessário porque Leaflet depende do ambiente do cliente

import { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import LocationDetailsPopup from '../ui/LocationDetailsPopup';

// Carrega os componentes do react-leaflet dinamicamente com SSR desativado
const MapContainer = dynamic(
  () => import('react-leaflet').then((mod) => mod.MapContainer),
  { ssr: false }
);
const TileLayer = dynamic(
  () => import('react-leaflet').then((mod) => mod.TileLayer),
  { ssr: false }
);
const Marker = dynamic(
  () => import('react-leaflet').then((mod) => mod.Marker),
  { ssr: false }
);
const Popup = dynamic(
  () => import('react-leaflet').then((mod) => mod.Popup),
  { ssr: false }
);

const MapSection = () => {
  // Coordenadas do buffet (substitua pelas coordenadas reais)
  const position: [number, number] = [-23.61684146469808, -46.158263361279275]; // [latitude, longitude] (exemplo: São Paulo, SP)

  // Estado para armazenar o ícone personalizado
  const [customIcon, setCustomIcon] = useState<L.Icon | null>(null);

  // Carrega o Leaflet e cria o ícone no lado do cliente
  useEffect(() => {
    // Importa o Leaflet dinamicamente
    import('leaflet').then((L) => {
      // Cria o ícone personalizado
      const icon = new L.Icon({
        iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
        iconSize: [25, 41],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
        shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
        shadowSize: [41, 41],
      });
      setCustomIcon(icon);
    });
  }, []); // Executa apenas uma vez, quando o componente é montado

  return (
    <section className="bg-black text-white py-16">
      <div className="container mx-auto px-4 text-center">
        {/* Título */}
        <h2 className="text-4xl md:text-5xl font-serif mb-12">Sobre a nossa localização</h2>

        {/* Mapa */}
        <div className="relative rounded-lg overflow-hidden w-full">
          <MapContainer
            center={position}
            zoom={15}
            style={{ height: '400px', width: '100%' }}
            className="z-0"
          >
            {/* Camada de tiles do OpenStreetMap */}
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            {/* Marcador na localização do buffet */}
            {customIcon && (
              <Marker position={position} icon={customIcon}>
                <Popup>Localização do Buffet Ricardo Tomioka</Popup>
              </Marker>
            )}
          </MapContainer>
        </div>

            
        {/* Botão "Mais detalhes" */}
        <div className="mt-8">
          <LocationDetailsPopup position={position} />
        </div>
      </div>
    </section>
  );
};

export default MapSection;