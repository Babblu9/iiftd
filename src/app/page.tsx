"use client";

import Link from "next/link";
import { ArrowRight, Sparkles, GraduationCap } from "lucide-react";
import { siteData } from "@/lib/data";
import FadeIn from "@/components/FadeIn";
import StatsCounter from "@/components/StatsCounter";
import IndustryStats from "@/components/IndustryStats";
import TestimonialCarousel from "@/components/TestimonialCarousel";
import TypewriterText from "@/components/TypewriterText";

export default function Home() {
  const { home, courses } = siteData;
  const disciplines = ["Fashion Design", "Interior Design", "Luxury Mgmt", "Textile Design"];

  return (
    <div className="flex flex-col min-h-screen bg-[var(--color-bg-light)] text-[var(--color-text)]">
      {/* Cadence Style Hero Section */}
      <section className="relative h-screen min-h-[600px] flex items-center -mt-20 overflow-hidden bg-white">
        {/* Subtle background to support transparent navbar and colored logo */}
        <div className="absolute inset-0 bg-gradient-to-br from-white via-[#F9F9F9] to-[#FFF0F0] opacity-90 z-0" />

        {/* Optional background image underneath */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat mix-blend-overlay z-[-1] opacity-50"
          style={{ backgroundImage: `url('${home.hero.image}')` }}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
          <div className="max-w-3xl pt-20">
            <FadeIn delay={0.2} direction="up">
              <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl font-bold text-[var(--color-heading)] leading-tight mb-4 shadow-sm">
                Shaping Creative Leaders in
              </h1>
            </FadeIn>

            <div className="h-20 md:h-24 mb-6">
              <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl font-bold text-[var(--color-brand-red)] leading-tight">
                <TypewriterText texts={disciplines} />
              </h1>
            </div>

            <FadeIn delay={0.4} direction="up">
              <p className="text-[var(--color-text)] text-lg md:text-xl max-w-2xl mb-8 font-medium">
                {home.hero.subtitle}
              </p>
            </FadeIn>

            <FadeIn delay={0.6} direction="up">
              <Link href="/courses" className="btn-secondary mt-2 border-none font-body text-[var(--color-brand-red)] flex group w-max">
                Explore Programs <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <StatsCounter stats={home.stats} />

      {/* Industry Growth Section */}
      <IndustryStats />

      {/* About Us / Why Choose Us Grid (Career Focused Structure) */}
      <section className="py-24 bg-[var(--color-bg-cream)] relative z-10 selection:bg-[var(--color-brand-red)] selection:text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-16 items-center">

            {/* Left Graphics Grid */}
            <div className="lg:w-1/2 relative">
              <FadeIn direction="left" className="relative z-10">
                <div className="grid grid-cols-2 gap-4">
                  <img src="/assets/hero.jpg" alt="Fashion Show" className="rounded-2xl object-cover h-64 w-full shadow-lg" />
                  <img src="/assets/interior.jpg" alt="Design Portfolio" className="rounded-2xl object-cover h-64 w-full shadow-lg mt-12" />
                </div>
                {/* 25 Years circular badge */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-full p-6 shadow-xl w-32 h-32 flex flex-col items-center justify-center border-4 border-[var(--color-bg-cream)]">
                  <span className="text-[var(--color-brand-red)] font-heading font-bold text-3xl">25+</span>
                  <span className="text-[#1A1A1A] text-[10px] font-bold uppercase tracking-wider text-center mt-1">Years of<br />Excellence</span>
                </div>
              </FadeIn>
            </div>

            {/* Right Content */}
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
                      <div className="w-10 h-10 rounded-full bg-[var(--color-brand-red)]/10 text-[var(--color-brand-red)] flex items-center justify-center shrink-0">
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

      {/* Career Focused Course Cards */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn direction="up" className="text-center mb-16">
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-[var(--color-heading)] mb-4">Launch Your Professional Career</h2>
            <p className="text-lg text-[var(--color-text)] max-w-2xl mx-auto">Master your craft through our hyper-specialized, placement-driven design degrees and certifications.</p>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.slice(0, 3).map((course, i) => (
              <FadeIn key={course.id} delay={0.2 * i} direction="up">
                <div className="group bg-white rounded-3xl overflow-hidden box-shadow-soft border border-gray-100 flex flex-col h-full hover:-translate-y-2 transition-transform duration-300">
                  {/* Huge Image Card */}
                  <div className="relative h-64 overflow-hidden m-3 rounded-2xl">
                    <img
                      src={course.image}
                      alt={course.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out"
                    />
                    {/* Overlay tag */}
                    <div className="absolute top-4 left-4 bg-[var(--color-brand-red)] px-4 py-1.5 rounded-full text-xs font-bold text-white shadow-sm border border-[var(--color-brand-red-hover)]">
                      Admissions Open
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-6 flex-grow flex flex-col">
                    <h3 className="font-heading text-2xl font-bold text-[var(--color-heading)] mb-3">{course.title}</h3>
                    <p className="text-[var(--color-text)] text-sm leading-relaxed mb-6 flex-grow">
                      {course.description}
                    </p>

                    <div className="mb-6">
                      <p className="text-xs font-bold text-[var(--color-heading)] uppercase tracking-wider mb-2">Career Outcomes:</p>
                      <div className="flex flex-wrap gap-2">
                        {course.careerOutcomes?.slice(0, 2).map((outcome, idx) => (
                          <span key={idx} className="bg-[var(--color-bg-cream)] text-[var(--color-text)] text-xs px-2 py-1 rounded-md">{outcome}</span>
                        ))}
                      </div>
                    </div>

                    <hr className="border-gray-100 mb-6" />

                    <Link href={`/courses/${course.id}`} className="btn-secondary w-full group/btn">
                      Course Details <ArrowRight size={16} className="ml-2 group-hover/btn:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link href="/courses" className="btn-primary">
              View All Programs <GraduationCap size={18} className="ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <TestimonialCarousel testimonials={home.testimonials} />

    </div>
  );
}
