import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "OTP → Memory PIN Case Study · Archit Savaliya",
  description:
    "A product case study on replacing one-time passwords with a memorable PIN, cutting support complaints by ~28% through compounding UX.",
};

const PDF = "/otp-memory-pin-case-study.pdf";

const findings = [
  {
    stat: "~28%",
    label: "fewer complaints",
    body: "Support complaints tied to sign-in friction dropped meaningfully once OTP fatigue was removed.",
  },
  {
    stat: "Compounding",
    label: "UX",
    body: "Small, repeated wins in a high-frequency flow compound. A better login pays off on every single visit.",
  },
  {
    stat: "Memory",
    label: "over one-time",
    body: "A memorable PIN trades a fragile, delay-prone OTP round-trip for something users already carry in their heads.",
  },
];

export default function CaseStudyPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* Top bar */}
      <div className="sticky top-0 z-40 border-b border-white/5 bg-black/60 backdrop-blur-md">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4 sm:px-10">
          <Link
            href="/"
            className="font-inter text-xs uppercase tracking-[0.2em] text-white/60 transition-colors hover:text-crimson"
          >
            ← Back to portfolio
          </Link>
          <a
            href={PDF}
            download
            className="rounded-full border border-white/15 px-4 py-2 font-inter text-xs uppercase tracking-[0.2em] text-white/80 transition-colors hover:border-crimson hover:text-white"
          >
            Download PDF
          </a>
        </div>
      </div>

      {/* Hero */}
      <header className="relative overflow-hidden border-b border-white/5 px-6 py-20 sm:px-10 md:py-28">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(155,27,48,0.16),transparent_65%)]" />
        <div className="relative mx-auto max-w-5xl">
          <p className="mb-4 font-inter text-xs uppercase tracking-[0.28em] text-crimson">
            Product Case Study
          </p>
          <h1 className="font-oswald text-5xl font-bold uppercase leading-none tracking-tighter sm:text-6xl md:text-7xl">
            OTP <span className="text-crimson">→</span> Memory PIN
          </h1>
          <p className="mt-6 max-w-2xl font-inter text-base leading-relaxed text-white/60 md:text-lg">
            My product-strategy study on a deceptively small decision (how you authenticate) and
            why replacing one-time passwords with a memorable PIN cut support complaints by ~28%.
          </p>
        </div>
      </header>

      {/* Research question + findings */}
      <section className="mx-auto max-w-5xl px-6 py-16 sm:px-10">
        <div className="mb-14 max-w-3xl">
          <h2 className="font-oswald text-2xl font-bold uppercase tracking-wide text-white">
            The research question
          </h2>
          <p className="mt-4 font-inter text-base leading-relaxed text-white/70">
            OTPs feel secure, but they add friction to <em>every</em> sign-in: network delays,
            re-sends, mistyped codes, and abandonment. I wanted to know: what happens to user trust
            and support load if you replace the one-time password with a memorable{" "}
            <span className="text-white">PIN the user chooses</span>? This study frames the trade-off
            and follows the outcome.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
          {findings.map((f) => (
            <div
              key={f.label}
              className="rounded-xl border border-white/10 bg-[#0A0A0A] p-6 transition-colors hover:border-crimson/40"
            >
              <p className="font-oswald text-3xl font-bold text-crimson">{f.stat}</p>
              <p className="mb-3 font-oswald text-xs uppercase tracking-[0.2em] text-white/50">
                {f.label}
              </p>
              <p className="font-inter text-sm leading-relaxed text-white/65">{f.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Embedded PDF */}
      <section className="mx-auto max-w-5xl px-6 pb-24 sm:px-10">
        <div className="mb-4 flex items-center gap-4">
          <span className="font-oswald text-sm uppercase tracking-[0.2em] text-white/50">
            The full case study
          </span>
          <span className="h-px flex-1 bg-white/10" />
        </div>
        <div className="overflow-hidden rounded-xl border border-white/10 bg-[#0d0d0d]">
          <object data={PDF} type="application/pdf" className="h-[80vh] w-full">
            <iframe src={PDF} title="OTP to Memory PIN case study" className="h-[80vh] w-full border-0" />
            <div className="p-8 text-center">
              <p className="font-inter text-sm text-white/60">
                Your browser can&apos;t display the PDF inline.{" "}
                <a href={PDF} download className="text-crimson underline">
                  Download it here
                </a>
                .
              </p>
            </div>
          </object>
        </div>
      </section>
    </main>
  );
}
