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
      className="
        absolute bottom-0 w-full h-full
        object-cover object-bottom
        opacity-95
      "
    />

    {/* overlay */}
    <div className="absolute inset-0 bg-gradient-to-b from-white/5 via-transparent to-black/60" />

  </div>

  {/* CONTENT */}
  <div className="relative z-10">

    {/* TOP WHITE AREA */}
    <div
      className="
        pt-12
        sm:pt-16
        md:pt-24
        text-center
        px-6
      "
    >

      <p
        className="
          font-inter
          text-crimson
          uppercase
          tracking-[0.28em]
          text-[10px]
          sm:text-sm
          mb-3
        "
      >
        Contact & Connect
      </p>

      <h2
        className="
          font-oswald
          font-bold
          uppercase
          text-black
          text-4xl
          sm:text-5xl
          md:text-6xl
          leading-none
        "
      >
        LET’S BUILD
      </h2>

    </div>

    {/* LOWER BLACK AREA */}
    <div
      className="
        pt-28
        sm:pt-36
        md:pt-44
        lg:pt-[15rem]
        pb-10
        sm:pb-14
        px-6
        sm:px-12
        md:px-24
      "
    >

      <div className="max-w-3xl mx-auto text-center bg-black/20 backdrop-blur-[2px] rounded-3xl py-6">

        {/* DESCRIPTION */}
        <p
          className="
            text-white/90
            leading-relaxed
            text-sm
            sm:text-base
            max-w-xl
            mx-auto
            px-4
          "
        >
          Open to AI systems, workflow automation,
          technical products and research collaborations.
        </p>

        {/* ICONS */}
        <div className="flex justify-center gap-4 sm:gap-5 mt-8 flex-wrap">

          {/* EMAIL */}
          <a
            href="mailto:architsavaliya175@gmail.com"
            className="
              w-10 h-10
              sm:w-12 sm:h-12
              rounded-full
              bg-white/10
              border border-white/10
              text-white
              flex items-center justify-center
              hover:bg-crimson
              transition-all duration-300
              hover:scale-110
              backdrop-blur-md
            "
          >
            <FaEnvelope size={16} />
          </a>

          {/* CALL */}
          <a
            href="tel:+919978006612"
            className="
              w-10 h-10
              sm:w-12 sm:h-12
              rounded-full
              bg-white/10
              border border-white/10
              text-white
              flex items-center justify-center
              hover:bg-crimson
              transition-all duration-300
              hover:scale-110
              backdrop-blur-md
            "
          >
            <FaPhone size={15} />
          </a>

          {/* GITHUB */}
          <a
            href="https://github.com/Archit-175"
            target="_blank"
            className="
              w-10 h-10
              sm:w-12 sm:h-12
              rounded-full
              bg-white/10
              border border-white/10
              text-white
              flex items-center justify-center
              hover:bg-crimson
              transition-all duration-300
              hover:scale-110
              backdrop-blur-md
            "
          >
            <FaGithub size={17} />
          </a>

          {/* LINKEDIN */}
          <a
            href="https://www.linkedin.com/in/architsavaliya/"
            target="_blank"
            className="
              w-10 h-10
              sm:w-12 sm:h-12
              rounded-full
              bg-white/10
              border border-white/10
              text-white
              flex items-center justify-center
              hover:bg-crimson
              transition-all duration-300
              hover:scale-110
              backdrop-blur-md
            "
          >
            <FaLinkedin size={16} />
          </a>

          {/* INSTAGRAM */}
          <a
            href="https://www.instagram.com/archit_savaliya175/"
            target="_blank"
            className="
              w-10 h-10
              sm:w-12 sm:h-12
              rounded-full
              bg-white/10
              border border-white/10
              text-white
              flex items-center justify-center
              hover:bg-crimson
              transition-all duration-300
              hover:scale-110
              backdrop-blur-md
            "
          >
            <FaInstagram size={16} />
          </a>

        </div>

        {/* COPYRIGHT */}
        <div className="mt-8 pt-4 border-t border-white/10 mx-6">

          <p
            className="
              text-[10px]
              sm:text-xs
              uppercase
              tracking-[0.2em]
              text-gray-500
            "
          >
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