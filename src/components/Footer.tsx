import Link from "next/link";
import { Facebook, Instagram, Twitter, Linkedin, MapPin, Mail, Phone, ArrowRight } from "lucide-react";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-[#0B1B3D] pt-24 pb-12 border-t border-white/5">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 xl:gap-16 mb-20">

                    {/* Brand Col */}
                    <div className="flex flex-col gap-8">
                        <div className="flex gap-4">
                            <SocialLink href="#" icon={<Facebook size={18} fill="currentColor" />} />
                            <SocialLink href="#" icon={<Instagram size={18} />} />
                            <SocialLink href="#" icon={<Twitter size={18} fill="currentColor" />} />
                            <SocialLink href="#" icon={<Linkedin size={18} fill="currentColor" />} />
                        </div>
                        <p className="text-gray-400 leading-relaxed text-[15px] font-medium max-w-xs">
                            IIFTD fosters a dynamic creative culture, shaping future-ready professionals in fashion, interior, textile, and luxury brand management.
                        </p>
                        <Link href="/admissions" className="group inline-flex items-center gap-3 bg-[#E60000] text-white px-8 py-3.5 rounded-full font-bold text-sm tracking-widest uppercase hover:bg-white hover:text-[#E60000] transition-all duration-300 shadow-xl shadow-red-900/10">
                            Join the Culture
                            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-xl font-bold text-white mb-8 tracking-wide">
                            Browse
                        </h4>
                        <ul className="flex flex-col gap-4">
                            <FooterLink href="/">Home</FooterLink>
                            <FooterLink href="/about">About Us</FooterLink>
                            <FooterLink href="/admissions">Admissions</FooterLink>
                            <FooterLink href="/gallery">Culture & Events</FooterLink>
                            <FooterLink href="/contact">Contact</FooterLink>
                        </ul>
                    </div>

                    {/* Top Courses */}
                    <div>
                        <h4 className="text-xl font-bold text-white mb-8 tracking-wide">
                            Major Courses
                        </h4>
                        <ul className="flex flex-col gap-4">
                            <FooterLink href="/courses/fashion-design-bachelors">Fashion Design</FooterLink>
                            <FooterLink href="/courses/interior-design-bachelors">Interior Design</FooterLink>
                            <FooterLink href="/courses/luxury-brand-management">Luxury Brand Mgt</FooterLink>
                            <FooterLink href="/courses/cosmetology">Cosmetology</FooterLink>
                            <FooterLink href="/courses">All Programs</FooterLink>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="text-xl font-bold text-white mb-8 tracking-wide">
                            Information
                        </h4>
                        <ul className="flex flex-col gap-6 text-gray-400">
                            <li className="flex gap-4 items-start group">
                                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-[#E60000] shrink-0 group-hover:bg-[#E60000] group-hover:text-white transition-colors">
                                    <MapPin size={18} />
                                </div>
                                <span className="text-sm font-medium leading-relaxed mt-1">
                                    Kukatpally Housing Board Colony,<br />
                                    Phase 1, Hyderabad, TS 500072
                                </span>
                            </li>
                            <li className="flex gap-4 items-center group">
                                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-[#E60000] shrink-0 group-hover:bg-[#E60000] group-hover:text-white transition-colors">
                                    <Mail size={18} />
                                </div>
                                <span className="text-sm font-medium group-hover:text-white transition-colors">info@iiftd.in</span>
                            </li>
                            <li className="flex gap-4 items-center group">
                                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-[#E60000] shrink-0 group-hover:bg-[#E60000] group-hover:text-white transition-colors">
                                    <Phone size={18} />
                                </div>
                                <span className="text-sm font-medium group-hover:text-white transition-colors">+91 91000 00000</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-white/10 pt-10 flex flex-col md:flex-row justify-between items-center gap-6 text-[13px] text-gray-500 font-bold uppercase tracking-widest">
                    <p>&copy; {currentYear} IIFTD. DESIGNED WITH PASSION.</p>
                    <div className="flex gap-8">
                        <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
                        <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}

function SocialLink({ href, icon }: { href: string; icon: React.ReactNode }) {
    return (
        <Link
            href={href}
            className="w-11 h-11 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-[#E60000] hover:border-[#E60000] hover:-translate-y-1 transition-all duration-300 shadow-lg"
        >
            {icon}
        </Link>
    );
}

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
    return (
        <li>
            <Link href={href} className="text-gray-400 text-[15px] font-semibold hover:text-white transition-colors flex items-center gap-3 group">
                <span className="w-1 h-1 rounded-full bg-[#E60000] opacity-0 group-hover:opacity-100 transition-all duration-300 scale-0 group-hover:scale-100"></span>
                {children}
            </Link>
        </li>
    );
}

