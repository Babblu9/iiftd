"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Zap } from "lucide-react";
import { usePathname } from "next/navigation";
import Logo from "./Logo";

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const toggleDropdown = (name: string) => {
        if (activeDropdown === name) setActiveDropdown(null);
        else setActiveDropdown(name);
    };

    // The Admissions page retains a dark hero for now, but Home is light
    const isDarkBgAtTop = pathname === '/admissions';
    const textColorClass = scrolled ? "text-black hover:text-[var(--color-brand-red)]" : (isDarkBgAtTop ? "text-white hover:text-gray-200" : "text-black hover:text-[var(--color-brand-red)]");
    const logoClass = `transition-all duration-300 ${scrolled ? "scale-[0.85] origin-left" : "scale-100 origin-left"} hover:scale-[1.05]`;
    const brandTextClass = scrolled ? "text-black hidden" : "text-black hidden"; // Hidden because the new vector logo is the full brand

    return (
        <header
            className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? "bg-white/90 backdrop-blur-md shadow-sm py-4" : "bg-transparent py-6"
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
                <Link href="/" className="flex items-center gap-4 group">
                    <div className={logoClass}>
                        <Logo />
                    </div>
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden lg:flex items-center gap-8">
                    <Link href="/" className={`font-heading font-semibold text-sm tracking-wide transition-colors ${textColorClass}`}>Home</Link>
                    <Link href="/about" className={`font-heading font-semibold text-sm tracking-wide transition-colors ${textColorClass}`}>About Us</Link>

                    <Link href="/courses" className={`font-heading font-semibold text-sm tracking-wide transition-colors ${textColorClass}`}>Courses</Link>

                    <Link href="/contact" className={`font-heading font-semibold text-sm tracking-wide transition-colors ${textColorClass}`}>Contact Us</Link>
                    <Link href="/contact" className="btn-primary gap-2 !py-2.5 !px-6">
                        Enquire Now <Zap size={16} fill="currentColor" />
                    </Link>
                </nav>

                {/* Mobile Menu Button */}
                <button
                    className="lg:hidden text-black focus:outline-none"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                    {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Menu Drawer */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, x: "100%" }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: "100%" }}
                        transition={{ type: "tween", duration: 0.3 }}
                        className="fixed top-0 right-0 w-4/5 max-w-sm h-screen bg-white border-l border-gray-100 p-6 z-40 overflow-y-auto shadow-2xl"
                    >
                        <div className="flex justify-end mb-8 mt-4">
                            <button className="text-black" onClick={() => setMobileMenuOpen(false)}>
                                <X size={28} />
                            </button>
                        </div>

                        <div className="flex flex-col gap-6">
                            <Link href="/" className="text-lg font-bold text-black tracking-wide" onClick={() => setMobileMenuOpen(false)}>Home</Link>
                            <Link href="/about" className="text-lg font-bold text-black tracking-wide" onClick={() => setMobileMenuOpen(false)}>About Us</Link>

                            <Link href="/courses" className="text-lg font-bold text-black tracking-wide" onClick={() => setMobileMenuOpen(false)}>Courses</Link>

                            <Link href="/contact" className="text-lg font-bold text-black tracking-wide" onClick={() => setMobileMenuOpen(false)}>Contact Us</Link>
                            <Link href="/contact" className="btn-primary w-full mt-4 gap-2" onClick={() => setMobileMenuOpen(false)}>
                                Enquire Now <Zap size={18} fill="currentColor" />
                            </Link>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
            <style jsx>{`
        .nav-item {
          font-family: var(--font-body);
          font-size: 0.95rem;
          color: black;
          font-weight: 600;
          transition: color 0.3s;
          position: relative;
        }
        .nav-item:hover, .group:hover .nav-item {
          color: var(--color-brand-red);
        }
      `}</style>
        </header>
    );
}
