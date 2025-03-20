import Image from 'next/image';

import sobreNos from '@/public/assets/sobreNós.png';

const AboutSection = () => {
  return (
    <section className="bg-black text-white py-16">
      <div className="container mx-auto px-4">
        {/* Título */}
        <h2 className="text-4xl md:text-5xl font-serif text-center mb-4">Sobre nós</h2>
        <h3 className="text-2xl md:text-3xl font-sans text-center mb-12">私たちについて</h3>

        {/* Conteúdo */}
        <div className="flex flex-col items-center gap-8 md:gap-12">
          {/* Texto */}
          <div className="w-full md:w-1/2">
            <p className="text-gray-300 text-sm md:text-base mb-4">
              Esqueça a Apixionada e Dedicação: Nossa equipe é essencial para o sucesso, compartilhando conhecimento, dedicação, cuidado, paixão e amor. Somos profissionais transformando momentos especiais em memórias únicas.
            </p>
            <p className="text-gray-300 text-sm md:text-base mb-4">
              Pautada pela arte de servir há 20 anos, a Ricardo Tomioka Eventos nasce da paixão por cozinhar e personalizar. Somos uma empresa familiar, com o objetivo de oferecer um serviço completo, personalizado e de qualidade.
            </p>
            <p className="text-gray-300 text-sm md:text-base mb-4">
              Eventos Corporativos com Excelência: Oferecemos almoços, jantares, churrascos e coffee breaks personalizados para empresas, sempre mantendo os mais altos padrões de segurança e qualidade.
            </p>
            <p className="text-gray-300 text-sm md:text-base">
              Nossa Família, Nossos Clientes: Para nós, os clientes são como família. Superamos expectativas ao oferecer experiências gastronômicas que combinam sabor, apresentação e inovação, com um toque pessoal.
            </p>
          </div>

          <div className="w-full flex justify-center">
            <Image
              src={sobreNos}
              alt="Sobre nós - Ricardo Tomioka Eventos"
              width={250}
              height={200}
              className="object-fit"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;