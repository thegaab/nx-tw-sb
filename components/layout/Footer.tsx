/* eslint-disable react/no-unescaped-entities */
// components/Footer.js
import Image from 'next/image';
import Link from 'next/link';
import { FaFacebookF, FaInstagram } from 'react-icons/fa';

import image from '@/public/assets/instagram-images/image.png';
import image1 from '@/public/assets/instagram-images/image-1.png';
import image2 from '@/public/assets/instagram-images/image-2.png';
import image3 from '@/public/assets/instagram-images/image-3.png';
import image4 from '@/public/assets/instagram-images/image-4.png';
import image5 from '@/public/assets/instagram-images/image-5.png';
import image6 from '@/public/assets/instagram-images/image-6.png';
import image7 from '@/public/assets/instagram-images/image-7.png';
import image8 from '@/public/assets/instagram-images/image-8.png';

import logo from '@/public/assets/logo-circular.png'

const Footer = () => {
  // Mockup de imagens para os posts do Instagram (substitua pelos caminhos reais)
  const instagramPosts = [
    { src: image },
    { src: image1 },
    { src: image2 },
    { src: image3 },
    { src: image4 },
    { src: image5 },
    { src: image6 },
    { src: image7 },
    { src: image8 },
  ];

  return (
    <footer className="bg-black text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Seção 1: Logo e Slogan */}
          <div className="flex flex-col items-center md:items-start">
            <div className="flex items-center mb-4">
            <Image
              src={logo}
              alt="Ricardo Tomioka Eventos"
              width={70}
              height={25}
              className="mb-4 m-2"
            />
            <p className='font-semibold '>Ricardo Tomioka Eventos</p>
            </div>
            <p className="text-gray-300 text-sm md:text-base mb-4">
              "Ser feliz... É tudo o que importa"
            </p>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-orange-400 transition-colors"
              >
                <FaFacebookF className="text-2xl" />
              </a>
              <a
                href="https://www.instagram.com/ricardotomioka/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-orange-400 transition-colors"
              >
                <FaInstagram className="text-2xl" />
              </a>
            </div>
          </div>

          {/* Seção 2: Contato */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-xl font-normal mb-4">Contato</h3>
            <p className="text-gray-300 text-sm md:text-base mb-2">
              <strong>Telefone:</strong> (11) 99999-9999
            </p>
            <p className="text-gray-300 text-sm md:text-base mb-2">
              <strong>Email:</strong> contato@ricardotomioka.com.br
            </p>
            <p className="text-gray-300 text-sm md:text-base">
              <strong>Endereço:</strong> Rua Exemplo, 123, São Paulo - SP
            </p>
          </div>

          {/* Seção 3: Links Úteis */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-xl font-normal mb-4">Links úteis</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-gray-300 text-sm md:text-base hover:text-orange-400 transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/#menu"
                  className="text-gray-300 text-sm md:text-base hover:text-orange-400 transition-colors"
                >
                  Menu
                </Link>
              </li>
              <li>
                <Link
                  href="/#espaco"
                  className="text-gray-300 text-sm md:text-base hover:text-orange-400 transition-colors"
                >
                  Espaço
                </Link>
              </li>
              <li>
                <Link
                  href="/#sobre-nos"
                  className="text-gray-300 text-sm md:text-base hover:text-orange-400 transition-colors"
                >
                  Sobre nós
                </Link>
              </li>
            </ul>
          </div>

          {/* Seção 4: Instagram (Estática) */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-xl font-normal mb-4">Instagram</h3>
            <div className="grid grid-cols-3 gap-1">
              {instagramPosts.map((post, index) => (
                <a
                  key={index}
                  href="https://www.instagram.com/ricardotomioka/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <Image
                    src={post.src}
                    alt={`Post do Instagram ${index + 1}`}
                    width={70}
                    height={70}
                    className=" h-20 w-20 object-cover rounded-sm"
                  />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-8 text-center">
          <p className="text-gray-400 text-xs">
            Desenvolvido por <a href="https://thegaab.github.io/thegaabsportfolio/" target="_blank" rel="noopener noreferrer" className="hover:text-orange-400 transition-colors">thegaab</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;