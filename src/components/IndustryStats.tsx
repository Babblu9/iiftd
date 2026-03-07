import React from 'react';
import FadeIn from './FadeIn';
import { TrendingUp, Award, Globe, Briefcase } from 'lucide-react';

const stats = [
    { value: "$2.4T", label: "Global Fashion Market", icon: Globe },
    { value: "₹20K Cr", label: "Indian Market", icon: TrendingUp },
    { value: "Rapid", label: "Retail Expansion", icon: Briefcase },
    { value: "High", label: "Demand for Pros", icon: Award }
];

export default function IndustryStats() {
    return (
        <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <FadeIn direction="up" className="text-center mb-16">
                    <div className="inline-block px-6 py-3 bg-gradient-to-r from-[#0B1B3D] via-[#1a237e] to-[#D81B60] rounded-2xl mb-6">
                        <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-white">
                            The Future of Fashion & Design
                        </h2>
                    </div>
                    <p className="text-lg text-[var(--color-text)] max-w-2xl mx-auto">
                        The design industry is experiencing unprecedented growth. Position yourself at the forefront of a booming global economy.
                    </p>
                </FadeIn>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    {stats.map((stat, i) => {
                        const Icon = stat.icon;
                        return (
                            <FadeIn key={i} delay={0.1 * i} direction="up">
                                <div className="p-8 rounded-3xl bg-[var(--color-bg-cream)] box-shadow-soft border border-gray-100 flex flex-col items-center text-center group hover:-translate-y-2 transition-transform duration-300">
                                    <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center text-[var(--color-brand-pink)] mb-6 shadow-sm group-hover:scale-110 transition-transform">
                                        <Icon size={28} />
                                    </div>
                                    <h3 className="font-heading text-3xl font-bold text-[var(--color-heading)] mb-2">
                                        {stat.value}
                                    </h3>
                                    <p className="text-sm font-bold text-[var(--color-text)] uppercase tracking-wider">
                                        {stat.label}
                                    </p>
                                </div>
                            </FadeIn>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
