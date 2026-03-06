"use client";
import React, { useState } from 'react';
import FadeIn from "@/components/FadeIn";
import { siteData } from "@/lib/data";
import { Send, CheckCircle2, Shield, TrendingUp, Users, BookOpen } from "lucide-react";
import Link from 'next/link';
import PlacementSection from '@/components/PlacementSection';

export default function AdmissionsPage() {
    const [formData, setFormData] = useState({
        name: '', email: '', phone: '', program: '', course: '', message: ''
    });
    const [status, setStatus] = useState<'idle' | 'sending' | 'success'>('idle');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('sending');
        // Simulate API call
        setTimeout(() => setStatus('success'), 1500);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const benefits = [
        { title: "100% Placement Assistance", desc: "Dedicated career cell for top corporate placements.", icon: TrendingUp },
        { title: "Industry-Aligned Curriculum", desc: "Learn what the market actually demands.", icon: BookOpen },
        { title: "Expert Mentorship", desc: "15:1 faculty ratio with practicing design professionals.", icon: Users },
        { title: "UGC Recognized Degrees", desc: "Accredited programs valid globally.", icon: Shield },
    ];

    return (
        <div className="flex flex-col min-h-screen bg-[var(--color-bg-light)]">

            {/* Highly Conversion-Driven Hero Form Above the Fold */}
            <section className="relative pt-40 pb-20 overflow-hidden bg-[var(--color-brand-dark-blue)]">
                {/* Background Details */}
                <div className="absolute inset-0 bg-[url('/assets/hero.jpg')] bg-cover bg-center mix-blend-overlay opacity-20"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-brand-dark-blue)] to-transparent"></div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                        {/* Hero Text */}
                        <FadeIn direction="up">
                            <div className="inline-block bg-white text-[var(--color-brand-pink)] font-bold text-xs uppercase tracking-wider px-4 py-1.5 rounded-full mb-6">
                                Admissions Open 2026
                            </div>
                            <h1 className="font-heading text-5xl md:text-7xl font-bold text-white leading-tight mb-6">
                                Accelerate Your <br /> Design Career.
                            </h1>
                            <p className="text-xl text-white/90 leading-relaxed max-w-lg mb-8 font-medium">
                                Secure your seat at IIFTD. Fast-track your path into the high-growth fashion and interior design industry with our elite placement-driven programs.
                            </p>

                            <div className="grid grid-cols-2 gap-4 mt-8">
                                {benefits.slice(0, 2).map((b, i) => (
                                    <div key={i} className="flex gap-3 text-white">
                                        <CheckCircle2 className="shrink-0 text-white" size={20} />
                                        <span className="font-bold text-sm">{b.title}</span>
                                    </div>
                                ))}
                            </div>
                        </FadeIn>

                        {/* Top Positioned Lead Gen Form */}
                        <FadeIn direction="left" delay={0.2}>
                            <div className="bg-white rounded-3xl p-8 md:p-10 shadow-2xl">
                                <h2 className="font-heading text-3xl font-bold text-[var(--color-heading)] mb-2">Request Information</h2>
                                <p className="text-[var(--color-text)] text-sm mb-8 font-medium">Limited seats available. Speak to our academic counselor today.</p>

                                {status === 'success' ? (
                                    <div className="bg-[var(--color-brand-pink)]/10 text-[var(--color-brand-pink)] p-8 rounded-2xl flex flex-col items-center justify-center text-center">
                                        <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-4 shadow-sm">
                                            <CheckCircle2 size={32} />
                                        </div>
                                        <h3 className="font-bold text-2xl mb-2">Application Received!</h3>
                                        <p className="text-sm font-medium">Our admissions team will contact you shortly to guide you through the enrollment process.</p>
                                    </div>
                                ) : (
                                    <form onSubmit={handleSubmit} className="space-y-4">
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                            <div className="space-y-1">
                                                <label className="text-xs font-bold text-[var(--color-heading)] uppercase tracking-wider pl-1">Name</label>
                                                <input required type="text" name="name" value={formData.name} onChange={handleChange} className="w-full px-5 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:outline-none focus:border-[var(--color-brand-pink)] transition-colors" placeholder="John Doe" />
                                            </div>
                                            <div className="space-y-1">
                                                <label className="text-xs font-bold text-[var(--color-heading)] uppercase tracking-wider pl-1">Phone</label>
                                                <input required type="tel" name="phone" value={formData.phone} onChange={handleChange} className="w-full px-5 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:outline-none focus:border-[var(--color-brand-pink)] transition-colors" placeholder="+91 90000 00000" />
                                            </div>
                                        </div>

                                        <div className="space-y-1">
                                            <label className="text-xs font-bold text-[var(--color-heading)] uppercase tracking-wider pl-1">Email</label>
                                            <input required type="email" name="email" value={formData.email} onChange={handleChange} className="w-full px-5 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:outline-none focus:border-[var(--color-brand-pink)] transition-colors" placeholder="johndoe@example.com" />
                                        </div>

                                        <div className="space-y-1">
                                            <label className="text-xs font-bold text-[var(--color-heading)] uppercase tracking-wider pl-1">Stream of Interest</label>
                                            <select required name="stream" onChange={handleChange} className="w-full px-5 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:outline-none focus:border-[var(--color-brand-pink)] transition-colors text-[var(--color-text)]">
                                                <option value="">Select Stream</option>
                                                <option value="fashion">Fashion Design</option>
                                                <option value="interior">Interior Design</option>
                                                <option value="luxury">Luxury Brand Management</option>
                                            </select>
                                        </div>

                                        <button
                                            type="submit"
                                            disabled={status === 'sending'}
                                            className="w-full btn-primary flex justify-center py-4 text-lg items-center mt-4"
                                        >
                                            {status === 'sending' ? 'Submitting...' : 'Apply Now'} <Send size={18} className="ml-2" />
                                        </button>
                                        <p className="text-xs text-center text-gray-500 font-medium pt-2">By applying, you agree to our Terms and Privacy Policy.</p>
                                    </form>
                                )}
                            </div>
                        </FadeIn>

                    </div>
                </div>
            </section>

            {/* Why Join Us - Trust Indicators */}
            <section className="py-24 bg-[var(--color-bg-cream)]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <FadeIn direction="up" className="text-center mb-16">
                        <h2 className="font-heading text-4xl font-bold text-[var(--color-heading)] mb-4">Why IIFTD is Your Best Investment</h2>
                        <p className="text-lg text-[var(--color-text)] max-w-2xl mx-auto">We engineer an ecosystem that ensures you graduate as a highly employable corporate professional.</p>
                    </FadeIn>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {benefits.map((benefit, idx) => {
                            const Icon = benefit.icon;
                            return (
                                <FadeIn key={idx} direction="up" delay={0.1 * idx}>
                                    <div className="bg-white p-8 rounded-3xl box-shadow-soft border border-gray-100 flex flex-col items-center text-center h-full hover:-translate-y-2 transition-transform">
                                        <div className="w-16 h-16 rounded-full bg-[var(--color-brand-pink)]/10 text-[var(--color-brand-pink)] flex items-center justify-center mb-6">
                                            <Icon size={28} />
                                        </div>
                                        <h3 className="font-heading font-bold text-xl text-[var(--color-heading)] mb-3">{benefit.title}</h3>
                                        <p className="text-[var(--color-text)] font-medium text-sm leading-relaxed">{benefit.desc}</p>
                                    </div>
                                </FadeIn>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Placements Component */}
            <PlacementSection />

        </div>
    );
}
