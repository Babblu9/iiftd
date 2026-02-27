"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Clock, CheckCircle2, BookOpen } from "lucide-react";

interface Program {
    name: string;
    duration: string;
    eligibility: string;
    description: string;
    modules: string[];
}

export default function CourseAccordion({ programs }: { programs: Program[] }) {
    const [openIndex, setOpenIndex] = useState<number | null>(0); // First one open by default

    const toggle = (index: number) => {
        if (openIndex === index) setOpenIndex(null);
        else setOpenIndex(index);
    };

    return (
        <div className="flex flex-col gap-4">
            {programs.map((program, i) => {
                const isOpen = openIndex === i;

                return (
                    <div key={i} className={`border transition-colors duration-300 rounded-3xl overflow-hidden ${isOpen ? 'border-[var(--color-brand-red)] bg-[#FDF2EF] shadow-md' : 'border-gray-200 bg-white hover:border-[var(--color-brand-red)]/50'}`}>
                        <button
                            onClick={() => toggle(i)}
                            className="w-full text-left px-8 py-6 flex items-center justify-between focus:outline-none bg-transparent"
                        >
                            <h3 className={`font-heading text-2xl font-bold transition-colors pr-8 ${isOpen ? 'text-[var(--color-brand-red)]' : 'text-[var(--color-heading)]'}`}>
                                {program.name}
                            </h3>
                            <div className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 transition-colors duration-300 ${isOpen ? 'bg-[var(--color-brand-red)] text-white' : 'bg-gray-100 text-gray-500 group-hover:bg-gray-200'}`}>
                                <ChevronDown
                                    className={`transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
                                    size={24}
                                />
                            </div>
                        </button>

                        <AnimatePresence>
                            {isOpen && (
                                <motion.div
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: "auto", opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    transition={{ duration: 0.3, ease: "easeInOut" }}
                                    className="overflow-hidden"
                                >
                                    <div className="px-8 pb-8 pt-2">
                                        <div className="flex flex-wrap gap-4 mb-6">
                                            <div className="flex items-center gap-2 text-[var(--color-text)] font-semibold text-sm bg-white px-5 py-2.5 rounded-full border border-gray-200 shadow-sm">
                                                <Clock size={16} className="text-[var(--color-brand-red)]" />
                                                <span className="text-[var(--color-heading)]">Duration:</span> {program.duration}
                                            </div>
                                            <div className="flex items-center gap-2 text-[var(--color-text)] font-semibold text-sm bg-white px-5 py-2.5 rounded-full border border-gray-200 shadow-sm">
                                                <CheckCircle2 size={16} className="text-[var(--color-brand-red)]" />
                                                <span className="text-[var(--color-heading)]">Eligibility:</span> {program.eligibility}
                                            </div>
                                        </div>

                                        <p className="text-[var(--color-text)] leading-relaxed mb-8 font-medium">
                                            {program.description}
                                        </p>

                                        <div className="bg-white rounded-2xl p-6 border border-[var(--color-brand-red)]/20 shadow-sm">
                                            <h4 className="flex items-center gap-2 text-[#1A1A1A] font-bold mb-4 text-sm uppercase tracking-wider">
                                                <BookOpen size={18} />
                                                Core Modules
                                            </h4>
                                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-6">
                                                {program.modules.map((module, j) => (
                                                    <div key={j} className="flex items-start gap-3 group">
                                                        <div className="w-2 h-2 rounded-full bg-[var(--color-brand-red)]/30 group-hover:bg-[var(--color-brand-red)] mt-1.5 shrink-0 transition-colors" />
                                                        <span className="text-[var(--color-text)] text-sm font-semibold leading-relaxed group-hover:text-[var(--color-heading)] transition-colors">{module}</span>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                );
            })}
        </div>
    );
}
