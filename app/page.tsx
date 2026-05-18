import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import LeadershipSection from "@/components/LeadershipSection";
import LiveDemoSection from "@/components/LiveDemoSection";
import ProjectCardsSection from "@/components/ProjectCardsSection";
import Footer from "@/components/footer";



export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white selection:bg-[#9B1B30]/30">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ProjectCardsSection />
      <LiveDemoSection />
      <LeadershipSection />
      <Footer />
    </main>
  );
}