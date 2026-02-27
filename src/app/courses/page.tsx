import { siteData } from "@/lib/data";
import Link from "next/link";
import FadeIn from "@/components/FadeIn";
import { ArrowRight } from "lucide-react";

export default function CoursesPage() {
    const { courses } = siteData;

    // Define specific gradients for the overlay based on the course ID
    const getGradientForCourse = (id: string) => {
        switch (id) {
            case 'fashion-design':
                return 'from-purple-600/60 via-purple-500/20 to-transparent';
            case 'interior-design':
                return 'from-teal-600/60 via-teal-500/20 to-transparent';
            case 'textile-design':
                return 'from-orange-600/60 via-orange-500/20 to-transparent';
            case 'luxury-brand-management':
                return 'from-blue-600/60 via-blue-500/20 to-transparent';
            case 'art-and-craft':
                return 'from-pink-600/60 via-pink-500/20 to-transparent';
            case 'boutique-management':
                return 'from-indigo-600/60 via-indigo-500/20 to-transparent';
            default:
                return 'from-[var(--color-brand-red)]/60 to-transparent';
        }
    };

    return (
        <div className="flex flex-col min-h-screen bg-[var(--color-bg-cream)]">
            <section className="pt-32 pb-8 bg-[var(--color-bg-cream)] relative overflow-hidden">
                <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                    <FadeIn direction="up">
                        <span className="text-[var(--color-brand-red)] text-sm tracking-widest uppercase font-bold">Discover Your Passion</span>
                        <h1 className="font-heading text-5xl md:text-6xl mt-4 font-bold text-[var(--color-heading)] mb-4">Career Streams</h1>
                    </FadeIn>
                </div>
            </section>

            <section className="py-8 pb-24 bg-[var(--color-bg-cream)]">
                <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                        {courses.map((course, i) => (
                            <FadeIn key={course.id} delay={0.1 * (i % 2)} direction="up">
                                <Link href={`/courses/${course.id}`} className="group block h-full">
                                    <div className="bg-white rounded-[2rem] overflow-hidden flex flex-col h-full shadow-sm hover:shadow-xl transition-all duration-300">

                                        {/* Large Image Top Half */}
                                        <div className="relative aspect-square sm:aspect-[4/3] w-full overflow-hidden bg-gray-900">
                                            {/* Base Image */}
                                            <img
                                                src={course.image}
                                                alt={course.title}
                                                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out mix-blend-screen opacity-90"
                                            />
                                            {/* Colored Gradient Overlay (Cadence Style) */}
                                            <div className={`absolute inset-0 bg-gradient-to-t ${getGradientForCourse(course.id)}`} />

                                            {/* Inner Text Overlay on Image */}
                                            <div className="absolute inset-0 p-8 flex flex-col justify-end">
                                                <h3 className="font-heading text-3xl md:text-4xl font-bold text-white drop-shadow-md">
                                                    {course.title}
                                                </h3>
                                            </div>
                                        </div>

                                        {/* Solid White Bottom Content */}
                                        <div className="p-8 flex-grow flex flex-col justify-between bg-white">
                                            <p className="text-sm md:text-base text-gray-800 leading-relaxed font-body mb-8 font-medium">
                                                {course.description.length > 150
                                                    ? `${course.description.substring(0, 150)}...`
                                                    : course.description}
                                            </p>

                                            <div className="flex items-center">
                                                <span className="text-xs font-bold text-black border border-gray-300 rounded-full px-5 py-2.5 inline-flex items-center gap-4 group-hover:bg-black group-hover:text-white transition-colors duration-300 uppercase tracking-wider">
                                                    View Details
                                                    <ArrowRight size={16} />
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </FadeIn>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
