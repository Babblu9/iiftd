import Link from "next/link";
import { GraduationCap, Globe, Trophy, Scissors, ScrollText, Lightbulb, Clock, Users, Award, Handshake } from "lucide-react";

export default function AboutPage() {
    const stats = [
        { val: "20,000+", label: "Students Trained" },
        { val: "25+", label: "Years of Excellence" },
        { val: "95%", label: "Placement Rate" },
        { val: "50+", label: "Industry Partners" },
    ];

    const pillars = [
        { icon: <GraduationCap size={28} className="text-[#E60000]" />, title: "Industry-Expert Faculty", desc: "Learn from professionals actively working in top fashion houses, design studios, and film productions." },
        { icon: <Globe size={28} className="text-[#E60000]" />, title: "Global Curriculum", desc: "Benchmarked against NIFT, NID, Parsons, and the London College of Fashion." },
        { icon: <Trophy size={28} className="text-[#E60000]" />, title: "Placement Excellence", desc: "95%+ placement with direct tie-ups to brands across India, UAE, and Europe." },
        { icon: <Scissors size={28} className="text-[#E60000]" />, title: "Hands-On Studios", desc: "State-of-the-art design studios, garment labs, makeup rooms, and drafting spaces." },
        { icon: <ScrollText size={28} className="text-[#E60000]" />, title: "Dual Certification", desc: "Earn an IIFTD degree alongside globally recognized industry certifications." },
        { icon: <Lightbulb size={28} className="text-[#E60000]" />, title: "Entrepreneurship Focus", desc: "From boutique management to brand strategy — we help you build your own creative empire." },
    ];

    return (
        <div className="flex flex-col min-h-screen font-body bg-white">

            {/* ── HERO ── */}
            <section className="relative bg-[#E60000] overflow-hidden pt-24 md:pt-0 min-h-[56vh] flex items-end">
                <div className="max-w-7xl mx-auto w-full px-6 lg:px-12 pb-0 grid grid-cols-1 lg:grid-cols-5 items-end gap-0">
                    <div className="lg:col-span-3 pb-12 pt-16 md:pt-20">
                        <p className="text-white/70 text-xs uppercase tracking-widest font-bold mb-4">About IIFTD</p>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight">
                            A place for<br />explorers, experimenters<br />&amp; innovators.
                        </h1>
                    </div>
                    <div className="lg:col-span-2 relative h-64 md:h-[340px] lg:h-[420px] self-end">
                        <div
                            className="absolute inset-0 rounded-t-3xl"
                            style={{
                                backgroundImage: "url(https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80)",
                                backgroundSize: "cover",
                                backgroundPosition: "center top",
                            }}
                        />
                    </div>
                </div>
            </section>

            {/* ── INTRO ── */}
            <section className="py-16 bg-white border-b border-gray-100">
                <div className="max-w-4xl mx-auto px-6 text-center">
                    <p className="text-gray-600 text-lg md:text-xl leading-relaxed">
                        The <strong className="text-[#0B1B3D]">Indian Institute of Fashion Technology &amp; Design (IIFTD)</strong> is one of India's most forward-thinking design institutes. We shape global creative leaders in Fashion Design, Interior Design, Makeup Artistry, and Specialized Design — combining world-class curriculum with real-world execution.
                    </p>
                </div>
            </section>

            {/* ── STATS ── */}
            <section className="py-14 bg-[#0B1B3D]">
                <div className="max-w-7xl mx-auto px-6 lg:px-12">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        {stats.map((s, i) => (
                            <div key={i} className="text-center py-6">
                                <div className="text-4xl md:text-5xl font-extrabold text-[#E60000]">{s.val}</div>
                                <div className="text-white/70 text-sm mt-2 font-medium uppercase tracking-wide">{s.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── WHAT WE DO ── */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-6 lg:px-12">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <span className="text-[#E60000] text-xs uppercase tracking-widest font-bold">What We Do</span>
                            <h2 className="text-4xl md:text-5xl font-extrabold text-[#0B1B3D] mt-3 mb-6 leading-tight">
                                Turning passion into profession
                            </h2>
                            <p className="text-gray-600 text-base leading-relaxed mb-8">
                                At IIFTD, we offer a full suite of creative design programs — from 6-month certificates to 3-year Bachelor's degrees — crafted in collaboration with industry veterans. Every module is designed to give students real-world tools, actual client briefs, and live industry exposure before they graduate.
                            </p>
                            <div className="flex flex-col gap-3">
                                {["Fashion Design", "Interior Design", "Makeup Artistry", "Specialized Programs"].map((c, i) => (
                                    <div key={i} className="flex items-center gap-3">
                                        <div className="w-2 h-2 rounded-full bg-[#E60000] flex-shrink-0" />
                                        <span className="text-gray-700 font-medium">{c}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div
                            className="h-96 rounded-3xl shadow-xl"
                            style={{
                                backgroundImage: "url(https://images.unsplash.com/photo-1509631179647-0177331693ae?w=900&q=80)",
                                backgroundSize: "cover",
                                backgroundPosition: "center",
                            }}
                        />
                    </div>
                </div>
            </section>

            {/* ── OUR BELIEF ── */}
            <section className="py-16 bg-gray-50 border-y border-gray-100">
                <div className="max-w-4xl mx-auto px-6 text-center">
                    <span className="text-[#E60000] text-xs uppercase tracking-widest font-bold">Our Belief</span>
                    <h2 className="text-3xl md:text-4xl font-extrabold text-[#0B1B3D] mt-4 leading-snug">
                        "Everyone has the capacity to be creative —<br className="hidden md:block" /> it's our job to unlock it."
                    </h2>
                </div>
            </section>

            {/* ── MISSION ── */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-6 lg:px-12">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div
                            className="h-96 rounded-3xl shadow-xl order-2 lg:order-1"
                            style={{
                                backgroundImage: "url(https://images.unsplash.com/photo-1427751840561-9852520f8ce8?w=900&q=80)",
                                backgroundSize: "cover",
                                backgroundPosition: "center",
                            }}
                        />
                        <div className="order-1 lg:order-2">
                            <span className="text-[#E60000] text-xs uppercase tracking-widest font-bold">Our Mission</span>
                            <h2 className="text-4xl md:text-5xl font-extrabold text-[#0B1B3D] mt-3 mb-6 leading-tight">
                                Preparing you for the global stage
                            </h2>
                            <p className="text-gray-600 text-base leading-relaxed">
                                Our mission is to prepare students for excellence in global design industries — combining world-class curriculum, industry-experienced faculty, and hands-on studio practice. We expose every student to real-world challenges, industry internships, and global design philosophies, equipping them to lead from day one.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── VISION ── */}
            <section className="py-20 bg-[#0B1B3D]">
                <div className="max-w-7xl mx-auto px-6 lg:px-12">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <span className="text-[#E60000] text-xs uppercase tracking-widest font-bold">Our Vision</span>
                            <h2 className="text-4xl md:text-5xl font-extrabold text-white mt-3 mb-6 leading-tight">
                                India's most globally recognized design school
                            </h2>
                            <p className="text-white/70 text-base leading-relaxed mb-6">
                                We envision IIFTD graduates leading design departments at international fashion houses, interior studios, cinematic productions, and luxury brand management firms across the world.
                            </p>
                            <p className="text-white/70 text-base leading-relaxed">
                                A campus where artistic expression meets entrepreneurial thinking — where students don't just learn design, they learn to shape culture.
                            </p>
                        </div>
                        <div
                            className="h-96 rounded-3xl shadow-xl"
                            style={{
                                backgroundImage: "url(https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=900&q=80)",
                                backgroundSize: "cover",
                                backgroundPosition: "center top",
                            }}
                        />
                    </div>
                </div>
            </section>

            {/* ── WHY IIFTD ── */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-6 lg:px-12">
                    <div className="text-center mb-14">
                        <span className="text-[#E60000] text-xs uppercase tracking-widest font-bold">Why Choose Us</span>
                        <h2 className="text-4xl md:text-5xl font-extrabold text-[#0B1B3D] mt-3">
                            Why <span className="text-[#E60000]">IIFTD?</span>
                        </h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {pillars.map((p, i) => (
                            <div key={i} className="bg-gray-50 rounded-2xl p-8 border border-gray-100 hover:border-[#E60000]/30 hover:shadow-md transition-all group">
                                <div className="mb-4">{p.icon}</div>
                                <h3 className="text-lg font-bold text-[#0B1B3D] mb-2 group-hover:text-[#E60000] transition-colors">{p.title}</h3>
                                <p className="text-gray-500 text-sm leading-relaxed">{p.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── CTA ── */}
            <section className="bg-[#E60000] py-20 text-center relative overflow-hidden">
                <div className="absolute -right-36 -top-36 w-96 h-96 rounded-full bg-white/10 pointer-events-none" />
                <div className="absolute -left-36 -bottom-36 w-96 h-96 rounded-full bg-white/10 pointer-events-none" />
                <div className="relative z-10 max-w-2xl mx-auto px-6">
                    <h2 className="text-4xl md:text-6xl font-extrabold text-white mb-6 leading-tight">
                        Like What You See?
                    </h2>
                    <p className="text-white/80 text-lg mb-10">
                        Talk to our design mentors and find the perfect program for your creative journey.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/contact" className="bg-white text-[#E60000] font-bold rounded-full px-10 py-4 hover:bg-gray-100 transition-colors shadow-lg text-sm tracking-wide">
                            Get In Touch →
                        </Link>
                        <Link href="/admissions" className="border-2 border-white text-white font-bold rounded-full px-10 py-4 hover:bg-white hover:text-[#E60000] transition-colors text-sm tracking-wide">
                            Apply Now
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
