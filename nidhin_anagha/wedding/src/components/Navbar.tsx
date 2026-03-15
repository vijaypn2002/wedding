'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-700 ${
                scrolled ? 'py-4' : 'py-10'
            }`}
        >
            <div className="container max-w-7xl mx-auto px-4 md:px-6">
                <div className={`relative flex items-center justify-between px-6 md:px-10 py-3 md:py-4 transition-all duration-700 ${
                    scrolled ? 'glass rounded-full shadow-2xl' : ''
                }`}>
                    <Link href="/" className="group flex items-center gap-3">
                        <span className="text-white font-serif text-xl md:text-2xl font-bold tracking-tighter hover:text-accent transition-colors">
                            N <span className="text-accent italic font-light">&</span> A
                        </span>
                    </Link>

                    <div className="hidden md:flex items-center gap-12">
                        {['Programs', 'Directions'].map((item) => (
                            <Link 
                                key={item}
                                href={`#${item.toLowerCase()}`}
                                className="text-[10px] uppercase tracking-[0.4em] text-white/60 hover:text-accent transition-colors font-medium"
                            >
                                {item}
                            </Link>
                        ))}
                    </div>

                    <Link href="#map">
                        <button className="px-5 md:px-8 py-2.5 md:py-3 glass-gold text-accent text-[8px] md:text-[9px] uppercase tracking-widest font-bold rounded-full hover:bg-accent hover:text-black transition-all">
                            Location
                        </button>
                    </Link>
                </div>
            </div>
        </motion.nav>
    );
}
