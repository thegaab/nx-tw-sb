// components/Header.js
import Image from 'next/image';
import Link from 'next/link';
import { FaInstagram, FaWhatsapp, FaPhone } from 'react-icons/fa';

import logo2 from '@/public/assets/logo-original.png';


const Header = () => {
  return (
    <header className="relative h-screen">
      {/* Imagem de fundo com next/image */}
      <Image
        src="/assets/background.png" // Caminho direto
        alt="Background"
        layout="fill"
        objectFit="cover"
        quality={100}
        className="z-0"
      />

      {/* Overlay escuro */}
      <div className="absolute inset-0 bg-black/50 z-10"></div>

      {/* Conteúdo do Header */}
      <div className="relative z-20 flex flex-col items-center justify-center h-full text-center text-white">

        {/* Logo Principal */}
        <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-4">
          <Image
            src={logo2}
            alt="Logo"
            width={900}
            height={50}/>
        </div>

        {/* Ícones de Redes Sociais */}
        <div className="mt-8 flex space-x-6">
          <Link href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="text-3xl hover:text-orange-400 transition-colors" />
          </Link>
          <Link href="https://whatsapp.com" target="_blank" rel="noopener noreferrer">
            <FaWhatsapp className="text-3xl hover:text-orange-400 transition-colors" />
          </Link>
          <Link href="tel:+5511999999999">
            <FaPhone className="text-3xl hover:text-orange-400 transition-colors" />
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;