"use client";

import FadeIn from "@/components/FadeIn";
import { MapPin, Phone, Mail } from "lucide-react";

export default function ContactPage() {
    return (
        <div className="flex flex-col min-h-screen bg-[var(--color-bg-light)]">
            <section className="pt-32 pb-16 bg-[var(--color-bg-cream)] relative overflow-hidden border-b border-gray-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                    <FadeIn direction="up">
                        <span className="text-[var(--color-brand-pink)] text-sm tracking-widest uppercase font-bold">Get In Touch</span>
                        <h1 className="font-heading text-5xl md:text-6xl mt-4 font-bold text-[var(--color-heading)] mb-6">Contact Us</h1>
                        <p className="text-xl text-[var(--color-text)] max-w-2xl mx-auto font-medium">Our team is ready to help you take the next step in your creative career.</p>
                    </FadeIn>
                </div>
            </section>

            <section className="py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 rounded-3xl overflow-hidden border border-gray-100 box-shadow-soft bg-white">
                        {/* Contact Info */}
                        <div className="p-12 md:p-16 flex flex-col justify-center bg-[#FDF2EF]">
                            <FadeIn direction="left">
                                <h3 className="font-heading text-3xl font-bold mb-8 text-[var(--color-brand-pink)]">Reach Out</h3>
                                <p className="text-[var(--color-text)] mb-12 text-lg leading-relaxed font-medium">
                                    Have questions about our courses, admissions, or campus? We would love to hear from you.
                                </p>

                                <div className="space-y-8">
                                    <div className="flex gap-6 items-start group">
                                        <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-[var(--color-brand-pink)] group-hover:bg-[var(--color-brand-pink)] group-hover:text-white transition-colors shrink-0 shadow-sm">
                                            <MapPin size={24} />
                                        </div>
                                        <div>
                                            <h4 className="text-[var(--color-heading)] font-bold text-lg mb-1">Location</h4>
                                            <p className="text-[var(--color-text)] font-medium leading-relaxed">Kukatpally Housing Board Colony, Phase 1, Hyderabad, TS 500072</p>
                                        </div>
                                    </div>

                                    <div className="flex gap-6 items-start group">
                                        <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-[var(--color-brand-pink)] group-hover:bg-[var(--color-brand-pink)] group-hover:text-white transition-colors shrink-0 shadow-sm">
                                            <Phone size={24} />
                                        </div>
                                        <div>
                                            <h4 className="text-[var(--color-heading)] font-bold text-lg mb-1">Phone</h4>
                                            <p className="text-[var(--color-text)] font-medium">+91 91000 00000</p>
                                        </div>
                                    </div>

                                    <div className="flex gap-6 items-start group">
                                        <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-[var(--color-brand-pink)] group-hover:bg-[var(--color-brand-pink)] group-hover:text-white transition-colors shrink-0 shadow-sm">
                                            <Mail size={24} />
                                        </div>
                                        <div>
                                            <h4 className="text-[var(--color-heading)] font-bold text-lg mb-1">Email</h4>
                                            <p className="text-[var(--color-text)] font-medium">info@iiftd.in</p>
                                        </div>
                                    </div>
                                </div>
                            </FadeIn>
                        </div>

                        {/* Contact Form */}
                        <div className="bg-white p-12 md:p-16 relative">
                            <FadeIn direction="right" delay={0.2} className="relative z-10 h-full flex flex-col justify-center">
                                <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                                    <div>
                                        <label className="block text-sm font-bold text-[var(--color-heading)] mb-2 uppercase tracking-wider">Your Name</label>
                                        <input
                                            type="text"
                                            className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-[var(--color-heading)] focus:outline-none focus:border-[var(--color-brand-pink)] focus:ring-1 focus:ring-[var(--color-brand-pink)] transition-all font-medium"
                                            placeholder="John Doe"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-bold text-[var(--color-heading)] mb-2 uppercase tracking-wider">Email Address</label>
                                        <input
                                            type="email"
                                            className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-[var(--color-heading)] focus:outline-none focus:border-[var(--color-brand-pink)] focus:ring-1 focus:ring-[var(--color-brand-pink)] transition-all font-medium"
                                            placeholder="john@example.com"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-bold text-[var(--color-heading)] mb-2 uppercase tracking-wider">Phone Number</label>
                                        <input
                                            type="tel"
                                            className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-[var(--color-heading)] focus:outline-none focus:border-[var(--color-brand-pink)] focus:ring-1 focus:ring-[var(--color-brand-pink)] transition-all font-medium"
                                            placeholder="+91 99999 99999"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-bold text-[var(--color-heading)] mb-2 uppercase tracking-wider">Course Interest</label>
                                        <select
                                            className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-[var(--color-heading)] focus:outline-none focus:border-[var(--color-brand-pink)] focus:ring-1 focus:ring-[var(--color-brand-pink)] transition-all appearance-none font-medium"
                                            defaultValue=""
                                        >
                                            <option value="" disabled>Select a Course</option>
                                            <option value="fashion">Fashion Design</option>
                                            <option value="interior">Interior Design</option>
                                            <option value="textile">Textile Design</option>
                                            <option value="luxury">Luxury Brand Management</option>
                                            <option value="art">Art & Craft</option>
                                            <option value="boutique">Boutique Management</option>
                                        </select>
                                    </div>
                                    <div>
                                        <label className="block text-sm font-bold text-[var(--color-heading)] mb-2 uppercase tracking-wider">Message</label>
                                        <textarea
                                            rows={5}
                                            className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-[var(--color-heading)] focus:outline-none focus:border-[var(--color-brand-pink)] focus:ring-1 focus:ring-[var(--color-brand-pink)] transition-all resize-none font-medium"
                                            placeholder="How can we help you?"
                                        ></textarea>
                                    </div>
                                    <button type="button" className="btn-primary w-full mt-4">
                                        <span className="relative z-10">Send Message</span>
                                    </button>
                                </form>
                            </FadeIn>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
