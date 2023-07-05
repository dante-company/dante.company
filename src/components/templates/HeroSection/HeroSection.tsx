import { FC } from "react";
import BackgroundParticles from "./BackgroundParticles";
import BackgroundPolygon from "./BackgroundPolygon";
import DanteLogo from "./DanteLogo";

const HeroSection: FC = () => {
  return (
    <section className="relative min-h-[80svh] flex items-center justify-center overflow-hidden">
      <BackgroundPolygon />
      <BackgroundParticles />
      <DanteLogo />
    </section>
  );
};

export default HeroSection;
