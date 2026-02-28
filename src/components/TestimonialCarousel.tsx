"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";
import FadeIn from "./FadeIn";

interface Testimonial {
    quote: string;
    name: string;
    role: string;
    rating: number;
}

export default function TestimonialCarousel({ testimonials }: { testimonials: Testimonial[] }) {
    const [currentIndex, setCurrentIndex] = useState(0);

    const next = () => setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    const prev = () => setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

    // Auto-play
    useEffect(() => {
        const timer = setInterval(next, 6000);
        return () => clearInterval(timer);
    }, [next]);

    return (
        <section id="testimonials" className="py-24 bg-gradient-to-r from-[var(--color-brand-red)] to-white/10 backdrop-blur-md relative overflow-hidden z-10">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                <FadeIn className="text-center mb-16">
                    <h2 className="font-heading text-4xl md:text-5xl font-bold text-[var(--color-heading)] mt-3">What Our Students Say</h2>
                </FadeIn>

                <FadeIn delay={0.2} direction="up">
                    <div className="relative bg-white/30 backdrop-blur-lg border border-white/20 rounded-3xl p-8 md:p-16 shadow-lg">
                        <Quote className="absolute top-8 left-8 text-[var(--color-brand-red)]/10 w-16 h-16 md:w-24 md:h-24" />

                        <div className="relative h-[250px] md:h-[200px] flex items-center justify-center">
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={currentIndex}
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -20 }}
                                    transition={{ duration: 0.5 }}
                                    className="text-center absolute w-full px-4 md:px-16"
                                >
                                    <div className="flex justify-center mb-6 gap-1 text-[var(--color-brand-red)]">
                                        {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                                            <Star key={i} size={20} fill="currentColor" />
                                        ))}
                                    </div>
                                    <p className="text-xl md:text-2xl font-body text-[var(--color-heading)] leading-relaxed mb-8 italic font-medium">
                                        "{testimonials[currentIndex].quote}"
                                    </p>
                                    <div>
                                        <h4 className="text-[#1A1A1A] font-bold text-lg tracking-wide">{testimonials[currentIndex].name}</h4>
                                        <p className="text-[var(--color-text)] text-xs uppercase tracking-widest mt-1 font-bold">{testimonials[currentIndex].role}</p>
                                    </div>
                                </motion.div>
                            </AnimatePresence>
                        </div>

                        {/* Navigation Arrows */}
                        <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 flex justify-between px-4 sm:-mx-6 pointer-events-none">
                            <button onClick={prev} className="pointer-events-auto w-12 h-12 rounded-full bg-white shadow-md hover:bg-[var(--color-brand-red)] text-[var(--color-brand-red)] hover:text-white flex items-center justify-center transition-all -translate-x-2 sm:translate-x-0">
                                <ChevronLeft size={24} />
                            </button>
                            <button onClick={next} className="pointer-events-auto w-12 h-12 rounded-full bg-white shadow-md hover:bg-[var(--color-brand-red)] text-[var(--color-brand-red)] hover:text-white flex items-center justify-center transition-all translate-x-2 sm:translate-x-0">
                                <ChevronRight size={24} />
                            </button>
                        </div>

                        {/* Dots indicator */}
                        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
                            {testimonials.map((_, i) => (
                                <button
                                    key={i}
                                    onClick={() => setCurrentIndex(i)}
                                    className={`h-2 rounded-full transition-all duration-300 ${i === currentIndex ? 'bg-[var(--color-brand-red)] w-8' : 'bg-gray-200 hover:bg-gray-300 w-2'}`}
                                />
                            ))}
                        </div>
                    </div>
                </FadeIn>
            </div>
        </section>
    );
}
