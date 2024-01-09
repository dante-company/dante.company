import {
  PencilPickerSection,
  GamesSection,
  HeroSection,
  NewsletterSection,
} from "../../../components/templates";
import { NextPage } from "next";

const GamesPage: NextPage = () => {
  return (
    <>
      <HeroSection text="games" />
      <PencilPickerSection />
      <GamesSection />
      <NewsletterSection />
    </>
  );
};

export default GamesPage;
