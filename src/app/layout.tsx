import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
//import MouseGlow from "../components/MouseGlow"; // We'll move the logic to a separate client component for best practice

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Front-End Developer | Portfolio",
  description: "Modern web experiences built with Next.js, TypeScript, and Tailwind CSS.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-brand-background text-slate-200 antialiased selection:bg-brand-primary/30`}>
        {/* Interactive background effect */}
        {/*<MouseGlow />*/}
        
        {/* Global Navigation */}
        <Navbar />
        
        {/* Main Content Area */}
        <main className="min-h-screen pt-20">
          {children}
        </main>
        
        {/* Global Footer */}
        <Footer />
      </body>
    </html>
  );
}