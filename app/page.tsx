import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ProjectCardsSection from "@/components/ProjectCardsSection";
import SkillsSection from "@/components/SkillsSection";
import LiveDemoSection from "@/components/LiveDemoSection";
import PublicationsSection from "@/components/PublicationsSection";
import AchievementsSection from "@/components/AchievementsSection";
import LeadershipSection from "@/components/LeadershipSection";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white selection:bg-[#9B1B30]/30">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ProjectCardsSection />
      <SkillsSection />
      <LiveDemoSection />
      <PublicationsSection />
      <AchievementsSection />
      <LeadershipSection />
      <Footer />
    </main>
  );
}
