"use client";
import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";

interface Testimonial {
    quote: string;
    name: string;
    role: string;
    rating: number;
}

// Avatar initials from name
function Avatar({ name }: { name: string }) {
    const initials = name.split(" ").map(n => n[0]).join("").slice(0, 2).toUpperCase();
    const colors = ["#E60000", "#E91E63", "#0B1B3D", "#D81B60", "#1a237e"];
    const color = colors[name.charCodeAt(0) % colors.length];
    return (
        <div
            className="w-14 h-14 rounded-full flex items-center justify-center text-white font-extrabold text-lg flex-shrink-0 ring-4 ring-white shadow-md"
            style={{ backgroundColor: color }}
        >
            {initials}
        </div>
    );
}

export default function TestimonialCarousel({ testimonials }: { testimonials: Testimonial[] }) {
    const [currentIndex, setCurrentIndex] = useState(0);

    const next = useCallback(() => setCurrentIndex((p) => (p + 1) % testimonials.length), [testimonials.length]);
    const prev = () => setCurrentIndex((p) => (p - 1 + testimonials.length) % testimonials.length);

    useEffect(() => {
        const t = setInterval(next, 6000);
        return () => clearInterval(t);
    }, [next]);

    // Show 3 visible cards (current + 2 adjacent)
    const visible = testimonials.map((t, i) => ({
        ...t,
        idx: i,
        isActive: i === currentIndex,
        isPrev: i === (currentIndex - 1 + testimonials.length) % testimonials.length,
    }));

    return (
        <section id="testimonials" className="py-20 bg-[#0B1B3D] relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full bg-[#E60000]/5 -translate-y-1/2 translate-x-1/4 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[300px] h-[300px] rounded-full bg-white/5 translate-y-1/2 -translate-x-1/4 pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 lg:px-12 relative">
                {/* Header */}
                <div className="text-center mb-14">
                    <p className="text-[#E60000] text-xs uppercase tracking-widest font-bold mb-3">Student Voices</p>
                    <h2 className="text-white text-4xl md:text-5xl font-extrabold leading-tight">
                        What Our Students Say
                    </h2>
                </div>

                {/* Cards grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10 overflow-hidden relative min-h-[400px] md:min-h-0">
                    <AnimatePresence mode="wait">
                        {testimonials.map((t, i) => {
                            const isActive = i === currentIndex;
                            return (
                                <motion.div
                                    key={i}
                                    initial={false}
                                    animate={{
                                        opacity: isActive ? 1 : (typeof window !== 'undefined' && window.innerWidth < 768 ? 0 : 0.45),
                                        scale: isActive ? 1 : (typeof window !== 'undefined' && window.innerWidth < 768 ? 0.9 : 0.95),
                                        y: isActive ? 0 : 12,
                                        display: isActive ? "flex" : (typeof window !== 'undefined' && window.innerWidth < 768 ? "none" : "flex")
                                    }}
                                    transition={{ duration: 0.4 }}
                                    onClick={() => setCurrentIndex(i)}
                                    className={`rounded-2xl p-7 flex flex-col gap-5 cursor-pointer transition-shadow ${isActive
                                        ? "bg-white shadow-2xl ring-2 ring-[#E60000] relative z-20"
                                        : "bg-white/10 backdrop-blur-sm hidden md:flex"
                                        } ${isActive ? "flex" : "hidden md:flex"}`}
                                >
                                    {/* Quote icon */}
                                    <Quote size={28} className={isActive ? "text-[#E60000]" : "text-white/30"} />

                                    {/* Stars */}
                                    <div className="flex gap-1">
                                        {[...Array(t.rating)].map((_, si) => (
                                            <Star
                                                key={si}
                                                size={15}
                                                fill="currentColor"
                                                className={isActive ? "text-[#E60000]" : "text-white/40"}
                                            />
                                        ))}
                                    </div>

                                    {/* Quote text */}
                                    <p className={`text-sm leading-relaxed flex-grow italic ${isActive ? "text-gray-700" : "text-white/60"}`}>
                                        "{t.quote}"
                                    </p>

                                    {/* Author */}
                                    <div className={`flex items-center gap-3 pt-3 border-t ${isActive ? 'border-gray-100' : 'border-white/10'}`}>
                                        <Avatar name={t.name} />
                                        <div>
                                            <p className={`font-bold text-sm ${isActive ? "text-[#0B1B3D]" : "text-white/80"}`}>{t.name}</p>
                                            <p className={`text-xs uppercase tracking-wide font-medium ${isActive ? "text-[#E60000]" : "text-white/40"}`}>{t.role}</p>
                                        </div>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </AnimatePresence>
                </div>

                {/* Nav */}
                <div className="flex items-center justify-center gap-4">
                    <button
                        onClick={prev}
                        className="w-10 h-10 rounded-full border border-white/20 text-white hover:bg-[#E60000] hover:border-[#E60000] flex items-center justify-center transition-all"
                    >
                        <ChevronLeft size={20} />
                    </button>
                    <div className="flex gap-2">
                        {testimonials.map((_, i) => (
                            <button
                                key={i}
                                onClick={() => setCurrentIndex(i)}
                                className={`h-2 rounded-full transition-all duration-300 ${i === currentIndex ? "w-8 bg-[#E60000]" : "w-2 bg-white/30"}`}
                            />
                        ))}
                    </div>
                    <button
                        onClick={next}
                        className="w-10 h-10 rounded-full border border-white/20 text-white hover:bg-[#E60000] hover:border-[#E60000] flex items-center justify-center transition-all"
                    >
                        <ChevronRight size={20} />
                    </button>
                </div>
            </div>
        </section>
    );
}
