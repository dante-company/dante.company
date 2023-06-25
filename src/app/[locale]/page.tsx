import {
  WelcomeSection,
  Footer,
  HeroSection,
  MembersSection,
  StatsSection,
  TimelineSection,
} from "@components/templates";
import FAQSection from "@components/templates/FAQSection";
import { NextPage } from "next";

const MainPage: NextPage = () => {
  return (
    <div className="flex flex-col items-stretch">
      <HeroSection />
      <WelcomeSection />
      {/* <SkillsSection /> */}
      <StatsSection />
      <MembersSection />
      <TimelineSection />
      <FAQSection />
      <Footer />
    </div>
  );
};

export default MainPage;
