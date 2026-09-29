import { DashboardHero, NewsTicker } from "@/components/home/Dashboard";
import { FacilitiesCarousel } from "@/components/home/FacilitiesCarousel";
import {
  QuickAccess,
  AboutPreview,
  NewsAnnouncement,
  ProgramsPreview,
  AchievementPreview,
  InnovationTefa,
  FacilitiesPartners,
  CalendarSocial,
  PpdbCta,
} from "@/components/home/sections";

export default function Home() {
  return (
    <>
      <DashboardHero />
      <NewsTicker />
      <QuickAccess />
      <AboutPreview />
      <FacilitiesCarousel />
      <NewsAnnouncement />
      <ProgramsPreview />
      <AchievementPreview />
      <InnovationTefa />
      <FacilitiesPartners />
      <CalendarSocial />
      <PpdbCta />
    </>
  );
}
