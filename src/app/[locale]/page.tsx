import {
  HeroSection,
  MembersSection,
  StatsSection,
  TimelineSection,
  WelcomeSection,
} from "../../components/templates";
import FAQSection from "../../components/templates/FAQSection";
import { NextPage } from "next";

const MainPage: NextPage = () => {
  return (
    <>
      <HeroSection text="company" />
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
