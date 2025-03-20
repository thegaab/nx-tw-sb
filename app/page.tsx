import FoodSection from "@/components/layout/FoodSection";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import MapSection from "@/components/layout/MapSection";
import SeparatorSection from "@/components/layout/SeparatorSection";
import AboutSection from "@/components/layout/SobreNós";
import SpaceSection from "@/components/layout/SpaceSection";

export default function Home() {
  return (
    <div>
      <Header/>
      <FoodSection/>
      <SeparatorSection/>
      <SpaceSection/>
      <SeparatorSection/>
      <AboutSection/>
      <SeparatorSection/>
      <MapSection/>
      <SeparatorSection/>
      <Footer/>
    </div>
  );
}
