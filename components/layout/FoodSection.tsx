import Image from 'next/image';
import { foodTypes } from '@/data/foodData';

const FoodSection = () => {
  return (
    <section className="bg-black text-white py-16">
      <div className="container mx-auto px-4">
        <ul className="flex flex-wrap justify-center gap-6 md:gap-10 mb-12">
          {foodTypes.map((food) => (
            <li key={food.id}>
              <a
                href={`#${food.name.toLowerCase()}`}
                className="flex flex-col items-center text-center text-gray-300 hover:text-orange-400 transition-colors"
              >
                {food.icone && (
                  <div className="w-10 h-10 mb-2">
                    <Image
                      src={food.icone}
                      alt={`${food.name} icon`}
                      width={40}
                      height={40}
                      className="rounded-full object-cover"
                    />
                  </div>
                )}
                <span className="text-sm md:text-base">{food.name}</span>
              </a>
            </li>
          ))}
        </ul>

        <h2 className="text-4xl md:text-5xl font-serif text-center mb-4">Buffet</h2>
        <h3 className="text-2xl md:text-3xl font-sans text-center mb-12">ビュッフェ</h3>

        <div className="space-y-16">
          {foodTypes.map((food) => (
            <div
              key={food.id}
              id={food.name.toLowerCase()}
              className="flex flex-col items-center gap-8 md:gap-12 px-4"
            >
              <div className="w-full md:w-1/2">
                {food.image ? (
                  <Image
                    src={food.image}
                    alt={food.name}
                    width={500}
                    height={300}
                    className="rounded-lg object-cover w-full h-64 md:h-80"
                  />
                ) : food.video ? (
                  <video
                    autoPlay
                    loop
                    muted
                    className="rounded-lg object-cover w-full h-64 md:h-80"
                  >
                    <source src={food.video} type="video/mp4" />
                    Seu navegador não suporta o elemento de vídeo.
                  </video>
                ) : (
                  <div className="rounded-lg bg-gray-800 w-full h-64 md:h-80 flex items-center justify-center">
                    <span className="text-gray-400">Mídia não disponível</span>
                  </div>
                )}
              </div>

              <div className="w-full md:w-1/2 text-center md:text-left">
                <h4 className="text-2xl md:text-3xl font-serif mb-4">{food.name}</h4>
                <p className="text-gray-300 text-sm md:text-base">{food.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FoodSection;