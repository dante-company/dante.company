import { FC } from "react";
import BackgroundParticles from "./BackgroundParticles";
import BackgroundPolygon from "./BackgroundPolygon";
import DanteLogo from "./DanteLogo";

interface Props {
  text: string;
}

const HeroSection: FC<Props> = (props) => {
  const { text } = props;

  return (
    <section className="relative flex min-h-[60svh] items-center justify-center overflow-hidden">
      <BackgroundPolygon />
      <BackgroundParticles />
      <DanteLogo text={text} />
    </section>
  );
};

export default HeroSection;
