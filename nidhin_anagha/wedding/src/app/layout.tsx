import type { Metadata } from "next";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Preloader from "@/components/Preloader";
import CustomCursor from "@/components/CustomCursor";
import Noise from "@/components/Noise";

export const metadata: Metadata = {
  title: "Nidhin & Anagha | The Wedding",
  description: "Join us in celebrating our eternal union. Monday, April 06, 2026 at Makkiyad HOLY FACE auditorium, Wayanad.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-black text-white selection:bg-accent selection:text-black scroll-smooth">
        <Preloader />
        <CustomCursor />
        <Noise />
        <SmoothScroll>
          <Navbar />
          <main className="min-h-screen">
            {children}
          </main>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
