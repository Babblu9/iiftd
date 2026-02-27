"use client";
import { siteData } from "@/lib/data";
import FadeIn from "@/components/FadeIn";
import { Quote, CheckCircle2 } from "lucide-react";

export default function AboutPage() {
    const { about } = siteData;

    return (
        <div className="flex flex-col min-h-screen bg-white text-[var(--color-text)]">
            {/* Header Banner */}
            <section className="pt-32 pb-16 bg-[var(--color-bg-cream)] relative overflow-hidden">
                <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[var(--color-brand-red)]/10 to-transparent blur-3xl rounded-bl-full pointer-events-none" />
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                    <FadeIn direction="up">
                        <span className="text-[var(--color-brand-red)] text-sm tracking-widest uppercase font-bold">Our Story</span>
                        <h1 className="font-heading text-5xl md:text-6xl mt-4 font-bold text-[var(--color-heading)] mb-6">About IIFTD</h1>
                        <p className="text-xl text-[var(--color-text)] max-w-2xl mx-auto font-medium">Bridging the gap between purposeful education and productive career.</p>
                    </FadeIn>
                </div>
            </section>

            {/* Discover Us Section */}
            <section className="py-24 bg-white relative">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <FadeIn direction="left" delay={0.2} className="order-2 lg:order-1">
                            <h2 className="font-heading text-4xl font-bold mb-6 text-[var(--color-heading)]">{about.discover.title}</h2>
                            <div className="w-16 h-1 bg-[var(--color-brand-red)] rounded-full mb-8"></div>
                            <p className="text-[var(--color-text)] text-lg leading-relaxed border-l-2 border-[var(--color-brand-red)]/30 pl-6">
                                {about.discover.content}
                            </p>
                        </FadeIn>
                        <FadeIn direction="right" delay={0.4} className="order-1 lg:order-2">
                            <div className="relative rounded-3xl overflow-hidden box-shadow-soft aspect-[4/3]">
                                <img
                                    src="/assets/about-discover.jpg"
                                    alt="Discover IIFTD"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </FadeIn>
                    </div>
                </div>
            </section>

            {/* Founders Message & Foresight */}
            <section className="py-24 bg-[var(--color-brand-red)] relative overflow-hidden">
                <div className="absolute -left-40 top-1/4 w-96 h-96 bg-white/10 blur-[100px] rounded-full pointer-events-none" />
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <FadeIn direction="up" className="text-center mb-16">
                        <span className="text-white text-sm tracking-widest uppercase font-bold">{about.founders.subtitle}</span>
                        <h2 className="font-heading text-4xl font-bold mt-3 text-white">{about.founders.title}</h2>
                    </FadeIn>
                    <FadeIn direction="up" delay={0.2} className="space-y-6 text-white text-lg leading-relaxed text-center mb-20">
                        {about.founders.content.map((paragraph, idx) => (
                            <p key={idx}>{paragraph}</p>
                        ))}
                    </FadeIn>

                    <FadeIn direction="up" delay={0.4}>
                        <div className="relative bg-white rounded-3xl p-10 md:p-16 text-center box-shadow-soft">
                            <Quote size={48} className="text-[#1A1A1A]/20 absolute -top-6 left-1/2 -translate-x-1/2 bg-white px-2" />
                            <h3 className="font-heading text-3xl font-bold mb-6 text-[#1A1A1A]">{about.foresight.title}</h3>
                            <p className="text-xl text-[var(--color-heading)] italic font-light leading-relaxed">
                                "{about.foresight.content}"
                            </p>
                        </div>
                    </FadeIn>
                </div>
            </section>

            {/* About Campus */}
            <section className="py-24 bg-[var(--color-bg-cream)]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <FadeIn direction="left" delay={0.2}>
                            <div className="relative rounded-3xl overflow-hidden box-shadow-soft aspect-[4/3]">
                                <img
                                    src="/assets/campus.jpg"
                                    alt="IIFTD Campus"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </FadeIn>
                        <FadeIn direction="right" delay={0.4}>
                            <span className="text-[var(--color-brand-red)] text-sm tracking-widest uppercase font-bold">Infrastructure</span>
                            <h2 className="font-heading text-4xl font-bold mt-3 mb-6 text-[var(--color-heading)]">{about.campus.title}</h2>
                            <div className="w-16 h-1 bg-[var(--color-brand-red)] rounded-full mb-8"></div>
                            <div className="space-y-6 text-[var(--color-text)] text-lg leading-relaxed">
                                {about.campus.content.map((p, idx) => (
                                    <p key={idx}>{p}</p>
                                ))}
                            </div>
                        </FadeIn>
                    </div>
                </div>
            </section>

            {/* Why Us Reasons */}
            <section className="py-24 bg-white border-t border-gray-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <FadeIn direction="up" className="text-center mb-8">
                        <h2 className="font-heading text-4xl font-bold mb-6 text-[var(--color-heading)]">{about.whyUs.title}</h2>
                    </FadeIn>
                    <FadeIn direction="up" delay={0.2} className="max-w-3xl mx-auto text-center mb-16">
                        <p className="text-xl text-[var(--color-text)]">{about.whyUs.intro}</p>
                    </FadeIn>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {about.whyUs.reasons.map((reason, idx) => (
                            <FadeIn key={idx} direction="up" delay={0.1 * (idx % 4)}>
                                <div className="flex gap-4 p-6 rounded-2xl bg-white box-shadow-soft border border-gray-100 hover:border-[var(--color-brand-red)] transition-colors h-full">
                                    <CheckCircle2 className="text-[var(--color-brand-red)] shrink-0 mt-1" size={24} />
                                    <p className="text-[var(--color-text)] font-medium">{reason}</p>
                                </div>
                            </FadeIn>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
