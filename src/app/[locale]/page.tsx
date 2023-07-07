import {
  HeroSection,
  MembersSection,
  StatsSection,
  TimelineSection,
  WelcomeSection,
} from "@components/templates";
import FAQSection from "@components/templates/FAQSection";
import { NextPage } from "next";

const MainPage: NextPage = () => {
  return (
    <>
      <HeroSection />
      <WelcomeSection />
      {/* <SkillsSection /> */}
      <StatsSection />
      <MembersSection />
      <TimelineSection />
      <FAQSection />
    </>
  );
};

export default MainPage;
