import {
  ComingSoonSection,
  GamesSection,
  HeroSection,
  NewsletterSection,
} from "../../../components/templates";
import { NextPage } from "next";

const GamesPage: NextPage = () => {
  return (
    <>
      <HeroSection text="games" />
      <ComingSoonSection />
      <GamesSection />
      <NewsletterSection />
    </>
  );
};

export default GamesPage;
