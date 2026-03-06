import { siteData } from "@/lib/data";
import { notFound } from "next/navigation";
import Link from "next/link";
import React from "react";
import { Clock, GraduationCap, Star } from "lucide-react";

export function generateStaticParams() {
    return siteData.courses.map((course) => ({
        id: course.id,
    }));
}

function WavyDivider({ color = "#E60000" }: { color?: string }) {
    return (
        <svg width="80" height="20" viewBox="0 0 80 20" fill="none" className="mb-4">
            <path
                d="M0 10 Q10 0 20 10 Q30 20 40 10 Q50 0 60 10 Q70 20 80 10"
                stroke={color}
                strokeWidth="3"
                fill="none"
                strokeLinecap="round"
            />
        </svg>
    );
}

function getCourseImages(id: string): { hero: string; gallery: string[] } {
    if (id.startsWith("fashion-design")) return {
        hero: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1400&q=80",
        gallery: [
            "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=600&q=80",
            "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=600&q=80",
            "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=600&q=80",
        ],
    };
    if (id.startsWith("interior-design")) return {
        hero: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1400&q=80",
        gallery: [
            "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&q=80",
            "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&q=80",
            "https://images.unsplash.com/photo-1600210492493-0946911123ea?w=600&q=80",
        ],
    };
    if (id.startsWith("makeup-artistry")) return {
        hero: "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=1400&q=80",
        gallery: [
            "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=600&q=80",
            "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=600&q=80",
            "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=600&q=80",
        ],
    };
    if (id === "luxury-brand-management") return {
        hero: "https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=1400&q=80",
        gallery: [
            "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?w=600&q=80",
            "https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?w=600&q=80",
            "https://images.unsplash.com/photo-1445205170230-053b83016050?w=600&q=80",
        ],
    };
    if (id === "garment-manufacturing-fashion-designing") return {
        hero: "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=1400&q=80",
        gallery: [
            "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&q=80",
            "https://images.unsplash.com/photo-1605289982774-9a6fef564df8?w=600&q=80",
            "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?w=600&q=80",
        ],
    };
    if (id === "fashion-styling-communication") return {
        hero: "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=1400&q=80",
        gallery: [
            "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?w=600&q=80",
            "https://images.unsplash.com/photo-1562157873-818bc0726f68?w=600&q=80",
            "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=600&q=80",
        ],
    };
    if (id === "cosmetology") return {
        hero: "https://images.unsplash.com/photo-1552761344-2a2e1a508a29?w=1400&q=80",
        gallery: [
            "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=600&q=80",
            "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=600&q=80",
            "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=600&q=80",
        ],
    };
    return {
        hero: "https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?w=1400&q=80",
        gallery: [
            "https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=600&q=80",
            "https://images.unsplash.com/photo-1530521954074-e64f6810b32d?w=600&q=80",
            "https://images.unsplash.com/photo-1445205170230-053b83016050?w=600&q=80",
        ],
    };
}

function getAccent(id: string) {
    if (id.startsWith("interior-design")) return "#0B1B3D";
    if (id.startsWith("makeup-artistry")) return "#E91E63";
    return "#E60000";
}

const bannerItems = [
    "100% PLACEMENT ASSISTANCE",
    "HANDS-ON PRACTICAL TRAINING",
    "INDUSTRY EXPERT MENTORSHIP",
    "DUAL CERTIFICATION",
    "LIFETIME ALUMNI NETWORK",
];

