'use client';

import { motion } from 'framer-motion';

export default function Footer() {
    return (
        <footer className="py-40 bg-black border-t border-white/5 relative overflow-hidden">
            <div className="container max-w-5xl mx-auto px-6 text-center relative z-10">
                <div className="space-y-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="space-y-6"
                    >
                        <h2 className="text-6xl md:text-9xl font-serif font-black text-white tracking-tighter">
                            Nidhin <span className="shimmer-text italic font-light">&</span> Anagha
                        </h2>
                        <div className="flex justify-center gap-12 text-[11px] uppercase tracking-[1em] text-accent font-black">
                            <span>06 · 04 · 2026</span>
                        </div>
                    </motion.div>

                    <div className="flex flex-col items-center gap-12">
                        <div className="w-[1px] h-24 bg-gradient-to-b from-accent/50 to-transparent" />
                        <p className="text-gray-500 text-[11px] uppercase tracking-[0.6em] font-medium max-w-sm leading-loose">
                            Celebrating the union of two souls in the heart of Makkiyad HOLY FACE auditorium.
                        </p>
                    </div>

                    <div className="pt-24 border-t border-white/5 opacity-20">
                        <p className="text-white text-[9px] uppercase tracking-[1.2em] font-light">
                            Crafted for eternity
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}
