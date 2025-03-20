/* eslint-disable react/no-unescaped-entities */

"use client"; 

import { useState } from 'react';
import Image from 'next/image';
import { FaMapMarkerAlt } from 'react-icons/fa';

import RicardoImage from '@/public/assets/ricardo-tomioka.png';

const LocationTipPopup = () => {
  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="fixed bottom-8 right-8 z-50">
      <button
        onClick={togglePopup}
        className="bg-orange-500 text-white rounded-full p-4 shadow-lg hover:bg-orange-600 transition-colors"
        aria-label="Dica de localização"
      >
        <FaMapMarkerAlt className="text-2xl" />
      </button>

      {isOpen && (
        <div className="absolute bottom-16 right-0 bg-black text-white p-6 rounded-lg shadow-lg w-80 md:w-96">
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0">
              <Image
                src={RicardoImage}
                alt="Ricardo Tomioka"
                width={60}
                height={60}
                className="rounded-full object-cover"
              />
            </div>

            <div className="flex-1">
              <p className="text-sm md:text-base italic mb-2">
                "Prestar atenção: Na rotatória da mogi bertioga no trevo, observar a placa 'Estrada da Estiva' entrar nela. Logo a frente quando avistar a represa virar a esquerda e subir a rua do barzinho."
              </p>
              <p className="text-right text-sm font-semibold">– Ricardo Tomioka</p>
            </div>
          </div>

          <button
            onClick={togglePopup}
            className="absolute top-2 right-2 text-gray-400 hover:text-white"
            aria-label="Fechar pop-up"
          >
            ✕
          </button>
        </div>
      )}
    </div>
  );
};

export default LocationTipPopup;