import "./globals.css";
import { ReactNode } from "react";
import { Inter, Oswald } from "next/font/google";
import localFont from "next/font/local";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const oswald = Oswald({ subsets: ["latin"], variable: "--font-oswald" });

// Self-hosted "Comic Shanns" (MIT © 2018 Shannon Miwa); used only in the About section.
const comicShanns = localFont({
  src: "./fonts/ComicShanns.otf",
  variable: "--font-comic-shanns",
  display: "swap",
});

export const metadata = {
  title: "Archit Savaliya · AI & Product Builder",
  description:
    "I'm a final-year AI student at SVNIT Surat who ships real products, from a real-time collaborative workspace to institute platforms and ML research. AI, product, and full-stack, built with polish.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${oswald.variable} ${comicShanns.variable}`}
    >
      <body className="bg-black text-white font-inter antialiased selection:bg-crimson/30">
        {children}
      </body>
    </html>
  );
}
