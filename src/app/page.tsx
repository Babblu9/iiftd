"use client";

import Link from "next/link";
import { Sparkles, GraduationCap } from "lucide-react";
import { siteData } from "@/lib/data";
import FadeIn from "@/components/FadeIn";
import StatsCounter from "@/components/StatsCounter";
import IndustryStats from "@/components/IndustryStats";
import TestimonialCarousel from "@/components/TestimonialCarousel";

export default function Home() {
  const { home } = siteData;

  const wordmarkRows = [
    [
      { name: "GUCCI", style: { fontFamily: "Georgia,serif", letterSpacing: "0.32em", fontSize: "15px", color: "#1a1a1a", fontWeight: "700" } },
      { name: "ZARA", style: { fontFamily: "Georgia,serif", letterSpacing: "0.38em", fontSize: "18px", color: "#111", fontWeight: "700" } },
      { name: "H&M", style: { fontFamily: "'Arial Black',sans-serif", letterSpacing: "0.05em", fontSize: "20px", color: "#E50010", fontWeight: "900" } },
      { name: "PRADA", style: { fontFamily: "Georgia,serif", letterSpacing: "0.3em", fontSize: "14px", color: "#1a1a1a", fontWeight: "700" } },
      { name: "Louis Vuitton", style: { fontFamily: "Georgia,serif", letterSpacing: "0.1em", fontSize: "11px", color: "#5c3b1e", fontWeight: "700", textTransform: "uppercase" as const } },
    ],
    [
      { name: "MYNTRA", style: { fontFamily: "Arial,sans-serif", letterSpacing: "0.14em", fontSize: "14px", color: "#FF3F6C", fontWeight: "900" } },
      { name: "nykaa", style: { fontFamily: "Georgia,serif", letterSpacing: "0.04em", fontSize: "20px", color: "#FC2779", fontWeight: "700" } },
      { name: "RAYMOND", style: { fontFamily: "Georgia,serif", letterSpacing: "0.2em", fontSize: "12px", color: "#1a1a1a", fontWeight: "700" } },
      { name: "BIBA", style: { fontFamily: "'Arial Black',sans-serif", letterSpacing: "0.15em", fontSize: "18px", color: "#E91E63", fontWeight: "900" } },
      { name: "FabIndia", style: { fontFamily: "Georgia,serif", letterSpacing: "0.04em", fontSize: "16px", color: "#8B4513", fontWeight: "700", fontStyle: "italic" } },
    ],
  ];

  const advantages = [
    "Affordable Fees + Easy EMI Plans",
    "Scholarships up to 40%",
    "Dual Certification — Degree & Industry",
    "International Collaboration — Italy & UK",
    "Small Batches · 15:1 Student-Faculty Ratio",
    "Live National & International Fashion Shows",
    "Dedicated Placement Cell — 95%+ Rate",
    "Complimentary Uniform & College Kit",
  ];

  return (
    <div className="flex flex-col min-h-screen bg-[var(--color-bg-light)] text-[var(--color-text)]">

      {/* ── HERO ── */}
      <section className="relative w-full bg-white overflow-hidden py-12 lg:py-0 lg:h-[calc(100vh-125px)] min-h-[700px] flex items-center">
        <div
          className="hidden lg:block absolute top-0 right-0 w-[60%] h-full bg-gradient-to-br from-[#D81B60] via-[#C2185B] to-[#AD1457] z-0"
          style={{ clipPath: "polygon(25% 0, 100% 0, 100% 100%, 0% 100%)" }}
        />
        <div className="lg:hidden absolute top-0 left-0 w-full h-full bg-white z-0" />
        <div className="lg:hidden absolute bottom-0 left-0 w-full h-[60%] bg-gradient-to-br from-[#D81B60] to-[#AD1457] z-0" />

        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10 flex flex-col lg:flex-row items-center justify-between h-full">
          {/* Left */}
          <div className="w-full lg:w-[40%] flex flex-col justify-center pt-8 lg:pt-0 mb-12 lg:mb-0">
            <FadeIn delay={0.1} direction="up">
              <h1 className="font-heading text-5xl md:text-6xl lg:text-[4.5rem] font-bold leading-[0.9] tracking-tight mb-8">
                <span className="block text-[#D81B60]">SHAPING</span>
                <span className="block text-[#D81B60]">CREATIVE</span>
                <span className="block text-[#D81B60]">LEADERS</span>
              </h1>
            </FadeIn>
            <FadeIn delay={0.3} direction="up">
              <div className="mb-8">
                <h2 className="font-heading text-3xl md:text-4xl lg:text-[2.5rem] font-extrabold text-[#1a237e] leading-tight">
                  IN FASHION &<br />INTERIOR<br />
                  <span className="text-[#D81B60]">DESIGN</span>
                </h2>
              </div>
            </FadeIn>
            <FadeIn delay={0.5} direction="up">
              <div className="mb-6">
                <h3 className="font-heading text-2xl md:text-3xl lg:text-4xl font-extrabold text-[#D81B60] leading-tight">
                  ADMISSIONS OPEN<br />FOR 2026
                </h3>
              </div>
            </FadeIn>
            <FadeIn delay={0.7} direction="up">
              <div className="mt-4 inline-block bg-[#1a237e] text-white px-6 py-2 rounded-full">
                <p className="text-lg md:text-xl font-bold tracking-widest uppercase">Dream, Design, Achieve</p>
              </div>
            </FadeIn>
          </div>

          {/* Middle: parallelogram images */}
          <div className="hidden xl:flex absolute left-[38%] top-0 h-full w-[350px] flex-col justify-center gap-6 z-20 pointer-events-none">
            <div className="h-[30%] w-full rounded-md overflow-hidden border-[6px] border-white shadow-2xl ml-12 relative" style={{ transform: "skewX(-15deg)" }}>
              <img src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80" className="absolute inset-0 w-full h-full object-cover object-center" style={{ transform: "skewX(15deg) scale(1.5)", transformOrigin: "center" }} alt="Fashion Design" />
            </div>
            <div className="h-[30%] w-full rounded-md overflow-hidden border-[6px] border-white shadow-2xl ml-4 relative" style={{ transform: "skewX(-15deg)" }}>
              <img src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800&q=80" className="absolute inset-0 w-full h-full object-cover object-center" style={{ transform: "skewX(15deg) scale(1.5)", transformOrigin: "center" }} alt="Interior Design" />
            </div>
            <div className="h-[30%] w-full rounded-md overflow-hidden border-[6px] border-white shadow-2xl -ml-4 relative" style={{ transform: "skewX(-15deg)" }}>
              <img src="https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=800&q=80" className="absolute inset-0 w-full h-full object-cover object-center" style={{ transform: "skewX(15deg) scale(1.5)", transformOrigin: "center" }} alt="Makeup Artistry" />
            </div>
          </div>

          {/* Right placeholder */}
          <div className="hidden lg:block w-full lg:w-[45%] xl:w-[35%] relative z-30">
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-20 pointer-events-none">
              <GraduationCap size={240} className="text-white" />
            </div>
          </div>
        </div>
      </section>

      {/* ── STATS ── */}
      <StatsCounter stats={home.stats} />

      {/* ── INDUSTRY STATS ── */}
      <IndustryStats />

      {/* ── ABOUT / WHY US ── */}
      <section className="py-24 bg-[var(--color-bg-cream)] relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/2 relative">
              <FadeIn direction="left" className="relative z-10">
                <div className="grid grid-cols-2 gap-4">
                  <img src="/assets/hero.jpg" alt="Fashion Show" className="rounded-2xl object-cover h-64 w-full shadow-lg" />
                  <img src="/assets/interior.jpg" alt="Design Portfolio" className="rounded-2xl object-cover h-64 w-full shadow-lg mt-12" />
                </div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-full p-6 shadow-xl w-32 h-32 flex flex-col items-center justify-center border-4 border-[var(--color-bg-cream)]">
                  <span className="text-[var(--color-brand-red)] font-heading font-bold text-3xl">25+</span>
                  <span className="text-[#1A1A1A] text-[10px] font-bold uppercase tracking-wider text-center mt-1">Years of<br />Excellence</span>
                </div>
              </FadeIn>
            </div>
            <div className="lg:w-1/2">
              <FadeIn direction="right">
                <h2 className="font-heading text-4xl md:text-5xl font-bold text-[var(--color-heading)] mb-6">
                  Education Engineered for the Business Ecosystem
                </h2>
                <p className="text-lg text-[var(--color-text)] mb-8 leading-relaxed">
                  We don't just teach design; we build careers. IIFTD bridges the crucial gap between academic learning and industry demands by providing exposure to real projects, an elite curriculum, and practicing mentors.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
                  {home.features.map((feature, i) => (
                    <div key={i} className="flex gap-4 items-start">
                      <div className="w-10 h-10 rounded-full bg-[var(--color-brand-pink)]/10 text-[var(--color-brand-pink)] flex items-center justify-center shrink-0">
                        <Sparkles size={20} />
                      </div>
                      <div>
                        <h4 className="font-bold text-[var(--color-heading)] mb-1">{feature.title}</h4>
                        <p className="text-xs text-[var(--color-text)] leading-relaxed">{feature.text}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* ── PLACEMENT PARTNERS ── */}
      <section className="bg-white">
        <div className="bg-[#D81B60] px-6 py-10 md:py-12">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-16">
            <div className="flex-1">
              <p className="text-white/70 text-xs font-bold uppercase tracking-widest mb-1">IIFTD</p>
              <h2 className="text-white text-4xl md:text-5xl font-extrabold leading-tight mb-3">PLACEMENT<br />PARTNERS</h2>
              <p className="text-white/80 text-sm leading-relaxed max-w-xl">
                Our graduates are hired by India's top fashion houses, luxury brands, and global design firms.
              </p>
            </div>
            <div className="flex-shrink-0 opacity-80">
              <svg width="80" height="80" viewBox="0 0 100 100">
                <polygon points="50,5 95,50 50,95 5,50" fill="#E91E63" />
                <polygon points="50,20 80,50 50,80 20,50" fill="#00BCD4" opacity="0.9" />
              </svg>
            </div>
          </div>
        </div>

        {/* Wordmark Logos — Responsive Grid */}
        <div className="py-6 px-6 border-b border-gray-100">
          <div className="max-w-7xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 md:gap-0 md:divide-x md:divide-gray-100">
            {[
              { name: "GUCCI", style: { fontFamily: "Georgia,serif", letterSpacing: "0.32em", fontSize: "12px", mdFontSize: "15px", color: "#1a1a1a", fontWeight: "700" } },
              { name: "ZARA", style: { fontFamily: "Georgia,serif", letterSpacing: "0.38em", fontSize: "14px", mdFontSize: "18px", color: "#111", fontWeight: "700" } },
              { name: "H&M", style: { fontFamily: "'Arial Black',sans-serif", letterSpacing: "0.05em", fontSize: "16px", mdFontSize: "20px", color: "#E50010", fontWeight: "900" } },
              { name: "PRADA", style: { fontFamily: "Georgia,serif", letterSpacing: "0.3em", fontSize: "12px", mdFontSize: "14px", color: "#1a1a1a", fontWeight: "700" } },
              { name: "Louis Vuitton", style: { fontFamily: "Georgia,serif", letterSpacing: "0.1em", fontSize: "10px", mdFontSize: "11px", color: "#5c3b1e", fontWeight: "700", textTransform: "uppercase" as const } },
            ].map((b, i) => (
              <div key={i} className="flex items-center justify-center py-6 md:py-8 px-4 border border-gray-50 md:border-none hover:bg-gray-50 transition-colors cursor-default rounded-xl md:rounded-none shadow-sm md:shadow-none">
                <span style={{ ...b.style, fontSize: typeof window !== 'undefined' && window.innerWidth < 768 ? b.style.fontSize : b.style.mdFontSize }} className="font-bold text-center">
                  <span className="md:hidden" style={{ fontSize: b.style.fontSize }}>{b.name}</span>
                  <span className="hidden md:inline" style={{ fontSize: b.style.mdFontSize }}>{b.name}</span>
                </span>
              </div>
            ))}
          </div>
          <div className="max-w-7xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 md:gap-0 md:divide-x md:divide-gray-100 md:border-t md:border-gray-100 mt-4 md:mt-0">
            {[
              { name: "MYNTRA", style: { fontFamily: "'Arial',sans-serif", letterSpacing: "0.14em", fontSize: "12px", mdFontSize: "14px", color: "#FF3F6C", fontWeight: "900" } },
              { name: "nykaa", style: { fontFamily: "Georgia,serif", letterSpacing: "0.04em", fontSize: "16px", mdFontSize: "20px", color: "#FC2779", fontWeight: "700" } },
              { name: "RAYMOND", style: { fontFamily: "Georgia,serif", letterSpacing: "0.18em", fontSize: "11px", mdFontSize: "12px", color: "#1a1a1a", fontWeight: "700" } },
              { name: "BIBA", style: { fontFamily: "'Arial Black',sans-serif", letterSpacing: "0.15em", fontSize: "14px", mdFontSize: "18px", color: "#E91E63", fontWeight: "900" } },
              { name: "FabIndia", style: { fontFamily: "Georgia,serif", letterSpacing: "0.04em", fontSize: "13px", mdFontSize: "16px", color: "#8B4513", fontWeight: "700", fontStyle: "italic" } },
            ].map((b, i) => (
              <div key={i} className="flex items-center justify-center py-6 md:py-8 px-4 border border-gray-50 md:border-none hover:bg-gray-50 transition-colors cursor-default rounded-xl md:rounded-none shadow-sm md:shadow-none">
                <span className="text-center">
                  <span className="md:hidden" style={{ ...b.style, fontSize: b.style.fontSize }}>{b.name}</span>
                  <span className="hidden md:inline" style={{ ...b.style, fontSize: b.style.mdFontSize }}>{b.name}</span>
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── IIFTD ADVANTAGE split panel ── */}
      <section className="overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          {/* LEFT: IIFTD */}
          <div className="bg-[#0B1B3D] px-8 md:px-14 py-16 flex flex-col justify-center">
            <p className="text-[#E60000] text-xs uppercase tracking-widest font-bold mb-3">Exclusively at IIFTD</p>
            <h2 className="text-white text-3xl md:text-4xl font-extrabold mb-2 leading-tight">
              The IIFTD<br /><span className="text-[#E60000]">Advantage</span>
            </h2>
            <p className="text-white/50 text-sm mb-8 max-w-sm">What sets us apart from every other institute.</p>
            <div className="flex flex-col gap-3">
              {advantages.map((item, i) => (
                <div key={i} className="flex items-center gap-3 group">
                  <div className="w-5 h-5 rounded-full bg-[#E60000] flex-shrink-0 flex items-center justify-center">
                    <svg width="9" height="9" viewBox="0 0 9 9" fill="none">
                      <path d="M1.5 4.5L3.5 6.5L7.5 2" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <span className="text-white/80 text-sm font-medium group-hover:text-white transition-colors">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT: Others */}
          <div className="bg-gray-100 px-8 md:px-14 py-16 flex flex-col justify-center relative overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center opacity-[0.035] pointer-events-none select-none">
              <span className="text-[180px] font-black text-gray-700 rotate-[-25deg]">?</span>
            </div>
            <p className="text-gray-400 text-xs uppercase tracking-widest font-bold mb-3">Other Institutes</p>
            <h2 className="text-gray-400 text-3xl md:text-4xl font-extrabold mb-2 leading-tight line-through decoration-gray-300 decoration-2">
              Standard<br />Offering
            </h2>
            <p className="text-gray-400 text-sm mb-8 max-w-sm">What most institutes fail to deliver.</p>
            <div className="flex flex-col gap-3">
              {advantages.map((item, i) => (
                <div key={i} className="flex items-center gap-3 opacity-50">
                  <div className="w-5 h-5 rounded flex-shrink-0 flex items-center justify-center bg-gray-300">
                    <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
                      <path d="M1.5 1.5L6.5 6.5M6.5 1.5L1.5 6.5" stroke="#888" strokeWidth="1.8" strokeLinecap="round" />
                    </svg>
                  </div>
                  <span className="text-gray-400 text-sm line-through decoration-gray-400">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <TestimonialCarousel testimonials={home.testimonials} />

    </div>
  );
}
