import { siteData } from "@/lib/data";
import { notFound } from "next/navigation";
import Link from "next/link";
import FadeIn from "@/components/FadeIn";
import { ArrowDown, ArrowLeft, CheckCircle2 } from "lucide-react";
import CourseAccordion from "@/components/CourseAccordion";

export function generateStaticParams() {
    return siteData.courses.map((course) => ({
        id: course.id,
    }));
}

export default async function CourseDetailPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const course = siteData.courses.find((c) => c.id === id);

    if (!course) {
        notFound();
    }

    // Define specific gradients for the overlay based on the course ID
    const getBgColorForCourse = (id: string) => {
        switch (id) {
            case 'fashion-design':
                return 'bg-purple-900/80';
            case 'interior-design':
                return 'bg-teal-600/80';
            case 'textile-design':
                return 'bg-orange-700/80';
            case 'luxury-brand-management':
                return 'bg-blue-800/80';
            case 'art-and-craft':
                return 'bg-pink-700/80';
            case 'boutique-management':
                return 'bg-indigo-800/80';
            default:
                return 'bg-[var(--color-brand-red)]/80';
        }
    };

    const highlights = [
        { title: "Industry Integration", desc: "Our curriculum is designed in collaboration with top industry experts." },
        { title: "Live Projects", desc: "Gain hands-on experience by working on real-world commercial projects." },
        { title: "Global Exposure", desc: "Participate in international workshops and design exhibitions." },
        { title: "Expert Mentorship", desc: "Learn directly from seasoned professionals and celebrated designers." },
        { title: "Placement Support", desc: "100% placement assistance with top design firms and luxury brands." },
        { title: "Modern Studios", desc: "Access state-of-the-art design labs and cutting-edge software tools." },
    ];

    return (
        <div className="flex flex-col min-h-screen bg-[#F2EAE1]">
            {/* 1. Full-Screen Hero */}
            <section className="relative h-[75vh] min-h-[500px] flex flex-col justify-center items-center overflow-hidden">
                <div className="absolute inset-0 w-full h-full bg-black">
                    <img
                        src={`/${course.image}`}
                        alt={course.title}
                        className="absolute inset-0 w-full h-full object-cover mix-blend-screen opacity-60"
                    />
                    {/* Solid Color Overlay */}
                    <div className={`absolute inset-0 ${getBgColorForCourse(course.id)} mix-blend-multiply opacity-90`} />
                </div>

                <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-24">
                    <FadeIn direction="up">
                        <Link href="/courses" className="inline-block text-white/80 hover:text-white text-sm font-bold uppercase tracking-widest mb-8 transition-colors border border-white/30 rounded-full px-6 py-2 backdrop-blur-sm hover:bg-white/10">
                            <ArrowLeft size={16} className="inline mr-2 -mt-0.5" /> Back to Streams
                        </Link>
                        <h1 className="font-heading text-6xl md:text-8xl lg:text-[7rem] font-bold text-white drop-shadow-xl tracking-tight leading-none mb-6">
                            {course.title}
                        </h1>
                    </FadeIn>
                </div>
            </section>

            {/* 2. Course Intro & Statistics */}
            <section className="py-24 bg-[#F2EAE1] relative z-20">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <FadeIn direction="up">
                        <div className="text-center max-w-4xl mx-auto mb-16">
                            <h2 className="font-heading text-3xl md:text-4xl font-bold text-black mb-8 leading-tight">
                                Turn spaces into masterpieces with hands-on training in design principles, material selection, and execution.
                            </h2>
                            <p className="text-lg text-gray-800 leading-relaxed font-body">
                                {course.intro || course.description}
                            </p>

                            <div className="mt-12">
                                <Link href="/contact" className="inline-flex items-center gap-3 bg-black text-white px-8 py-4 rounded-full font-bold text-sm tracking-widest uppercase hover:bg-[var(--color-brand-red)] transition-colors shadow-lg">
                                    Get Brochure <ArrowDown size={18} />
                                </Link>
                            </div>
                        </div>

                        {/* Statistic Cards */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8">
                            <div className="bg-white rounded-[2rem] p-12 text-center shadow-sm hover:shadow-xl transition-shadow duration-300">
                                <h3 className="font-heading text-6xl font-black text-black mb-4">12000+</h3>
                                <p className="text-black font-medium text-lg">Students Passed Out</p>
                            </div>
                            <div className="bg-white rounded-[2rem] p-12 text-center shadow-sm hover:shadow-xl transition-shadow duration-300">
                                <h3 className="font-heading text-6xl font-black text-black mb-4">4+</h3>
                                <p className="text-black font-medium text-lg">Exhibitions Conducted</p>
                            </div>
                            <div className="bg-white rounded-[2rem] p-12 text-center shadow-sm hover:shadow-xl transition-shadow duration-300">
                                <h3 className="font-heading text-6xl font-black text-black mb-4">800+</h3>
                                <p className="text-black font-medium text-lg">Corporate Tie-ups</p>
                            </div>
                        </div>
                    </FadeIn>
                </div>
            </section>

            {/* 3. Key Highlights Grid (Black Background) */}
            <section className="py-24 bg-black text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <FadeIn direction="up">
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                            {/* Features Grid */}
                            <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
                                {highlights.map((item, idx) => (
                                    <div key={idx} className="flex flex-col">
                                        <div className="w-14 h-14 rounded-2xl bg-[var(--color-brand-red)]/20 flex items-center justify-center mb-6 border border-[var(--color-brand-red)]/30">
                                            <CheckCircle2 className="text-[var(--color-brand-red)]" size={28} />
                                        </div>
                                        <h3 className="font-heading text-2xl font-bold text-white mb-3">{item.title}</h3>
                                        <p className="text-white/70 leading-relaxed">{item.desc}</p>
                                    </div>
                                ))}
                            </div>

                            {/* CTA Card */}
                            <div className="lg:col-span-1">
                                <div className="bg-[var(--color-brand-red)] rounded-[2.5rem] p-12 h-full flex flex-col justify-center relative overflow-hidden">
                                    <div className="relative z-10">
                                        <h3 className="font-heading text-4xl font-bold text-white mb-6 leading-tight">Start engaging career.</h3>
                                        <p className="text-white/80 mb-10 text-lg">Join IIFTD and transform your creative potential into professional success in the industry.</p>
                                        <Link href="/contact" className="inline-block bg-white text-black px-8 py-4 rounded-full font-bold text-sm tracking-widest uppercase hover:bg-gray-100 transition-colors shadow-lg">
                                            Enquire Now
                                        </Link>
                                    </div>
                                    {/* Decorative background shape */}
                                    <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
                                </div>
                            </div>
                        </div>
                    </FadeIn>
                </div>
            </section>

            {/* 4. Curriculum & FAQs */}
            <section className="py-32 bg-[#F2EAE1] text-black">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <FadeIn direction="up" className="mb-16">
                        <h2 className="font-heading text-4xl font-bold text-black mb-4">FAQs</h2>
                        <p className="text-gray-600 text-lg">Everything you need to know about the {course.title} program.</p>
                    </FadeIn>

                    <FadeIn direction="up" delay={0.2}>
                        <div className="bg-[#F2EAE1]"> {/* Matches Cadence background style */}
                            <h3 className="font-heading text-2xl font-bold text-black pb-4 mb-4">What will I expect to learn in this course?</h3>
                            <div className="mb-12 bg-[#F2EAE1] rounded-3xl">
                                <CourseAccordion programs={course.programs} />
                            </div>

                            {course.careerOutcomes && (
                                <div className="mt-12 pt-12 border-t border-gray-300">
                                    <h3 className="font-heading text-2xl font-bold text-black mb-6">What career opportunities are available?</h3>
                                    <div className="flex flex-wrap gap-3">
                                        {course.careerOutcomes.map((outcome, idx) => (
                                            <span key={idx} className="bg-white text-black px-5 py-3 rounded-full font-bold text-sm border border-gray-100 shadow-sm">
                                                {outcome}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>
                    </FadeIn>
                </div>
            </section>
        </div>
    );
}
