'use client';

import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="bg-white py-24 border-t border-gray-50">
            <div className="container mx-auto px-6">
                <div className="flex flex-col items-center text-center space-y-12">
                    
                    {/* Brand / Names */}
                    <div className="space-y-4">
                        <Link href="/" className="text-4xl md:text-5xl font-serif font-bold text-gray-900 tracking-tighter">
                            Nidhin <span className="text-natya-gold italic font-light">&</span> Anagha
                        </Link>
                        <p className="text-gray-400 font-light uppercase tracking-[0.4em] text-[10px]">
                            April 6, 2026 &bull; Makkyad, Wayanad
                        </p>
                    </div>

                    {/* Thank You Note */}
                    <div className="max-w-xl">
                        <p className="text-gray-500 font-light text-lg italic serif leading-relaxed">
                            "Your presence at our wedding means the world to us. Thank you for being a part of our journey and for your blessings as we begin our life together."
                        </p>
                    </div>

                    {/* Quick Navigation Links */}
                    <div className="flex flex-wrap justify-center gap-8 md:gap-12">
                        {['Home', 'Our Story', 'Events', 'Location'].map((item) => (
                            <Link 
                                key={item} 
                                href={`#${item.toLowerCase().replace(' ', '')}`}
                                className="text-gray-400 hover:text-natya-gold text-[10px] uppercase font-bold tracking-widest transition-colors"
                            >
                                {item}
                            </Link>
                        ))}
                    </div>

                    <div className="w-16 h-[1px] bg-natya-gold/20" />

                    {/* Copyright */}
                    <div className="text-[10px] uppercase tracking-widest text-gray-400 font-medium">
                        &copy; 2026 Nidhin & Anagha Wedding Invitation. All Rights Reserved.
                    </div>
                </div>
            </div>
        </footer>
    );
}
