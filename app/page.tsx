import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import LeadershipSection from "@/components/LeadershipSection";
import LiveDemoSection from "@/components/LiveDemoSection";
import ProjectCardsSection from "@/components/ProjectCardsSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white selection:bg-[#9B1B30]/30">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ProjectCardsSection />
      <LiveDemoSection />
      <LeadershipSection />
      
      {/* Simple Footer / Contact Section */}
      <footer id="contact" className="py-24 px-6 sm:px-12 md:px-24 lg:px-32 text-center border-t border-black/10 bg-white text-black transition-colors duration-1000">
        <h2 className="font-oswald text-4xl md:text-5xl font-bold uppercase mb-8">Ready to Build?</h2>
        <a href="mailto:contact@example.com" className="font-inter text-crimson text-xl md:text-2xl hover:text-black transition-colors border-b border-crimson hover:border-black pb-1">
          contact@example.com
        </a>
        <p className="font-inter text-gray-400 mt-16 text-sm uppercase tracking-widest">
          © {new Date().getFullYear()} Archit Savaliya. All Rights Reserved.
        </p>
      </footer>
    </main>
  );
}