export default async function CourseDetailPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const course = siteData.courses.find((c) => c.id === id);
    if (!course) notFound();

    const images = getCourseImages(id);
    const accent = getAccent(id);

    const heroBg = id.startsWith("interior-design")
        ? "from-[#EBF4FF] to-[#F5FAFF]"
        : id.startsWith("makeup-artistry")
            ? "from-[#FFF0F5] to-[#FFF8FB]"
            : "from-[#FFF5F5] to-[#FFFAFA]";

    const stats = [
        { value: "20,000+", label: "Students Enrolled" },
        { value: "100%", label: "Placement Support" },
        { value: "25+", label: "Years Excellence" },
        { value: "50+", label: "Industry Partners" },
    ];

    return (
        <div className="flex flex-col min-h-screen font-body">

            {/* 1 ── HERO */}
            <section className={`relative overflow-hidden bg-gradient-to-b ${heroBg} pt-32 pb-16`}>
                {/* faint bg image */}
                <div
                    className="absolute inset-0 opacity-[0.07] pointer-events-none"
                    style={{ backgroundImage: `url(${images.hero})`, backgroundSize: "cover", backgroundPosition: "center" }}
                />
                {/* dot decorations */}
                <div className="absolute top-10 left-8 opacity-20 pointer-events-none select-none">
                    {[...Array(4)].map((_, r) => (
                        <div key={r} className="flex gap-3 mb-3">
                            {[...Array(4)].map((_, c) => (
                                <div key={c} className="w-2 h-2 rounded-full" style={{ backgroundColor: accent }} />
                            ))}
                        </div>
                    ))}
                </div>
                <div className="absolute bottom-6 right-10 opacity-30 pointer-events-none select-none">
                    <svg width="50" height="50" viewBox="0 0 50 50">
                        <polygon points="25,3 48,47 2,47" fill={accent} />
                    </svg>
                </div>

                <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
                    <WavyDivider color={accent} />
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-4">
                        <span className="text-[#0B1B3D]">Master </span>
                        <span style={{ color: accent }}>{course!.title}</span>
                        <span className="text-[#0B1B3D]"> With IIFTD</span>
                    </h1>
                    <p className="text-gray-600 text-lg leading-relaxed max-w-3xl mx-auto mb-8">
                        {course!.intro || course!.description}
                    </p>

                    {course!.programs[0] && (
                        <div className="flex flex-wrap justify-center gap-4 mb-8">
                            <span className="bg-white border rounded-full px-5 py-2 text-sm font-bold shadow-sm flex items-center gap-2" style={{ borderColor: accent, color: accent }}>
                                <Clock size={14} />
                                {course!.programs[0].duration}
                            </span>
                            <span className="bg-white border border-[#0B1B3D] text-[#0B1B3D] rounded-full px-5 py-2 text-sm font-bold shadow-sm flex items-center gap-2">
                                <GraduationCap size={14} />
                                {course!.programs[0].eligibility}
                            </span>
                        </div>
                    )}
                    <Link
                        href="/contact"
                        className="inline-flex items-center gap-2 text-white rounded-full px-8 py-4 font-bold text-sm hover:opacity-90 transition-all shadow-lg"
                        style={{ backgroundColor: accent }}
                    >
                        Enquire Now →
                    </Link>
                </div>
            </section>

            {/* 2 ── SCROLLING BANNER */}
            <div className="bg-[#0B1B3D] rounded-b-3xl overflow-hidden">
                <div className="overflow-hidden py-4">
                    <div
                        className="flex items-center whitespace-nowrap"
                        style={{ animation: "marquee 24s linear infinite", width: "max-content" }}
                    >
                        {[...bannerItems, ...bannerItems].map((text, i) => (
                            <span key={i} className="flex items-center gap-2 text-white font-bold text-xs tracking-widest uppercase px-6">
                                <Star size={10} fill="currentColor" style={{ color: accent }} />
                                {text}
                            </span>
                        ))}
                    </div>
                </div>
            </div>

            {/* 3 ── GALLERY STRIP */}
            <section className="py-12 bg-white">
                <div className="max-w-7xl mx-auto px-6 lg:px-12">
                    <div className="grid grid-cols-3 gap-4">
                        {images.gallery.map((src, i) => (
                            <div
                                key={i}
                                className={`h-64 ${i === 0 ? "rounded-tl-2xl rounded-bl-2xl" : i === 2 ? "rounded-tr-2xl rounded-br-2xl" : "rounded-xl"}`}
                                style={{ backgroundImage: `url(${src})`, backgroundSize: "cover", backgroundPosition: "center" }}
                            />
                        ))}
                    </div>
                </div>
            </section>

            {/* 4 ── CAREER OUTCOMES */}
            <section className="py-16 bg-gray-50">
                <div className="max-w-7xl mx-auto px-6 lg:px-12">
                    <WavyDivider color={accent} />
                    <h2 className="text-3xl md:text-4xl font-extrabold text-[#0B1B3D] mb-4">
                        Career Opportunities
                    </h2>
                    <p className="text-gray-500 mb-8 max-w-2xl">After completing {course!.title}, our graduates thrive in a wide range of exciting roles across the design industry.</p>
                    <div className="flex flex-wrap gap-3">
                        {course!.careerOutcomes?.map((outcome, idx) => (
                            <span
                                key={idx}
                                className="flex items-center gap-2 bg-white border rounded-full px-5 py-2.5 text-sm font-semibold shadow-sm"
                                style={{ borderColor: accent + "44", color: accent }}
                            >
                                <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: accent }} />
                                {outcome}
                            </span>
                        ))}
                    </div>
                </div>
            </section>

            {/* 5 ── CURRICULUM */}
            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-6 lg:px-12">
                    <div className="text-center mb-12">
                        <WavyDivider color={accent} />
                        <h2 className="text-3xl md:text-4xl font-extrabold text-[#0B1B3D] mb-2">
                            Course Curriculum
                        </h2>
                        <p className="text-gray-500 max-w-xl mx-auto text-sm">Industry-backed modules structured for both theoretical depth and hands-on mastery.</p>
                    </div>

                    {course!.programs.map((program, pIdx) => (
                        <div key={pIdx} className={pIdx > 0 ? "mt-12 pt-12 border-t border-dashed border-gray-200" : ""}>
                            {/* Program header */}
                            <div className="flex items-center gap-4 mb-4">
                                <div className="w-10 h-10 rounded-full text-white flex items-center justify-center font-bold text-sm flex-shrink-0" style={{ backgroundColor: accent }}>
                                    {pIdx + 1}
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-[#0B1B3D]">{program.name}</h3>
                                    <p className="text-xs text-gray-500">{program.duration} &middot; {program.eligibility}</p>
                                </div>
                            </div>
                            <p className="text-gray-500 text-sm mb-6 pl-14">{program.description}</p>
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 pl-14">
                                {program.modules.map((module, mIdx) => (
                                    <div key={mIdx} className="flex items-center gap-3 bg-gray-50 rounded-lg px-4 py-3 border border-gray-100">
                                        <div
                                            className="w-5 h-5 rounded-full flex items-center justify-center font-bold text-[10px] flex-shrink-0 text-white"
                                            style={{ backgroundColor: accent }}
                                        >
                                            {mIdx + 1}
                                        </div>
                                        <span className="text-gray-700 font-medium text-sm">{module}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* 6 ── STATS */}
            <section className="bg-[#0B1B3D] py-14">
                <div className="max-w-5xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                    {stats.map((s, i) => (
                        <div key={i}>
                            <div className="text-4xl font-extrabold mb-1" style={{ color: accent }}>{s.value}</div>
                            <div className="text-white/60 text-xs uppercase tracking-wide font-medium">{s.label}</div>
                        </div>
                    ))}
                </div>
            </section>

            {/* 7 ── ENROLL FORM */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-xl mx-auto px-6 text-center">
                    <WavyDivider color={accent} />
                    <h2 className="text-3xl font-extrabold text-[#0B1B3D] mb-3">Ready to Begin?</h2>
                    <p className="text-gray-500 text-sm mb-10">Our advisors will reach out within 24 hours to guide you through the process.</p>
                    <div className="bg-[#0B1B3D] rounded-2xl p-8 text-left shadow-2xl">
                        <h3 className="text-white font-bold text-base mb-5 text-center">Get Free Counselling</h3>
                        <div className="flex flex-col gap-3">
                            <input type="text" placeholder="Your Name" className="w-full bg-white/10 border border-white/20 text-white placeholder:text-white/40 rounded-xl px-4 py-3 text-sm focus:outline-none" />
                            <input type="tel" placeholder="Phone Number" className="w-full bg-white/10 border border-white/20 text-white placeholder:text-white/40 rounded-xl px-4 py-3 text-sm focus:outline-none" />
                            <input type="email" placeholder="Email Address" className="w-full bg-white/10 border border-white/20 text-white placeholder:text-white/40 rounded-xl px-4 py-3 text-sm focus:outline-none" />
                            <button
                                className="w-full text-white font-bold rounded-xl py-3 text-sm tracking-widest uppercase hover:opacity-90 transition-all mt-1"
                                style={{ backgroundColor: accent }}
                            >
                                ENROLL NOW →
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* 8 ── BACK */}
            <div className="bg-white py-6 text-center border-t border-gray-100">
                <Link href="/courses" className="text-sm font-bold hover:underline" style={{ color: accent }}>
                    ← Back to All Courses
                </Link>
            </div>
        </div>
    );
}
