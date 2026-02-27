import React from 'react';
import FadeIn from './FadeIn';
import { Target, TrendingUp, Users, Building2 } from 'lucide-react';

export default function PlacementSection() {
    const stats = [
        { label: "Placement Rate", value: "100%", icon: TrendingUp },
        { label: "Hiring Partners", value: "50+", icon: Building2 },
        { label: "Industry Mentors", value: "25+", icon: Users },
        { label: "Live Projects", value: "Countless", icon: Target }
    ];

    return (
        <section className="py-24 bg-white border-t border-gray-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row gap-16 items-center">

                    <FadeIn direction="left" className="lg:w-1/2">
                        <span className="text-[var(--color-brand-red)] text-sm tracking-widest uppercase font-bold">Career First Approach</span>
                        <h2 className="font-heading text-4xl md:text-5xl font-bold text-[var(--color-heading)] mt-4 mb-6">
                            Dedicated Placement Cell
                        </h2>
                        <div className="w-16 h-1 bg-[var(--color-brand-red)] rounded-full mb-8"></div>
                        <p className="text-lg text-[var(--color-text)] mb-6 leading-relaxed">
                            At IIFTD, your education culminates in a tangible career path. Our dedicated placement cell works tirelessly to bridge the gap between our creative talent and top industry recruiters.
                        </p>
                        <p className="text-lg text-[var(--color-text)] mb-8 leading-relaxed">
                            We don't just provide job assistance; we offer comprehensive career development including portfolio clinics, mock interviews, and guaranteed internships with leading design houses and corporate brands.
                        </p>
                        <div className="grid grid-cols-2 gap-8 mt-12 bg-[var(--color-bg-cream)] p-8 rounded-3xl border border-gray-100">
                            {stats.map((stat, idx) => {
                                const Icon = stat.icon;
                                return (
                                    <div key={idx} className="flex gap-4">
                                        <div className="text-[var(--color-brand-red)] shrink-0">
                                            <Icon size={24} />
                                        </div>
                                        <div>
                                            <h4 className="font-heading font-bold text-3xl text-[var(--color-heading)]">{stat.value}</h4>
                                            <p className="text-sm font-bold text-[var(--color-text)] uppercase tracking-wider">{stat.label}</p>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </FadeIn>

                    <FadeIn direction="right" delay={0.2} className="lg:w-1/2 relative">
                        <div className="grid grid-cols-2 gap-4">
                            <img src="/assets/hero.jpg" alt="Student Presentation" className="rounded-2xl object-cover h-64 w-full shadow-lg" />
                            <img src="/assets/interior.jpg" alt="Industry Visit" className="rounded-2xl object-cover h-64 w-full shadow-lg mt-12" />
                        </div>
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[var(--color-brand-red)] text-white p-6 rounded-full shadow-xl text-center w-36 h-36 flex flex-col justify-center items-center border-[6px] border-white">
                            <span className="font-heading text-3xl font-bold block mb-1">Top</span>
                            <span className="text-xs font-bold uppercase tracking-wider border-t border-white/30 pt-1">Recruiters</span>
                        </div>
                    </FadeIn>
                </div>
            </div>
        </section>
    );
}
