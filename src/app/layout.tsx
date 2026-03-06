import type { Metadata } from "next";
import { Wix_Madefor_Display, Wix_Madefor_Text } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const wixDisplay = Wix_Madefor_Display({
  variable: "--font-heading",
  subsets: ["latin"],
});

const wixText = Wix_Madefor_Text({
  variable: "--font-body",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "IIFTD - Indian Institute of Fashion Technology & Design",
  description: "Bridging the gap between purposeful education and productive career.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${wixText.variable} ${wixDisplay.variable} antialiased bg-[var(--color-bg-light)] text-[var(--color-text)]`}
      >
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
