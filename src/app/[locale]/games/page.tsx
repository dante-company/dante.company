import {
  ComingSoonSection,
  GamesSection,
  HeroSection,
  NewsletterSection,
} from "@components/templates";
import { NextPage } from "next";

const GamesPage: NextPage = () => {
  return (
    <>
      <HeroSection text="games" />
      <GamesSection />
      <ComingSoonSection />
      <NewsletterSection />
    </>
  );
};

export default GamesPage;
