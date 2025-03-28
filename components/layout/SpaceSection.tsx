// components/SpaceSection.js
import Image from 'next/image';
import { spaces } from '@/data/spaceData';

const SpaceSection = () => {
  return (
    <section className="bg-black text-white py-12">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl md:text-5xl font-serif mb-4">Nosso espaço</h2>
        <h3 className="text-2xl md:text-3xl font-sans mb-12">私たちの空間</h3>

        <div className="">
          {spaces.map((space, index) => {
            const isEven = index % 2 === 0;
            return (
              <div
                key={space.id}
                className={`flex flex-col ${
                  isEven ? 'md:flex-row' : 'md:flex-row-reverse'
                } items-center gap-0`}
              >
                {/* Div cinza com o nome do espaço */}
                <div
                  className="flex justify-center flex-col w-full md:w-1/2 h-[300px] md:h-[400px] text-center py-8"
                  style={{ backgroundColor: '#211F1F' }}
                >
                  <h4 className="text-2xl md:text-3xl font-serif mb-2">{space.name}</h4>
                  <p className="text-lg md:text-xl font-sans text-gray-300">{space.nameJapanese}</p>
                </div>

                {/* Imagem ou Vídeo */}
                <div className="w-full md:w-1/2">
                  {space.image ? (
                    <Image
                      src={space.image}
                      alt={space.name}
                      width={300}
                      height={500}
                      className="w-full h-auto max-h-[300px] md:max-h-[400px] object-contain"
                    />
                  ) : space.video ? (
                    <video
                      autoPlay
                      loop
                      muted
                      className="w-full h-auto max-h-[300px] md:max-h-[400px] object-contain"
                    >
                      <source src={space.video} type="video/mp4" />
                      Seu navegador não suporta o elemento de vídeo.
                    </video>
                  ) : (
                    <div className="w-full h-[300px] md:h-[400px] bg-gray-800 flex items-center justify-center">
                      <span className="text-gray-400">Mídia não disponível</span>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SpaceSection;