import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import LeadershipSection from "@/components/LeadershipSection";
import LiveDemoSection from "@/components/LiveDemoSection";
import ProjectCardsSection from "@/components/ProjectCardsSection";
import {
FaGithub,
FaLinkedin,
FaInstagram,
FaPhone,
FaEnvelope
} from "react-icons/fa";


export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white selection:bg-[#9B1B30]/30">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ProjectCardsSection />
      <LiveDemoSection />
      <LeadershipSection />
      

  <footer
  id="contact"
  className="relative overflow-hidden bg-white"
>

  {/* BACKGROUND */}
  <div className="absolute inset-0">

    <img
      src="/footerbg.png"
      alt="Footer"
      className="absolute bottom-0 w-full object-cover object-bottom"
    />

    {/* subtle fade */}
    <div className="absolute inset-0 bg-gradient-to-b from-white/10 via-transparent to-black/40" />

  </div>

 {/* CONTENT */}
<div className="relative z-10">

  {/* TOP WHITE AREA */}
  <div className="pt-40 text-center">

    <p className="font-inter text-crimson uppercase tracking-[0.3em] text-sm mb-4">
      Contact & Connect
    </p>

    <h2 className="font-oswald text-5xl md:text-7xl font-bold uppercase text-black">
      LET’S BUILD
    </h2>

  </div>

  {/* LOWER BLACK AREA */}
  <div className="pt-[16rem] pb-14 px-6 sm:px-12 md:px-24">

    <div className="max-w-3xl mx-auto text-center">

      <p className="text-gray-400 leading-relaxed">
        Open to AI systems, workflow automation,
        technical products and research collaborations.
      </p>

 
   {/* CONTACT + SOCIAL */}
<div className="flex justify-center gap-5 mt-10 flex-wrap">

  {/* EMAIL */}
  <a
    href="mailto:architsavaliya175@gmail.com"
    className="w-12 h-12 rounded-full bg-white/10 border border-white/10 text-white flex items-center justify-center hover:bg-crimson transition-all duration-300 hover:scale-110"
  >
    <FaEnvelope />
  </a>

  {/* CALL */}
  <a
    href="tel:+919978006612"
    className="w-12 h-12 rounded-full bg-white/10 border border-white/10 text-white flex items-center justify-center hover:bg-crimson transition-all duration-300 hover:scale-110"
  >
    <FaPhone />
  </a>

  {/* GITHUB */}
  <a
    href="https://github.com/Archit-175"
    target="_blank"
    className="w-12 h-12 rounded-full bg-white/10 border border-white/10 text-white flex items-center justify-center hover:bg-crimson transition-all duration-300 hover:scale-110"
  >
    <FaGithub />
  </a>

  {/* LINKEDIN */}
  <a
    href="https://www.linkedin.com/in/architsavaliya/"
    target="_blank"
    className="w-12 h-12 rounded-full bg-white/10 border border-white/10 text-white flex items-center justify-center hover:bg-crimson transition-all duration-300 hover:scale-110"
  >
    <FaLinkedin />
  </a>

  {/* INSTAGRAM */}
  <a
    href="https://www.instagram.com/archit_savaliya175/"
    target="_blank"
    className="w-12 h-12 rounded-full bg-white/10 border border-white/10 text-white flex items-center justify-center hover:bg-crimson transition-all duration-300 hover:scale-110"
  >
    <FaInstagram />
  </a>

</div>

      <div className="mt-14 pt-8 border-t border-white/10">

        <p className="text-xs uppercase tracking-[0.2em] text-gray-500">
          © {new Date().getFullYear()} ARCHIT SAVALIYA
        </p>

      </div>

    </div>

  </div>

</div>
</footer>
    </main>
  );
}