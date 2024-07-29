import HeroSection from "@/components/Hero";
import AboutSection from "@/components/About";
import Tokenomics from "@/components/Tokenomics";
import Tokenomix from "@/components/Tokenomic";

export default function Home() {
  return (
    <div className="bg-cover bg-center bg-no-repeat min-h-screen" style={{ backgroundImage: "url('/bg.png')" }}>
      <HeroSection />
      <AboutSection />
      <Tokenomics />
    </div>
  );
}
