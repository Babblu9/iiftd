import Link from "next/link";
import { Facebook, Instagram, Twitter, Linkedin, MapPin, Mail, Phone, Zap } from "lucide-react";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-black pt-24 pb-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

                    {/* Brand Col */}
                    <div className="flex flex-col gap-6">
                        <div className="flex gap-4 mb-4">
                            <SocialLink href="#" icon={<Facebook size={18} fill="currentColor" />} />
                            <SocialLink href="#" icon={<Instagram size={18} />} />
                            <SocialLink href="#" icon={<Twitter size={18} fill="currentColor" />} />
                            <SocialLink href="#" icon={<Linkedin size={18} fill="currentColor" />} />
                        </div>
                        <p className="text-gray-400 leading-relaxed text-sm pr-4">
                            IIFTD fosters a dynamic creative culture, shaping future-ready professionals in fashion, interior, textile, and luxury brand management.
                        </p>
                        <Link href="/contact" className="btn-primary self-start mt-4 gap-2">
                            Join the Culture <Zap size={16} fill="currentColor" />
                        </Link>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-2xl font-heading text-white mb-6">
                            Browse
                        </h4>
                        <ul className="flex flex-col gap-3">
                            <FooterLink href="/">Home</FooterLink>
                            <FooterLink href="/about">About Us</FooterLink>
                            <FooterLink href="/admissions/process">Admissions</FooterLink>
                            <FooterLink href="/life">Culture</FooterLink>
                            <FooterLink href="/gallery">Events</FooterLink>
                        </ul>
                    </div>

                    {/* Top Courses */}
                    <div>
                        <h4 className="text-2xl font-heading text-white mb-6">
                            Courses
                        </h4>
                        <ul className="flex flex-col gap-3">
                            <FooterLink href="/courses/fashion-design">Fashion Design</FooterLink>
                            <FooterLink href="/courses/interior-design">Interior Design</FooterLink>
                            <FooterLink href="/courses/textile-design">Textile Design</FooterLink>
                            <FooterLink href="/courses/luxury-brand-management">Luxury Brand Mgt</FooterLink>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="text-2xl font-heading text-white mb-6">
                            Information
                        </h4>
                        <ul className="flex flex-col gap-4 text-gray-400 text-sm">
                            <li className="flex gap-3 items-start">
                                <MapPin size={18} className="text-[var(--color-brand-red)] shrink-0 mt-0.5" />
                                <span>Plush Kukatpally,<br />Hyderabad, India</span>
                            </li>
                            <li className="flex gap-3 items-center">
                                <Mail size={18} className="text-[var(--color-brand-red)] shrink-0" />
                                <span>info@iiftd.in</span>
                            </li>
                            <li className="flex gap-3 items-center">
                                <Phone size={18} className="text-[var(--color-brand-red)] shrink-0" />
                                <span>+91 XXXXX XXXXX</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500 font-medium">
                    <p>&copy; {currentYear} IIFTD. Designed with Passion.</p>
                    <div className="flex gap-6">
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
            className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-[var(--color-brand-red)] hover:scale-110 transition-all duration-300"
        >
            {icon}
        </Link>
    );
}

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
    return (
        <li>
            <Link href={href} className="text-gray-400 text-sm font-medium hover:text-[var(--color-brand-red)] transition-colors flex items-center gap-2 group">
                <span className="w-1.5 h-1.5 rounded-full bg-transparent group-hover:bg-[var(--color-brand-red)] transition-colors"></span>
                {children}
            </Link>
        </li>
    );
}
