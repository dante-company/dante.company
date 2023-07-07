import { HeroSection } from "@components/templates";
import GamesSection from "@components/templates/GamesSection";
import { NextPage } from "next";

const GamesPage: NextPage = () => {
  return (
    <>
      <HeroSection text="games" />
      <GamesSection />
    </>
  );
};

export default GamesPage;
