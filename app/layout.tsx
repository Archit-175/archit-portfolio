import "./globals.css";
import { ReactNode } from "react";
import { Inter, Oswald } from "next/font/google";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const oswald = Oswald({ subsets: ["latin"], variable: "--font-oswald" });

export const metadata = {
  title: "Archit Savaliya — AI & Systems Builder",
  description:
    "AI Undergraduate. Workflow Systems Builder. Technical Product Enthusiast. Building AI-driven platforms and scalable digital solutions.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${oswald.variable}`}>
      <body className="bg-black text-white font-inter antialiased selection:bg-crimson/30">
        {children}
      </body>
    </html>
  );
}
