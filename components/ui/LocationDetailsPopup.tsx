/* eslint-disable react/no-unescaped-entities */
"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';
import ricardoImage from '@/public/assets/ricardo-tomioka.png';
import waze from '@/public/assets/waze.png';
import googleMaps from '@/public/assets/googleMaps.png';
import openStreetMap from '@/public/assets/appleMap.png';

interface LocationDetailsPopupProps {
  position: [number, number];
}

const LocationDetailsPopup = ({ position }: LocationDetailsPopupProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  // Adiciona um ouvinte de eventos para a tecla Esc
  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && isOpen) {
        togglePopup();
      }
    };

    // Adiciona o ouvinte de eventos ao documento
    document.addEventListener('keydown', handleEsc);

    // Remove o ouvinte de eventos quando o componente é desmontado
    return () => {
      document.removeEventListener('keydown', handleEsc);
    };
  }, [isOpen]); // Dependência: isOpen (para reagir a mudanças no estado do pop-up)

  const googleMapsLink = `https://www.google.com/maps?q=${position[0]},${position[1]}`;
  const wazeLink = `https://waze.com/ul?ll=${position[0]},${position[1]}&navigate=yes`;
  const openStreetMapLink = `https://www.openstreetmap.org/?mlat=${position[0]}&mlon=${position[1]}#map=15/${position[0]}/${position[1]}`;

  return (
    <>
      <button
        onClick={togglePopup}
        className="inline-block px-6 py-3 bg-white text-black rounded-lg hover:bg-gray-200 transition-colors"
      >
        Mais detalhes
      </button>

      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white text-black p-6 rounded-lg shadow-lg w-80 md:w-2xl relative">
            <h3 className="text-lg md:text-xl font-serif mb-4 bg-black text-white p-2 rounded-lg">
              Endereço: Estr. Do Arlindo, 370 - Zona Rural, Mogi das Cruzes - SP
            </h3>

            <div className="flex items-start gap-4 mb-6 bg-black text-white p-2 rounded-lg">
              <div className="flex-shrink-0">
                <Image
                  src={ricardoImage}
                  alt="Ricardo Tomioka"
                  width={60}
                  height={60}
                  className="rounded-full object-cover"
                />
              </div>
              <div className="flex-1">
                <p className="text-sm md:text-base italic mb-2 text-white p-2 rounded-lg">
                  "Prestar atenção: Na rotatória da mogi bertioga no trevo, observar a placa 'Estrada da Estiva' entrar nela. Logo a frente quando avistar a represa virar a esquerda e subir a rua do barzinho. -Ricardo Tomioka"
                </p>
              </div>
            </div>

            <div className="flex justify-center gap-4">
              <a
                href={googleMapsLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-3xl text-gray-700 hover:text-orange-500 transition-colors"
                aria-label="Abrir no Google Maps"
              >
                <Image src={googleMaps} alt="Google Maps" width={45} height={45} />
              </a>
              <a
                href={wazeLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-3xl text-gray-700 hover:text-orange-500 transition-colors"
                aria-label="Abrir no Waze"
              >
                <Image src={waze} alt="Waze" width={40} height={40} />
              </a>
              <a
                href={openStreetMapLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-3xl text-gray-700 hover:text-orange-500 transition-colors"
                aria-label="Abrir no OpenStreetMap"
              >
                <Image src={openStreetMap} alt="OpenStreetMap" width={40} height={40} />
              </a>
            </div>

            <button
              onClick={togglePopup}
              className="absolute top-2 right-2 text-gray-600 hover:text-black"
              aria-label="Fechar pop-up"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default LocationDetailsPopup;