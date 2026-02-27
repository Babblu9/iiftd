"use client";
import FadeIn from "./FadeIn";

interface Stat {
    value: string;
    label: string;
}

export default function StatsCounter({ stats }: { stats: Stat[] }) {
    return (
        <section className="py-20 relative z-10 bg-white border-y border-gray-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-gray-200">
                    {stats.map((stat, i) => (
                        <FadeIn key={i} delay={0.1 * i} direction="up" className="px-4">
                            <h3 className="text-4xl md:text-5xl font-heading font-bold text-[var(--color-brand-red)] mb-2 drop-shadow-sm">
                                {stat.value}
                            </h3>
                            <p className="text-[var(--color-text)] font-bold uppercase tracking-wider text-xs md:text-sm">
                                {stat.label}
                            </p>
                        </FadeIn>
                    ))}
                </div>
            </div>
        </section>
    );
}
