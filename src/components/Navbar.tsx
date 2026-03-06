"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone, Mail, Calendar, Facebook, Instagram, Youtube, ChevronDown } from "lucide-react";
import Logo from "./Logo";

export default function Navbar() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

    const toggleDropdown = (name: string) => {
        if (activeDropdown === name) setActiveDropdown(null);
        else setActiveDropdown(name);
    };

    return (
        <header className="w-full z-50 bg-[#F4F4F4]">
            {/* Top Tier: Contact Info */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 flex justify-between items-center">
                <Link href="/" className="flex items-center">
                    <Logo className="h-20 md:h-28 lg:h-32 w-auto scale-110 origin-left" />
                </Link>

                {/* Desktop Contact Info */}
                <div className="hidden lg:flex items-center gap-10">
                    <div className="flex items-center gap-3">
                        <Phone className="text-[var(--color-brand-red)]" size={28} />
                        <div className="flex flex-col">
                            <span className="text-black font-semibold text-sm">+91-9893044522</span>
                            <span className="text-gray-600 text-[11px]">Get in touch</span>
                        </div>
                    </div>
                    <div className="flex items-center gap-3">
                        <Mail className="text-[var(--color-brand-red)]" size={28} />
                        <div className="flex flex-col">
                            <span className="text-black font-semibold text-sm">iiftbhopal123@gmail.com</span>
                            <span className="text-gray-600 text-[11px]">Mail Us</span>
                        </div>
                    </div>
                    {/* Social Icons replacing Mon-Sat */}
                    <div className="flex items-center gap-5 pl-4 border-l border-gray-200">
                        <Link href="#" className="text-[var(--color-brand-red)] hover:scale-110 transition-transform">
                            <Facebook size={22} fill="currentColor" />
                        </Link>
                        <Link href="#" className="text-[var(--color-brand-red)] hover:scale-110 transition-transform">
                            <Instagram size={24} />
                        </Link>
                        <Link href="#" className="text-[var(--color-brand-red)] hover:scale-110 transition-transform">
                            <Youtube size={26} />
                        </Link>
                    </div>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="lg:hidden text-black focus:outline-none"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                    {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Bottom Tier: Navigation Links */}
            <div className="hidden lg:block bg-[var(--color-brand-red)]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-center items-center h-[56px]">
                    <nav className="flex items-center gap-6 lg:gap-8 xl:gap-10 h-full">
                        <Link href="/" className="text-white text-[13px] font-extrabold tracking-wider hover:text-white/80 transition-colors h-full flex items-center uppercase">
                            HOME
                        </Link>

                        <div className="relative group h-full flex items-center">
                            <button className="flex items-center gap-1 text-white text-[13px] font-extrabold tracking-wider hover:text-white/80 transition-colors py-4 uppercase">
                                FASHION DESIGN <ChevronDown size={14} />
                            </button>
                            <div className="absolute top-full left-0 w-64 bg-white shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 flex flex-col pt-2 border-t-2 border-[var(--color-brand-red)]">
                                <Link href="/courses/fashion-design-diploma" className="px-4 py-2 text-sm text-black font-semibold hover:bg-gray-50 hover:text-[var(--color-brand-red)]">Diploma</Link>
                                <Link href="/courses/fashion-design-advance-diploma" className="px-4 py-2 text-sm text-black font-semibold hover:bg-gray-50 hover:text-[var(--color-brand-red)]">Advance Diploma</Link>
                                <Link href="/courses/fashion-design-bachelors" className="px-4 py-2 text-sm text-black font-semibold hover:bg-gray-50 hover:text-[var(--color-brand-red)]">Bachelors</Link>
                                <Link href="/courses/fashion-design-masters" className="px-4 py-2 text-sm text-black font-semibold hover:bg-gray-50 hover:text-[var(--color-brand-red)]">Masters</Link>
                                <Link href="/courses/fashion-design-master-diploma" className="px-4 py-2 text-sm text-black font-semibold hover:bg-gray-50 hover:text-[var(--color-brand-red)]">Master Diploma</Link>
                            </div>
                        </div>

                        <div className="relative group h-full flex items-center">
                            <button className="flex items-center gap-1 text-white text-[13px] font-extrabold tracking-wider hover:text-white/80 transition-colors py-4 uppercase">
                                INTERIOR DESIGN <ChevronDown size={14} />
                            </button>
                            <div className="absolute top-full left-0 w-64 bg-white shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 flex flex-col pt-2 border-t-2 border-[var(--color-brand-red)]">
                                <Link href="/courses/interior-design-diploma" className="px-4 py-2 text-sm text-black font-semibold hover:bg-gray-50 hover:text-[var(--color-brand-red)]">Diploma</Link>
                                <Link href="/courses/interior-design-advance-diploma" className="px-4 py-2 text-sm text-black font-semibold hover:bg-gray-50 hover:text-[var(--color-brand-red)]">Advance Diploma</Link>
                                <Link href="/courses/interior-design-bachelors" className="px-4 py-2 text-sm text-black font-semibold hover:bg-gray-50 hover:text-[var(--color-brand-red)]">Bachelors</Link>
                                <Link href="/courses/interior-design-masters" className="px-4 py-2 text-sm text-black font-semibold hover:bg-gray-50 hover:text-[var(--color-brand-red)]">Masters</Link>
                                <Link href="/courses/interior-design-master-diploma" className="px-4 py-2 text-sm text-black font-semibold hover:bg-gray-50 hover:text-[var(--color-brand-red)]">Master Diploma</Link>
                            </div>
                        </div>

                        <div className="relative group h-full flex items-center">
                            <button className="flex items-center gap-1 text-white text-[13px] font-extrabold tracking-wider hover:text-white/80 transition-colors py-4 uppercase">
                                MAKEUP ARTISTRY <ChevronDown size={14} />
                            </button>
                            <div className="absolute top-full left-0 w-64 bg-white shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 flex flex-col pt-2 border-t-2 border-[var(--color-brand-red)]">
                                <Link href="/courses/makeup-artistry-diploma" className="px-4 py-2 text-sm text-black font-semibold hover:bg-gray-50 hover:text-[var(--color-brand-red)]">Diploma</Link>
                                <Link href="/courses/makeup-artistry-advance-diploma" className="px-4 py-2 text-sm text-black font-semibold hover:bg-gray-50 hover:text-[var(--color-brand-red)]">Advance Diploma</Link>
                                <Link href="/courses/makeup-artistry-bachelors" className="px-4 py-2 text-sm text-black font-semibold hover:bg-gray-50 hover:text-[var(--color-brand-red)]">Bachelors</Link>
                                <Link href="/courses/makeup-artistry-masters" className="px-4 py-2 text-sm text-black font-semibold hover:bg-gray-50 hover:text-[var(--color-brand-red)]">Masters</Link>
                                <Link href="/courses/makeup-artistry-master-diploma" className="px-4 py-2 text-sm text-black font-semibold hover:bg-gray-50 hover:text-[var(--color-brand-red)]">Master Diploma</Link>
                            </div>
                        </div>

                        <div className="relative group h-full flex items-center">
                            <button className="flex items-center gap-1 text-white text-[13px] font-extrabold tracking-wider hover:text-white/80 transition-colors py-4 uppercase">
                                SPECIALIZED COURSES <ChevronDown size={14} />
                            </button>
                            <div className="absolute top-full left-0 w-80 bg-white shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 flex flex-col pt-2 border-t-2 border-[var(--color-brand-red)]">
                                <Link href="/courses/luxury-brand-management" className="px-4 py-2 text-sm text-black font-semibold hover:bg-gray-50 hover:text-[var(--color-brand-red)]">Luxury Brand Management</Link>
                                <Link href="/courses/garment-manufacturing-fashion-designing" className="px-4 py-2 text-sm text-black font-semibold hover:bg-gray-50 hover:text-[var(--color-brand-red)]">Garment Manufacturing and Fashion Designing</Link>
                                <Link href="/courses/fashion-styling-communication" className="px-4 py-2 text-sm text-black font-semibold hover:bg-gray-50 hover:text-[var(--color-brand-red)]">Fashion Styling & Communication</Link>
                                <Link href="/courses/fashion-design-boutique-management" className="px-4 py-2 text-sm text-black font-semibold hover:bg-gray-50 hover:text-[var(--color-brand-red)]">Fashion Design & Boutique Management</Link>
                                <Link href="/courses/cosmetology" className="px-4 py-2 text-sm text-black font-semibold hover:bg-gray-50 hover:text-[var(--color-brand-red)]">Cosmetology</Link>
                            </div>
                        </div>

                        <Link href="/admissions" className="bg-[#1a237e] text-white text-[13px] font-extrabold tracking-wider hover:bg-[#000051] transition-colors h-[36px] px-4 rounded-md flex items-center uppercase shadow-md">
                            ADMISSIONS
                        </Link>

                        <div className="relative group h-full flex items-center">
                            <button className="flex items-center gap-1 text-white text-[13px] font-extrabold tracking-wider hover:text-white/80 transition-colors py-4 uppercase">
                                MORE <ChevronDown size={14} />
                            </button>
                            <div className="absolute top-full right-0 w-48 bg-white shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 flex flex-col pt-2 border-t-2 border-[var(--color-brand-red)]">
                                <Link href="/about" className="px-4 py-2 text-sm text-black font-semibold hover:bg-gray-50 hover:text-[var(--color-brand-red)]">About Us</Link>
                                <Link href="/contact" className="px-4 py-2 text-sm text-black font-semibold hover:bg-gray-50 hover:text-[var(--color-brand-red)]">Contact Us</Link>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>

            {/* Mobile Menu Drawer */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, x: "100%" }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: "100%" }}
                        transition={{ type: "tween", duration: 0.3 }}
                        className="fixed top-0 right-0 w-4/5 max-w-sm h-screen bg-white border-l border-gray-100 p-6 z-50 overflow-y-auto shadow-2xl"
                    >
                        <div className="flex justify-end mb-8 mt-4">
                            <button className="text-black" onClick={() => setMobileMenuOpen(false)}>
                                <X size={28} />
                            </button>
                        </div>

                        <div className="flex flex-col gap-6">
                            <Link href="/" className="text-lg font-bold text-black tracking-wide" onClick={() => setMobileMenuOpen(false)}>HOME</Link>
                            <Link href="/courses/fashion-design" className="text-lg font-bold text-black tracking-wide" onClick={() => setMobileMenuOpen(false)}>FASHION DESIGN</Link>
                            <Link href="/courses/interior-design" className="text-lg font-bold text-black tracking-wide" onClick={() => setMobileMenuOpen(false)}>INTERIOR DESIGN</Link>
                            <Link href="/courses" className="text-lg font-bold text-black tracking-wide" onClick={() => setMobileMenuOpen(false)}>MAKEUP ARTISTRY</Link>
                            <Link href="/courses" className="text-lg font-bold text-black tracking-wide" onClick={() => setMobileMenuOpen(false)}>SPECIALIZED COURSES</Link>
                            <Link href="/about" className="text-lg font-bold text-black tracking-wide" onClick={() => setMobileMenuOpen(false)}>ABOUT US</Link>
                            <Link href="/contact" className="text-lg font-bold text-black tracking-wide" onClick={() => setMobileMenuOpen(false)}>CONTACT US</Link>

                            <div className="h-px bg-gray-200 my-4" />

                            {/* Mobile Contact Info */}
                            <div className="flex flex-col gap-4">
                                <div className="flex items-center gap-3">
                                    <Phone className="text-[var(--color-brand-red)]" size={20} />
                                    <span className="text-black font-medium text-sm">+91-9893044522</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <Mail className="text-[var(--color-brand-red)]" size={20} />
                                    <span className="text-black font-medium text-sm">iiftbhopal123@gmail.com</span>
                                </div>
                            </div>

                            {/* Mobile Social */}
                            <div className="flex items-center gap-4 mt-4">
                                <Link href="#" className="border border-[var(--color-brand-red)] p-1.5 rounded-sm text-black hover:bg-[var(--color-brand-red)] hover:text-white transition-colors">
                                    <Facebook size={20} />
                                </Link>
                                <Link href="#" className="border border-[var(--color-brand-red)] p-1.5 rounded-sm text-black hover:bg-[var(--color-brand-red)] hover:text-white transition-colors">
                                    <Instagram size={20} />
                                </Link>
                                <Link href="#" className="border border-[var(--color-brand-red)] p-1.5 rounded-sm text-black hover:bg-[var(--color-brand-red)] hover:text-white transition-colors">
                                    <Youtube size={20} />
                                </Link>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
