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

                {/* Imagem */}
                <div className="w-full md:w-1/2 h-[300px] md:h-[400px]">
                  <Image
                    src={space.image}
                    alt={space.name}
                    width={600}
                    height={400}
                    className="w-full h-full object-cover"
                  />
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