import Image from "next/image";

import separator from "@/public/assets/separator.png";

// components/SeparatorSection.js
const SeparatorSection = () => {
  return (
    <section className="py-12 m-28">
      <div className="container mx-auto px-4 flex justify-center items-center">
       <Image src={separator} alt="Separator" width={90} height={20} />
      </div>
    </section>
  );
};

export default SeparatorSection;